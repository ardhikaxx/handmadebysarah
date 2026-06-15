import Link from "next/link";

export const metadata = {
  title: "Cara Pemesanan | Handmade By Sarah",
  description: "Panduan lengkap langkah demi langkah cara memesan produk rajut di Handmade By Sarah.",
};

export default function CaraPemesanan() {
  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-24 px-margin-desktop max-w-4xl mx-auto">
        <div className="mb-10 text-center">
            <h1 className="font-headline-lg text-4xl lg:text-5xl text-primary mb-4">Cara Pemesanan</h1>
            <p className="text-on-surface-variant font-body-lg">Panduan mudah berbelanja koleksi rajut di Handmade By Sarah.</p>
        </div>
        
        <div className="space-y-8 text-on-surface font-body-md leading-relaxed bg-white p-8 lg:p-12 rounded-[32px] border border-outline-variant/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          
          <div className="bg-primary-container/30 border border-primary/20 rounded-2xl p-6 mb-8 text-center">
            <p className="text-on-surface-variant">Saat ini kami melayani pemesanan melalui dua jalur utama: <b>Shopee</b> (untuk produk *ready stock*) dan <b>WhatsApp</b> (untuk pesanan *custom* atau pertanyaan spesifik).</p>
          </div>

          <section className="space-y-4">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-[28px] text-[#EE4D2D]">shopping_bag</span>
                Pemesanan via Shopee (Ready Stock)
            </h2>
            <div className="grid gap-4">
                <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 mt-0.5">1</div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Kunjungi Toko Shopee Kami</h3>
                        <p className="text-on-surface-variant">Klik tombol Shopee yang ada di website kami atau kunjungi langsung <a href="https://s.shopee.co.id/AACyR1wgu6" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">link Shopee Handmade By Sarah</a>.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 mt-0.5">2</div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Pilih Produk & Masukkan Keranjang</h3>
                        <p className="text-on-surface-variant">Pilih produk rajut incaran Anda, tentukan variasi (warna/ukuran jika ada), lalu masukkan ke keranjang belanja.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 mt-0.5">3</div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Checkout & Bayar</h3>
                        <p className="text-on-surface-variant">Lakukan <i>checkout</i>, gunakan voucher Shopee Anda (jika ada), pilih metode pembayaran, dan selesaikan pesanan.</p>
                    </div>
                </div>
            </div>
          </section>
          
          <div className="w-full h-px bg-outline-variant/30 my-8"></div>

          <section className="space-y-4">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-[28px] text-[#25D366]">chat</span>
                Pemesanan Custom via WhatsApp
            </h2>
            <div className="grid gap-4">
                <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0 mt-0.5">1</div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Hubungi Admin</h3>
                        <p className="text-on-surface-variant">Klik logo WhatsApp di website ini atau hubungi kami di <a href="https://wa.me/message/YE44OXBSTECGN1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">link WhatsApp kami</a>.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0 mt-0.5">2</div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Konsultasi Desain & Harga</h3>
                        <p className="text-on-surface-variant">Kirimkan referensi foto/gambar rajutan yang Anda inginkan, tentukan ukuran, serta warna benang. Admin kami akan memberikan estimasi waktu pengerjaan dan total harga.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0 mt-0.5">3</div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Pembayaran DP (Down Payment)</h3>
                        <p className="text-on-surface-variant">Setelah *deal*, silakan lakukan pembayaran DP sebesar 50% dari total harga. Proses rajut akan dimulai H+1 setelah DP diterima.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0 mt-0.5">4</div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Pelunasan & Pengiriman</h3>
                        <p className="text-on-surface-variant">Saat produk selesai, kami akan mengirimkan foto hasilnya. Setelah itu, silakan lakukan pelunasan (sisa 50% + ongkir), dan paket akan segera dikirim ke alamat Anda.</p>
                    </div>
                </div>
            </div>
          </section>

          <div className="mt-12 text-center pt-8 border-t border-outline-variant/30">
            <h3 className="font-headline-md text-xl mb-4">Masih Punya Pertanyaan?</h3>
            <Link href="https://wa.me/message/YE44OXBSTECGN1" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-lg hover:shadow-primary/30">
                <span className="material-symbols-outlined" data-icon="chat">chat</span>
                Tanya Admin Sekarang
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
