import type { Metadata } from "next";
import SchoolNavbar from "@/components/school/SchoolNavbar";
import SchoolFooter from "@/components/school/SchoolFooter";
import GalleryHero from "@/components/school/GalleryHero";

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
  },
  {
    id: 2,
    src: "/images/library_dgh.jpg",
    alt: "School library",
    caption: "Library Time",
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

        <GalleryHero />

        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  className="group relative aspect-square rounded-xl overflow-hidden border border-[var(--school-cream-dark)] hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    loading={img.id <= 4 ? "eager" : "lazy"}
                    priority={img.id <= 4}
                  />

                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-[var(--school-cream)] text-sm font-semibold">
                      {img.caption}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-[var(--school-primary)]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-bold text-center px-3">
                      {img.caption}
                    </span>
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
