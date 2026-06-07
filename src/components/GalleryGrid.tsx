"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { gallery } from "@/data/siteData";

const categories = ["All", "Rooms", "Food", "Campus", "Facilities"];

export function GalleryGrid() {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<(typeof gallery)[number] | null>(null);
  const items = useMemo(() => (category === "All" ? gallery : gallery.filter((item) => item.category === category)), [category]);

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              category === item ? "bg-primary-600 text-white" : "bg-white text-slate-700 shadow-sm hover:bg-primary-50 dark:bg-white/10 dark:text-slate-200"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <button key={item.src} onClick={() => setActive(item)} className="group mb-5 block w-full overflow-hidden rounded-2xl bg-white text-left shadow-lg dark:bg-white/10">
            <div className={`relative ${index % 3 === 0 ? "h-80" : "h-60"}`}>
              <Image src={item.src} alt={item.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">{item.category}</p>
                <h3 className="mt-1 font-black">{item.title}</h3>
              </div>
            </div>
          </button>
        ))}
      </div>
      {active ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/90 p-4" onClick={() => setActive(null)}>
          <button aria-label="Close lightbox" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-slate-950">
            <FaTimes />
          </button>
          <div className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-2xl" onClick={(event) => event.stopPropagation()}>
            <Image src={active.src} alt={active.title} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </>
  );
}
