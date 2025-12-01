"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stores", href: "#stores" },
  { label: "Food Court", href: "#food-court" },
  { label: "Entertainment", href: "#entertainment" },
  { label: "Offers", href: "#offers" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-gradient-to-b from-white/90 via-white/60 to-transparent backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 md:py-3.5">
        {/* Logo + text */}
        <Link href="#home" className="flex items-center gap-2">
          <motion.div
            className="relative h-8 w-32 flex-shrink-0 overflow-hidden md:h-10 md:w-40"
            whileHover={{ rotate: 2, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 250, damping: 16 }}
          >
            <Image
              src="/logo/glacier-point-mall.png"
              alt="Glacier Point Mall Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Text ko mobile pe hide rakha, sirf tablet/desktop pe dikhayenge */}
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-tight md:text-base">
              Glacier Point Mall
            </span>
            <span className="text-[11px] text-gray-500 md:text-xs">
              Experience • Shop • Dine
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}

          <motion.a
            href="#faq"
            className="rounded-full border border-indigo-500/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-indigo-600 shadow-sm hover:bg-indigo-50"
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            FAQ
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white/80 shadow-sm md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Open main menu"
        >
          <motion.span
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="relative h-4 w-4"
          >
            <motion.span
              className="absolute left-0 top-0 h-[2px] w-full bg-gray-800"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 },
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute left-0 top-[6px] h-[2px] w-full bg-gray-800"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="absolute left-0 top-[12px] h-[2px] w-full bg-gray-800"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 },
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.span>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="space-y-1 border-t border-gray-100 bg-white/95 px-4 pb-4 pt-3 shadow-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}