"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Moon } from "lucide-react";
import { madrasaNav, madrasaInfo } from "@/data/madrasa";

export default function MadrasaNavbar() {
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
          ? "bg-[var(--madrasa-primary-dark)]/95 backdrop-blur-md shadow-xl"
          : "bg-[var(--madrasa-primary)]"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/madrasa" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full border-2 border-[var(--madrasa-accent)] flex items-center justify-center font-amiri font-bold text-[var(--madrasa-accent)] text-lg group-hover:bg-[var(--madrasa-accent)] group-hover:text-[var(--madrasa-primary-dark)] transition-all">
            د
          </div>
          <div>
            <div className="font-amiri font-bold text-white text-base leading-tight drop-shadow-sm">
              DGH Madrasa
            </div>
            <div className="text-xs text-[var(--madrasa-accent)] leading-tight font-medium">
              Evening Islamic School
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {madrasaNav.map((link) =>
            link.label === "← Main School" ? (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="ml-2 px-4 py-2 rounded-full border border-[var(--madrasa-accent)]/60 text-[var(--madrasa-accent)] text-sm font-semibold hover:bg-[var(--madrasa-accent)] hover:text-[var(--madrasa-primary-dark)] transition-all shadow-sm"
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-full font-semibold text-sm text-white/80 hover:text-[var(--madrasa-accent)] hover:bg-white/10 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
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
        <div className="lg:hidden bg-[var(--madrasa-primary-dark)]/95 backdrop-blur-md border-t border-white/20 px-4 pb-4 animate-fade-in">
          {madrasaNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 px-2 font-semibold border-b border-white/10 text-white/80 hover:text-[var(--madrasa-accent)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
