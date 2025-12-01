"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Riya Mehta",
    role: "Visited with family",
    quote:
      "Glacier Point Mall has become our go-to weekend spot. The mix of stores, food court and kids play areas is perfect for the whole family.",
  },
  {
    name: "Arjun Verma",
    role: "Working professional",
    quote:
      "I love the cafés and quiet corners for quick meetings. Parking, security and overall ambience are excellent.",
  },
  {
    name: "Simran Kaur",
    role: "Fashion & lifestyle shopper",
    quote:
      "The brand selection is amazing. I can find everything from ethnic wear to high-street Western brands in one place.",
  },
  {
    name: "Rahul Shah",
    role: "Movie & food lover",
    quote:
      "Movie nights here are the best – catch a film, grab dinner at the food court and wind down with coffee. Perfect experience.",
  },
  {
    name: "Sneha & Kunal",
    role: "Young couple",
    quote:
      "We often come here for casual dates. The ambience, lighting and entertainment options make every visit special.",
  },
];

const quickHighlights = [
  "Clean & well-maintained spaces",
  "Ample parking & easy access",
  "Great brand mix for all budgets",
  "Family-friendly environment",
  "Safe & secure for late evenings",
  "Variety of food & cafés",
  "Kids love the play zones",
  "Perfect for weekend plans",
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative mx-auto max-w-6xl px-4 py-16 md:py-24"
    >
      {/* Background accent blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[-120px] bottom-[-40px] h-72 w-72 rounded-full bg-gradient-to-br from-sky-400/20 via-emerald-300/20 to-indigo-400/20 blur-3xl md:h-96 md:w-96"
        animate={{
          x: [0, 18, -12, 25, 0],
          y: [0, -18, 10, -22, 0],
          scale: [1, 1.05, 1, 1.09, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center"
      >
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Visitor Stories
        </span>

        <h2 className="mt-4 text-2xl font-semibold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
          Loved by{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
            families, friends & professionals
          </span>
          .
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
          Hear what visitors say about their shopping, dining and entertainment
          experiences at Glacier Point Mall.
        </p>
      </motion.div>

      {/* Testimonials grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
        className="mt-10 grid gap-6 md:grid-cols-3"
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white/95 p-5 shadow-md shadow-sky-50 backdrop-blur"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.15 + index * 0.05,
            }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            {/* subtle gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50 via-transparent to-emerald-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex flex-1 flex-col">
              {/* Quote icon */}
              <div className="mb-3 flex items-center justify-between">
                <span className="text-2xl text-indigo-300">“</span>
                <div className="flex items-center gap-1 text-[11px] text-amber-500">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-gray-700">
                {item.quote}
              </p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-gray-500">{item.role}</div>
                </div>
                <div className="rounded-full bg-indigo-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-600">
                  Verified Visit
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Infinite marquee of quick highlights */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-indigo-100 bg-white/90 p-3 shadow-sm backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-600">
          <span className="font-semibold uppercase tracking-[0.16em] text-indigo-500">
            Why visitors love Glacier Point Mall
          </span>
          <span className="hidden items-center gap-1 md:inline-flex">
            Overall visitor sentiment:
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
              4.7 / 5 ★
            </span>
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
            {[...quickHighlights, ...quickHighlights].map((item, index) => (
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