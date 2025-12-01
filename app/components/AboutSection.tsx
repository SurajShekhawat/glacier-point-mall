"use client";

import { motion } from "framer-motion";

const highlights = [
  { label: "Total Area", value: "8,50,000+ sq.ft." },
  { label: "Brands", value: "150+ Stores" },
  { label: "Dining Options", value: "40+ Cafés & Restaurants" },
  { label: "Parking", value: "1,500+ Vehicle Capacity" },
];

const featurePills = [
  "International Fashion",
  "Luxury Lifestyle",
  "Family Entertainment",
  "Premium Food Court",
  "Multiplex Cinema",
  "Kids Play Arena",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-4 py-16 md:py-24"
    >
      {/* Infinite animated gradient blob in background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-400/30 via-sky-300/25 to-emerald-300/20 blur-3xl md:h-80 md:w-80"
        animate={{
          x: [0, -40, 10, -20, 0],
          y: [0, 20, -10, 30, 0],
          scale: [1, 1.05, 1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600">
            About Glacier Point Mall
          </span>

          <h2 className="mt-4 text-2xl font-semibold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
            A lifestyle destination crafted for{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
              modern India
            </span>
            .
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
            Glacier Point Mall brings together premium shopping, dining,
            entertainment and leisure experiences under one roof. Designed as a
            vibrant urban hub, the mall offers curated brands, open social
            spaces and a warm, welcoming ambience for families, friends and
            travellers.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
            From international fashion labels and lifestyle stores to gourmet
            restaurants, cafés and a state-of-the-art multiplex, every corner is
            thoughtfully planned to create memorable moments — whether it&apos;s
            a casual outing, festive shopping or weekend hangout.
          </p>

          {/* Infinite scrolling feature pills */}
          <div className="mt-6 overflow-hidden">
            <motion.div
              className="flex gap-3"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 22,
                ease: "linear",
              }}
            >
              {[...featurePills, ...featurePills].map((feature, index) => (
                <span
                  key={`${feature}-${index}`}
                  className="whitespace-nowrap rounded-full border border-indigo-100 bg-white/70 px-4 py-1.5 text-[11px] font-medium text-gray-700 shadow-sm backdrop-blur-md"
                >
                  {feature}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Stats / card with infinite subtle motion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg shadow-indigo-100/70 md:p-7"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            {/* subtle background pattern */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.14),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.18),_transparent_55%)]" />

            <div className="relative">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                At a Glance
              </h3>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {highlights.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/80 p-3 text-left shadow-sm backdrop-blur"
                  >
                    <div className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-gray-900 md:text-base">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-2 text-xs text-gray-600 md:text-sm">
                <p className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Smart wayfinding, seamless accessibility & family-friendly
                  facilities.
                </p>
                <p className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  Built with modern safety, security and sustainability
                  standards.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
                  Family-Centric Design
                </span>
                <span className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700">
                  Experience-Led Spaces
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}