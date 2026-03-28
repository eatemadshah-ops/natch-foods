"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest via-forest-dark to-forest py-24 sm:py-32 lg:py-40">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-sage blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold-light mb-6">
              Premium Food Import & Export
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Connecting the World
            <br />
            <span className="text-gold">Through Quality Food</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            Natch Foods brings premium packaged food products from trusted
            producers to global markets. From spices and grains to snacks and
            beverages — we make international food trade simple.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/products" size="lg">
              Explore Products
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-forest"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
