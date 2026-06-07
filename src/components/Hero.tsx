"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { heroImage, highlights, stats } from "@/data/siteData";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-24 text-white">
      <Image src={heroImage} alt="Modern premium PG room" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/70 to-slate-950/50" />
      <div className="relative mx-auto flex min-h-[calc(92vh-6rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-200">Premium student living</p>
          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Premium PG Near Galgotias University & NIU University
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
            Safe, Comfortable and Affordable Stay Near Galgotias University & NIU University
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                <FaCheckCircle className="text-blue-200" />
                {item}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/booking" className="btn-primary">Book Now <FaArrowRight /></Link>
            <Link href="/rooms" className="btn-secondary">View Rooms</Link>
          </div>
          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-black">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
