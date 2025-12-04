import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import axios from "axios";

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

    if (phone?.length !== 11) {
      return NextResponse.json(
        { success: false, message: "Invalid phone number format!" },
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
        valid: true,
      },
    });

    try {
      // send SMS
      const SMS_API_KEY = process.env.SMS_API_KEY;
      // const SMS_USERNAME = process.env.SMS_USERNAME;
      const SMS_API_URL = process.env.SMS_API_URL; // e.g. https://api.sms.net.bd

      const otp_res = await axios.post(SMS_API_URL, {
        api_key: SMS_API_KEY,
        to: phone,
        msg: `Your password reset OTP is: ${otp}. Please do not share it with anyone.`,
      });

      console.log(otp_res.data);
    } catch (smsErr) {
      console.error(
        "SMS send error:",
        smsErr?.response?.data || smsErr.message || smsErr
      );
      // Do not fail the flow if SMS provider fails — still record OTP so user can try again (or you may prefer to rollback)
      return NextResponse.json(
        {
          success: false,
          message: "SMS sending failed",
          error: smsErr.message,
        },
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
