"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/slider/slider-1.jpg",
    title: "Welcome to Glacier Point Mall",
    subtitle: "Premium shopping, dining & entertainment in one destination.",
  },
  {
    id: 2,
    image: "/slider/slider-2.jpg",
    title: "Shop the Latest Trends",
    subtitle: "International & Indian brands curated for your lifestyle.",
  },
  {
    id: 3,
    image: "/slider/slider-3.jpg",
    title: "Food. Fun. Memories.",
    subtitle: "Cafés, fine dining & experiences for your perfect day out.",
  },
];

export function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full md:h-[100vh]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center justify-center px-4">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200/90"
                  >
                    Glacier Point Mall
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                    className="text-3xl font-bold leading-tight md:text-5xl lg:text-6xl"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
                    className="mt-4 max-w-2xl text-sm text-gray-200 md:text-base"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-4"
                  >
                    <a
                      href="#stores"
                      className="rounded-full bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-gray-900 shadow-lg hover:bg-gray-100 md:text-sm"
                    >
                      Explore Stores
                    </a>
                    <a
                      href="#visit"
                      className="rounded-full border border-white/70 bg-white/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-md hover:bg-white/15 md:text-sm"
                    >
                      Plan Your Visit
                    </a>
                  </motion.div>

                  {/* Bottom info strip */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="mt-10 flex w-full flex-wrap items-center justify-center gap-6 text-[11px] md:text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      <span>Open 7 days • 10 AM – 10 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-sky-400" />
                      <span>150+ International & Indian Brands</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-rose-400" />
                      <span>Multiplex • Food Court • Play Zone</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional: gradient at bottom to merge into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}