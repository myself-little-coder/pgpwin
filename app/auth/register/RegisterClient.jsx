"use client";

import { CircleQuestionMark, Eye } from "lucide-react";
import Image from "next/image";
import React, { useState, useRef, use, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/Loader";

const RegisterClient = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showUsernameTooltip, setShowUsernameTooltip] = useState(false);
  const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);

  const usernameRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const referralRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const invite_code = searchParams?.get("invite_code");
    if (invite_code?.length == 11 && referralRef.current) {
      referralRef.current.value = invite_code;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current?.value.trim();
    const phone = phoneRef.current?.value.trim();
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    const referral = referralRef.current?.value.trim();

    if (!username || username.length < 6 || username.length > 15) {
      return toast.error("Username must be 6–15 characters long");
    }
    if (!phone || phone.length !== 11) {
      return toast.error("Enter a valid mobile number (example: 01312XXXXXX)");
    }
    if (!password || password.length < 6 || password.length > 14) {
      return toast.error("Password must be 6–14 characters long");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setIsSubmitting(true);
      // ✅ Generate fingerprint ID
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      const fingerprint_id = result?.visitorId;

      const res = await fetch("/api/user/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          phone_number: String(phone),
          password,
          invited_by: referral,
          fingerprint_id,
        }),
      });
      const data = await res.json();
      setIsSubmitting(false);
      if (data.success) {
        toast.success("Registration successful!");
        window.location.href = "/";
      } else {
        return toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      setIsSubmitting(false);
      console.log(err);
      toast.error("Something went wrong, please try again later");
    }
  };

  return (
    <div className="mx-auto md:my-10 w-full md:w-auto">
      <form
        onSubmit={handleSubmit}
        className="md:w-lg bg-white min-h-dvh dark:bg-stone-900 pb-10"
      >
        {/* <div className="relative aspect-693/200">
          <Image
            src="/banners/register_banner.jpg"
            alt="banner"
            fill
            className="object-cover"
          />
        </div> */}

        <div className=" py-5 border-b-2 border-orange-600 text-lg font-semibold flex justify-center items-center mt-2 text-blue-600 space-x-2 ">
          <Link href="/auth/login">Login</Link>
          <p className="text-dark dark:text-light">|</p>
          <Link
            className="text-orange-700 border-b-2 border-orange-600"
            href="/auth/register"
          >
            Register
          </Link>
        </div>

        <div className="w-[90%] max-w-88 md:w-[70%] mx-auto my-5 space-y-2 md:space-y-4">
          {/* Username */}
          <div className="flex flex-col relative">
            <label htmlFor="username" className="relative">
              Username{" "}
              <span className="text-red-600 font-semibold text-lg">*</span>
              <CircleQuestionMark
                className="absolute text-lg right-0 top-0 cursor-pointer"
                onClick={() => setShowUsernameTooltip(!showUsernameTooltip)}
              />
            </label>
            {showUsernameTooltip && (
              <span className="bg-black/70 dark:bg-white/70 py-0.5 px-2 rounded-sm text-sm text-white dark:text-black absolute right-6 top-0 z-10">
                Must be at least 6 to 11 characters
              </span>
            )}
            <input
              ref={usernameRef}
              id="username"
              type="text"
              placeholder="Enter username here"
              className="px-2 py-1 border outline-orange-400 border-gray-800 rounded-lg text-gray-800 dark:text-white dark:border-white text-lg"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col relative">
            <label htmlFor="phoneNumber" className="relative">
              Mobile Number{" "}
              <span className="text-red-600 font-semibold text-lg">*</span>
            </label>
            <div className="flex space-x-2">
              <input
                id="countryCode"
                type="text"
                value="+88"
                className="px-2 border w-16 outline-orange-400 border-gray-800 rounded-lg text-gray-800 dark:text-white dark:border-white text-lg"
                readOnly
              />
              <input
                ref={phoneRef}
                id="phoneNumber"
                type="number"
                placeholder="013637XXXX"
                className="grow px-2 py-1 w-full border outline-orange-400 border-gray-800 rounded-lg text-gray-800 dark:text-white dark:border-white text-lg"
                onWheel={(e) => e.currentTarget.blur()}
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col relative">
            <label htmlFor="password" className="relative">
              Password{" "}
              <span className="text-red-600 font-semibold text-lg">*</span>
              <CircleQuestionMark
                className="absolute text-lg right-0 top-0 cursor-pointer"
                onClick={() => setShowPasswordTooltip(!showPasswordTooltip)}
              />
            </label>
            {showPasswordTooltip && (
              <span className="bg-black/70 dark:bg-white/70 py-0.5 px-2 rounded-sm text-sm text-white dark:text-black absolute right-6 top-0 z-10">
                Must be at least 6 to 14 characters
              </span>
            )}
            <div className="relative w-full">
              <input
                ref={passwordRef}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password here"
                className="px-2 py-1 border w-full outline-orange-400 border-gray-800 rounded-lg text-gray-800 dark:text-white dark:border-white text-lg"
              />
              <Eye
                onClick={() => {
                  setShowPassword(!showPassword);
                  passwordRef.current?.focus();
                }}
                className="absolute cursor-pointer right-1 text-2xl bottom-1/2 translate-y-1/2"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col relative">
            <label htmlFor="confirmPassword" className="relative">
              Confirm Password{" "}
              <span className="text-red-600 font-semibold text-lg">*</span>
            </label>
            <div className="relative w-full">
              <input
                ref={confirmPasswordRef}
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password here"
                className="px-2 py-1 border w-full outline-orange-400 border-gray-800 rounded-lg text-gray-800 dark:text-white dark:border-white text-lg"
              />
              <Eye
                onClick={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                  confirmPasswordRef.current?.focus();
                }}
                className="absolute cursor-pointer right-1 text-2xl bottom-1/2 translate-y-1/2"
              />
            </div>
          </div>

          {/* Referral */}
          <div className="flex flex-col relative">
            <label htmlFor="referral" className="relative">
              Referral Code
            </label>
            <div className="relative w-full">
              <input
                ref={referralRef}
                id="referral"
                type="text"
                placeholder="( Optional )"
                className="px-2 py-1 border w-full outline-orange-400 border-gray-800 rounded-lg text-gray-800 dark:text-white dark:border-white text-lg"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 py-2 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterClient;
