"use client";

import axios from "axios";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginWith, setLoginWith] = useState("phone"); // username or phone

  const router = useRouter();
  const pathname = usePathname();

  const usernameRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current?.value.trim();
    const phone = phoneRef.current?.value.trim();
    const password = passwordRef.current?.value;

    if (loginWith === "username") {
      if (!username) return toast.error("username is required");
    } else {
      if (!phone || phone.length !== 11 || !phone?.startsWith("01"))
        return toast.error("Wrong Phone Number Format (EX: 0134837XXXX)");
    }

    if (!password) return toast.error("password is required");

    try {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      const fp_id = result?.visitorId;
      const res = await axios.post("/api/user/sign-in", {
        loginWith,
        username: loginWith === "username" ? username : null,
        phone_number: loginWith === "phone" ? String(phone) : null,
        password,
        fp_id,
      });
      if (!res.data.success)
        return toast.error(res.data.message || "Login Failed");
      toast.success("Login Succeed!");
      window.location.href = "/";
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong! Try again.");
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

        <div className=" py-5 border-b-2 border-orange-700 text-lg  flex justify-center items-center mt-2 text-blue-500 space-x-2 font-semibold ">
          <Link
            className="text-orange-700 border-b-2 border-orange-700"
            href="/auth/login"
          >
            Login
          </Link>
          <p className="text-dark dark:text-light">|</p>
          <Link href="/auth/register">Register</Link>
        </div>

        <div className="w-[90%] max-w-88 md:w-[70%] mx-auto my-5 space-y-2 md:space-y-2">
          {/* Toggle Login Method */}
          <div className="flex justify-center space-x-2 mb-4">
            <button
              type="button"
              onClick={() => setLoginWith("phone")}
              className={`px-4 py-1 rounded-lg  border ${
                loginWith === "phone"
                  ? "bg-orange-700 text-stone-200 border-orange-700"
                  : "bg-white dark:bg-stone-800 text-gray-800 dark:text-stone-200 border-gray-400"
              }`}
            >
              phone
            </button>
            <button
              type="button"
              onClick={() => setLoginWith("username")}
              className={`px-4 py-1 rounded-lg  border ${
                loginWith === "username"
                  ? "bg-orange-700 text-stone-200 border-orange-700"
                  : "bg-white dark:bg-stone-800 text-gray-800 dark:text-stone-200 border-gray-400"
              }`}
            >
              username
            </button>
          </div>

          {/* Username or Phone Input */}
          {loginWith === "username" ? (
            <div className="flex flex-col">
              <label htmlFor="username" className="relative ">
                Username <span className="text-red-600">*</span>
              </label>
              <input
                ref={usernameRef}
                id="username"
                type="text"
                placeholder="Provide Username"
                className="px-2 py-1 border outline-orange-400 border-gray-800 rounded-lg text-gray-800 dark:text-stone-200 dark:border-white text-lg"
              />
              <span className="text-sm text-gray-500 mt-1">
                This field is required
              </span>
            </div>
          ) : (
            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="relative ">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <div className="flex space-x-2">
                <input
                  id="countryCode"
                  type="text"
                  value="+88"
                  className="px-2 border w-16 outline-orange-400 border-gray-800 rounded-lg text-gray-800 dark:text-stone-200 dark:border-white text-lg"
                  readOnly
                />
                <input
                  ref={phoneRef}
                  id="phoneNumber"
                  type="number"
                  placeholder="0131234XXXX"
                  className="grow px-2 py-1 w-full border outline-orange-400 border-gray-800 rounded-lg text-gray-800 dark:text-stone-200 dark:border-white text-lg"
                  onWheel={(e) => e.currentTarget.blur()}
                />
              </div>
              <span className="text-sm text-gray-400 mt-1">
                This field is required
              </span>
            </div>
          )}

          {/* Password */}
          <div className="flex flex-col relative">
            <label htmlFor="password" className="relative ">
              Password <span className="text-red-600">*</span>
            </label>
            <div className="relative w-full">
              <input
                ref={passwordRef}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Provide Password"
                className="px-2 py-1 border w-full outline-orange-400 border-gray-800 rounded-lg text-gray-800 dark:text-stone-200 dark:border-white text-lg"
              />
              <Eye
                onClick={() => {
                  setShowPassword(!showPassword);
                  passwordRef.current?.focus();
                }}
                className="absolute cursor-pointer right-1 text-2xl bottom-1/2 translate-y-1/2"
              />
            </div>
            {/* <span className="text-sm text-gray-400 mt-1">
              এটি একটি বাধ্যতামূলক ক্ষেত্র
            </span> */}
            <div className="text-sm text-stone-200 mt-1">
              <span>Lost Your Password?</span>{" "}
              <Link
                href="/auth/forgot-password"
                className="inline-block text-blue-600 "
              >
                forgot password
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-orange-700 text-stone-200  rounded-lg hover:bg-orange-700 transition"
          >
            Login
          </button>

          {/* Links */}
          <div className="text-center text-sm mt-4 space-y-2">
            <p>
              Don't have any account?{" "}
              <Link href="/auth/register" className="text-orange-700 ">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
