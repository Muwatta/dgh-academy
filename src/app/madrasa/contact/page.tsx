import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { madrasaInfo } from "@/data/madrasa";

export const metadata: Metadata = {
  title: "Madrasa Contact",
  description:
    "Contact DGHI Academy Madrasa — phone, email or visit us in Gangare, Jos.",
};

export default function MadrasaContactPage() {
  return (
    <>
      <section className="madrasa-gradient pattern-geometric py-20">
        <div className="container">
          <div className="section-tag bg-[var(--madrasa-accent)]/15 text-[var(--madrasa-accent)]">
            Reach Us
          </div>
          <h1 className="font-amiri text-5xl font-bold text-dark mt-2 mb-4">
            Contact the Madrasa
          </h1>
          <p className="text-[var(--madrasa-ivory)]/60 max-w-xl text-sm">
            Reach out for registration, general enquiries or to speak with the
            Mallam.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[var(--madrasa-ivory)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="font-amiri text-3xl font-bold text-papayawhip mb-8">
                Contact Details
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <Phone size={18} />,
                    label: "Phone / WhatsApp",
                    value: madrasaInfo.phone,
                    href: `tel:${madrasaInfo.phone}`,
                  },
                  {
                    icon: <Mail size={18} />,
                    label: "Email",
                    value: madrasaInfo.email,
                    href: `mailto:${madrasaInfo.email}`,
                  },
                  {
                    icon: <MapPin size={18} />,
                    label: "Address",
                    value: madrasaInfo.address,
                    href: undefined,
                  },
                  {
                    icon: <Clock size={18} />,
                    label: "Session Hours",
                    value: `${madrasaInfo.hours} · ${madrasaInfo.days}`,
                    href: undefined,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--madrasa-primary)] flex items-center justify-center text-[var(--madrasa-accent)] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--madrasa-text-muted)] uppercase tracking-wider mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[var(--madrasa-primary)] font-semibold hover:underline text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-[var(--madrasa-primary)] font-semibold text-sm">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h2 className="font-amiri text-2xl font-bold text-[var(--madrasa-primary)] mb-6">
                Send a Message
              </h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[var(--madrasa-text-muted)] uppercase tracking-wider block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[var(--madrasa-text-muted)] uppercase tracking-wider block mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-[var(--madrasa-text-muted)] uppercase tracking-wider block mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Madrasa Registration"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[var(--madrasa-text-muted)] uppercase tracking-wider block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--madrasa-primary)] resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary btn-madrasa w-full justify-center"
                >
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
