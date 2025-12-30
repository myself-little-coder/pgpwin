import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // await prisma.bonusList.deleteMany({});
    const allBonuses = [
      {
        name: "Welcome Bonus",
        deposit: 500,
        bonus: 250,
        turn_over: 1000,
      },
      {
        name: "Exclusive Entry",
        deposit: 100,
        bonus: 7,
        turn_over: 150,
      },
      {
        name: "Booster Bonus",
        deposit: 300,
        bonus: 21,
        turn_over: 642,
      },
      {
        name: "Loyalty Reward",
        deposit: 500,
        bonus: 51,
        turn_over: 1100,
      },
      {
        name: "Surprise Bonus",
        deposit: 1000,
        bonus: 101,
        turn_over: 2200,
      },
      {
        name: "VIP Bonus",
        deposit: 10000,
        bonus: 1001,
        turn_over: 22000,
      },
    ];

    for (const bonus of allBonuses) {
      const foundBonus = await prisma.bonusList.findFirst({
        where: { name: bonus.name },
      });
      if (foundBonus) {
        await prisma.bonusList.updateMany({
          where: { name: bonus.name },
          data: bonus,
        });
      } else {
        const savedData = await prisma.bonusList.create({
          data: bonus,
        });
      }
    }
    return NextResponse.json({
      success: true,
      message: "succeed",
    });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({
      success: false,
      message: "something went wrong!",
    });
  }
}
