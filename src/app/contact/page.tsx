import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Natch Foods for product inquiries, partnership opportunities, or custom quotes. We're here to help grow your food business.",
};

export default function ContactPage() {
  return <ContactContent />;
}
