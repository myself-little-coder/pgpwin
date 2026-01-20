import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    await prisma.user.update({
      where: { phone_number: "01616161616" },
      data: { balance: 20000, turn_over: 200000 },
      // where: { phone_number: "01827087944" },
      // data: { turn_over: 50000 },
    });
    return NextResponse.json({
      success: true,
      message: "action successful",
    });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({
      success: false,
      message: "Internal server error!",
    });
  }
}
