import axios from "axios";
import crypto from "crypto";
import { getCurrentUser } from "@/app/lib/auth";
import { v4 as uuidv4 } from "uuid";

function generateHash(data, SECRET_KEY) {
  let str = "";
  for (const key of Object.keys(data)) {
    if (key === "hash") continue;
    const value = data[key];
    if (typeof value === "object") continue;
    str += value === true ? "1" : value === false ? "0" : String(value) || "";
  }
  str += SECRET_KEY;
  return crypto.createHash("md5").update(str).digest("hex");
}

export async function POST(req) {
  try {
    const { gameId } = await req.json();
    const currentUser = await getCurrentUser();

    const API_URL = process.env.TORROSPIN_API_URL;
    const API_TOKEN = process.env.TORROSPIN_API_KEY;
    const SECRET_KEY = process.env.TORROSPIN_API_SECRET;
    const BASE_URL = process.env.BASE_URL;

    const gameData = {
      token: uuidv4(),
      game_name: gameId,
      user_id: currentUser?.userId,
      bank_id: currentUser?.userId,
      currency: "BDT",
      quit_link: BASE_URL,
      device: "mobile",
      lang: "EN",
      free_spin: 0,
      lobby: false,
    };

    const gameDataHash = generateHash(gameData, SECRET_KEY);

    const gameRes = await axios.post(
      `${API_URL}/api/request_link/real`,
      { ...gameData, hash: gameDataHash },
      { headers: { "x-api-key": API_TOKEN } }
    );

    return new Response(JSON.stringify(gameRes.data), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ success: false, message: err.message }),
      { status: 500 }
    );
  }
}
