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

const slug = "design-strategy-and-service";
const title = "Design Strategy and Service";

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
        faq: FAQS, // ✅ uses your rendered FAQs
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
              Design Strategy and Service
            </h2>
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              With good design strategy, comes great eyeballs and heartbeats
            </h1>
          </div>
          <div className="relative w-full h-[70vh] overflow-hidden">
            <Image
              src="/images/services/Design-Strategy-Services.jpg"
              alt="Design Strategy and Service"
              title="Design Strategy and Service"
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
            "At our tech-focused marketing agency, we offer a range of digital design services to help you create a stunning online and physical world presence. Whether you need a website, a logo, a brochure, or a banner, we have the skills and experience to deliver high-quality results that match your brand identity and vision. We use the latest tools and technologies to ensure that your digital designs are responsive, user-friendly, and optimized for SEO. We also provide consultation and support throughout the design process, from concept to completion.",
          ].map((text, i) => (
            <p key={i} className="intro-p">
              {text}
            </p>
          ))}
        </section>

        {/* ---------- UNIQUENESS ---------- */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl sm:text-4xl font-normal text-center text-white mb-12">
            Our design{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              services
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
                Performance Branding and How It Is Reinventing Marketing ROI?
              </h4>
              <Link
                href="https://www.zamun.com/blogs/performance-branding-and-how-it-is-reinventing-marketing-roi"
                className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-800"
              >
                Check it out <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="w-full overflow-hidden rounded-2xl ring-1 ring-zinc-200 bg-zinc-100">
              <Image
                src="/images/services/performance-branding-and-how-it-is-reinventing-marketing-roi.webp"
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

const UNIQUENESS = [
  {
    title: "Website design",
    body:
      "<p>We create custom websites that showcase your products, services, and values. We work with you to understand your goals, target audience, and preferences. We then design a website that reflects your brand personality and meets your functional requirements. We also ensure that your website is compatible with all devices and browsers, and that it follows the best practices for web design and development.</p>",
  },
  {
    title: "Brand Personality",
    body:
      "<p> We design logos that capture the essence of your brand and make a lasting impression on your customers. We use typography, colors, shapes, and symbols to create logos that are unique, memorable, and relevant. We also provide you with different formats and variations of your logo, so you can use it across various platforms and media.</p>",
  },
  {
    title: "Brochure design",
    body:
      "<p>We design brochures that communicate your message clearly and effectively. We use layout, graphics, fonts, and colors to create brochures that are attractive, informative, and persuasive. We also help you choose the best format and size for your brochures, depending on your purpose and audience.</p>",
  },
  {
    title: "Banner design",
    body:
      "<p>We design banners that grab attention and generate interest. We use images, text, animations, and effects to create banners that are eye-catching, engaging, and action-oriented. We also optimize your banners for different platforms and devices, such as websites, social media, email, or mobile.</p>",
  },
  {
    title: "Experience centre design",
    body:
      "<p>We specialize in experience centre design. We help our clients create immersive and interactive spaces where they can showcase their products and services to their customers. We understand that the experience centre is not just a place to display products, but a place to tell a story, to engage the senses, and to inspire action. We design every aspect of the experience centre, from the layout, to the lighting, to the sound, to the content, to the technology. We make sure that everything is aligned with the client’s brand identity, vision, and goals. We also make sure that everything else creates a pleasant and memorable experience for the customers, from the moment they enter, to the moment they leave. We are not just designers, we are storytellers. We create excellent experience centre designs that connect with customers on an emotional level and drive business results. </p>",
  },
  {
    title: "Office space design",
    body:
      "<p>Are you looking for a way to transform your office space into a place that reflects your values, culture and vision? Do you want to create an environment that inspires your employees to work with more productivity and positivity? If yes, we are here for you. We specialize in office space design that is tailored to your specific needs and goals. We help you communicate your brand identity and message through the physical layout, furniture, lighting, color and decor of your office. We also help you foster a positive and collaborative culture by designing spaces that encourage interaction, creativity and well-being. Whether you want to revamp your existing office or start from scratch, we can help you create a stunning and functional office space that will impress your clients, partners and employees. Contact us today and let us show you how we can turn your office space into a place where your business thrives.</p>",
  },
  {
    title: "Demo product design",
    body:
      "<p>We have the expertise and experience to design demos that capture the attention and interest of your target audience. Whether you need a video, a website, a brochure, or any other format, we can deliver it with high quality and creativity. Our demos are not just informative, but also engaging and effective. They highlight the features and benefits of your product in a clear and compelling way. We work with you to understand your goals, your market, and your product, and then we craft a demo that suits your needs and budget. Contact us today and let us help you turn your product idea into a reality.</p>",
  },
];

const FAQS = [
  {
    q: "What is design strategy ?",
    a: "Design strategy is the process of defining and planning the goals, methods, and outcomes of a design project. It involves research, analysis, ideation, prototyping, testing, and evaluation of the design solution. Design strategy helps designers to align their work with the needs and expectations of the users, clients, and stakeholders. It also helps to communicate the value and impact of the design to the target audience and the wider society.",
  },
  {
    q: "What are the benefits of design strategy for businesses ?",
    a: "Design strategy helps businesses create meaningful and competitive experiences that drive long-term success. By focusing on user-friendly, accessible, and desirable products or services, it improves customer satisfaction and loyalty. It also enables differentiation through innovative and unique value propositions that stand out in the market. Ultimately, a strong design strategy fuels growth and profitability by opening new revenue opportunities, expanding market reach, and strengthening customer retention.",
  },
  {
    q: "What are Design strategy factors for businesses to consider ?",
    a: "Design strategy factors are aspects that influence the planning and execution of a design project. They can include the goals, scope, budget, timeline, stakeholders, users, competitors, and constraints of the project. Design strategy factors help to align the design process with the business objectives and the user needs.",
  },
];
