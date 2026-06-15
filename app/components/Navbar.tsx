'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("beranda");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { name: "Beranda", href: "/#beranda", id: "beranda" },
        { name: "Kategori", href: "/#kategori", id: "kategori" },
        { name: "Katalog", href: "/#katalog", id: "katalog" },
        { name: "Tentang Kami", href: "/#tentang-kami", id: "tentang-kami" },
        { name: "Custom", href: "/#custom", id: "custom" },
        { name: "Galeri", href: "/#galeri", id: "galeri" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
        setIsMobileMenuOpen(false); // Close menu when a link is clicked
        if (pathname === "/") {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div className="fixed top-0 w-full z-50 pointer-events-none">
            {/* Announcement Bar */}
            <div className="pointer-events-auto bg-primary text-on-primary text-[13px] font-medium py-2 overflow-hidden whitespace-nowrap block">
                <div className="animate-marquee inline-flex shrink-0 min-w-max">
                    <div className="flex gap-12 items-center pr-12">
                        <span>✨ Dibuat dengan cinta, simpul demi simpul</span>
                        <span>🧵 100% Rajutan Tangan Asli Nusantara</span>
                        <span>💖 Kualitas Premium & Bahan Ramah Lingkungan</span>
                    </div>
                    <div className="flex gap-12 items-center pr-12">
                        <span>✨ Dibuat dengan cinta, simpul demi simpul</span>
                        <span>🧵 100% Rajutan Tangan Asli Nusantara</span>
                        <span>💖 Kualitas Premium & Bahan Ramah Lingkungan</span>
                    </div>
                    <div className="flex gap-12 items-center pr-12">
                        <span>✨ Dibuat dengan cinta, simpul demi simpul</span>
                        <span>🧵 100% Rajutan Tangan Asli Nusantara</span>
                        <span>💖 Kualitas Premium & Bahan Ramah Lingkungan</span>
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-8 pt-3 sm:pt-4">
                <nav className="pointer-events-auto mx-auto max-w-7xl rounded-full bg-surface/80 backdrop-blur-xl border border-outline-variant/40 shadow-xl shadow-primary/5 px-4 sm:px-6 py-3 flex justify-between items-center transition-all duration-300">
                    <Link className="font-headline-md text-[20px] sm:text-[24px] font-bold text-primary tracking-tight pl-2 shrink-0" href="/">
                    Handmade<span className="text-primary/70 font-medium">BySarah</span>
                </Link>
                
                <div className="hidden lg:flex items-center p-1.5 rounded-full bg-surface-container-highest/40 border border-outline-variant/20 mx-4">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.id}
                            className={`px-5 py-2 rounded-full text-[14px] transition-all duration-300 whitespace-nowrap active:scale-95 ${
                                activeSection === link.id 
                                ? "bg-primary text-on-primary font-medium shadow-md shadow-primary/20" 
                                : "text-on-surface-variant font-medium hover:text-primary hover:bg-surface-container/50"
                            }`} 
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href, link.id)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-1 sm:gap-2 pr-1 shrink-0">
                    <div className="hidden sm:flex items-center gap-1 border-r border-outline-variant/30 pr-3 mr-1">
                        <a href="https://s.shopee.co.id/AACyR1wgu6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 group relative">
                            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform" data-icon="shopping_cart">shopping_cart</span>
                        </a>
                        <a href="https://wa.me/message/YE44OXBSTECGN1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 group">
                            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform" data-icon="person">person</span>
                        </a>
                    </div>
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-all duration-300 active:scale-95 shadow-sm"
                    >
                        <span className="material-symbols-outlined text-[20px]" data-icon={isMobileMenuOpen ? "close" : "menu"}>
                            {isMobileMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                    {/* Mobile specific icons - shown when sm is hidden */}
                    <a href="https://s.shopee.co.id/AACyR1wgu6" target="_blank" rel="noopener noreferrer" className="sm:hidden w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 group relative">
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform" data-icon="shopping_cart">shopping_cart</span>
                    </a>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="pointer-events-auto mt-2 mx-auto max-w-7xl rounded-3xl bg-surface/95 backdrop-blur-xl border border-outline-variant/40 shadow-xl shadow-primary/10 p-4 flex flex-col gap-2 lg:hidden transition-all duration-300">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.id}
                            className={`px-5 py-3 rounded-xl text-[16px] text-center transition-all duration-300 active:scale-95 ${
                                activeSection === link.id 
                                ? "bg-primary text-on-primary font-medium" 
                                : "text-on-surface-variant font-medium hover:text-primary hover:bg-surface-container"
                            }`} 
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href, link.id)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
            </div>
        </div>
    );
}
