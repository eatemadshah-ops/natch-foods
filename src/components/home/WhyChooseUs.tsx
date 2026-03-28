"use client";

import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: GlobeAltIcon,
    title: "Global Network",
    description:
      "Established relationships with producers and distributors across 30+ countries on every continent.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Quality Assured",
    description:
      "Every product is lab-tested and certified. We hold FDA, FSSAI, ISO 22000, and HACCP certifications.",
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: "Custom Solutions",
    description:
      "From private labeling to custom packaging, we tailor our services to match your market needs.",
  },
  {
    icon: TruckIcon,
    title: "Reliable Logistics",
    description:
      "End-to-end supply chain management with real-time tracking, cold chain capabilities, and on-time delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-wheat/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Why Partner With Natch Foods"
          subtitle="We make global food trade simple, reliable, and profitable for our partners."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
