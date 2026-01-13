import type { Metadata } from "next";
import Script from "next/script";
import { sanityClient } from "@/sanity/lib/client";
import BlogDetailPageClient from "./BlogDetailPageClient";
import { urlFor } from "@/sanity/lib/image";

const SITE_URL = "https://www.zamun.com";

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

/* ---------------- PAGE ---------------- */
export default async function BlogDetailPage(props: any) {
  const params = await props.params;
  const slug = (params as { slug: string }).slug;

  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      excerpt,
      mainImage,
      publishedAt,
      _updatedAt,
      "authorName": author->name
    }`,
    { slug }
  );

  // Always render page (even if post is missing)
  if (!post) return <BlogDetailPageClient slug={slug} />;

  const pageUrl = `${SITE_URL}/blogs/${slug}`;

  const featuredImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : undefined;

  const title = post.title || "Blog | Zamun";
  const description =
    post.excerpt || "Explore marketing, branding, and growth insights from Zamun.";

  const authorName = post.authorName || "Zamun Team";

  const datePublished = post.publishedAt
    ? new Date(post.publishedAt).toISOString()
    : undefined;

  const dateModified = post._updatedAt
    ? new Date(post._updatedAt).toISOString()
    : datePublished;

  /* ---------------- BLOGPOSTING SCHEMA ---------------- */
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}#blogposting`,
    mainEntityOfPage: pageUrl,
    headline: title,
    name: title,
    description,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    author: {
      "@type": "Person",
      name: authorName,
      url: `${SITE_URL}/`,
    },
    publisher: {
      "@type": "Organization",
      name: "Zamun",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/img/logo.png`,
      },
    },
    ...(featuredImage ? { image: [featuredImage] } : {}),
    inLanguage: "en",
    keywords: [
      "Personalized Marketing",
      "Marketing Trends",
      "Customer Experience",
      "AI in Marketing",
      "Segmentation",
      "Marketing Automation",
    ],
  };

  /* ---------------- BREADCRUMB SCHEMA ---------------- */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: `${SITE_URL}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: pageUrl,
      },
    ],
  };

  /* ---------------- FAQPAGE SCHEMA ---------------- */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is personalized marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Personalized marketing tailors messages, offers, and experiences to individual users based on behavior, preferences, and context, improving relevance and engagement.",
        },
      },
      {
        "@type": "Question",
        name: "Why is personalized marketing important in 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Customers expect relevant experiences across channels. Personalization helps brands improve conversion rates, retention, and customer satisfaction.",
        },
      },
      {
        "@type": "Question",
        name: "How does AI support personalized marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI enables predictive targeting, automated segmentation, real-time recommendations, and dynamic content, making personalization scalable.",
        },
      },
      {
        "@type": "Question",
        name: "What data is required for personalization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Effective personalization uses first-party data such as browsing behavior, purchase history, CRM records, and preferences collected with consent.",
        },
      },
      {
        "@type": "Question",
        name: "How can businesses start with personalized marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with simple segmentation, personalized emails, and content recommendations, then expand into automation and AI-based targeting.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="zamun-blogposting-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <Script
        id="zamun-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Script
        id="zamun-faqpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlogDetailPageClient slug={slug} />
    </>
  );
}
