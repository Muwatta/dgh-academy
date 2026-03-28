import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SchoolNavbar from "@/components/school/SchoolNavbar";
import SchoolFooter from "@/components/school/SchoolFooter";
import {
  schoolInfo, administrator, schoolHistory,
  schoolVision, schoolMission, coreValues, specialInitiatives
} from "@/data/school";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the history, vision, mission and values of Dr. Gambo Hamza Islamic Academy — Jos, Plateau State.",
};

export default function AboutPage() {
  return (
    <>
      <SchoolNavbar />
      <main>
        {/* Page hero */}
        <section className="school-gradient pattern-islamic py-20">
          <div className="container">
            <div className="section-tag bg-[var(--school-accent)]/15 text-[var(--school-accent)]">About the School</div>
            <h1 className="font-amiri text-5xl font-bold text-white mt-2 mb-4">Our Story & Heritage</h1>
            <p className="text-[var(--school-cream)]/70 max-w-xl">
              Founded in 2025 to honour the legacy of the late Dr. Gambo Hamza — a man who believed knowledge and character are inseparable.
            </p>
          </div>
        </section>

        {/* History */}
        <section className="py-20 bg-white">
          <div className="container max-w-4xl">
            <div className="section-tag bg-[var(--school-cream)] text-[var(--school-primary)]">Brief History</div>
            <h2 className="font-amiri text-4xl font-bold text-[var(--school-primary)] mb-8">The Story Behind the Academy</h2>
            {schoolHistory.split("\n\n").map((para, i) => (
              <p key={i} className="text-[var(--school-text-muted)] leading-relaxed mb-5">{para}</p>
            ))}
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-[var(--school-cream)]">
          <div className="container max-w-4xl grid md:grid-cols-2 gap-8">
            <div className="card border-t-4 border-[var(--school-primary)]">
              <div className="section-tag bg-[var(--school-cream)] text-[var(--school-primary)] text-xs">Vision</div>
              <p className="text-[var(--school-text-muted)] leading-relaxed text-sm">{schoolVision}</p>
            </div>
            <div className="card border-t-4 border-[var(--school-accent)]">
              <div className="section-tag bg-[var(--school-cream)] text-[var(--school-primary)] text-xs">Mission</div>
              <p className="text-[var(--school-text-muted)] leading-relaxed text-sm">{schoolMission}</p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="font-amiri text-4xl font-bold text-[var(--school-primary)] mb-10 text-center">Core Values</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {coreValues.map((v) => (
                <div key={v.title} className="card text-center">
                  <div className="font-bold text-[var(--school-primary)] mb-1">{v.title}</div>
                  <p className="text-xs text-[var(--school-text-muted)] leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Initiatives */}
        <section className="py-16 bg-[var(--school-primary)] pattern-islamic">
          <div className="container">
            <h2 className="font-amiri text-4xl font-bold text-white mb-10 text-center">Special Academic Initiatives</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {specialInitiatives.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white/8 rounded-lg p-4">
                  <CheckCircle2 size={16} className="text-[var(--school-accent)] shrink-0 mt-0.5" />
                  <span className="text-[var(--school-cream)] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Administrator */}
        <section className="py-16 bg-[var(--school-cream)]">
          <div className="container max-w-3xl text-center">
            <div className="section-tag bg-white text-[var(--school-primary)]">Leadership</div>
            <h2 className="font-amiri text-4xl font-bold text-[var(--school-primary)] mb-8">Meet Our Administrator</h2>
            <div className="card shadow-xl">
              <div className="w-20 h-20 rounded-full bg-[var(--school-primary)] flex items-center justify-center text-white font-amiri font-bold text-3xl mx-auto mb-4">S</div>
              <div className="font-bold text-[var(--school-primary)] text-xl mb-1">{administrator.name}</div>
              <div className="text-sm text-[var(--school-text-muted)] mb-6">{administrator.position}</div>
              <div className="font-amiri text-4xl text-[var(--school-accent)] leading-none mb-3">"</div>
              {administrator.message?.split("\n\n").slice(0, 2).map((para, i) => (
                <p key={i} className="text-[var(--school-text-muted)] leading-relaxed text-sm mb-3">{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white text-center">
          <div className="container">
            <h2 className="font-amiri text-3xl font-bold text-[var(--school-primary)] mb-4">Ready to Join Our Academy?</h2>
            <p className="text-[var(--school-text-muted)] mb-8">Apply for admission or reach out with any questions.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/admissions" className="btn-primary btn-school">Apply Now <ArrowRight size={16} /></Link>
              <Link href="/contact" className="btn-primary btn-school-outline">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <SchoolFooter />
    </>
  );
}
