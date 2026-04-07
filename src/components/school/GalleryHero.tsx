"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { schoolInfo, schoolHero, entryClasses } from "@/data/school";

const slides = [
  {
    bg: "from-[#3B1A0E] via-[#5C2A14] to-[#7A3820]",
    headline: "A Place Where",
    highlight: "Knowledge",
    rest: "Meets Morals",
  },
  {
    bg: "from-[#1A0E3B] via-[#2A1460] to-[#3B1A7A]",
    headline: "Building",
    highlight: "Character",
    rest: "Through Faith",
  },
  {
    bg: "from-[#0E2A1A] via-[#14502A] to-[#1A7A3B]",
    headline: "Nurturing",
    highlight: "Excellence",
    rest: "Since 2025",
  },
];

export default function GalleryHero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 350);
  };

  useEffect(() => {
    const t = setTimeout(() => goTo((current + 1) % slides.length), 6000);
    return () => clearTimeout(t);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* ── Background gradient (transitions between slides) ── */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-all duration-700`}
      />

      {/* ── Try to load image if exists, overlaid on gradient ── */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${fading ? "opacity-0" : "opacity-30"}`}
        style={{ backgroundImage: `url('/images/environment.jpg')` }}
      />

      {/* ── Dark overlay for readability ── */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ── Islamic star pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C4955A' fill-rule='evenodd'%3E%3Cpath d='M40 0L50 20H70L55 32L60 52L40 40L20 52L25 32L10 20H30L40 0z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Glow orb ── */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#C4955A]/10 -translate-y-1/2 blur-3xl pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 container py-20 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: Headline */}
        <div
          className={`transition-all duration-500 ${fading ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}
        >
        

          {/* Big headline */}
          <h1
            className="font-amiri font-bold text-white leading-[1.1] mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            {slide.headline}
            <br />
            <span style={{ color: "#C4955A" }}>{slide.highlight}</span>
            <br />
            {slide.rest}
          </h1>

          {/* Motto */}
          {schoolInfo.motto && (
            <p
              className="font-amiri italic mb-6"
              style={{ color: "#C4955A", opacity: 0.85, fontSize: "1.2rem" }}
            >
              &ldquo;{schoolInfo.motto}&rdquo;
            </p>
          )}

          {/* Description */}
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
            A distinguished Academy where pupils excel academically, morally and
            spiritually — rooted in the teachings of Islam, serving Gangare,
            Jos.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {[
              "Nigerian & British Curriculum",
              "Nursery & Primary",
              "Islamic Education",
              "ICT & Coding",
            ].map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-white/12 border border-white/20 text-white/90 rounded-full backdrop-blur-sm"
              >
                <CheckCircle2 size={11} style={{ color: "#C4955A" }} /> {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: "#6B3A2A", color: "white" }}
            >
              Apply for Admission <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>

          {/* Slide dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "2rem" : "0.75rem",
                  background:
                    i === current ? "#C4955A" : "rgba(255,255,255,0.3)",
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
            <span className="ml-3 text-white/40 text-xs">
              {current + 1} / {slides.length}
            </span>
          </div>
        </div>

        {/* RIGHT: Quick Enquiry Card */}
        <div className="w-full lg:max-w-sm ml-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 backdrop-blur-md bg-white">
            {/* Card header */}
            <div className="px-7 py-5" style={{ background: "#6B3A2A" }}>
              <h2 className="font-amiri text-2xl font-bold text-white">
                Quick Enquiry
              </h2>
              <p className="text-white/60 text-sm mt-1">
                We respond within 24 hours · Insha'Allah
              </p>
            </div>

            {/* Card body */}
            <div className="p-6 space-y-4 bg-white">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Parent Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none transition-colors"
                    style={{ borderColor: undefined }}
                    onFocus={(e) => (e.target.style.borderColor = "#6B3A2A")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    placeholder="08XXXXXXXXX"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none transition-colors"
                    onFocus={(e) => (e.target.style.borderColor = "#6B3A2A")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Child's Name *
                </label>
                <input
                  type="text"
                  placeholder="Child's full name"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none transition-colors"
                  onFocus={(e) => (e.target.style.borderColor = "#6B3A2A")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Age *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5 yrs"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none transition-colors"
                    onFocus={(e) => (e.target.style.borderColor = "#6B3A2A")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Class *
                  </label>
                  <select
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none transition-colors"
                    onFocus={(e) => (e.target.style.borderColor = "#6B3A2A")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  >
                    <option value="">Select</option>
                    {entryClasses.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                className="w-full flex items-center justify-center gap-2 font-bold text-sm py-3.5 rounded-lg text-white transition-all hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0"
                style={{ background: "#6B3A2A" }}
              >
                Send Enquiry <ArrowRight size={16} />
              </button>

              <p className="text-xs text-center text-gray-400 pt-1">
                Or call us:{" "}
                <a
                  href={`tel:${schoolInfo.phone}`}
                  className="font-bold hover:underline"
                  style={{ color: "#6B3A2A" }}
                >
                  {schoolInfo.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Previous"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Next"
      >
        <ChevronRight size={22} />
      </button>

      {/* Madrasa pill — bottom right */}
      <div className="absolute bottom-8 right-6 z-20 hidden lg:block">
        <Link
          href="/madrasa"
          className="flex items-center gap-3 backdrop-blur-md px-5 py-3.5 rounded-xl border transition-all group shadow-lg"
          style={{
            background: "rgba(26,74,74,0.9)",
            borderColor: "rgba(201,168,76,0.35)",
            color: "#F8F4EC",
          }}
        >
          <Moon size={17} style={{ color: "#C9A84C" }} />
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-wider"
              style={{ color: "#C9A84C" }}
            >
              Evening Madrasa
            </div>
            <div className="text-xs opacity-60">4:00pm – 7:00pm</div>
          </div>
          <ArrowRight
            size={13}
            className="group-hover:translate-x-1 transition-transform"
            style={{ color: "#C9A84C" }}
          />
        </Link>
      </div>
    </section>
  );
}
