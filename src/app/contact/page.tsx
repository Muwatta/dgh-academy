import type { Metadata } from "next";
import SchoolNavbar from "@/components/school/SchoolNavbar";
import SchoolFooter from "@/components/school/SchoolFooter";
import { Phone, Mail, MapPin, Clock, Facebook, ArrowRight } from "lucide-react";
import { schoolInfo } from "@/data/school";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Dr. Gambo Hamza Islamic Academy. Call, email or visit us in Gangare, Jos.",
};

export default function ContactPage() {
  return (
    <>
      <SchoolNavbar />
      <main>
        <section className="school-gradient pattern-islamic py-20">
          <div className="container">
            <div className="section-tag bg-[var(--school-accent)]/15 text-[var(--school-accent)]">Get in Touch</div>
            <h1 className="font-amiri text-5xl font-bold text-papayawhip mt-2 mb-4">Contact Us</h1>
            <p className="text-[var(--school-cream)]/70 max-w-xl">
              We are happy to answer your questions and welcome you to visit the school. Reach us through any of the channels below.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="font-amiri text-3xl font-bold text-[var(--school-primary)] mb-8">Our Contact Details</h2>
                <div className="space-y-5">
                  {[
                    { icon: <Phone size={20} />, label: "Phone / WhatsApp", value: schoolInfo.phone, href: `tel:${schoolInfo.phone}` },
                    { icon: <Mail size={20} />, label: "Email Address", value: schoolInfo.email, href: `mailto:${schoolInfo.email}` },
                    { icon: <MapPin size={20} />, label: "School Address", value: schoolInfo.address, href: schoolInfo.googleMapsUrl },
                    { icon: <Clock size={20} />, label: "Working Hours", value: schoolInfo.workingHours, href: undefined },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-5 bg-[var(--school-cream)] rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-[var(--school-primary)] text-white flex items-center justify-center shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[var(--school-primary)] font-semibold hover:underline">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-[var(--school-primary)] font-semibold">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                  {schoolInfo.facebook && (
                    <a href={schoolInfo.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-5 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0"><Facebook size={20} /></div>
                      <div>
                        <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-0.5">Facebook</div>
                        <div className="text-blue-700 font-semibold">Follow DGH Academy on Facebook</div>
                      </div>
                    </a>
                  )}
                </div>

                {/* Google Map embed placeholder */}
                <div className="mt-8 rounded-xl overflow-hidden border border-[var(--school-cream-dark)] h-64 bg-[var(--school-cream)] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-[var(--school-primary)] mx-auto mb-2" />
                    <a href={schoolInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-school text-sm">
                      Open in Google Maps <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Message form */}
              <div className="card shadow-xl">
                <h2 className="font-amiri text-2xl font-bold text-[var(--school-primary)] mb-6">Send Us a Message</h2>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">Your Name *</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">Phone Number *</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">Subject *</label>
                    <input type="text" required placeholder="e.g. Admission Enquiry" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[var(--school-text-muted)] uppercase tracking-wider block mb-1.5">Message *</label>
                    <textarea rows={6} required className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[var(--school-primary)] resize-none transition-colors" />
                  </div>
                  <button type="submit" className="btn-primary btn-school w-full justify-center">
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SchoolFooter />
    </>
  );
}
