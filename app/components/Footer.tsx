"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stores", href: "#stores" },
  { label: "Food Court", href: "#food-court" },
  { label: "Entertainment", href: "#entertainment" },
  { label: "Offers", href: "#offers" },
  { label: "FAQ", href: "#faq" },
];

const footerHighlights = [
  "Premium Shopping Destination",
  "Curated Dining Experiences",
  "Multiplex & Entertainment Hub",
  "Family & Kids Friendly Spaces",
  "Ample Parking & Easy Access",
  "Festive Events & Activations",
];

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-gray-100 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Moving background blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[-120px] top-[-40px] h-72 w-72 rounded-full bg-gradient-to-br from-sky-400/18 via-indigo-400/20 to-emerald-300/18 blur-3xl md:h-96 md:w-96"
        animate={{
          x: [0, 20, -10, 25, 0],
          y: [0, 15, -8, 18, 0],
          scale: [1, 1.06, 1, 1.1, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Main footer content */}
      <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand / intro */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <motion.div
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-md"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
              >
                <span className="text-xs font-bold text-white leading-tight text-center">
                  GPM
                </span>
              </motion.div>
              <div>
                <div className="text-sm font-semibold tracking-tight text-gray-900 md:text-base">
                  Glacier Point Mall
                </div>
                <div className="text-[11px] text-gray-500 md:text-xs">
                  Experience • Shop • Dine
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-md text-xs leading-relaxed text-gray-600 md:text-sm">
              Glacier Point Mall is envisioned as a vibrant lifestyle
              destination, bringing together premium shopping, dining,
              entertainment and leisure for families, friends and professionals.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-700">
                Shopping • Dining • Cinema
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
                Family-Friendly
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-600 transition hover:text-indigo-600 md:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit & Contact */}
          <div>
            <h3
              id="visit"
              className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500"
            >
              Plan Your Visit
            </h3>
            <div className="mt-3 text-xs text-gray-600 md:text-sm">
              <p className="font-medium text-gray-800">
                Opening Hours (All Days)
              </p>
              <p>10:00 AM – 10:00 PM*</p>
              <p className="mt-1 text-[11px] text-gray-500">
                *Timings may vary for select outlets & multiplex.
              </p>
            </div>

            <div id="contact" className="mt-4 text-xs text-gray-600 md:text-sm">
              <p className="font-medium text-gray-800">Mall Address</p>
              <p>Glacier Point Mall</p>
              <p>Prime City District</p>
              <p>India</p>
            </div>

            {/* <div className="mt-4 text-xs text-gray-600 md:text-sm">
              <p className="font-medium text-gray-800">Contact</p>
              <p>Helpdesk: +91-XXXXXXXXXX</p>
              <p>General Enquiries: info@glacierpointmall.com</p>
            </div> */}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-100 pt-5">
          <div className="flex flex-col items-start justify-between gap-3 text-[11px] text-gray-500 md:flex-row md:items-center">
            <p>
              © {new Date().getFullYear()} Glacier Point Mall. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="text-[11px] hover:text-gray-700">
                Terms & Conditions
              </button>
              <span className="hidden text-gray-300 md:inline">•</span>
              <button className="text-[11px] hover:text-gray-700">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite marquee strip */}
      <div className="border-t border-gray-200 bg-white/90">
        <div className="mx-auto max-w-6xl px-4 py-2">
          <div className="flex items-center justify-between gap-2 text-[11px] text-gray-500">
            <span className="font-semibold uppercase tracking-[0.16em] text-sky-500">
              Glacier Point Mall Highlights
            </span>
            <span className="hidden md:inline-flex">
              Plan your next visit for shopping, dining, movies & more.
            </span>
          </div>

          <div className="mt-2 flex overflow-hidden">
            <motion.div
              className="flex gap-3"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 28,
                ease: "linear",
              }}
            >
              {[...footerHighlights, ...footerHighlights].map(
                (item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="whitespace-nowrap rounded-full bg-sky-50 px-4 py-1 text-[11px] font-medium text-sky-700"
                  >
                    {item}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}