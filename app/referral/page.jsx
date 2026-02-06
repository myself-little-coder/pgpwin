"use client";

import axios from "axios";
import { Copy, CopyCheck, X, Users, DollarSign } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaInfoCircle, FaUserTie } from "react-icons/fa";

const ReferralPage = () => {
  const [selectedState, setSelectedState] = useState("agent");

  const [user, setUser] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [referredUsers, setReferredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [agentList, setAgentList] = useState([]);
  const [loadingAgent, setLoadingAgent] = useState(false);
  const [earningTab, setEarningTab] = useState("commission");

  // useEffect(() => {
  //   if (selectedState === "commission") {
  //     setShowModal(true);
  //   }
  // }, [selectedState]);

  useEffect(() => {
    const fetchUser = async () => {
      const userRes = await axios.get("/api/user/profile");
      if (userRes.data.success) setUser(userRes.data.user);
    };

    const fetchReferredUsers = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/user/referred-users");
        if (res.data.success) setReferredUsers(res.data.referred_users);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
    fetchReferredUsers();
    fetchSummary();
    fetchAgentCommission();
  }, []);

  const fetchAgentCommission = async () => {
    try {
      setLoadingAgent(true);
      const res = await axios.get("/api/agent/commission-list");
      if (res.data.success) setAgentList(res.data.data);
    } finally {
      setLoadingAgent(false);
    }
  };

  const fetchSummary = async () => {
    try {
      setLoadingSummary(true);
      const res = await axios.get("/api/user/referral-summary");
      if (res.data.success) setSummary(res.data);
    } finally {
      setLoadingSummary(false);
    }
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <div className="px-2 py-10 text-gray-800 dark:text-gray-100">
      {/* MODAL */}
      {/* {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/50 dark:bg-black/70"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 relative top-20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-3 top-3 text-gray-500 dark:text-gray-300 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              <X size={16} />
            </button>

            <h2 className="text-base font-medium mb-3 text-gray-800 dark:text-gray-100">
              Referral Bonus & Commission Details
            </h2>

            <div className="grid grid-cols-2 gap-2">
              {[
                { d: 1000, b: 1500, s: 30 },
                { d: 5000, b: 7500, s: 157 },
                { d: 10000, b: 15000, s: 321 },
                { d: 20000, b: 25000, s: 657 },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-2 border border-orange-600 rounded-md bg-gray-50 dark:bg-gray-800"
                >
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Deposit
                  </p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    ৳{item.d}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Bet: ৳{item.b}
                  </p>
                  <p className="text-xs font-semibold text-orange-600">
                    Salary: ৳{item.s}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )} */}

      {/* BANNER */}
      <div className="relative left-1/2 -translate-x-1/2 inline-flex justify-center">
        <Image
          src="/referral_banner.png"
          alt="image"
          width={600}
          height={0}
          className="w-full max-w-[600px] h-auto rounded-t-2xl"
        />
      </div>

      {/* Tabs */}
      <div className="w-full flex justify-center mt-4">
        <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-full shadow-inner">
          {/* Agent */}
          <button
            onClick={() => setSelectedState("agent")}
            className={`px-3 py-2 text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-2
        ${
          selectedState === "agent"
            ? "bg-orange-600 text-white shadow-md"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
          >
            Agent
          </button>

          {/* Referral */}
          <button
            onClick={() => setSelectedState("referral")}
            className={`px-3 py-2 text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-2
        ${
          selectedState === "referral"
            ? "bg-orange-600 text-white shadow-md"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
          >
            Referrals
          </button>

          {/* Commission */}
          <button
            onClick={() => setSelectedState("commission")}
            className={`px-3 py-2 text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-2
        ${
          selectedState === "commission"
            ? "bg-orange-600 text-white shadow-md"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
          >
            Commission
          </button>
        </div>
      </div>

      {/* TABS AREA */}
      {selectedState === "agent" ? (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-100">
            <FaUserTie className="text-orange-600" />
            Agent Commission Chart
          </h2>

          {loadingAgent ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : agentList.length === 0 ? (
            <p className="text-center text-gray-500">
              No commission data found
            </p>
          ) : (
            <div className="overflow-x-auto border border-gray-300 dark:border-gray-600">
              <table className="w-full text-sm text-left border-collapse">
                {/* TABLE HEAD */}
                <thead className="bg-gray-200 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200">
                      #
                    </th>
                    <th className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200">
                      Deposit
                    </th>
                    <th className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200">
                      Bet
                    </th>
                    <th className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200">
                      Salary
                    </th>
                  </tr>
                </thead>

                {/* TABLE BODY */}
                <tbody>
                  {agentList.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-100 dark:hover:bg-gray-900 transition"
                    >
                      <td className="px-4 py-2 border border-gray-300 dark:border-gray-600 font-semibold text-gray-800 dark:text-gray-100">
                        {index + 1}
                      </td>

                      <td className="px-4 py-2 border border-gray-300 dark:border-gray-600 font-medium">
                        ৳{Number(item.deposit)}
                      </td>

                      <td className="px-4 py-2 border border-gray-300 dark:border-gray-600  font-medium">
                        ৳{Number(item.bet)}
                      </td>

                      <td className="px-4 py-2 border border-gray-300 dark:border-gray-600 font-semibold">
                        TK. {Number(item.salary)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* INFO SECTION */}
          <div className="mt-10 space-y-10">
            {/* REFERRALS */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
                  <Users className="text-blue-600" />
                  Referral System
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  Our referral system allows you to earn continuously by
                  inviting new players to the platform. Every user you refer
                  becomes a potential long-term income source. The more active
                  your referrals are, the higher your total earnings grow over
                  time.
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                  *** Share your referral code, track your invited users, and
                  monitor their betting activities directly from your dashboard.
                </p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1556155092-8707de31f9c4"
                alt="referral"
                className="w-full h-48 object-cover border border-gray-300 dark:border-gray-600"
              />
            </div>

            {/* COMMISSIONS */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <img
                src="https://images.unsplash.com/photo-1604594849809-dfedbc827105"
                alt="commission"
                className="w-full h-48 object-cover border border-gray-300 dark:border-gray-600"
              />

              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
                  <DollarSign className="text-green-600" />
                  Commission Earnings
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  Commissions are generated based on your referral network’s
                  betting volume. As your referred users place bets, you earn
                  commission automatically without any manual action.
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                  All commissions are calculated transparently and displayed in
                  real-time so you can track your income accurately.
                </p>
              </div>
            </div>

            {/* CASINO AGENT */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
                  <FaUserTie className="text-orange-600" />
                  Casino Agent Program
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  As a casino agent, you unlock a structured earning system
                  based on deposit targets and betting requirements. Higher
                  tiers offer increased salary rewards and stronger earning
                  potential.
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                  This program is ideal for users who manage large referral
                  networks and want stable, performance-based income alongside
                  commissions.
                </p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
                alt="casino agent"
                className="w-full h-48 object-cover border border-gray-300 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
      ) : selectedState === "referral" ? (
        <>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed py-4">
            Share your referral code with your friends now and start earning.
          </p>

          <div className="font-semibold text-gray-800 dark:text-gray-100 my-2">
            Referral Link:
          </div>

          <div className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
            <span className="py-1 line-clamp-1 px-3 border-2 border-dashed border-orange-600 rounded-4xl">
              {`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register/?invite_code=${user?.phone_number}`}
            </span>

            <div className="mx-2">
              {isCopied ? (
                <CopyCheck className="text-green-500 w-6 h-6 " />
              ) : (
                <Copy
                  className="cursor-pointer w-6 h-6 text-gray-700 dark:text-gray-200"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register/?invite_code=${user?.phone_number}`,
                    );
                    setIsCopied(true);
                    toast.success("Copied!");
                  }}
                />
              )}
            </div>
          </div>

          {/* REFERRED USERS */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Your Referred Friends ({referredUsers.length})
            </h2>

            {loading ? (
              <p className="text-center py-8 text-gray-600 dark:text-gray-400">
                Loading...
              </p>
            ) : referredUsers.length === 0 ? (
              <p className="text-center py-8 text-gray-600 dark:text-gray-400">
                You haven't referred anyone yet
              </p>
            ) : (
              <div className="space-y-3">
                {referredUsers.map((u) => (
                  <div
                    key={u.id}
                    className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        {u.phone_number}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(u.joined_at).toLocaleDateString("bn-BD")}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 dark:text-gray-300">
                          Current Balance
                        </p>
                        <p className="text-lg font-semibold text-orange-600">
                          ৳{u.current_balance.toFixed(2)}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-600 dark:text-gray-300">
                          Total Bet
                        </p>
                        <p className="text-lg font-semibold text-blue-600">
                          ৳{u.total_bet_amount.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        selectedState === "commission" && (
          <>
            <div className="flex gap-2 text-sm my-5">
              <FaInfoCircle className="animate-bounce-twice text-xl" />{" "}
              <p className="">
                Your commissions and salaries will be automatically added to
                your wallet at 11:30 pm.
              </p>
            </div>

            {/* COMMISSION AREA */}
            <div className="mt-5">
              <div className="font-semibold mb-1">Redeem Voucher:</div>

              <form className="flex flex-col items-center space-y-2">
                <input
                  type="text"
                  className="w-full py-2 px-2 text-sm bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 outline-orange-600 rounded-2xl"
                  placeholder="jrtxk4do6wr..."
                />
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-orange-600 rounded-2xl font-semibold text-white"
                >
                  Redeem
                </button>
              </form>
            </div>

            {/* TODAY STATS */}
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-800">
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Today’s Referral Stats
              </h3>

              {loadingSummary ? (
                <p className="text-gray-600">Loading...</p>
              ) : summary?.referred_today ? (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Total Bet
                    </p>
                    <p className="text-lg font-semibold text-blue-600">
                      ৳{summary.referred_today.total_bet.toFixed(2)}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Total Deposit
                    </p>
                    <p className="text-lg font-semibold text-orange-600">
                      ৳{summary.referred_today.total_deposit.toFixed(2)}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600">No data available</p>
              )}
            </div>

            {/* EARNINGS */}
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-800">
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Your Earnings
              </h3>

              {loadingSummary ? (
                <p className="text-gray-600">Loading...</p>
              ) : summary?.earnings ? (
                <>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Total Commission
                      </p>
                      <p className="text-lg font-semibold text-green-600">
                        ৳{summary.earnings.commissions_total.toFixed(2)}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Total Salary
                      </p>
                      <p className="text-lg font-semibold text-indigo-600">
                        ৳{summary.earnings.salaries_total.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex gap-2 mb-4 bg-gray-200 dark:bg-gray-800 p-1 rounded-full w-fit">
                      <button
                        onClick={() => setEarningTab("commission")}
                        className={`px-4 py-1.5 text-sm font-semibold rounded-full transition
      ${
        earningTab === "commission"
          ? "bg-orange-600 text-white shadow"
          : "text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700"
      }`}
                      >
                        Commissions
                      </button>

                      <button
                        onClick={() => setEarningTab("salary")}
                        className={`px-4 py-1.5 text-sm font-semibold rounded-full transition
      ${
        earningTab === "salary"
          ? "bg-orange-600 text-white shadow"
          : "text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700"
      }`}
                      >
                        Salaries
                      </button>
                    </div>

                    {/* RECENT COMMISSIONS AND SALARIES*/}

                    {earningTab === "commission" ? (
                      <div>
                        <p className="text-sm font-semibold">
                          Recent Commissions
                        </p>

                        {summary.earnings.commissions.length === 0 ? (
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            None
                          </p>
                        ) : (
                          <div className="mt-2 space-y-1">
                            {summary.earnings.commissions
                              .slice(0, 5)
                              .map((t) => (
                                <div
                                  key={t.id}
                                  className="flex justify-between text-sm"
                                >
                                  <span className="text-gray-700 dark:text-gray-200">
                                    ৳{parseFloat(t.amount).toFixed(2)}
                                  </span>
                                  <span className="text-gray-500 dark:text-gray-400">
                                    {new Date(t.createdAt).toLocaleString()}
                                  </span>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-semibold">Recent Salaries</p>

                        {summary.earnings.salaries.length === 0 ? (
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            None
                          </p>
                        ) : (
                          <div className="mt-2 space-y-1">
                            {summary.earnings.salaries.slice(0, 5).map((t) => (
                              <div
                                key={t.id}
                                className="flex justify-between text-sm"
                              >
                                <span className="text-gray-700 dark:text-gray-200">
                                  ৳{parseFloat(t.amount).toFixed(2)}
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                  {new Date(t.createdAt).toLocaleString()}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <p className="text-gray-600">No data available</p>
              )}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default ReferralPage;
