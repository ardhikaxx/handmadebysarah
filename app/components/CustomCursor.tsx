"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Cek jika layar sentuh, matikan fitur custom cursor
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsDesktop(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Perbesar kursor jika sedang hover ke elemen interaktif
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}} />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center text-primary drop-shadow-md"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.4 : 1,
          rotate: isHovering ? 45 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 30,
          mass: 0.1
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bola Benang */}
          <circle cx="10" cy="10" r="8" fill="currentColor" />
          {/* Detail Serat Benang */}
          <path d="M6 7C8 8 12 6 14 7" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M5 10C8 11 12 9 15 10" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M6 13C8 14 12 12 14 13" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          {/* Jarum Rajut / Ujung Benang yang terurai */}
          <path d="M15 15C18 18 20 20 22 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M22 22C20.5 22 19 22.5 18 23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </motion.div>
    </>
  );
}
