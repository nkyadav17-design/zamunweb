import type { Metadata } from "next";
import { sanityClient } from "@/sanity/lib/client";
import BlogDetailPageClient from "./BlogDetailPageClient";

type Props = { params: { slug: string } };

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = params;

  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{ title, excerpt }`,
    { slug }
  );

  if (!post) {
    return {
      title: "Blog Not Found | Zamun",
      description: "This blog post may be unavailable.",
    };
  }

  return {
    title: `${post.title} | Zamun`,
    description:
      post.excerpt ||
      "Marketing, branding and growth insights from Zamun.",
  };
}

export default function BlogDetailPage({ params }: Props) {
  return <BlogDetailPageClient slug={params.slug} />;
}
