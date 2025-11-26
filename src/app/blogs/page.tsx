"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { sanityClient } from "@/sanity/lib/client";
import { blogListQuery } from "@/sanity/lib/queries";

type Blog = {
  _id: string;
  title: string;
  slug: { current: string };
  image?: string;
  category?: string;
  excerpt?: string;
  publishedAt?: string;
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    async function load() {
      const data = await sanityClient.fetch(blogListQuery);
      setBlogs(data);
    }
    load();
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    blogs.forEach((b) => {
      if (b.category) set.add(b.category);
    });
    return ["All", ...Array.from(set)];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") return blogs;
    return blogs.filter((b) => b.category === activeCategory);
  }, [blogs, activeCategory]);

  return (
    <main className="min-h-screen bg-[#0B0B10] text-white">
      {/* Header */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-16 md:pt-24">
        <h1 className="text-2xl sm:text-5xl font-light bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent leading-normal">
          Our Blogs.
        </h1>
        <p className="mt-6 text-2xl sm:text-5xl font-light leading-tight">
          Stay ahead with insights from the experts.
        </p>

        {/* Category bar */}
        <div className="mt-8 flex items-center gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((c) => {
            const isActive = c === activeCategory;
            return (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={[
                  "whitespace-nowrap rounded-full border px-4 py-2 text-sm md:text-[15px] transition",
                  isActive
                    ? "border-white/20 bg-white/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10",
                ].join(" ")}
              >
                {c === "All" ? "View all" : c}
              </button>
            );
          })}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-16 md:pb-24">
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((b) => (
            <Link
              key={b._id}
              href={`/blogs/${b.slug.current}`}
              className="group rounded-2xl bg-[#0E0E15] p-2 transition hover:bg-white/5"
            >
              {/* Image block */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                <Image
                  src={b.image || "/images/blog-img-1.png"} // fallback image in /public/images
                  alt={b.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Meta */}
              <div className="px-2 pb-3 pt-3">
                <p className="text-[11px] uppercase tracking-widest text-indigo-300/90">
                  {b.category || "Uncategorized"}
                </p>

                <h3 className="mt-1 line-clamp-2 text-[17px] font-semibold leading-snug group-hover:text-indigo-400 transition">
                  {b.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm text-white/70">
                  {b.excerpt || "Click to read full post"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
