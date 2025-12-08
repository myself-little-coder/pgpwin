import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import axios from "axios";
import crypto from "crypto";

export async function POST(request) {
  try {
    const body = await request.json();
    let { phone } = body;
    if (!phone) {
      return NextResponse.json(
        { success: false, message: "Phone required" },
        { status: 400 }
      );
    }

    // normalize: if starts with 01 -> prepend 88 to make 8801...
    phone = phone.replace(/\s+/g, "");

    if (phone?.length !== 11 || !phone.startsWith("01")) {
      return NextResponse.json(
        { success: false, message: "অবৈধ ফোন নম্বর। ফোন উদাহরণ: 01343XXXXXX" },
        { status: 400 }
      );
    }

    console.log("Normalized phone:", phone);
    // check user exists
    const auser = await prisma.user.findFirst({});
    console.log("User lookup result:", auser);
    const user = await prisma.user.findUnique({
      where: { phone_number: String(phone) },
    });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const now = new Date();

    // count OTPs today
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);

    const todaysCount = await prisma.otpRecord.count({
      where: {
        phone,
        createdAt: { gte: startOfDay },
      },
    });

    const MAX_PER_DAY = 10;
    if (todaysCount >= MAX_PER_DAY) {
      return NextResponse.json(
        {
          success: false,
          message: "আপনি আজ আর OTP পাঠাতে পারবেন না (limit reached)",
        },
        { status: 429 }
      );
    }

    // cooldown: check latest OTP
    const lastOtp = await prisma.otpRecord.findFirst({
      where: { phone },
      orderBy: { createdAt: "desc" },
    });

    if (lastOtp) {
      const diffSeconds = Math.floor((now - lastOtp.createdAt) / 1000);
      const COOLDOWN = 60; // seconds
      if (diffSeconds < COOLDOWN) {
        return NextResponse.json(
          {
            success: false,
            message: `দয়া করে ${
              COOLDOWN - diffSeconds
            } সেকেন্ড পরে চেষ্টা করুন`,
            retryAfter: COOLDOWN - diffSeconds,
            remaining: MAX_PER_DAY - todaysCount,
          },
          { status: 429 }
        );
      }
    }

    // generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // create OtpRecord (phone field will link to user via relation)
    await prisma.otpRecord.create({
      data: {
        phone,
        otp,
        used: false,
      },
    });

    try {
      const API_KEY = process.env.SMS_API_KEY;
      const API_SECRET = process.env.SMS_API_SECRET;
      const API_URL = process.env.SMS_API_URL; // e.g. https://api.laaffic.com/v3

      const timestamp = Math.floor(Date.now() / 1000);

      // Create Sign = MD5(api_key + api_secret + timestamp)
      const raw = `${API_KEY}${API_SECRET}${timestamp}`;
      const sign = crypto.createHash("md5").update(raw).digest("hex");

      const headers = {
        "Content-Type": "application/json;charset=utf-8",
        Sign: sign,
        Timestamp: String(timestamp),
        "Api-Key": API_KEY,
      };

      const url = `${API_URL}`;

      const payload = {
        appId: "Ri0PrKWH", // replace with your appId
        numbers: `88${phone}`,
        content: `Your password reset OTP is: ${otp}. Do not share it with anyone else.`,
        // senderId: "OTP",
        // orderId: "order-" + Date.now(),
      };

      const smsRes = await axios.post(url, payload, { headers });

      console.log("SMS Response:", smsRes.data);
    } catch (smsErr) {
      console.error(
        "SMS send error:",
        smsErr?.response?.data || smsErr.message || smsErr
      );

      return NextResponse.json(
        { success: false, message: "SMS sending failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "OTP পাঠানো হয়েছে",
      remaining: MAX_PER_DAY - (todaysCount + 1),
      cooldown: 60,
    });
  } catch (error) {
    console.error("send-otp error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
