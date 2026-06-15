export const metadata = {
  title: "Kebijakan Privasi | Handmade By Sarah",
  description: "Kebijakan privasi dan perlindungan data pelanggan di Handmade By Sarah.",
};

export default function KebijakanPrivasi() {
  return (
    <div className="bg-background min-h-screen">
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-margin-desktop max-w-4xl mx-auto">
        <div className="mb-10 text-center">
            <h1 className="font-headline-lg text-4xl lg:text-5xl text-primary mb-4">Kebijakan Privasi</h1>
            <p className="text-on-surface-variant font-body-lg">Pembaruan Terakhir: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        
        <div className="space-y-8 text-on-surface font-body-md leading-relaxed bg-white p-8 lg:p-12 rounded-[32px] border border-outline-variant/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <section className="space-y-3">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">shield</span>
                1. Pendahuluan
            </h2>
            <p className="text-on-surface-variant">
              Privasi Anda sangat penting bagi <b>Handmade By Sarah</b>. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan dalam kondisi tertentu, membagikan informasi pribadi Anda saat Anda mengunjungi situs web atau menggunakan layanan kami. Kami berkomitmen untuk menjaga kerahasiaan dan keamanan data Anda sesuai dengan ketentuan yang berlaku.
            </p>
          </section>
          
          <div className="w-full h-px bg-outline-variant/30"></div>

          <section className="space-y-3">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">database</span>
                2. Informasi yang Kami Kumpulkan
            </h2>
            <p className="text-on-surface-variant mb-2">
              Kami dapat mengumpulkan beberapa jenis informasi saat Anda berinteraksi dengan kami:
            </p>
            <ul className="list-disc list-inside text-on-surface-variant space-y-1 ml-2">
                <li><b>Informasi Identitas Pribadi:</b> Nama lengkap, alamat email, nomor telepon (WhatsApp), dan alamat pengiriman saat Anda melakukan pemesanan (terutama untuk pesanan custom).</li>
                <li><b>Data Transaksi:</b> Rincian pesanan, riwayat pembelian, serta bukti pembayaran.</li>
                <li><b>Data Interaksi:</b> Pesan, ulasan, atau feedback yang Anda kirimkan kepada kami melalui media sosial atau platform komunikasi lainnya.</li>
            </ul>
          </section>
          
          <div className="w-full h-px bg-outline-variant/30"></div>

          <section className="space-y-3">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">settings_accessibility</span>
                3. Penggunaan Informasi
            </h2>
            <p className="text-on-surface-variant mb-2">
              Informasi yang kami kumpulkan digunakan untuk tujuan berikut:
            </p>
            <ul className="list-disc list-inside text-on-surface-variant space-y-1 ml-2">
                <li>Memproses, mengelola, dan mengirimkan pesanan Anda.</li>
                <li>Berkomunikasi dengan Anda mengenai pesanan, pertanyaan, atau keluhan.</li>
                <li>Mengirimkan informasi terbaru mengenai produk, promo, atau penawaran spesial (hanya jika Anda telah berlangganan <i>newsletter</i> kami).</li>
                <li>Meningkatkan kualitas produk dan layanan kami melalui analisis <i>feedback</i> pelanggan.</li>
            </ul>
          </section>

          <div className="w-full h-px bg-outline-variant/30"></div>

          <section className="space-y-3">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">lock</span>
                4. Perlindungan dan Keamanan Data
            </h2>
            <p className="text-on-surface-variant">
              Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Data pesanan Anda hanya akan diakses oleh tim internal kami untuk keperluan operasional dan pemenuhan pesanan. Kami <b>tidak akan pernah menjual atau menyewakan</b> informasi pribadi Anda kepada pihak ketiga.
            </p>
          </section>

          <div className="w-full h-px bg-outline-variant/30"></div>

          <section className="space-y-3">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">share</span>
                5. Pembagian Informasi kepada Pihak Ketiga
            </h2>
            <p className="text-on-surface-variant">
              Kami hanya akan membagikan informasi dasar yang diperlukan kepada pihak ketiga yang membantu operasional kami, seperti jasa ekspedisi (kurir) untuk keperluan pengiriman paket. Pihak ketiga ini diwajibkan untuk menjaga kerahasiaan informasi yang kami berikan.
            </p>
          </section>

          <div className="w-full h-px bg-outline-variant/30"></div>

          <section className="space-y-3">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">update</span>
                6. Perubahan Kebijakan Privasi
            </h2>
            <p className="text-on-surface-variant">
              Handmade By Sarah berhak untuk memperbarui atau mengubah Kebijakan Privasi ini kapan saja. Setiap perubahan akan diumumkan di halaman ini bersama dengan tanggal "Pembaruan Terakhir". Kami menyarankan Anda untuk meninjau halaman ini secara berkala.
            </p>
          </section>

          <div className="w-full h-px bg-outline-variant/30"></div>

          <section className="space-y-3">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">mail</span>
                7. Hubungi Kami
            </h2>
            <p className="text-on-surface-variant">
              Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait pengelolaan data pribadi Anda, silakan hubungi kami melalui WhatsApp di <a href="https://wa.me/message/YE44OXBSTECGN1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Admin Handmade By Sarah</a> atau melalui pesan langsung di akun media sosial resmi kami.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
