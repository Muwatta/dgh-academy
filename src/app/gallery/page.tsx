import type { Metadata } from "next";
import SchoolNavbar from "@/components/school/SchoolNavbar";
import SchoolFooter from "@/components/school/SchoolFooter";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of DGH Academy — classrooms, students, events and school life.",
};

import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "/images/class1_dgh.jpg",
    alt: "Classroom activity",
    caption: "Active Classroom Learning",
    title: "Interactive Learning",
    description: "Kids engage in group work with dedicated teachers.",
    tag: "Classroom",
    date: "March 2026",
  },
  {
    id: 2,
    src: "/images/library_dgh.jpg",
    alt: "School library",
    caption: "Library Time",
    title: "Books & Curiosity",
    description: "A quiet library corner for reading and research.",
    tag: "Library",
    date: "February 2026",
  },
  {
    id: 3,
    src: "/images/uniform_dgh.jpg",
    alt: "Students in uniform",
    caption: "Students in Uniform",
  },
  {
    id: 4,
    src: "/images/playground_dgh.jpg",
    alt: "Playground and recreation",
    caption: "Playground & Recreation",
  },
  {
    id: 5,
    src: "/images/enviroment_dgh.jpg",
    alt: "School grounds",
    caption: "School Grounds",
  },
  {
    id: 6,
    src: "/images/founder_dgh.jpg",
    alt: "Founder portrait",
    caption: "Our Founder",
  },
  {
    id: 7,
    src: "/images/enviroment1_dgh.jpg",
    alt: "Students learning outside",
    caption: "Outdoor Learning",
  },
  {
    id: 8,
    src: "/images/f_uniform_dgh.jpg",
    alt: "Uniform selection",
    caption: "Uniform Day",
    title: "School Pride",
    description:
      "Students proudly wearing academy uniform during morning assembly.",
    tag: "Culture",
    date: "January 2026",
  },
];

export default function GalleryPage() {
  return (
    <>
      <SchoolNavbar />
      <main>
        <section className="school-gradient pattern-islamic py-20">
          <div className="container">
            <div className="section-tag bg-[var(--school-accent)]/15 text-[var(--school-accent)]">
              Our School Life
            </div>
            <h1 className="font-amiri text-5xl font-bold text-white mt-2 mb-4">
              Gallery
            </h1>
            <p className="text-[var(--school-cream)]/70 max-w-xl">
              A glimpse into the daily life, events and environment of DGH
              Academy.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-[var(--school-primary)]">
                Featured Moments
              </h2>
              <p className="text-[var(--school-text-muted)] mt-2 max-w-2xl mx-auto">
                Explore the best memories from our school community and events
                across the year.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--school-cream-dark)] hover:border-[var(--school-primary)] shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-72">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                      loading={img.id <= 4 ? "eager" : "lazy"}
                      priority={img.id <= 4}
                    />
                  </div>

                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between mb-2 text-xs text-[var(--school-text-muted)]">
                      <span className="font-semibold text-[var(--school-primary)]">
                        {img.tag}
                      </span>
                      <span>{img.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--school-primary)] mb-1">
                      {img.title ?? img.caption}
                    </h3>
                    <p className="text-[var(--school-text-muted)] text-sm mb-3">
                      {img.description ?? img.caption}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--school-secondary)] text-xs">
                        {img.caption}
                      </span>
                      <span className="text-[var(--school-primary)] font-semibold text-xs">
                        View
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center bg-[var(--school-cream)] rounded-2xl p-8">
              <p className="text-[var(--school-text-muted)] text-sm">
                📸 More photos coming soon. Follow us on{" "}
                <a
                  href="https://www.facebook.com/share/1L9JNy5zyr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--school-primary)] font-bold hover:underline"
                >
                  Facebook
                </a>{" "}
                for regular updates.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SchoolFooter />
    </>
  );
}
