"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IMC2024CaseStudy() {
  // Assets under /public
  const hero = "/images/case-studies/favista/favista-office.png";
  const colourWave =
    "/images/case-studies/favista/favista-add.jpg";
  const tunnel = "/images/case-studies/favista/favista-building.jpg";
  const relatedThumb = "/images/case-studies/wns/WNS.jpeg";
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
          Favista establishes presence as an online lead generator
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
            <h3 className="text-xl font-light">The Challenge: Unreliable and Expensive Lead Generation for High-End Properties</h3>
            <p className="mt-6 leading-7 text-gray-100">
              In 2011-2012, Favista Real Estate Private Limited, a Gurgaon-based real estate brokerage specializing in high-cost properties, was in an industry that faced a significant challenge: unreliable and expensive lead generation.
            </p>

            <p className="mt-6 leading-7 text-gray-100">
             Traditional methods such as print media advertising, static hoardings, and cold calling delivered inconsistent results at a high cost. These methods were further limited by their inability to capture leads outside of business hours, a crucial consideration for potential buyers searching online after work. Additionally, early online classified platforms, while presenting a wider reach, were cluttered with listings, making it difficult for buyers to find specific properties matching their individual requirements.
            </p>
          </div>
        </div>

        <Divider />
      </section>

      {/* ===== Brand Strategy ===== */}
      <section className="js-reveal mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 sm:grid-cols-3 mt-5">
          <div className="sm:col-span-1">
            <h3 className="text-[18px] sm:text-[20px] font-normal">Approach</h3>
          </div>
          <div className="sm:col-span-2 text-sm sm:text-base">
            <p className="mt-6 leading-7 text-gray-100"><strong>Favista’s Approach: A Data-Driven Multi-Channel Strategy</strong></p>
            <p className="mt-6 leading-7 text-gray-100">Favista recognized the need for a data-driven and multi-channel lead generation strategy. Their approach involved three key steps:</p>
            <ul className="mt-4 list-disc pl-6 space-y-3 text-gray-300 leading-relaxed text-sm sm:text-base">
              <li>
                <strong>Data Collection and Centralization:</strong>  The first step involved creating a comprehensive database of properties from various sources. This centralized repository ensured all critical information was readily available. This data was then used to generate advertisements using custom made software, built in-house.
              </li>
              <li>
                <strong>Targeted Online Advertising:</strong> Favista strategically placed targeted advertisements across major online classified platforms like 99acres, Magicbricks, Makaan, and Commonfloor. Each ad featured a unique phone number that directly corresponded to the specific property being advertised. This enabled their call center staff to identify the property of interest immediately upon receiving a call (based on the number that had been dialed by the interested party).
              </li>
              <li>
                <strong>Lead Qualification and Nurturing:</strong> Lead qualification was a critical aspect of Favista’s strategy. Call center executives leveraged the centralized database to access property details in real-time, facilitating a smooth conversation. Another custom software ensured that all the information about the property (identified based upon the phone number) was instantly displayed on their screen. They then gathered additional information from the lead, allowing them to qualify and categorize the lead based on their specific needs. Qualified leads were then strategically directed to the most relevant sales team experts, ensuring efficient follow-up and conversion.
              </li>
            </ul>
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

      {/* ===== Colour Wave & Strategy ===== */}
      <section className="js-reveal mx-auto max-w-[1200px] px-6">
        <Divider />

        <div className="grid gap-10 sm:grid-cols-3 mt-12">
          <div className="sm:col-span-1 text-sm text-gray-300">
            <h2 className="text-[22px] sm:text-[24px]">Expanding the Reach: Diversifying Lead Generation Channels</h2>
          </div>

          <div className="sm:col-span-2 text-sm sm:text-base">
            

            <p className="leading-7 text-gray-100">Beyond online classifieds, Favista embraced a multi-faceted approach:</p>

            
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-300">
                  <li>
                    <strong className="text-white">Microsites:</strong>: The company created over 200 microsites, each dedicated to a specific real estate project and hosted on a unique domain name. These microsites were optimized for search engines (SEO) to ensure top rankings in search engine results pages (SERPs), further increasing visibility.
                  </li>
                  <li>
                    <strong className="text-white">Social Media Marketing:</strong>: Favista capitalized on the growing popularity of social media by running targeted campaigns on Facebook and LinkedIn. They created niche interest groups like alumni networks and home decor communities, fostering engagement and brand awareness.
                  </li>
                  <li>
                    <strong className="text-white">Email Marketing:</strong>: Leveraging the power of personal connections, Favista’s founders strategically targeted email campaigns to their alumni networks. Trust within these established connections yielded positive responses.
                  </li>
                  
                </ul>
          </div>
        </div>

        <div className="js-stagger-grid grid gap-6 sm:grid-cols-1 mt-12">
          <div className="js-item overflow-hidden rounded-lg border border-white/10">
            <img
              src={tunnel}
              alt="Quikr acquisitions"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="js-reveal mx-auto max-w-[1200px] px-6">
       

        <div className="grid gap-10 sm:grid-cols-3 mt-12">
          <div className="sm:col-span-1 text-sm text-gray-300">
            <h2 className="text-[22px] sm:text-[24px]">Metrics and Results: A Transformation in Lead Generation</h2>
          </div>

          <div className="sm:col-span-2 text-sm sm:text-base">
            

            <p className="leading-7 text-gray-100">Favista’s data-driven and multi-channel approach yielded significant results:</p>

            
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-300">
                  <li>
                    <strong className="text-white">Increased Lead Volume:</strong> The company experienced a great RoI, generating a staggering 12,000 to 13,000 leads per month.
                  </li>
                  <li>
                    <strong className="text-white">Reduced Cost per Lead:</strong> Lead acquisition costs plummeted, with unqualified leads costing only Rs 40-50 and qualified leads reaching Rs 100-200. This represented a significant reduction compared to traditional methods.
                  </li>
                  <li>
                    <strong className="text-white">Geographical Expansion:</strong> The technology-driven approach facilitated reaching potential clients across multiple cities. Favista began operations in Dubai, Hyderabad, and Bangalore without any physical presence, reducing infrastructure and travel expenses.
                  </li>
                  
                </ul>
          </div>
        </div>
         <Divider />
        </section>


      {/* ===== Outcomes / Tunnel ===== */}
      <section className="mx-auto mt-14 max-w-[1200px] px-6">
        <div className="js-reveal mt-10 grid gap-10 sm:grid-cols-3 mb-12">
          <div className="sm:col-span-1 text-sm text-gray-300">
            <h2 className="text-[22px] sm:text-[24px]">Conclusion: A Model for Success</h2>
          </div>
          <div className="sm:col-span-2 text-sm sm:text-base">
            <p className="text-gray-300 leading-7">
              Favista’s innovative approach to lead generation offers a valuable case study for real estate companies. By harnessing the power of data, targeted online advertising, and a multi-channel marketing strategy, Favista achieved substantial cost savings while generating a high volume of qualified leads. This not only transformed their local business but also enabled expansion into new markets without substantial physical investment, paving the way for future success.
            </p>
            
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
              WNS establishes itself as an Industrial and Infrastructure industry specialist
            </h4>
            <Link
              href="https://www.zamun.com/case-studies/WNS"
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
