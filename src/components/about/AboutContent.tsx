"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  HeartIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/home/CTABanner";
import { team, values } from "@/lib/data/team";

const missionCards = [
  {
    icon: HeartIcon,
    title: "Mission",
    text: "To bridge global food markets by providing premium, ethically sourced packaged foods that enrich lives and create lasting trade partnerships.",
  },
  {
    icon: EyeIcon,
    title: "Vision",
    text: "To be the most trusted name in international food trade — known for quality, integrity, and the power to connect cultures through cuisine.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Values",
    text: "Quality first. Transparency always. Sustainability in everything. We believe great food builds great relationships.",
  },
];

const certifications = [
  "FDA Registered",
  "FSSAI Certified",
  "ISO 22000",
  "HACCP Compliant",
  "Halal Certified",
  "Organic Options",
];

export default function AboutContent() {
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
              / About
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">
              About Natch Foods
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-gold">Our Story</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Built on a Passion for Quality Food
              </h2>
              <div className="mt-6 space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Natch Foods was founded with a simple belief: the world
                  deserves access to quality food, no matter where it comes from
                  or where it&apos;s going. What started as a small operation
                  connecting local producers with international buyers has grown
                  into a trusted global food trade company.
                </p>
                <p>
                  Today, we work with over 150 partners across 30+ countries,
                  moving premium packaged food products — from aromatic spices
                  and ancient grains to artisan snacks and specialty beverages —
                  across borders with reliability and care.
                </p>
                <p>
                  Our team combines deep expertise in international trade,
                  food safety, and logistics to ensure every product meets the
                  highest standards before it reaches your shelves.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sage/30 to-wheat flex items-center justify-center">
                <div className="text-center p-8">
                  <GlobeAltIcon className="mx-auto h-20 w-20 text-forest/40" />
                  <p className="mt-4 text-sm text-charcoal/40">
                    Company image placeholder
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-wheat/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="What Drives Us"
            subtitle="Our mission, vision, and values guide every decision we make."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {missionCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-sm text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  <card.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-charcoal">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that shape how we do business every day."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-sage/20 bg-white p-8"
              >
                <h3 className="font-heading text-lg font-semibold text-forest">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-wheat/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Leadership"
            subtitle="Meet the team driving Natch Foods forward."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-forest/10 text-forest font-heading text-2xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-charcoal">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gold">{member.role}</p>
                <p className="mt-3 text-xs leading-relaxed text-charcoal/60">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-center font-heading text-xl font-semibold text-charcoal/50 mb-8">
            Our Certifications & Compliance
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-full border border-sage/30 bg-white px-6 py-3 text-sm font-medium text-charcoal/70"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Join Our Network?"
        subtitle="Whether you're a producer looking for distribution or a buyer seeking quality products, we'd love to hear from you."
      />
    </>
  );
}
