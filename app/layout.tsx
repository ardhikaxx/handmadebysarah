import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Handmade By Sarah | Pusat Produk Rajut Premium & Boneka Amigurumi",
  description: "Beli aneka produk rajut handmade berkualitas tinggi. Menyediakan boneka rajut (amigurumi), tas totebag rajut, dompet, topi, aksesoris, hingga dekorasi rumah. Melayani pesanan custom sesuai keinginan Anda.",
  keywords: ["rajut", "amigurumi", "boneka rajut", "tas rajut", "topi rajut", "dompet rajut", "dekorasi rajut", "handmade by sarah", "rajut custom", "kerajinan tangan", "hadiah unik"],
  authors: [{ name: "Handmade By Sarah" }],
  openGraph: {
    title: "Handmade By Sarah | Produk Rajut Premium",
    description: "Koleksi kerajinan rajut eksklusif, mulai dari boneka amigurumi lucu, tas, hingga aksesoris unik. Bisa custom sesuai permintaan!",
    url: "https://handmadebysarah.vercel.app",
    siteName: "Handmade By Sarah",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HashRemover from "./components/HashRemover";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script async src="//www.instagram.com/embed.js"></script>
      </head>
      <body className="font-body-md text-on-background selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Handmade By Sarah",
              image: "https://handmadebysarah.vercel.app/assets/hero-bg.jpg",
              description: "Pusat Produk Rajut Premium & Boneka Amigurumi. Melayani pesanan custom.",
              url: "https://handmadebysarah.vercel.app",
              telephone: "+6281234567890", // Ganti dengan nomor WhatsApp asli
              priceRange: "Rp",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID"
              }
            })
          }}
        />
        <HashRemover />
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <FloatingWhatsApp />
        <ScrollToTop />
        <CustomCursor />
        <LoadingScreen />
        <Footer />
      </body>
    </html>
  );
}
