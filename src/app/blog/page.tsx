import type { Metadata } from "next";
import BlogContent from "@/components/blog/BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, trends, and news from the world of international food trade. Stay informed with Natch Foods.",
};

export default function BlogPage() {
  return <BlogContent />;
}
