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

const slug = "content-strategy-and-marketing"; // matches URL
const title = "Content Strategy and Marketing"; // page title

export default function MarketingStrategyPage() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  /* ✅ JSON-LD built from visible FAQS on this page */
  const jsonLd = useMemo(
    () =>
      buildServiceJsonLd({
        siteUrl: SITE_URL,
        orgId: ORG_ID,
        websiteId: WEBSITE_ID,
        slug,
        title,
        faq: FAQS, // uses the FAQ list rendered below
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
          scrollTrigger: { trigger: p, start: "top 85%" },
        });
      });

      /* ---------- TIMELINE ---------- */
      gsap.from(".timeline-line", {
        width: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".timeline", start: "top 80%" },
      });
      gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.9,
          y: 30,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".timeline-badge").forEach((b, i) => {
        gsap.from(b, {
          opacity: 0,
          y: -10,
          duration: 0.4,
          delay: i * 0.05,
          scrollTrigger: { trigger: ".timeline", start: "top 80%" },
        });
      });

      /* ---------- UNIQUENESS ---------- */
      gsap.utils.toArray<HTMLElement>(".unique-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: i * 0.15,
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });

      /* ---------- FAQ ---------- */
      gsap.utils.toArray<HTMLElement>(".faq-item").forEach((faq, i) => {
        gsap.from(faq, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: { trigger: faq, start: "top 90%" },
        });
      });

      /* ---------- CONTACT ---------- */
      gsap.from(".contact-form", {
        opacity: 0,
        y: 80,
        duration: 1,
        scrollTrigger: { trigger: ".contact", start: "top 85%" },
      });

      /* ---------- BLOG ---------- */
      gsap.from(".blog-text", {
        x: -60,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: ".blog", start: "top 85%" },
      });
      gsap.from(".blog-img", {
        x: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: ".blog", start: "top 85%" },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ✅ SERVICE PAGE SCHEMA */}
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
              Content Strategy and Marketing
            </h2>
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Have a Content Strategy, Gain Marketing ROI fastest.
            </h1>
          </div>
          <div className="relative w-full h-[70vh] overflow-hidden">
            <Image
              src="/images/services/Content-Strategy-and-Marketing.jpg"
              alt="Content Strategy and Marketing"
              title="Content Strategy and Marketing"
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
            "We are a marketing agency that specializes in content strategy and marketing. We believe that content is king in today’s digital world, where consumers are constantly looking for valuable information and engaging stories.",
            "We can help you create and distribute high-quality content that suits your brand, your audience, and your goals. Whether you need blog posts, social media posts, newsletters, ebooks, white papers, case studies, webinars, podcasts, videos, or any other format of content, we have the expertise and the tools to make it happen. We can also help you optimize your content for SEO, measure its performance, and refine your strategy based on data and feedback. Let us help you turn your content into a powerful marketing asset that drives traffic, leads, and sales.",
          ].map((text, i) => (
            <p key={i} className="intro-p">
              {text}
            </p>
          ))}
        </section>

        {/* ---------- TIMELINE ---------- */}
        <section className="timeline w-full bg-gradient-to-b from-[#12121a] to-[#0b0b0f] py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative mb-14">
              <div className="h-[3px] w-full bg-white/15 rounded-full overflow-hidden">
                <div className="timeline-line h-[3px] w-full bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400" />
              </div>
              <div className="mt-0 flex items-center justify-between px-1">
                {TIMELINE_STEPS.map((_, i) => (
                  <div
                    key={i}
                    className="timeline-badge relative -mt-[15px] flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a22] ring-1 ring-white/15 shadow-[0_6px_22px_rgba(124,58,237,0.25)]"
                  >
                    <span className="text-[11px] font-medium tracking-wider text-white/90">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 via-violet-500/10 to-cyan-400/20 blur-[6px]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:gap-7 lg:gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {TIMELINE_STEPS.map((s) => (
                <div
                  key={s.title}
                  className="timeline-card rounded-2xl bg-white text-zinc-900 p-6 ring-1 ring-black/5 shadow-[0_14px_40px_rgba(0,0,0,0.25)]"
                >
                  <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-violet-300/40 bg-violet-50 px-3 py-2 text-violet-500">
                    {s.icon}
                  </div>
                  <h3 className="text-[22px] leading-[1.15] font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[15px] leading-6 text-zinc-600">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 text-center text-xs text-zinc-400 sm:hidden">
              Swipe to see all steps →
            </div>
          </div>
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
                <p className="text-zinc-300 leading-relaxed">{card.body}</p>
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
                The Agentic AI Revolution: Rewiring the Future of Work and Business
              </h4>
              <Link
                href="https://www.zamun.com/blogs/the-agentic-ai-revolution-rewiring-the-future-of-work-and-business"
                className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-800"
              >
                Check it out <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="w-full overflow-hidden rounded-2xl ring-1 ring-zinc-200 bg-zinc-100">
              <Image
                src="/images/services/the-agentic-ai-revolution-rewiring-the-future-of-work-and-business.webp"
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

const TIMELINE_STEPS = [
  {
    title: "Opinion content",
    body:
      "This is the content that expresses your unique perspective, voice, and values. It helps you build trust, credibility, and authority in your niche. Opinion content can include blog posts, podcasts, videos, social media posts, newsletters, etc.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M7 3h10a2 2 0 0 1 2 2v14l-5-2-5 2V5a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    title: "Research and News Content",
    body:
      "This is the content that provides relevant, timely, and accurate information to your audience. It helps you educate, inform, and engage them on topics that matter to them. Research and news content can include white papers, case studies, reports, surveys, webinars, etc.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "Analytics and Insight",
    body:
      "This is the content that analyzes data and trends to provide insights and recommendations to your audience. It helps you demonstrate your expertise, solve problems, and add value. Analytics and insight content can include dashboards, infographics, charts, graphs, etc.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M11 3a9 9 0 1 0 9 9h-9V3z" />
      </svg>
    ),
  },
  {
    title: "Technical content and explainers",
    body:
      "This is the content that explains how your products or services work, how to use them, and how to troubleshoot them. It helps you support your customers, reduce friction, and increase satisfaction. Technical content and explainers can include manuals, guides, tutorials, FAQs, etc.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="4" y="4" width="16" height="12" rx="2" />
      </svg>
    ),
  },
  {
    title: "Vision and Purpose content",
    body:
      "This is the content that showcases your vision, mission, values, and culture. It helps you inspire your audience, connect with them emotionally, and motivate them to take action. Vision and purpose content can include stories, testimonials, reviews, interviews, etc.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M6 8l6-3 6 3-6 3-6-3z" />
      </svg>
    ),
  },
];

const UNIQUENESS = [
  {
    title: "Core Content Catalogue creation and maintenance",
    body:
      " As a marketing agency, we create core content catalogues for our clients as a part of our content marketing services. A core content catalogue is a collection of high-quality, relevant and engaging content pieces that showcase the client’s expertise, value proposition and unique selling points. The core content catalogue can include blog posts, white papers, case studies, ebooks, infographics, videos and more. The purpose of creating a core content catalogue is to help the client attract, educate and convert their target audience, as well as to build trust and authority in their industry. By creating a core content catalogue, we help our clients achieve their marketing goals, such as increasing website traffic, generating leads, nurturing prospects and boosting sales.",
  },
  {
    title: "Content repurposing and layering",
    body:
      "Content repurposing and layering is another service that we offer. This service involves transforming your existing content into different formats and adding value to it with new information, insights, or perspectives. For example, we can turn your blog posts into podcasts, infographics, videos, or ebooks. We can also update your old content with fresh data, statistics, or case studies. Content repurposing and layering is beneficial for your business because it helps you reach new audiences, boost your SEO ranking, increase your brand awareness, and extend the lifespan of your content.",
  },
  {
    title: "Content to Audience mapping",
    body:
      " Content mapping is the process of aligning your content to the needs and preferences of your target audience. By creating content that matches the different stages of your buyer’s journey, you can increase the relevance, engagement and conversion of your prospects. As an expert content mapper, we help you identify the best types of content for each stage, based on your buyer personas, keywords, goals and metrics. We also help you optimize your content for SEO, readability and user experience. Whether you need to create new content or repurpose existing content, we can help you craft a content strategy that delivers results for your business.",
  },
  {
    title: "Internal and External Communications",
    body:
      " Managing internal and external communications for our clients is yet another service that we offer. Whether you need to communicate with your investors, shareholders, board, regulators, or the public, we can help you craft and deliver effective messages that align with your goals and values. We can also help you create and maintain a positive internal culture, where your employees feel engaged, informed, and valued, with relevant and timely content. By working with us, you will benefit from our strategic approach, creative solutions, and professional execution.",
  },
];

const FAQS = [
  {
    q: "What is content repurposing and layering ?",
    a:
      "Content repurposing and layering help marketers maximize value from existing content. Repurposing means transforming one asset into multiple formats — like turning a blog into a video, infographic, or podcast. Layering adds depth by enriching content with data, case studies, examples, and expert quotes. Together, these strategies expand audience reach, improve engagement, strengthen SEO, and save time and resources by extending the life and impact of core ideas.",
  },
  {
    q: "Why are internal communications important ?",
    a:
      "Internal communications are the exchanges of information and messages among the members of an organization. They are important for a business because they can improve the efficiency, productivity, and collaboration of the employees. Internal communications can also enhance the organizational culture, values, and vision, as well as foster trust and loyalty among the staff. Effective internal communications can help a business achieve its goals and overcome its challenges.",
  },
  {
    q: "How is it different from advertising and promotions ?",
    a:
      "The aim here is to educate your customers, including potential customers who have not made up their minds about purchasing your product. This way, you are showcasing your expertise in this field and they would look up to you for your guidance. Later when they are ready to purchase, this trust gained in their minds would make them consider your product before the competitors.",
  },
];
