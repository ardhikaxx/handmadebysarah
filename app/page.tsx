import Image from "next/image";
import Link from "next/link";
import SmoothScrollLink from "./components/SmoothScrollLink";
import InstagramEmbed from "./components/InstagramEmbed";
import { embed1, embed2, embed3 } from "./components/InstagramHtml";

export default function Home() {
    return (
        <>

            <main className="pt-24 overflow-x-hidden">
                {/* Hero Section */}
                <section id="beranda" className="px-margin-desktop py-10 md:py-16 lg:py-20 max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <span className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-md text-label-md uppercase tracking-wider font-bold inline-block">Handmade By Sarah</span>
                        <h1 className="font-headline-xl text-4xl md:text-5xl lg:text-6xl text-on-background leading-tight">
                            Produk Rajut Handmade Berkualitas
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto lg:mx-0">
                            Setiap simpul benang adalah dedikasi. Kami menghadirkan karya rajut premium yang menggabungkan tradisi lokal dengan desain kontemporer untuk gaya hidup modern Anda.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <a href="https://s.shopee.co.id/AACyR1wgu6" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-4 rounded-full font-body-md font-bold hover:scale-105 transition-transform inline-block text-center">Belanja Sekarang</a>
                            <SmoothScrollLink href="/#katalog" className="border-1.5 border-primary text-primary px-8 py-4 rounded-full font-body-md font-bold hover:bg-primary/5 transition-colors border-2 inline-block text-center">Lihat Katalog</SmoothScrollLink>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8">
                            <div><div className="font-headline-md text-headline-md text-primary">5k+</div><div className="font-label-md text-label-md text-on-surface-variant">Produk Terjual</div></div>
                            <div><div className="font-headline-md text-headline-md text-primary">1.2k+</div><div className="font-label-md text-label-md text-on-surface-variant">Pelanggan Aktif</div></div>
                            <div><div className="font-headline-md text-headline-md text-primary">250+</div><div className="font-label-md text-label-md text-on-surface-variant">Varian Produk</div></div>
                            <div><div className="font-headline-md text-headline-md text-primary">4.9/5</div><div className="font-label-md text-label-md text-on-surface-variant">Rating Kepuasan</div></div>
                        </div>
                    </div>
                    <div className="relative grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-12">
                            <Image width={800} height={800} alt="Tote Bag" className="rounded-xl w-full h-64 object-cover soft-shadow" data-alt="A premium handmade crochet tote bag featuring a complex geometric weave pattern in earthy tones like beige and soft brown. The bag is placed in a bright, minimalist studio setting with soft morning light filtering through a linen curtain, emphasizing the tactile texture of the high-quality organic cotton yarn." src="/assets/produk/produk1.jpg" />
                            <Image width={800} height={800} alt="Amigurumi" className="rounded-xl w-full h-80 object-cover soft-shadow" data-alt="A collection of adorable amigurumi toys including a small brown bear and a white rabbit, meticulously handcrafted with soft yarn. They are arranged on a light cream surface with a few wooden blocks in the background, creating a warm, artisanal, and cozy aesthetic. The lighting is soft and ambient, highlighting the delicate stitch work." src="/assets/produk/produk2.jpg" />
                        </div>
                        <div className="space-y-4">
                            <Image width={800} height={800} alt="Crochet Hat" className="rounded-xl w-full h-96 object-cover soft-shadow" data-alt="A stylish, minimalist crochet bucket hat in a soft cream color, styled on a wooden mannequin head. The background is a clean, neutral wall with a subtle linen texture. The focus is on the intricate detail of the stitch patterns, showcasing the premium handmade quality and modern fashion appeal of the brand." src="/assets/produk/produk3.jpg" />
                            <Image width={800} height={800} alt="Process" className="rounded-xl w-full h-48 object-cover soft-shadow" data-alt="A close-up shot of an artisan's hands working with a crochet hook and high-quality beige yarn. The setting is warm and domestic, with soft golden light illuminating the fine details of the craft. The scene exudes a sense of calm, focus, and traditional Indonesian craftsmanship in a contemporary light-mode style." src="/assets/produk/produk4.jpg" />
                        </div>
                    </div>
                </section>
                {/* Kategori Produk */}
                <section id="kategori" className="bg-surface-container-low py-12 md:py-16 lg:py-24 px-margin-desktop">
                    <div className="max-w-container-max mx-auto">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="font-headline-lg text-headline-lg text-on-background">Kategori Pilihan</h2>
                            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Temukan koleksi rajut terbaik kami yang dikelompokkan khusus untuk melengkapi gaya dan kenyamanan Anda.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter">
                            {/* Category Card Template */}
                            <SmoothScrollLink className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="/#katalog">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Totebag" className="w-full h-full object-cover rounded-xl" data-alt="A boutique-style crochet tote bag with a minimalist design, displayed on a clean white pedestal. The lighting is high-key and soft, emphasizing the natural fibers of the yarn and the sophisticated craft." src="/assets/produk/produk5.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Totebag</h3>
                            </SmoothScrollLink>
                            <SmoothScrollLink className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="/#katalog">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Topi" className="w-full h-full object-cover rounded-xl" data-alt="A stylish, hand-knit summer hat in light sand color, resting on a white wooden table next to a sprig of dried lavender. The aesthetic is modern artisanal and serene." src="/assets/produk/produk1.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Topi</h3>
                            </SmoothScrollLink>
                            <SmoothScrollLink className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="/#katalog">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Amigurumi" className="w-full h-full object-cover rounded-xl" data-alt="A charming set of miniature crochet amigurumi animals in soft pastel colors, perfectly arranged against a minimalist cream background." src="/assets/produk/produk2.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Amigurumi</h3>
                            </SmoothScrollLink>
                            <SmoothScrollLink className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="/#katalog">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Dompet" className="w-full h-full object-cover rounded-xl" data-alt="A small, elegant crochet coin purse with a vintage metal clasp, handmade with precision. The color is a soft caramel brown." src="/assets/produk/produk3.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Dompet</h3>
                            </SmoothScrollLink>
                            <SmoothScrollLink className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="/#katalog">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Tas" className="w-full h-full object-cover rounded-xl" data-alt="A premium crochet handbag with a sophisticated wooden handle, showcasing exquisite Indonesian craftsmanship in a luxury retail setting." src="/assets/produk/produk4.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Tas</h3>
                            </SmoothScrollLink>
                            <SmoothScrollLink className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="/#katalog">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Aksesoris" className="w-full h-full object-cover rounded-xl" data-alt="Detailed close-up of crochet hair accessories and earrings, featuring delicate floral patterns and soft-toned threads." src="/assets/produk/produk5.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Aksesoris</h3>
                            </SmoothScrollLink>
                            <SmoothScrollLink className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="/#katalog">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Dekorasi" className="w-full h-full object-cover rounded-xl" data-alt="A minimalist living room with a beautiful handmade crochet wall hanging and coasters, creating a cozy and organic home atmosphere." src="/assets/produk/produk1.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Dekorasi Rumah</h3>
                            </SmoothScrollLink>
                            <SmoothScrollLink className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="/#katalog">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Custom" className="w-full h-full object-cover rounded-xl" data-alt="A flat lay of colorful yarn skeins, crochet hooks, and a sketchpad, representing the endless possibilities of custom orders at Handmade By Sarah." src="/assets/produk/produk2.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Custom</h3>
                            </SmoothScrollLink>
                        </div>
                    </div>
                </section>
                {/* Produk Terlaris */}
                <section id="katalog" className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 px-margin-desktop max-w-container-max mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="font-headline-lg text-headline-lg text-on-background">Produk Terlaris</h2>
                            <p className="text-on-surface-variant mt-2">Favorit pelanggan kami sepanjang masa.</p>
                        </div>
                        <a className="text-primary font-bold hover:underline" href="https://s.shopee.co.id/AACyR1wgu6" target="_blank" rel="noopener noreferrer">Lihat Semua Produk →</a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
                        {/* Product 1 */}
                        <a href="https://s.shopee.co.id/AACyR1wgu6" target="_blank" rel="noopener noreferrer" className="group relative block h-full">
                            <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/50 via-primary-container to-secondary/50 rounded-[32px] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 ease-out z-0"></div>
                            <div className="relative flex flex-col h-full bg-white rounded-[28px] overflow-hidden border border-outline-variant/30 shadow-sm transition-all duration-500 z-10 group-hover:-translate-y-1">
                                <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-low">
                                    <Image width={800} height={800} alt="Produk 1" className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110" src="/assets/produk/produk1.jpg" />
                                    <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                                        <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                                            <span className="text-[9px] font-bold tracking-widest text-primary uppercase">Handmade</span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                                    <div className="absolute inset-x-0 bottom-6 flex justify-center translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out z-10 pointer-events-none">
                                        <span className="pointer-events-auto flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-[13px] tracking-wide shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:bg-white hover:text-primary transition-colors duration-300 transform hover:scale-105 active:scale-95">
                                            <span className="material-symbols-outlined text-[18px]">local_mall</span>
                                            Beli Sekarang
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 relative bg-white">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex gap-0.5 text-[#FFB800]">
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                        </div>
                                        <span className="text-[11px] text-on-surface-variant font-bold bg-surface-container px-2 py-0.5 rounded-md">5.0</span>
                                    </div>
                                    <h3 className="font-headline-md text-[16px] leading-snug text-on-surface group-hover:text-primary transition-colors duration-300 mb-5 line-clamp-2" title="Boneka Rajut Kelinci Telanjang (PLUSHIE AMIGURUMI)">
                                        Boneka Rajut Kelinci Telanjang (PLUSHIE AMIGURUMI)
                                    </h3>
                                    <div className="mt-auto flex items-end justify-between pt-4 border-t border-outline-variant/30">
                                        <div>
                                            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1 font-bold">Harga</p>
                                            <p className="font-bold text-[18px] text-primary">Rp 145.902</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-[-45deg] group-hover:shadow-lg group-hover:shadow-primary/30">
                                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Product 2 */}
                        <a href="https://s.shopee.co.id/AACyR1wgu6" target="_blank" rel="noopener noreferrer" className="group relative block h-full">
                            <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/50 via-primary-container to-secondary/50 rounded-[32px] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 ease-out z-0"></div>
                            <div className="relative flex flex-col h-full bg-white rounded-[28px] overflow-hidden border border-outline-variant/30 shadow-sm transition-all duration-500 z-10 group-hover:-translate-y-1">
                                <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-low">
                                    <Image width={800} height={800} alt="Produk 2" className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110" src="/assets/produk/produk2.jpg" />
                                    <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                                        <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                                            <span className="text-[9px] font-bold tracking-widest text-primary uppercase">Handmade</span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                                    <div className="absolute inset-x-0 bottom-6 flex justify-center translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out z-10 pointer-events-none">
                                        <span className="pointer-events-auto flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-[13px] tracking-wide shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:bg-white hover:text-primary transition-colors duration-300 transform hover:scale-105 active:scale-95">
                                            <span className="material-symbols-outlined text-[18px]">local_mall</span>
                                            Beli Sekarang
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 relative bg-white">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex gap-0.5 text-[#FFB800]">
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                        </div>
                                        <span className="text-[11px] text-on-surface-variant font-bold bg-surface-container px-2 py-0.5 rounded-md">5.0</span>
                                    </div>
                                    <h3 className="font-headline-md text-[16px] leading-snug text-on-surface group-hover:text-primary transition-colors duration-300 mb-5 line-clamp-2" title="Boneka Rajut Kelinci dengan Dress dan Topi Kodok">
                                        Boneka Rajut Kelinci dengan Dress dan Topi Kodok
                                    </h3>
                                    <div className="mt-auto flex items-end justify-between pt-4 border-t border-outline-variant/30">
                                        <div>
                                            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1 font-bold">Harga</p>
                                            <p className="font-bold text-[18px] text-primary">Rp 198.500</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-[-45deg] group-hover:shadow-lg group-hover:shadow-primary/30">
                                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Product 3 */}
                        <a href="https://s.shopee.co.id/AACyR1wgu6" target="_blank" rel="noopener noreferrer" className="group relative block h-full">
                            <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/50 via-primary-container to-secondary/50 rounded-[32px] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 ease-out z-0"></div>
                            <div className="relative flex flex-col h-full bg-white rounded-[28px] overflow-hidden border border-outline-variant/30 shadow-sm transition-all duration-500 z-10 group-hover:-translate-y-1">
                                <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-low">
                                    <Image width={800} height={800} alt="Produk 3" className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110" src="/assets/produk/produk3.jpg" />
                                    <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                                        <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                                            <span className="text-[9px] font-bold tracking-widest text-primary uppercase">Handmade</span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                                    <div className="absolute inset-x-0 bottom-6 flex justify-center translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out z-10 pointer-events-none">
                                        <span className="pointer-events-auto flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-[13px] tracking-wide shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:bg-white hover:text-primary transition-colors duration-300 transform hover:scale-105 active:scale-95">
                                            <span className="material-symbols-outlined text-[18px]">local_mall</span>
                                            Beli Sekarang
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 relative bg-white">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex gap-0.5 text-[#FFB800]">
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                        </div>
                                        <span className="text-[11px] text-on-surface-variant font-bold bg-surface-container px-2 py-0.5 rounded-md">5.0</span>
                                    </div>
                                    <h3 className="font-headline-md text-[16px] leading-snug text-on-surface group-hover:text-primary transition-colors duration-300 mb-5 line-clamp-2" title="Boneka Rajut Kelinci dengan Dress dan Floppy Hat">
                                        Boneka Rajut Kelinci dengan Dress dan Floppy Hat
                                    </h3>
                                    <div className="mt-auto flex items-end justify-between pt-4 border-t border-outline-variant/30">
                                        <div>
                                            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1 font-bold">Harga</p>
                                            <p className="font-bold text-[18px] text-primary">Rp 242.000</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-[-45deg] group-hover:shadow-lg group-hover:shadow-primary/30">
                                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Product 4 */}
                        <a href="https://s.shopee.co.id/AACyR1wgu6" target="_blank" rel="noopener noreferrer" className="group relative block h-full">
                            <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/50 via-primary-container to-secondary/50 rounded-[32px] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 ease-out z-0"></div>
                            <div className="relative flex flex-col h-full bg-white rounded-[28px] overflow-hidden border border-outline-variant/30 shadow-sm transition-all duration-500 z-10 group-hover:-translate-y-1">
                                <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-low">
                                    <Image width={800} height={800} alt="Produk 4" className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110" src="/assets/produk/produk4.jpg" />
                                    <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                                        <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                                            <span className="text-[9px] font-bold tracking-widest text-primary uppercase">Handmade</span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                                    <div className="absolute inset-x-0 bottom-6 flex justify-center translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out z-10 pointer-events-none">
                                        <span className="pointer-events-auto flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-[13px] tracking-wide shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:bg-white hover:text-primary transition-colors duration-300 transform hover:scale-105 active:scale-95">
                                            <span className="material-symbols-outlined text-[18px]">local_mall</span>
                                            Beli Sekarang
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 relative bg-white">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex gap-0.5 text-[#FFB800]">
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                        </div>
                                        <span className="text-[11px] text-on-surface-variant font-bold bg-surface-container px-2 py-0.5 rounded-md">5.0</span>
                                    </div>
                                    <h3 className="font-headline-md text-[16px] leading-snug text-on-surface group-hover:text-primary transition-colors duration-300 mb-5 line-clamp-2" title="Boneka Rajut Kelinci dengan Hoodie">
                                        Boneka Rajut Kelinci dengan Hoodie
                                    </h3>
                                    <div className="mt-auto flex items-end justify-between pt-4 border-t border-outline-variant/30">
                                        <div>
                                            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1 font-bold">Harga</p>
                                            <p className="font-bold text-[18px] text-primary">Rp 242.000</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-[-45deg] group-hover:shadow-lg group-hover:shadow-primary/30">
                                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Product 5 */}
                        <a href="https://s.shopee.co.id/AACyR1wgu6" target="_blank" rel="noopener noreferrer" className="group relative block h-full">
                            <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/50 via-primary-container to-secondary/50 rounded-[32px] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 ease-out z-0"></div>
                            <div className="relative flex flex-col h-full bg-white rounded-[28px] overflow-hidden border border-outline-variant/30 shadow-sm transition-all duration-500 z-10 group-hover:-translate-y-1">
                                <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-low">
                                    <Image width={800} height={800} alt="Produk 5" className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110" src="/assets/produk/produk5.jpg" />
                                    <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                                        <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                                            <span className="text-[9px] font-bold tracking-widest text-primary uppercase">Handmade</span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                                    <div className="absolute inset-x-0 bottom-6 flex justify-center translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out z-10 pointer-events-none">
                                        <span className="pointer-events-auto flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-[13px] tracking-wide shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:bg-white hover:text-primary transition-colors duration-300 transform hover:scale-105 active:scale-95">
                                            <span className="material-symbols-outlined text-[18px]">local_mall</span>
                                            Beli Sekarang
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 relative bg-white">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex gap-0.5 text-[#FFB800]">
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                            <span className="material-symbols-outlined text-[14px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                        </div>
                                        <span className="text-[11px] text-on-surface-variant font-bold bg-surface-container px-2 py-0.5 rounded-md">5.0</span>
                                    </div>
                                    <h3 className="font-headline-md text-[16px] leading-snug text-on-surface group-hover:text-primary transition-colors duration-300 mb-5 line-clamp-2" title="Boneka Rajut Kelinci dengan Kemeja dan Topi Kodok">
                                        Boneka Rajut Kelinci dengan Kemeja dan Topi Kodok
                                    </h3>
                                    <div className="mt-auto flex items-end justify-between pt-4 border-t border-outline-variant/30">
                                        <div>
                                            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1 font-bold">Harga</p>
                                            <p className="font-bold text-[18px] text-primary">Rp 242.000</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-[-45deg] group-hover:shadow-lg group-hover:shadow-primary/30">
                                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
                {/* Tentang Brand */}
                <section id="tentang-kami" className="bg-surface py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 px-margin-desktop overflow-hidden">
                    <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-fixed rounded-full opacity-30 blur-3xl"></div>
                            <Image width={800} height={800} alt="Owner Handmade By Sarah" className="rounded-3xl soft-shadow relative z-10 w-full object-cover" data-alt="A portrait of the owner of Handmade By Sarah, representing the authentic and personal touch behind the brand." src="/assets/owner.jpg" />
                            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl soft-shadow z-20 max-w-[240px]">
                                <p className="font-body-md italic text-primary">&quot;Kami percaya bahwa keindahan sejati lahir dari kesabaran dan keahlian tangan manusia.&quot;</p>
                            </div>
                        </div>
                        <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                            <h2 className="font-headline-lg text-headline-lg">Lokal Craftmanship, Standar Global</h2>
                            <p className="font-body-lg text-on-surface-variant leading-relaxed">
                                Handmade By Sarah berawal dari kecintaan terhadap seni rajut tradisional Nusantara. Kami memberdayakan perajin lokal untuk menciptakan produk modern yang tidak hanya estetik, tetapi juga memiliki ketahanan dan nilai seni tinggi.
                            </p>
                            <p className="font-body-md text-on-surface-variant leading-relaxed">
                                Setiap produk kami melalui proses kurasi material yang ketat, menggunakan benang premium yang ramah lingkungan untuk memastikan kenyamanan dan kualitas terbaik di setiap simpulnya.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full justify-items-center lg:justify-items-start">
                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 text-center lg:text-left">
                                    <span className="material-symbols-outlined text-primary bg-primary-container/20 p-3 rounded-xl" data-icon="eco">eco</span>
                                    <div><h4 className="font-bold text-primary">Sustainable</h4><p className="text-sm">Bahan ramah lingkungan</p></div>
                                </div>
                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 text-center lg:text-left">
                                    <span className="material-symbols-outlined text-primary bg-primary-container/20 p-3 rounded-xl" data-icon="brush">brush</span>
                                    <div><h4 className="font-bold text-primary">Unique Design</h4><p className="text-sm">Eksklusif &amp; Kreatif</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Keunggulan */}
                <section className="py-12 md:py-16 lg:py-24 px-margin-desktop bg-surface-container-low">
                    <div className="max-w-container-max mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
                            <div className="bg-white p-10 rounded-2xl text-center space-y-4 soft-shadow hover:-translate-y-1 transition-transform">
                                <span className="material-symbols-outlined text-4xl text-primary" data-icon="front_hand">front_hand</span>
                                <h3 className="font-bold text-lg">100% Handmade</h3>
                                <p className="text-sm text-on-surface-variant">Dibuat dengan tangan oleh perajin ahli kami.</p>
                            </div>
                            <div className="bg-white p-10 rounded-2xl text-center space-y-4 soft-shadow hover:-translate-y-1 transition-transform">
                                <span className="material-symbols-outlined text-4xl text-primary" data-icon="verified">verified</span>
                                <h3 className="font-bold text-lg">Premium Material</h3>
                                <p className="text-sm text-on-surface-variant">Hanya menggunakan benang kualitas terbaik.</p>
                            </div>
                            <div className="bg-white p-10 rounded-2xl text-center space-y-4 soft-shadow hover:-translate-y-1 transition-transform">
                                <span className="material-symbols-outlined text-4xl text-primary" data-icon="recycling">recycling</span>
                                <h3 className="font-bold text-lg">Eco-friendly</h3>
                                <p className="text-sm text-on-surface-variant">Proses produksi yang ramah lingkungan.</p>
                            </div>
                            <div className="bg-white p-10 rounded-2xl text-center space-y-4 soft-shadow hover:-translate-y-1 transition-transform">
                                <span className="material-symbols-outlined text-4xl text-primary" data-icon="local_shipping">local_shipping</span>
                                <h3 className="font-bold text-lg">Pengiriman Aman</h3>
                                <p className="text-sm text-on-surface-variant">Packing rapi dan garansi pengiriman.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Produk Custom */}
                <section id="custom" className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 px-margin-desktop">
                    <div className="max-w-container-max mx-auto bg-secondary-container rounded-3xl p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                        <div className="lg:w-1/2 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                            <h2 className="font-headline-lg text-headline-lg text-on-secondary-container">Ingin Produk yang Lebih Personal?</h2>
                            <p className="font-body-lg text-on-secondary-container/80">Kami menerima pesanan custom sesuai keinginan Anda. Mulai dari warna, ukuran, hingga desain khusus untuk kado atau penggunaan pribadi.</p>
                            <a href="https://wa.me/message/YE44OXBSTECGN1" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-lg hover:shadow-primary/30 w-fit">
                                <span className="material-symbols-outlined" data-icon="chat">chat</span>
                                Hubungi WhatsApp Kami
                            </a>
                        </div>
                        <div className="lg:w-1/2">
                            <Image width={800} height={800} alt="Custom Order" className="rounded-2xl soft-shadow w-full h-[400px] object-cover" data-alt="A beautiful flat lay of various high-quality yarn skeins in a gradient of earthy and warm tones, with a crochet hook and a personalized order note. The image represents the creative process of custom orders in a modern, artisanal style." src="/assets/produk/produk4.jpg" />
                        </div>
                    </div>
                </section>
                {/* Galeri */}
                <section id="galeri" className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 px-margin-desktop bg-surface">
                    <div className="max-w-container-max mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-headline-lg text-headline-lg">Inspirasi Galeri</h2>
                            <p className="text-on-surface-variant">Melihat lebih dekat setiap detail karya kami.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter justify-items-center">
                            <InstagramEmbed html={embed1} />
                            <InstagramEmbed html={embed2} />
                            <InstagramEmbed html={embed3} />
                        </div>
                    </div>
                </section>
                {/* Video Showcase */}
                <section className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 bg-primary">
                    <div className="max-w-container-max mx-auto px-margin-desktop text-center text-on-primary">
                        <div className="mb-12">
                            <h2 className="font-headline-lg text-headline-lg mb-4">Seni Merajut</h2>
                            <p className="max-w-2xl mx-auto opacity-80">Saksikan bagaimana setiap produk kami diciptakan dari hati.</p>
                        </div>
                        <div className="relative max-w-4xl mx-auto aspect-video bg-surface-container-highest rounded-3xl overflow-hidden soft-shadow group">
                            <Image width={800} height={800} alt="Video Showcase" className="w-full h-full object-cover opacity-80" data-alt="Cinematic wide shot of a peaceful studio where an artisan is working on a large crochet project. Warm light fills the room, creating an atmosphere of focus and tradition." src="/assets/produk/produk3.jpg" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white hover:scale-110 transition-transform group-hover:bg-white group-hover:text-primary">
                                    <span className="material-symbols-outlined text-5xl" style={{ 'fontVariationSettings': '"FILL" 1' }}>play_arrow</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* FAQ */}
                <section className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 px-margin-desktop max-w-3xl mx-auto">
                    <h2 className="font-headline-lg text-headline-lg text-center mb-16">Pertanyaan Sering Diajukan</h2>
                    <div className="space-y-4">
                        <details className="group bg-white rounded-2xl p-6 soft-shadow cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-lg list-none">
                                Berapa lama proses pengerjaan produk custom?
                                <span className="material-symbols-outlined group-open:rotate-180 transition-transform" data-icon="expand_more">expand_more</span>
                            </summary>
                            <p className="mt-4 text-on-surface-variant">Proses pengerjaan custom bervariasi antara 3-10 hari kerja tergantung tingkat kerumitan desain dan antrian pesanan.</p>
                        </details>
                        <details className="group bg-white rounded-2xl p-6 soft-shadow cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-lg list-none">
                                Apakah benang yang digunakan aman untuk kulit sensitif?
                                <span className="material-symbols-outlined group-open:rotate-180 transition-transform" data-icon="expand_more">expand_more</span>
                            </summary>
                            <p className="mt-4 text-on-surface-variant">Ya, kami menggunakan benang organic cotton premium yang sangat lembut dan hipoalergenik, aman bahkan untuk bayi.</p>
                        </details>
                        <details className="group bg-white rounded-2xl p-6 soft-shadow cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-lg list-none">
                                Bagaimana cara merawat produk rajut?
                                <span className="material-symbols-outlined group-open:rotate-180 transition-transform" data-icon="expand_more">expand_more</span>
                            </summary>
                            <p className="mt-4 text-on-surface-variant">Kami menyarankan pencucian tangan dengan sabun lembut dan dikeringkan dengan cara diangin-anginkan secara mendatar (tidak digantung).</p>
                        </details>
                    </div>
                </section>
                {/* Final CTA */}
                <section className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 px-margin-desktop bg-surface-container-low text-center">
                    <div className="max-w-4xl mx-auto space-y-10">
                        <h2 className="font-headline-xl text-4xl md:text-5xl lg:text-6xl">Temukan Produk Rajut Handmade Favorit Anda Hari Ini</h2>
                        <p className="font-body-lg text-on-surface-variant">Miliki koleksi eksklusif kami dan rasakan sentuhan kehangatan karya Nusantara di setiap produknya.</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="bg-primary text-on-primary px-12 py-5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">Belanja Sekarang</button>
                            <button className="bg-white border-2 border-primary text-primary px-12 py-5 rounded-full font-bold hover:bg-primary/5 transition-colors">Lihat Koleksi Terbaru</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
