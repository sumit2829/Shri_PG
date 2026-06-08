"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaSnowflake, FaUsers } from "react-icons/fa";
import type { rooms } from "@/data/siteData";

type Room = (typeof rooms)[number];

export function RoomCard({
  room,
  badgeLabel,
}: {
  room: Room;
  badgeLabel?: string;
}) {
  const [index, setIndex] = useState(0);

  return (
    <article className="glass overflow-hidden rounded-2xl">
      <div className="relative aspect-[4/3]">
        <Image src={room.images[index]} alt={room.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary-700">{badgeLabel ?? (room.ac ? "AC" : "Non AC")}</span>
          <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs font-bold text-white">{room.available}</span>
        </div>
        <button aria-label="Previous image" onClick={() => setIndex((index + room.images.length - 1) % room.images.length)} className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary-700">
          <FaChevronLeft />
        </button>
        <button aria-label="Next image" onClick={() => setIndex((index + 1) % room.images.length)} className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary-700">
          <FaChevronRight />
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-black text-slate-950 dark:text-white">{room.title}</h3>
            <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-300">₹{room.price.toLocaleString("en-IN")}/month</p>
          </div>
          <div className="flex gap-2 text-primary-600 dark:text-blue-300">
            <FaUsers />
            {room.ac ? <FaSnowflake /> : null}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {room.features.slice(0, 4).map((feature) => (
            <span key={feature} className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-white/10 dark:text-blue-100">
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <Link href="/booking" className="btn-primary flex-1 py-2.5">Book</Link>
          <Link href={`/rooms/${room.slug}`} className="btn-secondary flex-1 py-2.5">Details <FaArrowRight /></Link>
        </div>
      </div>
    </article>
  );
}
