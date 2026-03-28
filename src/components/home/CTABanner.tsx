"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Ready to Expand Your Food Business?",
  subtitle = "Let's discuss how Natch Foods can connect you with premium products and global markets.",
}: CTABannerProps) {
  return (
    <section className="bg-forest py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl px-6 text-center lg:px-8"
      >
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-white/70">{subtitle}</p>
        <div className="mt-8">
          <Button
            href="/contact"
            size="lg"
            className="bg-gold text-white hover:bg-gold-dark"
          >
            Contact Us Today
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
