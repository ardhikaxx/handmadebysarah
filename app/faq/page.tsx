export const metadata = {
  title: "FAQ | Handmade By Sarah",
  description: "Pertanyaan yang sering diajukan seputar produk rajut Handmade By Sarah.",
};

export default function FAQPage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-24 px-margin-desktop max-w-3xl mx-auto">
        <div className="mb-12 text-center">
            <h1 className="font-headline-lg text-4xl lg:text-5xl text-primary mb-4">Frequently Asked Questions</h1>
            <p className="text-on-surface-variant font-body-lg">Temukan jawaban untuk pertanyaan umum seputar produk rajut kami.</p>
        </div>
        
        <div className="space-y-6">
          
          <details className="group bg-white rounded-3xl border border-outline-variant/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 lg:p-8 font-headline-md text-xl text-secondary select-none">
              <span>Apa perbedaan produk Handmade By Sarah dengan produk pabrik?</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">expand_more</span>
            </summary>
            <div className="p-6 lg:p-8 pt-0 text-on-surface-variant font-body-md leading-relaxed border-t border-outline-variant/20 mt-2">
              Seluruh produk kami dibuat secara manual dengan tangan (<i>handmade</i>) simpul demi simpul menggunakan teknik rajut. Ini membuat setiap produk memiliki detail, ketahanan, dan keunikan yang tidak bisa direplikasi persis oleh mesin pabrik. Anda mendapatkan karya seni fungsional yang dibuat dengan dedikasi penuh.
            </div>
          </details>

          <details className="group bg-white rounded-3xl border border-outline-variant/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 lg:p-8 font-headline-md text-xl text-secondary select-none">
              <span>Berapa lama proses pembuatan pesanan custom?</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">expand_more</span>
            </summary>
            <div className="p-6 lg:p-8 pt-0 text-on-surface-variant font-body-md leading-relaxed border-t border-outline-variant/20 mt-2">
              Waktu pengerjaan (<i>Pre-Order</i>) untuk pesanan custom bervariasi antara 3 hingga 14 hari kerja. Hal ini tergantung dari tingkat kerumitan desain, ukuran produk, dan antrean pesanan yang sedang berjalan. Estimasi waktu pasti akan diinfokan oleh admin saat Anda melakukan konsultasi.
            </div>
          </details>

          <details className="group bg-white rounded-3xl border border-outline-variant/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 lg:p-8 font-headline-md text-xl text-secondary select-none">
              <span>Bagaimana cara merawat atau mencuci produk rajutan?</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">expand_more</span>
            </summary>
            <div className="p-6 lg:p-8 pt-0 text-on-surface-variant font-body-md leading-relaxed border-t border-outline-variant/20 mt-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Cuci menggunakan tangan (dikucek lembut). Jangan menggunakan mesin cuci.</li>
                <li>Gunakan deterjen cair yang lembut (seperti deterjen bayi).</li>
                <li>Jangan diperas dengan cara dipelintir keras, cukup ditekan perlahan untuk membuang air.</li>
                <li>Jemur di tempat yang teduh, hindari sinar matahari langsung agar warna benang tidak pudar.</li>
              </ul>
            </div>
          </details>

          <details className="group bg-white rounded-3xl border border-outline-variant/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 lg:p-8 font-headline-md text-xl text-secondary select-none">
              <span>Apakah warna benang bisa luntur?</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">expand_more</span>
            </summary>
            <div className="p-6 lg:p-8 pt-0 text-on-surface-variant font-body-md leading-relaxed border-t border-outline-variant/20 mt-2">
              Kami menggunakan benang berkualitas tinggi yang tidak mudah luntur. Namun, pada pencucian pertama (terutama untuk warna pekat seperti merah atau hitam), sebaiknya dipisahkan dari pakaian lain sebagai tindakan pencegahan ekstra.
            </div>
          </details>

          <details className="group bg-white rounded-3xl border border-outline-variant/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 lg:p-8 font-headline-md text-xl text-secondary select-none">
              <span>Apakah melayani pengiriman ke luar kota/pulau?</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">expand_more</span>
            </summary>
            <div className="p-6 lg:p-8 pt-0 text-on-surface-variant font-body-md leading-relaxed border-t border-outline-variant/20 mt-2">
              Tentu saja! Kami melayani pengiriman ke seluruh wilayah Indonesia menggunakan berbagai jasa ekspedisi terpercaya. Produk rajut tidak mudah rusak saat diperjalanan, namun kami tetap mengemasnya dengan aman dan rapi.
            </div>
          </details>

          <details className="group bg-white rounded-3xl border border-outline-variant/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 lg:p-8 font-headline-md text-xl text-secondary select-none">
              <span>Bisakah saya meminta pengembalian dana (refund) jika pesanan belum dikirim?</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">expand_more</span>
            </summary>
            <div className="p-6 lg:p-8 pt-0 text-on-surface-variant font-body-md leading-relaxed border-t border-outline-variant/20 mt-2">
              Untuk produk <i>ready stock</i>, pembatalan dan refund hanya bisa dilakukan jika resi pengiriman belum dicetak. Sedangkan untuk <i>custom order</i>, jika Anda sudah membayar DP dan proses rajut sudah dimulai, maka DP hangus dan pesanan tidak bisa dibatalkan atau dikembalikan dananya.
            </div>
          </details>

        </div>

        <div className="mt-16 text-center">
            <p className="text-on-surface-variant mb-4">Pertanyaan Anda belum terjawab?</p>
            <a href="https://wa.me/message/YE44OXBSTECGN1" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-3.5 rounded-full font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform shadow-md hover:shadow-primary/30">
                <span className="material-symbols-outlined text-[20px]" data-icon="chat">chat</span>
                Tanya Lewat WhatsApp
            </a>
        </div>
      </main>
    </div>
  );
}
