// app/blogs/page.tsx
import type { Metadata } from "next";
import BlogsPageClient from "./BlogsPageClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zamun.com"), // change to vercel URL until domain is live
  title: "Marketing Blogs & Insights | Zamun",
  description:
    "Read the latest blogs and insights from Zamun — branding, content strategy, SEO, performance marketing, and growth playbooks for digital-first businesses.",
  keywords: [
    "Marketing Blogs",
    "Brand Strategy Articles",
    "SEO Blogs",
    "Content Marketing Tips",
    "Digital Growth Strategy",
    "Zamun Insights",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    type: "website",
    url: "https://www.zamun.com/blogs",
    title: "Marketing Blogs & Insights | Zamun",
    description:
      "Explore practical insights to grow your brand through digital marketing, content, SEO, and storytelling.",
    siteName: "Zamun",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Blogs & Insights | Zamun",
    description:
      "Deep dives and growth guides from marketing experts at Zamun.",
  },
};

export default function BlogsPage() {
  return <BlogsPageClient />;
}
