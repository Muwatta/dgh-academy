import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Moon,
  BookOpen,
  Star,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Users,
} from "lucide-react";
import {
  madrasaInfo,
  madrasaHero,
  madrasaStats,
  madrasaMallam,
  madrasaPrograms,
  madrasaTimetable,
  madrasaValues,
  madrasaFacilities,
  madrasaAdmissionRequirements,
  madrasaClasses,
  madrasaAbout,
} from "@/data/madrasa";

export default function MadrasaHomePage() {
  return (
    <>
      {/* HERO – with improved overlay for text readability */}
      <section className="relative min-h-[90vh] madrasa-gradient pattern-geometric flex items-center overflow-hidden">
        {/* Dark overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20 z-0"></div>

        <div className="absolute top-1/2 right-8 -translate-y-1/2 w-80 h-80 rounded-full border border-[var(--madrasa-accent)]/15 hidden lg:flex items-center justify-center z-0">
          <div className="w-56 h-56 rounded-full border border-[var(--madrasa-accent)]/10 flex items-center justify-center">
            <span className="font-amiri text-8xl text-[var(--madrasa-accent)]/20">
              بسم
            </span>
          </div>
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-2xl">
            <div className="font-amiri text-[var(--madrasa-accent)] text-6xl mb-4 animate-fade-up drop-shadow-sm">
             أكاديمية د. حمزة غمبو
            </div>
            <div className="inline-flex items-center gap-2 bg-[var(--madrasa-accent)]/20 backdrop-blur-sm border border-[var(--madrasa-accent)]/40 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 animate-fade-up delay-100">
              <Moon size={12} /> {madrasaHero.badge}
            </div>
            <h1 className="font-amiri text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up delay-200 drop-shadow-lg">
              {madrasaHero.headline}
            </h1>
            <p className="text-white/90 text-lg leading-relaxed mb-10 max-w-xl animate-fade-up delay-300 drop-shadow">
              {madrasaHero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
              <Link
                href={madrasaHero.ctaPrimary.href}
                className="btn-primary btn-madrasa"
              >
                {madrasaHero.ctaPrimary.label} <ArrowRight size={16} />
              </Link>
              <Link
                href={madrasaHero.ctaSecondary.href}
                className="btn-primary btn-madrasa-outline"
              >
                {madrasaHero.ctaSecondary.label}
              </Link>
            </div>
          </div>
        </div>

        {/* School switcher pill - kept same but improved contrast */}
        <div className="absolute bottom-8 right-8 hidden lg:block animate-fade-in delay-500">
          <Link
            href="/"
            className="flex items-center gap-3 bg-[var(--school-primary)]/90 backdrop-blur-sm text-white px-5 py-3.5 rounded-xl hover:bg-[var(--school-primary)] transition-all group border border-white/20 shadow-lg"
          >
            <div className="w-6 h-6 rounded-full bg-[var(--school-accent)] flex items-center justify-center text-[var(--school-primary-dark)] font-bold text-xs">
              D
            </div>
            <div>
              <div className="text-xs font-bold text-[var(--school-accent)] uppercase tracking-wider">
                Morning School
              </div>
              <div className="text-xs text-white/80">7:00am – 2:00pm</div>
            </div>
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform text-white/70"
            />
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[var(--madrasa-primary-dark)]">
        <div className="container py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {madrasaStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold font-amiri text-[var(--madrasa-accent)] mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/60 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-[var(--madrasa-ivory)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag bg-[var(--madrasa-primary)]/10 text-[var(--madrasa-primary)]">
                About the Madrasa
              </div>
              <h2 className="font-amiri text-4xl md:text-5xl font-bold text-[var(--madrasa-primary)] mb-6 leading-tight">
                Rooted in the Quran, Growing with Purpose
              </h2>
              {madrasaAbout.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-[var(--madrasa-text-muted)] leading-relaxed mb-4 text-sm"
                >
                  {para}
                </p>
              ))}
              <Link
                href="/madrasa/about"
                className="btn-primary btn-madrasa mt-4 inline-flex"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            {/* Vision & Mission */}
            <div className="space-y-5">
              <div className="rounded-2xl border border-[var(--madrasa-accent)]/20 bg-white p-6 shadow-md">
                <div className="section-tag bg-[var(--madrasa-primary)]/10 text-[var(--madrasa-primary)] text-xs mb-2">
                  Our Vision
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {madrasaInfo.tagline} — {madrasaHero.headline}
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--madrasa-accent)]/20 bg-[var(--madrasa-primary)] p-6 shadow-md">
                <div className="section-tag bg-[var(--madrasa-accent)]/20 text-[var(--madrasa-accent)] text-xs mb-2">
                  Our Mission
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  To provide accessible, structured, and high-quality Islamic
                  education that complements conventional schooling — nurturing
                  children's faith, character, and Quranic knowledge.
                </p>
              </div>
              {/* Timetable preview */}
              <div className="rounded-2xl bg-white border border-gray-100 p-6 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-[var(--madrasa-accent)]" />
                  <span className="font-bold text-[var(--madrasa-primary)] text-sm">
                    Daily Timetable Preview
                  </span>
                </div>
                <div className="space-y-2">
                  {madrasaTimetable.slice(0, 4).map((slot) => (
                    <div key={slot.time} className="flex gap-3 text-xs">
                      <span className="font-bold text-[var(--madrasa-accent)] whitespace-nowrap">
                        {slot.time}
                      </span>
                      <span className="text-gray-600">{slot.activity}</span>
                    </div>
                  ))}
                  <Link
                    href="/madrasa/timetable"
                    className="text-xs text-[var(--madrasa-accent)] font-semibold mt-2 inline-block"
                  >
                    View full timetable →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-[var(--madrasa-primary)] pattern-geometric">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-tag bg-[var(--madrasa-accent)]/15 text-[var(--madrasa-accent)]">
              Our Foundation
            </div>
            <h2 className="font-amiri text-4xl font-bold text-white">
              Islamic Values We Uphold
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {madrasaValues.map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:bg-white/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-full border border-[var(--madrasa-accent)]/40 flex items-center justify-center text-[var(--madrasa-accent)] mb-4 group-hover:bg-[var(--madrasa-accent)]/20 transition-colors">
                  {value.icon === "star" ? (
                    <Star size={18} />
                  ) : value.icon === "heart" ? (
                    <Moon size={18} />
                  ) : value.icon === "book-open" ? (
                    <BookOpen size={18} />
                  ) : value.icon === "award" ? (
                    <Award size={18} />
                  ) : (
                    <Users size={18} />
                  )}
                </div>
                <h3 className="font-bold text-[var(--madrasa-accent)] mb-2 font-amiri">
                  {value.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="py-20 bg-[var(--madrasa-ivory)]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-tag bg-[var(--madrasa-primary)]/10 text-[var(--madrasa-primary)]">
              What We Teach
            </div>
            <h2 className="font-amiri text-4xl font-bold text-[var(--madrasa-primary)] mb-3">
              Madrasa Curriculum
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              A structured, age-appropriate programme centred on the Holy Quran
              with supporting Islamic sciences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {madrasaPrograms.map((prog) => (
              <div
                key={prog.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--madrasa-primary)]/10 flex items-center justify-center text-[var(--madrasa-primary)] mb-4 group-hover:bg-[var(--madrasa-primary)] group-hover:text-white transition-all">
                  <BookOpen size={18} />
                </div>
                <h3 className="font-bold text-[var(--madrasa-primary)] mb-2">
                  {prog.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {prog.description}
                </p>
                {prog.levels && (
                  <div className="flex flex-wrap gap-1.5">
                    {prog.levels.map((l) => (
                      <span
                        key={l}
                        className="text-xs px-2 py-0.5 bg-[var(--madrasa-primary)]/10 text-[var(--madrasa-primary)] rounded-full font-medium"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/madrasa/curriculum"
              className="btn-primary btn-madrasa"
            >
              View Full Curriculum <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* MALLAM MESSAGE */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <div className="section-tag bg-[var(--madrasa-primary)]/10 text-[var(--madrasa-primary)]">
              From the Head of Madrasa
            </div>
            <h2 className="font-amiri text-4xl font-bold text-[var(--madrasa-primary)]">
              A Message from the Mallam
            </h2>
          </div>
          <div className="bg-[var(--madrasa-primary)] rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 font-amiri text-[150px] text-[var(--madrasa-accent)]/10 leading-none select-none">
              "
            </div>
            <p className="font-amiri text-[var(--madrasa-accent)] text-xl mb-4 relative z-10">
              بسم الله الرحمن الرحيم
            </p>
            <p className="text-white/80 leading-relaxed mb-8 text-sm relative z-10 max-w-2xl">
              {madrasaMallam.message?.split("\n\n")[1]}
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-full border-2 border-[var(--madrasa-accent)] flex items-center justify-center font-amiri text-[var(--madrasa-accent)] text-2xl">
                م
              </div>
              <div>
                <div className="font-bold text-white">{madrasaMallam.name}</div>
                <div className="text-sm text-[var(--madrasa-accent)]">
                  {madrasaMallam.position}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSIONS */}
      <section className="py-20 bg-[var(--madrasa-ivory)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-tag bg-[var(--madrasa-primary)]/10 text-[var(--madrasa-primary)]">
                Registration
              </div>
              <h2 className="font-amiri text-4xl font-bold text-[var(--madrasa-primary)] mb-6">
                How to Enrol in the Madrasa
              </h2>
              <ul className="space-y-3 mb-8">
                {madrasaAdmissionRequirements.map((req, i) => (
                  <li key={req} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--madrasa-primary)] text-[var(--madrasa-accent)] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-white rounded-lg border border-gray-100">
                <div className="text-sm font-bold text-[var(--madrasa-primary)] mb-2">
                  Available Classes
                </div>
                <div className="flex flex-wrap gap-2">
                  {madrasaClasses.map((c) => (
                    <span
                      key={c}
                      className="text-xs px-3 py-1 bg-[var(--madrasa-primary)]/10 text-[var(--madrasa-primary)] rounded-full font-semibold"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Enquiry form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-amiri text-2xl font-bold text-[var(--madrasa-primary)] mb-6">
                Register Interest
              </h3>
              <form action="https://formspree.io/f/mdapylrr" method="POST" className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="08XXXXXXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Child's full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                      Child's Age *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 7 years"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                      Class Level *
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] bg-white transition-colors">
                      <option value="">Select level</option>
                      {madrasaClasses.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any questions..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary btn-madrasa w-full justify-center"
                >
                  Send Registration Interest <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 bg-[var(--madrasa-primary-dark)]">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href={`tel:${madrasaInfo.phone}`}
              className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center hover:bg-white/20 transition-all group"
            >
              <Phone
                size={22}
                className="text-[var(--madrasa-accent)] mx-auto mb-3"
              />
              <div className="font-bold text-white mb-1">Call / WhatsApp</div>
              <div className="text-sm text-white/60">{madrasaInfo.phone}</div>
            </a>
            <a
              href={`mailto:${madrasaInfo.email}`}
              className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center hover:bg-white/20 transition-all group"
            >
              <Mail
                size={22}
                className="text-[var(--madrasa-accent)] mx-auto mb-3"
              />
              <div className="font-bold text-white mb-1">Email</div>
              <div className="text-xs text-white/60 break-all">
                {madrasaInfo.email}
              </div>
            </a>
            <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center">
              <Clock
                size={22}
                className="text-[var(--madrasa-accent)] mx-auto mb-3"
              />
              <div className="font-bold text-white mb-1">Session Hours</div>
              <div className="text-sm text-white/60">{madrasaInfo.hours}</div>
              <div className="text-xs text-white/40 mt-1">
                {madrasaInfo.days}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
