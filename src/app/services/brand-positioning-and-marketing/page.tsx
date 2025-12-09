"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

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
    <main
      ref={mainRef}
      className="min-h-screen bg-gradient-to-b from-[#0b0b0f] via-[#13131a] to-[#0b0b0f] text-zinc-200 overflow-hidden"
    >
      {/* ---------- HERO ---------- */}
      <section className="hero relative w-full">
        <div className="max-w-7xl mx-auto text-center pt-30 pb-10">
          <h2 className="hero-sub mt-3 mb-6 text-[24px] font-semibold uppercase bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent tracking-wide">
            Brand Positioning and Marketing
          </h2>
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
            Done well Brand Positioning enables Marketing to fit the customers’ needs and desires.
          </h1>
        </div>
        <div className="relative w-full h-[70vh] overflow-hidden">
          <Image
            src="/images/services/Brand-Positioning-and-Marketing.jpg"
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
          "When you have a good product-market fit then the marketing strategy is designed to succeed. Yet, many times you might see that a good strategy doesn’t lead to a good customer response.",
          "Typically, this is because the positioning of your company and its products and solutions in the market is not exactly the way you want it to be. While you have great things to offer, your customers are unable to see it, because it doesn’t fit with the personality and positioning of your brand.",
          "A great marketing strategy needs to be aligned and supported by an equally great positioning and personality of the brand. A well positioned brand ensures that your customer is conducive to the incoming marketing message. Effectively, customers are already bought in to the image, ie the perception, of the company. They are only looking for details and facts to convince themselves to buy its offerings.",
          "This process of understanding how your customer perceives yourself is a very scientific and perceptive one. We look at how the market perceives the company in question, its competitors, its alternatives, the broader industry it plays in, its country of origin, and similar other associative brand impacts.",
          
        ].map((text, i) => (
          <p key={i} className="intro-p">
            {text}
          </p>
        ))}
      </section>

    

      {/* ---------- UNIQUENESS ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-3xl sm:text-4xl font-normal text-center text-white mb-12">
    At Zamun,{" "}
    <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
      we follow a structured approach
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

        {/* ✅ This enables <p>, <ul>, <li>, <div> etc. to render */}
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

      {/* ---------- CONTACT ---------- */}



    <>
      {/* other sections */}
      <ContactSection />
    </>




      {/* ---------- BLOG ---------- */}
      <section className="blog w-full bg-white text-zinc-900 py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-[1fr_420px] items-center">
          <div className="blog-text">
            <p className="uppercase text-xs tracking-wide text-zinc-500 mb-2">
              Up next
            </p>
            <h4 className="text-2xl sm:text-3xl font-semibold mb-4">
              Organizational Strategies Top Marketing Companies Use to Crush the Competition in 2025
            </h4>
            <Link
              href="https://www.zamun.com/blogs/organizational-strategies-top-marketing-companies-use-to-crush-the-competition-in-2025"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-800"
            >
              Check it out <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-zinc-200 bg-zinc-100 blog-img">
            <Image
              src="/images/services/Organizational-Strategies-Top-Marketing.webp"
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



const UNIQUENESS = [
  { title: "Core Value Proposition Design", body: "<p>The core value proposition of any company is based on the simple understanding of what is missing in the current product market situation. Are customers unhappy with service levels, with pricing, with product features, or with solution availability? On the other hand, do they have aspirational expectations ?</p> <p> Once the gap in the minds of the customers is understood and aligned with the capability that our company solutions have to offer, then one can identify what should the core value proposition be. </p> <p>Typically, the core value proposition is a mix of benefits in the short term: cost, quality, time.  Sometimes, the value proposition is also inclusive of long-term benefits: purpose and vision alignment, network and ecosystem effects, fundamental business model changes, etc.</p> <p>We look at all the potential needs or gaps in the customers mindspace and identify a company’s core value proposition.</p>" },
  { title: "Brand Personality", body: "<p> A brand personality is an explicitly defined view of how the brand is perceived, if it were an actual human. This is necessary to help customers understand what behaviours and interaction models to expect from the company’s people when they actually interact with them in the case of service businesses. In the case of products typically brand personality is an encapsulation of how the user of the brand is perceived because of their association with the brand. In both cases the brand personality should be meticulously crafted with well-designed messages and carefully chosen aspects of the brand personality.</p> <p>Key challenges to note are elite-ness versus value for money, simplicity versus comprehensive problem solving, etc.</p>" },
  { title: "Visual identity", body: " <p>Visual identity is a crucial aspect of brand management, as it helps to create a consistent and memorable impression of a brand in the minds of the consumers. Visual identity includes elements such as logo, color scheme, typography, imagery, and style guide. It impacts both on screen and physical assets of the brand, like collaterals, store design, billboards, etc.</p> <p>To get the best results from visual identity, our approach here is to</p> <ol> <li>Align the visual identity with the brand vision, mission, values, and personality.</li> <li>Research the target audience and the market to understand their preferences and expectations.</li> <li>Differentiate the brand’s visual identity from the competitors and make it stand out.</li> <li>Test the visual identity with the stakeholders and the potential customers to get feedback and refine it.</li> <li>Apply the visual identity across all touchpoints and channels, such as website, social media, packaging, advertising, etc.</li> <li>Monitor and evaluate the visual identity performance and make adjustments as needed.</li> </ol> " },
  { title: "Aural identity", body: "<p>Aural identity is the sonic expression of a brand’s personality, values and positioning. It is another key component of brand management, as it helps to create a consistent and memorable impression on the target audience. </p> <p>Aural identity can be manifested in various elements, such as music, voice, sound effects, jingles, slogans and sonic logos. For creating a successful aural identity it is important to align it with the brand’s tone of voice and overall strategy. Aural identity should also reflect the brand’s culture, industry and market segment, as well as the preferences and expectations of the customers. </p> <p>Aural identity should be distinctive, relevant, authentic and adaptable to different contexts and media platforms.</p>" },
  { title: "Tone of voice identity", body: "<p>Tone of voice is a crucial element of brand identity, as it reflects the personality, values and goals of the organization. A consistent and authentic tone of voice can help build trust, loyalty and engagement with the target audience.</p> <p>The best approach for creating a tone of voice is to define the brand’s core attributes, such as mission, vision, values and positioning, and then translate them into a style guide that specifies the tone, language and grammar rules for different types of communication.</p> <p>The customer facing employees, like customer care executives, store floor executives, digital marketing people sending online communication etc. should all be trained to follow these guidelines consistently while interacting with the customers.</p> <p>The style guide should be aligned with the brand’s visual identity and strategy, and should be updated if needed to reflect changes in the market and customer expectations.</p>" },
  ];

const FAQS = [
  { q: "What is marketing strategy ?", a: "A brand strategy is a framework that determines how businesses present themselves to customers and stand out among competitors. Your business’s brand is more than just its name, logo, fonts, and colors. It is the sum of your business’s look and feel, personality, philosophy, values, and customer experiences. A brand strategy helps you build trust, loyalty, and recognition with your target market." },
  { q: "How do I increase brand recognition?", a: "Brand recognition refers to how easily consumers can identify your products or services by their name, logo, slogan, or other distinguishing features. Strengthening brand recognition helps attract more customers, build loyalty, and stand out from competitors. To enhance it, focus on creating a consistent and memorable visual identity by using the same colors, fonts, and design elements across your website, social media, packaging, and marketing materials. Choose your logo and slogan carefully, supported by diligent market research. Engage actively on social media by responding to comments and questions promptly and professionally. Additionally, collaborate with influencers or partners who share your target market and values to further expand your brand’s reach and credibility." },
  { q: "Why is branding important for a business?", a: "Branding is important for a business because it can increase its visibility, recognition, and reputation, as well as enhance its customer satisfaction, retention, and advocacy, eventually impacting the revenues and profits. Branding can also help a business to attract and retain talent, partners, and investors" },
  { q: "What is brand premium?", a: "A brand premium is the amount of money that consumers are willing to pay extra for a product or service from a recognized and trusted brand. A brand premium reflects the perceived value, quality, and experience that the brand offers to its customers. A brand premium can help a brand increase its profitability, customer loyalty, and market share." },
  
];
