import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { gallery, stats } from "@/data/siteData";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="section bg-primary-50 pt-32 dark:bg-slate-950">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader eyebrow="About Us" title="A premium PG made for ambitious students">
          श्री PG HOUSE provides a calm, secure, and well-managed stay for students studying around Knowledge Park, Greater Noida.
        </SectionHeader>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <div className="glass rounded-2xl p-7">
              <h3 className="text-2xl font-black text-slate-950 dark:text-white">Why Choose Us</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                We focus on daily comfort: clean rooms, fresh meals, high-speed WiFi, transparent pricing, practical facilities, and responsive support. The PG is designed for students who want independence without losing structure.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Near Galgotias & NIU", "AC and Non AC rooms", "Student-friendly pricing", "24x7 monitored security"].map((item) => (
                  <span key={item} className="rounded-xl bg-white p-4 text-sm font-bold text-primary-700 dark:bg-white/10 dark:text-blue-100">{item}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="glass rounded-2xl p-7">
              <h3 className="text-2xl font-black text-slate-950 dark:text-white">Mission & Vision</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Our mission is to make student accommodation dependable, safe, and easy to choose. Our vision is to become Greater Noida&apos;s most trusted PG house for students who value comfort, discipline, and community.
              </p>
              <h3 className="mt-7 text-2xl font-black text-slate-950 dark:text-white">Owner Message</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Every resident should feel respected, heard, and secure. We manage the PG with the same care we would expect for our own family.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5 text-center">
              <p className="text-3xl font-black text-primary-600 dark:text-blue-300">{stat.value}</p>
              <p className="mt-1 text-sm font-bold text-slate-600 dark:text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {gallery.slice(0, 6).map((item) => (
            <div key={item.src} className="relative h-64 overflow-hidden rounded-2xl shadow-lg">
              <Image src={item.src} alt={item.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
