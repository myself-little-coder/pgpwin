// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// // const slides = [
// //   { image: "", name: "CASINO GAMES" },
// //   { image: slide02, name: "JACKPOTS" },
// //   { image: slide03, name: "SLOT GAMES" },
// //   { image: slide04, name: "EXCLUSIVES" },
// //   { image: slide05, name: "NEW GAMES" },
// // ];

// const GameCategories = ({ slides = [] }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="flex gap-5 overflow-x-auto scrollbar-hide px-3 py-2 my-4 mb-6  "
//     >
//       {slides?.length > 0 &&
//         slides?.map((slide, index) => {
//           return slide.name ? (
//             <Link
//               key={index}
//               href={`/new-provider/${slide.display_name}`}
//               // className=" relative w-28 aspect-video bg-black/50 dark:bg-transparent border-light dark:border-yellow-400 bg-linear-to-t from-yellow-400/40 to-yellow-600/40 border-2 rounded-lg shrink-0 overflow-hidden"
//               className="relative w-28 aspect-video border-light dark:border-yellow-400
// bg-[linear-gradient(to_bottom,rgba(202,138,4,0)_0%,rgba(202,138,4,0.45)_35%,rgba(202,138,4,1)_50%,rgba(202,138,4,0.45)_65%,rgba(202,138,4,0)_100%)]
// dark:bg-[linear-gradient(to_bottom,rgba(161,98,7,0)_0%,rgba(161,98,7,0.45)_35%,rgba(161,98,7,1)_50%,rgba(161,98,7,0.45)_65%,rgba(161,98,7,0)_100%)]
// border-2 rounded-lg shrink-0 overflow-hidden"
//             >
//               <Image
//                 // src={`https://sc4-admin.dreamgates.net/img/${slide?.provider_id}.png`}
//                 src={slide.icons.icon}
//                 alt={index}
//                 className="p-2 object-contain z-10 "
//                 fill
//               />
//               {/* <h2 className="absolute w-full bottom-0 left-0 h-8 pb-1 mt-1 text-sm text-light dark:text-yellow-600 flex justify-center items-center flex-wrap px-1 line-clamp-1 ">
//                 {slide.display_name}
//               </h2> */}
//             </Link>
//           ) : null;
//         })}
//     </motion.div>
//   );
// };

// export default GameCategories;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GameCategories = ({
  slides = [],
  selectedProvider,
  setSelectedProvider,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex gap-2 overflow-x-auto scrollbar-hide px-3 py-2 my-4 mb-6"
    >
      {slides?.map((slide, index) => (
        <button
          key={index}
          onClick={() => {
            setSelectedProvider(slide.name);
          }}
          className={`relative flex flex-col justify-end items-center w-16 aspect-square rounded-lg shrink-0 overflow-hidden transition-all 
              ${selectedProvider === slide.name
              ? "bg-yellow-400 dark:bg-yellow-700  text-stone-800"
              : "bg-gray-200 dark:bg-gray-700"
            }
              `}
        >
          <Image
            src={slide.icons.icon}
            alt={slide.display_name}
            className={` object-contain z-10 max-h-[90%] max-w-[80%] mx-auto brightness-200 saturate-200
               `}
            fill
          />
          <h2
            className={` py-px px-1 text-center text-xs line-clamp-1  ${selectedProvider === slide.name ? "text-white" : ""
              } `}
          >
            {slide.display_name}
          </h2>
        </button>
      ))}
    </motion.div>
  );
};

export default GameCategories;
