// ============================================================
// SHARED TYPES — DGH Academy
// These types are designed for easy CMS migration (Sanity, Contentful)
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  badge?: string;
}

export interface SchoolInfo {
  fullName: string;
  shortName: string;
  motto: string;
  established: number;
  type: string;
  ownership: string;
  address: string;
  phone: string;
  email: string;
  googleMapsUrl: string;
  workingHours: string;
  colors: string[];
  facebook?: string;
}

export interface StaffMember {
  name: string;
  position: string;
  message?: string;
  imageUrl?: string;
}

export interface Program {
  title: string;
  description: string;
  icon: string;
  levels?: string[];
}

export interface Facility {
  name: string;
  icon: string;
}

export interface AdmissionRequirement {
  item: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  icon?: string;
}

// Future LMS-ready types
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  level: string;
  thumbnail?: string;
}

export interface Announcement {
  id: string;
  title: string;
  body: string;
  date: string;
  category: "school" | "madrasa" | "both";
}

export interface EnquiryForm {
  parentName: string;
  phone: string;
  email?: string;
  childName: string;
  childAge: string;
  classInterested: string;
  message?: string;
  section: "school" | "madrasa";
}
