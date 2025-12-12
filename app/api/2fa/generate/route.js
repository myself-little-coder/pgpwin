import speakeasy from "speakeasy";
import QRCode from "qrcode";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser.userId) {
      return NextResponse.json({
        success: false,
        message: "Unauthorized",
      });
    }

    const secret = speakeasy.generateSecret({
      name: "PGP Win",
    });

    const qr = await QRCode.toDataURL(secret.otpauth_url);

    await prisma.user.update({
      where: { id: currentUser.userId },
      data: { two_fa_secret: secret.base32 },
    });

    return NextResponse.json({
      success: true,
      secret: secret.base32,
      qr,
    });
  } catch (error) {
    console.error("Error is:", error?.message);
    return NextResponse.json({
      success: false,
      message: "Internal Server error",
    });
  }
}
