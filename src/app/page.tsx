import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { FacilityCard } from "@/components/FacilityCard";
import { Hero } from "@/components/Hero";
import { HomeBookingForm } from "@/components/HomeBookingForm";
import { RoomCard } from "@/components/RoomCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { facilities, homeGalleryImages, rooms, testimonials } from "@/data/siteData";
import { site } from "@/lib/constants";

const featuredRoomSlugs = ["single-ac", "double-sharing-ac", "triple-sharing-ac"];
const featuredRooms = featuredRoomSlugs
  .map((slug) => rooms.find((room) => room.slug === slug))
  .filter((room): room is (typeof rooms)[number] => Boolean(room));

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container-px mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeader eyebrow="About" title="Student living designed around comfort and trust">
              श्री PG HOUSE blends premium rooms, transparent pricing, reliable meals, and quick campus access for students near Galgotias University and NIU University.
            </SectionHeader>
          </ScrollReveal>
          <div className="mt-8">
            <Link href="/about" className="btn-primary">
              Know More <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-primary-50/60 bg-blue-grid bg-[length:28px_28px] dark:bg-slate-900">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader eyebrow="Rooms" title="Popular room choices" center>
            Choose single, double, triple, AC, and non AC options with meals, WiFi, cleaning, and security included.
          </SectionHeader>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredRooms.map((room) => (
              <RoomCard
                key={room.slug}
                room={room}
                badgeLabel={`${room.type} Seater`}
                titleLabel={`${room.type} Seater`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-100 dark:bg-slate-900">
        <div className="container-px mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black text-primary-700 dark:text-blue-200 sm:text-5xl">
            Image Gallery
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeGalleryImages.map((image) => (
              <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container-px mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-black text-primary-700 dark:text-blue-200 sm:text-4xl">
            Food Menu
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
            <Image
              src="/menu1.jpg"
              alt="KUNJ PG food menu"
              width={2048}
              height={520}
              sizes="100vw"
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader eyebrow="Facilities" title="Everything residents need, ready from day one" center />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.slice(0, 8).map((item) => (
              <FacilityCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-950 text-white">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader eyebrow="Testimonials" title="What students say" center>
            Real student feedback from residents who wanted a safer, cleaner, more dependable PG experience.
          </SectionHeader>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl border border-white/10 bg-white/10 p-6">
                <FaQuoteLeft className="text-blue-200" />
                <p className="mt-4 text-sm leading-6 text-slate-200">{item.quote}</p>
                <h3 className="mt-5 font-black">{item.name}</h3>
                <p className="text-xs text-blue-100">{item.university}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-100 pt-12 dark:bg-slate-950">
        <div className="container-px mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black text-primary-700 dark:text-blue-200 sm:text-5xl">
            Book Your Room
          </h2>
          <HomeBookingForm />
        </div>
      </section>

      <section className="section bg-slate-100 pt-0 dark:bg-slate-950">
        <div className="container-px mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black text-primary-700 dark:text-blue-200 sm:text-5xl">
            Contact Owner
          </h2>
          <div className="mt-8 rounded-3xl bg-white px-5 py-10 text-center shadow-xl dark:bg-slate-900 sm:px-8">
            <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full ring-4 ring-primary-100 dark:ring-white/10">
              <Image
                src="/mohan_ram.jpeg"
                alt="Mohan Ram"
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
            <div className="mt-8 text-slate-950 dark:text-white">
              <h3 className="text-2xl font-black">JBM</h3>
              <p className="mt-2 text-lg">Call: 7900350008</p>
              <p className="text-lg">Alternate Number: 7300837281</p>
            </div>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="tel:7900350008" className="btn-primary px-8">
                Call Now
              </a>
              <a href="https://wa.me/917900350008" target="_blank" rel="noreferrer" className="btn-primary px-8">
                WhatsApp Now
              </a>
              <a
                href={site.locationUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-8"
              >
                Get Location
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
