// "use client";
// import { motion } from "framer-motion";
// import { ShieldCheck, ShieldAlert } from "lucide-react";

// export function SecurityMeter({ meterStatus }) {
//   const rotations = [0, 90, 180, 270];

//   return (
//     <div className="relative w-28 h-28 mx-auto">
//       <svg viewBox="0 0 36 36" className="w-full h-full">
//         {/* === GRADIENT DEFINITIONS === */}
//         <defs>
//           <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#FF3B30" /> {/* Red */}
//             <stop offset="100%" stopColor="#FF7F00" /> {/* Orange */}
//           </linearGradient>

//           <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#FF7F00" /> {/* Orange */}
//             <stop offset="100%" stopColor="#FFD60A" /> {/* Yellow */}
//           </linearGradient>

//           <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#FFD60A" /> {/* Yellow */}
//             <stop offset="100%" stopColor="#0EA5E9" /> {/* Sky */}
//           </linearGradient>

//           <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#0EA5E9" /> {/* Sky */}
//             <stop offset="100%" stopColor="#00C853" /> {/* Green */}
//           </linearGradient>
//         </defs>

//         {/* === SEGMENTS === */}
//         {rotations.map((rotation, i) => (
//           <g key={i}>
//             {/* Unfilled outline */}
//             <path
//               d="M18 2 A16 16 0 0 1 34 18"
//               fill="none"
//               stroke="#00C853"
//               strokeOpacity="0.2"
//               strokeWidth="3"
//               strokeLinecap="round"
//               transform={`rotate(${rotation} 18 18)`}
//             />

//             {/* Animated gradient stroke */}
//             {meterStatus >= i + 1 && (
//               <motion.path
//                 d="M18 2 A16 16 0 0 1 34 18"
//                 fill="none"
//                 stroke={`url(#grad${i + 1})`}
//                 strokeWidth="4.2"
//                 strokeLinecap="round"
//                 transform={`rotate(${rotation} 18 18)`}
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{
//                   duration: 0.8,
//                   ease: "easeInOut",
//                   delay: i * 0.12,
//                 }}
//               />
//             )}
//           </g>
//         ))}
//       </svg>

//       {/* === CENTER ICON === */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         {meterStatus < 3 ? (
//           <ShieldAlert className="w-9 h-9 text-red-500" />
//         ) : (
//           <ShieldCheck className="w-9 h-9 text-green-500" />
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { ShieldCheck, ShieldAlert } from "lucide-react";

export function SecurityMeter({ meterStatus }) {
  const rotations = [0, 90, 180, 270];

  return (
    <div className="relative w-28 h-28 mx-auto">
      <svg viewBox="0 0 36 36" className="w-full h-full">
        {/* ---------- GRADIENT DEFINITIONS ---------- */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF3B30" />
            <stop offset="100%" stopColor="#FF7F00" />
          </linearGradient>

          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7F00" />
            <stop offset="100%" stopColor="#FFD60A" />
          </linearGradient>

          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD60A" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>

          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#00C853" />
          </linearGradient>
        </defs>

        {/* ---------- ARC SEGMENTS ---------- */}
        {rotations.map((rotation, i) => (
          <g key={i}>
            {/* Unfilled thin outline */}
            <path
              d="M18 4 A14 14 0 0 1 32 18"
              fill="none"
              stroke="#00C853"
              strokeOpacity="0.25"
              strokeWidth="3"
              strokeLinecap="square"
              transform={`rotate(${rotation} 18 18)`}
            />

            {/* Filled animated segment */}
            {meterStatus >= i + 1 && (
              <motion.path
                d="M18 4 A14 14 0 0 1 32 18"
                fill="none"
                stroke={`url(#grad${i + 1})`}
                strokeWidth="4.2"
                strokeLinecap="square"
                transform={`rotate(${rotation} 18 18)`}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                  delay: i * 0.12,
                }}
              />
            )}
          </g>
        ))}
      </svg>

      {/* ---------- CENTER ICON ---------- */}
      <div className="absolute inset-0 flex items-center justify-center">
        {meterStatus < 3 ? (
          <ShieldAlert className="text-red-500 w-8 h-8" />
        ) : (
          <ShieldCheck className="text-green-500 w-8 h-8" />
        )}
      </div>
    </div>
  );
}
