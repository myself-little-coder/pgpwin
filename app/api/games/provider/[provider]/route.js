import axios from "axios";
import { NextResponse } from "next/server";

const TORRO_API_URL = process.env.TORROSPIN_API_URL;
const TORRO_API_KEY = process.env.TORROSPIN_API_KEY;

export async function GET(request, { params }) {
  try {
    const { provider } = await params;

    // Parse query parameter
    const url = new URL(request.url);
    const type = url.searchParams.get("type"); // get the "type" query param
    console.log("type :", type);

    if (!provider) {
      return NextResponse.json(
        { success: false, message: "Provider required" },
        { status: 400 }
      );
    }

    if (!TORRO_API_URL || !TORRO_API_KEY) {
      return NextResponse.json(
        { success: false, message: "Torrospin API not configured" },
        { status: 500 }
      );
    }

    const res = await axios.get(`${TORRO_API_URL}/api/games/catalog`, {
      headers: { "x-api-key": TORRO_API_KEY },
      params: {
        status: "active",
        providers: [provider],
        per_page: 500,
        game_type: type ? (type === "others" ? "all" : type) : "all",
      },
    });

    const games = res.data?.data || [];
    return NextResponse.json({ success: true, games });
  } catch (err) {
    console.error("provider route error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
