import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>

            {/* TopNavBar - Floating Capsule */}
            <div className="fixed top-0 w-full z-50 px-4 sm:px-8 pt-4 sm:pt-6 pointer-events-none">
                <nav className="pointer-events-auto mx-auto max-w-6xl rounded-full bg-surface/80 backdrop-blur-xl border border-outline-variant/40 shadow-xl shadow-primary/5 px-4 sm:px-6 py-3 sm:py-3.5 flex justify-between items-center transition-all duration-300">
                    <Link className="font-headline-md text-[20px] sm:text-[24px] font-bold text-primary tracking-tight pl-2" href="/">
                        Handmade<span className="text-primary/70 font-medium">BySarah</span>
                    </Link>
                    
                    <div className="hidden md:flex items-center p-1.5 rounded-full bg-surface-container-highest/40 border border-outline-variant/20">
                        <Link className="px-5 py-2 rounded-full bg-primary text-on-primary font-body-md font-medium shadow-md shadow-primary/20 transition-all hover:scale-105 active:scale-95" href="#">Katalog</Link>
                        <Link className="px-5 py-2 rounded-full text-on-surface hover:text-primary hover:bg-surface-container/80 font-body-md transition-all active:scale-95" href="#">Kategori</Link>
                        <Link className="px-5 py-2 rounded-full text-on-surface hover:text-primary hover:bg-surface-container/80 font-body-md transition-all active:scale-95" href="#">Custom</Link>
                        <Link className="px-5 py-2 rounded-full text-on-surface hover:text-primary hover:bg-surface-container/80 font-body-md transition-all active:scale-95" href="#">Tentang Kami</Link>
                        <Link className="px-5 py-2 rounded-full text-on-surface hover:text-primary hover:bg-surface-container/80 font-body-md transition-all active:scale-95" href="#">Blog</Link>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-2 pr-1">
                        <div className="hidden sm:flex items-center gap-1 border-r border-outline-variant/30 pr-3 mr-1">
                            <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 group">
                                <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform" data-icon="search">search</span>
                            </button>
                            <a href="https://s.shopee.co.id/AACyR1wgu6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 group relative">
                                <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform" data-icon="shopping_cart">shopping_cart</span>
                                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-surface"></span>
                            </a>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 group">
                                <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform" data-icon="person">person</span>
                            </button>
                        </div>
                        <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-all duration-300 active:scale-95 shadow-sm">
                            <span className="material-symbols-outlined text-[20px]" data-icon="menu">menu</span>
                        </button>
                        {/* Mobile specific icons - shown when sm is hidden */}
                        <a href="https://s.shopee.co.id/AACyR1wgu6" target="_blank" rel="noopener noreferrer" className="sm:hidden w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 group relative">
                            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform" data-icon="shopping_cart">shopping_cart</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-surface"></span>
                        </a>
                    </div>
                </nav>
            </div>
            <main className="pt-24 overflow-x-hidden">
                {/* Hero Section */}
                <section className="px-margin-desktop py-20 max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <span className="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-2 rounded-full font-label-md text-label-md uppercase tracking-wider">Premium Artisanal Craft</span>
                        <h1 className="font-headline-xl text-headline-xl text-on-background leading-tight">
                            Produk Rajut Handmade Berkualitas dengan Sentuhan Kreativitas Nusantara
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                            Setiap simpul benang adalah dedikasi. Kami menghadirkan karya rajut premium yang menggabungkan tradisi lokal dengan desain kontemporer untuk gaya hidup modern Anda.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://s.shopee.co.id/AACyR1wgu6" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-4 rounded-full font-body-md font-bold hover:scale-105 transition-transform inline-block text-center">Belanja Sekarang</a>
                            <button className="border-1.5 border-primary text-primary px-8 py-4 rounded-full font-body-md font-bold hover:bg-primary/5 transition-colors border-2">Lihat Katalog</button>
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
                <section className="bg-surface-container-low py-24 px-margin-desktop">
                    <div className="max-w-container-max mx-auto">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="font-headline-lg text-headline-lg text-on-background">Kategori Pilihan</h2>
                            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Temukan koleksi rajut terbaik kami yang dikelompokkan khusus untuk melengkapi gaya dan kenyamanan Anda.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
                            {/* Category Card Template */}
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Totebag" className="w-full h-full object-cover rounded-xl" data-alt="A boutique-style crochet tote bag with a minimalist design, displayed on a clean white pedestal. The lighting is high-key and soft, emphasizing the natural fibers of the yarn and the sophisticated craft." src="/assets/produk/produk5.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Totebag</h3>
                            </Link>
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Topi" className="w-full h-full object-cover rounded-xl" data-alt="A stylish, hand-knit summer hat in light sand color, resting on a white wooden table next to a sprig of dried lavender. The aesthetic is modern artisanal and serene." src="/assets/produk/produk1.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Topi</h3>
                            </Link>
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Amigurumi" className="w-full h-full object-cover rounded-xl" data-alt="A charming set of miniature crochet amigurumi animals in soft pastel colors, perfectly arranged against a minimalist cream background." src="/assets/produk/produk2.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Amigurumi</h3>
                            </Link>
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Dompet" className="w-full h-full object-cover rounded-xl" data-alt="A small, elegant crochet coin purse with a vintage metal clasp, handmade with precision. The color is a soft caramel brown." src="/assets/produk/produk3.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Dompet</h3>
                            </Link>
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Tas" className="w-full h-full object-cover rounded-xl" data-alt="A premium crochet handbag with a sophisticated wooden handle, showcasing exquisite Indonesian craftsmanship in a luxury retail setting." src="/assets/produk/produk4.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Tas</h3>
                            </Link>
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Aksesoris" className="w-full h-full object-cover rounded-xl" data-alt="Detailed close-up of crochet hair accessories and earrings, featuring delicate floral patterns and soft-toned threads." src="/assets/produk/produk5.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Aksesoris</h3>
                            </Link>
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Dekorasi" className="w-full h-full object-cover rounded-xl" data-alt="A minimalist living room with a beautiful handmade crochet wall hanging and coasters, creating a cozy and organic home atmosphere." src="/assets/produk/produk1.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Dekorasi Rumah</h3>
                            </Link>
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Custom" className="w-full h-full object-cover rounded-xl" data-alt="A flat lay of colorful yarn skeins, crochet hooks, and a sketchpad, representing the endless possibilities of custom orders at Handmade By Sarah." src="/assets/produk/produk2.jpg" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Custom</h3>
                            </Link>
                        </div>
                    </div>
                </section>
                {/* Produk Terlaris */}
                <section className="py-32 px-margin-desktop max-w-container-max mx-auto">
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
                <section className="bg-surface py-32 px-margin-desktop overflow-hidden">
                    <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-fixed rounded-full opacity-30 blur-3xl"></div>
                            <Image width={800} height={800} alt="Craft Process" className="rounded-3xl soft-shadow relative z-10 w-full object-cover" data-alt="A detailed, warm-toned photograph of Indonesian artisans working together in a well-lit, minimalist studio. They are focused on creating intricate crochet patterns using sustainable materials. The setting is modern and artisanal, reflecting the brand's commitment to quality and tradition." src="/assets/produk/produk3.jpg" />
                            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl soft-shadow z-20 max-w-[240px]">
                                <p className="font-body-md italic text-primary">&quot;Kami percaya bahwa keindahan sejati lahir dari kesabaran dan keahlian tangan manusia.&quot;</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h2 className="font-headline-lg text-headline-lg">Lokal Craftmanship, Standar Global</h2>
                            <p className="font-body-lg text-on-surface-variant leading-relaxed">
                                Handmade By Sarah berawal dari kecintaan terhadap seni rajut tradisional Nusantara. Kami memberdayakan perajin lokal untuk menciptakan produk modern yang tidak hanya estetik, tetapi juga memiliki ketahanan dan nilai seni tinggi.
                            </p>
                            <p className="font-body-md text-on-surface-variant leading-relaxed">
                                Setiap produk kami melalui proses kurasi material yang ketat, menggunakan benang premium yang ramah lingkungan untuk memastikan kenyamanan dan kualitas terbaik di setiap simpulnya.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary bg-primary-container/20 p-3 rounded-xl" data-icon="eco">eco</span>
                                    <div><h4 className="font-bold text-primary">Sustainable</h4><p className="text-sm">Bahan ramah lingkungan</p></div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary bg-primary-container/20 p-3 rounded-xl" data-icon="brush">brush</span>
                                    <div><h4 className="font-bold text-primary">Unique Design</h4><p className="text-sm">Eksklusif &amp; Kreatif</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Keunggulan */}
                <section className="py-24 px-margin-desktop bg-surface-container-low">
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
                <section className="py-32 px-margin-desktop">
                    <div className="max-w-container-max mx-auto bg-secondary-container rounded-3xl p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-8">
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
                <section className="py-32 px-margin-desktop bg-surface">
                    <div className="max-w-container-max mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-headline-lg text-headline-lg">Inspirasi Galeri</h2>
                            <p className="text-on-surface-variant">Melihat lebih dekat setiap detail karya kami.</p>
                        </div>
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-gutter space-y-gutter">
                            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                                <Image width={800} height={800} alt="Gallery 1" className="w-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A high-detail close-up of an intricate crochet pattern on a luxury bag. The lighting is soft, highlighting the physical texture of the yarn." src="/assets/produk/produk5.jpg" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <span className="text-white font-bold">Detail Texture</span>
                                </div>
                            </div>
                            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                                <Image width={800} height={800} alt="Gallery 2" className="w-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A beautiful handmade crochet bag displayed in a sunlit room, with long shadows creating a modern and calm aesthetic." src="/assets/produk/produk1.jpg" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <span className="text-white font-bold">Modern Style</span>
                                </div>
                            </div>
                            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                                <Image width={800} height={800} alt="Gallery 3" className="w-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Close-up of a charming crochet amigurumi character, emphasizing the fine stitch work and soft pastel colors." src="/assets/produk/produk2.jpg" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <span className="text-white font-bold">Amigurumi Love</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Video Showcase */}
                <section className="py-32 bg-primary">
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
                <section className="py-32 px-margin-desktop max-w-3xl mx-auto">
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
                <section className="py-32 px-margin-desktop bg-surface-container-low text-center">
                    <div className="max-w-4xl mx-auto space-y-10">
                        <h2 className="font-headline-xl text-headline-xl">Temukan Produk Rajut Handmade Favorit Anda Hari Ini</h2>
                        <p className="font-body-lg text-on-surface-variant">Miliki koleksi eksklusif kami dan rasakan sentuhan kehangatan karya Nusantara di setiap produknya.</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="bg-primary text-on-primary px-12 py-5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">Belanja Sekarang</button>
                            <button className="bg-white border-2 border-primary text-primary px-12 py-5 rounded-full font-bold hover:bg-primary/5 transition-colors">Lihat Koleksi Terbaru</button>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
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
                            <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary-container underline-offset-4" href="#">Kebijakan Privasi</Link>
                            <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary-container underline-offset-4" href="#">Syarat &amp; Ketentuan</Link>
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

        </>
    );
}
