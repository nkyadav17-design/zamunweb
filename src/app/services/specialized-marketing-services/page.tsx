"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

/* ✅ SCHEMA */
import Script from "next/script";
import { toJsonLd } from "@/lib/schema";
import { buildServiceJsonLd } from "@/lib/serviceSchema";

gsap.registerPlugin(ScrollTrigger);

/* ✅ PAGE / SCHEMA CONFIG */
const SITE_URL = "https://www.zamun.com";
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const slug = "specialized-marketing-services";
const title = "Specialized Marketing Services";

export default function MarketingStrategyPage() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  /* ✅ Dynamic: uses the visible FAQS on THIS page */
  const jsonLd = useMemo(
    () =>
      buildServiceJsonLd({
        siteUrl: SITE_URL,
        orgId: ORG_ID,
        websiteId: WEBSITE_ID,
        slug,
        title,
        faq: FAQS,
      }),
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ---------- HERO ---------- */
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top 85%",
        },
      });
      heroTl
        .from(".hero-sub", { y: -30, opacity: 0, duration: 0.8 })
        .from(".hero-title", { y: 40, opacity: 0, duration: 1 }, "-=0.4")
        .from(".hero-img", { scale: 1.15, opacity: 0, duration: 1.5 }, "-=0.6");

      /* ---------- INTRO ---------- */
      gsap.utils.toArray<HTMLElement>(".intro-p").forEach((p, i) => {
        gsap.from(p, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: p,
            start: "top 85%",
          },
        });
      });

      /* ---------- UNIQUENESS ---------- */
      gsap.utils.toArray<HTMLElement>(".unique-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });

      /* ---------- FAQ ---------- */
      gsap.utils.toArray<HTMLElement>(".faq-item").forEach((faq, i) => {
        gsap.from(faq, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: faq,
            start: "top 90%",
          },
        });
      });

      /* ---------- CONTACT ---------- */
      gsap.from(".contact-form", {
        opacity: 0,
        y: 80,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact",
          start: "top 85%",
        },
      });

      /* ---------- BLOG ---------- */
      gsap.from(".blog-text", {
        x: -60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".blog",
          start: "top 85%",
        },
      });
      gsap.from(".blog-img", {
        x: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".blog",
          start: "top 85%",
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ✅ SERVICE SCHEMA (JSON-LD) */}
      <Script
        id={`jsonld-service-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }}
      />

      <main
        ref={mainRef}
        className="min-h-screen bg-gradient-to-b from-[#0b0b0f] via-[#13131a] to-[#0b0b0f] text-zinc-200 overflow-hidden"
      >
        {/* ---------- HERO ---------- */}
        <section className="hero relative w-full">
          <div className="max-w-7xl mx-auto text-center pt-30 pb-10">
            <h2 className="hero-sub mt-3 mb-6 text-[24px] font-semibold uppercase bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent tracking-wide">
              Specialized Marketing Services
            </h2>
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              In this Hyperconnected World Specialized Marketing is customized to
              audiences
            </h1>
          </div>
          <div className="relative w-full h-[70vh] overflow-hidden">
            <Image
              src="/images/services/Specialized-Marketing-Services.jpg"
              alt="Specialized Marketing Services"
              title="Specialized Marketing Services"
              fill
              priority
              className="hero-img object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </div>
        </section>

        {/* ---------- INTRO ---------- */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-lg leading-relaxed text-zinc-300 space-y-6">
          {[
            "We know that in today’s hyper competitive world where the number of competitors, new and old, is not insignificant and where the customers have access to a lot of information they are looking for (and even when they are not actively looking for), traditional marketing methods are not enough.",
            "We know that you need more to stand out from the competition in the minds of your customers.",
            "And we also know that its not just the minds of customers that you need to be in, there’s a wide range of other stakeholders who influence your business, in whose minds you want to create lasting positive impressions.",
          ].map((text, i) => (
            <p key={i} className="intro-p">
              {text}
            </p>
          ))}
        </section>

        {/* ---------- UNIQUENESS ---------- */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl sm:text-4xl font-normal text-center text-white mb-12">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {UNIQUENESS.map((card) => (
              <div
                key={card.title}
                className="unique-card rounded-2xl bg-white/[0.05] p-6 hover:bg-white/[0.08] transition-all shadow-[0_15px_40px_rgba(124,58,237,0.2)]"
              >
                <h3 className="text-xl sm:text-2xl font-normal mb-3 bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                  {card.title}
                </h3>

                <div
                  className="text-zinc-300 leading-relaxed prose prose-invert"
                  dangerouslySetInnerHTML={{ __html: card.body }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-normal text-center text-white mb-10">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <div className="space-y-6">
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="faq-item group rounded-xl bg-white/[0.05] p-6 border border-white/10"
              >
                <summary className="cursor-pointer text-lg font-medium text-white flex justify-between items-center">
                  <span>{f.q}</span>
                  <span className="transition-transform group-open:rotate-45 text-violet-400">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-zinc-300 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <ContactSection />

        {/* ---------- BLOG ---------- */}
        <section className="blog w-full bg-white text-zinc-900 py-20">
          <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-[1fr_420px] items-center">
            <div className="blog-text">
              <p className="uppercase text-xs tracking-wide text-zinc-500 mb-2">
                Up next
              </p>
              <h4 className="text-2xl sm:text-3xl font-semibold mb-4">
                Unlocking the Power of Personalized Marketing in 2025: Trends &
                Approaches
              </h4>
              <Link
                href="https://www.zamun.com/blogs/unlocking-the-power-of-personalized-marketing-in-2025-trends-and-approaches"
                className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-800"
              >
                Check it out <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="w-full overflow-hidden rounded-2xl ring-1 ring-zinc-200 bg-zinc-100">
              <Image
                src="/images/services/unlocking-the-power-of-personalized-marketing-in-2025-trends-and-approaches.webp"
                alt="EV blog preview"
                width={1200}
                height={0}
                className="w-full h-auto rounded-2xl object-contain"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* ------------------- DATA ------------------- */

const UNIQUENESS = [
  {
    title: "Personal And Thought Leader Branding",
    body: "<p>Today, customers choices are influenced not just by your offerings but also by the brands of your leaders, whether they choose to build that actively or not. In our connected world, people are getting to know and form opinions about the leaders all the time through social media, news aggregators, presence (or conspicuous absence) in industry events and in many other spots. We can help shine the spotlight in the right way.</p>",
  },
  {
    title: "Analyst Marketing",
    body: "<p>Your word is heard – not in silence but along with and many times supplemented by the analysts. The opinions of the specialists in your industry play important roles in shaping up the opinions of your stakeholders – like your investors, regulators, buyers, etc. Lets bring your word in effective ways to the analysts who can then present it before the audience in effective ways.</p>",
  },
  {
    title: "PR and Mainstream Media Marketing",
    body: "<p>While we agree that the business landscape has changed drastically in the last decades and that the advent of internet and social media has opened up new media, we also know that the mainstream media (electronic, print, etc.) are still widely popular and relevant for certain audience segments. When your business needs to create a positive image in these channels or when you need to enhance it, we can bring our expertise and wide networking to get that done.</p>",
  },
  {
    title: "Influencer Marketing",
    body: "<p>As a forward-thinking marketing agency, we specialize in influencer marketing strategies tailored to elevate your brand’s visibility and engagement. By leveraging the power of influential individuals across various industries and platforms, we connect your brand with targeted audiences in authentic and impactful ways. Our team employs data-driven insights and creative expertise to curate partnerships that drive brand awareness, foster trust, and ultimately, boost conversions for your business.</p>",
  },
  {
    title: "Investor marketing",
    body: "<p>In today’s dynamic business landscape, investor marketing is paramount for companies seeking to secure funding, attract strategic partnerships, and drive sustainable growth. With prior experience as investors as well as in raising funds, we are deft in crafting compelling narratives and presentations that resonate with potential investors, showcasing your company’s unique value proposition, growth potential, and financial performance. By strategically targeting and engaging investors through various channels and communication platforms, we help bolster investor confidence, expand funding opportunities, and propel your business towards long-term success. You can trust our expertise to effectively communicate your vision and achievements, positioning your company for increased investment and strategic opportunities.</p>",
  },
];

const FAQS = [
  {
    q: "Why do I need Thought Leader branding ?",
    a: "Customers like to follow the leader because they trust their expertise and because they see that everyone else is listening to them and following them. It becomes even more important when the domain is new to them and they have less prior experience and knowledge. The thought leader prominently comes up in the research and the brands associated with them are considered more trustworthy.",
  },
  {
    q: "Are celebrity promotions the same as influencer marketing?",
    a: "Absolutely not. Influencers are not always celebrities which means that the message given by them is considered more trustworthy (than celebrity endorsements). Another advantage is that they already have a following of interested audience which improves the targeting of your efforts.",
  },
  {
    q: "Is Influencer marketing suitable for every business ?",
    a: "These days the trend is growing and encompassing a wide variety of businesses in different industries because of the inherent advantages of watching videos from trusted sources. Done rightly, it can work wonders in spreading your name and message while inspiring trust in your brand, akin to word-of-mouth promotions, only at a larger scale",
  },
];
