import { NextResponse } from "next/server";
import { getCurrentUser } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";

/**
 * Get start & end of TODAY (server date based)
 */
function getTodayRange() {
 const now = new Date();

  // Convert to BD time
  const bdNow = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
  );

  const start = new Date(bdNow);
  start.setHours(0, 0, 0, 0);

  const end = new Date(bdNow);
  end.setHours(23, 59, 59, 999);

  console.log("Today Range:", start, end);

  return { start, end };
}

const offer_code = "DAILY_LUCKY_SPIN"

/**
 * GET → Check if user can claim today's spin
 * POST → Claim today's spin
 */

/* -------------------- CHECK -------------------- */
export async function GET() {
  try {
    const { userId } = await getCurrentUser();

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
      );
    }

    const { start, end } = getTodayRange();

    const alreadyClaimed = await prisma.offerClaimLog.findFirst({
      where: {
        user_id: userId,
        offer_code: offer_code,
        createdAt: {
          gte: start,
          lte: end,
        },
      },
    });

    return NextResponse.json({
      success: true,
      canSpin: !alreadyClaimed,
      message: alreadyClaimed
        ? "Today's spin already claimed"
        : "Spin available",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
    );
  }
}

/* -------------------- CLAIM -------------------- */
export async function POST() {
  try {
    const { userId } = await getCurrentUser();

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
      );
    }

    const { start, end } = getTodayRange();

    // 🔒 double-check before creating log
    const alreadyClaimed = await prisma.offerClaimLog.findFirst({
      where: {
        user_id: userId,
        offer_code: offer_code,
        createdAt: {
          gte: start,
          lte: end,
        },
      },
    });

    if (alreadyClaimed) {
      return NextResponse.json(
        { success: false, message: "Today's spin already claimed" },
      );
    }

    // Create claim log

    await prisma.$transaction([
      prisma.user.update({
        where: { id: userId },
        data: { lucky_spin: { increment: 1 } },
      }),
      prisma.offerClaimLog.create({
        data: {
        user_id: userId,
        offer_code: offer_code,
      },
      })
    ])

    return NextResponse.json({
      success: true,
      message: "Daily spin claimed.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
    );
  }
}
