import { getCurrentUser } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

const prizes = [
  { label: "1.63 TK", color: "fill-blue-500", textColor: "text-black" },
  { label: "10 FS", color: "fill-green-500", textColor: "text-black" },
  { label: "57.33 TK", color: "fill-purple-500", textColor: "text-black" },
  { label: "2 FS", color: "fill-orange-500", textColor: "text-black" },
  { label: "10,000 TK", color: "fill-pink-400", textColor: "text-black" },
  { label: "23.75 TK", color: "fill-blue-500", textColor: "text-black" },
  { label: "37.85 TK", color: "fill-green-500", textColor: "text-black" },
  { label: "766.42 TK", color: "fill-purple-500", textColor: "text-black" },
  { label: "65.88 TK", color: "fill-orange-500", textColor: "text-black" },
  { label: "33.96 TK", color: "fill-pink-500", textColor: "text-black" },
];

export const GET = async (req) => {
  try {
    const { userId } = await getCurrentUser();
    if (!userId) {
      return NextResponse.json({ success: false, message: "Unauthorized" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (user.lucky_spin <= 0) {
      return NextResponse.json({
        success: false,
        message: "Insufficient lucky spins",
      });
    }

    // Randomly select a prize index
    const randomNumber = Math.random();
    const winningIndex =
      randomNumber <= 0.4
        ? 0
        : randomNumber <= 0.6
        ? 2
        : randomNumber <= 0.7
        ? 3
        : randomNumber <= 0.8
        ? 5
        : randomNumber <= 0.9
        ? 8
        : 9; // Example logic for demo purposes

    const winningPrize = prizes[winningIndex];

    const cashPrize = parseFloat(
      winningPrize.label.replace(" TK", "").replace(",", "")
    );

    const freeSpins = parseInt(winningPrize.label.replace(" FS", ""));

    if (winningPrize.label.includes(" FS") && !isNaN(freeSpins)) {
      let finalSpins = freeSpins - 1; // Deduct one spin for playing
      await prisma.user.update({
        where: { id: userId },
        data: { lucky_spin: { increment: finalSpins } },
      });
    } else if (winningPrize.label.includes(" TK") && !isNaN(cashPrize)) {
      await prisma.user.update({
        where: { id: userId },
        data: {
          balance: { increment: cashPrize },
          turn_over: { increment: cashPrize * 2 },
          lucky_spin: { decrement: 1 },
        },
      });
    }

    // Log the lucky spin result
    const savedLuckySpinLog = await prisma.luckySpinLog.create({
      data: {
        user_id: userId,
        prize_label: prizes[winningIndex].label,
        winning_index: String(winningIndex),
      },
    });

    return NextResponse.json({
      success: true,
      index: winningIndex,
      luckySpinId: savedLuckySpinLog.id,
    });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ success: false, message: error?.message });
  }
};
