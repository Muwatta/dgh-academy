import Link from "next/link";
import { Phone, Mail, MapPin, Moon, Clock } from "lucide-react";
import { madrasaInfo, madrasaNav } from "@/data/madrasa";

export default function MadrasaFooter() {
  return (
    <footer className="bg-[var(--madrasa-primary-dark)] text-[var(--madrasa-ivory)]">
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full border-2 border-[var(--madrasa-accent)] flex items-center justify-center font-amiri font-bold text-[var(--madrasa-accent)] text-2xl">
              م
            </div>
            <div>
              <div className="font-amiri font-bold text-lg">{madrasaInfo.fullName}</div>
              <div className="font-amiri text-[var(--madrasa-accent)] text-sm">{madrasaInfo.arabicName}</div>
            </div>
          </div>
          <p className="text-sm text-[var(--madrasa-ivory)]/60 leading-relaxed">
            {madrasaInfo.tagline}
          </p>
          <div className="mt-4 flex items-center gap-2 text-[var(--madrasa-accent)] text-sm">
            <Moon size={14} /> {madrasaInfo.hours} · {madrasaInfo.days}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-[var(--madrasa-accent)] uppercase text-xs tracking-widest mb-4">Navigation</h4>
          <ul className="space-y-2">
            {madrasaNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--madrasa-ivory)]/60 hover:text-[var(--madrasa-accent)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-[var(--madrasa-accent)] uppercase text-xs tracking-widest mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-[var(--madrasa-ivory)]/60">
              <MapPin size={14} className="mt-1 shrink-0 text-[var(--madrasa-accent)]" />
              {madrasaInfo.address}
            </li>
            <li>
              <a href={`tel:${madrasaInfo.phone}`} className="flex items-center gap-2.5 text-sm text-[var(--madrasa-ivory)]/60 hover:text-[var(--madrasa-accent)] transition-colors">
                <Phone size={14} className="text-[var(--madrasa-accent)]" /> {madrasaInfo.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${madrasaInfo.email}`} className="flex items-center gap-2.5 text-sm text-[var(--madrasa-ivory)]/60 hover:text-[var(--madrasa-accent)] transition-colors break-all">
                <Mail size={14} className="text-[var(--madrasa-accent)] shrink-0" /> {madrasaInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-[var(--madrasa-ivory)]/60">
              <Clock size={14} className="text-[var(--madrasa-accent)]" /> {madrasaInfo.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-4 text-center text-xs text-[var(--madrasa-ivory)]/30">
          © {new Date().getFullYear()} DGH Academy Madrasa · Part of Dr. Gambo Hamza Islamic Academy
        </div>
      </div>
    </footer>
  );
}
