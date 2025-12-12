import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { hashPassword } from "@/app/lib/auth";
import speakeasy from "speakeasy";

export async function POST(request) {
  try {
    const { phone: rawPhone, otp, newPassword, fp_id } = await request.json();

    // Count form submissions today
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    const now = new Date();
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);

    const todaysCount = await prisma.formSubmissionRecord.count({
      where: {
        fp_id: fp_id,
        ip: ip,
        createdAt: { gte: startOfDay },
      },
    });

    if (todaysCount > 10) {
      return NextResponse.json({
        success: false,
        message:
          "Your form submission limit reached! Please try again tomorrow.",
      });
    }

    await prisma.formSubmissionRecord.create({
      data: {
        req_route: "/api/user/reset-password",
        fp_id: fp_id,
        ip: ip,
      },
    });

    // /////////////

    if (!rawPhone || !otp || !newPassword) {
      return NextResponse.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    let phone = rawPhone.replace(/\s+/g, "");
    if (!phone.startsWith("01") || phone?.length !== 11) {
      return NextResponse.json(
        { success: false, message: "Invalid phone format" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { phone_number: phone },
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "No account found in this number.",
      });
    }

    // find latest matching valid otp
    const otpRecord = await prisma.otpRecord.findFirst({
      where: { phone, otp, used: false },
      orderBy: { createdAt: "desc" },
    });

    if (!otpRecord) {
      if (user.is_2fa_verified) {
        const verified = speakeasy.totp.verify({
          secret: user.two_fa_secret,
          encoding: "base32",
          token: otp,
          window: 1, // allow slight time drift
        });
        if (verified) {
          const hashed = await hashPassword(newPassword);
          await prisma.user.update({
            where: { phone_number: phone },
            data: { password: hashed },
          });
          return NextResponse.json({
            success: true,
            message: "Password Successfully updated.",
          });
        }
      }

      return NextResponse.json(
        { success: false, message: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    // optional: limit OTP validity to e.g. 15 minutes
    const created = otpRecord.createdAt;
    const diffMinutes = (now - created) / (1000 * 60);
    if (diffMinutes > 15) {
      // mark invalid
      await prisma.otpRecord.update({
        where: { id: otpRecord.id },
        data: { used: true },
      });
      return NextResponse.json(
        { success: false, message: "OTP মেয়াদ উত্তীর্ণ হয়েছে" },
        { status: 400 }
      );
    }

    // hash and update user's password
    const hashed = await hashPassword(newPassword);

    await prisma.user.update({
      where: { phone_number: phone },
      data: { password: hashed },
    });

    // invalidate used otp
    await prisma.otpRecord.update({
      where: { id: otpRecord.id },
      data: { used: true },
    });

    return NextResponse.json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error("reset-password error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
