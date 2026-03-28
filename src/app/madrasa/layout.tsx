import type { Metadata } from "next";
import MadrasaNavbar from "@/components/madrasa/MadrasaNavbar";
import MadrasaFooter from "@/components/madrasa/MadrasaFooter";

export const metadata: Metadata = {
  title: {
    default: "DGH Madrasa | Evening Islamic School — Gangare, Jos",
    template: "%s | DGH Madrasa",
  },
  description:
    "DGH Academy Madrasa — Evening Quran recitation, Hifz, Arabic language and Islamic studies for children in Gangare, Jos. Enrol today.",
  keywords: [
    "DGH Madrasa", "Islamic school Jos", "Quran school Jos",
    "Hifz school Plateau State", "madrasa Gangare",
    "evening Islamic education", "Arabic school Jos Nigeria",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.dghacademy.com/madrasa",
    siteName: "DGH Academy Madrasa",
    title: "DGH Madrasa | Evening Islamic School — Gangare, Jos",
    description: "Evening Quran, Hifz, Arabic and Islamic Studies — DGH Academy Madrasa, Jos.",
  },
};

export default function MadrasaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--madrasa-ivory)" }}>
      <MadrasaNavbar />
      <main className="flex-1">{children}</main>
      <MadrasaFooter />
    </div>
  );
}
