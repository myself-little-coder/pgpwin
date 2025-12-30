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

    const { pay_type, money, returnUrl, bonus_id } = await req.json();
    const { userId } = await getCurrentUser();

    if (!pay_type || !money || !userId) {
      return NextResponse.json({
        success: false,
        message: "Missing required fields",
      });
    }

    const transactionData = await prisma.transaction.create({
      data: {
        amount: Number(money),
        type: "deposit",
        user_id: userId,
        method: pay_type,
      },
    });

    const foundTransaction = await prisma.transaction.findFirst({
      where: { user_id: userId },
    });

    const attachString = bonus_id
      ? bonus_id === 0 && foundTransaction
        ? `${userId}_${transactionData.id}_none`
        : `${userId}_${transactionData.id}_${bonus_id}`
      : `${userId}_${transactionData.id}_none`;

    const params = {
      mchId: OKPAY_MERCHANT_ID,
      currency: "BDT",
      out_trade_no: String(transactionData.id),
      pay_type: pay_type,
      money: String(money),
      attach: attachString,
      notify_url: `${process.env.BASE_URL}/api/payin/okpay/webhook`,
      // notify_url: `https://entity-retro-geology-volvo.trycloudflare.com/api/payin/okpay/webhook`,
      returnUrl: returnUrl,
    };

    const sign = generateSign(params, OKPAY_API_KEY);
    const data = qs.stringify({ ...params, sign });

    const response = await axios.post(`${OKPAY_API_URL}/v1/Collect`, data, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (response.data.code === 0) {
      await prisma.transaction.update({
        where: { id: transactionData.id },
        data: { sign, trx_id: response.data.data?.transaction_Id || "" },
      });
      return NextResponse.json({
        success: true,
        message: response.data.message || "Payin created successfully",
        url: response.data.data?.url,
      });
    }

    await prisma.transaction.update({
      where: { id: transactionData.id },
      data: { sign, trx_id: response.data?.data?.transaction_Id || "" },
    });

    return NextResponse.json({
      success: false,
      message: response.data.message || "Failed to create payin",
    });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
