"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Natch Foods has been an incredible partner. Their quality standards and reliability have helped us grow our specialty food section by 40%.",
    name: "David Kim",
    company: "Pacific Grocers, USA",
  },
  {
    quote:
      "The team at Natch Foods understands global food trade like no other. Their logistics support and product range are exactly what we needed.",
    name: "Fatima Al-Rashid",
    company: "Gulf Premium Foods, UAE",
  },
  {
    quote:
      "From sourcing to delivery, Natch Foods provides a seamless experience. Their spice range is some of the finest we've stocked in our stores.",
    name: "Sophie Laurent",
    company: "EuroMarket Group, France",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="What Our Partners Say"
          subtitle="Trusted by importers, distributors, and retailers worldwide."
        />

        <div className="mx-auto max-w-3xl">
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-white p-8 shadow-sm text-center"
              >
                <svg
                  className="mx-auto h-8 w-8 text-gold/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mt-6 text-lg leading-relaxed text-charcoal/80 italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-heading font-semibold text-charcoal">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-charcoal/50">
                    {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-gold"
                    : "w-2.5 bg-charcoal/20 hover:bg-charcoal/40"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
