"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    question: "Berapa lama waktu pembuatan (Pre-Order) produk custom?",
    answer: "Untuk produk amigurumi kecil biasanya memakan waktu 2-3 hari. Sedangkan untuk tas atau wearable lainnya membutuhkan waktu 5-10 hari tergantung kerumitan desain dan antrean pesanan.",
  },
  {
    question: "Apakah bisa request warna atau bentuk spesifik?",
    answer: "Sangat bisa! Anda bisa mengirimkan foto referensi kepada kami. Kami akan mencocokkan ketersediaan benang dengan warna dan bentuk yang Anda inginkan.",
  },
  {
    question: "Bagaimana cara mencuci produk rajutan agar awet?",
    answer: "Cuci menggunakan tangan (hand wash) dengan air dingin dan sabun berbahan lembut (seperti sampo bayi). Jangan disikat kencang, tidak disarankan memakai mesin cuci, dan jemur di tempat teduh agar warnanya tidak pudar.",
  },
  {
    question: "Apakah melayani pengiriman ke luar pulau?",
    answer: "Ya, kami melayani pengiriman ke seluruh Indonesia menggunakan ekspedisi terpercaya (JNE, J&T, SiCepat) dengan standar pengemasan yang aman.",
  },
];

export default function FaqHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface-container-low">
      <div className="max-w-4xl mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface mb-4">Pertanyaan Populer</h2>
            <p className="text-on-surface-variant text-lg">
              Hal-hal yang paling sering ditanyakan oleh pelanggan kami.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.15} direction="up">
              <div 
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === index ? 'border-primary shadow-md' : 'border-outline-variant/30 hover:border-primary/50'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none group"
                >
                  <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
