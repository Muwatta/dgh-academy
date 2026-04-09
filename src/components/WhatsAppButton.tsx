"use client";

import { Phone } from "lucide-react";
import { schoolInfo } from "@/data/school";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${schoolInfo.phone.replace(/^0/, "234")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-transparent"
    >
      <Phone size={24} />
    </a>
  );
}
