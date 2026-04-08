import type { Metadata } from "next";
import MadrasaNavbar from "@/components/madrasa/MadrasaNavbar";
import MadrasaFooter from "@/components/madrasa/MadrasaFooter";

export const metadata: Metadata = {
  title: {
    default: "DGHI Madrasa | Evening Islamic School — Gangare, Jos",
    template: "%s | DGHI Madrasa",
  },
  description:
    "DGHIA Madrasa — Evening Quran recitation, Hifz, Arabic language and Islamic education for children in Gangare, Jos. Enrol today.",
  keywords: [
    "DGHI Madrasa",
    "Islamic school Jos",
    "Quran school Jos",
    "Hifz school Plateau State",
    "madrasa Gangare",
    "evening Islamic education",
    "Arabic school Jos Nigeria",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.dghacademy.com/madrasa",
    siteName: "DGHIA Madrasa",
    title: "DGHI Madrasa | Evening Islamic School — Gangare, Jos",
    description:
      "Evening Quran, Hifz, Arabic and Islamic Education — DGHIA Madrasa, Jos.",
  },
};

export default function MadrasaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--madrasa-ivory)" }}
    >
      <MadrasaNavbar />
      <main className="flex-1">{children}</main>
      <MadrasaFooter />
    </div>
  );
}
