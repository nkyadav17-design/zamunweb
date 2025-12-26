"use client";

import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ServiceCard = {
  id: string;
  category: string;
  title: string;
  href?: string;
  image: string; // /public path
  alt?: string; // NEW
};

type Props = {
  heading?: string;
  cta?: { label: string; href: string } | null;
  items: ServiceCard[];
};

export default function ServicesSlider({
  heading = "Our Services",
  cta = null,
  items,
}: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const cardWidth = useMemo(() => 320, []);
  const gap = 24;

  const updateArrowState = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft < maxScroll - 1);
  }, []);

  const nudge = useCallback(
    (dir: "left" | "right") => {
      const el = rowRef.current;
      if (!el) return;
      const delta = dir === "left" ? -(cardWidth + gap) : cardWidth + gap;
      el.scrollBy({ left: delta, behavior: "smooth" });
    },
    [cardWidth]
  );

  // Allow vertical wheel -> horizontal scroll
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    const onScroll = () => updateArrowState();
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    updateArrowState();
    return () => {
      el.removeEventListener("wheel", onWheel as any);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateArrowState]);

  return (
    <section className="min-h-[70vh] w-full bg-gradient-to-b from-[#08050F] via-[#0E0A1F] to-[#0B0A1B] text-white py-24 px-6 sm:px-12 md:px-20 overflow-hidden">
      {/* Header + CTA */}
      <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-light tracking-wide mt-10 mb-6 md:mt-22 md:mb-12 sm:mt-8"
        >
          {heading}
        </motion.h1>

        {cta ? (
          <Link
            href={cta.href}
            className="mt-4 sm:mt-0 text-sm font-medium text-purple-400 hover:text-purple-300 flex items-center gap-2 transition"
          >
            {cta.label} <span className="text-lg">↗</span>
          </Link>
        ) : null}
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#08050F] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#0B0A1B] to-transparent" />

        {/* Row */}
        <div
          ref={rowRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar pb-12 pr-16 scroll-smooth snap-x snap-mandatory"
        >
          {items.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="snap-start flex-shrink-0 w-[280px] sm:w-[320px]"
              data-card
            >
           <Link
                href={card.href || "#"}
                title={card.title} // GOOD UX + SEO
                aria-label={card.title} // Accessibility
                className="block bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <div className="p-5 flex flex-col h-full">
                  <p className="text-[11px] tracking-[0.18em] text-white/60 mb-3 uppercase">
                    {card.category}
                  </p>
                  <h2 className="text-lg sm:text-xl font-medium leading-snug mb-5">
                    {card.title}
                  </h2>
                  <div className="mt-auto relative w-full h-48 rounded-lg overflow-hidden bg-black">
                    <Image
                      src={card.image}
                      alt={card.alt || card.title} // SEO-safe fallback
                      title={card.title}           // Optional, but helpful
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      draggable={false}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute right-2 -bottom-2 flex gap-2 z-10">
          <button
            onClick={() => nudge("left")}
            disabled={!canLeft}
            className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 w-10 h-10 grid place-items-center disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => nudge("right")}
            disabled={!canRight}
            className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 w-10 h-10 grid place-items-center disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16 text-sm sm:text-base text-gray-300 max-w-5xl"
      >
        Combining creative, content and commerce to drive change. Imagine, build, and run
        human-centered brand experiences.
      </motion.p>
    </section>
  );
}
