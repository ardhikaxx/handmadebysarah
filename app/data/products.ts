export interface Product {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  description: string;
  image: string;
  gallery: string[];
  shopeeUrl: string;
  features: string[];
  rating: number;
}

export const products: Product[] = [
  {
    id: "boneka-kelinci-telanjang",
    name: "Boneka Rajut Kelinci Telanjang (PLUSHIE AMIGURUMI)",
    price: 145902,
    formattedPrice: "Rp 145.902",
    description: "Boneka rajut (amigurumi) berbentuk kelinci polos tanpa pakaian. Sangat lembut dan cocok dijadikan teman tidur anak atau koleksi. Dibuat menggunakan benang katun susu berkualitas tinggi yang aman untuk kulit bayi (hypoallergenic). Setiap boneka dibuat dengan tangan oleh pengrajin lokal kami yang berpengalaman.",
    image: "/assets/produk/produk1.jpg",
    gallery: ["/assets/produk/produk1.jpg", "/assets/produk/produk2.jpg"],
    shopeeUrl: "https://s.shopee.co.id/AACyR1wgu6",
    features: ["100% Handmade", "Benang Katun Susu (Milk Cotton)", "Tinggi ± 25cm", "Aman untuk Bayi (Hypoallergenic)", "Bisa dicuci dengan tangan"],
    rating: 5.0
  },
  {
    id: "boneka-kelinci-dress-topi-kodok",
    name: "Boneka Rajut Kelinci dengan Dress dan Topi Kodok",
    price: 198500,
    formattedPrice: "Rp 198.500",
    description: "Karakter kelinci lucu yang dilengkapi dengan dress rajut cantik dan topi berbentuk kepala kodok yang bisa dilepas pasang. Memberikan pengalaman bermain interaktif bagi anak-anak. Pakaian boneka didesain secara detail dengan perpaduan warna yang ceria.",
    image: "/assets/produk/produk2.jpg",
    gallery: ["/assets/produk/produk2.jpg", "/assets/produk/produk3.jpg"],
    shopeeUrl: "https://s.shopee.co.id/AACyR1wgu6",
    features: ["Pakaian Bisa Dilepas (Removable Clothes)", "Topi Karakter Kodok", "100% Handmade", "Tinggi ± 28cm", "Benang Katun Susu Premium"],
    rating: 5.0
  },
  {
    id: "boneka-kelinci-dress-floppy-hat",
    name: "Boneka Rajut Kelinci dengan Dress dan Floppy Hat",
    price: 242000,
    formattedPrice: "Rp 242.000",
    description: "Boneka kelinci bergaya klasik dengan dress menawan dan topi lebar (floppy hat) khas musim panas. Sangat cocok sebagai hadiah ulang tahun atau dekorasi ruangan aesthetic. Detail rajutannya sangat rapat dan kokoh.",
    image: "/assets/produk/produk3.jpg",
    gallery: ["/assets/produk/produk3.jpg", "/assets/produk/produk4.jpg"],
    shopeeUrl: "https://s.shopee.co.id/AACyR1wgu6",
    features: ["Floppy Hat Lebar", "Dress Renda Rajut", "Tinggi ± 30cm", "Bahan Tahan Lama & Tidak Mudah Berbulu", "100% Handmade"],
    rating: 5.0
  },
  {
    id: "boneka-kelinci-hoodie",
    name: "Boneka Rajut Kelinci dengan Hoodie",
    price: 242000,
    formattedPrice: "Rp 242.000",
    description: "Tampil sporty dan menggemaskan! Kelinci ini mengenakan jaket hoodie rajut yang tebal dan nyaman. Hoodienya bisa dipakai atau dilepas ke belakang, menambah kesan dinamis dan kekinian.",
    image: "/assets/produk/produk4.jpg",
    gallery: ["/assets/produk/produk4.jpg", "/assets/produk/produk5.jpg"],
    shopeeUrl: "https://s.shopee.co.id/AACyR1wgu6",
    features: ["Hoodie Berfungsi Penuh", "100% Handmade", "Tinggi ± 28cm", "Benang Milk Cotton Extra Soft", "Desain Kekinian"],
    rating: 5.0
  },
  {
    id: "boneka-kelinci-kemeja-topi-kodok",
    name: "Boneka Rajut Kelinci dengan Kemeja dan Topi Kodok",
    price: 242000,
    formattedPrice: "Rp 242.000",
    description: "Kombinasi unik antara kemeja rajut yang rapi dengan topi kodok yang lucu. Karakter ini sangat cocok untuk dijadikan teman bermain atau kado bagi pecinta hewan. Kemeja memiliki detail kancing yang menambah kesan premium.",
    image: "/assets/produk/produk5.jpg",
    gallery: ["/assets/produk/produk5.jpg", "/assets/produk/produk1.jpg"],
    shopeeUrl: "https://s.shopee.co.id/AACyR1wgu6",
    features: ["Kemeja dengan Detail Kancing", "Topi Karakter Kodok", "100% Handmade", "Tinggi ± 28cm", "Mudah Dibersihkan"],
    rating: 5.0
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
