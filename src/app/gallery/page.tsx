import type { Metadata } from "next";
import SchoolNavbar from "@/components/school/SchoolNavbar";
import SchoolFooter from "@/components/school/SchoolFooter";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of DGH Academy — classrooms, students, events and school life.",
};

// In production: fetch images from Sanity/Cloudinary/CMS
const placeholderImages = [
  { id: 1, alt: "School building exterior", caption: "Our School Building" },
  { id: 2, alt: "Classroom learning", caption: "Active Classroom Learning" },
  { id: 3, alt: "Students in uniform", caption: "Students in Uniform" },
  { id: 4, alt: "Playground", caption: "Playground & Recreation" },
  { id: 5, alt: "Assembly", caption: "Morning Assembly" },
  { id: 6, alt: "Teachers", caption: "Our Dedicated Teachers" },
  { id: 7, alt: "Quran class", caption: "Islamic Studies Session" },
  { id: 8, alt: "Madrasa evening", caption: "Evening Madrasa" },
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
            <h1 className="font-amiri text-5xl font-bold text-white mt-2 mb-4">Gallery</h1>
            <p className="text-[var(--school-cream)]/70 max-w-xl">
              A glimpse into the daily life, events and environment of DGH Academy.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {placeholderImages.map((img) => (
                <div
                  key={img.id}
                  className="group relative aspect-square bg-[var(--school-cream)] rounded-xl overflow-hidden border border-[var(--school-cream-dark)] hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
                >
                  {/* Placeholder — replace with next/image in production */}
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--school-primary)]/15 flex items-center justify-center mb-3">
                      <span className="text-[var(--school-primary)] text-xl">📷</span>
                    </div>
                    <span className="text-xs font-medium text-[var(--school-text-muted)]">
                      {img.caption}
                    </span>
                  </div>
                  {/* Hover overlay */}
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
