import axios from "axios";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  try {
    const TORRO_API_URL = process.env.TORROSPIN_API_URL;
    const TORRO_API_KEY = process.env.TORROSPIN_API_KEY;
    const workingProviders = [
      "rubyplay",
      "RTG",
      "spribe",
      "Habanero",
      "GMW",
      "veliplay",
      "playngo",
      "EGT",
      "jili",
      "SimplePlay",
      "Pragmatic",
      "vivo",
      "AMARIX",
      "Blue Jack Gaming",
      "DSTPLAY",
      "Wonwon Games",
      "YEEBET LIVE",
      "PLAYSON",
      "Hacksaw Gaming",
      "BOONGO",
      "Aviatrix",
      "Gamzix",
      "BGaming",
      "Platipus",
      "SA Gaming",
      "CQ9",
      "Habanero",
      "betsoft",
      "funtagaming",
      "pixmove",
    ];

    if (!TORRO_API_URL || !TORRO_API_KEY) {
      return NextResponse.json(
        { success: false, message: "Torrospin API not configured" },
        { status: 500 }
      );
    }

    const res = await axios.get(`${TORRO_API_URL}/api/games/providers`, {
      headers: { "x-api-key": TORRO_API_KEY },
      params: {
        status: "active",
        // providers: workingProviders,
      },
    });

    // --- Write providers array to a JSON file ---
    // Use project root in local dev
    // const filePath = path.join(process.cwd(), "providers.json");

    // // Make it async to be safer
    // await fs.promises.writeFile(
    //   filePath,
    //   JSON.stringify(res.data, null, 2),
    //   "utf-8"
    // );

    // console.log("providers.json file created at:", filePath);

    return NextResponse.json({
      success: true,
      total: res.data?.length,
      data: res.data,
    });
  } catch (err) {
    console.error("providers route error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
