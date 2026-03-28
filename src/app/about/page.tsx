import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Natch Foods — our story, mission, team, and commitment to connecting global food markets with premium products.",
};

export default function AboutPage() {
  return <AboutContent />;
}
