import type {
  HeroContent,
  StaffMember,
  Program,
  Facility,
  CoreValue,
  Stat,
  NavLink,
} from "@/lib/types";

export const madrasaNav: NavLink[] = [
  { label: "About", href: "/madrasa/about" },
  { label: "Curriculum", href: "/madrasa/curriculum" },
  { label: "Admissions", href: "/madrasa/admissions" },
  { label: "Timetable", href: "/madrasa/timetable" },
  { label: "Gallery", href: "/madrasa/gallery" },
  { label: "Contact", href: "/madrasa/contact" },
  { label: "← Main School", href: "/" },
];

export const madrasaInfo = {
  fullName: "DGHI Academy Madrasa",
  shortName: "DGHI Madrasa",
  arabicName: "مدرسة أكاديمية د.غ.عـ",
  tagline: "Nurturing Hearts Through the Light of the Quran",
  established: 2025,
  hours: "2:00pm – 6:00pm",
  days: "Thursday – Sunday",
  address: "D12 Sabon Layi, Gangare, Jos, Plateau State, Nigeria",
  phone: "08168369019",
  email: "drgambohamzaislamicacademy@gmail.com",
  logoUrl: "/images/logo_dgh.jpg",
};

export const madrasaHero: HeroContent = {
  headline: "Illuminating Minds with the Light of the Quran",
  subheadline:
    "The DGHI Madrasa offers a structured afternoon Islamic education programme, nurturing young hearts in Quranic recitation, memorisation, Arabic language and Islamic education in a warm, disciplined environment.",
  ctaPrimary: { label: "Enrol in Madrasa", href: "/madrasa/admissions" },
  ctaSecondary: { label: "View Curriculum", href: "/madrasa/curriculum" },
  badge: "Afternoon Madrasa — 2:00pm to 6:00pm",
};

export const madrasaStats: Stat[] = [
  { label: "Session", value: "Afternoon", icon: "moon" },
  { label: "Hours", value: "2pm – 6pm", icon: "clock" },
  { label: "Days", value: "Mon – Fri", icon: "calendar" },
  { label: "Focus", value: "Quran & Arabic", icon: "book-open" },
];

export const madrasaAbout = `The DGHI Academy Madrasa is the afternoon Islamic education arm of Dr. Gambo Hamza Islamic Academy. Established alongside the main school in 2025, the Madrasa was born from the same vision of the late Dr. Gambo Hamza — to raise a generation rooted in knowledge, faith, and upright character.

The Madrasa operates every weekday from 2:00pm to 6:00pm, welcoming children who attend the morning school as well as children from the wider community. Our curriculum is built around the Quran as the centre of all learning, with supporting programmes in Arabic Language, Hadith, Fiqh, and Islamic History.

Our Mallams (teachers) are qualified, experienced, and deeply committed to creating a loving yet disciplined learning environment where every child feels valued and motivated to grow in their deen.`;

export const madrasaVision = `To be a leading centre of Quranic and Islamic education in Jos, producing a generation of young Muslims who are fluent in the Quran, grounded in the Sunnah, and equipped to live as exemplary members of their communities.`;

export const madrasaMission = `To provide accessible, structured, and high-quality Islamic education that complements conventional schooling — nurturing children's faith, character, and Quranic knowledge in a safe and encouraging environment.`;

export const madrasaValues: CoreValue[] = [
  {
    title: "Taqwa (God-consciousness)",
    description: "Every lesson begins and ends with awareness of Allah.",
    icon: "star",
  },
  {
    title: "Adab (Respect & Etiquette)",
    description:
      "Teaching proper Islamic manners toward teachers, peers and parents.",
    icon: "heart",
  },
  {
    title: "Ilm (Knowledge)",
    description:
      "A deep love for learning the Quran, Arabic and Islamic sciences.",
    icon: "book-open",
  },
  {
    title: "Ihsan (Excellence)",
    description:
      "Striving to recite, memorise and understand with the highest quality.",
    icon: "award",
  },
  {
    title: "Ummah (Community)",
    description:
      "Building strong bonds between students, families and the wider Muslim community.",
    icon: "users",
  },
];

export const madrasaPrograms: Program[] = [
  {
    title: "Quran Recitation (Tajweed)",
    description:
      "Correct pronunciation and recitation of the Holy Quran using established Tajweed rules, from Noorani Qaida for beginners to full Quran for advanced students.",
    icon: "book-open",
    levels: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    title: "Hifz (Quran Memorisation)",
    description:
      "A structured Hifz programme for students committed to memorising the Holy Quran, with daily revision sessions and personalised tracking.",
    icon: "brain",
    levels: ["Juz Amma", "Half Quran", "Full Hifz Track"],
  },
  {
    title: "Arabic Language",
    description:
      "Foundational Arabic reading, writing and grammar to help students better understand the Quran and Islamic texts.",
    icon: "type",
    levels: ["Reading & Writing", "Basic Grammar", "Conversational"],
  },
  {
    title: "Islamic Education",
    description:
      "Age-appropriate lessons in Aqeedah (belief), Fiqh (jurisprudence), Seerah (Prophetic biography) and Hadith.",
    icon: "moon",
    levels: ["Aqeedah", "Fiqh", "Seerah", "Hadith"],
  },
  {
    title: "Islamic Manners & Character",
    description:
      "Practical lessons on Islamic etiquette, daily duas, salah practice and building strong moral character.",
    icon: "sparkles",
  },
];

// Madrasa timetable — fits within 2:00pm–6:00pm
export const madrasaTimetable = [
  { time: "2:00pm – 2:20pm", activity: "Arrival, Wudu & Opening Du'as" },
  { time: "2:20pm – 2:50pm", activity: "Quran Recitation (Tajweed & Tilawah)" },
  { time: "2:50pm – 3:20pm", activity: "Hifz / Memorisation (New Lesson)" },
  { time: "3:20pm – 3:45pm", activity: "Islamic Education / Seerah" },
  { time: "3:45pm – 4:15pm", activity: "Arabic Language (Reading & Writing)" },
  { time: "4:15pm – 4:45pm", activity: "Review & Group Practice" },
  { time: "4:45pm – 5:45pm", activity: "Individual Coaching & Du'a Review" },
  { time: "5:45pm – 6:00pm", activity: "Closing Du'as, Review & Dismissal" },
];

export const madrasaFacilities: Facility[] = [
  { name: "Dedicated Madrasa Classrooms", icon: "building" },
  { name: "Wudu & Prayer Area", icon: "droplets" },
  { name: "Quran & Arabic Learning Materials", icon: "book-open" },
  { name: "Gender-Separated Spaces", icon: "shield" },
  { name: "Qualified Mallams (Male & Female)", icon: "users" },
  { name: "Safe & Secure Environment", icon: "shield-check" },
];

export const madrasaAdmissionRequirements = [
  "Completed Madrasa Registration Form",
  "Passport Photograph",
  "Age: Open to children from 3 years and above",
  "No prior Islamic education required for beginners",
  "Placement assessment for Quran level",
  "Payment of Registration & Monthly Fees",
  "Acceptance of Madrasa Code of Conduct",
];

export const madrasaClasses = [
  "Beginners (Noorani Qaida)",
  "Elementary Quran (Juz Amma)",
  "Intermediate Quran",
  "Advanced Quran / Hifz Track",
  "Arabic Language Class",
];

export const madrasaMallam: StaffMember = {
  name: "Mallam",
  position: "Head of Madrasa",
  message: `In the name of Allah, the Most Gracious, the Most Merciful.

Welcome to the DGHI Academy Madrasa — an afternoon school dedicated to nurturing the hearts and minds of our children through the timeless teachings of the Holy Quran and the Sunnah of our beloved Prophet Muhammad (peace be upon him).

At our Madrasa, we believe that every child has the capacity to connect with the Quran. Our role as teachers is to make that connection joyful, consistent and deep-rooted. We do not merely teach letters — we cultivate love for the Book of Allah.

We warmly invite parents to enrol their children and to be active partners in this blessed journey. Together, we can raise a generation that is both educated and guided.

Jazakumullahu Khayran.`,
  imageUrl: "/images/mallam-placeholder.jpg",
};
