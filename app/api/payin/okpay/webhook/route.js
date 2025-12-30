import crypto from "node:crypto";
import { NextResponse } from "next/server.js";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "server reachable!",
  });
}

// ✅ Function to verify OKPay sign
function verifySign(body, apiKey) {
  const filtered = Object.keys(body)
    .filter((k) => body[k] !== "" && body[k] !== undefined && k !== "sign")
    .sort()
    .map((k) => `${k}=${body[k]}`)
    .join("&");

  const stringSignTemp = `${filtered}&key=${apiKey}`;
  const expectedSign = crypto
    .createHash("md5")
    .update(stringSignTemp, "utf8")
    .digest("hex")
    .toLowerCase();

  return expectedSign === body.sign;
}

// ✅  route for OKPay webhook

export async function POST(req) {
  try {
    const OKPAY_API_KEY = process.env.OKPAY_API_KEY;
    const OKPAY_MERCHANT_ID = process.env.OKPAY_MERCHANT_ID;

    // const params = new URLSearchParams(req.body);
    // const body = Object.fromEntries(params);

    const bodyText = await req.text(); // read raw body as string
    const params = new URLSearchParams(bodyText);
    const body = Object.fromEntries(params);

    if (body?.mchId !== OKPAY_MERCHANT_ID) {
      console.error("Invalid merchant_id:", body?.mchId);
      //  return res.status(400).json({ code: 400, message: "Invalid merchant_id" });
      return new NextResponse("Invalid merchant_id", {
        status: 400,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }

    if (!verifySign(body, OKPAY_API_KEY)) {
      console.error("Invalid sign! Possible tampering detected.");
      //  return res.status(400).json({ code: 400, message: "Invalid sign" });
      return new NextResponse("Invalid sign", {
        status: 400,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }

    const [userId, transactionId, bonus_id] = body.attach
      .split("_")
      .map(Number);

    if (body?.status === "1") {
      const payMoney = Number(body.pay_money);

      const foundBonus = Number.isInteger(bonus_id)
        ? await prisma.bonusList.findUnique({
            where: { id: bonus_id },
          })
        : null;

      const fetchedUser = await prisma.user.findFirst({
        where: { id: userId },
      });

      const tolerance = 0.02;

      if (
        foundBonus &&
        Math.abs(foundBonus.deposit - payMoney) / foundBonus.deposit <=
          tolerance
      ) {
        const finalBalance = payMoney + Number(foundBonus.bonus);
        await prisma.user.update({
          where: { id: userId },
          data: {
            balance: { increment: finalBalance },
            turn_over:
              fetchedUser.balance <= 50
                ? { set: foundBonus.turn_over }
                : { increment: foundBonus.turn_over },
          },
        });
        await prisma.transaction.update({
          where: { id: transactionId },
          data: { status: "completed" },
        });
        await prisma.transaction.create({
          data: {
            amount: Number(foundBonus.bonus),
            type: "bonus",
            user_id: userId,
            status: "completed",
          },
        });
      } else {
        await prisma.user.update({
          where: { id: userId },
          data: {
            balance: { increment: payMoney },
            turn_over:
              fetchedUser.balance <= 50
                ? { set: payMoney }
                : { increment: payMoney },
          },
        });
        await prisma.transaction.update({
          where: { id: transactionId },
          data: { status: "completed" },
        });
      }

      if (fetchedUser.invited_by) {
        const foundReferrer = await prisma.user.findUnique({
          where: { phone_number: fetchedUser.invited_by },
        });
        if (foundReferrer) {
          const finalCommission = payMoney * 0.02;
          const finalTurnover = finalCommission * 2;
          await prisma.user.update({
            where: { phone_number: foundReferrer.phone_number },
            data: {
              balance: { increment: finalCommission },
              turn_over: { increment: finalTurnover },
            },
          });
          await prisma.transaction.create({
            data: {
              amount: Number(finalCommission),
              type: "commission",
              user_id: foundReferrer.id,
              status: "completed",
            },
          });
        }
      }
    } else if (body?.status === "2") {
      // ✅ Cancelled transaction
      await prisma.transaction.update({
        where: { id: transactionId },
        data: { status: "cancelled" },
      });
    } else if (body?.status === "0") {
      // ✅ Pending transaction
      await prisma.transaction.update({
        where: { id: transactionId },
        data: { status: "pending" },
      });
    }

    return new NextResponse("success", {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    }); // must return plain text
    //  return new NextResponse("success").status(200) // must return plain text
  } catch (error) {
    console.error("Error in OKPay webhook:", error);
    //  res.status(500).json({ code: 500, message: "Internal Server Error" });
    return new NextResponse("Internal Server Error", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
