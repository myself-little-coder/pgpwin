import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const list = await prisma.commissionList.findMany({
      orderBy: { deposit: "asc" },
    });

    return NextResponse.json({
      success: true,
      data: list,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch commission list" },
      { status: 500 }
    );
  }
}
