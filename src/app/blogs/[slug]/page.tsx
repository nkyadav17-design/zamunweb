import type { Metadata } from "next";
import Script from "next/script";
import { sanityClient } from "@/sanity/lib/client";
import BlogDetailPageClient from "./BlogDetailPageClient";
import { urlFor } from "@/sanity/lib/image";
import { toJsonLd } from "@/lib/schema";

const SITE_URL = "https://www.zamun.com";
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const AUTHOR_ID = `${SITE_URL}/#author`; // keep if defined, else replace with Person

/* ---------------- METADATA ---------------- */
export async function generateMetadata(props: any): Promise<Metadata> {
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

  const ogImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : undefined;

  const url = `${SITE_URL}/blogs/${slug}`;
  const title = `${post.title} | Zamun`;

  return {
    title,
    description: post.excerpt || "Read this marketing and growth insight from Zamun.",
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      title,
      description: post.excerpt || "Read this marketing and growth insight from Zamun.",
      type: "article",
      url,
      siteName: "Zamun",
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt || "Read this marketing and growth insight from Zamun.",
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

/* ---------------- PAGE + SCHEMA ---------------- */
export default async function BlogDetailPage(props: any) {
  const params = await props.params;
  const slug = (params as { slug: string }).slug;

  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      excerpt,
      publishedAt,
      _updatedAt,
      "imageUrl": mainImage.asset->url
    }`,
    { slug }
  );

  if (!post) {
    return <BlogDetailPageClient slug={slug} />;
  }

  const url = `${SITE_URL}/blogs/${slug}`;

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: post.title,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        inLanguage: "en",
      },
      {
        "@type": "BlogPosting",
        "@id": `${url}#blogposting`,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        headline: post.title,
        description: post.excerpt,
        image: post.imageUrl ? [post.imageUrl] : undefined,
        author: { "@id": AUTHOR_ID },
        publisher: { "@id": ORG_ID },
        datePublished: post.publishedAt,
        dateModified: post._updatedAt || post.publishedAt,
      },
    ],
  };

  return (
    <>
      {/* ✅ BlogPosting Schema */}
      <Script
        id={`zamun-blog-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: toJsonLd(blogSchema) }}
      />

      {/* Blog UI */}
      <BlogDetailPageClient slug={slug} />
    </>
  );
}
