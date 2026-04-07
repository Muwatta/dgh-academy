import type { Metadata } from "next";
import SchoolNavbar from "@/components/school/SchoolNavbar";
import SchoolFooter from "@/components/school/SchoolFooter";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of DGHI Academy — classrooms, students, events and school life.",
};

import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "/images/madrasa-overview.jpg",
    alt: "Overview of madrasa students",
    caption: "Daily Assembly",
    title: "School Community",
    description:
      "Pupils gather together for morning assembly, Quran recitation and campus announcements.",
    tag: "Community",
    date: "February 2026",
  },
  {
    id: 2,
    src: "/images/ict-class.jpg",
    alt: "Students during ICT class",
    caption: "Digital Learning",
    title: "ICT Class",
    description:
      "Children learn computer skills that prepare them for a technology-driven world.",
    tag: "Tech",
    date: "Feb 2026",
  },
  {
    id: 3,
    src: "/images/coding-session.jpg",
    alt: "Students coding with Pictoblox",
    caption: "Coding Session",
    title: "Pictoblox Class",
    description:
      "A creative technology lesson where pupils build projects and solve problems.",
    tag: "STEM",
    date: "March 2026",
  },
  {
    id: 4,
    src: "/images/madrasa-student.jpg",
    alt: "A madrasa student studying",
    caption: "Focused Learning",
    title: "Classroom Study",
    description: "First day in DGHI Academy enviroment",
    tag: "Study",
    date: "March 2026",
  },
  {
    id: 5,
    src: "/images/madrasa-student-2.jpg",
    alt: "Madrasa student standing in the classroom",
    caption: "Active Participation",
    title: "Student Engagement",
    description:
      "Excitement as his first day at DGHI Academy begins with a warm welcome and new friendships.",
    tag: "Engagement",
    date: "March 2026",
  },
  {
    id: 6,
    src: "/images/pupil-standing.jpg",
    alt: "Female pupil standing with confidence",
    caption: "Inspired Learner",
    title: "Student Confidence",
    description:
      "Young learners gain confidence through speaking, reading and leadership opportunities.",
    tag: "Character",
    date: "Feb 2026",
  },
  {
    id: 7,
    src: "/images/pupil-staircase.jpg",
    alt: "Female pupil on the staircase",
    caption: "Campus Welcome",
    title: "School Arrival",
    description:
      "Pupils arrive happily on campus, ready to begin the day with purpose and energy.",
    tag: "Welcome",
    date: "Feb 2026",
  },
  {
    id: 8,
    src: "/images/pupils-walkway.jpg",
    alt: "Pupils smiling on the walkway",
    caption: "Happy Walkway",
    title: "Campus Life",
    description:
      "Students enjoy friendly moments while moving between lessons and activities.",
    tag: "Life",
    date: "Feb 2026",
  },
  {
    id: 9,
    src: "/images/game-session.jpg",
    alt: "Pupils playing during a game session",
    caption: "Playtime",
    title: "Recess & Teamwork",
    description:
      "Recess activities help students grow physically and socially in a caring setting.",
    tag: "Wellbeing",
    date: "Feb 2026",
  },
  {
    id: 10,
    src: "/images/toddlers-swing.jpg",
    alt: "Toddlers playing with a swing",
    caption: "Early Play",
    title: "Foundation Play",
    description:
      "Young learners enjoy playful movement that builds coordination and confidence.",
    tag: "Early Years",
    date: "March 2026",
  },
  {
    id: 11,
    src: "/images/toddlers-class.jpg",
    alt: "Toddlers learning in their class",
    caption: "Tiny Classrooms",
    title: "Early Learning",
    description:
      "Our early years programme supports young children with gentle, age-appropriate lessons.",
    tag: "Foundation",
    date: "March 2026",
  },
  {
    id: 12,
    src: "/images/staff-training.jpg",
    alt: "Staff training session",
    caption: "Teacher Growth",
    title: "Staff Development",
    description:
      "Our teachers strengthen their skills through regular professional development sessions.",
    tag: "Growth",
    date: "September 2026",
  },
  {
    id: 13,
    src: "/images/school-wall.jpg",
    alt: "School wall with the school name",
    caption: "School Identity",
    title: "Campus Entrance",
    description:
      "The school entrance proudly displays our academy name and commitment to excellence.",
    tag: "Campus",
    date: "February 2026",
  },
  {
    id: 14,
    src: "/images/playground_dgh.jpg",
    alt: "Outdoor school activity",
    caption: "Playground Fun",
    title: "Outdoor Recreation",
    description:
      "Our playground provides a safe place for children to play, learn and grow together.",
    tag: "Wellbeing",
    date: "March 2026",
  },
  {
    id: 15,
    src: "/images/logo_dgh.jpg",
    alt: "School logo",
    caption: "Our Emblem",
    title: "School Logo",
    description:
      "The DGHI Academy logo represents our vision of faith, learning and community service.",
    tag: "Identity",
    date: "January 2026",
  },
  {
    id: 16,
    src: "/images/library_dgh.jpg",
    alt: "School library",
    caption: "Library Corner",
    title: "Books & Research",
    description:
      "Students use our library space for reading, research and quiet study time.",
    tag: "Learning",
    date: "February 2026",
  },
  {
    id: 17,
    src: "/images/library-prep.jpg",
    alt: "Students preparing in the library",
    caption: "Study Prep",
    title: "Library Preparation",
    description:
      "Learners take time in the library to prepare assignments, revise and reflect.",
    tag: "Study",
    date: "March 2026",
  },
  {
    id: 18,
    src: "/images/founder-dr-gambo.jpg",
    alt: "Founder portrait",
    caption: "Founder Tribute",
    title: "Our Founder",
    description:
      "The founder’s vision inspires everything we do at DGHI Academy.",
    tag: "Leadership",
    date: "January 2026",
  },
  {
    id: 19,
    src: "/images/formal-opening.jpg",
    alt: "Formal opening event",
    caption: "Opening Ceremony",
    title: "School Launch",
    description:
      "A special event marking the formal opening of our academy and celebration with families.",
    tag: "Community",
    date: "August 2026",
  },
  {
    id: 20,
    src: "/images/environment.jpg",
    alt: "School grounds",
    caption: "Campus Grounds",
    title: "Beautiful Grounds",
    description:
      "A peaceful campus environment creates the right atmosphere for learning and growth.",
    tag: "Campus",
    date: "February 2026",
  },
  {
    id: 21,
    src: "/images/environment-2.jpg",
    alt: "Students learning outside",
    caption: "Outdoor Campus",
    title: "Open-Air Learning",
    description:
      "Some lessons extend to the outdoors, bringing nature into the students’ learning experience.",
    tag: "Experience",
    date: "March 2026",
  },
  {
    id: 22,
    src: "/images/class1_dgh.jpg",
    alt: "Students learning in class",
    caption: "Classroom Focus",
    title: "Interactive Class",
    description:
      "Teachers guide pupils through engaging group activities and interactive lessons.",
    tag: "Learning",
    date: "March 2026",
  },
  {
    id: 23,
    src: "/images/uniform_dgh.jpg",
    alt: "Students in uniform",
    caption: "School Spirit",
    title: "Uniformed Students",
    description:
      "The academy uniform reflects our commitment to unity, discipline and pride.",
    tag: "Culture",
    date: "January 2026",
  },
];

export default function GalleryPage() {
  return (
    <>
      <SchoolNavbar />
      <main>
        <section className="relative school-gradient pattern-islamic py-24 overflow-hidden">
          {/* contrast layer */}
          <div className="absolute inset-0 bg-black/25"></div>

          <div className="container relative z-10">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--school-accent)]/10 text-white text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[var(--school-accent)]"></span>
              Our School Life
            </div>

            {/* Heading */}
            <h1 className="font-amiri text-4xl md:text-5xl font-semibold text-[var(--school-cream)] mt-6 leading-tight max-w-2xl">
              Gallery
            </h1>

            {/* Accent */}
            <div className="w-12 h-[2px] bg-[var(--school-accent)] mt-4"></div>

            {/* Description */}
            <p className="mt-6 text-base md:text-lg text-[var(--school-cream)]/80 max-w-lg leading-relaxed">
              A glimpse into the daily life, events, and learning environment of
              DGHI Academy.
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
