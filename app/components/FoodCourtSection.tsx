"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cuisines = [
  "Indian Thali",
  "North Indian",
  "South Indian",
  "Asian Bowls",
  "Italian Pizzas",
  "Gourmet Burgers",
  "Sizzlers",
  "Street Food",
  "Healthy Bowls",
  "Dessert Parlours",
  "Coffee & Shakes",
  "Global Cuisine",
];

const featuredSpots = [
  { label: "Family Dining", desc: "Spacious seating for family get-togethers & celebrations." },
  { label: "Café Corners", desc: "Cozy spaces for catch-ups, meetings & me-time." },
  { label: "Quick Bites", desc: "Grab-and-go counters for busy shoppers." },
];

export function FoodCourtSection() {
  return (
    <section
      id="food-court"
      className="relative mx-auto max-w-6xl px-4 py-16 md:py-24"
    >
      {/* Soft moving background blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-4 h-72 w-72 rounded-full bg-gradient-to-br from-rose-400/25 via-orange-300/20 to-amber-300/25 blur-3xl md:h-96 md:w-96"
        animate={{
          x: [0, -20, 15, -30, 0],
          y: [0, 20, -10, 25, 0],
          scale: [1, 1.05, 1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-center">
        {/* Left: Text content */}
        <motion.div
          initial={ { opacity: 0, y: 30 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true, margin: "-80px" } }
          transition={ { duration: 0.7, ease: "easeOut" } }
        >
          <span className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-600">
            Food Court & Cafés
          </span>

          <h2 className="mt-4 text-2xl font-semibold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
            A{" "}
            <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">
              flavourful journey
            </span>{" "}
            from morning coffee to midnight cravings.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
            Glacier Point Mall&apos;s food court brings together your favourite
            global and local flavours — from gourmet burgers and handcrafted
            coffees to comforting Indian classics, desserts and quick bites.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
            Thoughtfully designed seating zones, natural lighting and ambient
            music make it the perfect hangout space for family lunches, office
            breaks, coffee dates and weekend plans.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {featuredSpots.map((spot) => (
              <motion.div
                key={spot.label}
                className="rounded-2xl bg-white/80 p-3 shadow-sm backdrop-blur"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                <div className="text-[11px] font-semibold uppercase tracking-wide text-rose-500">
                  {spot.label}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-gray-600">
                  {spot.desc}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Opening hours / info */}
          <div className="mt-6 flex flex-wrap gap-4 text-[11px] text-gray-600 md:text-xs">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open Daily • 10:00 AM to 11:00 PM*
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              Vegetarian & Vegan friendly options available
            </span>
          </div>
        </motion.div>

        {/* Right: Image collage with floating animation */}
        <motion.div
          initial={ { opacity: 0, y: 40 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true, margin: "-60px" } }
          transition={ { duration: 0.8, ease: "easeOut", delay: 0.1 } }
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="relative mx-auto max-w-md"
          >
            {/* Main large image */}
            <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-xl shadow-rose-100">
              <div className="relative h-56 w-full md:h-72">
                <Image
                  src="/food.jpg"
                  alt="Glacier Point Mall food court"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3 text-xs text-gray-700 md:text-sm">
                <div>
                  <div className="font-semibold text-gray-900">
                    Glacier Bites Food Court
                  </div>
                  <div className="text-[11px] text-gray-500">
                    20+ dining brands • 500+ seating
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
                  Family Friendly
                </span>
              </div>
            </div>

            {/* Top-right mini image */}
            <motion.div
              className="absolute -right-4 top-10 hidden w-32 overflow-hidden rounded-2xl border border-white/60 bg-white/60 shadow-lg shadow-orange-100 sm:block"
              animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <div className="relative h-24 w-full">
                <Image
                  src="/food-2.jpg"
                  alt="Cafe & coffee at Glacier Point Mall"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-2 py-1.5 text-[10px] text-gray-700">
                Café corners & artisanal coffee.
              </div>
            </motion.div>

            {/* Bottom-left mini image */}
            <motion.div
              className="absolute -left-4 bottom-2 w-32 overflow-hidden rounded-2xl border border-white/60 bg-white/60 shadow-lg shadow-amber-100 sm:block"
              animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <div className="relative h-24 w-full">
                <Image
                  src="/food-1.jpg"
                  alt="Burgers, pizza and desserts at Glacier Point Mall"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-2 py-1.5 text-[10px] text-gray-700">
                Gourmet burgers, pizzas & desserts.
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite marquee of cuisines / experiences */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-rose-100 bg-white/80 p-3 shadow-sm backdrop-blur">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-400">
          Flavours at Glacier Point Mall
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
            {[...cuisines, ...cuisines].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="whitespace-nowrap rounded-full bg-rose-50 px-4 py-1 text-[11px] font-medium text-rose-700"
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