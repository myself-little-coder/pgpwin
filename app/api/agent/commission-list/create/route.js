import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Your predefined commission structure
    const COMMISSION_DATA = [
      { deposit: 500, bet: 1250, salary: 93 },
      { deposit: 1000, bet: 2500, salary: 188 },
      { deposit: 5000, bet: 12500, salary: 380 },
      { deposit: 10000, bet: 25000, salary: 766 },
      { deposit: 20000, bet: 50000, salary: 1540 },
    ];

    let created = 0;

    for (const item of COMMISSION_DATA) {
      const exists = await prisma.commissionList.findFirst({
        where: { deposit: item.deposit },
      });

      if (exists) {
        await prisma.commissionList.updateMany({
          where: { deposit: item.deposit },
          data: { salary: item.salary, bet: item.bet },
        });
      } else {
        await prisma.commissionList.create({
          data: {
            deposit: item.deposit,
            bet: item.bet,
            salary: item.salary,
          },
        });
        created++;
      }
      await prisma.commissionList.deleteMany({
        where: { deposit: 40000 },
      });
    }

    return NextResponse.json({
      success: true,
      message: "Commission list seeded successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to seed commission list" },
      { status: 500 }
    );
  }
}
