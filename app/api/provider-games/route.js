import axios from "axios";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const providerId = searchParams.get("providerId");

    const API_URL = process.env.TORROSPIN_API_URL;
    const API_KEY = process.env.TORROSPIN_API_KEY;

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
    ];

    const gamesRes = await axios.get(`${API_URL}/api/games/catalog`, {
      headers: { "x-api-key": API_KEY },
      params: {
        game_type: "all",
        status: "active",
        providers: [providerId],
        per_page: 1000,
      },
    });

    const providersRes = await axios.get(`${API_URL}/api/games/providers`, {
      headers: { "x-api-key": API_KEY },
      params: { status: "active", providers: workingProviders },
    });

    return new Response(
      JSON.stringify({
        games: gamesRes.data.data,
        providers: providersRes.data,
      }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
