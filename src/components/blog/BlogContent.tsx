"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import Badge from "@/components/ui/Badge";
import { blogPosts, blogCategories } from "@/lib/data/blog-posts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featured = filtered.find((p) => p.featured) || filtered[0];
  const rest = filtered.filter((p) => p !== featured);

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
              / Blog
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">
              Insights & News
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-white/70">
              Trends, tips, and stories from the world of international food
              trade.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-10 flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
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

          {/* Featured Post */}
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 group cursor-pointer rounded-2xl border border-sage/20 bg-white overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-forest/10 to-wheat flex items-center justify-center">
                  <span className="text-6xl">📰</span>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <Badge variant="gold">{featured.category}</Badge>
                    <span className="text-xs text-charcoal/40">
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 font-heading text-2xl font-bold text-charcoal group-hover:text-forest transition-colors sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                    {featured.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-charcoal/40">
                    {formatDate(featured.date)}
                  </p>
                  <span className="mt-4 text-sm font-medium text-gold group-hover:text-gold-dark">
                    Read Article &rarr;
                  </span>
                </div>
              </div>
            </motion.article>
          )}

          {/* Post Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group cursor-pointer rounded-2xl border border-sage/20 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-sage/10 to-wheat/50 flex items-center justify-center">
                  <span className="text-3xl">
                    {post.category === "Industry Trends"
                      ? "📊"
                      : post.category === "Quality & Safety"
                        ? "🛡️"
                        : post.category === "Sustainability"
                          ? "🌱"
                          : "📢"}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <Badge>{post.category}</Badge>
                    <span className="text-xs text-charcoal/40">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-charcoal group-hover:text-forest transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/60 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-charcoal/40">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-sm font-medium text-gold group-hover:text-gold-dark">
                      Read &rarr;
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
