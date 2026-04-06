import type { Metadata } from "next";
import SchoolNavbar from "@/components/school/SchoolNavbar";
import SchoolFooter from "@/components/school/SchoolFooter";
import { ArrowRight } from "lucide-react";
import { admissionRequirements, entryClasses, schoolInfo } from "@/data/school";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply for admission to Dr. Gambo Hamza Islamic Academy. Open to Toddler through Basic 5.",
};

export default function AdmissionsPage() {
  return (
    <>
      <SchoolNavbar />
      <main>
        <section className="relative school-gradient pattern-islamic py-24 overflow-hidden">
          {/* overlay for contrast */}
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="container relative z-10">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--school-accent)]/10 text-white text-lg font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[var(--school-accent)]"></span>
              Join Us
            </div>

            {/* Heading */}
            <h1 className="font-amiri text-4xl md:text-5xl font-semibold text-[var(--school-cream)] mt-6 leading-tight max-w-2xl">
              Admissions
            </h1>

            {/* Accent line */}
            <div className="w-14 h-[2px] bg-[var(--school-accent)] mt-4"></div>

            {/* Description */}
            <p className="mt-6 text-base md:text-lg text-[var(--school-cream)]/80 max-w-xl leading-relaxed">
              We welcome applications for all classes from Toddler to Basic 5.
              Follow the steps below to secure your child’s place.
            </p>

            {/* Optional CTA */}
            <div className="mt-8">
              <button className="px-6 py-3 bg-[var(--school-accent)] text-white rounded-md text-sm font-medium hover:opacity-90 transition">
                Start Application
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Requirements */}
              <div>
                <div className="section-tag bg-[var(--school-cream)] text-[var(--school-primary)]">
                  Requirements
                </div>
                <h2 className="font-amiri text-3xl font-bold text-[var(--school-primary)] mb-6">
                  What You Need
                </h2>
                <ul className="space-y-4 mb-8">
                  {admissionRequirements.map((req, i) => (
                    <li key={req} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-full bg-[var(--school-primary)] text-white text-xs flex items-center justify-center font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-[var(--school-text-muted)] leading-relaxed">
                        {req}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="bg-[var(--school-cream)] rounded-xl p-6">
                  <h3 className="font-bold text-[var(--school-primary)] mb-3">
                    Available Entry Classes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {entryClasses.map((c) => (
                      <span
                        key={c}
                        className="text-sm px-4 py-1.5 bg-white text-[var(--school-primary)] rounded-full font-semibold border border-[var(--school-cream-dark)] shadow-sm"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Full Enrolment Form */}
              <div className="card shadow-xl">
                <h2 className="font-amiri text-2xl font-bold text-[var(--school-primary)] mb-6">
                  Enrolment Application Form
                </h2>
                <form
                  action="https://formspree.io/f/mdapylrr"
                  method="POST"
                  className="space-y-5"
                >
                  <div>
                    <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                      Parent / Guardian Full Name *
                    </label>
                    <input
                      type="text"
                      name="guardianName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                        Child's Full Name *
                      </label>
                      <input
                        type="text"
                        name="childName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="childDob"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                        Gender *
                      </label>
                      <select
                        name="gender"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] bg-white transition-colors"
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                        Class Applying For *
                      </label>
                      <select
                        name="classApplying"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] bg-white transition-colors"
                      >
                        <option value="">Select class</option>
                        {entryClasses.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                      Previous School (if any)
                    </label>
                    <input
                      type="text"
                      name="previousSchool"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                      Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] resize-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary btn-school w-full justify-center"
                  >
                    Submit Application <ArrowRight size={16} />
                  </button>
                  <p className="text-xs text-center text-[var(--school-text-muted)]">
                    We will contact you within 24–48 hours to confirm your
                    application.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SchoolFooter />
    </>
  );
}
