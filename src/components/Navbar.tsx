"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { navLinks, site } from "@/lib/constants";
import { useTheme } from "@/components/ThemeProvider";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-base font-black text-primary-700 dark:text-white">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-600 text-white">श्री</span>
          <span>{site.name}</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                pathname === link.href
                  ? "bg-primary-600 text-white"
                  : "text-slate-700 hover:bg-primary-50 hover:text-primary-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-primary-100 bg-white text-primary-700 shadow-sm transition hover:bg-primary-50 dark:border-white/10 dark:bg-white/10 dark:text-yellow-200"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-full border border-primary-100 bg-white text-primary-700 lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-primary-100 bg-white px-4 py-3 lg:hidden dark:border-white/10 dark:bg-slate-950">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-primary-50 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
