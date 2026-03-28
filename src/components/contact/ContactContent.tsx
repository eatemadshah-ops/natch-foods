"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Button from "@/components/ui/Button";

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "info@natchfoods.com",
    href: "mailto:info@natchfoods.com",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPinIcon,
    label: "Address",
    value: "123 Trade Avenue\nNew York, NY 10001",
  },
  {
    icon: ClockIcon,
    label: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM EST",
  },
];

const faqs = [
  {
    question: "What is your minimum order quantity?",
    answer:
      "Minimum order quantities vary by product. For most items, we offer flexible MOQs starting from a single pallet. Contact us for specific product requirements.",
  },
  {
    question: "Do you offer private labeling services?",
    answer:
      "Yes! We provide comprehensive private labeling and custom packaging services. Our team can help you design packaging that meets your brand requirements and local regulations.",
  },
  {
    question: "What certifications do your products carry?",
    answer:
      "Our products carry various certifications including FDA registration, FSSAI, ISO 22000, HACCP, Halal, and Organic certifications depending on the product line.",
  },
  {
    question: "What are your shipping and delivery terms?",
    answer:
      "We offer flexible shipping terms including FOB, CIF, and DDP. Delivery timelines depend on destination and order size, typically ranging from 2-6 weeks for international shipments.",
  },
  {
    question: "How do I request a product sample?",
    answer:
      "Simply fill out our contact form or email us with your product interest. We're happy to send samples for qualified buyers to evaluate before placing a bulk order.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-sage/20">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-charcoal">{question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-charcoal/40 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="pb-5 text-sm leading-relaxed text-charcoal/60"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
}

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission (replace with Formspree endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  }

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
              / Contact
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">
              Get In Touch
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-white/70">
              Have a question or ready to start a partnership? We&apos;d love to
              hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="rounded-2xl bg-forest/5 p-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-charcoal">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-charcoal/60">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-xl border border-sage/30 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-forest focus:ring-1 focus:ring-forest"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl border border-sage/30 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-forest focus:ring-1 focus:ring-forest"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-sage/30 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-forest focus:ring-1 focus:ring-forest"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full rounded-xl border border-sage/30 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-forest focus:ring-1 focus:ring-forest"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Subject *
                    </label>
                    <select
                      required
                      className="w-full rounded-xl border border-sage/30 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-forest focus:ring-1 focus:ring-forest"
                    >
                      <option value="">Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Product Request</option>
                      <option>Partnership Opportunity</option>
                      <option>Quote Request</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-xl border border-sage/30 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-forest focus:ring-1 focus:ring-forest resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest/10 text-forest">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-charcoal/50 uppercase tracking-wider">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm text-charcoal hover:text-forest transition-colors whitespace-pre-line"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-charcoal whitespace-pre-line">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-wheat p-8">
                <h4 className="font-heading text-lg font-semibold text-charcoal">
                  Quick Response
                </h4>
                <p className="mt-2 text-sm text-charcoal/60">
                  We typically respond within 24 hours on business days. For
                  urgent inquiries, please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-wheat/50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-gold" />
          <div className="mt-10">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
