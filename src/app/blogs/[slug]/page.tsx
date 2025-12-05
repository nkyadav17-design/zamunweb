// src/app/blogs/[slug]/page.tsx
import type { Metadata } from "next";
import { sanityClient } from "@/sanity/lib/client";
import BlogDetailPageClient from "./BlogDetailPageClient";
import { urlFor } from "@/sanity/lib/image";

// --------- DYNAMIC METADATA FOR EACH BLOG ----------
export async function generateMetadata(props: any): Promise<Metadata> {
  // In Next 15, props.params can be wrapped, so we keep it flexible
  const params = await props.params;
  const slug = (params as { slug: string }).slug;

  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      excerpt,
      mainImage
    }`,
    { slug }
  );

  if (!post) {
    return {
      title: "Blog not found | Zamun",
      description: "This article could not be found on Zamun.",
    };
  }

  const ogImage = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined;
  const url = `https://www.zamun.com/blogs/${slug}`;
  const title = `${post.title} | Zamun`;

  return {
    title,
    description:
      post.excerpt ||
      "Read this marketing and growth insight from Zamun.",
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    openGraph: {
      title,
      description:
        post.excerpt ||
        "Read this marketing and growth insight from Zamun.",
      type: "article",
      url,
      siteName: "Zamun",
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description:
        post.excerpt ||
        "Read this marketing and growth insight from Zamun.",
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

// --------- PAGE RENDER ----------
export default async function BlogDetailPage(props: any) {
  const params = await props.params;
  const slug = (params as { slug: string }).slug;

  return <BlogDetailPageClient slug={slug} />;
}
