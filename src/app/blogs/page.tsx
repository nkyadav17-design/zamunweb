// app/blogs/page.tsx
import type { Metadata } from "next";
import BlogsPageClient from "./BlogsPageClient";

export const metadata: Metadata = {
  title: "Marketing Blogs & Insights | Zamun",
  description:
    "Stay ahead with Zamun’s latest blogs on branding, content strategy, SEO, performance marketing, and growth for tech and digital-first companies.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Marketing Blogs & Insights | Zamun",
    description:
      "Deep dives, playbooks, and expert perspectives from Zamun’s team on brand and growth strategy.",
    type: "website",
    url: "https://www.zamun.com/blogs",
    siteName: "Zamun",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Blogs & Insights | Zamun",
    description:
      "Read Zamun’s latest articles on branding, content, SEO, and growth for tech-first brands.",
  },
};

export default function BlogsPage() {
  return <BlogsPageClient />;
}
