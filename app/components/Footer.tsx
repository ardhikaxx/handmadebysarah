import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-surface-container-low py-20 px-margin-desktop">
            <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
                <div className="space-y-6">
                    <Link className="font-headline-md text-headline-md text-primary block" href="/">Handmade By Sarah</Link>
                    <p className="text-body-sm text-on-surface-variant">Menghadirkan keindahan rajut tradisional dalam gaya hidup modern. Dibuat dengan cinta, simpul demi simpul.</p>
                    <div className="flex flex-wrap gap-3">
                        <a href="https://s.shopee.co.id/AACyR1wgu6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-[#EE4D2D] hover:text-white hover:border-[#EE4D2D] transition-all duration-300 group" title="Shopee">
                            <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">shopping_bag</span>
                        </a>
                        <a href="https://wa.me/message/YE44OXBSTECGN1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 group" title="WhatsApp">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px] group-hover:scale-110 transition-transform"><path d="M12.031 21c-1.636 0-3.222-.416-4.636-1.206l-5.114 1.34 1.365-4.981A8.956 8.956 0 012.43 12.04c0-4.962 4.04-9 9.006-9s9.006 4.038 9.006 9c0 4.963-4.04 9-9.005 9zm0-16.425C7.886 4.575 4.505 7.95 4.505 12.04c0 1.353.36 2.673 1.042 3.824l.11.185-.865 3.155 3.23-.846.177.105c1.11.66 2.38 1.008 3.682 1.008 4.143 0 7.525-3.375 7.525-7.465 0-4.092-3.382-7.466-7.525-7.466v.035zm4.12 9.878c-.226-.113-1.338-.66-1.545-.736-.207-.075-.357-.113-.508.113-.15.226-.583.736-.715.887-.132.15-.264.17-.49.056-.227-.113-.956-.352-1.82-1.123-.674-.6-1.13-1.342-1.263-1.568-.133-.226-.014-.348.1-.46.102-.102.226-.264.34-.396.113-.132.15-.226.226-.377.075-.15.038-.283-.018-.396-.056-.113-.508-1.225-.696-1.677-.183-.44-.37-.38-.507-.387-.132-.007-.282-.007-.433-.007-.15 0-.396.056-.603.282-.207.226-.79 .772-.79 1.882s.808 2.184.92 2.335c.113.15 1.59 2.428 3.85 3.404.538.232 1.02.365 1.368.468.54.16 1.03.138 1.417.084.434-.06 1.338-.546 1.526-1.074.188-.527.188-.978.132-1.074-.056-.094-.207-.15-.433-.264z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/handmade.by.sarah__" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all duration-300 group" title="Instagram">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px] group-hover:scale-110 transition-transform"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                        <a href="https://www.tiktok.com/@sarahrahmania" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 group" title="TikTok">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px] group-hover:scale-110 transition-transform"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" /></svg>
                        </a>
                        <a href="https://youtube.com/@handmade.bysarah?si=LadV8lnorasNzLJv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all duration-300 group" title="YouTube">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px] group-hover:scale-110 transition-transform"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                    </div>
                </div>
                <div className="space-y-6">
                    <h4 className="font-bold text-secondary">Halaman</h4>
                    <div className="flex flex-col gap-3">
                        <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary-container underline-offset-4" href="#">Tentang Kami</Link>
                        <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary-container underline-offset-4" href="#">Produk Kami</Link>
                        <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary-container underline-offset-4" href="#">Custom Order</Link>
                        <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary-container underline-offset-4" href="#">Blog &amp; Inspirasi</Link>
                    </div>
                </div>
                <div className="space-y-6">
                    <h4 className="font-bold text-secondary">Bantuan</h4>
                    <div className="flex flex-col gap-3">
                        <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary-container underline-offset-4" href="#">FAQ</Link>
                        <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary-container underline-offset-4" href="#">Cara Pemesanan</Link>
                        <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary-container underline-offset-4" href="/kebijakan-privasi">Kebijakan Privasi</Link>
                        <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary-container underline-offset-4" href="/syarat-dan-ketentuan">Syarat &amp; Ketentuan</Link>
                    </div>
                </div>
                <div className="space-y-6">
                    <h4 className="font-bold text-secondary">Newsletter</h4>
                    <p className="text-body-sm text-on-surface-variant">Dapatkan info produk terbaru dan promo eksklusif.</p>
                    <form className="flex flex-col gap-3">
                        <input className="bg-surface border-none rounded-full px-6 py-3 text-sm focus:ring-2 focus:ring-primary" placeholder="Email Anda" type="email" />
                        <button className="bg-secondary text-on-secondary py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity" type="submit">Berlangganan</button>
                    </form>
                </div>
            </div>
            <div className="max-w-container-max mx-auto mt-20 pt-8 border-t border-outline-variant text-center">
                <p className="text-body-sm text-on-surface-variant">© 2024 Handmade By Sarah. Crafting Indonesian Heritage.</p>
            </div>
        </footer>
    );
}
