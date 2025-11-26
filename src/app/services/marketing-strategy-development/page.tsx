"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function MarketingStrategyPage() {
  const mainRef = useRef<HTMLDivElement | null>(null);

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
      // badges
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
    <main
      ref={mainRef}
      className="min-h-screen bg-gradient-to-b from-[#0b0b0f] via-[#13131a] to-[#0b0b0f] text-zinc-200 overflow-hidden"
    >
      {/* ---------- HERO ---------- */}
      <section className="hero relative w-full">
        <div className="max-w-7xl mx-auto text-center pt-30 pb-10">
          <h2 className="hero-sub mt-3 mb-6 text-[24px] font-semibold uppercase bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent tracking-wide">
            Marketing Strategy Development
          </h2>
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
            A good Marketing Strategy creates desire for your solutions.
          </h1>
        </div>
        <div className="relative w-full h-[70vh] overflow-hidden">
          <Image
            src="/images/services/Marketing-Strategy-Development.png"
            alt="Marketing Strategy Workshop"
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
          "Organizations that have great products, services and solutions, typically lose money only because they do not get the opportunity to work and display their value.",
          "A good marketing strategy sets things right. A good product market fit, a good communications strategy and a good purposeful brand presence makes for the best support for a business that knows how to deliver value.",
          "Good marketing eventually generates desire in potential customers to take the plunge and work with a company, and eventually help them generate value and capture profits.",
          "Overall marketing strategy is based on deep research of the market, customer preferences, available alternatives and product attributes.",
          "Beyond the hard elements of features and competitive advantage, our marketing strategy approach focuses on the key soft elements of brand positioning, personality, and tone of voice.",
        ].map((text, i) => (
          <p key={i} className="intro-p">
            {text}
          </p>
        ))}
      </section>

      {/* ---------- TIMELINE ---------- */}
      <section className="timeline w-full bg-gradient-to-b from-[#12121a] to-[#0b0b0f] py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Rail */}
          <div className="relative mb-14">
            <div className="h-[3px] w-full bg-white/15 rounded-full overflow-hidden">
              <div className="timeline-line h-[3px] w-full bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400" />
            </div>
            {/* Numbered badges */}
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

          {/* Cards */}
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
            uniqueness
          </span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="contact w-full bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-cyan-500/10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center contact-form">
          <h3 className="text-2xl font-normal text-white mb-6">
            Let’s{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              get in touch
            </span>
          </h3>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Tell us what's on your mind…"
              className="w-full rounded-xl bg-white/[0.07] border border-white/10 px-4 py-3 text-white placeholder-zinc-400 focus:ring-2 focus:ring-violet-400/70"
            />
            <div className="grid sm:grid-cols-3 gap-4">
              <input
                placeholder="Your name"
                className="rounded-xl bg-white/[0.07] border border-white/10 px-4 py-3 text-white placeholder-zinc-400 focus:ring-2 focus:ring-violet-400/70"
              />
              <input
                placeholder="Your email"
                type="email"
                className="rounded-xl bg-white/[0.07] border border-white/10 px-4 py-3 text-white placeholder-zinc-400 focus:ring-2 focus:ring-violet-400/70"
              />
              <input
                placeholder="Website (optional)"
                className="rounded-xl bg-white/[0.07] border border-white/10 px-4 py-3 text-white placeholder-zinc-400 focus:ring-2 focus:ring-violet-400/70"
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 text-white rounded-xl py-3 font-normal shadow-[0_10px_30px_rgba(99,102,241,0.4)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.6)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ---------- BLOG ---------- */}
      <section className="blog w-full bg-white text-zinc-900 py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-[1fr_420px] items-center">
          <div className="blog-text">
            <p className="uppercase text-xs tracking-wide text-zinc-500 mb-2">
              Up next
            </p>
            <h4 className="text-2xl sm:text-3xl font-semibold mb-4">
              India’s EV Push Is Gathering Speed, but the Grid May Not Be Ready
            </h4>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-800"
            >
              Check it out <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-zinc-200 bg-zinc-100 blog-img">
            <Image
              src="/images/services/india-ev-push.png"
              alt="EV blog preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------- DATA ------------------- */

const TIMELINE_STEPS = [
  {
    title: "Industry research",
    body:
      "To identify customer’s need, preferences, competitor’s approach and potential gaps.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M7 3h10a2 2 0 0 1 2 2v14l-5-2-5 2V5a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    title: "Company’s capability analyses",
    body:
      "To identify what is the potential value proposition that the company can offer.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "Need gap analysis",
    body:
      "That outlines potential overlap where need gaps can be filled by the company’s capabilities.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M11 3a9 9 0 1 0 9 9h-9V3z" />
      </svg>
    ),
  },
  {
    title: "Identification of training needs",
    body:
      "Where the company needs to increase its capability to fill the gaps through new solutions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="4" y="4" width="16" height="12" rx="2" />
      </svg>
    ),
  },
  {
    title: "Brand identity workshops",
    body:
      "To increase awareness through a mix of personality, content, channel presence.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M6 8l6-3 6 3-6 3-6-3z" />
      </svg>
    ),
  },
];

const UNIQUENESS = [
  {
    title: "Deep strategy expertise",
    body:
      " to understand company strategy, and to align marketing to the same",
  },
  {
    title: "High hands-on direct operations experience.",
    body:
      "We have directly delivered on marketing and product strategies in many industries, and hence understand how to actually create good products and solutions",
  },
  {
    title: "Analytical, numbers first approach,",
    body:
      " to ensure that actions have defined positive commercial and economic impact on the customers and us. This step includes the whole range of secondary research.",
  },
  {
    title: "Detailed stakeholder interactions",
    body:
      " not just at the senior level, but at the actioning level. Having hundreds of interviews and correlating that with internal and benchmark data where available. This is a specialized way of conducting primary technical deep dives, along with technical experts.",
  },
  {
    title: "Conducting multi-day process immersion",
    body:
      "session including shadowing to understand the real situation and not just how people perceive it.  This is a specialized way of conducting primary research.",
  },
  {
    title: "Creating actionable solutions",
    body:
      " that can be enacted by the resources available or by making resources available through our network.",
  },
  {
    title: "Creating an Estimate of Value",
    body:
      " and constructing a proof-of-value measurement dashboard to regularly see how the strategy is being executed and creating value.",
  },
];

const FAQS = [
  {
    q: "How is it different from advertising and promotions ?",
    a:
      "A marketing strategy is a plan that outlines the goals, objectives, and tactics of a business or organization to promote its products or services to its target audience. A marketing strategy typically includes an analysis of the market situation, the identification of the customer segments, the value proposition, the positioning statement, the marketing mix, and the budget and evaluation metrics.",
  },
  {
    q: "How is marketing strategy different from business strategy ?",
    a:
      "Marketing strategy is the process of identifying, analysing and satisfying the needs and wants of your target customers. Business strategy is the overall plan and direction of your organization, including its vision, mission, goals and objectives. Marketing strategy supports business strategy by aligning your products or services with the market demand and creating a competitive advantage. Marketing strategy also helps to communicate your value proposition and brand identity to your potential and existing customers.",
  },
  {
    q: "How is it different from advertising and promotions ?",
    a:
      "The aim here is to educate your customers, including potential customers who have not made up their minds about purchasing your product. This way, you are showcasing your expertise in this field and they would look up to you for your guidance. Later when they are ready to purchase, this trust gained in their minds would make them consider your product before the competitors.",
  },
];
