"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Coordinate system is based on the aspect ratio of the SVG (2021 x 922)
// This makes the percentages relative to the EXACT bounds of the map.
const locations = [
  { id: 1, city: "Medan", x: "12%", y: "30%", orders: 12 },
  { id: 2, city: "Palembang", x: "24%", y: "55%", orders: 8 },
  { id: 3, city: "Jakarta", x: "32%", y: "70%", orders: 156 },
  { id: 4, city: "Bandung", x: "35%", y: "73%", orders: 84 },
  { id: 5, city: "Yogyakarta", x: "41%", y: "74%", orders: 45 },
  { id: 6, city: "Surabaya", x: "48%", y: "72%", orders: 92 },
  { id: 7, city: "Denpasar, Bali", x: "53%", y: "75%", orders: 34 },
  { id: 8, city: "Makassar", x: "62%", y: "58%", orders: 18 },
  { id: 9, city: "Balikpapan", x: "55%", y: "42%", orders: 15 },
];

export default function CustomerMap() {
  const { language } = useLanguage();
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const title = language === "id" ? "Sebaran Jejak Rajutan Sarah" : "Sarah's Knitting Footprints";
  const subtitle = language === "id" 
    ? "Ratusan karya rajut penuh cinta telah menempuh perjalanan jauh untuk mengukir senyum di berbagai penjuru Nusantara." 
    : "Hundreds of lovingly knitted masterpieces have traveled far to bring smiles across the archipelago.";

  return (
    <section className="py-20 relative overflow-hidden bg-surface">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary-container blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary-container blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-headline-md text-3xl sm:text-4xl font-bold text-primary mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body-md text-on-surface-variant max-w-2xl mx-auto text-lg"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Map Outer Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto bg-surface-container-low/50 backdrop-blur-sm border border-outline-variant/30 rounded-3xl shadow-xl overflow-hidden p-4 sm:p-8 flex items-center justify-center min-h-[300px]"
        >
          {/* Aesthetic Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Inner Aspect-Ratio Box so the map and dots scale together perfectly */}
          <div className="relative w-full" style={{ aspectRatio: "2021 / 922" }}>
            
            {/* Real Indonesia Map Mask */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                WebkitMaskImage: "url('/assets/indonesia.svg')",
                maskImage: "url('/assets/indonesia.svg')",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                backgroundColor: "var(--md-sys-color-primary, #8b5a2b)"
              }}
            />

            {/* Glowing Pins */}
            {locations.map((loc, index) => (
              <div 
                key={loc.id}
                className="absolute"
                style={{ left: loc.x, top: loc.y, transform: "translate(-50%, -50%)" }}
                onMouseEnter={() => setHoveredCity(loc.city)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                {/* Pulsing ring */}
                <motion.div 
                  animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute -inset-2 bg-primary rounded-full z-0"
                />
                
                {/* Solid Pin */}
                <motion.div 
                  whileHover={{ scale: 1.5 }}
                  className="relative z-10 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(139,90,43,0.8)] cursor-pointer"
                />

                {/* Tooltip */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, pointerEvents: "none" }}
                  animate={{ 
                    opacity: hoveredCity === loc.city ? 1 : 0, 
                    y: hoveredCity === loc.city ? -10 : 10 
                  }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-4 py-2 bg-inverse-surface text-inverse-on-surface rounded-xl text-sm font-medium shadow-xl z-20"
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-primary-container font-bold">{loc.city}</span>
                    <span className="text-xs opacity-80">
                      {loc.orders} {language === "id" ? "Karya Terkirim" : "Items Shipped"}
                    </span>
                  </div>
                  {/* Tooltip Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-inverse-surface" />
                </motion.div>
              </div>
            ))}

            {/* Connection Lines (Optional magical effect between cities) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeInOut" }}
                d="M 12 30 L 32 70 L 35 73 L 41 74 L 48 72 L 53 75 L 62 58"
                fill="none"
                stroke="var(--md-sys-color-primary, #8b5a2b)"
                strokeWidth="0.2"
                strokeDasharray="1 1"
              />
            </svg>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
