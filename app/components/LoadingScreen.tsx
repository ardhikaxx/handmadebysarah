"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sembunyikan loading screen setelah 2.5 detik agar animasinya puas terlihat
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Animasi teks per huruf
  const text = "MERAPIKAN BENANG...";
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 12, stiffness: 200 },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-100%", 
            borderBottomLeftRadius: "50%", 
            borderBottomRightRadius: "50%" 
          }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-surface overflow-hidden"
        >
          {/* Latar Belakang Dekoratif berdenyut */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-primary-container/40 to-transparent"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col items-center z-10">
            {/* Animasi Jarum Rajut Menjahit dan Melompat */}
            <motion.div
              animate={{
                y: [0, -30, 10, -10, 0],
                x: [-20, 0, 20, 0, -20],
                rotate: [-20, 30, -10, 10, -20],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="z-20 relative"
            >
              <img
                src="/assets/needle.png"
                alt="Jarum Rajut"
                className="w-28 h-28 drop-shadow-2xl object-contain"
              />
            </motion.div>

            {/* Animasi Jalur Benang (SVG) yang seolah-olah dirajut */}
            <div className="w-48 h-12 -mt-8 mb-4 relative z-10 flex justify-center text-primary">
              <svg viewBox="0 0 200 50" className="w-full h-full overflow-visible">
                {/* Bayangan Benang */}
                <motion.path
                  d="M 10 25 C 40 -15, 60 65, 100 25 C 140 -15, 160 65, 190 25"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="opacity-20"
                />
                {/* Benang Utama yang digambar */}
                <motion.path
                  d="M 10 25 C 40 -15, 60 65, 100 25 C 140 -15, 160 65, 190 25"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </div>
            
            {/* Teks Loading Per Huruf yang Elegan */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex mt-2"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className="font-display text-lg sm:text-xl font-bold text-on-surface tracking-widest uppercase"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
