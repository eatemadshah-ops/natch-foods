export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const blogCategories = [
  "All",
  "Industry Trends",
  "Quality & Safety",
  "Sustainability",
  "Company News",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "rise-of-organic-packaged-foods",
    title: "The Rise of Organic Packaged Foods in Global Trade",
    excerpt:
      "Organic food exports have surged 22% year-over-year. We explore what's driving demand and how importers can capitalize on this growing trend.",
    category: "Industry Trends",
    date: "2026-03-15",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "key-trends-food-import-2026",
    title: "5 Key Trends Shaping the Food Import Industry in 2026",
    excerpt:
      "From blockchain traceability to plant-based innovation, these trends are transforming how food moves across borders.",
    category: "Industry Trends",
    date: "2026-03-08",
    readTime: "7 min read",
  },
  {
    slug: "choosing-food-distribution-partner",
    title: "How to Choose the Right Food Distribution Partner",
    excerpt:
      "Selecting a distribution partner is one of the most important decisions for your food business. Here's what to look for.",
    category: "Company News",
    date: "2026-02-20",
    readTime: "4 min read",
  },
  {
    slug: "food-safety-certifications-guide",
    title: "Understanding Food Safety Certifications for International Trade",
    excerpt:
      "FDA, FSSAI, ISO 22000, HACCP — navigating the alphabet soup of food safety certifications can be daunting. We break it down.",
    category: "Quality & Safety",
    date: "2026-02-10",
    readTime: "6 min read",
  },
  {
    slug: "sustainable-packaging-importers",
    title: "Sustainable Packaging: What Importers Need to Know",
    excerpt:
      "New regulations and consumer expectations are reshaping packaging requirements. Stay ahead of the curve with these insights.",
    category: "Sustainability",
    date: "2026-01-28",
    readTime: "5 min read",
  },
  {
    slug: "farm-to-shelf-quality-control",
    title: "From Farm to Shelf: Our Quality Control Process",
    excerpt:
      "A behind-the-scenes look at how Natch Foods ensures every product meets our exacting standards before it ships.",
    category: "Quality & Safety",
    date: "2026-01-15",
    readTime: "4 min read",
  },
];
