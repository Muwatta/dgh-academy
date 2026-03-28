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
    <>
      {/* Top bar */}
      <div className="bg-[var(--madrasa-primary-dark)] text-[var(--madrasa-ivory)] text-sm hidden md:block">
        <div className="container flex justify-between items-center py-2">
          <span className="font-amiri opacity-90 text-[var(--madrasa-accent)]">
            بسم الله الرحمن الرحيم
          </span>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <Moon size={12} /> Evening: {madrasaInfo.hours}
            </span>
            <a href={`tel:${madrasaInfo.phone}`} className="flex items-center gap-1.5 hover:text-[var(--madrasa-accent)] transition-colors">
              <Phone size={12} /> {madrasaInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--madrasa-primary-dark)] shadow-xl"
          : "bg-[var(--madrasa-primary)]"
      }`}>
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/madrasa" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full border-2 border-[var(--madrasa-accent)] flex items-center justify-center font-amiri font-bold text-[var(--madrasa-accent)] text-lg group-hover:bg-[var(--madrasa-accent)] group-hover:text-[var(--madrasa-primary-dark)] transition-all">
              م
            </div>
            <div>
              <div className="font-amiri font-bold text-[var(--madrasa-ivory)] text-base leading-tight">
                DGH Madrasa
              </div>
              <div className="text-xs text-[var(--madrasa-accent)] leading-tight">
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
                    className="ml-2 px-4 py-2 rounded border border-[var(--madrasa-accent)]/50 text-[var(--madrasa-accent)] text-sm font-semibold hover:bg-[var(--madrasa-accent)] hover:text-[var(--madrasa-primary-dark)] transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 rounded font-semibold text-sm text-[var(--madrasa-ivory)]/80 hover:text-[var(--madrasa-accent)] hover:bg-white/5 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-[var(--madrasa-accent)]"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-[var(--madrasa-primary-dark)] border-t border-white/10 px-4 pb-4 animate-fade-in">
            {madrasaNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-2 font-semibold border-b border-white/10 text-sm text-[var(--madrasa-ivory)]/80 hover:text-[var(--madrasa-accent)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
