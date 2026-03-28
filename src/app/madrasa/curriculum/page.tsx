import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { madrasaPrograms, madrasaTimetable } from "@/data/madrasa";

export const metadata: Metadata = {
  title: "Curriculum",
  description: "Explore the DGH Madrasa curriculum — Quran recitation, Hifz, Arabic language and Islamic studies in Jos.",
};

export default function MadrasaCurriculumPage() {
  return (
    <>
      {/* Hero */}
      <section className="madrasa-gradient pattern-geometric py-20">
        <div className="container">
          <div className="font-amiri text-[var(--madrasa-accent)] text-xl mb-3">
            اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
          </div>
          <div className="section-tag bg-[var(--madrasa-accent)]/15 text-[var(--madrasa-accent)]">
            What We Teach
          </div>
          <h1 className="font-amiri text-5xl font-bold text-[var(--madrasa-ivory)] mt-2 mb-4">
            Madrasa Curriculum
          </h1>
          <p className="text-[var(--madrasa-ivory)]/60 max-w-xl text-sm">
            A structured, progressive Islamic education programme built around the Holy Quran, supporting every child from their first Alif to complete Hifz and beyond.
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-20 bg-[var(--madrasa-ivory)]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-tag bg-[var(--madrasa-primary)]/10 text-[var(--madrasa-primary)]">
              Our Programmes
            </div>
            <h2 className="font-amiri text-4xl font-bold text-[var(--madrasa-primary)] mb-3">
              Subjects Offered
            </h2>
            <p className="text-[var(--madrasa-text-muted)] max-w-xl mx-auto text-sm">
              Each programme is taught by qualified Mallams with age-appropriate methods, ensuring every child progresses at the right pace.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {madrasaPrograms.map((prog, i) => (
              <div
                key={prog.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-[var(--madrasa-primary)] flex items-center justify-center text-[var(--madrasa-accent)]">
                    <BookOpen size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                    <h3 className="font-bold text-[var(--madrasa-primary)] text-xl font-amiri">
                      {prog.title}
                    </h3>
                    {prog.levels && (
                      <div className="flex flex-wrap gap-1.5">
                        {prog.levels.map((l) => (
                          <span
                            key={l}
                            className="text-xs px-3 py-1 bg-[var(--madrasa-primary)]/8 text-[var(--madrasa-primary)] rounded-full font-semibold"
                          >
                            {l}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-[var(--madrasa-text-muted)] text-sm leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Timetable */}
      <section className="py-20 bg-[var(--madrasa-primary)] pattern-geometric">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <div className="section-tag bg-[var(--madrasa-accent)]/15 text-[var(--madrasa-accent)]">
              Daily Schedule
            </div>
            <h2 className="font-amiri text-4xl font-bold text-[var(--madrasa-ivory)]">
              Daily Timetable
            </h2>
          </div>

          <div className="space-y-3">
            {madrasaTimetable.map((slot, i) => (
              <div
                key={slot.time}
                className={`flex items-center gap-5 rounded-xl p-5 ${
                  i % 2 === 0
                    ? "bg-white/10 border border-white/10"
                    : "bg-[var(--madrasa-accent)]/10 border border-[var(--madrasa-accent)]/20"
                }`}
              >
                <div className="flex items-center gap-2 shrink-0">
                  <Clock
                    size={14}
                    className="text-[var(--madrasa-accent)]"
                  />
                  <span className="font-bold text-[var(--madrasa-accent)] text-sm whitespace-nowrap">
                    {slot.time}
                  </span>
                </div>
                <div className="h-5 w-px bg-white/20" />
                <span className="text-[var(--madrasa-ivory)]/80 text-sm">
                  {slot.activity}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-[var(--madrasa-ivory)]/40 text-xs mt-8">
            * Timetable is subject to periodic review. Contact the Madrasa for the latest schedule.
          </p>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 bg-[var(--madrasa-ivory)]">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="section-tag bg-[var(--madrasa-primary)]/10 text-[var(--madrasa-primary)]">
              Our Approach
            </div>
            <h2 className="font-amiri text-4xl font-bold text-[var(--madrasa-primary)]">
              How We Teach
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Noorani Qaida Method",
                desc: "Beginners learn through the structured Noorani Qaida system — a proven method for correct Tajweed from day one.",
              },
              {
                title: "Personalised Progress Tracking",
                desc: "Each student's Quran progress is individually tracked. Parents receive regular feedback on their child's advancement.",
              },
              {
                title: "Repetition & Revision",
                desc: "Daily revision sessions reinforce memorisation. Students review previous lessons before moving to new ones.",
              },
              {
                title: "Small Group & 1-on-1",
                desc: "Small class sizes allow Mallams to give individual attention, correcting recitation and pronunciation in real time.",
              },
              {
                title: "Reward & Motivation System",
                desc: "Students are recognised and celebrated for milestones — completing a Juz, a Surah, or correct recitation of new rules.",
              },
              {
                title: "Parent Involvement",
                desc: "Parents are encouraged to support revision at home. The Madrasa provides guidance on how parents can help.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="font-bold text-[var(--madrasa-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--madrasa-text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="container">
          <h2 className="font-amiri text-3xl font-bold text-[var(--madrasa-primary)] mb-4">
            Ready to Begin the Journey?
          </h2>
          <p className="text-[var(--madrasa-text-muted)] mb-8 max-w-md mx-auto text-sm">
            Enrol your child in the DGH Madrasa and give them the gift of the Quran.
          </p>
          <Link
            href="/madrasa/admissions"
            className="btn-primary btn-madrasa"
          >
            Enrol Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
