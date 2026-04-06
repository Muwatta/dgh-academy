import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Moon } from "lucide-react";
import { madrasaTimetable } from "@/data/madrasa";

export const metadata: Metadata = {
  title: "Timetable | DGHI Madrasa",
  description:
    "DGHI Madrasa daily timetable — evening sessions from 2:00pm to 6:00pm, Thursday–Sunday.",
};

const sessionHours = "2:00pm – 6:00pm";
const sessionDays = "Thursday – Sunday";

export default function MadrasaTimetablePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative madrasa-gradient pattern-geometric py-24 overflow-hidden">
        {/* proper contrast layer */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="container relative z-10">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--madrasa-accent)]/10 text-[var(--madrasa-accent)] text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[var(--madrasa-accent)]"></span>
            Schedule
          </div>

          {/* Heading */}
          <h1 className="font-amiri text-4xl md:text-5xl font-semibold text-[var(--madrasa-ivory)] mt-6 leading-tight max-w-2xl">
            Daily Timetable
          </h1>

          {/* Accent line */}
          <div className="w-14 h-[2px] bg-[var(--madrasa-accent)] mt-4"></div>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg text-[var(--madrasa-ivory)]/80 max-w-lg leading-relaxed">
            Our structured evening sessions run{" "}
            <span className="font-medium text-[var(--madrasa-ivory)]">
              {sessionHours}
            </span>
            , {sessionDays}.
          </p>

          {/* Optional quick info chips */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-white/10 text-[var(--madrasa-ivory)]">
              Evening Classes
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-[var(--madrasa-ivory)]">
              Structured Learning
            </span>
          </div>
        </div>
      </section>

      {/* Timetable Table */}
      <section className="py-20 bg-[var(--madrasa-ivory)]">
        <div className="container max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-[var(--madrasa-primary)] px-6 py-5 flex items-center gap-3">
              <Moon size={20} className="text-[var(--madrasa-accent)]" />
              <div>
                <div className="font-bold text-white">Evening Session</div>
                <div className="text-xs text-white/60">
                  {sessionHours} · {sessionDays}
                </div>
              </div>
            </div>

            {/* Slots */}
            <div className="divide-y divide-gray-100">
              {madrasaTimetable.map((slot, i) => (
                <div
                  key={slot.time}
                  className={`flex items-center gap-4 px-6 py-5 ${
                    i % 2 === 0 ? "bg-white" : "bg-[var(--madrasa-ivory)]"
                  }`}
                >
                  <div className="flex items-center gap-2 w-44 shrink-0">
                    <Clock size={13} className="text-[var(--madrasa-accent)]" />
                    <span className="text-xs font-bold text-[var(--madrasa-accent)]">
                      {slot.time}
                    </span>
                  </div>
                  <span className="text-sm text-gray-800 font-medium">
                    {slot.activity}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="bg-[var(--madrasa-primary)]/5 px-6 py-4 border-t border-gray-100">
              <p className="text-xs text-gray-600">
                * This timetable may be adjusted for special events, Islamic
                holidays, or examination periods.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-700 text-sm mb-5">
              Want to enrol your child?
            </p>
            <Link
              href="/madrasa/admissions"
              className="btn-primary btn-madrasa"
            >
              Register Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
