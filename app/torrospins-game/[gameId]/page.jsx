// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function GamePage() {
//   const { gameId } = useParams();
//   const [url, setUrl] = useState("");

//   useEffect(() => {
//     const fetchGameUrl = async () => {
//       const res = await fetch("/api/game-launch", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ gameId }),
//       });
//       const data = await res.json();
//       if (data.success) setUrl(data.url);
//     };
//     fetchGameUrl();
//   }, [gameId]);

//   if (!url) return <p>Loading game...</p>;

//   return (
//     <div className="fixed top-0 left-0 w-screen h-dvh z-50">
//       <iframe
//         className="w-screen h-dvh"
//         src={url}
//         allow="fullscreen; autoplay; encrypted-media; clipboard-write; accelerometer; gyroscope; picture-in-picture"
//         allowFullScreen
//       />
//     </div>
//   );
// }

"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function GamePage() {
  const { gameId } = useParams();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // prevent state update if unmounted

    const fetchGameUrl = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/game-launch", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ gameId }),
        });
        const data = await res.json();

        if (isMounted && data.url) {
          setUrl(data.url); // set iframe only after receiving fresh token
        }
      } catch (err) {
        console.error("Failed to fetch game URL:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchGameUrl();

    return () => {
      isMounted = false; // cleanup
    };
  }, [gameId]);

  if (loading) return <p>Loading game...</p>;

  if (!url) return <p>Failed to load game.</p>;

  return (
    <div className="fixed top-0 left-0 w-screen h-dvh z-50">
      <iframe
        key={url} // force reload if URL changes
        className="w-screen h-dvh"
        src={url}
        allow="fullscreen; autoplay; encrypted-media; clipboard-write; accelerometer; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
