"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const locations = [
  { id: 1, city: "Medan", x: "15%", y: "25%", orders: 12 },
  { id: 2, city: "Palembang", x: "25%", y: "45%", orders: 8 },
  { id: 3, city: "Jakarta", x: "40%", y: "65%", orders: 156 },
  { id: 4, city: "Bandung", x: "45%", y: "70%", orders: 84 },
  { id: 5, city: "Yogyakarta", x: "50%", y: "68%", orders: 45 },
  { id: 6, city: "Surabaya", x: "58%", y: "62%", orders: 92 },
  { id: 7, city: "Denpasar, Bali", x: "65%", y: "68%", orders: 34 },
  { id: 8, city: "Makassar", x: "72%", y: "45%", orders: 18 },
  { id: 9, city: "Balikpapan", x: "62%", y: "30%", orders: 15 },
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

        {/* Map Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-4xl mx-auto h-[400px] sm:h-[500px] bg-surface-container-low/50 backdrop-blur-sm border border-outline-variant/30 rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Aesthetic Grid Background simulating a map canvas */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Faint Abstract Map Shape (Optional visual anchor) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <svg viewBox="0 0 800 400" className="w-full h-full" fill="currentColor">
              {/* Abstract blobs representing islands */}
              <path d="M 100 150 Q 150 100 200 200 T 300 250 T 150 300 Z" />
              <path d="M 350 250 Q 450 200 500 280 T 350 350 Z" />
              <path d="M 550 150 Q 650 100 700 200 T 550 250 Z" />
            </svg>
          </div>

          {/* Glowing Pins */}
          {locations.map((loc, index) => (
            <div 
              key={loc.id}
              className="absolute"
              style={{ left: loc.x, top: loc.y }}
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
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeInOut" }}
              d="M 15% 25% L 40% 65% L 45% 70% L 50% 68% L 58% 62% L 65% 68% L 72% 45%"
              fill="none"
              stroke="var(--md-sys-color-primary, #8b5a2b)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>

        </motion.div>
      </div>
    </section>
  );
}
