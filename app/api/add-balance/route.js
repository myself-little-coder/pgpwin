import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const result = await prisma.user.update({
      where: { phone_number: "01317488951" },
      data: { balance: 500, turn_over: 0 },
    });

    return NextResponse.json({
      success: false,
      message: "success!",
    });
  } catch (error) {
    console.error(error?.message);
    return NextResponse.json({
      success: false,
      message: "something went wrong!",
    });
  }
};
