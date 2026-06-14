import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>

            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md">
                <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
                    <Link className="font-headline-md text-headline-md font-bold text-primary" href="/">Handmade By Sarah</Link>
                    <div className="hidden md:flex gap-8 items-center">
                        <Link className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md" href="#">Katalog</Link>
                        <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" href="#">Kategori</Link>
                        <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" href="#">Custom</Link>
                        <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" href="#">Tentang Kami</Link>
                        <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md" href="#">Blog</Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="text-on-surface-variant hover:text-primary transition-all scale-95 active:scale-90">
                            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                        </button>
                        <button className="text-on-surface-variant hover:text-primary transition-all scale-95 active:scale-90">
                            <span className="material-symbols-outlined" data-icon="person">person</span>
                        </button>
                        <button className="md:hidden text-on-surface-variant">
                            <span className="material-symbols-outlined" data-icon="menu">menu</span>
                        </button>
                    </div>
                </div>
            </nav>
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
                            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-body-md font-bold hover:scale-105 transition-transform">Belanja Sekarang</button>
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
                            <Image width={800} height={800} alt="Tote Bag" className="rounded-xl w-full h-64 object-cover soft-shadow" data-alt="A premium handmade crochet tote bag featuring a complex geometric weave pattern in earthy tones like beige and soft brown. The bag is placed in a bright, minimalist studio setting with soft morning light filtering through a linen curtain, emphasizing the tactile texture of the high-quality organic cotton yarn." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR3A18emlLcmVchTASLEzFoyil1B-5PvKGPNbsjwDdtyq--WcoNOlkZWxUytDUEWirS11fnAnVz5VC9CNgBuZpncn43TwjlKt_vAVat8HPhD0HGkLEdIMqjRFJpi030qnZDJiMt23IO98dKM6aNmouAmvlcLha_hbMZrka4J5VoaWOGuOJkPEnL510DOQPRsnJSw0HLWRJdLN27qOkDcGd0y8tZ2y8GcxezIeMmPPHNziAcDUsQbZrATZi70j3MMJiELsZbmLXFww" />
                            <Image width={800} height={800} alt="Amigurumi" className="rounded-xl w-full h-80 object-cover soft-shadow" data-alt="A collection of adorable amigurumi toys including a small brown bear and a white rabbit, meticulously handcrafted with soft yarn. They are arranged on a light cream surface with a few wooden blocks in the background, creating a warm, artisanal, and cozy aesthetic. The lighting is soft and ambient, highlighting the delicate stitch work." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr5oLd8KCk9ZrdKmcmrIGWuYLaitU3jYzfuqMDnEYKBN5cUG_T7FvKrSKWx6qpkNDm-TubFyjH1SCG2yR5hKiZq3uJjFZns380RP00ldoNWZsApt8kkV5iA1WQOU_T_1MQnoucC2z6gBY7mqNHi7lXT2G70br8oNQx5fzUXCCXOYSV8e7mS41MuT28UvEU-QPEAUxWQ40uMpN8HjeuVPK8261Rgvg6SeHV7oUt4aokdLZv_JAx3YO33FW9O6yM6woFdfxki08ero0" />
                        </div>
                        <div className="space-y-4">
                            <Image width={800} height={800} alt="Crochet Hat" className="rounded-xl w-full h-96 object-cover soft-shadow" data-alt="A stylish, minimalist crochet bucket hat in a soft cream color, styled on a wooden mannequin head. The background is a clean, neutral wall with a subtle linen texture. The focus is on the intricate detail of the stitch patterns, showcasing the premium handmade quality and modern fashion appeal of the brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA10ojCojlWOd8a18GLkgnZbOca0aNF43yDeZh5cRnkHNirlt2-dkJRr70f6V19IsAwtjG5F89Hfka1bfY73NsAdBtuG9QzlQ0PHz5I1krOHfxqUtIBsUzUiKQx-JnFkv962_LIbLu7afJe3W47mOhyo7tP18-7PtyY4Rql7rN-BDYm5c-XHbwhG-p5fjW5u-Kmc7wShPXk86c0YlLLN1lnEbZuryf2dJkN6xPl-icmwmmqZlGbRL46wtqxBSktFG2JDknvpfU6Ww8" />
                            <Image width={800} height={800} alt="Process" className="rounded-xl w-full h-48 object-cover soft-shadow" data-alt="A close-up shot of an artisan's hands working with a crochet hook and high-quality beige yarn. The setting is warm and domestic, with soft golden light illuminating the fine details of the craft. The scene exudes a sense of calm, focus, and traditional Indonesian craftsmanship in a contemporary light-mode style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfXXaO2EsJSs6wVzObrUyRGs2ctGBWa3iGRilalkOlC7Y10rFO2ooXNcloUqAprlCju7JUsjpUU6O80OyRNqLbOOb-BQEPGtAt8SIYCmeTWCHp3rh_HAzWt2_bXc7id8_pWfob9nSKyzCuugPDvz08PXJWy-BrKoQiVyp0SoMcUM3MBRsrJVXZ8MGN4OUJdIBgC_X5AgEQsrf3JywCSkNt2TeRCo3-Fy5m2Rgdwk_RID045e14oVxNRJJNquugYS7FMJROKWTE_0c" />
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
                                    <Image width={800} height={800} alt="Totebag" className="w-full h-full object-cover rounded-xl" data-alt="A boutique-style crochet tote bag with a minimalist design, displayed on a clean white pedestal. The lighting is high-key and soft, emphasizing the natural fibers of the yarn and the sophisticated craft." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADrpM3wwgRKPwmp074S5eYceOAOnfh6dJHqv1sRfEEE52tSAEX_tqZJYfj74CKlVlFmy0HAelT0mSU8OOqN5id3yvjnmORM1Zyh-hCYupFYte2ONaQmCdop5IUxxFfkeRz_VL9rJrSMB_OHEypz7-zlMk5TujCnNdzwvTdWrSFpO7G1HeaZPO_ey4EVOVpHLaoQuUXLhdP0N1qLST98WqSsNChjgwtQagJQXPdZVCv3U1wU0IfXMojRfkNR6DvRgDbGNPHwq-koGA" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Totebag</h3>
                            </Link>
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Topi" className="w-full h-full object-cover rounded-xl" data-alt="A stylish, hand-knit summer hat in light sand color, resting on a white wooden table next to a sprig of dried lavender. The aesthetic is modern artisanal and serene." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfiF2otq2NjxuMtXlY4ptsUv71JmDBfiC40pBTBA0rhOK77xLqg7q4ugY0H8sUq9MwKYA0ktCFKiuov8XqF_4x8c8xJL_xeBX4LhiHHwku67thNrofINtGYeKBViCVk9QcFEMm9dlyxsDqLPdJtmNq96ktp3ksUUmj9h0TZ5Ko5o8PPkemDU_19Q_sTUTRP8Q5oj3IogeVpzwkD3FrLNB-xviJMffnaE4JolJrq2S_cpZCKlDCQPXHca5JCTYkcdEuMG4NCG2NTTA" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Topi</h3>
                            </Link>
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Amigurumi" className="w-full h-full object-cover rounded-xl" data-alt="A charming set of miniature crochet amigurumi animals in soft pastel colors, perfectly arranged against a minimalist cream background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqfeppSC53dQ8a9-2YRF6dJdjhVXNO87IzQU71aLqYqid-3h18aJl7O18qDmwJn6VY6gMmAapVtADuqIkudiOGzyAn0DSpkAmODIyZ8o4eR4ytnv8HE8a2GfxBYdvrSUcsHZhcMgd2b0slT7abUII-JB2vszfqCVYIwXCMLaupk0xAvQxZkb-MTKxKrd6rcnJ8-cA_RCmp0847Qy7z_5uhef9UU_-_7UVsw-neEkzqwlYYRFnskGxY_ZWsq04kzjVwbPfSYJE8Vxs" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Amigurumi</h3>
                            </Link>
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Dompet" className="w-full h-full object-cover rounded-xl" data-alt="A small, elegant crochet coin purse with a vintage metal clasp, handmade with precision. The color is a soft caramel brown." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6p_hjwNlBwqJLr6V62Ae01GDllfLHBVzjdu6jGFteuu9O711YH7bQ0jOIUx5jdD3Jc7RVetodGBXY5JQQcbCEpil6buOQB2qSMKLN9L00ckpe1ssPP-lGcqq9iSjSGW2Po5smT7Z8tC2dfZYEsq0SxBorMP4M6U9PX9qUKeai4wUdPA6wO6OoZw_hw0TwTIg9KzDWddgdNyMJ3XDklseqVknMqT-RRq6X9pKSR73K11wOVtpN7_EPXpYJMZoP-DWOfGynQLALJ3E" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Dompet</h3>
                            </Link>
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Tas" className="w-full h-full object-cover rounded-xl" data-alt="A premium crochet handbag with a sophisticated wooden handle, showcasing exquisite Indonesian craftsmanship in a luxury retail setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuLId1uyHv-Hvry7PZ1fNxqkeT3FwAUlzAgXfEmv4dzE0gxK_Rwa1U-9sVc8mtzixwf5P5DFcCSYvEZTy2oX6DtxMzV4ShTdofjMj69MRxyymoTXQ3FWfeLeZ4MSZBum1KUAoLgUZJOs2l85d7brXO9PEORMRrvxWXbyYMvN0syPnl3gx8UtrSKUxTQseIGxczFiFWYGEDxW6XNROy1O2xeGHHOcP6wEfep_COk6TOiLOPEF0TToMZXQCBqY0G8fhHxAGX6f9zI3w" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Tas</h3>
                            </Link>
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Aksesoris" className="w-full h-full object-cover rounded-xl" data-alt="Detailed close-up of crochet hair accessories and earrings, featuring delicate floral patterns and soft-toned threads." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYiOCSSz3XVjXPc8DqmFX2NChVP9eV8esMSjKJ8ljIJGqO2Cv8u2_8JV7SWPfD-tsbdjbSL3I_aKFfMoH9p3vkZYTnflsmz4pzVpqsT3oSzSAv3uOJVgscU7YFa1GZtcU2OiUcsniYCPwaM6sas2KiBDvD_j2Ha1wLGzyGZ3C6lm2s3jybXJH1MKSLUYykc8kp72mnjCWk-Zt_eTRc8iIeW3WaZXc5ioYTM0WuG_RrtYrIlTx1jJOAHSfy7in7sl3Lra72gZVtaVs" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Aksesoris</h3>
                            </Link>
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Dekorasi" className="w-full h-full object-cover rounded-xl" data-alt="A minimalist living room with a beautiful handmade crochet wall hanging and coasters, creating a cozy and organic home atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsBRrP0D779qAUIfdlT9aI1aFuHoYciIjd22uIRfPTt_OtVRcWW5tK2KOw307rXWGjPhuEKtUpONQIKO73rcZZWyYAbUlww-s5v97zCeD-ba0QZWuU_IkKhEnH5nyUXbaKxRgduKez6aW4aKzbXC06Pjo83TNwZgYUQyFq5ilpkKym1OJ4nj4wXmoKgDOzcdUorY4OVEGMVousfOcVtkIw-dZbvQvTy1OW4fd_-HdelnSXmrCPvnqwLlYLp20dJ5PXFycq794DGo8" />
                                </div>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary">Dekorasi Rumah</h3>
                            </Link>
                            <Link className="group block text-center space-y-4 transition-transform hover:-translate-y-2" href="#">
                                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center soft-shadow p-6 group-hover:bg-primary-container transition-colors">
                                    <Image width={800} height={800} alt="Custom" className="w-full h-full object-cover rounded-xl" data-alt="A flat lay of colorful yarn skeins, crochet hooks, and a sketchpad, representing the endless possibilities of custom orders at Handmade By Sarah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNHvniu-QHmyqMxufxZ95ojZaAQjBdtaYaViDBiP8fpW-tZZXERIbNZgOV3gUUFVlVIfKz-BoikDs3rTnJnj2x1lYZv2SBhYuArtXa9IVQfD4nwKeolsv2n4fA30mNBLyqg7RjZpI0AKkH_yFXPuCSFuD1thrmLL2iCf5o6nVs5HLrqdM50W8nZ_iWivjDWQmdKesWPENMS6UWJA4rgbV7btG4GhlzwJbKRSekflY_4cpV_sLijES1VRw3bcBfjtuGHDcwroiOAKw" />
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
                            <h2 className="font-headline-lg text-headline-lg text-on-background">Koleksi Terlaris</h2>
                            <p className="text-on-surface-variant mt-2">Favorit pelanggan kami sepanjang masa.</p>
                        </div>
                        <Link className="text-primary font-bold hover:underline" href="#">Lihat Semua Produk →</Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                        {/* Product Card */}
                        <div className="group bg-white rounded-2xl p-4 soft-shadow hover:shadow-lg transition-all">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-surface-container-low">
                                <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full z-10">BEST SELLER</span>
                                <Image width={800} height={800} alt="Product 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A premium handmade crochet handbag in deep navy blue, with a soft ambient shadow on a light wooden background. The bag features a high-quality finish and elegant stitch patterns." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj1EZNU_-njSjpNulLJVoFQ0r3mNDuJg8ro5nX87bawraJwwEBH5zuJ33I3Um_VVhvIK5bppQgBgzoab2gQBKcjqAXCIhZ3XSMhsIuH2bzHl_SDZP27Z11lYKIENaWSXRLCWVm7kcSTIWvud8yQXvI38NZ0wEyl1cYsmsxiLMW9f_1hTtzvwZJphrtTAgJdni1qyqsV9DKOoRZuc3-Ibmu02J53ksjpmlC8U0wBPMx-jHR-St03EbGGi84TUt4BwBFHnu6HGGvqZo" />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                                    </button>
                                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 text-center space-y-2">
                                <div className="flex justify-center text-yellow-500">
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                </div>
                                <h3 className="font-headline-md text-headline-md">Sling Bag Artisan</h3>
                                <p className="text-on-surface-variant font-label-md">Rp 185.000 <span className="line-through text-outline ml-2">Rp 210.000</span></p>
                            </div>
                        </div>
                        {/* Repeat Product Card (x3) */}
                        <div className="group bg-white rounded-2xl p-4 soft-shadow hover:shadow-lg transition-all">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-surface-container-low">
                                <Image width={800} height={800} alt="Product 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A beautiful handmade crochet amigurumi bear in a soft cream and light brown color. The bear is presented on a minimalist neutral-toned surface with professional soft lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX5_oIY3_qSbvm44k1DmnN3TlRFv-OgAZ3Xr9ztGdYowxYNfE6EftHHkiBRyUcBlaqAQZLnBfGGwd6eRZv-72MbHEoBflM6iP4snESEuX3jCy7EBzj6DGdvXvSpIt3zKlMRL0E6TsGeladrNmMj2jp906hZq7lPNuEQkV7mYv0ALmlLXB9d1P5T5yNDes8i3qnmcUwnYN55TlCXH2jjHzSLVlVA9NLH32knaEsR-Bvar1hsIpiSmgFHKyYIDywUclmVIXTCNxHonE" />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 text-center space-y-2">
                                <div className="flex justify-center text-yellow-500">
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                </div>
                                <h3 className="font-headline-md text-headline-md">Amigurumi Bear</h3>
                                <p className="text-on-surface-variant font-label-md">Rp 120.000</p>
                            </div>
                        </div>
                        <div className="group bg-white rounded-2xl p-4 soft-shadow hover:shadow-lg transition-all">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-surface-container-low">
                                <Image width={800} height={800} alt="Product 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A minimalist and sustainable crochet bucket hat in earth tones, displayed in a high-end boutique setting. The craftmanship is detailed and precise." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-BAT5ysfbacWmj4SbD_N4crsMDtgiPfUOk3w5mNTQOiUHQru38tzbhiFSK2ooRJ6i6lZ9E-rmXlp7MUEfY3PqAEM-5YF9vDrOdSXknOFutcExNAIMZKoDW9szORUxwEIKBhD5nIIEMaaE0xCf4rMn5e74IyCcB15qqJCBZoAnN-9kJLt1qpOxL7qduYAjphxz9JF_meH_n1QQg9tFrdCYLh2Zbs7HiQCok2SfA3Rd5Tdt_RVH4InSyeL5rakT7PgKhYe-8QBEWVg" />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 text-center space-y-2">
                                <div className="flex justify-center text-yellow-500">
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                </div>
                                <h3 className="font-headline-md text-headline-md">Bucket Hat Terra</h3>
                                <p className="text-on-surface-variant font-label-md">Rp 95.000</p>
                            </div>
                        </div>
                        <div className="group bg-white rounded-2xl p-4 soft-shadow hover:shadow-lg transition-all">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-surface-container-low">
                                <Image width={800} height={800} alt="Product 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A sophisticated crochet clutch bag with a textured pattern and a minimalist aesthetic. The bag is held by a hand to show scale, emphasizing its luxury and handmade quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSINRA8qKHNGFpWporSe-5rrnzmuR6WsSj7cmD_n5KpEA2Z1ID164ReRYnTxwD0gR60PnI9iJanFWo81yzq_PINdxERy9Kudpzq2caC8yUwmi7uBWKS5xJxjWV4ytQhBLuuEkEYjjimx9WRSNNdhckK3nGYnItqWdOVJKtStZysg9L56yYyuAZP3fCevkXsFlHyPqxVvL_1OZlRvmzXG3BlhCtWWdrmxJgbgkFw2xXDi0n3fbWfWihf9xokPegAANcrKhNani9lqg" />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 text-center space-y-2">
                                <div className="flex justify-center text-yellow-500">
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined text-[16px] fill" style={{ 'fontVariationSettings': '"FILL" 1' }}>star</span>
                                </div>
                                <h3 className="font-headline-md text-headline-md">Elegant Clutch</h3>
                                <p className="text-on-surface-variant font-label-md">Rp 145.000</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Tentang Brand */}
                <section className="bg-surface py-32 px-margin-desktop overflow-hidden">
                    <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-fixed rounded-full opacity-30 blur-3xl"></div>
                            <Image width={800} height={800} alt="Craft Process" className="rounded-3xl soft-shadow relative z-10 w-full object-cover" data-alt="A detailed, warm-toned photograph of Indonesian artisans working together in a well-lit, minimalist studio. They are focused on creating intricate crochet patterns using sustainable materials. The setting is modern and artisanal, reflecting the brand's commitment to quality and tradition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABfUjeSoPTVcirUoJ9jpJZunJ4RBxK0T60jas0DaV1x9xLM_30LeRm3lKdJCif5ZtEWQeesqTTrpO2YeACL6D7FAYTuPbuXDvsd4KvP86WX21lxiw8qFUUXw9iNJwQlAWAA4wPmcyfo6AzVHDLPnrnGAmKPO6RpC8CKbhskgwtubGVy_TN2SrmNW5pdAnMRSvHjJtV5jo2e6WyrdeGIHxPLI6r0GQcMfIIrk3LtXP18P-xRQ9kKrwEZKF--bn0mjZdIgn2chvGutM" />
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
                            <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                                <span className="material-symbols-outlined" data-icon="chat">chat</span>
                                Hubungi WhatsApp Kami
                            </button>
                        </div>
                        <div className="lg:w-1/2">
                            <Image width={800} height={800} alt="Custom Order" className="rounded-2xl soft-shadow w-full h-[400px] object-cover" data-alt="A beautiful flat lay of various high-quality yarn skeins in a gradient of earthy and warm tones, with a crochet hook and a personalized order note. The image represents the creative process of custom orders in a modern, artisanal style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFG3FeaBp3TEmwej-glxC_lAhHh2dNJZOSxU1ms1x4cPFpGqLYnw3Cbw38j4PLDv1_Sif9RPDRgYuhqkxO30EHeOzXto4j2BrLUR7uU_AtbXy3xEUv2YcIIY0SCY6oNxQzH7NIexHd8-XNowDb6lQsJUwPfV7Oa5EQSPCZYqnUevZ1uZDrM0fGN9i0G1vM4NQNylKnFt06_nBOhC5qeQz46_q9D0JaDfdRly5UxRD2aPFzdsibCCcfP8jreeDIhhr_dVDievUIgCM" />
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
                                <Image width={800} height={800} alt="Gallery 1" className="w-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A high-detail close-up of an intricate crochet pattern on a luxury bag. The lighting is soft, highlighting the physical texture of the yarn." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXcTk1uahUmKjQU-HFuA22RFVDuS4RE8VCrrdLjgSWT7Ps0aXkdry_S8ppRzCdWCEIUwqNK6n3TGxawtciH-y2Vl_6fIxGChqIdLwXr36rynwoOSg_wfgINTPDpxf5H5H3p8_wDW9G0IdLE8wsm3XfCrYF6XA7a0_fO4BDVdefsMKjl6xhhT9X_3d4kzYecd3QH58mNv_BUm68ZGQ6_mJ7rxlqP1xwUlPJMyqop-IJxH3CIwRgBL3pkjfwHjkJ8I6u7QamExFnba0" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <span className="text-white font-bold">Detail Texture</span>
                                </div>
                            </div>
                            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                                <Image width={800} height={800} alt="Gallery 2" className="w-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A beautiful handmade crochet bag displayed in a sunlit room, with long shadows creating a modern and calm aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVSFA55EO59i92_46W7ATHAPKH8mCQBOVYjrCO9buNfRUcaLvZ1NH3mKnqZAz5FmsoByPoL1H2l1buMkRuQFTWYk8nYRZ-xuaGFdHYcOMGZqDI8VGq_2F3NMGWxUH4jEk02EraGKtMdxYB1RHtqzshcAp9I7vqA8mnuoSv7qe7kcgYb7AY3zNn1_cHxuIYofmwQC8Q2R9NBscWNNXnAQbXHLU1FYbAstghlMZuW36nkwhwN4OglymgYwLe4iTVwn16JT5suy1c2qI" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <span className="text-white font-bold">Modern Style</span>
                                </div>
                            </div>
                            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                                <Image width={800} height={800} alt="Gallery 3" className="w-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Close-up of a charming crochet amigurumi character, emphasizing the fine stitch work and soft pastel colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1ptprgiJFuIAlL5jX6Z_B-l9KJZEnKFiwqIr38XMKsptyNmOu69FUrK5KYEgKuZoGQc0cvBDrx43JDC9aJo1yhDyjS7mfEGFjbHGixA7guBuZPYXyXq5BdqZHiw9xvFqrTnB5vcfEL8SJo4pit7WzJ_P3evyyyDaUNbao3xF3zsPVf1IbsuZ_TXrd-frFy6RlqgYCjMD9d8e2b_bNT4DTZui6IzmiMGaJtYHD53LXrUzgos1ilCuMdwflwRWGWV7NXPGGOCWcsbs" />
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
                            <Image width={800} height={800} alt="Video Showcase" className="w-full h-full object-cover opacity-80" data-alt="Cinematic wide shot of a peaceful studio where an artisan is working on a large crochet project. Warm light fills the room, creating an atmosphere of focus and tradition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQUBxTSywEHRSvfa06MrGqfiNXjeBYTjk_HcgvZeV2WIA12PtJ5QSeACE3OEwtNRGfgij1VODhEMWU1gPTKtat-KTktYtX5S8pVRs-1I0v57Bc3DEkNrF60dzNWhha4HlP8nOfDriE62ajIotq06RT_Lhr2q_IhDgbrHQkdIs-12ednP8rskM4ULE8ZJqpULQjOxtMMmH_afreII17527D7FGZnVRzRexFIMPe4tZ0EETNksqsePHoE1rL3MhR9aePVNulw-quebU" />
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
                        <Link className="font-headline-md text-headline-md text-primary block" href="#">Handmade By Sarah</Link>
                        <p className="text-body-sm text-on-surface-variant">Menghadirkan keindahan rajut tradisional dalam gaya hidup modern. Dibuat dengan cinta, simpul demi simpul.</p>
                        <div className="flex gap-4">
                            <Link className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                                <span className="material-symbols-outlined text-sm" data-icon="facebook">face_nod</span>
                            </Link>
                            <Link className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                                <span className="material-symbols-outlined text-sm" data-icon="camera">camera</span>
                            </Link>
                            <Link className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                                <span className="material-symbols-outlined text-sm" data-icon="alternate_email">alternate_email</span>
                            </Link>
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
