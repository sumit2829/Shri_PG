import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import { rooms } from "@/data/siteData";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);
  return { title: room?.title ?? "Room" };
}

export default async function RoomDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);
  if (!room) notFound();

  return (
    <section className="section bg-primary-50 pt-32 dark:bg-slate-950">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4">
            <div className="relative h-96 overflow-hidden rounded-2xl shadow-lg">
              <Image src={room.images[0]} alt={room.title} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {room.images.map((image) => (
                <div key={image} className="relative h-40 overflow-hidden rounded-2xl">
                  <Image src={image} alt={room.title} fill sizes="25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-7">
            <p className="eyebrow">{room.ac ? "AC Room" : "Non AC Room"}</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950 dark:text-white">{room.title}</h1>
            <p className="mt-4 text-3xl font-black text-primary-600 dark:text-blue-300">₹{room.price.toLocaleString("en-IN")}/month</p>
            <p className="mt-2 font-bold text-emerald-600">Available</p>
            <div className="mt-6 grid gap-3">
              {room.features.map((feature) => (
                <span key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <FaCheckCircle className="text-primary-600" /> {feature}
                </span>
              ))}
            </div>
            <Link href="/booking" className="btn-primary mt-8">Book This Room</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
