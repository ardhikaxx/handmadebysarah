"use client";

import { MessageSquareText, PenTool, Gift } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  {
    icon: <MessageSquareText className="w-8 h-8 text-primary" />,
    title: "1. Konsultasi Desain",
    description: "Hubungi kami via WhatsApp untuk mendiskusikan ide, referensi desain, ukuran, dan pilihan warna benang yang Anda inginkan.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: "2. Proses Pembuatan",
    description: "Setelah detail dan DP disepakati, perajin kami akan mulai merajut pesanan Anda dengan penuh ketelitian (estimasi 3-7 hari kerja).",
  },
  {
    icon: <Gift className="w-8 h-8 text-primary" />,
    title: "3. Pengiriman",
    description: "Pesanan yang sudah jadi akan dikemas cantik dan aman, lalu dikirimkan langsung ke alamat Anda.",
  },
];

export default function OrderSteps() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface">Cara Memesan Custom</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Wujudkan rajutan impian Anda dalam tiga langkah mudah. Kami siap membantu setiap prosesnya.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-outline-variant/30 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.2} direction="up" className="relative z-10">
              <div className="bg-surface-container-low rounded-3xl p-8 text-center soft-shadow h-full flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 border border-outline-variant/20">
                <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center mb-6 shadow-inner">
                  {step.icon}
                </div>
                <h3 className="font-bold text-xl text-on-surface mb-3">{step.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
