"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Target, Star } from "lucide-react";
import toast from "react-hot-toast";

export default function MissionsPage() {
  const [completed, setCompleted] = useState([false, false, false]);

  const toggleComplete = (i) => {
    const copy = [...completed];
    copy[i] = !copy[i];
    setCompleted(copy);
    toast.success(copy[i] ? "Mission completed" : "Mission status updated");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 grow bg-white dark:bg-gray-900 min-h-screen py-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold">Missions</h1>
          <p className="text-sm text-gray-500">
            Complete missions to earn badges & rewards
          </p>
        </header>

        <article className="bg-orange-50 dark:bg-gray-800 rounded-lg p-4 mb-6 flex flex-col md:flex-row gap-4">
          <div className="md:w-1/3 shrink-0">
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden h-48 md:h-40 w-full relative">
              <Image
                src="/first_slider/slide_01.jpg"
                alt="missions"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:flex-1">
            <h2 className="font-semibold text-lg mb-2">Getting Started</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Follow simple steps to unlock your first reward. Read the
              instructions and tap the action when you finish each item.
            </p>

            <ul className="space-y-3">
              {["Verify phone", "Make first deposit", "Try a game"].map(
                (t, i) => (
                  <li
                    key={t}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white dark:bg-gray-900 p-3 rounded"
                  >
                    <div className="flex items-start sm:items-center gap-3 mb-3 sm:mb-0">
                      <Target className="text-orange-600" />
                      <div>
                        <div className="font-medium">{t}</div>
                        <div className="text-xs text-gray-500">
                          Earn points after completing this step.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleComplete(i)}
                        aria-label={`mark ${t}`}
                        className={`px-3 py-2 rounded ${
                          completed[i]
                            ? "bg-green-500 text-white w-full sm:w-auto"
                            : "bg-gray-200 dark:bg-gray-700 w-full sm:w-auto"
                        }`}
                      >
                        {completed[i] ? "Completed" : "Got it"}
                      </button>
                      <ArrowRight className="hidden sm:block" />
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </article>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Star className="text-orange-600" />
                  <div>
                    <h3 className="font-semibold">Challenge {n}</h3>
                    <p className="text-xs text-gray-500">
                      Short description for challenge {n}.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Complete this challenge to gain status and points.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => toast("Saved to your tasks")}
                  className="w-full sm:w-auto px-3 py-2 bg-orange-500 text-white rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => toast("Shared!")}
                  className="w-full sm:w-auto px-3 py-2 border rounded"
                >
                  Share
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
