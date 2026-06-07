import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { navLinks, site } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-black">{site.name}</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Premium PG accommodation near Galgotias University and NIU University with secure rooms, meals, WiFi, and student-first support.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            <p>{site.address}</p>
            <a href={`tel:${site.phone}`} className="hover:text-white">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
          </div>
          <div className="mt-5 flex gap-3">
            {[FaWhatsapp, FaPhoneAlt, FaInstagram, FaFacebookF].map((Icon, index) => (
              <span key={index} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white">
                <Icon />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        Copyright © 2026 {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
