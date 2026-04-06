import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Moon, Clock, GraduationCap } from "lucide-react";
import { madrasaInfo, madrasaNav } from "@/data/madrasa";

export default function MadrasaFooter() {
  const whatsappUrl = `https://wa.me/${madrasaInfo.phone.replace(/^0/, "234")}`;

  return (
    <footer className="bg-[var(--madrasa-primary-dark)] text-[var(--madrasa-ivory)] relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--madrasa-accent)]/40 via-[var(--madrasa-accent)] to-[var(--madrasa-accent)]/40" />

      <div className="container relative z-10 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[var(--madrasa-accent)]/10 border border-[var(--madrasa-accent)]/30 shadow-sm">
              <Image
                src={madrasaInfo.logoUrl ?? "/images/logo_dgh.jpg"}
                alt={madrasaInfo.shortName}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-amiri font-bold text-white text-lg leading-tight">
                {madrasaInfo.fullName}
              </div>
              <div className="font-amiri text-[var(--madrasa-accent)] text-sm">
                {madrasaInfo.arabicName}
              </div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            {madrasaInfo.tagline}
          </p>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
              <Moon size={14} className="text-[var(--madrasa-accent)]" />
              <span className="text-white/80">{madrasaInfo.hours}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
              <Clock size={14} className="text-[var(--madrasa-accent)]" />
              <span className="text-white/80">{madrasaInfo.days}</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-bold text-[var(--madrasa-accent)] uppercase text-xs tracking-wider mb-5 flex items-center gap-2">
            <span className="w-5 h-px bg-[var(--madrasa-accent)]/50"></span>
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {madrasaNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 hover:text-[var(--madrasa-accent)] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[var(--madrasa-accent)] transition-all duration-200"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info (without duplicate hours) */}
        <div>
          <h4 className="font-bold text-[var(--madrasa-accent)] uppercase text-xs tracking-wider mb-5 flex items-center gap-2">
            <span className="w-5 h-px bg-[var(--madrasa-accent)]/50"></span>
            Get in Touch
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors">
              <MapPin
                size={16}
                className="mt-0.5 shrink-0 text-[var(--madrasa-accent)]"
              />
              <span>{madrasaInfo.address}</span>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-[var(--madrasa-accent)] transition-colors"
              >
                <Phone size={16} className="text-[var(--madrasa-accent)]" />
                <span>{madrasaInfo.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${madrasaInfo.email}`}
                className="flex items-center gap-3 text-sm text-white/70 hover:text-[var(--madrasa-accent)] transition-colors break-all"
              >
                <Mail
                  size={16}
                  className="text-[var(--madrasa-accent)] shrink-0"
                />
                <span>{madrasaInfo.email}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Main School CTA */}
        <div>
          <h4 className="font-bold text-[var(--madrasa-accent)] uppercase text-xs tracking-wider mb-5 flex items-center gap-2">
            <span className="w-5 h-px bg-[var(--madrasa-accent)]/50"></span>
            Morning School
          </h4>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[var(--madrasa-accent)]/40 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap
                size={18}
                className="text-[var(--madrasa-accent)]"
              />
              <span className="font-semibold text-white text-sm">
                Dr. Gambo Hamza Islamic Academy
              </span>
            </div>
            <p className="text-white/60 text-xs mb-3">
              Full-day Nigerian & British curriculum for Nursery & Primary.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--madrasa-accent)] hover:text-white transition-colors group"
            >
              Visit Main School
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} {madrasaInfo.fullName} · Part of Dr.
            Gambo Hamza Islamic Academy
          </div>
          
        </div>
      </div>
    </footer>
  );
}
