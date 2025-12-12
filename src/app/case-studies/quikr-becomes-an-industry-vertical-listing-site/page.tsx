"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IMC2024CaseStudy() {
  // Assets under /public
  const hero = "/images/case-studies/quikr/Quikrites-at-the-Inaguratio.jpg";
  const colourWave =
    "/images/case-studies/quikr/quicker-strategic-advertising-efforts.png";
  const tunnel = "/images/case-studies/quikr/qkr-acqns.png";
  const relatedThumb = "/images/case-studies/favista/favista-office.png";
  const testiIcons = "/images/case-studies/imc-24/testimonials-icons.png";

  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero heading & intro on initial load
      gsap.from(".hero-title", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-image", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
      });

      // Generic reveal sections
      gsap.utils.toArray<HTMLElement>(".js-reveal").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power2.out",
        });
      });

      // Staggered grids
      gsap.utils.toArray<HTMLElement>(".js-stagger-grid").forEach((grid) => {
        const items = grid.querySelectorAll<HTMLElement>(".js-item");
        if (!items.length) return;

        gsap.from(items, {
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="bg-black text-white">
      {/* ===== Hero & Intro ===== */}
      <section className="mx-auto max-w-[1200px] px-6 pt-24 sm:pt-28">
        <h1 className="hero-title mt-6 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] font-light">
          Quikr becomes an industry vertical listing site
        </h1>

        {/* Hero */}
        <figure className="hero-image mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <Image
            src={hero}
            alt="Quikr Case Study Cover"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </figure>

        {/* Meta + Brief */}
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-1 space-y-6 text-sm text-gray-300">
            <Meta label="Event" value="Quikr" />
            <Meta label="Scope" value="Identity, Visual System, On-site Experience" />
            <Meta label="Year" value="2024" />
          </div>

          <div className="sm:col-span-2 text-sm sm:text-base">
            <h3 className="text-xl font-light">Background</h3>
            <p className="mt-3 leading-7 text-gray-100">
              Quikr, a relatively new player in the real estate online marketplace, faced several
              challenges. As it entered the competitive landscape, it needed to establish its brand
              presence and attract attention from builders, brokers, and potential home buyers and
              renters across India.
            </p>
          </div>
        </div>

        <Divider />
      </section>

      {/* ===== Brand Strategy ===== */}
      <section className="js-reveal mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 sm:grid-cols-3 mt-5">
          <div className="sm:col-span-1">
            <h3 className="text-[18px] sm:text-[20px] font-normal">Objective</h3>
          </div>
          <div className="sm:col-span-2 text-sm sm:text-base">
            <ul className="mt-4 list-disc pl-6 space-y-3 text-gray-300 leading-relaxed text-sm sm:text-base">
              <li>
                <strong>Brand Respect and Recognition:</strong> Quikr aimed to build respect and
                recognition among builders and large brokers.
              </li>
              <li>
                <strong>Broad Audience Pull:</strong> It also sought to create a pull for both luxury
                and basic home buyers and renters throughout the country.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Colour Wave & Strategy ===== */}
      <section className="js-reveal mx-auto max-w-[1200px] px-6">
        <Divider />

        <div className="grid gap-10 sm:grid-cols-3 mt-12">
          <div className="sm:col-span-1 text-sm text-gray-300">
            <h2 className="text-[22px] sm:text-[24px]">Approach</h2>
          </div>

          <div className="sm:col-span-2 text-sm sm:text-base">
            <h3 className="text-lg sm:text-xl font-light">
              Quikr adopted a parallel approach, combining curated and crowdsourced content with
              strategic advertising efforts:
            </h3>

            <ol className="list-decimal pl-6 space-y-6 text-gray-200 leading-relaxed mt-12">
              {/* 1. Curated and Crowdsourced Content */}
              <li>
                <strong className="font-semibold text-white">
                  Curated and Crowdsourced Content
                </strong>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-300">
                  <li>
                    <strong className="text-white">Project Images</strong>: Quikr curated
                    high-quality project images to showcase properties effectively.
                  </li>
                  <li>
                    <strong className="text-white">Video Banks</strong>: A collection of videos
                    provided visual insights into properties, neighborhoods, and lifestyle.
                  </li>
                  <li>
                    <strong className="text-white">City-Wise Real Estate Reports</strong>: These
                    reports offered valuable market insights.
                  </li>
                  <li>
                    <strong className="text-white">Events</strong>: Quikr organized events to engage
                    with its audience directly.
                  </li>
                  <li>
                    <strong className="text-white">Broker and Builder Uploaded Content</strong>:
                    Encouraging brokers and builders to share content enriched the platform.
                  </li>
                </ul>
              </li>

              {/* 2. Advertising Efforts */}
              <li>
                <strong className="font-semibold text-white">Advertising Efforts</strong>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-300">
                  <li>
                    <strong className="text-white">Major TV Commercials (TVC)</strong>: Quikr
                    invested in TVCs to reach a wider audience.
                  </li>
                  <li>
                    <strong className="text-white">Social Media Ads</strong>: Leveraging social
                    media platforms helped create buzz and engagement.
                  </li>
                </ul>
              </li>

              {/* 3. Lead Generation */}
              <li>
                <strong className="font-semibold text-white">Lead Generation</strong>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-300">
                  <li>
                    <strong className="text-white">Organic</strong>: Lead forms on website, digital
                    marketing on classified sites etc.
                  </li>
                  <li>
                    <strong className="text-white">Inorganic</strong>: Multiple acquisitions were
                    made for expansion.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-lg">
          <Image
            src={colourWave}
            alt="Quikr strategic advertising efforts"
            width={1600}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* ===== Outcomes / Tunnel ===== */}
      <section className="mx-auto mt-14 max-w-[1200px] px-6">
        <div className="js-reveal mt-10 grid gap-10 sm:grid-cols-3 mb-12">
          <div className="sm:col-span-1 text-sm text-gray-300">
            <h2 className="text-[22px] sm:text-[24px]">Outcome</h2>
          </div>
          <div className="sm:col-span-2 text-sm sm:text-base">
            <p className="text-gray-300 leading-7">
              Quikr’s strategic approach yielded impressive results:
            </p>
            <p className="text-gray-300 mt-6 leading-7">
              In summary, Quikr’s strategic blend of content curation, crowdsourcing, and targeted
              advertising propelled it to success in the competitive real estate market.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-300 mt-6">
              <li>
                <span className="font-semibold text-white">High Traffic</span>: Quikr became one of
                the highest traffic websites in India, with over{" "}
                <span className="font-semibold text-white">
                  30 million monthly active users (MAU)
                </span>
                .
              </li>
              <li>
                <span className="font-semibold text-white">Acquisitions</span>: The company made{" "}
                <span className="font-semibold text-white">nine acquisitions</span>, enhancing
                content quality and feature sets.
              </li>
              <li>
                <span className="font-semibold text-white">Traffic Surge</span>: Traffic increased
                by{" "}
                <span className="font-semibold text-white">
                  8–10 times
                </span>
                .
              </li>
              <li>
                <span className="font-semibold text-white">Revenue Streams</span>: Quikr
                established{" "}
                <span className="font-semibold text-white">
                  five new revenue streams
                </span>
                .
              </li>
              <li>
                <span className="font-semibold text-white">Builder Engagement</span>: Over{" "}
                <span className="font-semibold text-white">
                  40 of the top 100 builders
                </span>{" "}
                engaged with Quikr.
              </li>
              <li>
                <span className="font-semibold text-white">Leads Generation</span>: Quikr generated{" "}
                <span className="font-semibold text-white">
                  50,000+ leads per month
                </span>
                .
              </li>
              <li>
                <span className="font-semibold text-white">B2B Signups</span>: The platform secured{" "}
                <span className="font-semibold text-white">
                  20+ B2B signups per city per month
                </span>
                .
              </li>
              <li>
                <span className="font-semibold text-white">B2C Signups</span>: Over{" "}
                <span className="font-semibold text-white">
                  10,000 B2C signups per month
                </span>{" "}
                were achieved.
              </li>
            </ul>
          </div>
        </div>

        <div className="js-stagger-grid grid gap-6 sm:grid-cols-1">
          <div className="js-item overflow-hidden rounded-lg border border-white/10">
            <img
              src={tunnel}
              alt="Quikr acquisitions"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-[80px] mt-[60px]" />
      </section>

      {/* ===== Testimonial ===== */}
      <section className="js-reveal mx-auto mt-14 max-w-[1200px] px-6">
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start">
          {/* Text Block */}
          <div className="w-full md:basis-[222px] md:grow">
            <p className="text-lg leading-relaxed text-gray-200 font-light md:text-[28px] md:leading-[2.4rem]">
              It’s rare to find an agency that brings such an interesting, innovative idea to the
              table but then also knows how to design and engineer the product.
            </p>
            <p className="mt-4 text-base text-gray-400 md:text-lg">
              Full Name, Vice President
            </p>
          </div>

          {/* Image Block */}
          <div className="w-full max-w-[260px] md:max-w-none md:w-64 shrink-0">
            <img
              src={testiIcons}
              alt="Testimonial illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== Next Up / Blog-style Footer ===== */}
      <section className="w-full bg-white text-zinc-900 py-20 mt-24">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-[1fr_420px] items-center">
          <div className="blog-text">
            <p className="uppercase text-xs tracking-wide text-zinc-500 mb-2">Up next</p>
            <h4 className="text-2xl sm:text-3xl font-normal mb-4">
              Favista establishes presence as an online lead generator
            </h4>
            <Link
              href="https://www.zamun.com/case-studies/favista-establishes-presence-as-an-online-lead-generator"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-800"
            >
              Read Case Study <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-zinc-200 bg-zinc-100">
            <Image src={relatedThumb} alt="Related case study" fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===== Small UI helpers ===== */

function Divider() {
  return (
    <div className="mt-10 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-widest text-gray-400">{label}</p>
      <p className="mt-1 text-gray-200 text-sm sm:text-base">{value}</p>
    </div>
  );
}
