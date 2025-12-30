import { prisma } from "@/app/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    if (body?.secret !== process.env.JWT_SECRET) {
      return NextResponse.json({
        success: false,
        message: "Unauthorized",
      });
    }

    // ------------------------------------
    // Last 24 HOURS
    // ------------------------------------
    const now = new Date();

    const startTime = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago;
    startTime.setUTCHours(0, 0, 0, 0);

    const endTime = now;

    // ------------------------------------
    // SALARY TIERS
    // ------------------------------------
    const salaryTiers = await prisma.commissionList.findMany({
      orderBy: { salary: "asc" },
    });

    console.log("salaryTiers", salaryTiers);

    if (!salaryTiers.length) {
      return NextResponse.json({
        success: true,
        message: "No salary tiers configured",
      });
    }

    // ------------------------------------
    // ALL USERS
    // ------------------------------------
    const users = await prisma.user.findMany({
      select: {
        id: true,
        phone_number: true,
      },
    });

    for (const user of users) {
      // ------------------------------------
      // REFERRED USERS
      // ------------------------------------
      const referredUsers = await prisma.user.findMany({
        where: { invited_by: user.phone_number },
        select: { id: true },
      });

      if (!referredUsers.length) continue;
      const refIds = referredUsers.map((u) => u.id);

      // ------------------------------------
      // DAILY REFERRED DEPOSIT
      // ------------------------------------
      const depositAgg = await prisma.transaction.aggregate({
        _sum: { amount: true },
        where: {
          user_id: { in: refIds },
          type: "deposit",
          status: "completed",
          createdAt: { gte: startTime, lt: endTime },
        },
      });

      // ------------------------------------
      // DAILY REFERRED BET
      // ------------------------------------
      const betAgg = await prisma.gameTransaction.aggregate({
        _sum: { amount: true },
        where: {
          user_id: { in: refIds },
          type: "BET",
          createdAt: { gte: startTime, lt: endTime },
        },
      });

      const totalDeposit = Number(depositAgg._sum.amount || 0);
      const totalBet = Number(betAgg._sum.amount || 0);

      // ------------------------------------
      // SALARY ELIGIBILITY
      // ------------------------------------
      const eligibleTiers = salaryTiers.filter(
        (t) => totalDeposit >= Number(t.deposit) && totalBet >= Number(t.bet)
      );

      if (!eligibleTiers.length) continue;
      const selectedTier = eligibleTiers[eligibleTiers.length - 1];

      // ------------------------------------
      // DAILY USER PROFIT / LOSS
      // ------------------------------------
      const betLossAgg = await prisma.gameTransaction.aggregate({
        _sum: { amount: true },
        where: {
          user_id: user.id,
          type: "BET",
          createdAt: { gte: startTime, lt: endTime },
        },
      });

      const betWinAgg = await prisma.gameTransaction.aggregate({
        _sum: { amount: true },
        where: {
          user_id: user.id,
          type: "WIN",
          createdAt: { gte: startTime, lt: endTime },
        },
      });

      const betLoss = Number(betLossAgg._sum.amount || 0);
      const betWin = Number(betWinAgg._sum.amount || 0);
      const lossAmount = Math.max(0, betLoss - betWin);

      const bonusAmount =
        lossAmount >= 100 ? Number((lossAmount * 0.033).toFixed(2)) : 0;

      // ------------------------------------
      // ATOMIC TRANSACTION PER USER
      // ------------------------------------
      await prisma.$transaction(async (tx) => {
        // Prevent duplicate salary (best possible without schema change)
        const salaryExists = await tx.transaction.findFirst({
          where: {
            user_id: user.id,
            type: "salary",
            createdAt: { gte: startTime, lt: endTime },
          },
        });

        if (salaryExists) return;

        // BONUS (if any)
        if (bonusAmount > 0) {
          await tx.transaction.create({
            data: {
              user_id: user.id,
              type: "bonus",
              amount: new Prisma.Decimal(bonusAmount),
              status: "completed",
            },
          });

          await tx.user.update({
            where: { id: user.id },
            data: {
              balance: { increment: new Prisma.Decimal(bonusAmount) },
              turn_over: { increment: new Prisma.Decimal(bonusAmount) },
            },
          });
        }

        // SALARY
        await tx.transaction.create({
          data: {
            user_id: user.id,
            type: "salary",
            amount: selectedTier.salary,
            status: "completed",
          },
        });

        await tx.user.update({
          where: { id: user.id },
          data: {
            balance: { increment: selectedTier.salary },
            turn_over: { increment: selectedTier.salary },
          },
        });
      });
    }

    return NextResponse.json({
      success: true,
      message: "Daily salary processed successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
