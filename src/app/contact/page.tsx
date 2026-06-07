import { FaClock, FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/constants";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;

  return (
    <section className="section bg-primary-50 pt-32 dark:bg-slate-950">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader eyebrow="Contact" title="Visit, call, or message श्री PG HOUSE" center>
          We are available for room visits, availability checks, pricing questions, and quick WhatsApp support.
        </SectionHeader>
        <div className="mt-10 grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="grid gap-5">
            {[
              { icon: FaMapMarkerAlt, title: "Address", text: site.address },
              { icon: FaPhoneAlt, title: "Phone", text: site.phone },
              { icon: FaWhatsapp, title: "WhatsApp", text: site.phone },
              { icon: FaEnvelope, title: "Email", text: site.email },
              { icon: FaClock, title: "Business Hours", text: "Monday to Sunday, 8:00 AM - 10:00 PM" }
            ].map((item) => (
              <div key={item.title} className="glass flex gap-4 rounded-2xl p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-600 text-white"><item.icon /></span>
                <div>
                  <h3 className="font-black text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-3">
              {[FaInstagram, FaFacebookF, FaWhatsapp].map((Icon, index) => (
                <a key={index} href={index === 2 ? `https://wa.me/${site.whatsapp}` : "#"} className="grid h-11 w-11 place-items-center rounded-full bg-primary-600 text-white">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <ContactForm />
            <iframe title="KUNJ'S PG HOUSE map" src={mapSrc} className="h-80 w-full rounded-2xl border-0 shadow-lg" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
