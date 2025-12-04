"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function ForgetPasswordPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const countdownRef = useRef(null);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(countdownRef.current);
      setCountdown(0);
      return;
    }
  }, [countdown]);

  useEffect(() => {
    return () => clearInterval(countdownRef.current);
  }, []);

  const startCountdown = (seconds) => {
    setCountdown(seconds);
    setSent(true);
    clearInterval(countdownRef.current);
    countdownRef.current = setInterval(() => {
      setCountdown((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);
  };

  const handleSendOtp = async () => {
    if (!phone) return toast.error("ফোন নম্বর দিন");
    console.log("Sending OTP to phone:", phone);
    setSending(true);
    try {
      const res = await axios.post("/api/user/send-otp", { phone });
      if (res.data?.success) {
        toast.success("OTP পাঠানো হয়েছে");
        startCountdown(res.data?.cooldown ?? 60);
        if (res.data?.remaining)
          toast.success(`OTP বাকি: ${res.data.remaining} বার`);
      } else {
        toast.error(res.data?.message || "Failed to send OTP");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || err.message || "Error");
    } finally {
      setSending(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone || !otp || !newPassword)
      return toast.error("সব ইনপুট পূরণ করুন");
    try {
      const res = await axios.post("/api/user/reset-password", {
        phone,
        otp,
        newPassword,
      });
      if (res.data?.success) {
        toast.success("পাসওয়ার্ড সফলভাবে পরিবর্তিত হয়েছে");
        setPhone("");
        setOtp("");
        setNewPassword("");
        setSent(false);
        setCountdown(0);
      } else {
        toast.error(res.data?.message || "Reset failed");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || err.message || "Error");
    }
  };

  return (
    <div className="h-[calc(100dvh-120px)] p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md sm:p-4">
        <h2 className="text-2xl sm:text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          পাসওয়ার্ড রিসেট
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Phone Number */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200">
              ফোন নম্বর
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="01XXXXXXXXX"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>

          {/* OTP with Get OTP button */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200">
              OTP
            </label>
            <div className=" flex gap-2">
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="OTP দিন"
                className=" w-40 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
              <button
                type="button"
                onClick={handleSendOtp}
                disabled={sending || countdown > 0}
                className={` px-1 block w-24! py-2 rounded text-white ${
                  sending || countdown > 0
                    ? "bg-gray-400 dark:bg-gray-600"
                    : "bg-blue-600 dark:bg-blue-500"
                }`}
              >
                {countdown > 0
                  ? `Sent (${countdown}s)`
                  : sent
                  ? "Sent"
                  : "Get OTP"}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200">
              নতুন পাসওয়ার্ড
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="নতুন পাসওয়ার্ড দিন"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 bg-green-600 dark:bg-green-500 text-white rounded hover:bg-green-700 dark:hover:bg-green-600 transition"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
