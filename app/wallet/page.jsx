"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import {
  Wallet,
  TrendingUp,
  RefreshCw,
  ArrowDownCircle,
  ArrowUpCircle,
  X,
  Check,
  Eye,
  CalendarDays,
} from "lucide-react";
import axios from "axios";
import { format } from "date-fns";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const paymentMapping = [
  { name: "BKASH", imgUrl: "/bkash.png", channels: ["okpay"] },
  { name: "NAGAD", imgUrl: "/nagad.png", channels: ["okpay"] },
];

// export const payment_server_url = "http://3.111.203.166:4000";
// export const payment_server_url = "http://3.111.203.166:4000";
const payment_server_url = process.env.NEXT_PUBLIC_SERVER_URL;

export default function WalletPage() {
  const [user, setUser] = useState(null);
  const [amount, setAmount] = useState(100);
  const [account, setAccount] = useState("");
  const [userName, setUserName] = useState("");
  const [type, setType] = useState("deposit"); // deposit or withdraw
  const [selectedChannel, setSelectedChannel] = useState("okpay");
  const [selectedMethod, setSelectedMethod] = useState("BKASH");
  const [selectedBonus, setSelectedBonus] = useState(null);
  const [bonuses, setBonuses] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);
  const searchParams = useSearchParams();

  // transactions section
  const [transactions, setTransactions] = useState([]);
  const [loadingTransactions, setLoadingTransactions] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 20;
  const [totalTransactions, setTotalTransactions] = useState(0);

  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam === "deposit" || typeParam === "withdraw") {
      setType(typeParam);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
    // fetch transactions when page changes
    fetchTransactions(currentPage);
    fetchBonuses();
  }, [currentPage]);

  const fetchBonuses = async () => {
    try {
      const res = await fetch("/api/bonuses");
      const data = await res.json();
      if (data?.success) setBonuses(data.data || []);
    } catch (err) {
      console.error("Failed to fetch bonuses", err);
    }
  };

  const fetchTransactions = async (page = 1) => {
    try {
      setLoadingTransactions(true);
      const res = await axios.get(
        `/api/user/transactions?page=${page}&limit=${ITEMS_PER_PAGE}`
      );
      if (res.data?.success) {
        setTransactions(res.data.data || []);
        setTotalTransactions(res.data.total || 0);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
      toast.error("Failed to load transactions");
    } finally {
      setLoadingTransactions(false);
    }
  };

  const fetchUserData = async () => {
    try {
      setLoadingUser(true);

      const response = await fetch("/api/user/profile");
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
      } else {
        toast.error("Failed to load user data");
      }
      setLoadingUser(false);
    } catch (error) {
      toast.error("Error loading user data");
    }
  };

  const handleSubmit = async () => {
    if (!amount || !selectedChannel || !selectedMethod) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (type === "withdraw") {
      if (!account || account?.length !== 11) {
        toast.error("Account Number Must be of 11 digit!");
        return;
      }
      if (!userName) {
        toast.error("Your Name on account is required!");
        return;
      }
    }

    if (type === "deposit") {
      if (amount < 100 || amount >= 25000) {
        toast.error(`Deposit amount must be between 100 to 25k`);
        return;
      }
    } else {
      if (amount < 300 || amount > 25000) {
        toast.error(`Withdraw amount must be between 300 and 25k`);
        return;
      }
    }

    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    setLoading(true);

    try {
      if (type === "deposit") {
        // use local payin endpoint (same as account/deposit)
        const payinApi =
          selectedChannel?.name === "okpay"
            ? "/api/payin/okpay"
            : "/api/payin/okpay";

        const response = await fetch(payinApi, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            money: amount,
            pay_type: selectedMethod,
            bonus_id: selectedBonus?.id || null,
          }),
        });

        const data = await response.json();
        if (data?.success && data?.url) {
          window.location.href = data.url;
        } else {
          toast.error(data?.message || "Failed to initiate deposit");
        }
      } else if (type === "withdraw") {
        // use local payout endpoint (same as account/withdraw)
        const payoutApi =
          selectedChannel?.name === "okpay"
            ? "/api/payout/okpay"
            : "/api/payout/okpay";

        const response = await fetch(payoutApi, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            money: amount,
            pay_type: selectedMethod,
            account: account,
            userName: userName,
          }),
        });
        const data = await response.json();
        if (data?.success) {
          toast.success("Payout request created successfully");
        } else {
          toast.error(data?.message || "Failed to create payout");
        }
      }
    } catch (error) {
      console.log("error:", error);
      toast.error("Failed to process payment");
    } finally {
      setLoading(false);
      setShowConfirmation(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-gray-900 p-4">
      <motion.div
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Balance Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Wallet className="w-6 h-6 text-orange-500 mr-2" />
              <h2 className="text-xl font-bold">Wallet</h2>
            </div>
            <button
              onClick={fetchUserData}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <RefreshCw
                className={`w-4 h-4 ${loadingUser ? "animate-spin" : ""}`}
              />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Balance
              </p>
              <p className="text-xl font-bold">৳{user?.balance || 0}</p>
            </div>
            <div className="bg-orange-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>Turnover</span>
              </div>
              <p className="text-xl font-bold">৳{user?.turn_over || 0}</p>
            </div>
          </div>
        </div>

        {/* Transaction Type */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setType("deposit")}
            className={`flex items-center justify-center gap-2 p-4 rounded-xl ${
              type === "deposit"
                ? "bg-green-500 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            <ArrowDownCircle className="w-5 h-5" />
            Deposit
          </button>
          <button
            onClick={() => setType("withdraw")}
            className={`flex items-center justify-center gap-2 p-4 rounded-xl ${
              type === "withdraw"
                ? "bg-orange-500 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            <ArrowUpCircle className="w-5 h-5" />
            Withdraw
          </button>
        </div>

        {/* Method -> Channel -> Amount -> Bonus card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Payment Method
              </label>
              <div className="flex gap-3">
                {paymentMapping.map((pm) => (
                  <button
                    key={pm.name}
                    onClick={() => {
                      setSelectedChannel(pm.channels[0]);
                      setSelectedMethod(pm.name);
                    }}
                    className={`px-3 py-2 aspect-square h-20 rounded-lg border-2 relative ${
                      selectedMethod === pm.name
                        ? "border-orange-500 "
                        : "border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    {/* {pm.name} */}
                    <Image
                      src={pm.imgUrl}
                      alt={pm.name}
                      className="w-full object-contain"
                      fill
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Channel :
              </label>
              {selectedMethod ? (
                paymentMapping
                  .find((p) => p.name === selectedMethod)
                  .channels.map((ch) => (
                    <button
                      key={ch}
                      onClick={() => setSelectedChannel(ch)}
                      className={`px-3 py-2 rounded-lg border-2 ${
                        selectedChannel === ch
                          ? "border-orange-500 "
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      {ch}
                    </button>
                  ))
              ) : (
                <p className="text-sm text-gray-500">
                  Select a payment method first
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Amount (৳)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full p-2 rounded-lg bg-orange-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <div className="flex gap-2 mt-3 flex-wrap">
                {[100, 200, 500, 5000, 10000].map((q) => (
                  <button
                    key={q}
                    onClick={() => setAmount(q)}
                    className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-slate-700 font-semibold"
                  >
                    {q}৳
                  </button>
                ))}
              </div>
            </div>

            {type === "deposit" && (
              <div>
                <label className="block text-sm font-medium mb-2">Bonus</label>
                <select
                  value={selectedBonus?.id || ""}
                  onChange={(e) =>
                    setSelectedBonus(
                      bonuses.find((b) => String(b.id) === e.target.value) ||
                        null
                    )
                  }
                  className="w-full p-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
                >
                  <option value="">No bonus</option>
                  {bonuses.map((b) => (
                    <option
                      key={b.id}
                      value={b.id}
                    >{`${b.name} — ৳${b.deposit} (+৳${b.bonus})`}</option>
                  ))}
                </select>
              </div>
            )}

            {type === "withdraw" && (
              <>
                <div>
                  <label className="block text-sm font-medium mt-2 mb-1">
                    Account Number
                  </label>
                  <input
                    type="text"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    placeholder="eg. 01747-032XXX"
                    className="w-full p-2 rounded-lg bg-orange-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mt-2 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="eg. Rahim Badsah"
                    className="w-full p-2 rounded-lg bg-orange-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
              </>
            )}

            <div>
              <button
                onClick={() => setShowConfirmation(true)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg"
              >
                {type === "deposit" ? "Deposit" : "Withdraw"}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Transactions List */}
      <div className=" max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg my-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold">Recent Transactions</h3>
          <RefreshCw
            className={`w-4 h-4 cursor-pointer ${
              loadingTransactions ? "animate-spin" : ""
            }`}
            onClick={fetchTransactions}
          />
        </div>

        <div className="space-y-2">
          {/**
           * Client-side pagination: show only ITEMS_PER_PAGE transactions per page
           */}
          {(() => {
            const totalPages = Math.max(
              1,
              Math.ceil(totalTransactions / ITEMS_PER_PAGE)
            );
            // ensure current page is within bounds
            if (currentPage > totalPages) setCurrentPage(totalPages);
            const pageItems = transactions; // already the current page

            return (
              <>
                {pageItems.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-2 rounded-lg bg-orange-50 dark:bg-gray-700"
                  >
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          transaction.type === "deposit"
                            ? "text-green-600 dark:text-green-400"
                            : "text-orange-600 dark:text-orange-400"
                        }`}
                      >
                        {transaction.type === "withdraw" ? "-" : "+"}৳
                        {transaction.amount}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {format(
                          new Date(transaction.createdAt),
                          "MMM d, h:mm a"
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p
                        className={`text-sm font-medium ${
                          transaction.type === "deposit"
                            ? "text-green-600 dark:text-green-400"
                            : "text-orange-600 dark:text-orange-400"
                        }`}
                      >
                        {transaction.type === "withdraw" ? "-" : "+"}৳
                        {transaction.amount}
                      </p>
                      <div
                        className={`px-2 py-0.5 text-xs rounded ${
                          transaction.status === "completed"
                            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                            : transaction.status === "pending"
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
                            : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {transaction.status}
                      </div>
                      <Eye
                        className="w-4 h-4 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        onClick={() => setSelectedTransaction(transaction)}
                      />
                    </div>
                  </div>
                ))}

                {transactions.length === 0 && !loadingTransactions && (
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 py-4">
                    No transactions found
                  </p>
                )}

                {/* Pagination controls */}
                {/* {totalTransactions > 0 && (
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className={`px-3 py-1 rounded ${
                        currentPage === 1
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                      }`}
                    >
                      Prev
                    </button>

                    <div className="text-sm text-gray-700 dark:text-gray-200">
                      {currentPage} of{" "}
                      {Math.max(
                        1,
                        Math.ceil(totalTransactions / ITEMS_PER_PAGE)
                      )}
                    </div>

                    <button
                      onClick={() =>
                        setCurrentPage((p) =>
                          Math.min(
                            Math.max(
                              1,
                              Math.ceil(totalTransactions / ITEMS_PER_PAGE)
                            ),
                            p + 1
                          )
                        )
                      }
                      disabled={
                        currentPage ===
                        Math.max(
                          1,
                          Math.ceil(totalTransactions / ITEMS_PER_PAGE)
                        )
                      }
                      className={`px-3 py-1 rounded ${
                        currentPage ===
                        Math.max(
                          1,
                          Math.ceil(totalTransactions / ITEMS_PER_PAGE)
                        )
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                )} */}
              </>
            );
          })()}
        </div>
      </div>

      {/* Transaction Details Modal */}
      <AnimatePresence>
        {selectedTransaction && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setSelectedTransaction(null)}
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative max-w-md w-full bg-white dark:bg-slate-900 dark:border-white border-2 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold">Transaction Details</h3>
                <button
                  onClick={() => setSelectedTransaction(null)}
                  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Type
                    </p>
                    <p className="text-sm font-medium capitalize">
                      {selectedTransaction.type}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Method
                    </p>
                    <p className="text-sm font-medium uppercase">
                      {selectedTransaction.method}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Amount
                    </p>
                    <p className="text-sm font-medium">
                      ৳{selectedTransaction.amount}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Status
                    </p>
                    <div
                      className={`inline-block px-2 py-0.5 text-xs rounded ${
                        selectedTransaction.status === "completed"
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : selectedTransaction.status === "pending"
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
                          : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                      }`}
                    >
                      {selectedTransaction.status}
                    </div>
                  </div>
                </div>

                {selectedTransaction.trx_id && (
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Transaction ID
                    </p>
                    <p className="text-sm font-medium break-all">
                      {selectedTransaction.trx_id}
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarDays className="w-4 h-4" />
                  {format(new Date(selectedTransaction.createdAt), "PPpp")}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md p-6 shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Confirm Payment</h3>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-orange-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 dark:text-gray-400">
                      Amount
                    </span>
                    <span className="font-semibold">৳{amount}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 dark:text-gray-400">
                      Method
                    </span>
                    <span className="font-semibold">{selectedMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Limit
                    </span>
                    <span className="font-semibold">
                      {type === "deposit" ? "100 to 25k" : "300 to 25k"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-colors disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Confirm Payment"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
