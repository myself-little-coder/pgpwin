// import axios from "axios";
// import crypto from "crypto";
// import { getCurrentUser } from "@/app/lib/auth";
// import { v4 as uuidv4 } from "uuid";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   function generateHash(data, SECRET_KEY) {
//     let str = "";
//     for (const key of Object.keys(data)) {
//       if (key === "hash") continue;
//       const value = data[key];
//       if (typeof value === "object") continue;
//       str += value === true ? "1" : value === false ? "0" : String(value) || "";
//     }
//     str += SECRET_KEY;
//     console.log("str : ", str);
//     return crypto.createHash("md5").update(str).digest("hex");
//   }

//   try {
//     const { gameId } = await req.json();
//     const currentUser = await getCurrentUser();

//     console.log("current user", currentUser);

//     const API_URL = process.env.TORROSPIN_API_URL;
//     const API_TOKEN = process.env.TORROSPIN_API_KEY;
//     const SECRET_KEY = process.env.TORROSPIN_API_SECRET;
//     const BASE_URL = process.env.BASE_URL;

//     function generateUserResHash(data, SECRET_KEY) {
//       let str = "";
//       for (const key of Object.keys(data)) {
//         if (key === "hash") continue;
//         const value = data[key];
//         if (typeof value === "object") continue;
//         str += value === true ? "1" : value === false ? "0" : value || "";
//       }
//       str += SECRET_KEY;
//       return crypto.createHash("md5").update(str).digest("hex");
//     }

//     // Torrospin user registration
//     const userData = {
//       casino_user_id: String(currentUser.userId),
//       username: String(currentUser.userId),
//     };

//     userData.hash = generateUserResHash(
//       userData,
//       process.env.TORROSPIN_API_SECRET
//     );

//     try {
//       await axios.post(`${API_URL}/api/v2/adduser`, userData);
//     } catch (err) {
//       console.log("adduser failed but continuing...");
//     }

//     const gameData = {
//       token: uuidv4(),
//       game_name: gameId,
//       user_id: String(currentUser?.userId),
//       bank_id: String(currentUser?.userId),
//       currency: "BDT",
//       quit_link: BASE_URL,
//       device: "mobile",
//       lang: "EN",
//       free_spin: 0,
//       lobby: false,
//     };

//     const gameDataHash = generateHash(gameData, SECRET_KEY);

//     console.log("gameDataHash", gameDataHash);

//     const gameRes = await axios.post(
//       `${API_URL}/api/v2/request_link/real`,
//       { ...gameData, hash: gameDataHash },
//       { headers: { "x-api-key": API_TOKEN } }
//     );

//     console.log(gameRes.data);

//     return NextResponse.json(gameRes.data, { status: 200 });
//   } catch (err) {
//     console.error(err);
//     return new Response(
//       JSON.stringify({ success: false, message: err.message }),
//       { status: 500 }
//     );
//   }
// }

/////////////////////       Brute Force Version     ///////////////////////

// import axios from "axios";
// import crypto from "crypto";
// import { getCurrentUser } from "@/app/lib/auth";
// import { v4 as uuidv4 } from "uuid";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   function generateHash(data, SECRET_KEY) {
//     let str = "";
//     for (const key of Object.keys(data)) {
//       if (key === "hash") continue;
//       const value = data[key];
//       if (typeof value === "object") continue;
//       str += value === true ? "1" : value === false ? "0" : String(value) || "";
//     }
//     str += SECRET_KEY;
//     return crypto.createHash("md5").update(str).digest("hex");
//   }

//   try {
//     const { gameId } = await req.json();
//     const currentUser = await getCurrentUser();

//     const API_URL = process.env.TORROSPIN_API_URL;
//     const API_TOKEN = process.env.TORROSPIN_API_KEY;
//     const SECRET_KEY = process.env.TORROSPIN_API_SECRET;
//     const BASE_URL = process.env.BASE_URL;

//     // Types to test for fields TorroSpin is picky about
//     const deviceTypes = ["mobile", 1, 0, "1", "0"];
//     const lobbyTypes = [false, true, 0, 1, "0", "1"];
//     const freeSpinTypes = [0, "0", 1, "1"];
//     const idTypes = [String(currentUser.userId), Number(currentUser.userId)];

//     console.log("🔍 Starting data-type brute force test...");

//     for (const device of deviceTypes) {
//       for (const lobby of lobbyTypes) {
//         for (const free_spin of freeSpinTypes) {
//           for (const user_id of idTypes) {
//             for (const bank_id of idTypes) {
//               const gameData = {
//                 token: uuidv4(),
//                 game_name: gameId,
//                 user_id,
//                 bank_id,
//                 currency: "BDT",
//                 quit_link: BASE_URL,
//                 device,
//                 lang: "EN",
//                 free_spin,
//                 lobby,
//               };

//               const hash = generateHash(gameData, SECRET_KEY);
//               const requestBody = { ...gameData, hash };

//               console.log(
//                 `➡️ Testing → device:${device}, lobby:${lobby}, free_spin:${free_spin}, user_id:${user_id}, bank_id:${bank_id}`
//               );

//               try {
//                 const res = await axios.post(
//                   `${API_URL}/api/v2/request_link/real`,
//                   requestBody,
//                   { headers: { "x-api-key": API_TOKEN } }
//                 );

//                 const data = res.data;

//                 if (data.success === true || data?.url) {
//                   console.log("🎉 SUCCESS COMBINATION FOUND:");
//                   console.log("device =", device);
//                   console.log("device =", typeof device);
//                   console.log("lobby =", lobby);
//                   console.log("lobby =", typeof lobby);
//                   console.log("free_spin =", free_spin);
//                   console.log("free_spin =", typeof free_spin);
//                   console.log("user_id =", user_id);
//                   console.log("user_id =", typeof user_id);
//                   console.log("bank_id =", bank_id);
//                   console.log("bank_id =", typeof bank_id);
//                   console.log("FULL RESPONSE:", data);

//                   return NextResponse.json(data, { status: 200 });
//                 } else {
//                   console.log(
//                     `❌ Failed → device:${device}, lobby:${lobby}, free_spin:${free_spin}, user_id:${user_id}, bank_id:${bank_id}`
//                   );
//                   console.log("Error Message:", data.message);
//                 }
//               } catch (err) {
//                 console.log(
//                   `❌ Request error → device:${device}, lobby:${lobby}, free_spin:${free_spin}, user_id:${user_id}, bank_id:${bank_id}`
//                 );
//                 console.log("Message:", err?.response?.data || err.message);
//               }
//             }
//           }
//         }
//       }
//     }

//     return NextResponse.json(
//       { success: false, message: "No valid combination found" },
//       { status: 400 }
//     );
//   } catch (err) {
//     console.error(err);
//     return new Response(
//       JSON.stringify({ success: false, message: err.message }),
//       { status: 500 }
//     );
//   }
// }

// /////////////////////       New Force Version     ///////////////////////

import axios from "axios";
import crypto from "crypto";
import { getCurrentUser } from "@/app/lib/auth";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";

export async function POST(req) {
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

  try {
    const { gameId } = await req.json();
    const currentUser = await getCurrentUser();

    const API_URL = process.env.TORROSPIN_API_URL;
    const API_TOKEN = process.env.TORROSPIN_API_KEY;
    const SECRET_KEY = process.env.TORROSPIN_API_SECRET;
    const BASE_URL = process.env.BASE_URL;

    // Final working combination
    const gameData = {
      token: uuidv4(),
      game_name: gameId,
      user_id: String(currentUser.userId),
      bank_id: String(currentUser.userId),
      currency: "BDT",
      quit_link: BASE_URL,
      device: "mobile",
      lang: "EN",
      free_spin: 0,
      lobby: false,
    };

    const hash = generateHash(gameData, SECRET_KEY);
    const requestBody = { ...gameData, hash };

    const res = await axios.post(
      `${API_URL}/api/v2/request_link/real`,
      requestBody,
      { headers: { "x-api-key": API_TOKEN } }
    );

    const data = res.data;

    if (!data.success && !data.url) {
      return NextResponse.json(
        { success: false, message: data.message || "Failed to generate URL" },
        { status: 400 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
