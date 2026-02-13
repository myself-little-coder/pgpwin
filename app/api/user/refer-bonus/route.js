import { getCurrentUser } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const { userId, phoneNumber } = await getCurrentUser();

    if (!userId) {
      return NextResponse.json({
        success: false,
        message: "Unauthorized",
      });
    }

    // Check if user has already claimed
    const existingClaim = await prisma.offerClaimLog.findFirst({
      where: {
        user_id: userId,
        offer_code: "ONE_TIME_REFER_BONUS",
      },
    });

    if (existingClaim) {
      return NextResponse.json({
        success: false,
        claimed: true,
        message: "You have already claimed your referral bonus.",
      });
    }

    // Count referred users with at least one completed deposit
    const referredWithDeposit = await prisma.user.count({
      where: {
        invited_by: String(phoneNumber),
        transactions: {
          some: {
            type: "deposit",
            status: "completed",
          },
        },
      },
    });

    if (referredWithDeposit < 5) {
      return NextResponse.json({
        success: false,
        claimed: false,
        message: `You need at least 5 referred users with deposits to claim. Currently: ${referredWithDeposit}`,
      });
    }

    // Create the claim
    await prisma.offerClaimLog.create({
      data: {
        user_id: userId,
        offer_code: "ONE_TIME_REFER_BONUS",
      },
    });

    await prisma.user.update({
      where: { id: userId },
      data: {
        balance: { increment: 100 },
        turn_over: { increment: 100 },
      },
    });

    return NextResponse.json({
      success: true,
      claimed: true,
      message: "Claim successful!",
    });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({
      success: false,
      claimed: false,
      message: "Internal server error!",
    });
  }
}
