import type {
  SchoolInfo,
  HeroContent,
  StaffMember,
  Program,
  Facility,
  CoreValue,
  Stat,
  NavLink,
} from "@/lib/types";

export const schoolNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Madrasa →", href: "/madrasa" },
];

export const schoolInfo: SchoolInfo = {
  fullName: "Dr. Gambo Hamza Islamic Academy",
  shortName: "DGHI Academy",
  motto: "",
  established: 2025,
  type: "Nursery & Primary",
  ownership: "Private",
  address: "D12 Sabon Layi, Gangare, Jos, Plateau State, Nigeria",
  phone: "08168369019",
  email: "drgambohamzaislamicacademy@gmail.com",
  googleMapsUrl: "https://maps.app.goo.gl/WbqF2k7sDrw5i7yw8",
  workingHours: "7:00am – 2:00pm",
  colors: ["#6B3A2A", "#F5ECD7", "#FFFFFF"],
  logoUrl: "/images/logo_dgh.jpg",
  facebook: "https://www.facebook.com/share/1L9JNy5zyr/",
};

export const schoolHero: HeroContent = {
  headline: "A Place Where Knowledge Meets Morals",
  subheadline:
    "A distinguished Academy where pupils excel academically, morally and spiritually, embodying the teachings of Islam while contributing positively to their local and global communities.",
  ctaPrimary: { label: "Apply for Admission", href: "/admissions" },
  ctaSecondary: { label: "Learn More", href: "/about" },
  badge: "Morning School — 7:00am to 2:00pm",
};

export const schoolStats: Stat[] = [
  { label: "Established", value: "2025", icon: "calendar" },
  { label: "Entry Classes", value: "7", icon: "book-open" },
  { label: "Curriculum", value: "Nigerian & British", icon: "globe" },
  { label: "School Hours", value: "7am – 2pm", icon: "clock" },
];

export const administrator: StaffMember = {
  name: "Sumayyah Hamza Muhammad",
  position: "Administrator",
  message: `It gives me great pleasure to welcome you to Dr. Gambo Hamza Islamic Academy, a school founded on the noble vision of promoting knowledge, discipline, and upright character in our children.

At our Academy, we are committed to providing a balanced education that combines sound academic excellence with strong Islamic values. We believe that education is not only about intellectual development but also about nurturing moral integrity, respect, and responsibility in every child.

Since the establishment of the school in 2025, we have witnessed encouraging progress in the academic performance and behavior of our pupils. This success is made possible through the dedication of our qualified and committed teachers, as well as the cooperation of supportive parents and guardians.

Our goal is to raise a generation of confident, knowledgeable, and God-fearing individuals who will contribute positively to their families and society at large.

We invite you to partner with us in this noble journey of building the future of our children.`,
  imageUrl: "/images/administrator-sumayyah.jpg",
};

export const director: StaffMember = {
  name: "Muhammad Hamza Muhammad Esq.",
  position: "Director",
  imageUrl: "/images/director-muhammad-hamza.jpg",
};

export const schoolBursar: StaffMember = {
  name: "Aishah Hamza Muhammad",
  position: "School Bursar",
  imageUrl: "/images/bursar-aishah.jpg",
};

export const technicalManager: StaffMember = {
  name: "Rasheedah Hamza Muhammad",
  position: "Technical Manager",
  imageUrl: "/images/technical-manager-rasheedah.jpg",
};

export const founder: StaffMember = {
  name: "Late Dr. Gambo Hamza",
  position: "Founder (Late)",
  imageUrl: "/images/founder-dr-gambo.jpg",
  message: `His vision continues to guide the academy, even after his passing.`,
};

export const schoolHistory = `Dr. Gambo Hamza Islamic Academy is a private educational institution located at D12 Sabon Layi, Gangare, Jos, Plateau State, Nigeria. The school was established in the year 2025 by the children of the late Dr. Gambo Hamza as a way of preserving and fulfilling his lifelong dream.

Dr. Gambo Hamza was passionate about education and moral upbringing. His vision was to build a community grounded in knowledge, discipline, and upright character. In line with this noble aspiration, the Academy was founded to provide both sound academic and Islamic education to young learners.

Since its establishment, the school has made remarkable progress. The pupils have shown positive response to learning, demonstrating good character and academic enthusiasm. The teachers, on the other hand, have remained dedicated and committed to delivering quality education and nurturing the students toward excellence.

Dr. Gambo Hamza Islamic Academy continues to grow with a strong commitment to shaping responsible, knowledgeable, and morally upright individuals who will contribute positively to society.`;

export const schoolVision = `To be a distinguished academy where students excel academically, morally and spiritually, embodying the teachings of Islam while contributing positively to their local and global communities as confident, compassionate and responsible individuals.`;

export const schoolMission = `To provide a nurturing and inclusive learning environment that integrates high-quality conventional education with a deep understanding of Islamic values, empowering students to become knowledgeable, ethical and productive members of society.`;

export const coreValues: CoreValue[] = [
  {
    title: "Faith",
    description:
      "Grounding every action in sincere belief and God-consciousness.",
    icon: "star",
  },
  {
    title: "Integrity",
    description: "Upholding honesty and strong moral principles in all we do.",
    icon: "shield",
  },
  {
    title: "Excellence",
    description: "Striving for the highest standards academically and morally.",
    icon: "award",
  },
  {
    title: "Respect",
    description: "Honouring every individual regardless of background.",
    icon: "heart",
  },
  {
    title: "Compassion",
    description: "Caring for one another and for our wider community.",
    icon: "users",
  },
  {
    title: "Community Partnership",
    description:
      "Working with families and communities to raise well-rounded pupils.",
    icon: "handshake",
  },
  {
    title: "Lifelong Learning",
    description: "Instilling a love for knowledge that never ends.",
    icon: "book-open",
  },
];

export const academicPrograms: Program[] = [
  {
    title: "Toddler Class",
    description:
      "A gentle, play-based introduction to learning for our youngest pupils in a safe, nurturing environment.",
    icon: "baby",
    levels: ["Ages 2–3"],
  },
  {
    title: "Nursery (1 & 2)",
    description:
      "Building early literacy, numeracy, and social skills with a blend of Nigerian and British curriculum.",
    icon: "pencil",
    levels: ["Nursery 1", "Nursery 2"],
  },
  {
    title: "Primary (Basic 1–5)",
    description:
      "A rigorous, well-rounded academic programme integrating Islamic education, ICT, and real-world learning strategies.",
    icon: "book",
    levels: ["Basic 1", "Basic 2", "Basic 3", "Basic 4", "Basic 5"],
  },
  {
    title: "Islamic Education",
    description:
      "Dedicated Quran, Hadith, and Islamic moral education woven into daily school life.",
    icon: "moon",
  },
  {
    title: "ICT & Coding",
    description:
      "Age-appropriate technology and coding skills preparing pupils for the digital future.",
    icon: "monitor",
  },
];

export const facilities: Facility[] = [
  { name: "Well-ventilated Classrooms", icon: "building" },
  { name: "Sick Bay", icon: "heart-pulse" },
  { name: "Administrative Offices", icon: "briefcase" },
  { name: "Library / Reading Corner", icon: "book-open" },
  { name: "Learning Materials & Writing Boards", icon: "pencil" },
  { name: "Pupils' Desks & Chairs", icon: "armchair" },
  { name: "Separate Toilet Facilities", icon: "droplets" },
  { name: "Safe Water Supply", icon: "glass-water" },
  { name: "Playground", icon: "trees" },
  { name: "School Gate & Security", icon: "shield-check" },
  { name: "Storage Room", icon: "archive" },
];

export const admissionRequirements = [
  "Completed Application Form",
  "Birth Certificate or Declaration of Age",
  "Passport Photographs",
  "Previous School Record (if applicable)",
  "Entrance Assessment",
  "Medical Fitness Certificate",
  "Acceptance of School Rules",
  "Payment of Required Fees",
];

export const entryClasses = [
  "Toddler",
  "Nursery 1",
  "Nursery 2",
  "Basic 1",
  "Basic 2",
  "Basic 3",
  "Basic 4",
  "Basic 5",
];

export const specialInitiatives = [
  "Real World Application Strategies",
  "Integrated Islamic and Western Education",
  "Moral and Character Development",
  "Teacher Commitment and Professional Development",
  "Small Class Size for Effective Learning",
  "Parent–School Partnership",
];
