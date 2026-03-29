"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  {
    id: 1,
    src: "/images/class1_dgh.jpg",
    alt: "Students in class",
    caption: "Everyday Learning",
  },
  {
    id: 2,
    src: "/images/playground_dgh.jpg",
    alt: "Playground",
    caption: "Recess & Recreation",
  },
  {
    id: 3,
    src: "/images/library_dgh.jpg",
    alt: "Library reading",
    caption: "Library Hours",
  },
  {
    id: 4,
    src: "/images/enviroment_dgh.jpg",
    alt: "School grounds",
    caption: "Campus Life",
  },
  {
    id: 5,
    src: "/images/founder_dgh.jpg",
    alt: "Founding team",
    caption: "Our Leadership",
  },
];

export default function GalleryHero() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] py-16">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Gallery Highlights</h2>
          <p className="text-sm text-gray-600 mt-2">
            Sliding moments from school life
          </p>
        </div>

        <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
          {heroImages.map((img, idx) => (
            <div
              key={img.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === heroIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                loading={idx === heroIndex ? "eager" : "lazy"}
                priority={idx === heroIndex}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-lg font-semibold">{img.caption}</p>
              </div>
            </div>
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroIndex(idx)}
                className={`h-2 w-8 rounded-full transition-all ${
                  idx === heroIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to hero slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
