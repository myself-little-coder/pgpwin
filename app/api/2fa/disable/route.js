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

    await prisma.user.update({
      where: { id: currentUser.userId },
      data: { is_2fa_verified: false },
    });

    return NextResponse.json({
      success: true,
      message: "2FA Disabled!",
    });
  } catch (error) {
    console.error("Error is:", error?.message);
    return NextResponse.json({
      success: false,
      message: "Internal Server error",
    });
  }
}
