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
    url: "https://handmadebysarah.com",
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
      </head>
      <body className="font-body-md text-on-background selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
