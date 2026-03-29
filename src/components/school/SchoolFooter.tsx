"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useMemo, useState } from "react";
import { schoolInfo, schoolNav } from "@/data/school";

export default function SchoolFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const emailValid = useMemo(() => /^\S+@\S+\.\S+$/.test(email), [email]);

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailValid) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 700);
  };

  return (
    <footer className="bg-gradient-to-r from-[#F5ECD7] via-[#ffffff] to-[#f8f1e5] text-[var(--school-primary-dark)]">
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2">
          <div className="text-2xl font-bold text-[var(--school-primary-dark)] mb-2">
            {schoolInfo.fullName}
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-[var(--school-primary-dark)]/70 mb-3">
            <span>Est. {schoolInfo.established}</span>
            <span className="py-1 px-2 bg-[var(--school-accent)]/20 rounded-full">
              {schoolInfo.type}
            </span>
            <span className="py-1 px-2 bg-[var(--school-accent)]/20 rounded-full">
              {schoolInfo.ownership}
            </span>
          </div>
          <p className="text-sm text-[var(--school-primary-dark)]/80 max-w-xl leading-relaxed">
            A distinguished academy where pupils excel academically, morally,
            and spiritually, guided by ethical values and strong community
            engagement.
          </p>
          <div className="mt-4 flex gap-3">
            {schoolInfo.facebook && (
              <a
                href={schoolInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--school-primary-dark)] hover:text-[var(--school-accent)] transition-colors"
              >
                <Facebook size={22} />
              </a>
            )}
            <a
              href="#"
              className="text-[var(--school-primary-dark)] hover:text-[var(--school-accent)] transition-colors"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="text-[var(--school-primary-dark)] hover:text-[var(--school-accent)] transition-colors"
            >
              <Twitter size={22} />
            </a>
            <a
              href="#"
              className="text-[var(--school-primary-dark)] hover:text-[var(--school-accent)] transition-colors"
            >
              <Youtube size={22} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-[var(--school-primary-dark)] mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-[var(--school-primary-dark)]/80">
            {schoolNav
              .filter((link) => link.label !== "Madrasa →")
              .map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--school-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[var(--school-primary-dark)] mb-3">
            Visit Us
          </h4>
          <ul className="space-y-2 text-sm text-[var(--school-primary-dark)]/80">
            <li>{schoolInfo.address}</li>
            {schoolInfo.phone ? <li>📞 {schoolInfo.phone}</li> : null}
            {schoolInfo.email ? <li>✉️ {schoolInfo.email}</li> : null}
            <li>🕒 {schoolInfo.workingHours}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[var(--school-primary-dark)] mb-3">
            Newsletter
          </h4>
          <p className="text-sm text-[var(--school-primary-dark)]/80 mb-3">
            Get school updates and events straight to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full rounded-xl border border-[var(--school-accent)]/40 bg-white px-3 py-2 text-sm text-[var(--school-primary-dark)] outline-none focus:border-[var(--school-primary)]"
            />
            <button
              disabled={status === "submitting"}
              type="submit"
              className="rounded-xl bg-[var(--school-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--school-accent)] transition disabled:bg-[var(--school-accent)]/40"
            >
              {status === "submitting" ? "Submitting..." : "Subscribe"}
            </button>
            {status === "success" && (
              <p className="text-xs text-green-600">Subscribed successfully!</p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-600">Invalid email address.</p>
            )}
          </form>
        </div>
      </div>

      <div className="border-t border-[var(--school-primary-dark)]/10 py-4 text-xs text-[var(--school-primary-dark)]/50 text-center">
        © {new Date().getFullYear()} Dr. Gambo Hamza Islamic Academy. All rights
        reserved. | Built with care for the community.
      </div>
    </footer>
  );
}
