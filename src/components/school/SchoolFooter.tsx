import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";
import { schoolInfo, schoolNav } from "@/data/school";

export default function SchoolFooter() {
  return (
    <footer className="bg-[var(--school-primary-dark)] text-[var(--school-cream)]">
      {/* Main footer */}
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2 footer-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[var(--school-accent)] flex items-center justify-center font-amiri font-bold text-[var(--school-primary-dark)] text-xl">
              DGH
            </div>
            <div>
              <div className="font-amiri font-bold text-lg text-[var(--school-cream)]">
                {schoolInfo.fullName}
              </div>
              <div className="text-xs text-[var(--school-accent)]">
                Est. {schoolInfo.established}
              </div>
            </div>
          </div>
          <p className="font-amiri italic text-[var(--school-accent)] text-lg mb-3">
            "{schoolInfo.motto}"
          </p>
          <p className="text-sm text-[var(--school-cream)]/70 leading-relaxed max-w-xs">
            A distinguished Academy where pupils excel academically, morally and
            spiritually, rooted in the teachings of Islam.
          </p>
          {schoolInfo.facebook && (
            <a
              href={schoolInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-[var(--school-cream)]/70 hover:text-[var(--school-accent)] transition-colors"
            >
              <Facebook size={16} /> Follow us on Facebook
            </a>
          )}
        </div>

        {/* Quick links */}
        <div className="footer-card">
          <h4 className="font-bold text-[var(--school-accent)] uppercase text-xs tracking-widest mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {schoolNav
              .filter((l) => l.label !== "Madrasa →")
              .map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--school-cream)]/70 hover:text-[var(--school-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link
                href="/madrasa"
                className="text-sm text-[var(--school-accent)] hover:text-[var(--school-accent-light)] transition-colors font-semibold"
              >
                Evening Madrasa →
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-card">
          <h4 className="font-bold text-[var(--school-accent)] uppercase text-xs tracking-widest mb-4">
            Contact Us
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-[var(--school-cream)]/70">
              <MapPin
                size={14}
                className="mt-1 shrink-0 text-[var(--school-accent)]"
              />
              {schoolInfo.address}
            </li>
            <li>
              <a
                href={`tel:${schoolInfo.phone}`}
                className="flex items-center gap-2.5 text-sm text-[var(--school-cream)]/70 hover:text-[var(--school-accent)] transition-colors"
              >
                <Phone size={14} className="text-[var(--school-accent)]" />{" "}
                {schoolInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${schoolInfo.email}`}
                className="flex items-center gap-2.5 text-sm text-[var(--school-cream)]/70 hover:text-[var(--school-accent)] transition-colors break-all"
              >
                <Mail
                  size={14}
                  className="text-[var(--school-accent)] shrink-0"
                />{" "}
                {schoolInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-[var(--school-cream)]/70">
              <Clock size={14} className="text-[var(--school-accent)]" />{" "}
              {schoolInfo.workingHours}
            </li>
          </ul>

          <a
            href={schoolInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xs font-semibold px-4 py-2 border border-[var(--school-accent)]/40 rounded text-[var(--school-accent)] hover:bg-[var(--school-accent)] hover:text-[var(--school-primary-dark)] transition-all"
          >
            View on Google Maps
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[var(--school-cream)]/40">
          <span>
            © {new Date().getFullYear()} Dr. Gambo Hamza Islamic Academy. All
            rights reserved.
          </span>
          <span>www.dghacademy.com · www.dghacademy.edu.ng</span>
          <a
            href="#top"
            className="back-to-top text-[var(--school-cream)]/90 hover:text-[var(--school-accent)]"
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
