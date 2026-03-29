import type { Metadata } from "next";
import SchoolNavbar from "@/components/school/SchoolNavbar";
import SchoolFooter from "@/components/school/SchoolFooter";
import { ArrowRight } from "lucide-react";
import { admissionRequirements, entryClasses, schoolInfo } from "@/data/school";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply for admission to Dr. Gambo Hamza Islamic Academy. Open to Toddler through Basic 4.",
};

export default function AdmissionsPage() {
  return (
    <>
      <SchoolNavbar />
      <main>
        <section className="school-gradient pattern-islamic py-20">
          <div className="container">
            <div className="section-tag bg-[var(--school-accent)]/15 text-[var(--school-accent)]">
              Join Us
            </div>
            <h1 className="font-amiri text-5xl font-bold text-white mt-2 mb-4">
              Admissions
            </h1>
            <p className="text-[var(--school-cream)]/70 max-w-xl">
              We welcome applications for all classes from Toddler to Basic 4.
              Follow the steps below to secure your child's place.
            </p>
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

                <div className="mt-6 p-4 bg-[var(--school-primary)] rounded-xl text-[var(--school-cream)]">
                  <div className="font-bold mb-1">
                    Questions? Contact the School Administrator
                  </div>
                  <div className="text-sm opacity-80">
                    📞 {schoolInfo.phone}
                  </div>
                  <div className="text-sm opacity-80">
                    ✉️ {schoolInfo.email}
                  </div>
                </div>
              </div>

              {/* Full Enrolment Form */}
              <div className="card shadow-xl">
                <h2 className="font-amiri text-2xl font-bold text-[var(--school-primary)] mb-6">
                  Enrolment Application Form
                </h2>
                <form className="space-y-5">
                  <div>
                    <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                      Parent / Guardian Full Name *
                    </label>
                    <input
                      type="text"
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
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] bg-white transition-colors"
                      >
                        <option value="">Select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                        Class Applying For *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] bg-white transition-colors"
                      >
                        <option value="">Select class</option>
                        {entryClasses.map((c) => (
                          <option key={c}>{c}</option>
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                      Additional Information
                    </label>
                    <textarea
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
