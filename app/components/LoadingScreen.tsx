"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sembunyikan loading screen setelah 2 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md"
        >
          <div className="relative flex flex-col items-center">
            {/* Animasi Jarum Rajut */}
            <motion.img
              src="/assets/needle.png"
              alt="Handmade by Sarah Loading"
              className="w-24 h-24 mb-6 drop-shadow-lg"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Teks Loading */}
            <motion.div
              className="flex items-center gap-1"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <h2 className="font-display text-xl sm:text-2xl font-bold text-primary tracking-widest uppercase">
                Merapikan Benang
              </h2>
              <div className="flex gap-1 ml-1">
                <motion.div 
                  className="w-1.5 h-1.5 bg-primary rounded-full"
                  animate={{ y: [0, -5, 0] }} 
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="w-1.5 h-1.5 bg-primary rounded-full"
                  animate={{ y: [0, -5, 0] }} 
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div 
                  className="w-1.5 h-1.5 bg-primary rounded-full"
                  animate={{ y: [0, -5, 0] }} 
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
