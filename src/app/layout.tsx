import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Natch Foods | Premium Packaged Food Import & Export",
    template: "%s | Natch Foods",
  },
  description:
    "Natch Foods connects global markets with premium packaged food products. Trusted import and export services for spices, grains, snacks, beverages, and more.",
  keywords: [
    "food import",
    "food export",
    "packaged food",
    "wholesale food",
    "food distribution",
    "Natch Foods",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Natch Foods",
    title: "Natch Foods | Premium Packaged Food Import & Export",
    description:
      "Connecting global markets with premium packaged food products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
