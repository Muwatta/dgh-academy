import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Moon,
  Star,
  Award,
  BookOpen,
  Users,
  Shield,
  Heart,
} from "lucide-react";
import SchoolNavbar from "@/components/school/SchoolNavbar";
import SchoolFooter from "@/components/school/SchoolFooter";
import GalleryHero from "@/components/school/GalleryHero";
import {
  schoolInfo,
  schoolStats,
  administrator,
  coreValues,
  academicPrograms,
  facilities,
  admissionRequirements,
  entryClasses,
  specialInitiatives,
} from "@/data/school";

const iconMap: Record<string, React.ReactNode> = {
  star: <Star size={20} />,
  shield: <Shield size={20} />,
  award: <Award size={20} />,
  heart: <Heart size={20} />,
  users: <Users size={20} />,
  "book-open": <BookOpen size={20} />,
  handshake: <Users size={20} />,
};

export default function HomePage() {
  return (
    <>
      <SchoolNavbar />
      <main id="top">
        {/* ── HERO (GalleryHero component) ── */}
        <GalleryHero />

        {/* ── STATS STRIP ── */}
        <section className="bg-[var(--school-cream)] border-b border-[var(--school-cream-dark)]">
          <div className="container py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {schoolStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold font-amiri text-[var(--school-primary)] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[var(--school-text-muted)] font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ABOUT SNIPPET ── */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="section-tag bg-[var(--school-cream)] text-[var(--school-primary)]">
                  About the School
                </div>
                <h2 className="font-amiri text-4xl md:text-5xl font-bold text-[var(--school-primary)] mb-6 leading-tight">
                  Building Tomorrow's Leaders Today
                </h2>
                <p className="text-[var(--school-text-muted)] leading-relaxed mb-4">
                  Dr. Gambo Hamza Islamic Academy is a private educational
                  institution located in Gangare, Jos, Plateau State.
                  Established in 2025 by the children of the late Dr. Gambo
                  Hamza, the Academy fulfils his lifelong dream of building a
                  community grounded in knowledge, discipline, and upright
                  character.
                </p>
                <p className="text-[var(--school-text-muted)] leading-relaxed mb-8">
                  Our school offers the Nigerian & British curriculum for
                  Nursery and Primary levels, integrating robust Islamic
                  education and ICT/Coding programmes in a nurturing,
                  small-class environment.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    "Nigerian & British Curriculum",
                    "Small Class Sizes",
                    "ICT & Coding",
                    "Islamic Studies",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1.5 bg-[var(--school-cream)] text-[var(--school-primary)] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/about" className="btn-primary btn-school">
                  Read Our Story <ArrowRight size={16} />
                </Link>
              </div>

              {/* Vision & Mission cards */}
              <div className="space-y-5">
                <div className="card border-l-4 border-[var(--school-primary)]">
                  <div className="section-tag bg-[var(--school-cream)] text-[var(--school-primary)] text-xs mb-2">
                    Our Vision
                  </div>
                  <p className="text-[var(--school-text-muted)] text-sm leading-relaxed">
                    To be a distinguished academy where students excel
                    academically, morally and spiritually, embodying the
                    teachings of Islam while contributing positively to their
                    local and global communities.
                  </p>
                </div>
                <div className="card border-l-4 border-[var(--school-accent)]">
                  <div className="section-tag bg-[var(--school-cream)] text-[var(--school-primary)] text-xs mb-2">
                    Our Mission
                  </div>
                  <p className="text-[var(--school-text-muted)] text-sm leading-relaxed">
                    To provide a nurturing and inclusive learning environment
                    that integrates high-quality conventional education with a
                    deep understanding of Islamic values, empowering students to
                    become knowledgeable, ethical and productive members of
                    society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section className="py-20 bg-[var(--school-cream)] pattern-islamic">
          <div className="container">
            <div className="text-center mb-12">
              <div className="section-tag bg-white text-[var(--school-primary)]">
                What We Stand For
              </div>
              <h2 className="font-amiri text-4xl font-bold text-[var(--school-primary)]">
                Our Core Values
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="card text-center group hover:bg-[var(--school-primary)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--school-cream)] group-hover:bg-[var(--school-accent)]/20 flex items-center justify-center mx-auto mb-4 text-[var(--school-primary)] group-hover:text-[var(--school-accent)] transition-colors">
                    {iconMap[value.icon] || <Star size={20} />}
                  </div>
                  <h3 className="font-bold text-[var(--school-primary)] group-hover:text-[var(--school-accent)] mb-2 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-xs text-[var(--school-text-muted)] group-hover:text-[var(--school-cream)]/70 leading-relaxed transition-colors">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ACADEMIC PROGRAMS ── */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <div className="section-tag bg-[var(--school-cream)] text-[var(--school-primary)]">
                Academics
              </div>
              <h2 className="font-amiri text-4xl font-bold text-[var(--school-primary)] mb-3">
                Academic Programmes
              </h2>
              <p className="text-[var(--school-text-muted)] max-w-xl mx-auto">
                From Toddler to Basic 4, our programmes blend academic rigour
                with strong Islamic foundations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicPrograms.map((prog) => (
                <div key={prog.title} className="card group">
                  <div className="w-10 h-10 rounded-lg bg-[var(--school-cream)] flex items-center justify-center text-[var(--school-primary)] mb-4 group-hover:bg-[var(--school-primary)] group-hover:text-white transition-all">
                    <BookOpen size={18} />
                  </div>
                  <h3 className="font-bold text-[var(--school-primary)] mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-[var(--school-text-muted)] leading-relaxed mb-3">
                    {prog.description}
                  </p>
                  {prog.levels && (
                    <div className="flex flex-wrap gap-1.5">
                      {prog.levels.map((l) => (
                        <span
                          key={l}
                          className="text-xs px-2 py-0.5 bg-[var(--school-cream)] text-[var(--school-primary)] rounded-full font-medium"
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPECIAL INITIATIVES ── */}
        <section className="py-16 bg-[var(--school-primary)] pattern-islamic">
          <div className="container">
            <div className="text-center mb-10">
              <div className="section-tag bg-white/10 text-[var(--school-accent)]">
                What Makes Us Different
              </div>
              <h2 className="font-amiri text-4xl font-bold text-white">
                Special Academic Initiatives
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialInitiatives.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-white/8 rounded-lg p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[var(--school-accent)] shrink-0 mt-0.5"
                  />
                  <span className="text-[var(--school-cream)] text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FACILITIES ── */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <div className="section-tag bg-[var(--school-cream)] text-[var(--school-primary)]">
                Infrastructure
              </div>
              <h2 className="font-amiri text-4xl font-bold text-[var(--school-primary)]">
                School Facilities
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {facilities.map((f) => (
                <div key={f.name} className="facility-card">
                  <div className="facility-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-semibold">{f.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ADMINISTRATOR MESSAGE ── */}
        <section className="py-20 bg-[var(--school-cream)]">
          <div className="container max-w-4xl">
            <div className="text-center mb-10">
              <div className="section-tag bg-white text-[var(--school-primary)]">
                Leadership
              </div>
              <h2 className="font-amiri text-4xl font-bold text-[var(--school-primary)]">
                A Word from Our Administrator
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--school-cream)] rounded-bl-full opacity-50" />
              <div className="relative">
                <div className="font-amiri text-6xl text-[var(--school-accent)] leading-none mb-4">
                  "
                </div>
                <p className="text-[var(--school-text-muted)] leading-relaxed mb-8 text-base">
                  It gives me great pleasure to welcome you to Dr. Gambo Hamza
                  Islamic Academy, a school founded on the noble vision of
                  promoting knowledge, discipline, and upright character in our
                  children. At our Academy, we are committed to providing a
                  balanced education that combines sound academic excellence
                  with strong Islamic values...
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[var(--school-primary)] flex items-center justify-center text-white font-amiri font-bold text-xl">
                    S
                  </div>
                  <div>
                    <div className="font-bold text-[var(--school-primary)]">
                      {administrator.name}
                    </div>
                    <div className="text-sm text-[var(--school-text-muted)]">
                      {administrator.position}, {schoolInfo.shortName}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ADMISSIONS CTA ── */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Requirements */}
              <div>
                <div className="section-tag bg-[var(--school-cream)] text-[var(--school-primary)]">
                  How to Enrol
                </div>
                <h2 className="font-amiri text-4xl font-bold text-[var(--school-primary)] mb-6">
                  Admission Requirements
                </h2>
                <ul className="space-y-3 mb-8">
                  {admissionRequirements.map((req, i) => (
                    <li key={req} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[var(--school-primary)] text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-[var(--school-text-muted)] text-sm">
                        {req}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-[var(--school-cream)] rounded-lg">
                  <div className="text-sm font-bold text-[var(--school-primary)] mb-2">
                    Entry Classes Available
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {entryClasses.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-3 py-1 bg-white text-[var(--school-primary)] rounded-full font-semibold border border-[var(--school-cream-dark)]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enquiry form */}
              <div className="card shadow-xl">
                <h3 className="font-amiri text-2xl font-bold text-[var(--school-primary)] mb-6">
                  Make an Enquiry
                </h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                        Parent Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="08XXXXXXXXX"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                      Child's Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Child's full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                        Child's Age *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 5 years"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">
                        Class Interested In *
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors bg-white">
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
                      Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any questions or additional info..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary btn-school w-full justify-center"
                  >
                    Send Enquiry <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── MADRASA SWITCHER BANNER ── */}
        <section className="py-16 bg-[var(--madrasa-primary)] pattern-geometric">
          <div className="container text-center">
            <Moon
              size={40}
              className="text-[var(--madrasa-accent)] mx-auto mb-4"
            />
            <h2 className="font-amiri text-4xl font-bold text-white mb-3">
              Also Looking for Evening Madrasa?
            </h2>
            <p className="text-[var(--madrasa-ivory)]/70 mb-8 max-w-xl mx-auto">
              DGH Academy also runs a dedicated Madrasa from 4:00pm – 7:00pm
              offering Quran recitation, Hifz, Arabic language and Islamic
              Studies.
            </p>
            <Link href="/madrasa" className="btn-primary btn-madrasa">
              Visit DGH Madrasa <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="py-16 bg-[var(--school-cream)]">
          <div className="container">
            <div className="grid sm:grid-cols-3 gap-6">
              <a
                href={`tel:${schoolInfo.phone}`}
                className="card text-center group hover:bg-[var(--school-primary)]"
              >
                <Phone
                  size={24}
                  className="text-[var(--school-primary)] group-hover:text-[var(--school-accent)] mx-auto mb-3 transition-colors"
                />
                <div className="font-bold text-[var(--school-primary)] group-hover:text-white mb-1 transition-colors">
                  Call / WhatsApp
                </div>
                <div className="text-sm text-[var(--school-text-muted)] group-hover:text-white/70 transition-colors">
                  {schoolInfo.phone}
                </div>
              </a>
              <a
                href={`mailto:${schoolInfo.email}`}
                className="card text-center group hover:bg-[var(--school-primary)]"
              >
                <Mail
                  size={24}
                  className="text-[var(--school-primary)] group-hover:text-[var(--school-accent)] mx-auto mb-3 transition-colors"
                />
                <div className="font-bold text-[var(--school-primary)] group-hover:text-white mb-1 transition-colors">
                  Email Us
                </div>
                <div className="text-xs text-[var(--school-text-muted)] group-hover:text-white/70 transition-colors break-all">
                  {schoolInfo.email}
                </div>
              </a>
              <a
                href={schoolInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card text-center group hover:bg-[var(--school-primary)]"
              >
                <MapPin
                  size={24}
                  className="text-[var(--school-primary)] group-hover:text-[var(--school-accent)] mx-auto mb-3 transition-colors"
                />
                <div className="font-bold text-[var(--school-primary)] group-hover:text-white mb-1 transition-colors">
                  Find Us
                </div>
                <div className="text-sm text-[var(--school-text-muted)] group-hover:text-white/70 transition-colors">
                  {schoolInfo.address}
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SchoolFooter />
    </>
  );
}
