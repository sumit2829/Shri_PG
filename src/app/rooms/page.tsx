"use client";

import { useMemo, useState } from "react";
import { RoomCard } from "@/components/RoomCard";
import { SectionHeader } from "@/components/SectionHeader";
import { rooms } from "@/data/siteData";

export default function RoomsPage() {
  const [ac, setAc] = useState("All");
  const [sharing, setSharing] = useState("All");
  const [maxPrice, setMaxPrice] = useState(16000);
  const filtered = useMemo(
    () => rooms.filter((room) => (ac === "All" || (ac === "AC" ? room.ac : !room.ac)) && (sharing === "All" || room.type === sharing) && room.price <= maxPrice),
    [ac, sharing, maxPrice]
  );

  return (
    <section className="section bg-primary-50 pt-32 dark:bg-slate-950">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader eyebrow="Rooms" title="Find your ideal PG room">
          Filter by AC, non AC, price range, and sharing type. Every room includes essential resident services.
        </SectionHeader>
        <div className="glass mt-8 grid gap-4 rounded-2xl p-5 md:grid-cols-3">
          <label>
            <span className="mb-2 block text-sm font-bold">AC / Non AC</span>
            <select value={ac} onChange={(event) => setAc(event.target.value)} className="input">
              {["All", "AC", "Non AC"].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <span className="mb-2 block text-sm font-bold">Sharing Type</span>
            <select value={sharing} onChange={(event) => setSharing(event.target.value)} className="input">
              {["All", "Single", "Double", "Triple"].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <span className="mb-2 block text-sm font-bold">Price Range: ₹{maxPrice.toLocaleString("en-IN")}</span>
            <input type="range" min="7000" max="16000" step="500" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} className="w-full accent-primary-600" />
          </label>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((room) => <RoomCard key={room.slug} room={room} />)}
        </div>
      </div>
    </section>
  );
}
