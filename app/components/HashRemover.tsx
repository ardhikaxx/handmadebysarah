'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HashRemover() {
    const pathname = usePathname();

    useEffect(() => {
        // Fungsi untuk menghapus hash dari URL
        const removeHash = () => {
            if (window.location.hash) {
                // Beri sedikit waktu agar browser sempat melakukan scroll otomatis terlebih dahulu
                setTimeout(() => {
                    window.history.replaceState(null, '', window.location.pathname);
                }, 100);
            }
        };

        // Jalankan saat komponen dimuat atau rute berubah
        removeHash();

        // Jalankan setiap kali hash di URL berubah (contoh: Next.js selesai menavigasi ke halaman ber-hash)
        window.addEventListener('hashchange', removeHash);
        
        return () => {
            window.removeEventListener('hashchange', removeHash);
        };
    }, [pathname]);

    return null;
}
