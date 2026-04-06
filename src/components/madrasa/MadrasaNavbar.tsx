"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Moon } from "lucide-react";
import { madrasaNav, madrasaInfo } from "@/data/madrasa";

export default function MadrasaNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-papayawhip/95 backdrop-blur-md shadow-xl border-b border-[var(--madrasa-accent)]/20"
          : "bg-papayawhip border-b border-[var(--madrasa-accent)]/20"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/madrasa" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[var(--madrasa-primary)] flex items-center justify-center border-2 border-[var(--madrasa-accent)] shadow-md group-hover:scale-105 transition-transform">
            <Image
              src={madrasaInfo.logoUrl ?? "/images/logo_dgh.jpg"}
              alt={madrasaInfo.shortName}
              width={44}
              height={44}
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-amiri font-bold text-[var(--madrasa-primary-dark)] text-base leading-tight drop-shadow-sm">
              DGH Madrasa
            </div>
            <div className="text-xs text-[var(--madrasa-accent)] leading-tight font-medium">
              Evening Islamic School
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-2">
          {madrasaNav.map((link) => {
            const isActive = pathname === link.href;
            const activeClasses = isActive
              ? "bg-[var(--madrasa-accent)] text-[var(--madrasa-primary-dark)] ring-1 ring-[var(--madrasa-accent)]/25"
              : "text-[var(--madrasa-primary-dark)] hover:text-[var(--madrasa-accent)] hover:bg-white/70";

            if (link.label === "← Main School") {
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`navbar-link ml-2 px-4 py-2 rounded-full border border-[var(--madrasa-accent)]/60 text-[var(--madrasa-accent)] text-sm font-semibold transition-all shadow-sm ${
                      isActive
                        ? "bg-[var(--madrasa-accent)] text-[var(--madrasa-primary-dark)] border-transparent"
                        : "hover:bg-[var(--madrasa-accent)] hover:text-[var(--madrasa-primary-dark)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`navbar-link px-4 py-2 rounded-full font-semibold text-sm transition-all ${activeClasses}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-[var(--madrasa-accent)] hover:bg-white/10 rounded-full transition-all"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-papayawhip/95 backdrop-blur-md border-t border-[var(--madrasa-accent)]/20 px-4 pb-4 animate-fade-in">
          {madrasaNav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`navbar-link block py-4 px-3 rounded-2xl font-semibold border-b border-white/10 text-[var(--madrasa-primary-dark)] transition-all ${
                  isActive
                    ? "bg-white/70 text-[var(--madrasa-primary-dark)]"
                    : "hover:text-[var(--madrasa-accent)] hover:bg-white/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
