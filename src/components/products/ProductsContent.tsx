"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/home/CTABanner";
import { products, categories } from "@/lib/data/products";
import type { Product } from "@/lib/data/products";

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <Badge>{product.category}</Badge>
            <h3 className="mt-3 font-heading text-2xl font-bold text-charcoal">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-charcoal/40 hover:text-charcoal text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
          {product.description}
        </p>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-charcoal">Key Features</h4>
          <ul className="mt-2 space-y-1">
            {product.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-charcoal/60"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold text-charcoal">Origin:</span>{" "}
            <span className="text-charcoal/60">{product.origin}</span>
          </div>
          <div>
            <span className="font-semibold text-charcoal">Packaging:</span>{" "}
            <span className="text-charcoal/60">
              {product.packaging.join(", ")}
            </span>
          </div>
        </div>

        <div className="mt-8">
          <Button href="/contact" size="lg" className="w-full">
            Request a Quote
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductsContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Page Banner */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-white/60">
              <Link href="/" className="hover:text-white">
                Home
              </Link>{" "}
              / Products
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">
              Our Products
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-white/70">
              Premium packaged foods sourced from trusted producers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-forest text-white"
                    : "bg-white border border-sage/30 text-charcoal/60 hover:border-forest hover:text-forest"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-2xl border border-sage/20 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Image placeholder */}
                  <div className="aspect-[3/2] bg-gradient-to-br from-wheat to-sage/20 flex items-center justify-center">
                    <span className="text-4xl">
                      {product.category.includes("Spice")
                        ? "🌶️"
                        : product.category.includes("Grain")
                          ? "🌾"
                          : product.category.includes("Snack")
                            ? "🍪"
                            : product.category.includes("Beverage")
                              ? "🍵"
                              : product.category.includes("Oil")
                                ? "🫒"
                                : "🍽️"}
                    </span>
                  </div>

                  <div className="p-6">
                    <Badge>{product.category}</Badge>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-charcoal">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal/60 line-clamp-2">
                      {product.description}
                    </p>
                    <p className="mt-2 text-xs text-charcoal/40">
                      Origin: {product.origin}
                    </p>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="mt-4 text-sm font-medium text-gold hover:text-gold-dark transition-colors"
                    >
                      Learn More &rarr;
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>

      <CTABanner
        title="Need a Custom Product?"
        subtitle="We offer private labeling, custom packaging, and bespoke product sourcing. Let's talk."
      />
    </>
  );
}
