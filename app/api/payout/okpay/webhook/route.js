import { prisma } from "@/app/lib/prisma";
import crypto from "node:crypto";
import { NextResponse } from "next/server";

// ✅ Verify OKPay sign
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

export async function POST(req) {
  try {
    const OKPAY_API_KEY = process.env.OKPAY_API_KEY;
    const OKPAY_MERCHANT_ID = process.env.OKPAY_MERCHANT_ID;

    // ✅ Read raw body (required for payment webhooks)
    const bodyText = await req.text();
    const params = new URLSearchParams(bodyText);
    const body = Object.fromEntries(params);

    // ✅ Merchant check
    if (body?.mchId !== OKPAY_MERCHANT_ID) {
      return new NextResponse("Invalid mchId", { status: 400 });
    }

    // ✅ Signature check
    if (!verifySign(body, OKPAY_API_KEY)) {
      return new NextResponse("Invalid sign", { status: 400 });
    }

    // ✅ Parse attach safely
    const [userIdStr, trxIdStr] = (body.attach || "").split("_");
    const userId = Number(userIdStr);
    const trxId = Number(trxIdStr);

    if (!Number.isInteger(trxId)) {
      return new NextResponse("Invalid attach", { status: 400 });
    }

    // ✅ Status handling
    if (body.status === "1") {
      const trx = await prisma.transaction.findUnique({
        where: { id: trxId },
      });

      if (trx && trx.status !== "completed") {
        await prisma.transaction.update({
          where: { id: trxId },
          data: { status: "completed" },
        });
      }
    } else if (body.status === "2") {
      await prisma.$transaction([
        prisma.transaction.update({
          where: { id: trxId },
          data: { status: "cancelled" },
        }),
        prisma.user.update({
          where: { id: userId },
          data: { balance: { increment: Number(body.money) } },
        }),
      ]);
    } else if (body.status === "0") {
      await prisma.transaction.update({
        where: { id: trxId },
        data: { status: "pending" },
      });
    }

    // ✅ Webhook must return plain text
    return new NextResponse("success", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    console.error("CREATE-PAYOUT webhook error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
