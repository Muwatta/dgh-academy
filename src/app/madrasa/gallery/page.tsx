import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | DGHI Madrasa",
  description:
    "A visual showcase of DGHI Madrasa activities, student life, and learning moments.",
};

const galleryImages = [
  {
    id: 1,
    src: "/images/madrasa-overview.jpg",
    alt: "Overview of madrasa students",
    caption: "Together in Learning",
    title: "Madrasa Assembly",
    description:
      "Students begin each session with Quran recitation and positive community energy.",
    tag: "Community",
    date: "April 2026",
  },
  {
    id: 3,
    src: "/images/madrasa-student.jpg",
    alt: "A madrasa student studying",
    caption: "Focused Study",
    title: "Quiet Classroom Time",
    description:
      "A learner concentrates on Quranic lessons in a calm, respectful environment.",
    tag: "Study",
    date: "March 2026",
  },
  {
    id: 6,
    src: "/images/toddlers-class.jpg",
    alt: "Toddlers learning in their class",
    caption: "Early Foundations",
    title: "Early Years Learning",
    description:
      "Young learners begin with gentle lessons that foster curiosity and confidence.",
    tag: "Foundation",
    date: "March 2026",
  },
  {
    id: 8,
    src: "/images/madrasa-student-2.jpg",
    alt: "Madrasa student standing in the classroom",
    caption: "Active Participation",
    title: "Classroom Engagement",
    description:
      "Pupils share ideas, answer questions and engage actively with their Mallams.",
    tag: "Engagement",
    date: "March 2026",
  },
];

export default function MadrasaGalleryPage() {
  return (
    <>
      <section className="relative madrasa-gradient pattern-geometric py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--madrasa-accent)]/10 text-[var(--madrasa-accent)] text-xs uppercase tracking-[0.35em] font-semibold">
            <Camera size={16} /> Madrasa Showcase
          </div>
          <h1 className="font-amiri text-5xl md:text-6xl font-bold text-white mt-8 max-w-3xl leading-tight">
            A Galore of Madrasa Moments
          </h1>
          <p className="mt-6 max-w-2xl text-sm md:text-base text-white/80 leading-relaxed">
            Explore a curated visual tour of DGHI Madrasa — from daily classroom
            learning to community character-building activities.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-white text-sm font-semibold uppercase tracking-wide">
            View highlights <ArrowRight size={16} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--madrasa-ivory)]">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="font-amiri text-4xl font-bold text-[var(--madrasa-primary)]">
              Featured Madrasa Gallery
            </h2>
            <p className="mt-3 text-sm md:text-base text-[var(--madrasa-text-muted)] max-w-2xl mx-auto leading-relaxed">
              A selection of real madrasa activities and learning moments to
              help parents and visitors see our daily environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-72">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={item.id <= 3}
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--madrasa-accent)] mb-3">
                    {item.tag}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--madrasa-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--madrasa-text-muted)] mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[var(--madrasa-text-muted)]">
                    <span>{item.date}</span>
                    <span className="font-semibold text-[var(--madrasa-accent)]">
                      {item.caption}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
