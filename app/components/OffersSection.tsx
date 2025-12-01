"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const offerHighlights = [
  "Weekend Mega Sale",
  "Festive Collection Launch",
  "Flat Discounts on Fashion",
  "Food Combos & Deals",
  "Movie + Meal Offers",
  "Bank & Wallet Cashback",
];

const offerCards = [
  {
    title: "Weekend Style Sale",
    desc: "Up to 50% OFF on leading fashion & lifestyle brands every Friday to Sunday.",
    tag: "Fashion & Lifestyle",
    image: "/Weekend Style Sale.jpg",
    badge: "Up to 50% OFF*",
  },
  {
    title: "Food Court Combos",
    desc: "Exclusive food combos, meal deals and family platters across select outlets.",
    tag: "Food Court & Cafés",
    image: "/food.jpg",
    badge: "Combos & Meals*",
  },
  {
    title: "Movie + Meal Offers",
    desc: "Special movie ticket + meal offers for couples, families and groups.",
    tag: "Multiplex Specials",
    image: "/Movie + Meal Offers.jpg",
    badge: "Limited Period*",
  },
];

export function OffersSection() {
  return (
    <section
      id="offers"
      className="relative mx-auto max-w-6xl px-4 py-16 md:py-24"
    >
      {/* Background moving glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] bottom-[-40px] h-72 w-72 rounded-full bg-gradient-to-br from-amber-400/25 via-yellow-300/25 to-rose-300/25 blur-3xl md:h-96 md:w-96"
        animate={{
          x: [0, -20, 15, -25, 0],
          y: [0, -10, 20, -15, 0],
          scale: [1, 1.07, 1, 1.1, 1],
        }}
        transition={{
          duration: 24,
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
        <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-600">
          Offers & Promotions
        </span>

        <h2 className="mt-4 text-2xl font-semibold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
          Make every visit{" "}
          <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
            extra rewarding
          </span>
          .
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
          Discover ongoing sales, dining deals, movie combos and exclusive bank
          offers curated specially for visitors at Glacier Point Mall.
        </p>
      </motion.div>

      {/* Offers grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
        className="mt-10 grid gap-6 md:grid-cols-3"
      >
        {offerCards.map((offer, index) => (
          <motion.div
            key={offer.title}
            className="group relative overflow-hidden rounded-3xl border border-amber-100 bg-white/90 shadow-md shadow-amber-50 backdrop-blur"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.15 + index * 0.06,
            }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            {/* Image */}
            <div className="relative h-40 w-full overflow-hidden md:h-44">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-80" />
              <div className="absolute left-4 top-3 rounded-full bg-amber-50/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                {offer.badge}
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-xs text-white">
                <div className="font-semibold">{offer.title}</div>
                <div className="mt-0.5 text-[11px] text-gray-200">
                  {offer.tag}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-4 pb-4">
              <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
                {offer.desc}
              </p>

              <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Limited period | T&C apply
                </span>
                <button className="text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                  View Details →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Infinite marquee of highlights */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-amber-100 bg-white/85 p-3 shadow-sm backdrop-blur">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-500">
          What&apos;s on at Glacier Point Mall
        </div>
        <div className="mt-2 flex overflow-hidden">
          <motion.div
            className="flex gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 26,
              ease: "linear",
            }}
          >
            {[...offerHighlights, ...offerHighlights].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="whitespace-nowrap rounded-full bg-amber-50 px-4 py-1 text-[11px] font-medium text-amber-700"
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