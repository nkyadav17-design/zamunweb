"use client";

import React, { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ===== Slides used in the hero =====
const slides = [
  {
    video: "/images/home-page-video.mp4",
    heading: "The Future <br /> looks like you.",
    buttonText: "Our Services",
    buttonLink: "services",
  },
  {
    video: "/images/home-page-video1.mp4",
    heading: "Innovate <br /> with Confidence.",
    buttonText: "Case Studies",
    buttonLink: "case-studies",
  },
  {
    video: "/images/home-page-video.mp4",
    heading: "Empowering <br /> Your Business.",
    buttonText: "Reports",
    buttonLink: "#reports",
  },
  {
    video: "/images/home-page-video1.mp4",
    heading: "Design. Build. <br /> Scale.",
    buttonText: "Our Portfolio",
    buttonLink: "#portfolio",
  },
  {
    video: "/images/home-page-video2.mp4",
    heading: "Leading <br /> Digital Transformation.",
    buttonText: "Get Started",
    buttonLink: "#contact",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  // --- Contact form state ---
  const [contactEmail, setContactEmail] = useState("");
  const [contactMsg, setContactMsg] = useState<string | null>(null);

  const onContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail);
    if (!ok) {
      setContactMsg("Please enter a valid email.");
      return;
    }
    setContactMsg("Thanks! We’ll be in touch soon.");
    setContactEmail("");
  };

  // Auto-slide every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // === Parallax for About ===
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // === Parallax for Case Study ===
  const csRef = useRef(null);
  const { scrollYProgress: csProg } = useScroll({
    target: csRef,
    offset: ["start end", "end start"],
  });
  const yImg = useTransform(csProg, [0, 1], ["-8%", "8%"]);

  // === Research carousel (click to scroll) ===
  const rowRef = useRef<HTMLDivElement | null>(null);
  const getStep = () => {
    const el = rowRef.current;
    if (!el) return 0;
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return 0;
    const w = card.getBoundingClientRect().width;
    const gap = 24; // space-x-6
    return Math.round(w + gap);
  };
  const nudge = (dir: "left" | "right") => {
    const el = rowRef.current;
    if (!el) return;
    const step = getStep() || 360;
    el.scrollBy({ left: dir === "right" ? step : -step, behavior: "smooth" });
  };

  return (
    <>
 
      {/* ================= HERO ================= */}
      <main className={`${poppins.className} relative h-screen w-full overflow-hidden`}>
        <AnimatePresence mode="wait">
          <motion.video
            key={activeSlide}
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          >
            <source src={slides[activeSlide].video} type="video/mp4" />
          </motion.video>
        </AnimatePresence>

        {/* optional hero gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e2f]/60 via-[#3b185f]/40 to-[#000]/50" />

        <section className="relative z-10 flex flex-col justify-center h-full px-10 sm:px-20 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <h1
                className="text-5xl sm:text-7xl font-normal text-white leading-tight drop-shadow-lg"
                dangerouslySetInnerHTML={{ __html: slides[activeSlide].heading }}
              />
              <Link
                href={slides[activeSlide].buttonLink}
                className="mt-8 inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:opacity-90 transition"
              >
                {slides[activeSlide].buttonText}
              </Link>
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      {/* ================= ABOUT (parallax bg, white band) ================= */}
      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full h-screen overflow-hidden"
      >
        <motion.img
          src="/images/about-zamun-01.png"
          alt="Indian market street"
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
        />

        <div className="absolute inset-x-0 bottom-0 z-10 w-full bg-white py-12 sm:py-16 px-6 sm:px-16 md:px-24">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10 w-full text-black">
            <div className="max-w-4xl">
              <p className="text-sm sm:text-base text-gray-800 mb-4">
                we can handle chaos and creativity equally well.
              </p>
              <h2 className="text-3xl sm:text-5xl font-light tracking-wide leading-tight">
                Creative, Research, Future Driven
              </h2>
            </div>
            <div className="hidden sm:flex justify-end w-full sm:w-auto">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl bg-black text-white hover:bg-black/90 border border-black/10 px-8 py-4 text-sm sm:text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-black/20"
              >
                Know More About Us
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= CASE STUDY (parallax bg) ================= */}
      <motion.section
        id="case-studies"
        ref={csRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative w-full min-h-[90vh] bg-black text-white overflow-hidden"
      >
        <motion.img
          src="/images/case-study-zamun.png"
          alt="IMC 2025 exhibition crowd"
          style={{ y: yImg }}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
        />

        <div className="absolute inset-x-0 bottom-0 w-full border-t border-white/10 bg-[#1B1331] py-12 sm:py-16 px-6 sm:px-16 md:px-24 shadow-[0_-10px_30px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10 w-full">
            <div className="max-w-4xl">
              <h3 className="text-2xl sm:text-3xl font-medium tracking-wide">
                India Mobile Congress (IMC) 2025 — Case Study
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mt-3">
                The India Mobile Congress (IMC) 2025 is scheduled to be held in New Delhi, India,
                from <span className="font-medium">October 8th to 11th, 2025</span>, at the
                Yashobhoomi Convention Centre.
              </p>
            </div>
            <div className="flex justify-end w-full sm:w-auto">
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 px-8 py-4 text-white text-sm sm:text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                View Case Study
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= RESEARCH (click-to-scroll, hidden scrollbar) ================= */}
      <section className="min-h-screen w-full bg-gradient-to-b from-[#08050F] via-[#0E0A1F] to-[#0B0A1B] text-white py-24 px-6 sm:px-12 md:px-20 overflow-hidden">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-light tracking-wide"
          >
            Insights to drive stronger performance
          </motion.h2>

          <Link
            href="#"
            className="mt-4 sm:mt-0 text-sm font-medium text-purple-400 hover:text-purple-300 flex items-center gap-2 transition"
          >
            Know More <span className="text-lg">↗</span>
          </Link>
        </div>

        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#08050F] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#0B0A1B] to-transparent" />

          {/* Row */}
          <div
            ref={rowRef}
            className="flex space-x-6 overflow-x-auto no-scrollbar pb-10 pr-16 scroll-smooth snap-x snap-mandatory"
          >
            {[1, 2, 3, 4, 5].map((id, idx) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="snap-start flex-shrink-0 w-[280px] sm:w-[320px]"
                data-card
              >
                <Link
                  href={`/insights/research-${id}`}
                  className="block bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:scale-[1.02] hover:border-white/20 transition-all duration-300"
                >
                  <div className="p-5 flex flex-col h-full">
                    <p className="text-xs text-gray-400 tracking-widest mb-3 uppercase">
                      RESEARCH REPORT
                    </p>
                    <h3 className="text-lg sm:text-xl font-medium leading-snug mb-5">
                      Lorem ipsum is simply dummy text
                    </h3>
                    <div className="mt-auto w-full h-48 rounded-lg overflow-hidden bg-black">
                      <img
                        src={`/images/research-${id}.png`}
                        alt={`Research ${id}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
              className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 w-10 h-10 grid place-items-center"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => nudge("right")}
              className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 w-10 h-10 grid place-items-center"
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
          combining creative, content and commerce to drive change. Imagine, build, and run
          human-centered brand experiences.
        </motion.p>
      </section>

      {/* ================= CONTACT (bottom aligned) ================= */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative w-full h-[90vh] text-white overflow-hidden flex items-end"
      >
        <img
          src="/images/contact-us.png"
          alt="Abstract light rays"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1B1331]/55 via-[#0D0A18]/40 to-transparent" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl w-full px-6 sm:px-10 lg:px-12 pb-20 md:pb-28 lg:pb-32">
            <h2 className="max-w-3xl text-4xl sm:text-6xl lg:text-[56px] leading-[1.1] font-light mb-6">
              Get to know more
              <br /> about our work.
            </h2>

            <form onSubmit={onContactSubmit} className="w-full max-w-xl">
              <label htmlFor="contact-email" className="sr-only">
                Enter your email
              </label>
              <div className="flex items-center rounded-xl border border-white/20 bg-black/70 pl-4 pr-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <i className="ri-mail-line mr-2 text-white/70" aria-hidden />
                <input
                  id="contact-email"
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent text-white placeholder-white/60 outline-none px-1 py-2"
                  required
                />
                <button
                  type="submit"
                  className="ml-3 rounded-lg bg-gradient-to-r from-indigo-400 to-violet-500 px-5 py-2 text-sm font-medium text-white shadow hover:opacity-95 transition"
                >
                  Submit
                </button>
              </div>
              {contactMsg && <p className="mt-3 text-sm text-gray-200">{contactMsg}</p>}
            </form>
          </div>
        </div>
      </motion.section>

    </>
  );
}
