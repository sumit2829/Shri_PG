"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/constants";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-5 left-4 z-40 flex flex-col gap-3">
        <a aria-label="WhatsApp" href={`https://wa.me/${site.whatsapp}`} className="grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white shadow-lg">
          <FaWhatsapp className="text-xl" />
        </a>
        <a aria-label="Call now" href={`tel:${site.phone}`} className="grid h-12 w-12 place-items-center rounded-full bg-primary-600 text-white shadow-lg">
          <FaPhoneAlt />
        </a>
      </div>
      {visible ? (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-4 z-40 grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-white shadow-lg dark:bg-white dark:text-slate-950"
        >
          <FaArrowUp />
        </button>
      ) : null}
    </>
  );
}
