import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Moon } from "lucide-react";

export const metadata: Metadata = {
  title: "Timetable | DGH Madrasa",
  description:
    "DGH Madrasa daily timetable — evening sessions from 3:00pm to 5:00pm, Monday–Friday.",
};

// Hardcoded timetable to ensure consistency with 3pm–5pm session
const madrasaTimetable = [
  { time: "3:00 PM – 3:15 PM", activity: "Opening Du'as & Revision" },
  {
    time: "3:15 PM – 3:45 PM",
    activity: "Quran Recitation (Tajweed & Tilawah)",
  },
  { time: "3:45 PM – 4:15 PM", activity: "Hifz / Memorisation (New Lesson)" },
  { time: "4:15 PM – 4:30 PM", activity: "Islamic Studies / Seerah" },
  {
    time: "4:30 PM – 4:50 PM",
    activity: "Arabic Language (Reading & Writing)",
  },
  { time: "4:50 PM – 5:00 PM", activity: "Review & Closing Du'as" },
];

const sessionHours = "3:00pm – 5:00pm";
const sessionDays = "Monday – Friday";

export default function MadrasaTimetablePage() {
  return (
    <>
      {/* Hero */}
      <section className="madrasa-gradient pattern-geometric py-20">
        <div className="container">
          <div className="section-tag bg-[var(--madrasa-accent)]/20 text-[var(--madrasa-accent)]">
            Schedule
          </div>
          <h1 className="font-amiri text-5xl font-bold text-white mt-2 mb-4 drop-shadow-md">
            Daily Timetable
          </h1>
          <p className="text-papayawhip/80 max-w-md text-sm drop-shadow-sm">
            Our structured evening session runs {sessionHours}, {sessionDays}.
          </p>
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
