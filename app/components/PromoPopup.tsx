"use client";

import { useState, useEffect } from "react";
import { X, Gift, Copy, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPromoPopup");
    
    if (!hasSeenPopup) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenPromoPopup", "true");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("SARAHNEW10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl z-10"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors z-20 text-on-surface"
            >
              <X size={20} />
            </button>

            {/* Header Image Area (Gradient) */}
            <div className="h-32 bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_10%,_transparent_20%)] bg-[length:20px_20px]"></div>
              <Gift size={48} className="text-white drop-shadow-md relative z-10 animate-bounce" />
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <h3 className="font-display font-bold text-2xl text-on-surface mb-2">
                Diskon Spesial 10%!
              </h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                Terima kasih telah berkunjung. Dapatkan potongan 10% untuk pemesanan rajutan custom pertama Anda.
              </p>

              {/* Coupon Code Box */}
              <div className="bg-surface-container rounded-2xl p-4 flex items-center justify-between border-2 border-dashed border-primary/30 mb-6">
                <span className="font-mono font-bold text-xl text-primary tracking-wider">
                  SARAHNEW10
                </span>
                <button 
                  onClick={handleCopy}
                  className="flex items-center gap-1 bg-white px-3 py-2 rounded-xl text-sm font-bold text-primary shadow-sm hover:bg-primary-container transition-colors"
                >
                  {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                  {copied ? "Disalin!" : "Salin"}
                </button>
              </div>

              <button 
                onClick={handleClose}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-colors shadow-md"
              >
                Gunakan Kode Sekarang
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
