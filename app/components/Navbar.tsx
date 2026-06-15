import Link from "next/link";

export default function Navbar() {
    return (
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
    );
}
