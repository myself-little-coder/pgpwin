import { getCurrentUser } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = await getCurrentUser();

    const unSeenVouchers = await prisma.voucher.count({
      where: {
        collected_by: userId,
        collected: false,
      },
    });

    if (unSeenVouchers > 0) {
      return NextResponse.json({
        success: true,
        unSeenVouchers: true,
        message: "unseen vouchers found",
      });
    }

    return NextResponse.json({
      success: true,
      message: "no un seen vouchers found",
      unSeenVouchers: false,
    });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({
      success: false,
      message: "Internal server error!",
      unSeenVouchers: false,
    });
  }
}
