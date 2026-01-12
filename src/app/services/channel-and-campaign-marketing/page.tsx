"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

/* ✅ SCHEMA IMPORTS */
import Script from "next/script";
import { toJsonLd } from "@/lib/schema";
import { buildServiceJsonLd } from "@/lib/serviceSchema";

gsap.registerPlugin(ScrollTrigger);

/* ✅ SCHEMA CONSTANTS (keep URL as it is) */
const SITE_URL = "https://www.zamun.com";
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// IMPORTANT: match your route folder name (app/services/channel-and-campaign-marketing/page.tsx)
const slug = "channel-and-campaign-marketing";
const title = "Channel and Campaign Marketing";

export default function MarketingStrategyPage() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  /* ✅ Build schema from visible FAQS */
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
              Channel and Campaign Marketing
            </h2>
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              The right channel and a tight Campaign, that’s what focuses your message
            </h1>
          </div>
          <div className="relative w-full h-[70vh] overflow-hidden">
            <Image
              src="/images/services/Channel-and-Campaign-Marketing.jpg"
              alt="Marketing Strategy Workshop"
              title="Marketing Strategy Workshop"
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
            "Welcome to Zamun, our marketing agency, where we specialize in channel and campaign marketing strategies designed to elevate your business to new heights.",
            "Channel marketing involves the creation and management of various distribution channels through which products or services are marketed and sold. These channels can include direct sales, retail partnerships, online marketplaces, and more.",
            "Campaign marketing, on the other hand, focuses on the creation and execution of targeted marketing initiatives to promote specific products, services, or brand messages to a particular audience. ",
            "Effective channel and campaign marketing are crucial for businesses seeking to maximize their reach and impact in today’s competitive marketplace. By strategically leveraging different channels and deploying well-planned campaigns, businesses can connect with their target audience, increase brand awareness, drive sales, and foster long-term customer relationships. Furthermore, these strategies enable businesses to adapt to changing market dynamics and consumer behaviours, ensuring continued relevance and success. ",
            "However, if channel and campaign marketing are not executed properly, businesses risk missing out on valuable opportunities and encountering various challenges. Poorly executed campaigns may fail to resonate with the intended audience, resulting in wasted resources and missed revenue targets. Additionally, ineffective channel management can lead to distribution inefficiencies, pricing discrepancies, and ultimately, loss of market share. Moreover, without a cohesive and integrated approach to marketing across channels, businesses may struggle to maintain consistency in their brand messaging and customer experience, eroding trust and loyalty.",
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
              approach
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

        {/* ---------- CONTACT ---------- */}
        <ContactSection />

        {/* ---------- BLOG ---------- */}
        <section className="blog w-full bg-white text-zinc-900 py-20">
          <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-[1fr_420px] items-center">
            <div className="blog-text">
              <p className="uppercase text-xs tracking-wide text-zinc-500 mb-2">
                Up next
              </p>
              <h4 className="text-2xl sm:text-3xl font-semibold mb-4">
                The Strategic Role of Global Capability Centres (GCCs) in India’s Growth Story
              </h4>
              <Link
                href="https://www.zamun.com/blogs/the-strategic-role-of-global-capability-centres-gccs-in-india-s-growth-story"
                className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-800"
              >
                Check it out <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="w-full overflow-hidden rounded-2xl ring-1 ring-zinc-200 bg-zinc-100">
              <Image
                src="/images/services/the-strategic-role-of-global-capability-centres-gccs-in-india-s-growth-story.webp"
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
  { title: "Channel Mix Selection", body: "", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 3h10a2 2 0 0 1 2 2v14l-5-2-5 2V5a2 2 0 0 1 2-2z" /></svg>) },
  { title: "Campaign Creation and Planning", body: "", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9" /></svg>) },
  { title: "Campaign Running", body: "", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M11 3a9 9 0 1 0 9 9h-9V3z" /></svg>) },
  { title: "Performance Tracking", body: "", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="4" width="16" height="12" rx="2" /></svg>) },
  { title: "Insights for Future", body: "", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 8l6-3 6 3-6 3-6-3z" /></svg>) },
];

const UNIQUENESS = [
  { title: "Strategic Channel Selection", body: " We identify where your audience actively searches for solutions—across both digital and offline touchpoints—and build the most efficient mix of channels to maximize ROI within your budget." },
  { title: "Campaign Planning & Structuring", body: "We map out a detailed execution plan, aligning messaging, creative assets, and timelines to drive maximum reach, impressions, and engagement among key decision-makers." },
  { title: "Seamless Campaign Execution", body: " Our team launches and manages campaigns with precision, ensuring timely roll-outs and consistent brand communication across all platforms." },
  { title: "Real-Time Performance Monitoring", body: " We continuously track campaign effectiveness, optimize channel allocation, and fine-tune strategies to improve results as data comes in." },
  { title: "Insights & Continuous Improvement", body: " Post-campaign, we analyze performance trends and extract actionable insights to strengthen future marketing initiatives and enhance long-term brand performance." },
];

const FAQS = [
  {
    q: "Why do businesses need campaign marketing ?",
    a: "Campaigns provide a focused approach to approaching your target audience. You get to know if your message and media choices are effective, given your market and money (budget) and the measurement of the performance helps in fine tuning your marketing strategy.",
  },
  {
    q: "Is it possible to track offline channels performance ?",
    a: "Yes! It can be done. Some common ways include unique promocodes for each channel, QR codes that the people  can scan, tracking their social media posts with your hashtags, etc.",
  },
  {
    q: "How many channels do I need to use ?",
    a: "It depends upon where your target audience goes frequently when they are looking for solutions. Since not everyone everywhere will choose the same channels every time, it’s a good idea to use multiple channels, say 2 or 3 top begin with. Budget is an important factor to consider. Lastly, the number can increase or decrease as you analyse the performance of your campaigns over time and as the channels’ popularities change.",
  },
];
