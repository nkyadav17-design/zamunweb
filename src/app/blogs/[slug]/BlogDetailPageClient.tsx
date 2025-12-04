"use client";

import Image from "next/image";
import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { useEffect, useState } from "react";
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Post = {
  title: string;
  image?: string;
  category?: string;
  excerpt?: string;
  body: any;
  publishedAt?: string;
  author?: string;
  authorImage?: string;
};

type LatestPost = {
  _id: string;
  title: string;
  image?: string;
  slug?: { current?: string };
};

/* ---------------- PORTABLE TEXT COMPONENTS (for body) ---------------- */

const portableComponents: PortableTextComponents = {
  types: {
    // 👇 render Sanity image blocks inside the blog content
    image: ({ value }) => {
      if (!value) return null;
      const imgUrl = urlFor(value).url();

      return (
        <figure className="my-10">
          <div className="w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={imgUrl}
              alt={value.alt || "Blog image"}
              width={1200} // ⬅ enables auto height response
              height={800} // ⬅ responsive natural ratio
              className="w-full h-auto rounded-2xl object-contain" // ⬅ height auto, no crop
            />
          </div>

          {value.caption && (
            <figcaption className="mt-3 text-sm text-zinc-400 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed text-zinc-200">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl sm:text-3xl font-semibold text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-xl font-semibold text-white">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-indigo-400/70 pl-4 italic text-zinc-200">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-1 text-zinc-200">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-1 text-zinc-200">
        {children}
      </ol>
    ),
  },
};

export default function BlogDetailPageClient({ slug }: { slug: string }) {
  // 🔁 Update this to your live domain when ready
  const baseUrl = "https://www.zamun.com";
  const shareUrl = `${baseUrl}/blogs/${slug}`;

  const [post, setPost] = useState<Post | null>(null);
  const [latestPosts, setLatestPosts] = useState<LatestPost[]>([]);
  const [toc, setToc] = useState<{ text: string; id: string }[]>([]);

  // ---------- Load post + latest ----------
  useEffect(() => {
    async function load() {
      const data = await sanityClient.fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          "image": mainImage.asset->url,
          "category": categories[0]->title,
          excerpt,
          body,
          publishedAt,
          "author": author->name,
          "authorImage": author->image.asset->url
        }`,
        { slug }
      );

      setPost(data);

      const more = await sanityClient.fetch(
        `*[_type == "post" && slug.current != $slug]
          | order(coalesce(publishedAt, _createdAt) desc)[0...3]{
            _id,
            title,
            "image": mainImage.asset->url,
            slug
          }`,
        { slug }
      );

      setLatestPosts(more);
    }

    load();
  }, [slug]);

  // ---------- Build TOC ----------
  useEffect(() => {
    if (!post) return;

    setTimeout(() => {
      const headings = Array.from(
        document.querySelectorAll<HTMLElement>("article h2")
      );

      const tocItems = headings.map((el) => {
        const text = el.innerText;
        const id =
          el.id ||
          text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");

        el.id = id;
        return { text, id };
      });

      setToc(tocItems);
    }, 100);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0B0B10] text-white p-10">
        Loading...
      </div>
    );
  }

  // ---------- Share URLs ----------
  const linkedinURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    shareUrl
  )}`;
  const twitterURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    shareUrl
  )}&text=${encodeURIComponent(post.title)}`;
  const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${post.title} ${shareUrl}`
  )}`;

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Not dated";
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-[#0B0B10] text-white flex justify-center">
      <div className="max-w-[1400px] w-full px-6 py-16 grid grid-cols-1 md:grid-cols-[minmax(0,2.2fr)_minmax(0,0.9fr)] gap-12">
        {/* ---------------- MAIN CONTENT (LEFT) ---------------- */}
        <div>
          <Link
            href="/blogs"
            className="text-sm text-white/50 hover:text-white/80 transition"
          >
            ← Back to Blogs
          </Link>

          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-indigo-300/80">
            {post.category || "Uncategorized"}
          </p>

          <h1 className="mt-3 text-3xl sm:text-5xl leading-tight">
            {post.title}
          </h1>

          {/* Author + Share row */}
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-white/60">
            {/* Author */}
            <div className="flex items-center gap-4">
              {post.authorImage && (
                <Image
                  src={post.authorImage}
                  width={45}
                  height={45}
                  alt={post.author || "Author"}
                  className="rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-medium">{post.author || "Unknown Author"}</p>
                <p>{formatDate(post.publishedAt)}</p>
              </div>
            </div>

            {/* Share icons */}
            <div className="flex items-center gap-3 text-lg">
              <span className="text-white/60 text-sm">Share:</span>

              <a
                href={linkedinURL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href={twitterURL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <FaTwitter />
              </a>
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Featured image */}
          {post.image && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mt-8 border border-white/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Body */}
          <article className="prose prose-invert prose-lg leading-relaxed blog-content mt-10 max-w-none">
            <PortableText value={post.body} components={portableComponents} />
          </article>

          {/* Latest 3 posts */}
          {latestPosts.length > 0 && (
            <section className="mt-20">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                Latest from the blog
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {latestPosts.map((b) => {
                  const latestSlug = b.slug?.current;
                  if (!latestSlug) return null;

                  return (
                    <Link
                      key={b._id}
                      href={`/blogs/${latestSlug}`}
                      className="group rounded-2xl bg-[#101018] border border-white/5 p-3 hover:border-white/15 hover:-translate-y-1 transition"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                        <Image
                          src={b.image || "/images/blog-img-1.png"}
                          alt={b.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <p className="mt-3 text-sm font-semibold leading-snug line-clamp-2 group-hover:text-indigo-300">
                        {b.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        {/* ---------------- TOC (RIGHT – CARD UI) ---------------- */}
        <aside className="hidden md:block sticky top-24 h-fit">
          <div className="rounded-2xl border border-white/10 bg-[#101018] px-5 py-6 shadow-lg shadow-black/30">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="inline-block h-5 w-1 rounded-full bg-indigo-400" />
              <span>Table of Contents</span>
            </h3>

            {toc.length === 0 && (
              <p className="text-xs text-white/40">
                Headings will appear here…
              </p>
            )}

            <ul className="space-y-2 text-xs text-white/70 max-h-[420px] overflow-y-auto pr-1">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block rounded-md px-2 py-1 hover:bg-white/5 hover:text-white transition leading-snug"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
