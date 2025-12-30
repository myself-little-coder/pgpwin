"use client";
import { useState } from "react";
import Image from "next/image";
import { Award, CreditCard, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";

export default function SubscriptionsPage() {
  const [selected, setSelected] = useState(null);

  const plans = [
    {
      id: "basic",
      title: "Basic",
      price: "Free",
      perks: ["Access to games", "Basic support"],
    },
    {
      id: "pro",
      title: "Pro",
      price: "$4.99/mo",
      perks: ["Faster payouts", "Priority support"],
    },
    {
      id: "elite",
      title: "Elite",
      price: "$9.99/mo",
      perks: ["Exclusive offers", "Personal manager"],
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 grow bg-white dark:bg-gray-900 min-h-screen py-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold">Subscriptions</h1>
          <p className="text-sm text-gray-500">Choose a plan that fits you.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`p-4 rounded-lg ${
                selected === p.id
                  ? "border-2 border-orange-500 bg-orange-50"
                  : "bg-white dark:bg-gray-800"
              } shadow-sm flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-orange-600" />
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <div className="text-sm text-gray-500">{p.price}</div>
                  </div>
                </div>

                <ul className="mb-3 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" /> {perk}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => {
                    setSelected(p.id);
                    toast.success("Selected " + p.title);
                  }}
                  className={`w-full sm:w-auto px-3 py-2 rounded ${
                    selected === p.id
                      ? "bg-green-600 text-white"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  Select
                </button>
                <button
                  onClick={() => toast("Payment flow not connected yet")}
                  className="w-full sm:w-auto px-3 py-2 border rounded flex items-center gap-2 justify-center"
                >
                  <CreditCard /> Pay
                </button>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-6 bg-white dark:bg-gray-800 rounded p-4 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full sm:w-32 h-32 relative rounded overflow-hidden">
            <Image
              src="/banners/register_banner_home.jpg"
              alt="subscription"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold">Why subscribe?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Subscriptions give you access to premium features and better
              support. Try Pro for a month and see the difference.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
