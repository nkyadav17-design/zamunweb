"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Poppins } from "next/font/google";

import ServicesSlider from "@/components/ServicesSlider";
import ReportSlider from "@/components/ReportSlider";
import ContactSection from "@/components/ContactSection";
import ClientsLogoCarousel from "@/components/ClientsLogoCarousel";
import { title } from "process";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ================= SERVICES DATA ================= */
const servicesItems = [
  {
    id: "mk-1",
    category: "Marketing",
    title: "Marketing Strategy Development",
    href: "/services/marketing-strategy-development",
    image: "/images/services/Marketing-Strategy-Development.png",
  },
  {
    id: "br-1",
    category: "Brand",
    title: "Brand Positioning and Marketing",
    href: "/services/brand-positioning-and-marketing",
    image: "/images/services/Brand-Positioning-and-Marketing.jpg",
  },
  {
    id: "de-1",
    category: "Design",
    title: "Design Strategy and Service",
    href: "/services/design-strategy-and-service",
    image: "/images/services/Design-Strategy-Services.jpg",
  },
  {
    id: "mk-2",
    category: "Strategy & Marketing",
    title: "Content Strategy and Marketing Services",
    href: "/services/content-strategy-and-marketing",
    image: "/images/services/Content-Strategy-and-Marketing.jpg",
  },
  {
    id: "mk-3",
    category: "Marketing",
    title: "Channel & Campaign Management",
    href: "/services/channel-and-campaign-marketing",
    image: "/images/services/Channel-and-Campaign-Marketing.jpg",
  },
];

/* ================= REPORTS DATA ================= */
const homeReportsItems = [
  {
    id: "rp-6",
    category: "Report",
    title: "Wired to Win",
    href: "/reports/wired-to-win",
    image: "/images/reports/wired-to-win.jpg",
  },
  {
    id: "rp-1",
    category: "Report",
    title: "Cybersecurity",
    href: "/reports/cybersecurity",
    image: "/images/reports/cybersecurity.jpg",
  },
  {
    id: "rp-2",
    category: "Report",
    title: "Digital Public Infrastructure",
    href: "/reports/digital-public-infrastructure",
    image: "/images/reports/digital-public-infrastructure.jpg",
  },
  {
    id: "rp-3",
    category: "Report",
    title: "Electronics Manufacturing",
    href: "/reports/electronics-manufacturing",
    image: "/images/reports/electronics-manufacturing.jpg",
  },
  {
    id: "rp-4",
    category: "Report",
    title: "Robotics",
    href: "/reports/robotics",
    image: "/images/reports/robotic.jpg",
  },
  {
    id: "rp-5",
    category: "Report",
    title: "Smart Mobility",
    href: "/reports/smart-mobility",
    image: "/images/reports/smart-mobility.jpg",
  },
    {
    id: "rp-7",
    category: "Report",
    title: "5G and Beyond",
    href: "/reports/5g-and-6g-beyond",
    image: "/images/reports/5g-and-6g-beyond.jpg",
  },
      {
    id: "rp-8",
    category: "Report",
    title: "Artificial Intelligence",
    href: "/reports/artificial-intelligence",
    image: "/images/reports/artificial-intelligence.jpg",
  },
      {
    id: "rp-9",
    category: "Report",
    title: "Green Technology",
    href: "/reports/green-tech",
    image: "/images/reports/green-tech.jpg",
  },
  {
    id: "rp-10",
    category: "Report",
    title: "Industry 4.0",
    href: "/reports/industry-4.0",
    image: "/images/reports/industry-4.0.jpg",
  },
  {
    id: "rp-11",
    category: "Report",
    title: "Women in Technology",
    href: "/reports/women-in-tech",
    image: "/images/reports/women-in-tech.jpg",
  },
];

/* ================= HERO SLIDES ================= */
const slides = [
  {
    video: "/images/home-page-video.mp4",
    heading: "Engineer Your Influence",
    buttonText: "Our Services",
    buttonLink: "#services",
    title: "Our Services",
  },
  {
    video: "/images/computer-chip.mp4",
    heading: "Innovate <br /> with Confidence.",
    buttonText: "Case Studies",
    buttonLink: "#case-studies",
  },
  {
    video: "/images/home-page-video.mp4",
    heading: "Empowering <br /> Your Business.",
    buttonText: "Reports",
    buttonLink: "#reports",
  },
  {
    video: "/images/computer-chip.mp4",
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

  // Auto-slide every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // === Parallax for About ===
  const aboutRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // === Parallax for Case Study ===
  const csRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: csProg } = useScroll({
    target: csRef,
    offset: ["start end", "end start"],
  });
  const yImg = useTransform(csProg, [0, 1], ["-8%", "8%"]);

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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-tight drop-shadow-lg"
                dangerouslySetInnerHTML={{ __html: slides[activeSlide].heading }}
              />
              <Link
                href={slides[activeSlide].buttonLink}
                className="mt-8 inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:opacity-90 transition" title="Our Service"
              >
                {slides[activeSlide].buttonText}
              </Link>
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      {/* ================= ABOUT ================= */}
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
          title="Indian market street"
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
            <div className="sm:flex justify-end w-full sm:w-auto">
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

      {/* ================= CASE STUDY ================= */}
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
          title="IMC 2025 exhibition crowd"
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

      {/* ================= SERVICES ================= */}
      <section id="services" className="bg-black">
        <ServicesSlider heading="Our Services" items={servicesItems} />
      </section>

      {/* ================= REPORTS ================= */}
      <section id="reports" className="bg-black">
  
  <ReportSlider
    cta={{ label: "Know More", href: "/reports" }}
    items={homeReportsItems}
  />
</section>


<section id="clients" className="bg-white py-0">
  <ClientsLogoCarousel />
</section>



      {/* ================= CONTACT ================= */}
      <section id="contact" className="bg-black">
        <ContactSection />
      </section>
    </>
  );
}
