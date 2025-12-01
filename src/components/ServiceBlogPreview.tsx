// NO "use client" – let it be a server component
import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "@/sanity/lib/client";

type Post = {
  title: string;
  slug: { current: string };
  image?: string;
};

async function getLatestPost(): Promise<Post | null> {
  const query = `
    *[_type == "post"] | order(publishedAt desc)[0]{
      title,
      slug,
      "image": mainImage.asset->url
    }
  `;

  const post = await sanityClient.fetch(query);
  return post || null;
}

export default async function ServiceBlogPreview() {
  const post = await getLatestPost();

  if (!post) return null; // nothing to show if no posts

  return (
    <section className="blog w-full bg-white text-zinc-900 py-20">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-[1fr_420px] items-center">
        <div className="blog-text">
          <p className="uppercase text-xs tracking-wide text-zinc-500 mb-2">
            Up next
          </p>
          <h4 className="text-2xl sm:text-3xl font-semibold mb-4">
            {post.title}
          </h4>

          <Link
            href={`/blogs/${post.slug.current}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-800"
          >
            Check it out <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-zinc-200 bg-zinc-100 blog-img">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
