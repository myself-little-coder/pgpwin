"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendingUp, Loader } from "lucide-react";
import FirstSlider from "../components/FirstSlider";
import GameCategories from "../components/GameCategories";
import GameCard from "@/components/GameCard";

// Original server-side code kept commented below for reference
// import axios from "axios";
// import { Sparkles, TrendingUp } from "lucide-react";
// import FirstSlider from "../components/FirstSlider";
// import GameCategories from "../components/GameCategories";
// import GameCard from "@/components/GameCard";
// import crypto from "crypto";
// import { prisma } from "./lib/prisma";

// export default async function AppPage() {
//   const torrospinApiUrl = process.env.TORROSPIN_API_URL || "";
//   const torrospinApiKey = process.env.TORROSPIN_API_KEY || "";
//   const torrospinSecretKey = process.env.TORROSPIN_API_SECRET || "";

//   const workingProviders = [
//     "rubyplay",
//     "RTG",
//     "spribe",
//     "Habanero",
//     "GMW",
//     "veliplay",
//     "playngo",
//     "EGT",
//     "jili",
//     "SimplePlay",
//     "Pragmatic",
//     "vivo",
//     "AMARIX",
//     "Blue Jack Gaming",
//     "DSTPLAY",
//     "Wonwon Games",
//     "YEEBET LIVE",
//     "PLAYSON",
//     "Hacksaw Gaming",
//     "BOONGO",
//     "Aviatrix",
//     "Gamzix",
//     "BGaming",
//     "Platipus",
//     "SA Gaming",
//   ];

//   const popularGamesCatalog = await axios.get(
//     `${torrospinApiUrl}/api/games/catalog`,
//     {
//       headers: {
//         "x-api-key": torrospinApiKey,
//       },
//       params: {
//         status: "active",
//         providers: ["jili", "spribe", "Aviatrix", "BOONGO"],
//         per_page: 800,
//         game_type: "all",
//         // search: "Super Ace",
//         // provider: "spribe",
//       },
//     }
//   );

//   const popularGames = popularGamesCatalog.data?.data?.filter((i) => {
//     if (
//       i.game_code == "49_jili" ||
//       i.game_code == "aviator_spribe" ||
//       i.game_code == "77_jili" ||
//       i.game_code == "plinko_spribe" ||
//       i.game_code == "ax_nft_aviatrix_47059"
//     ) {
//       return i;
//     }
//     return null;
//   });

//   const jiliGamesCatalog = await axios.get(
//     `${torrospinApiUrl}/api/games/catalog`,
//     {
//       headers: {
//         "x-api-key": torrospinApiKey,
//       },
//       params: {
//         status: "active",
//         providers: ["jili"],
//         per_page: 500,
//         game_type: "all",
//         // search: "Super Ace",
//         // provider: "spribe",
//       },
//     }
//   );

//   const providersCatalog = await axios.get(
//     `${torrospinApiUrl}/api/games/providers`,
//     {
//       headers: {
//         "x-api-key": torrospinApiKey,
//       },
//       params: {
//         status: "active",
//         providers: workingProviders,
//       },
//     }
//   );

//   return (
//     <div className="min-h-dvh">
//       <div className=" mx-auto px-4 py-4">
//         <FirstSlider />

//         {/* New Games Section */}
//         <div className="mb-5">
//           <div className="flex items-center mb-3">
//             <div className="flex items-center gap-2">
//               <h2 className="text-2xl font-bold text-gray-800 dark:text-amber-100">
//                 Popular Games🔥
//               </h2>
//             </div>
//           </div>
//           <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5 ">
//             {popularGames.map((game) => (
//               <GameCard key={game.game_code} game={game} />
//             ))}
//           </div>
//         </div>

//         {/* Category Games Section */}

//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             <div className="flex items-center gap-2">
//               <TrendingUp className="h-6 w-6 text-orange-500" />
//               <h2 className="text-2xl font-bold text-gray-800 dark:text-orange-100">
//                 Select Provider
//               </h2>
//             </div>
//           </div>
//           <GameCategories slides={providersCatalog?.data} />

//           <div className="flex items-center mb-6">
//             <div className="flex items-center gap-2">
//               <TrendingUp className="h-6 w-6 text-orange-500" />
//               <h2 className="text-2xl font-bold text-gray-800 dark:text-orange-100">
//                 Jili Games🔥
//               </h2>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5 ">
//             {jiliGamesCatalog.data?.data.map((game) => (
//               <GameCard
//                 key={game.id}
//                 game={game}
//                 badgeColor="bg-orange-500"
//                 badgeText="HOT 🔥"
//                 borderColor="border-orange-200 dark:border-orange-900"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function AppPage() {
  const [providers, setProviders] = useState([]);
  const [loadingProviders, setLoadingProviders] = useState(true);
  const [popularGames, setPopularGames] = useState([]);
  const [loadingPopular, setLoadingPopular] = useState(true);
  const [selectedProvider, setSelectedProvider] = useState("jili");
  const [providerGames, setProviderGames] = useState([]);
  const [loadingProviderGames, setLoadingProviderGames] = useState(false);

  // Fetch providers and popular games on mount
  useEffect(() => {
    fetchProviders();
    fetchPopularGames();
  }, []);

  // Fetch provider games when provider is selected
  useEffect(() => {
    if (selectedProvider) {
      fetchProviderGames(selectedProvider);
    } else {
      setProviderGames([]);
    }
  }, [selectedProvider]);

  const fetchProviders = async () => {
    try {
      setLoadingProviders(true);
      const res = await axios.get("/api/games/providers");
      if (res.data?.success) {
        const providersList = res.data.data?.data || res.data.data || [];
        setProviders(providersList);
      }
    } catch (err) {
      console.error("Failed to fetch providers:", err);
      setProviders([]);
    } finally {
      setLoadingProviders(false);
    }
  };

  const fetchPopularGames = async () => {
    try {
      setLoadingPopular(true);
      const res = await axios.get("/api/games/popular");
      if (res.data?.success) {
        setPopularGames(res.data.games || []);
      }
    } catch (err) {
      console.error("Failed to fetch popular games:", err);
      setPopularGames([]);
    } finally {
      setLoadingPopular(false);
    }
  };

  const fetchProviderGames = async (providerCode) => {
    try {
      setLoadingProviderGames(true);
      const res = await axios.get(
        `/api/games/provider/${encodeURIComponent(providerCode)}`
      );
      if (res.data?.success) {
        setProviderGames(res.data.games || []);
      }
    } catch (err) {
      console.error("Failed to fetch provider games:", err);
      setProviderGames([]);
    } finally {
      setLoadingProviderGames(false);
    }
  };

  return (
    <div className="min-h-dvh bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto px-4 py-4">
        <FirstSlider />

        {/* Popular Games Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-amber-100">
              Popular Games 🔥
            </h2>
          </div>

          {loadingPopular ? (
            <div className="flex items-center justify-center py-4">
              <Loader className="h-8 w-8 animate-spin text-orange-500" />
              <span className="ml-2 text-gray-600 dark:text-gray-300">
                লোড হচ্ছে...
              </span>
            </div>
          ) : popularGames.length > 0 ? (
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-4">
              {popularGames.map((game) => (
                <GameCard key={game.game_code || game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              কোন জনপ্রিয় গেম পাওয়া যায়নি
            </div>
          )}
        </div>

        {/* Provider Selection & Games Section */}
        <div className="mb-10">
          <div className="flex items-center mb-3">
            <TrendingUp className="h-6 w-6 text-orange-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-orange-100">
              Game Providers
            </h2>
          </div>

          {loadingProviders ? (
            <div className="flex items-center justify-center py-2">
              <Loader className="h-6 w-6 animate-spin text-orange-500" />
              <span className="ml-2 text-gray-600 dark:text-gray-300">
                প্রদানকারী লোড হচ্ছে...
              </span>
            </div>
          ) : (
            <GameCategories
              slides={providers}
              selectedProvider={selectedProvider}
              setSelectedProvider={setSelectedProvider}
            />
          )}

          {/* Provider Games Section */}
          {selectedProvider && (
            <div className="mt-10">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-6 w-6 text-orange-500 mr-2" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-orange-100 capitalize">
                  {selectedProvider} Games
                </h2>
              </div>

              {loadingProviderGames ? (
                <div className="flex items-center justify-center py-6">
                  <Loader className="h-8 w-8 animate-spin text-orange-500" />
                  <span className="ml-2 text-gray-600 dark:text-gray-300">
                    গেম লোড হচ্ছে...
                  </span>
                </div>
              ) : providerGames.length > 0 ? (
                <div className=" min-h-dvh grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-4">
                  {providerGames.map((game) => (
                    <GameCard key={game.game_code || game.id} game={game} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  এই প্রদানকারীর জন্য কোন গেম পাওয়া যায়নি
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
