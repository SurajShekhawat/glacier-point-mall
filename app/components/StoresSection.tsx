"use client";

import { motion } from "framer-motion";

const storeCategories = [
  {
    title: "Fashion & Apparel",
    desc: "Premium ethnic, western, streetwear and occasion wear brands for all age groups.",
    tags: ["International Labels", "Ethnic Wear", "Fast Fashion", "Designer Collections"],
  },
  {
    title: "Footwear & Accessories",
    desc: "From sneakers and formal shoes to bags, watches and fine accessories.",
    tags: ["Sneaker Stores", "Luxury Watches", "Handbags", "Travel Gear"],
  },
  {
    title: "Electronics & Gadgets",
    desc: "Latest smartphones, laptops, smart wearables and home electronics.",
    tags: ["Flagship Stores", "Game Zones", "Smart Devices", "Audio Gear"],
  },
  {
    title: "Beauty & Wellness",
    desc: "Skincare, cosmetics, fragrances and wellness experiences.",
    tags: ["Cosmetics", "Perfumes", "Salons", "Spa & Wellness"],
  },
  {
    title: "Home & Lifestyle",
    desc: "Décor, furnishings, gifting and premium lifestyle essentials.",
    tags: ["Home Decor", "Kitchenware", "Gifting", "Furnishings"],
  },
  {
    title: "Kids & Entertainment",
    desc: "Kids fashion, toy stores and interactive play & gaming zones.",
    tags: ["Kidswear", "Toy Stores", "Arcade", "Play Arena"],
  },
];

const marqueeBrands = [
  "Zara",
  "H&M",
  "Lifestyle",
  "Shoppers Stop",
  "PVR Cinemas",
  "Starbucks",
  "Croma",
  "Nykaa",
  "Decathlon",
  "Louis Philippe",
  "Bata",
  "FabIndia",
];

export function StoresSection() {
  return (
    <section
      id="stores"
      className="relative mx-auto max-w-6xl px-4 py-16 md:py-24"
    >
      {/* Soft background accent */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-sky-400/25 via-indigo-400/20 to-emerald-300/20 blur-3xl md:h-80 md:w-80"
        animate={{
          x: [0, 20, -10, 30, 0],
          y: [0, -15, 10, -20, 0],
          scale: [1, 1.06, 1, 1.03, 1],
        }}
        transition={{
          duration: 20,
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
        <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-600">
          Stores & Categories
        </span>

        <h2 className="mt-4 text-2xl font-semibold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
          Discover{" "}
          <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            everything you love
          </span>{" "}
          under one roof.
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
          From everyday essentials to luxury indulgences, Glacier Point Mall
          brings together curated brands and experiences for shoppers of every
          age and style.
        </p>
      </motion.div>

      {/* Infinite marquee rows */}
      <div className="mt-8 space-y-3 overflow-hidden rounded-2xl border border-sky-100 bg-white/70 p-3 shadow-sm backdrop-blur">
        {/* Row 1 */}
        <div className="relative flex overflow-hidden">
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
            {[...marqueeBrands, ...marqueeBrands].map((brand, idx) => (
              <span
                key={`brand-1-${brand}-${idx}`}
                className="whitespace-nowrap rounded-full bg-sky-50 px-4 py-1 text-[11px] font-medium text-sky-700"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2 reverse direction */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-3"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 32,
              ease: "linear",
            }}
          >
            {[...marqueeBrands.reverse(), ...marqueeBrands].map(
              (brand, idx) => (
                <span
                  key={`brand-2-${brand}-${idx}`}
                  className="whitespace-nowrap rounded-full bg-indigo-50 px-4 py-1 text-[11px] font-medium text-indigo-700"
                >
                  {brand}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Grid of store categories */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
        className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {storeCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white/90 p-5 shadow-md shadow-sky-50 backdrop-blur-md"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1 + index * 0.06,
            }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            {/* subtle gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50 via-transparent to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-3 flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-gray-900 md:text-base">
                  {category.title}
                </h3>
                <span className="rounded-full bg-sky-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-sky-600">
                  Zone {index + 1}
                </span>
              </div>

              <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
                {category.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-50 px-3 py-1 text-[11px] font-medium text-gray-700 group-hover:bg-white group-hover:text-gray-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Anchor & boutique brands
                </span>
                <button className="text-[11px] font-semibold uppercase tracking-wide text-sky-600">
                  View Stores →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}