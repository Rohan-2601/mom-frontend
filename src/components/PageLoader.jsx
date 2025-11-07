// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function PageLoader({ children }) {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 1800);
//     return () => clearTimeout(timer);
//   }, []);

//   const bars = Array.from({ length: 12 });

//   return (
//     <AnimatePresence mode="wait">
//       {isLoading ? (
//         <motion.div
//           key="loader"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0, transition: { duration: 0.8 } }}
//           className="fixed inset-0 flex flex-col items-center justify-center bg-gray-950 z-50"
//         >
//           {/* Logo */}
//           <motion.h1
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl font-bold text-white tracking-tight"
//           >
//             MoM.<span className="text-indigo-400">AI</span>
//           </motion.h1>

//           {/* Tagline */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="text-gray-400 text-sm mt-2"
//           >
//             Listening. Understanding. Summarizing.
//           </motion.p>

//           {/* Glowing waveform animation */}
//           <motion.div
//             className="flex items-end justify-center gap-[3px] mt-10 h-8"
//             initial="hidden"
//             animate="visible"
//           >
//             {bars.map((_, i) => (
//               <motion.span
//                 key={i}
//                 className="w-[4px] rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"
//                 animate={{
//                   scaleY: [0.3, 1.2, 0.3],
//                   opacity: [0.6, 1, 0.6],
//                 }}
//                 transition={{
//                   duration: 0.9,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: i * 0.08,
//                 }}
//               />
//             ))}
//           </motion.div>
//         </motion.div>
//       ) : (
//         <motion.div
//           key="content"
//           initial={{ opacity: 0, scale: 0.97 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {children}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-gray-950 z-50"
        >
          {/* Logo + Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white"
          >
            MoM.<span className="text-indigo-400">AI</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-400 text-sm mt-2"
          >
            Listening. Understanding. Summarizing.
          </motion.p>

          {/* Subtle pulse indicator */}
          <motion.div
            className="mt-8 w-6 h-6 rounded-full bg-indigo-500"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
