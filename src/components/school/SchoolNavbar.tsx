"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { schoolNav, schoolInfo } from "@/data/school";

export default function SchoolNavbar() {
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
      <div className="hidden md:block bg-[var(--school-primary-dark)] text-[var(--school-cream)] text-sm">
        <div className="container flex justify-between items-center py-2">
          <span className="font-amiri opacity-80 italic">{schoolInfo.motto}</span>
          <div className="flex items-center gap-5">
            <a href={`tel:${schoolInfo.phone}`} className="flex items-center gap-1.5 hover:text-[var(--school-accent)] transition-colors">
              <Phone size={13} /> {schoolInfo.phone}
            </a>
            <a href={`mailto:${schoolInfo.email}`} className="flex items-center gap-1.5 hover:text-[var(--school-accent)] transition-colors">
              <Mail size={13} /> {schoolInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg shadow-[var(--school-primary)]/10"
          : "bg-[var(--school-cream)]"
      }`}>
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[var(--school-primary)] flex items-center justify-center text-white font-amiri font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              DGH
            </div>
            <div>
              <div className="font-amiri font-bold text-[var(--school-primary)] text-base leading-tight">
                DGH Academy
              </div>
              <div className="text-xs text-[var(--school-text-muted)] leading-tight">
                Morning School
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {schoolNav.map((link) =>
              link.label === "Madrasa →" ? (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="ml-2 btn-primary btn-school text-sm px-4 py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 rounded font-semibold text-sm text-[var(--school-text)] hover:text-[var(--school-primary)] hover:bg-[var(--school-cream)] transition-all"
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
            className="lg:hidden p-2 rounded text-[var(--school-primary)]"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-[var(--school-cream-dark)] px-4 pb-4 animate-fade-in">
            {schoolNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 px-2 font-semibold border-b border-[var(--school-cream)] text-sm ${
                  link.label === "Madrasa →"
                    ? "text-[var(--school-primary)] font-bold"
                    : "text-[var(--school-text)]"
                }`}
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
