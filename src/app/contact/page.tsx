// src/app/contact/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zamun for branding, marketing strategy, content, design, and growth solutions. Reach us via email, phone, or visit our Gurgaon office.",
  openGraph: {
    title: "Contact Us | Zamun",
    description:
      "Connect with Zamun’s team to discuss your marketing and brand strategy needs.",
    url: "https://www.zamun.com/contact",
    siteName: "Zamun",
    type: "website",
  },
  alternates: {
    canonical: "https://www.zamun.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Zamun",
    description: "Let’s collaborate and build your next growth chapter.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-20">
      {/* ================= HERO ================= */}

<section className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <Image
    src="/images/contact-us.jpg"
    alt="Contact Zamun - Brand Marketing Collaboration"
    fill
    priority
    className="object-cover object-center"
  />

  {/* DARK overlay for high readability */}
  <div className="absolute inset-0 bg-black/60 " />

  {/* BRAND gradient overlay on top */}
  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/25 via-purple-600/25 to-cyan-500/25 mix-blend-screen" />

  {/* Text Content */}
  <div className="relative z-10 text-center px-6">
    

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
      Contact Us
    </h1>

    <p className="mt-4 text-sm sm:text-lg text-white/85 max-w-2xl mx-auto">
      Share a bit about your goals, and we’ll help you design the right
      marketing, brand, and growth playbook for your company.
    </p>
  </div>
</section>



      {/* ================= TWO-COLUMN CARD (DETAILS + FORM) ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="grid gap-8 lg:gap-10 md:grid-cols-2 items-start">
          {/* ---- LEFT: Contact details card (dark) ---- */}
          <div className="rounded-3xl bg-[#070918] border border-white/10 px-7 py-8 sm:px-8 sm:py-9 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-medium px-3 py-1 mb-4">
              We usually reply within 24 hours
            </span>

            <h2 className="text-2xl sm:text-3xl font-medium">
              Need more information?
              <br />
              <span className="font-light text-zinc-100">
                Let&apos;s get in touch.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-[15px] text-zinc-300 leading-relaxed">
              Whether you&apos;re exploring a brand refresh, GTM launch, or an
              always-on content engine, we&apos;d love to understand your
              context and share what&apos;s worked for other tech-first teams.
            </p>

            <div className="mt-6 space-y-5 text-sm sm:text-[15px]">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 text-lg">
                  📞
                </span>
                <div>
                  <p className="text-zinc-400 uppercase text-[11px] tracking-[0.2em]">
                    Phone number
                  </p>
                  <p className="mt-1 text-zinc-100">
  <a href="tel:09958960000" className="hover:underline">
    099589 60000
  </a>
</p>

                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/15 text-sky-300 text-lg">
                  ✉️
                </span>
                <div>
                  <p className="text-zinc-400 uppercase text-[11px] tracking-[0.2em]">
                    Email address
                  </p>
                  <a
                    href="mailto:connect@zamun.com"
                    className="mt-1 inline-block text-zinc-100 hover:text-pink-300 transition-colors"
                  >
                    connect@zamun.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/15 text-violet-300 text-lg">
                  📍
                </span>
                <div>
                  <p className="text-zinc-400 uppercase text-[11px] tracking-[0.2em]">
                    Office location
                  </p>
                  <p className="mt-1 text-zinc-100 leading-relaxed">
                    Vipul Business Park, 205, Badshahpur Sohna Rd Hwy, Central
                    Park II, Sector 48, Gurugram, Haryana 122018
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ---- RIGHT: Contact form (light card on dark bg) ---- */}
          <div className="rounded-3xl bg-[#0b0b14] border border-white/10 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
            
            <>
                  {/* other sections */}
                  <ContactSection />
                </>
                
          </div>
        </div>
      </section>

      

      {/* ================= FULL-WIDTH MAP ================= */}
      <section className="border-t border-white/10 bg-[#050816]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-3xl overflow-hidden border border-white/10 h-[320px] sm:h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.887529124037!2d77.03502897628161!3d28.422650393579453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f1de0252e8e8607%3A0x7615318a2a876b9d!2sZamun%20Services!5e0!3m2!1sen!2sin!4v1765263735133!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "100%" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Zamun office location on Google Maps"
            />
          </div>
          <p className="mt-3 text-xs text-zinc-400">
            Can’t see the map?{" "}
            <a
              href="https://maps.app.goo.gl/9KiAYseaK6B9jYAP7"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-zinc-200"
            >
              Open in Google Maps
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
