"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Navbar
    beranda: "Beranda",
    kategori: "Kategori",
    katalog: "Katalog",
    tentangKami: "Tentang Kami",
    custom: "Custom",
    galeri: "Galeri",
    
    // Hero
    heroTitle1: "Rajutan Penuh Cinta,",
    heroTitle2: "Khusus Untukmu.",
    heroSubtitle: "Dari boneka lucu hingga tas elegan, setiap karya Handmade by Sarah dirajut dengan tangan, membawa kehangatan di setiap helaian benangnya.",
    pesanSekarang: "Pesan Sekarang",
    lihatKatalog: "Lihat Katalog",

    // Kategori
    kategoriJudul: "Kategori Favorit",
    kategoriSub: "Pilih koleksi rajutan yang paling sesuai dengan gaya dan kebutuhanmu",
    bonekaLucu: "Boneka Lucu",
    tasElegan: "Tas Elegan",
    gantunganKunci: "Gantungan Kunci",
    pakaianBayi: "Pakaian Bayi",

    // Produk
    produkJudul: "Produk Terlaris",
    produkSub: "Beberapa karya favorit pelanggan yang selalu menjadi rebutan. Jangan sampai kehabisan!",
    pesanShopee: "Pesan via Shopee",

    // Alur Pemesanan (Order Steps)
    alurJudul: "Cara Memesan Produk Custom",
    alurSub: "Wujudkan rajutan impianmu dalam 3 langkah mudah.",
    alur1T: "1. Konsultasi Desain",
    alur1D: "Hubungi kami via WhatsApp. Kirim referensi gambar, pilih warna, dan tentukan ukuran.",
    alur2T: "2. Proses Merajut",
    alur2D: "Kami akan mulai merajut pesananmu dengan teliti. Proses ini memakan waktu 3-7 hari.",
    alur3T: "3. Pengiriman",
    alur3D: "Setelah selesai dan kamu setujui, produk siap meluncur ke pelukanmu!",

    // CTA
    ctaJudul: "Punya Ide Rajutan Sendiri?",
    ctaSub: "Sarah siap menyulap imajinasimu menjadi karya rajut yang nyata. Yuk diskusi santai via WhatsApp!",
    tanyaHarga: "Tanya Harga / Custom",

    // Footer
    footerTentang: "Setiap helaian benang dirajut dengan dedikasi tinggi untuk menciptakan senyum di wajahmu. 100% buatan tangan lokal.",
    hubungiKami: "Hubungi Kami",
    tautanCepat: "Tautan Cepat",
    hakCipta: "Hak Cipta",
    kebijakanPrivasi: "Kebijakan Privasi",
    syaratKetentuan: "Syarat & Ketentuan",
  },
  en: {
    // Navbar
    beranda: "Home",
    kategori: "Categories",
    katalog: "Catalog",
    tentangKami: "About Us",
    custom: "Custom",
    galeri: "Gallery",
    
    // Hero
    heroTitle1: "Knitted with Love,",
    heroTitle2: "Just for You.",
    heroSubtitle: "From cute dolls to elegant bags, every Handmade by Sarah piece is hand-knitted, bringing warmth in every thread.",
    pesanSekarang: "Order Now",
    lihatKatalog: "View Catalog",

    // Kategori
    kategoriJudul: "Favorite Categories",
    kategoriSub: "Choose the knitting collection that best suits your style and needs",
    bonekaLucu: "Cute Dolls",
    tasElegan: "Elegant Bags",
    gantunganKunci: "Keychains",
    pakaianBayi: "Baby Clothes",

    // Produk
    produkJudul: "Best Sellers",
    produkSub: "Some of our customers' favorite masterpieces. Don't miss out!",
    pesanShopee: "Order via Shopee",

    // Alur Pemesanan
    alurJudul: "How to Order Custom Products",
    alurSub: "Bring your dream knitting to life in 3 easy steps.",
    alur1T: "1. Design Consultation",
    alur1D: "Contact us via WhatsApp. Send reference images, pick colors, and choose a size.",
    alur2T: "2. Knitting Process",
    alur2D: "We will carefully knit your order. This process takes 3-7 days.",
    alur3T: "3. Delivery",
    alur3D: "Once finished and approved by you, your product is ready to be shipped!",

    // CTA
    ctaJudul: "Have Your Own Knitting Idea?",
    ctaSub: "Sarah is ready to turn your imagination into real knitted masterpieces. Let's chat on WhatsApp!",
    tanyaHarga: "Ask Price / Custom",

    // Footer
    footerTentang: "Every thread is knitted with high dedication to bring a smile to your face. 100% local handmade.",
    hubungiKami: "Contact Us",
    tautanCepat: "Quick Links",
    hakCipta: "Copyright",
    kebijakanPrivasi: "Privacy Policy",
    syaratKetentuan: "Terms & Conditions",
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("sarah-lang") as Language;
    if (savedLang === "id" || savedLang === "en") {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "id" ? "en" : "id";
    setLanguage(newLang);
    localStorage.setItem("sarah-lang", newLang);
  };

  const t = (key: string) => {
    // Default to id if not mounted to prevent hydration mismatch for initial render
    const activeLang = mounted ? language : "id";
    // @ts-ignore
    return translations[activeLang]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: mounted ? language : "id", toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
