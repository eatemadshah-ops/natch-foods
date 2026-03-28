import type { Metadata } from "next";
import ProductsContent from "@/components/products/ProductsContent";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our catalog of premium packaged food products — spices, grains, snacks, beverages, oils, and ready-to-eat meals from around the world.",
};

export default function ProductsPage() {
  return <ProductsContent />;
}
