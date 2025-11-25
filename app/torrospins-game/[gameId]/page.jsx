"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function GamePage() {
  const { gameId } = useParams();
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchGameUrl = async () => {
      const res = await fetch("/api/game-launch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gameId }),
      });
      const data = await res.json();
      if (data.success) setUrl(data.url);
    };
    fetchGameUrl();
  }, [gameId]);

  if (!url) return <p>Loading game...</p>;

  return (
    <div className="fixed top-0 left-0 w-screen h-dvh z-50">
      <iframe
        className="w-screen h-dvh"
        src={url}
        allow="fullscreen; autoplay; encrypted-media; clipboard-write; accelerometer; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
