// app/blogs/[slug]/page.tsx
import type { Metadata } from "next";
import { sanityClient } from "@/sanity/lib/client";
import BlogDetailPageClient from "./BlogDetailPageClient";

type PageProps = {
  params: { slug: string };
};

// --------- DYNAMIC METADATA FOR EACH BLOG ----------
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = params;

  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      excerpt,
      "image": mainImage.asset->url
    }`,
    { slug }
  );

  if (!post) {
    return {
      title: "Blog not found | Zamun",
      description: "This article could not be found on Zamun.",
    };
  }

  const url = `https://www.zamun.com/blogs/${slug}`;

  return {
    title: `${post.title} | Zamun`,
    description:
      post.excerpt ||
      "Read this marketing and growth insight from Zamun.",
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    openGraph: {
      title: post.title,
      description:
        post.excerpt ||
        "Read this marketing and growth insight from Zamun.",
      type: "article",
      url,
      siteName: "Zamun",
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description:
        post.excerpt ||
        "Read this marketing and growth insight from Zamun.",
    },
  };
}

// --------- PAGE RENDER ----------
export default function BlogDetailPage({ params }: PageProps) {
  const { slug } = params;
  return <BlogDetailPageClient slug={slug} />;
}
