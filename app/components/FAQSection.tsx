"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What are the mall timings?",
    answer:
      "Glacier Point Mall is typically open from 10:00 AM to 10:00 PM on weekdays, with extended timings on weekends and holidays for select outlets. Please check with individual stores and the multiplex for their exact timings.",
  },
  {
    question: "Is there parking available at the mall?",
    answer:
      "Yes, the mall offers multi-level parking with dedicated zones for cars, two-wheelers and accessible parking. Clear signages and staff assistance are available to help you find a spot easily.",
  },
  {
    question: "Are there family and kids-friendly facilities?",
    answer:
      "The mall is designed to be family friendly with kids’ play areas, baby care rooms, stroller access, family washrooms and plenty of seating spaces across all levels.",
  },
  {
    question: "Does the mall have a multiplex and entertainment zone?",
    answer:
      "Yes, Glacier Point Mall houses a modern multiplex cinema along with arcade & VR gaming zones, kids’ play areas and regular live events or pop-ups on weekends.",
  },
  {
    question: "Are vegetarian / vegan food options available?",
    answer:
      "Absolutely. Our food court and café partners offer a wide range of vegetarian, vegan and Jain-friendly options. You can confirm specific preferences directly with each outlet.",
  },
  {
    question: "How can brands or events collaborate with the mall?",
    answer:
      "For brand activations, kiosks, events or partnerships, please reach out to the mall’s marketing & leasing team through the official contact details mentioned in the Contact / Visit section.",
  },
];

const quickTopics = [
  "Mall timings & holidays",
  "Parking & entry gates",
  "Kids & family facilities",
  "Wheelchair accessibility",
  "Lost & found desk",
  "Events & activations",
  "Pet policy",
  "Security & safety",
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative mx-auto max-w-6xl px-4 py-16 md:py-24"
    >
      {/* Moving background blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-[-40px] h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/20 via-sky-300/25 to-emerald-300/25 blur-3xl md:h-96 md:w-96"
        animate={{
          x: [0, -20, 10, -25, 0],
          y: [0, 20, -10, 18, 0],
          scale: [1, 1.06, 1, 1.1, 1],
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
        <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-600">
          Help & FAQs
        </span>

        <h2 className="mt-4 text-2xl font-semibold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
          Answers to{" "}
          <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            frequently asked questions
          </span>
          .
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
          Find quick answers about timings, parking, facilities and everything
          you need to plan your visit to Glacier Point Mall.
        </p>
      </motion.div>

      {/* FAQ accordion */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
        className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] md:items-start"
      >
        {/* Left: Questions */}
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white/95 shadow-sm shadow-sky-50 backdrop-blur"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.1 + index * 0.04,
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left md:px-5 md:py-4"
                >
                  <div>
                    <div className="text-sm font-semibold text-gray-900 md:text-base">
                      {item.question}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-xs font-bold text-gray-600"
                  >
                    {isOpen ? "-" : "+"}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                      <div className="px-4 pb-3 text-xs leading-relaxed text-gray-600 md:px-5 md:pb-4 md:text-sm">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Quick info card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          className="relative mt-2 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-5 shadow-md shadow-sky-100"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
              Need more help?
            </div>
            <div className="mt-3 text-lg font-semibold text-gray-900">
              We&apos;re here to make your visit smoother.
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              For any specific queries related to stores, events, accessibility
              or corporate tie-ups, you can reach our helpdesk or information
              kiosk during mall operating hours.
            </p>

            <div className="mt-4 grid gap-3 text-xs text-gray-700">
              <div className="flex items-start gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Information desk located near the main atrium.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Security & support staff available across all levels.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-indigo-400" />
                <span>Emergency & first-aid assistance on request.</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full bg-sky-100 px-3 py-1 font-medium text-sky-700">
                Visitor Helpdesk
              </span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 font-medium text-emerald-700">
                Safety & Support
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Infinite marquee of quick topics */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-sky-100 bg-white/90 p-3 shadow-sm backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-600">
          <span className="font-semibold uppercase tracking-[0.16em] text-sky-500">
            Popular help topics
          </span>
          <span className="hidden md:inline-flex">
            Still have a question? Visit the information desk at the main
            atrium.
          </span>
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
            {[...quickTopics, ...quickTopics].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="whitespace-nowrap rounded-full bg-sky-50 px-4 py-1 text-[11px] font-medium text-sky-700"
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