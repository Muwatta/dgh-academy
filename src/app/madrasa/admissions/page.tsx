import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  madrasaAdmissionRequirements,
  madrasaClasses,
  madrasaInfo,
} from "@/data/madrasa";

export const metadata: Metadata = {
  title: "Madrasa Admissions",
  description:
    "Enrol your child in DGHI Academy Madrasa — evening Islamic education in Jos.",
};

export default function MadrasaAdmissionsPage() {
  return (
    <>
      <section className="relative madrasa-gradient pattern-geometric py-24 overflow-hidden">
        {/* contrast layer */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="container relative z-10">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--madrasa-accent)]/10 text-[var(--madrasa-accent)] text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[var(--madrasa-accent)]"></span>
            Registration
          </div>

          {/* Heading */}
          <h1 className="font-amiri text-4xl md:text-5xl font-semibold text-[var(--madrasa-ivory)] mt-6 leading-tight max-w-2xl">
            Madrasa Admissions
          </h1>

          {/* Accent line */}
          <div className="w-14 h-[2px] bg-[var(--madrasa-accent)] mt-4"></div>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg text-[var(--madrasa-ivory)]/80 max-w-xl leading-relaxed">
            Open to children from age 4 and above. No prior Islamic education is
            required for beginners. We welcome learners at all levels.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <button className="px-6 py-3 bg-[var(--madrasa-accent)] text-white rounded-md text-sm font-medium hover:opacity-90 transition">
              Begin Registration
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--madrasa-ivory)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <div>
              <div className="section-tag bg-[var(--madrasa-primary)]/10 text-[var(--madrasa-primary)]">
                Requirements
              </div>
              <h2 className="font-amiri text-3xl font-bold text-[var(--madrasa-primary)] mb-6">
                What to Prepare
              </h2>
              <ul className="space-y-4 mb-8">
                {madrasaAdmissionRequirements.map((req, i) => (
                  <li key={req} className="flex items-start gap-4">
                    <span className="w-7 h-7 rounded-full bg-[var(--madrasa-primary)] text-[var(--madrasa-accent)] text-xs flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-[var(--madrasa-text-muted)] leading-relaxed text-sm">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-xl p-5 border border-gray-100 mb-5">
                <h3 className="font-bold text-[var(--madrasa-primary)] mb-3">
                  Available Classes / Levels
                </h3>
                <div className="flex flex-wrap gap-2">
                  {madrasaClasses.map((c) => (
                    <span
                      key={c}
                      className="text-xs px-3 py-1.5 bg-[var(--madrasa-primary)]/8 text-[var(--madrasa-primary)] rounded-full font-semibold"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--madrasa-primary)] rounded-xl p-5 text-[var(--madrasa-ivory)]">
                <div className="font-bold mb-2 text-[var(--madrasa-accent)]">
                  Contact for Enquiries
                </div>
                <div className="text-sm opacity-80">📞 {madrasaInfo.phone}</div>
                <div className="text-sm opacity-80">✉️ {madrasaInfo.email}</div>
                <div className="text-sm opacity-80 mt-1">
                  🕌 Sessions: {madrasaInfo.hours} · {madrasaInfo.days}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h2 className="font-amiri text-2xl font-bold text-[var(--madrasa-primary)] mb-6">
                Registration Form
              </h2>
              <form
                action="https://formspree.io/f/mdapylrr"
                method="POST"
                className="space-y-5"
              >
                <div>
                  <label className="text-xs font-bold text-[var(--madrasa-text-muted)] uppercase tracking-wider block mb-1.5">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    name="guardianName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[var(--madrasa-text-muted)] uppercase tracking-wider block mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[var(--madrasa-text-muted)] uppercase tracking-wider block mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[var(--madrasa-text-muted)] uppercase tracking-wider block mb-1.5">
                      Child's Name *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[var(--madrasa-text-muted)] uppercase tracking-wider block mb-1.5">
                      Child's Age *
                    </label>
                    <input
                      type="text"
                      name="childAge"
                      required
                      placeholder="e.g. 7 years"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-[var(--madrasa-text-muted)] uppercase tracking-wider block mb-1.5">
                    Quran Level (Self-assessed) *
                  </label>
                  <select
                    name="quranLevel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] bg-white transition-colors"
                  >
                    <option value="">Select level</option>
                    {madrasaClasses.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-[var(--madrasa-text-muted)] uppercase tracking-wider block mb-1.5">
                    Any Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary btn-madrasa w-full justify-center"
                >
                  Submit Registration <ArrowRight size={16} />
                </button>
                <p className="text-xs text-center text-[var(--madrasa-text-muted)]">
                  We will contact you within 24 hours. Jazakumullahu Khayran.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
