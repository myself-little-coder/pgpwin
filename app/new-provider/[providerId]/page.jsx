"use client";

import { useEffect, useState } from "react";
import GameCard from "@/components/GameCard";
import GameCategories from "@/components/GameCategories";
import { useParams } from "next/navigation";

export default function ProviderPage() {
  const { providerId } = useParams();
  const [games, setGames] = useState([]);
  const [providers, setProviders] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/provider-games?providerId=${providerId}`);
        const data = await res.json();

        if (res.ok) {
          setGames(data.games || []);
          setProviders(data?.providers || []);
        } else {
          setErr(data.error || "Failed to load games");
        }
      } catch (error) {
        setErr(error.message);
      }
    }

    fetchData();
  }, [providerId]);

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-gray-900 p-4">
      <GameCategories slides={providers} />
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {providerId} :
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Browse all available games for this provider.
          </p>
        </div>

        {games.length > 0 ? (
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5">
            {games.map((game) => (
              <GameCard
                key={game.game_code || game.id || Math.random()}
                game={game}
                badgeColor="bg-orange-500"
                badgeText={"🔥"}
                borderColor="border-orange-200 dark:border-orange-800"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-6 text-red-500">
            {err || "Loading..."}
          </div>
        )}
      </div>
    </div>
  );
}
