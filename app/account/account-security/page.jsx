"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Eye, EyeOff, CheckCircle, Check } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { SecurityMeter } from "../SecurityMeter";

export default function AccountSecurityPage() {
  const [displayName, setDisplayName] = useState("");
  const [verifiedHuman, setVerifiedHuman] = useState(false);
  const [my2fa, setMy2fa] = useState(false);
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
  const [bankData, setBankData] = useState(null);
  const [profileInfo, setProfileInfo] = useState(null);
  const [showBankForm, setShowBankForm] = useState(false);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [securityNumber, setSecurityNumber] = useState(0);

  useEffect(() => {
    let count = 0;
    if (displayName) count += 1;
    if (verifiedHuman) count += 1;
    if (my2fa) count += 1;
    if (bankData) count += 1;
    if (profileInfo) count += 1;
    setSecurityNumber(count);
    console.log(
      "name, human, my2fa, bankdata, profileinfo",
      displayName,
      verifiedHuman,
      my2fa,
      bankData,
      profileInfo
    );
  }, [displayName, verifiedHuman, my2fa, bankData, profileInfo]);

  // Load client-only data on mount to avoid SSR/client mismatch
  useEffect(() => {
    try {
      setDisplayName(localStorage.getItem("displayName"));
      setVerifiedHuman(localStorage.getItem("verifiedHuman") === "true");

      setMy2fa(localStorage.getItem("my2fa"));

      const saved = localStorage.getItem("bankAccount");
      if (saved) {
        const parsed = JSON.parse(saved);
        setBankData(parsed);
      }

      const profile = localStorage.getItem("profileInfo");
      if (profile) {
        const parsed = JSON.parse(profile);
        setProfileInfo(parsed);
      }
    } catch (e) {
      // ignore malformed localStorage
      console.warn("Failed to read localStorage in AccountSecurityPage", e);
    }
  }, []);

  return (
    <div className="grow h-full bg-orange-50 dark:bg-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded shadow-sm"
      >
        <div className="p-4 border-b dark:border-gray-700">
          <SecurityMeter
            meterStatus={
              securityNumber >= 4 ? 4 : securityNumber <= 2 ? 2 : securityNumber
            }
          />
          <h2 className="font-semibold text-center">Account Security</h2>
        </div>

        <div className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">1. Change Password</p>
              <p className="text-xs text-gray-500">This is a critical field.</p>
            </div>
            <button
              onClick={() => setShowChangePassword(true)}
              className=" w-22.5 h-8 text-sm bg-orange-500 text-white rounded"
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

          <BankAccountRow
            bankData={bankData}
            setBankData={setBankData}
            setShowBankForm={setShowBankForm}
          />

          <ProfileRow
            profileInfo={profileInfo}
            setShowProfileForm={setShowProfileForm}
          />

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
              onSubmit={async (e) => {
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
                  setError(err.message || "Failed to change password");
                }
              }}
            />
          )}
        </div>
      </motion.div>

      <BankFormModal
        visible={showBankForm}
        onClose={() => setShowBankForm(false)}
        bankData={bankData}
        setBankData={setBankData}
      />
      <ProfileFormModal
        visible={showProfileForm}
        onClose={() => setShowProfileForm(false)}
        profileInfo={profileInfo}
        setProfileInfo={setProfileInfo}
      />
    </div>
  );
}

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
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">
            2. {displayName || "Display Name"}
          </p>
          <p className="text-xs text-gray-500">Change Your Name</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="w-22.5 h-8 bg-gray-200 dark:bg-gray-700 rounded text-sm"
        >
          Edit
        </button>
      </div>

      {showModal && (
        <div className="h-dvh w-full fixed top-0 left-0 bg-black/40 dark:bg-white/10 flex items-center justify-center z-30">
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
        <p className="text-xs text-gray-500">Humanity test.</p>
      </div>

      <button
        onClick={verify}
        disabled={verifiedHuman}
        className={`w-22.5 h-8 rounded text-sm bg-green-500 text-white disabled:opacity-80 active:scale-75 `}
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
        if (!isConfirmed) return;
        const res = await axios.get("/api/2fa/disable");
        if (res.data?.success) {
          toast.success("2FA disabled!");
          setMy2fa(false);
          localStorage.removeItem("my2fa");
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
          className={`w-22.5 h-8 rounded text-sm ${
            my2fa ? "bg-red-500 text-white" : "bg-blue-500 text-white"
          }`}
        >
          {my2fa ? "Disable" : "Enable"}
        </button>
      </div>

      {show2faSetupBox && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-full max-w-md mx-4 p-5 rounded-xl border bg-white dark:bg-gray-900 shadow-xl">
            <button
              onClick={() => setShow2faSetupBox(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            >
              <X className="w-6 h-6 text-red-600" />
            </button>

            <h3 className="font-semibold text-sm mb-3">
              Set up Two-Factor Authentication
            </h3>

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
                    className="px-2 py-1 bg-green-500 text-xs text-white rounded active:scale-95 transition-transform duration-75"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>

            <hr className="my-4 border-gray-300 dark:border-gray-700" />

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
                      localStorage.setItem("my2fa", "true");
                      setShow2faSetupBox(false);
                    } else {
                      toast.error(res.data.message);
                    }
                  } catch (err) {
                    console.log(err?.message);
                    toast.error("Unable to verify code");
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

function BankAccountRow({ bankData, setBankData, setShowBankForm }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">5. Bank Account</p>
        <p className="text-xs text-gray-500">Add your payout bank details</p>
      </div>

      <button
        onClick={() => setShowBankForm(true)}
        className={`w-24 h-8 rounded text-sm ${
          bankData ? "bg-gray-200 dark:bg-gray-700" : "bg-orange-500 text-white"
        }`}
      >
        {bankData ? "Edit" : "Add"}
      </button>
    </div>
  );
}

// Bank form modal (inserted at bottom of file)
function BankFormModal({ visible, onClose, bankData, setBankData }) {
  const [accountNumber, setAccountNumber] = useState(
    bankData?.accountNumber || ""
  );
  const [bankName, setBankName] = useState(bankData?.bankName || "");

  const banks = ["BRAC Bank", "Dutch-Bangla", "ISLAMI BANK", "Eastern Bank"];

  useEffect(() => {
    setAccountNumber(bankData?.accountNumber);
    setBankName(bankData?.bankName);
  }, [bankData]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Bank Account Details</h3>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X />
          </button>
        </div>

        <div className="space-y-3">
          <label className="block text-sm">Bank account number</label>
          <input
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-gray-50 dark:bg-gray-700"
          />

          <label className="block text-sm">Bank name</label>
          {/* custom select */}
          <div className="relative">
            <select
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="appearance-none w-full px-3 py-2 border rounded bg-white dark:bg-gray-800"
            >
              <option value="">Select bank</option>
              {banks.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="w-4 h-4 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={onClose}
              className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (!accountNumber || !bankName) {
                  toast.error("Please fill all fields");
                  return;
                }
                const payload = { accountNumber, bankName };
                localStorage.setItem("bankAccount", JSON.stringify(payload));
                setBankData(payload);
                toast.success("Bank details saved");
                onClose();
              }}
              className="px-3 py-2 rounded bg-orange-500 text-white"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          <h2 className="text-lg font-semibold">Change Password</h2>
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
                label={i === 0 ? "Current Password" : "New Password"}
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
            Change
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

function ProfileRow({ profileInfo, setShowProfileForm }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">6. Profile Information</p>
        <p className="text-xs text-gray-500">National ID, DOB and address</p>
      </div>

      <button
        onClick={() => setShowProfileForm(true)}
        className={`w-24 h-8 rounded text-sm ${
          profileInfo
            ? "bg-gray-200 dark:bg-gray-700"
            : "bg-orange-500 text-white"
        }`}
      >
        {profileInfo ? "Edit" : "Add"}
      </button>
    </div>
  );
}

function ProfileFormModal({ visible, onClose, profileInfo, setProfileInfo }) {
  const [nidName, setNidName] = useState(profileInfo?.nidName || "");
  const [nidNumber, setNidNumber] = useState(profileInfo?.nidNumber || "");
  const [dob, setDob] = useState(profileInfo?.dob || "");
  const [address, setAddress] = useState(profileInfo?.address || "");
  const [fatherName, setFatherName] = useState(profileInfo?.fatherName || "");

  useEffect(() => {
    setNidName(profileInfo?.nidName);
    setNidNumber(profileInfo?.nidNumber);
    setDob(profileInfo?.dob);
    setAddress(profileInfo?.address);
    setFatherName(profileInfo?.fatherName);
  }, [profileInfo]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Profile Information</h3>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X />
          </button>
        </div>

        <div className="space-y-3">
          <label className="block text-sm">Name on NID</label>
          <input
            value={nidName}
            onChange={(e) => setNidName(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-gray-50 dark:bg-gray-700"
          />

          <label className="block text-sm">NID Number</label>
          <input
            value={nidNumber}
            onChange={(e) => setNidNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-gray-50 dark:bg-gray-700"
          />

          <label className="block text-sm">Date of birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-white dark:bg-gray-700"
          />

          <label className="block text-sm">Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-gray-50 dark:bg-gray-700"
          />

          <label className="block text-sm">Father's name</label>
          <input
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-gray-50 dark:bg-gray-700"
          />

          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={onClose}
              className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (!nidName || !nidNumber || !dob || !address || !fatherName) {
                  toast.error("Please fill all fields");
                  return;
                }
                const payload = {
                  nidName,
                  nidNumber,
                  dob,
                  address,
                  fatherName,
                };
                localStorage.setItem("profileInfo", JSON.stringify(payload));
                setProfileInfo(payload);
                toast.success("Profile information saved");
                onClose();
              }}
              className="px-3 py-2 rounded bg-orange-500 text-white"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
