"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { toJsonLd } from "@/lib/schema";

gsap.registerPlugin(ScrollTrigger);

const SITE_URL = "https://www.zamun.com";
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const AUTHOR_ID = `${SITE_URL}/#author`;

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/about#webpage`,
      url: `${SITE_URL}/about`,
      name: "About Zamun",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": AUTHOR_ID,
      name: "ZamunZamun Services",
      jobTitle: "Founder",
      worksFor: { "@id": ORG_ID },
      url: `${SITE_URL}/about`,
      sameAs: [
        "https://www.linkedin.com/company/zamun-marketing/",
        "https://x.com/zamunservices",
        "https://www.facebook.com/zamunservices",
        "https://www.instagram.com/zamunservices/",
        "https://www.youtube.com/@ZamunStudios"
],
    },
  ],
};

const teamMembers = [
  {
    name: "Manish Kumar Sinha",
    role: "Founder and CEO",
    linkedin: "https://www.linkedin.com/in/mkssinha/",
    x: "https://x.com/supermansinha",
    image: "/images/team/Manish-Kumar-Sinha-Founder-CEO-Zamun.png",
  },
  {
    name: "Amritarupa Laha",
    role: "Senior Manager - Marketing and Strategy",
    linkedin: "https://www.linkedin.com/in/amritarupa-laha/",
    x: "#",
    image: "/images/team/Amritarupa-Laha.png",
  },
  {
    name: "Nawal Kishore Rai",
    role: "Lead UI UX Designer",
    linkedin: "https://www.linkedin.com/in/uiuxnawal/",
    x: "https://x.com/nawalkishorerai",
    image: "/images/team/Nawal-Kishore-Rai-UI-UX-Designer.png",
  },
  {
    name: "Vivek Singh",
    role: "Executive Assistant & Admin",
    linkedin: "https://www.linkedin.com/in/vivek-singh-30971b135/",
    x: "#",
    image: "/images/team/Vivek-Singh-Zamun.png",
  },
  {
    name: "Dinesh kumar",
    role: "Sr. Visual Designer",
    linkedin: "https://www.linkedin.com/in/dinesh-kumar-b26065183/",
    x: "#",
    image: "/images/team/Dinesh-Kumar-Graphic-Designer-Zamun.png",
  },
  {
    name: "Akanksha Gupta",
    role: "Experience Designer",
    linkedin: "https://www.linkedin.com/in/akanksha-gupta-b8489b157/",
    x: "#",
    image: "/images/team/Akansha-Gupta-UI-UX-Designer-Zamun.png",
  },
  {
    name: "Anuj Verma",
    role: "Marketing and Strategy Manager",
    linkedin: "https://www.linkedin.com/in/anuj-verma-6900b91a1/",
    x: "#",
    image: "/images/team/Anuj-verma-Zamun.png",
  },
  {
    name: "Hemant Chaturvedi",
    role: "Search Engine Optimization Analyst",
    linkedin: "https://www.linkedin.com/in/hemantseoanalyst/",
    x: "#",
    image: "/images/team/Hemant-Seo-Zamun.png",
  },
  {
    name: "Kshitij Rawat",
    role: "Video Editor and Graphic Designer",
    linkedin: "https://www.linkedin.com/in/kshitij-rawat-8964a0267/",
    x: "#",
    image: "/images/team/Kshitij-Rawat-Zamun.png",
  },
  {
    name: "Sakshi Singh",
    role: "Sr. HR Executive",
    linkedin: "https://www.linkedin.com/in/sakshi-singh-59231a27b/",
    x: "#",
    image: "/images/team/Sakshi-Singh.png",
  },
];

export default function AboutPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero heading + subheading on initial load
      gsap.from(".hero-kicker", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".hero-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
      });

      // "How we do it" section paragraphs
      gsap.from(".how-we-do-it-text p", {
        scrollTrigger: {
          trigger: ".how-we-do-it-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Foundation image section - subtle scale + fade
      gsap.from(".foundation-wrapper", {
        scrollTrigger: {
          trigger: ".foundation-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 1,
        ease: "power2.out",
      });

      // Team header
      gsap.from(".team-header", {
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      // Team cards stagger
      const cards = gsap.utils.toArray<HTMLElement>(".team-card");
      gsap.from(cards, {
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });

      // Bottom text + CTA
      gsap.from(".bottom-copy p", {
        scrollTrigger: {
          trigger: ".bottom-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      });

      gsap.from(".bottom-cta", {
        scrollTrigger: {
          trigger: ".bottom-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 0.2,
        ease: "power2.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Script
        id="jsonld-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: toJsonLd(aboutJsonLd) }}
      />

      <main
        ref={rootRef}
        className="min-h-screen bg-black text-white flex flex-col items-center"
      >
        {/* ===== Hero Section ===== */}
        <section className="mx-auto max-w-[980px] flex flex-col items-center text-left px-6 py-24 sm:py-32">
          <div className="max-w-6xl text-left">
            <h2 className="hero-kicker text-2xl sm:text-5xl font-light bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              A team of experts built for the now.
            </h2>

            <h1 className="hero-heading mt-6 text-2xl sm:text-5xl font-light leading-tight">
              Our designers have been <br /> designer-ing for years and they&apos;ve
              done some great stuff in that time.
            </h1>
          </div>
        </section>

        {/* ===== "How We Do It" Section ===== */}
        <section className="how-we-do-it-section mx-auto max-w-[980px] text-left px-6 sm:px-10 py-10">
          <h3 className="text-[18px] tracking-wider text-white/60 mb-6">
            How we do it
          </h3>
          <div className="how-we-do-it-text text-gray-300 space-y-6 text-[18px] leading-relaxed text-left">
            <p>
              Are you a tech company looking for a marketing partner who
              understands your industry, your challenges, and your goals? If yes,
              then you’ve come to the right place. Welcome to Zamun, the marketing
              agency for tech companies.
            </p>
            <p>
              Zamun is not your typical marketing agency. We are a team of
              tech-savvy marketers who specialize in helping tech companies grow
              their brand, generate leads, and increase sales. We know how to
              create and execute marketing strategies that work for the tech
              sector, whether it’s B2B or B2C, SaaS or hardware, blockchain or AI.
            </p>
            <p>
              We are led by our founder and CEO, who is an ex-CMO with over 25
              years of experience. He has worked with some of the biggest names in
              tech, such as STL, and has helped them achieve remarkable results.
              He’s passionate about using his expertise and knowledge to create a
              much bigger positive impact than he could as an employee. He’s also
              a mentor, speaker, and author who shares insights and best practices
              with the tech community.
            </p>
            <p>
              At Zamun, we believe that marketing is about identifying the best in
              you and showcasing that to the world — keeping a fine balance
              between deep tech detail and clarity. We tailor our services to your
              needs, offering branding, content creation, SEO, and social media
              with measurable results.
            </p>
          </div>
        </section>

        {/* ===== Our Foundation Image Section ===== */}
        <section className="foundation-section w-full flex flex-col items-center justify-center px-6 py-24 sm:py-32 bg-black">
          <div className="foundation-wrapper mt-16 py-24 w-full flex justify-center rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_25px_80px_rgba(124,58,237,0.25)] bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-purple-500/10">
            <div className="relative w-full max-w-6xl aspect-[1114/768]">
              <Image
                src="/images/about-zamun.svg"
                alt="Zamun Foundation"
                title="Zamun Foundation"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* ===== Team Section ===== */}
        <section className="team-section w-full flex flex-col items-center px-6 py-24 sm:py-32">
          {/* Header */}
          <div className="team-header mx-auto max-w-[980px] text-left px-6 sm:px-10 py-10">
            <h2 className="text-[40px] sm:text-6xl lg:text-6xl font-light leading-tight">
              Local Expertise,{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Global Vision
              </span>
            </h2>
            <p className="mt-6 max-w-3xl text-gray-300 text-base sm:text-lg leading-relaxed">
              Our team brings together decades of experience across financial
              services, venture capital, and technology.
            </p>
          </div>

          {/* Cards */}
          <div className="team-grid mt-14 grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((m) => (
              <div
                key={m.name}
                className="team-card rounded-2xl bg-white text-black overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
              >
                {/* Top gradient tile with image */}
                <div className="relative flex justify-center">
                  <div className="h-48 w-full bg-gradient-to-br from-indigo-300 via-violet-300 to-pink-300" />
                  <div className="absolute bottom-0 h-40 flex items-end justify-center">
                    <img
                      src={m.image}
                      alt={`${m.name} – ${m.role} at Zamun`}
                      title={`${m.name}, ${m.role} at Zamun`}
                      className="h-full w-auto object-contain grayscale"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="pt-7 px-5 pb-5">
                  <h4 className="text-gray-900 font-semibold">{m.name}</h4>
                  <p className="mt-1 text-sm bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                    {m.role}
                  </p>

                  {/* Socials */}
                  <div className="mt-4 flex items-center gap-4">
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100 transition"
                      aria-label="LinkedIn"
                      title={`View ${m.name}'s LinkedIn profile`}
                    >
                      <i className="ri-linkedin-fill text-xl"></i>
                    </a>
                    <a
                      href={m.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100 transition"
                      aria-label="X"
                      title={`View ${m.name}'s X profile`}
                    >
                      <i className="ri-twitter-x-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Bottom Section ===== */}
        <section className="bottom-section mx-auto max-w-[980px] text-left px-6 pb-24 sm:pb-32">
          <div className="bottom-copy text-gray-300 space-y-6 text-[18px] leading-relaxed">
            <p>
              Based on years of experience with a wide range of companies, we have
              identified the core elements that go into making a winning marketing
              endeavor for tech companies. We follow this approach for our
              clients’ marketing and branding, leading to remarkable results.
            </p>
            <p>
              If you are ready to take your tech company to the next level, we’re
              ready to help. Contact us today and let’s start a conversation. We
              are Zamun — the new-age marketing agency for tech companies.
            </p>
          </div>

          <div className="mt-10 flex justify-left">
            <Link
              href="/contact"
              title="Contact Zamun – Start a conversation with our team"
              className="bottom-cta inline-flex items-left rounded-xl bg-gradient-to-r from-indigo-400 to-violet-500 px-8 py-5 text-sm font-medium text-white shadow-[0_15px_45px_rgba(99,102,241,0.45)] transition hover:opacity-95"
            >
              Let’s Connect now
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
