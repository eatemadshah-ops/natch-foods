"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FireIcon,
  SparklesIcon,
  CakeIcon,
} from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredCategories } from "@/lib/data/products";

const iconMap: Record<string, React.ReactNode> = {
  fire: <FireIcon className="h-8 w-8" />,
  grain: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-6-6c0-3.314 2.686-6 6-6s6 2.686 6 6" />
    </svg>
  ),
  snack: <CakeIcon className="h-8 w-8" />,
  beverage: <SparklesIcon className="h-8 w-8" />,
};

export default function FeaturedProducts() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Our Product Range"
          subtitle="We source and distribute premium packaged foods across key categories, connecting the world's best producers with global markets."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/products?category=${cat.name.toLowerCase().split(" ")[0]}`}
                className="group block rounded-2xl border border-sage/20 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                  {iconMap[cat.icon]}
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-charcoal">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {cat.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-gold group-hover:text-gold-dark">
                  View Products &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
