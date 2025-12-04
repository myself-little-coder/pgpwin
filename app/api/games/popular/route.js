import axios from "axios";
import { NextResponse } from "next/server";

const TORRO_API_URL = process.env.TORROSPIN_API_URL;
const TORRO_API_KEY = process.env.TORROSPIN_API_KEY;

// Default popular providers and an internal filter used by the app
const DEFAULT_PROVIDERS = ["jili", "spribe", "Aviatrix", "BOONGO"];

const POPULAR_GAME_CODES = [
  "49_jili",
  "aviator_spribe",
  "77_jili",
  "plinko_spribe",
  "ax_nft_aviatrix_47059",
];

export async function GET(request) {
  try {
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
        providers: ["jili", "spribe", "Aviatrix", "BOONGO"],
        per_page: 800,
        game_type: "all",
        // search: "Super Ace",
        // provider: "spribe",
      },
    });

    console.log(res.data);

    const popularGames = res.data?.data?.filter((i) => {
      if (
        i.game_code == "49_jili" ||
        i.game_code == "aviator_spribe" ||
        i.game_code == "77_jili" ||
        i.game_code == "plinko_spribe" ||
        i.game_code == "ax_nft_aviatrix_47059"
      ) {
        return i;
      }
      return null;
    });

    return NextResponse.json({
      success: true,
      games: popularGames,
    });
  } catch (err) {
    console.error("popular route error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
