"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Copy,
  Wallet,
  InfoIcon,
  User2Icon,
  X,
  Eye,
  EyeOff,
  Check,
  CheckCircle,
  Settings,
  ArrowRight,
  Lock,
  Gift,
  Link2,
  UserRoundPen,
} from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { SecurityMeter } from "./SecurityMeter";
import Link from "next/link";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { GoArrowUpRight } from "react-icons/go";
import { AiFillDashboard } from "react-icons/ai";
import {
  MdOutlineLockPerson,
  MdOutlineWorkspacePremium,
  MdWorkspacePremium,
} from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import {
  FaBell,
  FaCheckCircle,
  FaComment,
  FaComments,
  FaFileInvoiceDollar,
  FaGift,
  FaInfoCircle,
  FaLink,
  FaLock,
  FaWallet,
  FaEdit,
  FaUserEdit,
} from "react-icons/fa";
import Image from "next/image";
import { IoCopy, IoWalletSharp } from "react-icons/io5";
import { HiMiniUsers } from "react-icons/hi2";

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Local Storage Security Fields
  const [displayName, setDisplayName] = useState("");
  const [verifiedHuman, setVerifiedHuman] = useState(false);
  const [my2fa, setMy2fa] = useState(false);
  const [score, setScore] = useState(2);

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [copying, setCopying] = useState(false);

  const [currentUserPic, setCurrentUserPic] = useState(
    "/user_pics/user_img_02.jpg"
  );

  const [showPicPicker, setShowPicPicker] = useState(false);

  useEffect(() => {
    if (my2fa && displayName && verifiedHuman) {
      setScore(4);
    } else if (
      (my2fa && displayName) ||
      (my2fa && verifiedHuman) ||
      (displayName && verifiedHuman)
    ) {
      setScore(3);
    }
  }, [my2fa, displayName, verifiedHuman]);

  useEffect(() => {
    if (user?.is_2fa_verified) {
      setMy2fa(true);
    }
  }, [user]);

  useEffect(() => {
    fetchUserData();
    setDisplayName(localStorage.getItem("displayName") || "");
    setVerifiedHuman(localStorage.getItem("verifiedHuman") === "true");
    const saved = localStorage.getItem("profilePic");
    if (saved) setCurrentUserPic(saved);
    // setMy2fa(localStorage.getItem("my2fa") === "true");
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/user/profile");
      // if (!response.ok) return router.push("/auth");

      const data = await response.json();
      setUser(data.user);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const copyInviteLink = async () => {
    if (!user?.phone_number) return;

    try {
      await navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register/?invite_code=${user?.phone_number}`
      );
      setCopying(true);
      setTimeout(() => setCopying(false), 1800);
    } catch (e) {
      console.error(e);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      return setError("New passwords don't match");
    }

    try {
      const res = await fetch("/api/user/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setSuccess("Password changed successfully");
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setShowChangePassword(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const allUserPics = [
    "/user_pics/user_img_01.jpg",
    "/user_pics/user_img_02.jpg",
    "/user_pics/user_img_03.jpg",
    "/user_pics/user_img_04.jpg",
    "/user_pics/user_img_05.jpg",
    "/user_pics/user_img_06.jpg",
  ];

  if (loading) {
    return (
      <div className="grow h-full p-4 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
      </div>
    );
  }

  return (
    <div className="grow h-full bg-orange-50 dark:bg-gray-900 p-4">
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg"
      >
        <div className=" p-6 pb-0 pt-4 text-stone-800 dark:text-white flex items-center gap-4">
          <div className="bg-white/10 p-1 rounded-full overflow-hidden relative">
            {/* <User size={24} /> */}
            <button
              onClick={() => setShowPicPicker(true)}
              aria-label="Change profile picture"
              className="rounded-full overflow-hidden block"
            >
              <Image
                width={60}
                height={60}
                src={currentUserPic}
                alt="user_pic"
                className=" rounded-full overflow-hidden bg-white cursor-pointer"
                sizes=""
              />
            </button>

            {/* Pencil edit icon */}
            <button
              onClick={() => setShowPicPicker(true)}
              className="absolute bottom-2 right-2   "
              aria-label="Edit profile picture"
            >
              <UserRoundPen
                strokeWidth={3}
                className="text-orange-600 bg-white p-1 rounded-full "
              />
            </button>
          </div>
          <div>
            <h1 className="text-lg font-bold">{user?.phone_number}</h1>
            <p className="dark:text-orange-100 font-semibold">
              {user?.user_code || "N / A"}
            </p>
          </div>
        </div>

        <div className="p-6 pt-2 space-y-3">
          {/* Balance */}
          <div className="bg-orange-50 dark:bg-gray-700 p-4 flex justify-between">
            <div className="flex items-center gap-3">
              <FaWallet className="text-orange-600" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Balance
                </p>
                <p className="text-xl font-bold">৳{user?.balance || 0}</p>
              </div>
            </div>

            <div>
              <div
                className="flex gap-2 text-sm text-gray-600 dark:text-gray-300 cursor-pointer"
                onClick={() =>
                  toast.success(
                    "If you deposit when the balance is below 50, the turnover resets to 0."
                  )
                }
              >
                Turnover{" "}
                <FaInfoCircle className="text-orange-600 text-xl animate-bounce-twice " />
              </div>
              <p className="font-medium">৳ {user?.turn_over || 0}</p>
            </div>
          </div>

          {/* User info */}
          <div className="space-y-4">
            {/* <InfoRow
              icon={<User2Icon className="text-orange-600" />}
              label="username"
              value={user?.user_code || "N/A"}
            /> */}

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="text-2xl">
                  <FaLink className="text-orange-600 " />
                </div>
                <div>
                  <div className="flex gap-x-2 items-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Refer Link
                    </p>
                    <button
                      onClick={copyInviteLink}
                      className=" hover:bg-orange-100 dark:hover:bg-gray-700 rounded-full text-xl"
                    >
                      {copying ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : (
                        <IoCopy className="text-orange-600" />
                      )}
                    </button>
                  </div>
                  <p className="font-medium line-clamp-1 max-w-[80%] ">{`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register/?invite_code=${user?.phone_number}`}</p>
                </div>
              </div>
            </div>

            <InfoRow
              icon={<User className="text-orange-600" />}
              label="Referrer"
              value={user?.invited_by || "N/A"}
            />
          </div>
        </div>
      </motion.div>

      {/* DP, WD, Section */}

      <div className="grid grid-cols-4 gap-1 mt-5 max-w-sm mx-auto">
        {[
          {
            icon: GiWallet,
            name: "Deposit",
            href: "/wallet",
          },
          {
            icon: IoWalletSharp,
            name: "Withdraw",
            href: "/wallet/?type=withdraw",
          },
          {
            icon: MdOutlineLockPerson,
            name: "Security",
            href: "/account/account-security",
          },
          {
            icon: HiMiniUsers,
            name: "Invite",
            href: "/referral",
          },
        ].map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col gap-1 items-center rounded-full w-full"
            >
              <Link
                className={`  aspect-square p-3 bg-orange-600 rounded-full text-white `}
                href={item.href}
              >
                <item.icon className="text-3xl" />
              </Link>
              <h2 className=" text-sm font-semibold">{item.name}</h2>
            </div>
          );
        })}
      </div>

      {/* Link to Security Page */}
      <div className="max-w-md mx-auto my-6 bg-white dark:bg-gray-800 rounded shadow-sm">
        <div className="p-4 bg-orange-600 ">
          <h2 className="font-semibold flex justify-center items-center text-white gap-1">
            <Settings /> Account Options
          </h2>
        </div>

        <Link
          href="/account/account-security"
          className="px-4 py-3 dark:bg-slate-800 bg-white border-y border-orange-600 flex justify-between items-center font-semibold"
        >
          <h3 className="flex gap-2 items-center">
            {" "}
            <FaLock className="text-2xl text-orange-600" /> Security Settings
          </h3>{" "}
          <ArrowRight className="text-xl" />
        </Link>

        <Link
          href="/referral"
          className="px-4 py-3 dark:bg-slate-800 bg-white border-b border-orange-600 flex justify-between items-center font-semibold"
        >
          <h3 className="flex gap-2 items-center">
            {" "}
            <FaGift className="text-2xl text-orange-600 animate-bounce-twice " />{" "}
            Reward Center
          </h3>{" "}
          <ArrowRight className="text-xl" />
        </Link>

        <Link
          href="/wallet"
          className="px-4 py-3 dark:bg-slate-800 bg-white border-b border-orange-600 flex justify-between items-center font-semibold"
        >
          <h3 className="flex gap-2 items-center">
            {" "}
            <FaFileInvoiceDollar className="text-2xl text-orange-600" /> Deposit
            Record
          </h3>{" "}
          <ArrowRight className="text-xl" />
        </Link>

        <Link
          href="/wallet"
          className="px-4 py-3 dark:bg-slate-800 bg-white border-b border-orange-600 flex justify-between items-center font-semibold"
        >
          <h3 className="flex gap-2 items-center">
            {" "}
            <FaFileInvoiceDollar className="text-2xl text-orange-600" />{" "}
            Withdraw Record
          </h3>{" "}
          <ArrowRight className="text-xl" />
        </Link>

        <Link
          href="/notifications"
          className="px-4 py-3 dark:bg-slate-800 bg-white border-b border-orange-600 flex justify-between items-center font-semibold"
        >
          <h3 className="flex gap-2 items-center">
            {" "}
            <FaBell className="text-2xl text-orange-600 animate-bounce-twice " />{" "}
            Your Notifications
          </h3>{" "}
          <ArrowRight className="text-xl" />
        </Link>

        <Link
          href="/support"
          className="px-4 py-3 dark:bg-slate-800 bg-white border-b border-orange-600 flex justify-between items-center font-semibold"
        >
          <h3 className="flex gap-2 items-center">
            {" "}
            <FaComments className="text-2xl text-orange-600" /> Help & Support
          </h3>{" "}
          <ArrowRight className="text-xl" />
        </Link>

        {/* <Link
          href="/missions"
          className="px-4 py-3 dark:bg-slate-800 bg-white border-b border-orange-600 flex justify-between items-center font-semibold"
        >
          <h3 className="flex gap-2 items-center">
            {" "}
            <AiFillDashboard className="text-2xl text-orange-600" /> Missions
          </h3>{" "}
          <ArrowRight className="text-xl" />
        </Link> */}

        {/* <Link
          href="/subscriptions"
          className="px-4 py-3 dark:bg-slate-800 bg-white border-b border-orange-600 flex justify-between items-center font-semibold"
        >
          <h3 className="flex gap-2 items-center">
            {" "}
            <MdWorkspacePremium className="text-2xl text-orange-600" />{" "}
            Subscriptions
          </h3>{" "}
          <ArrowRight className="text-xl" />
        </Link> */}
      </div>

      {/* Picture picker modal */}
      {showPicPicker && (
        <div
          onClick={() => setShowPicPicker(false)}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Select Profile Picture</h3>
              <button
                onClick={() => setShowPicPicker(false)}
                className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {allUserPics.map((p) => (
                <button
                  key={p}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentUserPic(p);
                    localStorage.setItem("profilePic", p);
                    toast.success("Profile picture updated");
                    setShowPicPicker(false);
                  }}
                  className={`rounded overflow-hidden border ${
                    currentUserPic === p ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  <Image
                    src={p}
                    alt={p}
                    width={120}
                    height={120}
                    className="object-cover block w-full h-24 sm:h-28"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------ REUSABLE SMALL COMPONENT ------------------ */

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-2xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
        <p className="font-medium line-clamp-1 ">{value}</p>
      </div>
    </div>
  );
}

