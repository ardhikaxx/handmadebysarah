import Link from 'next/link';

export const metadata = {
  title: "Syarat & Ketentuan | Handmade By Sarah",
  description: "Syarat dan ketentuan pembelian serta penggunaan layanan di Handmade By Sarah.",
};

export default function SyaratKetentuan() {
  return (
    <div className="bg-background min-h-screen">
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-margin-desktop max-w-4xl mx-auto">
        <div className="mb-10 text-center">
            <h1 className="font-headline-lg text-4xl lg:text-5xl text-primary mb-4">Syarat &amp; Ketentuan</h1>
            <p className="text-on-surface-variant font-body-lg">Pembaruan Terakhir: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        
        <div className="space-y-8 text-on-surface font-body-md leading-relaxed bg-white p-8 lg:p-12 rounded-[32px] border border-outline-variant/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <section className="space-y-3">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">verified_user</span>
                1. Pendahuluan
            </h2>
            <p className="text-on-surface-variant">
              Selamat datang di Handmade By Sarah. Dengan mengakses dan menggunakan situs web serta layanan kami, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku di bawah ini. Jika Anda tidak menyetujui salah satu syarat, Anda dipersilakan untuk tidak menggunakan layanan kami.
            </p>
          </section>
          
          <div className="w-full h-px bg-outline-variant/30"></div>

          <section className="space-y-3">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">category</span>
                2. Produk dan Layanan
            </h2>
            <p className="text-on-surface-variant">
              Seluruh produk kami merupakan hasil karya tangan (<i>handmade</i>). Oleh karena itu, mungkin terdapat sedikit perbedaan ukuran, warna, atau detail jahitan dari foto yang ditampilkan. Setiap produk memiliki keunikannya masing-masing. Kami selalu berusaha memberikan kualitas bahan dan hasil rajutan terbaik untuk setiap pesanan Anda.
            </p>
          </section>
          
          <div className="w-full h-px bg-outline-variant/30"></div>

          <section className="space-y-3">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">edit_square</span>
                3. Pemesanan (Custom Order)
            </h2>
            <p className="text-on-surface-variant mb-2">
              Bagi Anda yang menginginkan produk dengan desain khusus (custom), berlaku ketentuan berikut:
            </p>
            <ul className="list-disc list-inside text-on-surface-variant space-y-1 ml-2">
                <li>Waktu pengerjaan bervariasi antara 3 hingga 14 hari kerja tergantung dari tingkat kesulitan desain dan antrean yang ada.</li>
                <li>DP (Down Payment) sebesar 50% diwajibkan untuk setiap pesanan custom sebelum proses pembuatan dimulai.</li>
                <li>Perubahan desain tidak dapat dilakukan setelah proses pengerjaan (rajut) sudah dimulai.</li>
            </ul>
          </section>

          <div className="w-full h-px bg-outline-variant/30"></div>

          <section className="space-y-3">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">local_shipping</span>
                4. Pengiriman
            </h2>
            <p className="text-on-surface-variant">
              Pengiriman pesanan dilakukan melalui layanan logistik pihak ketiga pilihan Anda. Keterlambatan pengiriman yang disebabkan oleh pihak logistik bukan merupakan tanggung jawab Handmade By Sarah. Namun demikian, kami akan selalu memastikan paket pesanan Anda dikemas dengan sangat aman dan cantik sebelum diserahkan ke kurir.
            </p>
          </section>

          <div className="w-full h-px bg-outline-variant/30"></div>

          <section className="space-y-3">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">assignment_return</span>
                5. Kebijakan Pengembalian
            </h2>
            <p className="text-on-surface-variant">
              Barang yang sudah dibeli tidak dapat ditukar atau dikembalikan (<i>No Return, No Refund</i>). Pengecualian diberikan apabila terdapat cacat produksi yang terbukti berasal dari kami. Klaim ini wajib disertai dengan <b>video unboxing tanpa jeda</b> (<i>no cut, no edit</i>) selambat-lambatnya 1x24 jam setelah status barang diterima dari logistik.
            </p>
          </section>

          <div className="w-full h-px bg-outline-variant/30"></div>

          <section className="space-y-3">
            <h2 className="font-headline-md text-2xl text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">contact_support</span>
                6. Hubungi Kami
            </h2>
            <p className="text-on-surface-variant">
              Jika Anda memiliki pertanyaan lebih lanjut mengenai syarat dan ketentuan ini, atau ingin berkonsultasi mengenai pesanan Anda, silakan hubungi kami melalui WhatsApp ke nomor <a href="https://wa.me/message/YE44OXBSTECGN1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Admin Handmade By Sarah</a> atau melalui Direct Message Instagram kami.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
