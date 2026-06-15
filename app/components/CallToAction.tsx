"use client";

import { MessageCircle } from "lucide-react";
import FadeIn from "./FadeIn";

export default function CallToAction() {
  const phoneNumber = "6281234567890";
  const message = "Halo Handmade By Sarah, saya ingin berkonsultasi mengenai pesanan custom.";

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary z-0"></div>
        
        {/* Decorative Circles */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl z-0"></div>

        <div className="relative z-10 p-10 md:p-16 text-center flex flex-col items-center">
          <FadeIn direction="up">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight max-w-2xl">
              Punya Ide Rajutan Sendiri? Mari Wujudkan Bersama!
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl mx-auto">
              Tidak menemukan produk yang pas di katalog? Konsultasikan ide, referensi desain, dan warna impian Anda kepada kami sekarang.
            </p>
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container transition-all hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              Konsultasi via WhatsApp
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
