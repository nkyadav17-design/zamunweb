"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IMC2024CaseStudy() {
  // Assets under /public
  const hero = "/images/case-studies/wns/WNS.jpeg";
  const colourWave =
    "/images/case-studies/wns/WNS-1-1.jpg";
  const tunnel = "/images/case-studies/favista/favista-building.jpg";
  const relatedThumb = "/images/case-studies/imc-24/imc-24-blog.jpg";
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
          WNS establishes itself as an Industrial and Infrastructure industry specialist
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
            <Meta label="Project" value="WNS" />
            <Meta label="Scope" value="WNS becomes an Industrial & Infrastructure specialist" />
            <Meta label="Year" value="2024" />
          </div>

          <div className="sm:col-span-2 text-sm sm:text-base">
            <h3 className="text-xl font-light">The Challenge</h3>
            <p className="mt-6 leading-7 text-gray-100">
              WNS was a well-known player in the travel industry outsourcing, with a strong presence in India and the Philippines.
            </p>

            <p className="mt-6 leading-7 text-gray-100">
             However, the company faced increasing competition from other low-cost offshore providers, and wanted to expand its offerings in high-end telecom, analytics, finance and accounting (F&A), and banking, financial services and insurance (BFSI) sectors. These sectors required more specialized skills and expertise, and WNS needed to position itself as a credible and reliable partner for its clients.
            </p>
          </div>
        </div>

        <Divider />
      </section>

      {/* ===== Brand Strategy ===== */}
      <section className="js-reveal mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 sm:grid-cols-3 mt-5">
          <div className="sm:col-span-1">
            <h3 className="text-[18px] sm:text-[20px] font-normal">The Solution</h3>
          </div>
          <div className="sm:col-span-2 text-sm sm:text-base">
            <p className="leading-7 text-gray-100">The team decided to take a two-pronged approach to build its “Specialist” brand in the outsourcing market.</p>
            <p className="mt-6 leading-7 text-gray-100">The first prong was to attract and retain specialist employees who could deliver high-quality services to the clients. WNS launched a campaign called “We Nurture Specialists”, which highlighted the company’s culture of learning, development, and innovation. WNS also invested in training and certification programs, employee engagement initiatives, and performance incentives to create a pool of talented and motivated specialists.</p>
            <p className="mt-6 leading-7 text-gray-100">The second prong was to build thought leadership content and establish a strong presence in the US and UK markets, where most of its clients were based. WNS created a dedicated web-based marketing team, which produced white papers, case studies, blogs, podcasts, webinars, and newsletters on various topics related to outsourcing, telecom, analytics, F&A, and BFSI. WNS also hired senior executives and experts from these sectors, who could act as spokespersons and advisors for the company. WNS leveraged its web-based marketing channels to showcase its expertise, insights, and success stories to its potential and existing clients.</p>
            
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

    
      

      <section className="js-reveal mx-auto max-w-[1200px] px-6">
       

        <div className="grid gap-10 sm:grid-cols-3 mt-12">
          <div className="sm:col-span-1 text-sm text-gray-300">
            <h2 className="text-[22px] sm:text-[24px]">The Results</h2>
          </div>

          <div className="sm:col-span-2 text-sm sm:text-base">
            

            <p className="leading-7 text-gray-100">WNS’s strategy of building a specialist brand paid off in terms of business growth, reputation, and employee satisfaction.</p>

            <p className="leading-7 text-gray-100">WNS was able to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-300">
                  <li>
                    Build a strong brand identity in the F&A, logistics, analytics, telecom, and BFSI sectors, and differentiate itself from its competitors.
                  </li>
                  <li>
                    Acquire new clients and contracts, as well as expand its scope of work with existing clients, in these sectors.
                  </li>
                  <li>
                    Gain respect and recognition from industry analysts, media, and peers, as a leading and innovative outsourcing provider.
                  </li>

                  <li>
                    Increase its hiring by 300%, and reduce its attrition rate to 18%, by attracting and retaining specialist employees.
                    
                  </li>

                  <li>
                    Boost its US pipeline by 3X, and increase its revenues by 250%, by expanding its presence and influence in the US and UK markets.
                  </li>
                  
                </ul>
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
              Reimagining the IMC brand for a global audience
            </h4>
            <Link
              href="https://www.zamun.com/case-studies/imc-24"
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
