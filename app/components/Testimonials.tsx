"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alya",
    role: "Pelanggan Setia",
    content: "Pesan amigurumi kelinci buat kado ulang tahun anak, hasilnya rapi banget! Bonekanya lembut dan detailnya persis seperti request. Pokoknya recommended banget deh!",
    rating: 5,
  },
  {
    name: "Rina S.",
    role: "Pecinta Rajut",
    content: "Totebag rajutnya bagus banget, warnanya sesuai dengan foto di IG. Sudah pakai 3 bulan masih awet dan gak gampang melar. Sukses terus Handmade By Sarah!",
    rating: 5,
  },
  {
    name: "Nisa",
    role: "Pembeli Custom",
    content: "Pertama kali beli produk custom disini, adminnya ramah banget nanya detail. Hasil akhir memuaskan, bungkus kado juga estetik. Pasti order lagi!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-variant relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-[80%] -right-[10%] w-[30%] h-[30%] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="max-w-container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface mb-4">
            Apa Kata Mereka
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Kebahagiaan pelanggan adalah inspirasi terbesar kami dalam berkarya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-surface rounded-3xl p-8 soft-shadow relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="absolute -top-6 -left-2 text-primary opacity-20">
                <Quote size={80} />
              </div>
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-on-surface-variant italic mb-6 relative z-10">
                &quot;{t.content}&quot;
              </p>
              <div className="flex flex-col relative z-10">
                <span className="font-bold text-on-surface">{t.name}</span>
                <span className="text-sm text-primary">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
