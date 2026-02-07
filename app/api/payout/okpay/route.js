import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import crypto from "node:crypto";
import axios from "axios";
import qs from "qs";
import { getCurrentUser } from "@/app/lib/auth";

function generateSign(params, apiKey) {
  const filtered = Object.keys(params)
    .filter((k) => params[k] !== "" && params[k] !== undefined && k !== "sign")
    .sort()
    .map((k) => {
      let val = params[k];
      if (typeof val === "object") val = JSON.stringify(val);
      return `${k}=${val}`;
    })
    .join("&");
  const stringSignTemp = `${filtered}&key=${apiKey}`;
  return crypto
    .createHash("md5")
    .update(stringSignTemp, "utf8")
    .digest("hex")
    .toLowerCase();
}

export async function POST(req) {
  try {
    const OKPAY_API_KEY = process.env.OKPAY_API_KEY;
    const OKPAY_MERCHANT_ID = process.env.OKPAY_MERCHANT_ID;
    const OKPAY_API_URL = process.env.OKPAY_API_URL;

    const { pay_type, money, account, userName } = await req.json();
    const { userId } = await getCurrentUser();

    if (!pay_type || !money || !account || !userName || !userId) {
      return NextResponse.json({
        success: false,
        message: "Missing required fields",
      });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user)
      return NextResponse.json({ success: false, message: "User not found" });
    if (user.status == "Suspended") {
      return NextResponse.json({
        success: false,
        message: "Your account is suspended!",
      });
    }
    if (Number(user.balance) < Number(money)) {
      return NextResponse.json({
        success: false,
        message: "Insufficient balance",
      });
    }
    if (Number(user.turn_over) != 0) {
      return NextResponse.json({
        success: false,
        message: "Turn Over incomplete",
      });
    }
    const [trx] = await prisma.$transaction([
      prisma.transaction.create({
        data: {
          amount: Number(money),
          type: "withdraw",
          status: "pending",
          user_id: userId,
          method: pay_type,
        },
      }),
      prisma.user.update({
        where: { id: userId },
        data: { balance: { decrement: Number(money) } },
      }),
    ]);

    const attachValue = `${userId}_${trx.id}`;
    const params = {
      mchId: OKPAY_MERCHANT_ID,
      currency: "BDT",
      out_trade_no: `${transactionData.id}${Date.now()}`,
      pay_type,
      account,
      userName,
      money: String(money),
      attach: attachValue,
      notify_url: `${process.env.BASE_URL}/api/payout/okpay/webhook`,
      // notify_url: `https://entity-retro-geology-volvo.trycloudflare.com/api/payout/okpay/webhook`,
    };

    const sign = generateSign(params, OKPAY_API_KEY);
    const data = qs.stringify({ ...params, sign });

    const response = await axios.post(`${OKPAY_API_URL}/v1/Payout`, data, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (response.data?.code === 0) {
      await prisma.transaction.update({
        where: { id: trx.id },
        data: {
          trx_id: String(response.data?.data?.transaction_Id || ""),
        },
      });
      return NextResponse.json({
        success: true,
        message: "Succeed",
        data: response.data,
      });
    }
    await prisma.transaction.update({
      where: { id: trx.id },
      data: {
        trx_id: String(response.data?.data?.transaction_Id || ""),
      },
    });

    return NextResponse.json({
      success: false,
      data: response.data,
      message: "Something went wrong",
    });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
