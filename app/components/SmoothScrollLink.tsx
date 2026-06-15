'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SmoothScrollLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function SmoothScrollLink({ href, className, children }: SmoothScrollLinkProps) {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Hanya tangani jika href adalah anchor link yang menuju ke halaman yang sama
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Link href={href} className={className} onClick={handleNavClick}>
      {children}
    </Link>
  );
}
