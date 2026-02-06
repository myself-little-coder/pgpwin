"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { RefreshCw, Trophy, X, Sparkles, Check, Clock } from "lucide-react";

import axios from "axios";
import toast from "react-hot-toast";

const prizes = [
  { label: "1.63 TK", color: "fill-blue-500", textColor: "text-black" },
  { label: "10 FS", color: "fill-green-500", textColor: "text-black" },
  { label: "0.33 TK", color: "fill-purple-500", textColor: "text-black" },
  { label: "2 FS", color: "fill-orange-500", textColor: "text-black" },
  { label: "10,000 TK", color: "fill-pink-400", textColor: "text-black" },
  { label: "1.75 TK", color: "fill-blue-500", textColor: "text-black" },
  { label: "1.85 TK", color: "fill-green-500", textColor: "text-black" },
  { label: "766.42 TK", color: "fill-purple-500", textColor: "text-black" },
  { label: "0.88 TK", color: "fill-orange-500", textColor: "text-black" },
  { label: "0.96 TK", color: "fill-pink-500", textColor: "text-black" },
];

const ResultNotification = ({
  isVisible,
  onClose,
  label,
  autoCloseTime = 5,
}) => {
  const [timeLeft, setTimeLeft] = useState(autoCloseTime);

  useEffect(() => {
    if (!isVisible) {
      setTimeLeft(autoCloseTime);
      return;
    }
    if (timeLeft <= 0) {
      onClose();
      return;
    }
    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, isVisible, onClose, autoCloseTime]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          transition={{ duration: 0.3 }}
          className="fixed top-1/2 -translate-y-1/2 w-screen h-screen flex items-center justify-center bg-black/50 z-50"
        >
          <motion.div
            // initial={{ scale: 0, rotate: -180 }}
            // animate={{ scale: 1, rotate: 0 }}
            // transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-[320px] max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-orange-50 to-orange-100"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 p-1 rounded-full bg-white/20 hover:bg-white/30 text-gray-700"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="absolute top-0 inset-x-0 h-24 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-amber-500 opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Sparkles className="w-16 h-16 text-yellow-200 opacity-30" />
                </motion.div>
              </div>
            </div>

            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="rounded-full p-3 bg-linear-to-br from-amber-500 to-orange-600 shadow-lg"
              >
                <Trophy className="w-8 h-8 text-white" />
              </motion.div>
            </div>

            <div className="pt-26 pb-6 px-6">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-amber-500">
                  Congratulations!
                </h2>
              </motion.div>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-6 flex flex-col items-center gap-2"
              >
                <p className="text-gray-600 text-lg">You won</p>
                <div className="bg-linear-to-r from-yellow-400 to-orange-500 rounded-lg px-6 py-4 shadow-lg">
                  <span className="text-3xl font-bold text-white drop-shadow-lg">
                    {label}
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-6 flex justify-center gap-3"
              >
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full text-sm font-medium bg-orange-600 hover:bg-orange-700 text-white flex items-center shadow-lg"
                >
                  <Check className="w-4 h-4 mr-1" />
                  Awesome!
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-center mt-4 text-gray-500 text-xs"
              >
                <Clock className="w-3 h-3 mr-1" />
                <span>Closing in {timeLeft}s</span>
              </motion.div>
            </div>

            <div className="absolute bottom-0 inset-x-0 pb-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-around"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="relative"
                  >
                    <Sparkles
                      className="w-6 h-6 text-orange-300"
                      style={{
                        transform: `rotate(${i * 30}deg)`,
                        opacity: 0.3 + i * 0.1,
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function LuckySpin() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [particles, setParticles] = useState([]);
  const controls = useAnimation();
  const wheelRef = useRef(null);
  const [showResultNotification, setShowResultNotification] = useState(false);
  const [resultDetails, setResultDetails] = useState({
    label: "",
  });

  const [isDailyLuckySpinClaimable, setIsDailyLuckySpinClaimable] =
    useState(false);
  const [dailySpinCooldown, setDailySpinCooldown] = useState("00:00:00");

  useEffect(() => {
    let interval;
    if (!isDailyLuckySpinClaimable) {
      interval = setInterval(() => {
        const now = new Date();
        const nextMidnight = new Date();
        nextMidnight.setHours(24, 0, 0, 0);
        const diff = nextMidnight - now;

        const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(
          2,
          "0",
        );
        const minutes = String(
          Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        ).padStart(2, "0");
        const seconds = String(
          Math.floor((diff % (1000 * 60)) / 1000),
        ).padStart(2, "0");
        setDailySpinCooldown(`${hours}:${minutes}:${seconds}`);
      });
    }
    return () => clearInterval(interval);
  }, [isDailyLuckySpinClaimable]);

  const segmentAngle = 360 / prizes.length;
  const idleRotation = useRef(0);

  useEffect(() => {
    // const mountParticles = () => {
    //   const data = Array.from({ length: 70 }, () => ({
    //     left: Math.random() * 100,
    //     top: Math.random() * 100,
    //     delay: Math.random() * 2,
    //   }));
    //   setParticles(data);
    // };

    const fetchUser = async () => {
      try {
        const userRes = await axios.get("/api/user/profile");
        if (userRes.data?.success) {
          setUser(userRes.data?.user);
        } else {
          toast.error("Failed to fetch user details");
        }
        setLoadingUser(false);
      } catch (error) {
        toast.error("Failed to fetch user details");
        console.log(error?.message);
      }
    };

    const fetchLuckySpinClaimableStatus = async () => {
      try {
        const res = await axios.get("/api/user/lucky-spin-claim");
        if (res.data?.success) {
          setIsDailyLuckySpinClaimable(res.data?.canSpin);
        } else {
          console.log("Failed to fetch lucky spin claimable status");
        }
      } catch (error) {
        console.log(error?.message);
      }
    };

    // mountParticles();
    fetchUser();
    fetchLuckySpinClaimableStatus();
  }, []);

  const claimLuckySpin = async () => {
    try {
      const claimRes = await axios.post("/api/user/lucky-spin-claim");
      if (claimRes.data?.success) {
        toast.success(claimRes.data?.message || "Lucky spin claimed!");
        setIsDailyLuckySpinClaimable(false);
        setUser((prev) => ({
          ...prev,
          lucky_spin: prev.lucky_spin + 1,
        }));
      } else {
        toast.error(claimRes.data?.message || "Failed to claim free spin.");
      }
    } catch (error) {
      toast.error("Failed to claim free spin.");
      console.log(error?.message);
    }
  };

  useEffect(() => {
    let idleInterval;
    let isMounted = true;

    if (isButtonDisabled && !isSpinning) {
      idleInterval = setInterval(() => {
        if (!isMounted) return;
        idleRotation.current -= 1;
        requestAnimationFrame(() => {
          controls.start({
            rotate: idleRotation.current,
            transition: { duration: 0.1, ease: "linear" },
          });
        });
      }, 100);
    }

    return () => {
      isMounted = false;
      clearInterval(idleInterval);
    };
  }, [isButtonDisabled, isSpinning]);

  const startSpin = async () => {
    try {
      if (user.lucky_spin <= 0) {
        toast.error("Insufficient lucky spins.");
        return;
      }

      setIsButtonDisabled(true);

      const winningPrizeIndexRes = await axios.get(
        "/api/user/lucky-spin-start",
      );

      if (winningPrizeIndexRes.data?.success === false) {
        toast.error(
          winningPrizeIndexRes.data?.message || "Failed to start lucky spin.",
        );
        setIsButtonDisabled(false);
        return;
      }

      setUser((prev) => ({
        ...prev,
        lucky_spin: prev.lucky_spin - 1,
      }));

      const winningIndex = winningPrizeIndexRes.data?.index || 0;

      setIsSpinning(true);

      const offsetToCenter = segmentAngle / 2;

      const winningAngle = winningIndex * segmentAngle + offsetToCenter;

      const fullRotations = 360 * 8;
      const finalRotation = fullRotations - winningAngle;

      await controls.start({
        rotate: finalRotation,
        transition: {
          duration: 4 + Math.random() * 2,
          ease: [0.25, 0.1, 0.25, 1],
        },
      });

      setResultDetails({
        label: prizes[winningIndex]?.label || "",
      });
      setShowResultNotification(true);

      try {
        console.log("Fetching updated user profile...");
        const response = await axios.get("/api/user/profile");
        if (response.data?.success) {
          setUser(response.data.user);
        } else {
          console.error("Failed to update user after lucky spin.");
        }
      } catch (error) {
        console.error(error.message);
      }

      console.log("Spin completed. Result:", prizes[winningIndex]);

      setTimeout(async () => {
        console.log("Resetting wheel...");
        idleRotation.current = 0;

        await controls.start({
          rotate: 0,
          transition: { duration: 2, ease: "easeInOut" },
        });

        console.log("Wheel reset to 0 degrees.");
        setIsSpinning(false);

        setResultDetails({ label: "" });
        setIsButtonDisabled(false);
      }, 3000);
    } catch (error) {
      console.log(error?.message);
    }
  };

  const handleCloseResultNotification = () => {
    setShowResultNotification(false);
  };

  return (
    <div className=" min-h-[calc(100vh-120px)] flex flex-col  items-center justify-center p-4">
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div> */}

      <ResultNotification
        isVisible={showResultNotification}
        onClose={handleCloseResultNotification}
        label={resultDetails.label}
        autoCloseTime={5}
      />

      {/* Lucky Spin Claim Status & Button */}

      <div className=" glass-card p-2 my-2 flex justify-center items-center gap-3">
        <p>
          {isDailyLuckySpinClaimable
            ? "Claim your daily spin!"
            : `Claim in ${dailySpinCooldown}.`}
        </p>

        <button
          onClick={claimLuckySpin}
          disabled={!isDailyLuckySpinClaimable}
          className={` px-4 py-2 rounded-full font-medium text-white ${
            isDailyLuckySpinClaimable
              ? "bg-green-500 hover:bg-green-600 shadow-lg text-stone-800"
              : "bg-green-500/50 cursor-not-allowed"
          }`}
        >
          {isDailyLuckySpinClaimable ? "Claim" : "Claimed"}
        </button>
      </div>

      <div className="relative mb-8 ">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-2 z-20">
          <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[30px] md:border-l-[20px] md:border-r-[20px] md:border-t-[40px] border-l-transparent border-r-transparent border-t-yellow-400 "></div>
        </div>

        <motion.div
          ref={wheelRef}
          animate={controls}
          className="relative w-68 h-68 md:w-96 md:h-96 rounded-full border-8 border-yellow-400 overflow-hidden"
          style={{ transformOrigin: "center" }}
        >
          <svg className="w-full h-full" viewBox="0 0 200 200">
            {prizes.map((prize, index) => {
              const startAngle = (index * segmentAngle - 90) * (Math.PI / 180);
              const endAngle =
                ((index + 1) * segmentAngle - 90) * (Math.PI / 180);

              const x1 = 100 + 90 * Math.cos(startAngle);
              const y1 = 100 + 90 * Math.sin(startAngle);
              const x2 = 100 + 90 * Math.cos(endAngle);
              const y2 = 100 + 90 * Math.sin(endAngle);

              const largeArcFlag = segmentAngle > 180 ? 1 : 0;
              const pathData = [
                `M 100 100`,
                `L ${x1} ${y1}`,
                `A 90 90 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                `Z`,
              ].join(" ");

              const textAngle =
                (index * segmentAngle + segmentAngle / 2 - 90) *
                (Math.PI / 180);
              const textX = 100 + 60 * Math.cos(textAngle);
              const textY = 100 + 60 * Math.sin(textAngle);
              const textRotation = index * segmentAngle + segmentAngle / 2;

              return (
                <g key={index}>
                  <path
                    d={pathData}
                    className={prize.color}
                    stroke="white"
                    strokeWidth="2"
                  />
                  <text
                    x={textX}
                    y={textY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="10"
                    className={` font-semibold ${prize.textColor} fill-current`}
                    transform={`rotate(${textRotation + 90} ${textX} ${textY})`}
                  >
                    {prize.label}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-linear-to-br from-yellow-400 to-orange-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </div>

      <div className="flex gap-4 mb-8 justify-center items-center">
        <div className="inline-block glass-card px-6 py-2 mb-6 ">
          <h2 className="text-2xl font-bold text-yellow-600 text-center">
            Lucky Spin
          </h2>

          <div className="mt-1">
            <div className="text-center text-gray-300 mt-1">
              Spins:{" "}
              <span className="text-yellow-400 font-bold">
                {/* {Math.floor(userBalance)} tk */}
                {loadingUser ? "Loading..." : user?.lucky_spin || "0"}
              </span>
            </div>
            <div className="text-center text-gray-300 mt-1">
              Balance:{" "}
              <span className="text-yellow-400 font-bold">
                {/* {Math.floor(userBalance)} tk */}
                {loadingUser
                  ? "Loading..."
                  : Number(user?.balance).toFixed(2)}{" "}
                tk
              </span>
            </div>
          </div>
        </div>

        <motion.button
          onClick={startSpin}
          disabled={isButtonDisabled}
          whileTap={{ scale: 0.95 }}
          className={`relative h-14 w-14 rounded-full font-semibold text-lg flex justify-center items-center gap-3 transition-all duration-300
            ${
              isButtonDisabled
                ? "bg-amber-600/30 text-white cursor-not-allowed"
                : "bg-amber-600 text-white shadow-xl hover:shadow-2xl hover:scale-[1.04]"
            } 
            overflow-hidden group`}
        >
          <RefreshCw className="w-6 h-6 relative z-10" />
        </motion.button>
      </div>
    </div>
  );
}
