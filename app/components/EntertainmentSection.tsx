"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  "Multiplex Cinema",
  "Kids Play Zone",
  "Arcade & VR Games",
  "Bowling & Fun Alley",
  "Live Events & Performances",
  "Weekend Activities",
];

const experienceCards = [
  {
    title: "Multiplex Cinema",
    desc: "Latest blockbusters, Dolby sound and premium seating for the perfect movie outing.",
    pill: "Movie Nights",
  },
  {
    title: "Arcade & Gaming",
    desc: "High-energy arcade, VR experiences and gaming zones for all age groups.",
    pill: "Adrenaline Rush",
  },
  {
    title: "Kids Play & Activities",
    desc: "Safe, vibrant play areas and engaging activities to keep kids happily occupied.",
    pill: "Family Time",
  },
];

export function EntertainmentSection() {
  return (
    <section
      id="entertainment"
      className="relative mx-auto max-w-6xl px-4 py-16 md:py-24"
    >
      {/* Moving background accent */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/25 via-purple-400/25 to-pink-400/25 blur-3xl md:h-96 md:w-96"
        animate={{
          x: [0, 25, -15, 30, 0],
          y: [0, -20, 10, -25, 0],
          scale: [1, 1.06, 1, 1.1, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-center">
        {/* Left: Image collage with floating animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="relative mx-auto max-w-md"
          >
            {/* Main big image */}
            <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-xl shadow-indigo-100">
              <div className="relative h-56 w-full md:h-72">
                <Image
                  src="/game-1.jpg"
                  alt="Multiplex cinema at Glacier Point Mall"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3 text-xs text-gray-700 md:text-sm">
                <div>
                  <div className="font-semibold text-gray-900">
                    Glacier Screens Multiplex
                  </div>
                  <div className="text-[11px] text-gray-500">
                    Blockbusters • Premium Seats • Dolby Sound
                  </div>
                </div>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-medium text-indigo-700">
                  7 Days a Week
                </span>
              </div>
            </div>

            {/* Top-left mini image */}
            <motion.div
              className="absolute -left-6 top-8 hidden w-32 overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-lg shadow-purple-100 sm:block"
              animate={{ y: [0, -8, 0], x: [0, -6, 0] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <div className="relative h-24 w-full">
                <Image
                  src="/game-2.jpg"
                  alt="Arcade and gaming at Glacier Point Mall"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-2 py-1.5 text-[10px] text-gray-700">
                Arcade, VR & gaming arenas.
              </div>
            </motion.div>

            {/* Bottom-right mini image */}
            <motion.div
              className="absolute -right-4 bottom-2 w-32 overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-lg shadow-pink-100 sm:block"
              animate={{ y: [0, 10, 0], x: [0, 6, 0] }}
              transition={{
                duration: 11,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <div className="relative h-24 w-full">
                <Image
                  src="/game-3.jpg"
                  alt="Kids play and fun zone at Glacier Point Mall"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-2 py-1.5 text-[10px] text-gray-700">
                Kids play zones & fun rides.
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: Text content + cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        >
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Entertainment & Experiences
          </span>

          <h2 className="mt-4 text-2xl font-semibold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
            Where{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              movies, games & memories
            </span>{" "}
            come together.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
            Beyond shopping, Glacier Point Mall is designed as a vibrant
            entertainment hub — with a multiplex cinema, gaming zones, kids
            spaces and live experiences that keep every visit exciting.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
            Whether it&apos;s a movie night, friends&apos; hangout, team
            outing or a fun-filled family weekend, there&apos;s always
            something to look forward to.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {experienceCards.map((item) => (
              <motion.div
                key={item.title}
                className="relative overflow-hidden rounded-2xl bg-white/85 p-3 shadow-sm backdrop-blur"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.22 }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50 via-transparent to-purple-50 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <div className="relative">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                    {item.title}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-gray-600">
                    {item.desc}
                  </div>
                  <span className="mt-2 inline-flex rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-medium text-indigo-700">
                    {item.pill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info line */}
          <div className="mt-6 flex flex-wrap gap-4 text-[11px] text-gray-600 md:text-xs">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Curated for families, kids, teens & working professionals
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              Special screenings & weekend events*
            </span>
          </div>
        </motion.div>
      </div>

      {/* Infinite marquee of entertainment highlights */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-indigo-100 bg-white/85 p-3 shadow-sm backdrop-blur">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-400">
          Experiences at Glacier Point Mall
        </div>
        <div className="mt-2 flex overflow-hidden">
          <motion.div
            className="flex gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          >
            {[...highlights, ...highlights].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="whitespace-nowrap rounded-full bg-indigo-50 px-4 py-1 text-[11px] font-medium text-indigo-700"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}