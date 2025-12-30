import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";
import { getCurrentUser } from "@/app/lib/auth";

export async function GET() {
  try {
    const { userId } = await getCurrentUser();

    const bonuses = await prisma.bonusList.findMany({
      orderBy: { createdAt: "asc" },
    });

    const foundDeposit = await prisma.transaction.findFirst({
      where: { user_id: userId, type: "deposit" },
    });

    if (foundDeposit) {
      const filteredBonusList = bonuses.filter((bonus) => {
        return bonus.name !== "Welcome Bonus";
      });

      return NextResponse.json({ success: true, data: filteredBonusList });
    }

    return NextResponse.json({
      success: true,
      data: bonuses,
    });
  } catch (err) {
    console.error("Failed to fetch bonuses", err);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch bonuses",
    });
  }
}
