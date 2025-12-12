import speakeasy from "speakeasy";
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getCurrentUser } from "@/app/lib/auth";

export async function POST(req) {
  try {
    const { code, isFirstTime, fp_id } = await req.json();
    const currentUser = await getCurrentUser();

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
        req_route: "/api/2fa/verify",
        fp_id: fp_id,
        ip: ip,
      },
    });

    // /////////////

    if (!currentUser.userId) {
      return NextResponse.json({
        success: false,
        message: "Unauthorized",
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: currentUser.userId },
    });

    if (!user.two_fa_secret) {
      return NextResponse.json({
        success: false,
        message: "You haven't set 2fa code yet!",
      });
    }

    const verified = speakeasy.totp.verify({
      secret: user.two_fa_secret,
      encoding: "base32",
      token: code,
      window: 1, // allow slight time drift
    });

    if (verified) {
      if (isFirstTime) {
        await prisma.user.update({
          where: { id: currentUser.userId },
          data: { is_2fa_verified: true },
        });
      }
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({
        success: false,
        message: "Authenticator code mismatch!",
      });
    }
  } catch (error) {
    console.error("error :", error?.message);
    return NextResponse.json({
      success: false,
      message: "Internal server error!",
    });
  }
}
