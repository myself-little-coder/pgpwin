"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendingUp, Loader } from "lucide-react";
import FirstSlider from "../components/FirstSlider";
import GameCategories from "../components/GameCategories";
import GameCard from "@/components/GameCard";

import { GiAbstract106, GiAirplane, GiCard10Clubs } from "react-icons/gi";
import { FaDice, FaDiceD20, FaFire, FaTableTennis } from "react-icons/fa";
import { TbCardsFilled } from "react-icons/tb";
import { MdSportsCricket } from "react-icons/md";
import { IoFish } from "react-icons/io5";
import { LuCherry } from "react-icons/lu";

import { motion } from "framer-motion";
import providersList from "@/public/json/providers.json";
import popularGamesList from "@/public/json/popular_games.json";
import Image from "next/image";

export default function AppPage() {
  const [allProviders, setAllProviders] = useState(providersList);
  const [providers, setProviders] = useState(providersList);
  const [loadingProviders, setLoadingProviders] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [providerGames, setProviderGames] = useState(popularGamesList);
  const [loadingProviderGames, setLoadingProviderGames] = useState(false);

  const [selectedType, setSelectedType] = useState("hot");

  const typeSlides = [
    // {
    //   name: "জ্যাকপট",
    //   code: "JP",
    //   icon: GiAbstract106,
    // },
    {
      name: "Hot",
      code: "hot",
      icon: FaFire,
      img: "/categories/hot.png",
    },
    {
      name: "Slot",
      code: "slot",
      icon: LuCherry,
      img: "/categories/slots.png",
    },
    {
      name: "Crash",
      code: "crash",
      icon: GiAirplane,
      img: "/categories/crash.png",
    },
    {
      name: "Live",
      code: "live",
      icon: TbCardsFilled,
      img: "/categories/live.png",
    },
    // {
    //   name: "ক্রিকেট",
    //   code: "sports",
    //   icon: MdSportsCricket,
    // },
    // {
    //   name: "টেবিল",
    //   code: "table",
    //   icon: FaDice,
    // },
    {
      name: "Fish",
      code: "fishing",
      icon: IoFish,
      img: "/categories/fish.png",
    },
    {
      name: "Poker",
      code: "poker",
      icon: GiCard10Clubs,
      img: "/categories/poker.png",
    },
    {
      name: "Other",
      code: "others", // "blackjack" and "virtual_games" combined as "other"
      icon: FaDiceD20,
      img: "/categories/e_sports.png",
    },
  ];

  // Fetch provider games when provider is selected
  useEffect(() => {
    fetchProviderGames(selectedProvider);
  }, [selectedProvider]);

  // const fetchProviders = async () => {
  //   try {
  //     setLoadingProviders(true);
  //     const res = await axios.get("/api/games/providers");
  //     if (res.data?.success) {
  //       const providersList = res.data.data?.data || res.data.data || [];
  //       console.log("Fetched providers:", providersList);
  //       setAllProviders(providersList);
  //       setProviders(providersList);
  //     }
  //   } catch (err) {
  //     console.error("Failed to fetch providers:", err);
  //     setAllProviders([]);
  //     setProviders([]);
  //   } finally {
  //     setLoadingProviders(false);
  //   }
  // };

  // const fetchPopularGames = async () => {
  //   try {
  //     setLoadingProviderGames(true);
  //     const res = await axios.get("/api/games/popular");
  //     if (res.data?.success) {
  //       setProviderGames(res.data.games || []);
  //     }
  //   } catch (err) {
  //     console.error("Failed to fetch popular games:", err);
  //     setProviderGames([]);
  //   } finally {
  //     setLoadingProviderGames(false);
  //   }
  // };

  const fetchProviderGames = async (providerCode) => {
    try {
      if (selectedType === "hot") {
        setProviderGames(popularGamesList);
      } else {
        setLoadingProviderGames(true);
        const res = await axios.get(
          `/api/games/provider/${encodeURIComponent(
            providerCode
          )}?type=${encodeURIComponent(selectedType)}`
        );
        if (res.data?.success) {
          setProviderGames(res.data.games || []);
        }
      }
    } catch (err) {
      console.error("Failed to fetch provider games:", err);
      setProviderGames([]);
    } finally {
      setLoadingProviderGames(false);
    }
  };

  useEffect(() => {
    if (selectedType === "hot") {
      setProviders(null);
      setSelectedProvider(null);
      fetchProviderGames(allProviders[0]?.name);
      return;
    } else if (selectedType === "others") {
      setProviders(allProviders);
      setSelectedProvider(allProviders[0]?.name || allProviders[0]?.name);
      fetchProviderGames(allProviders[0]?.name);
    } else {
      const providersArrayToSet = allProviders.filter((provider) =>
        selectedType instanceof Array
          ? provider.game_main_types.some((type) => selectedType.includes(type))
          : provider.game_main_types.includes(selectedType)
      );
      setProviders(providersArrayToSet);
      setSelectedProvider(providersArrayToSet[0]?.name);
      fetchProviderGames(providersArrayToSet[0]?.name);
    }
  }, [selectedType]);

  return (
    <div className="min-h-dvh bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto px-4 py-4">
        <FirstSlider />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-3 py-2 my-4 rounded-2xl"
        >
          {typeSlides?.map((slide, index) =>
            slide.name ? (
              <div
                key={index}
                className={`text-sm cursor-pointer font-semibold flex flex-col aspect-square! h-16  justify-between items-center px-2 py-1 rounded-lg  ${
                  selectedType === slide.code
                    ? "bg-yellow-400 dark:bg-yellow-500 text-stone-800"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
                onClick={() => {
                  setSelectedType(slide.code);
                }}
              >
                {/* {<slide.icon className="text-xl" />} */}
                <Image
                  width={40}
                  height={40}
                  sizes=""
                  className=" object-contain w-10! aspect-square! "
                  src={slide.img}
                  alt="icon"
                />
                <h2>{slide.name}</h2>
              </div>
            ) : null
          )}
        </motion.div>

        {/* Provider Selection & Games Section */}
        <div className="">
          {selectedType !== "hot" && loadingProviders ? (
            <div className="flex items-center justify-center py-2">
              <Loader className="h-6 w-6 animate-spin text-orange-500" />
              <span className="ml-2 text-gray-600 dark:text-gray-300">
                Providers loading...
              </span>
            </div>
          ) : (
            providers && (
              <GameCategories
                slides={providers}
                selectedProvider={selectedProvider}
                setSelectedProvider={setSelectedProvider}
              />
            )
          )}

          {/* Provider Games Section */}

          <div className="my-2">
            {/* <div className="flex items-center mb-6">
                <TrendingUp className="h-6 w-6 text-orange-500 mr-2" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-orange-100 capitalize">
                  {selectedProvider} Games
                </h2>
              </div> */}

            {loadingProviderGames ? (
              <div className="flex items-center justify-center py-6">
                <Loader className="h-8 w-8 animate-spin text-orange-500" />
                <span className="ml-2 text-gray-600 dark:text-gray-300">
                  গেম লোড হচ্ছে...
                </span>
              </div>
            ) : providerGames.length > 0 ? (
              <div className=" grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-4">
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
        </div>
      </div>
    </div>
  );
}
