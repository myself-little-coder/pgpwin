import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await prisma.user.update({
      where: { phone_number: "01317488951" },
      data: { lucky_spin: 10 },
    });

    return NextResponse.json({
      success: true,
      message: "lucky spins set to 10",
    });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ success: false, message: error?.message });
  }
}
