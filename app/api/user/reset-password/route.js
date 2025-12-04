import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { hashPassword } from "@/app/lib/auth";

export async function POST(request) {
  try {
    const { phone: rawPhone, otp, newPassword } = await request.json();
    if (!rawPhone || !otp || !newPassword) {
      return NextResponse.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    let phone = rawPhone.replace(/\s+/g, "");
    if (phone.startsWith("01")) phone = "88" + phone;
    if (!phone.startsWith("880")) {
      return NextResponse.json(
        { success: false, message: "Invalid phone format" },
        { status: 400 }
      );
    }

    // find latest matching valid otp
    const otpRecord = await prisma.otpRecord.findFirst({
      where: { phone, otp, valid: true },
      orderBy: { createdAt: "desc" },
    });

    if (!otpRecord) {
      return NextResponse.json(
        { success: false, message: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    // optional: limit OTP validity to e.g. 15 minutes
    const created = otpRecord.createdAt;
    const now = new Date();
    const diffMinutes = (now - created) / (1000 * 60);
    if (diffMinutes > 15) {
      // mark invalid
      await prisma.otpRecord.update({
        where: { id: otpRecord.id },
        data: { valid: false },
      });
      return NextResponse.json(
        { success: false, message: "OTP মেয়াদ উত্তীর্ণ হয়েছে" },
        { status: 400 }
      );
    }

    // hash and update user's password
    const hashed = await hashPassword(newPassword);

    const updated = await prisma.user.update({
      where: { phone_number: phone },
      data: { password: hashed },
    });

    // invalidate used otp
    await prisma.otpRecord.update({
      where: { id: otpRecord.id },
      data: { valid: false },
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
