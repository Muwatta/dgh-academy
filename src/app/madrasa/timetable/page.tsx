import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Moon } from "lucide-react";
import { madrasaTimetable, madrasaInfo } from "@/data/madrasa";

export const metadata: Metadata = {
  title: "Timetable",
  description: "DGH Madrasa daily timetable — evening sessions from 4:00pm to 7:00pm.",
};

export default function MadrasaTimetablePage() {
  return (
    <>
      <section className="madrasa-gradient pattern-geometric py-20">
        <div className="container">
          <div className="section-tag bg-[var(--madrasa-accent)]/15 text-[var(--madrasa-accent)]">
            Schedule
          </div>
          <h1 className="font-amiri text-5xl font-bold text-[var(--madrasa-ivory)] mt-2 mb-4">
            Daily Timetable
          </h1>
          <p className="text-[var(--madrasa-ivory)]/60 max-w-md text-sm">
            Our structured evening session runs {madrasaInfo.hours},{" "}
            {madrasaInfo.days}.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[var(--madrasa-ivory)]">
        <div className="container max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-[var(--madrasa-primary)] px-6 py-5 flex items-center gap-3">
              <Moon size={20} className="text-[var(--madrasa-accent)]" />
              <div>
                <div className="font-bold text-[var(--madrasa-ivory)]">
                  Evening Session
                </div>
                <div className="text-xs text-[var(--madrasa-ivory)]/50">
                  {madrasaInfo.hours} · {madrasaInfo.days}
                </div>
              </div>
            </div>

            {/* Slots */}
            <div className="divide-y divide-gray-50">
              {madrasaTimetable.map((slot, i) => (
                <div
                  key={slot.time}
                  className={`flex items-center gap-4 px-6 py-5 ${
                    i % 2 === 0 ? "bg-white" : "bg-[var(--madrasa-ivory)]"
                  }`}
                >
                  <div className="flex items-center gap-2 w-44 shrink-0">
                    <Clock
                      size={13}
                      className="text-[var(--madrasa-accent)]"
                    />
                    <span className="text-xs font-bold text-[var(--madrasa-accent)]">
                      {slot.time}
                    </span>
                  </div>
                  <span className="text-sm text-[var(--madrasa-primary)] font-medium">
                    {slot.activity}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="bg-[var(--madrasa-primary)]/5 px-6 py-4 border-t border-gray-100">
              <p className="text-xs text-[var(--madrasa-text-muted)]">
                * This timetable may be adjusted for special events, Islamic
                holidays, or examination periods.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-[var(--madrasa-text-muted)] text-sm mb-5">
              Want to enrol your child?
            </p>
            <Link href="/madrasa/admissions" className="btn-primary btn-madrasa">
              Register Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
