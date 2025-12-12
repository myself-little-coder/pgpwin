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
} from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { SecurityMeter } from "./SecurityMeter";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

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
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [copying, setCopying] = useState(false);

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

  const copyInviteCode = async () => {
    if (!user?.phone_number) return;

    try {
      await navigator.clipboard.writeText(user.phone_number);
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
        <div className="bg-orange-600 p-2 text-white flex items-center gap-4">
          <div className="bg-white/10 p-3 rounded-full">
            <User size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Profile</h1>
            <p className="text-orange-100">Manage Your Account</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Balance */}
          <div className="bg-orange-50 dark:bg-gray-700 p-4 flex justify-between">
            <div className="flex items-center gap-3">
              <Wallet className="text-orange-600" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ব্যালেন্স
                </p>
                <p className="text-xl font-bold">৳{user?.balance || 0}</p>
              </div>
            </div>

            <div>
              <div
                className="flex gap-2 text-sm text-gray-600 dark:text-gray-300 cursor-pointer"
                onClick={() =>
                  toast.success(
                    "ব্যালান্স ৫০ এর নিচে থাকলে টাকা জমা দিলে পুরনো টার্নওভার মুছে যাবে।"
                  )
                }
              >
                টার্নওভার <InfoIcon className="text-orange-600 text-xl" />
              </div>
              <p className="font-medium">৳{user?.turn_over || 0}</p>
            </div>
          </div>

          {/* User info */}
          <div className="space-y-4">
            <InfoRow
              icon={<User2Icon className="text-orange-600" />}
              label="ইউজারনেম"
              value={user?.user_code || "N/A"}
            />

            <div className="flex justify-between items-center">
              <InfoRow
                icon={<Phone className="text-orange-600" />}
                label="ফোন নম্বর (রেফারেল)"
                value={user?.phone_number}
              />
              <button
                onClick={copyInviteCode}
                className="p-2 hover:bg-orange-100 dark:hover:bg-gray-700 rounded-full"
              >
                {copying ? (
                  <Check className="text-green-500" />
                ) : (
                  <Copy className="text-orange-600" />
                )}
              </button>
            </div>

            <InfoRow
              icon={<User className="text-orange-600" />}
              label="আমন্ত্রণকারী"
              value={user?.invited_by || "N/A"}
            />
          </div>
        </div>
      </motion.div>

      {/* Security Section */}
      <div className="max-w-md mx-auto mt-6 bg-white dark:bg-gray-800 rounded shadow-sm">
        <div className="p-4 border-b dark:border-gray-700">
          {/* Show here a circle security meter, devided in 4 parts, 2 dashed will be filled 2nd one with yellow color and first one with red color if meterStatus === 2, three will be filled and third one will be green if meterStatus === 3 and all of 4 parts will be filled and last one will be dark green if meterStatus === 4   */}
          <SecurityMeter meterStatus={score} />

          <h2 className="font-semibold text-center pt-4">Account Security</h2>
        </div>

        <div className="p-4 space-y-4">
          {/* Open Password Modal */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">1. Change Password</p>
              <p className="text-xs text-gray-500">This is a critical field.</p>
            </div>
            <button
              onClick={() => setShowChangePassword(true)}
              className=" w-[70px] h-8 text-sm bg-orange-500 text-white rounded"
            >
              Change
            </button>
          </div>

          <ChangeNameRow
            displayName={displayName}
            setDisplayName={setDisplayName}
          />

          <VerifyHumanRow
            verifiedHuman={verifiedHuman}
            setVerifiedHuman={setVerifiedHuman}
          />

          <MyToggleRow my2fa={my2fa} setMy2fa={setMy2fa} />
        </div>
      </div>

      {/* Password Modal */}
      {showChangePassword && (
        <PasswordModal
          error={error}
          success={success}
          setError={setError}
          setSuccess={setSuccess}
          passwordForm={passwordForm}
          setPasswordForm={setPasswordForm}
          showPasswords={showPasswords}
          setShowPasswords={setShowPasswords}
          onClose={() => setShowChangePassword(false)}
          onSubmit={handlePasswordChange}
        />
      )}
    </div>
  );
}

/* ------------------ REUSABLE SMALL COMPONENT ------------------ */

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

/* ------------------ SECURITY COMPONENTS ------------------ */

function ChangeNameRow({ displayName, setDisplayName }) {
  const [showModal, setShowModal] = useState(false);
  const [temp, setTemp] = useState(displayName || "");

  const save = () => {
    if (!temp.trim()) return toast.error("Name cannot be empty");
    localStorage.setItem("displayName", temp);
    setDisplayName(temp);
    setShowModal(false);
    toast.success("Name updated");
  };

  return (
    <>
      {/* Row */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">2. {temp}</p>
          <p className="text-xs text-gray-500">Change Your Name</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="w-[70px] h-8 bg-gray-200 dark:bg-gray-700 rounded text-sm"
        >
          Edit
        </button>
      </div>

      {/* Popup */}
      {showModal && (
        <div className="h-dvh w-full fixed top-0 left-0 bg-black/40 dark:bg-white/10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-neutral-900 p-5 rounded-xl w-[90%] max-w-[380px] shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-4">Change Display Name</h3>

            <input
              className="w-full px-3 py-2 border rounded mb-4"
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
              placeholder="Enter new name"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
              >
                Cancel
              </button>

              <button
                onClick={save}
                className="px-4 py-2 rounded bg-orange-500 text-white"
              >
                Save
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

function VerifyHumanRow({ verifiedHuman, setVerifiedHuman }) {
  const verify = () => {
    localStorage.setItem("verifiedHuman", "true");
    setVerifiedHuman(true);
    toast.success("Verified");
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm font-medium">3. Verify Human</p>
        <p className="text-xs text-gray-500">Local check only.</p>
      </div>

      <button
        onClick={verify}
        disabled={verifiedHuman}
        className={`w-[70px] h-8 rounded text-sm bg-green-500 text-white disabled:opacity-80 active:scale-75 `}
      >
        {verifiedHuman ? "Verified" : "Verify"}
      </button>
    </div>
  );
}

function MyToggleRow({ my2fa, setMy2fa }) {
  const [my2faSecret, setMy2faSecret] = useState(null);
  const [my2faQR, setMy2faQR] = useState(null);
  const [show2faSetupBox, setShow2faSetupBox] = useState(false);
  const code2faRef = useRef(null);

  const enable2fa = async () => {
    try {
      if (my2fa) {
        const isConfirmed = confirm(
          "Are You want to disable Two Factor Authentication?"
        );
        if (!isConfirmed) {
          return;
        }
        const res = await axios.get("/api/2fa/disable");
        if (res.data?.success) {
          toast.success("2FA disabled!");
          setMy2fa(false);
        } else {
          toast.error("Could not disable 2FA!");
        }
      } else {
        const res = await axios.get("/api/2fa/generate");
        if (res.data.success) {
          setMy2faSecret(res.data.secret);
          setMy2faQR(res.data.qr);
          setShow2faSetupBox(true);
        }
      }
    } catch (error) {
      toast.error("unable to enable 2fa!");
      console.log(error?.message);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm font-medium flex space-x-2">
            <p>4. Two-Factor </p>
            {my2fa ? <CheckCircle className="text-green-600 text-sm" /> : null}
          </div>
          <p className="text-xs text-gray-500">2FA Security.</p>
        </div>

        <button
          onClick={enable2fa}
          className={`w-[70px] h-8 rounded text-sm ${
            my2fa ? "bg-red-500 text-white" : "bg-blue-500 text-white"
          }`}
        >
          {my2fa ? "Disable" : "Enable"}
        </button>
      </div>

      {/* Show the qr image and secret with copy button with instruction and then the input and a verify button. the design must be theme responsive and good looking. */}

      {show2faSetupBox && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-full max-w-md mx-4 p-5 rounded-xl border bg-white dark:bg-gray-900 shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setShow2faSetupBox(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            >
              <X className="w-6 h-6 text-red-600" />
            </button>

            <h3 className="font-semibold text-sm mb-3">
              Set up Two-Factor Authentication
            </h3>

            {/* QR + Secret */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <img
                src={my2faQR}
                alt="2FA QR Code"
                className="w-40 h-40 border mx-auto rounded-lg p-2 bg-white"
              />

              <div className="space-y-2">
                <p className="text-xs text-gray-600 underline dark:text-gray-200">
                  Scan this QR or setup the scret code below using{" "}
                  <b>Google Authenticator</b> or <b>Authy</b>.
                </p>

                <div className="flex flex-wrap items-center gap-2 max-w-full">
                  <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded break-all max-w-full inline-block">
                    {my2faSecret}
                  </code>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(my2faSecret);
                      toast.success("Secret copied successfully!");
                    }}
                    className="px-2 py-1 bg-green-500 text-xs text-white rounded  
             active:scale-95 transition-transform duration-75"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4 border-gray-300 dark:border-gray-700" />

            {/* Enter Code */}
            <div className="space-y-2">
              <label className="text-xs font-medium">Enter 6-digit code</label>

              <input
                ref={code2faRef}
                type="text"
                maxLength={6}
                className="w-full px-3 py-2 border rounded bg-gray-50 dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123456"
              />

              <button
                onClick={async () => {
                  try {
                    // ✅ Generate fingerprint ID
                    const fp = await FingerprintJS.load();
                    const result = await fp.get();
                    const fp_id = result?.visitorId;
                    const res = await axios.post("/api/2fa/verify", {
                      code: code2faRef.current.value,
                      isFirstTime: true,
                      fp_id,
                    });

                    if (res.data.success) {
                      toast.success("2FA Enabled!");
                      setMy2fa(true);
                      setShow2faSetupBox(false);
                    } else {
                      toast.error(res.data.message);
                    }
                  } catch (err) {
                    console.log(err?.message);
                    toast.error(res.data.message);
                  }
                }}
                className="w-full py-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
              >
                Verify & Enable
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ------------------ PASSWORD MODAL ------------------ */

function PasswordModal({
  error,
  success,
  setError,
  setSuccess,
  passwordForm,
  setPasswordForm,
  showPasswords,
  setShowPasswords,
  onClose,
  onSubmit,
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">পাসওয়ার্ড পরিবর্তন</h2>
          <button
            onClick={() => {
              setError("");
              setSuccess("");
              onClose();
            }}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={onSubmit} className="p-4 space-y-4">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-3 text-sm">
              {success}
            </div>
          )}

          {["currentPassword", "newPassword", "confirmPassword"].map(
            (field, i) => (
              <PasswordInput
                key={field}
                label={i === 0 ? "বর্তমান পাসওয়ার্ড" : "নতুন পাসওয়ার্ড"}
                value={passwordForm[field]}
                onChange={(e) =>
                  setPasswordForm({ ...passwordForm, [field]: e.target.value })
                }
                show={showPasswords[Object.keys(showPasswords)[i]]}
                toggle={() =>
                  setShowPasswords({
                    ...showPasswords,
                    [Object.keys(showPasswords)[i]]:
                      !showPasswords[Object.keys(showPasswords)[i]],
                  })
                }
              />
            )
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3"
          >
            পরিবর্তন
          </button>
        </form>
      </motion.div>
    </div>
  );
}

function PasswordInput({ label, value, onChange, show, toggle }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          required
          className="w-full border px-4 py-2 dark:bg-gray-700"
        />
        <button
          type="button"
          onClick={toggle}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}
