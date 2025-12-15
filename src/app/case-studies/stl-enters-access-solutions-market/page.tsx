"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IMC2024CaseStudy() {
  // Assets under /public
  const hero = "/images/case-studies/stl/stl-case-study-cover-page.png";
  const wordmarkRow = ["/images/case-studies/stl/stl-evolution-1.png"];
  const colourWave = "/images/case-studies/stl/stl-branding.png";
  const logos = ["/images/case-studies/stl/gal2.jpg"];
  const gateway = "/images/case-studies/stl/gal5.jpg";
  const posters = ["/images/case-studies/stl/gal10.jpg"];

  const booths = [
    "/images/case-studies/stl/gal7.jpg",
    "/images/case-studies/stl/gal8.jpg",
    "/images/case-studies/stl/gal6.jpg",
  ];

  const press = "/images/case-studies/stl/manish-in-press.png";

  const sketches = [
    "/images/case-studies/stl/tshirt-branding.png",
    "/images/case-studies/stl/paper-cups.png",
    "/images/case-studies/stl/stl-stationary-branding.jpg",
    "/images/case-studies/stl/stl-bottol-branding.jpg",
  ];

  const tunnel = "/images/case-studies/stl/stl-factory.jpg";
  const relatedThumb = "/images/case-studies/quikr/Quikrites-at-the-Inaguratio.jpg";
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
          STL enters Access Solutions market
        </h1>

        {/* Hero */}
        <figure className="hero-image mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <Image
            src={hero}
            alt="STL Case Study Cover"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </figure>

        {/* Meta + Brief */}
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-1 space-y-6 text-sm text-gray-300">
            <Meta label="Event" value="STL enters Access Solutions market" />
            <Meta label="Scope" value="Identity, Visual System, On-site Experience" />
            <Meta label="Year" value="2024" />
          </div>

          <div className="sm:col-span-2 text-sm sm:text-base">
            <h3 className="text-xl font-light">Brief</h3>
            <p className="mt-3 leading-7 text-gray-100">
              STL was founded in the 1990s and had achieved the positioning of a
              cost-effective manufacturer of Optical Fibre Cables. As the global
              Networks market was a much higher Total Addressable Market (TAM),
              STL wanted to expand globally beyond the telecom market.
            </p>
            <p className="mt-6 leading-7 text-gray-300">
              Back then, it was known as Sterlite Technologies Limited and was
              manufacturing Optical Fibre Cables (OFC). Although the market was
              growing really well at around 10–12% annually, and there were a lot
              of opportunities to grow beyond optical fibre, the impression was
              that Sterlite Tech was a low-cost cable manufacturer from India
              with no differentiated technology capability.
            </p>
            <p className="mt-6 leading-7 text-gray-300">
              STL was also manufacturing the highly advanced semiconductor-grade
              raw material for optical fibres known as the optical glass preform.
              However, the world did not know about this and did not believe that
              a company in India could actually make preform. It had also acquired
              a telecom billing solutions software product company but that
              transition was less than optimal in its growth potential.
            </p>
          </div>
        </div>

        <Divider />
      </section>

      {/* ===== Brand Strategy ===== */}
      <section className="js-reveal mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <h3 className="text-[18px] sm:text-[20px] font-normal">
              The positioning limited its progress
            </h3>
          </div>
          <div className="sm:col-span-2 text-sm sm:text-base">
            <p className="mt-5 leading-7 text-gray-300">
              The brand impression restricted its expansion plans even though the
              market was on an upswing with many positive global and India-based
              opportunities.
            </p>

            <p className="mt-6 leading-7 text-gray-300">
              The first issue as a brand in the global marketplace that STL was
              facing was because of its unwanted positioning – a low-cost
              manufacturer of OFC. Needless to say, low cost was perceived to be
              low quality also, both in terms of the product and the service
              standards, time to deliver, complaint handling, returns and repair
              policy etc.
            </p>

            <p className="mt-6 leading-7 text-gray-300">
              Cables can be made with very simple technology – buy optical fibres
              and extrude them with plastic to make a cable. The real tough thing
              is to make the super pure semiconductor grade silica glass that is
              transparent for hundreds of kilometres, and then make the optical
              fibre by extruding that glass – Sterlite was able to do that, in a
              semiconductor grade clean room in Aurangabad. The only others who
              did that were in USA, China, Japan and one European country – so
              Sterlite was way more high-tech than it was perceived to be.
            </p>

            <p className="mt-6 leading-7 text-gray-300">
              Secondly, it had the image of an old company with traditional
              manufacturing processes and thus lagging behind in the contemporary
              Industry 4.0 standards.
            </p>

            <p className="mt-6 leading-7 text-gray-300">
              Thirdly, some media reports were negatively portraying a company
              held by the same promoter with a similar name as irresponsible
              towards the environment and society. That negativity was associated
              with Sterlite Technologies also even though it was a different
              company and operated responsibly.
            </p>

            <p className="mt-6 leading-7 text-gray-300">
              The employee self-image was also misplaced and lacking a sense of
              respect for the commendable work they were doing. They thought of
              themselves as hard-working manufacturers and not as intelligent,
              ambitious or global technologists.
            </p>

            <p className="mt-6 leading-7 text-gray-300">
              We quickly picked up all this in our conversations with the people
              at the company and research and determined to turn it around. With
              the team, we did a lot of customer and people interviews – talked
              with over 50 stakeholders, including media houses, suppliers and
              employees beyond customers. In this way, we got to know what they
              wanted and then designed a current-state document.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Wordmark Row ===== */}
      <section className="js-reveal mx-auto max-w-[1200px] px-6">
        <div className="mt-10 grid grid-cols-1 gap-4">
          {wordmarkRow.map((src, i) => (
            <Card key={i} className="p-4">
              <Image
                src={src}
                alt={`Wordmark ${i + 1}`}
                width={640}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </Card>
          ))}
        </div>
      </section>

      {/* ===== Colour Wave & Strategy ===== */}
      <section className="js-reveal mx-auto max-w-[1200px] px-6">
        <Card className="mt-12 p-6 sm:p-8">
          <div className="grid gap-10 sm:grid-cols-3">
            <div className="sm:col-span-1 text-sm text-gray-300">
              <h2 className="text-[22px] sm:text-[24px]">
                Rising up to the challenge
              </h2>
            </div>

            <div className="sm:col-span-2 text-sm sm:text-base">
              <h3 className="text-lg sm:text-xl font-light">
                Our approach – Redesign a modern global brand, change tone of
                voice and language, drive analyst and trade media respect, create
                customer brainstorming sessions, improve reach via social.
              </h3>
              <p className="mt-6 text-gray-300 leading-7">
                We began to change the identity of Sterlite Technologies at the
                fundamental level.
              </p>
              <p className="mt-6 text-gray-300 leading-7">
                The one paragraph on the company, the three pagers on the company,
                and the whole package of how to introduce the company were crafted
                and put together to be available on an easy reference webtool
                called SlideKick that everyone had to go in. This was a set of 16
                charts of the company that everyone had to know and use. You could
                not tamper with these charts. It was available on a platform and
                people had to download and use it as-is.
              </p>
              <p className="mt-6 text-gray-300 leading-7">
                Brand compliance was a very direct KPI for the marketing team. So,
                the marketing team took it upon themselves to see that everyone
                was complying. Employees were not forced to comply, but influenced
                to like it. As you will see later, people were just choosing the
                new brand guidelines because they were inherently elegant and easy
                to follow.
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-lg">
            <Image
              src={colourWave}
              alt="Colour wave"
              width={1600}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="mt-6 text-sm sm:text-base text-gray-300 leading-7 space-y-4">
            <p>
              By now, we had a clear direction in our mind where the brand
              building needed to go. The company needed to look technologically
              advanced with very high quality standards, youthful and stand out
              from the crowd.
            </p>
            <p>
              There were five key messages that were put together as a mnemonic
              – IKWAR – for the team to remember:
            </p>
            <p>I stood for Innovative.</p>
            <p>K stood for Knowledgeable.</p>
            <p>W stood for World class.</p>
            <p>A stood for Available, and</p>
            <p>R stood for Responsible.</p>
            <p>
              The keyword there was A – Available. We wanted everyone to be able
              to approach us in the easiest way. And that’s the reason what drove
              the whole social media strategy for being so easily out there. That
              made a lot of people in the company become social media active.
            </p>
          </div>
        </Card>
      </section>

      {/* ===== Logos / Badges ===== */}
      <section className="mx-auto mt-14 max-w-[1200px] px-6 js-reveal">
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-1 text-sm text-gray-300">
            <h2 className="text-[22px] sm:text-[24px]">A new theme for the brand</h2>
          </div>

          <div className="sm:col-span-2 text-sm sm:text-base">
            <p className="text-gray-300 leading-7">
              We needed a futuristic positive theme that demonstrates ambition.
            </p>
            <p className="mt-6 text-gray-300 leading-7">
              We chose the space theme, after careful considerations. Mankind has
              always tried to reach out for the stars and space technology has
              been advancing with innovations for years. Secondly, the core
              product of our company is OFC which creates an impenetrable space
              within itself, where light can travel freely over long distances.
              Lastly, while everyone else was talking about connections within
              humans on the earth, this theme signified the much bigger ambitions
              of this company and helped it stand out in the crowd.
            </p>
            <p className="mt-6 text-gray-300 leading-7">
              We chose shiny piano black to inform the key components in all
              visual designs everywhere. There was practicality in the choice. We
              wanted something that was easily replicable and therefore
              consistency would happen. And secondly, we wanted something that
              was fundamentally different from what our current competitors were
              doing, and look more modern than them. Space and shiny piano black
              were more modern than what the technology companies in the telecom
              sector were doing.
            </p>
            <p className="mt-6 text-gray-300 leading-7">
              The products began to be named in the same theme. Some examples
              include Stellar OFC, Celeste, etc.
            </p>
            <p className="mt-6 text-gray-300 leading-7">
              The name was shortened to STL to create a new image and fresh way
              of thinking about the company and its future, also make it look
              modern, techy, geeky and young, and to distance from the ailing
              brand of the other company. The letters S, T, L and R were retained
              to be used everywhere though, since the idea was not to cut off
              from the roots entirely. STL was casually expanded to – Simplify
              Transform Lead – as a way to re-imagine what it stood for.
            </p>
          </div>
        </div>

        <div className="js-stagger-grid grid gap-6 sm:grid-cols-1 mt-12">
          {logos.map((src, i) => (
            <div key={i} className="js-item flex items-center justify-center">
              <img
                src={src}
                alt={`Brand visual ${i + 1}`}
                className="h-auto w-auto max-w-full rounded-lg"
              />
            </div>
          ))}
        </div>

        <p className="mt-6 text-gray-300 leading-7 text-sm sm:text-base">
          The next thought process was to call out a subtle brand imagery where
          the terms “beyond tomorrow” were used to tell that we wanted to look
          beyond the current problems and come up with a better tomorrow. It also
          went very beautifully with the space theme, because all of the people
          there had grown up on Star Trek.
        </p>
      </section>

      {/* ===== Gateway + Posters ===== */}
      <section className="js-reveal mx-auto max-w-[1200px] px-6 mt-14">
        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          <div className="text-sm sm:text-base">
            <p className="mt-3 leading-7 text-gray-300">
              The logo was changed and the organic, flowy, forward pointing image
              was added. It was called the Stride and it symbolised the forward
              moving nature that was imbibed in the DNA of their company culture.
            </p>
            <p className="mt-3 leading-7 text-gray-300">
              All the collaterals were designed with realistic photographs.
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-3 text-gray-300 leading-relaxed text-sm sm:text-base">
              <li>An evening and stylish, picturesque mode was chosen.</li>
              <li>
                Water and reflection were key elements to be used for the notion
                of reflection.
              </li>
              <li>
                Images and aesthetic designs were carefully selected to convey
                youthfulness,
                <em className="italic text-white/90"> contemporariness </em>
                and high standards.
              </li>
              <li>
                Rainbow colours in a flowy mode were used for indicating
                travelling on light, which is what signals do inside optical
                fibres.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            {posters.map((src, i) => (
              <figure
                key={i}
                className="overflow-hidden rounded-xl border border-white/10"
              >
                <Image
                  src={src}
                  alt={`Poster ${i + 1}`}
                  width={900}
                  height={1100}
                  className="w-full h-auto"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Booths ===== */}
      <section className="js-reveal mx-auto max-w-[1200px] px-6 mt-24">
        <p className="mt-3 leading-7 text-gray-300 text-sm sm:text-base">
          We brought the best minds to collaborate with when it came to setting
          up experience centres. Soon these centres began to have a fan-following
          of their own. People who were otherwise uninterested in STL products
          also flocked to these spaces in anticipation of astonishing visual
          designs. And they were never disappointed.
        </p>

        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          {booths.map((src, i) => (
            <figure
              key={i}
              className="overflow-hidden rounded-xl border border-white/10"
            >
              <Image
                src={src}
                alt={`Booth ${i + 1}`}
                width={700}
                height={700}
                className="w-full h-auto"
              />
            </figure>
          ))}
        </div>

        <figure className="mt-12 overflow-hidden rounded-xl border border-white/10">
          <Image
            src={gateway}
            alt="Gateway installation"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </figure>

        <div className="mt-8 space-y-3 text-sm sm:text-base leading-7 text-gray-300">
          <p>
            To showcase their innovations, STL more than doubled its patents
            portfolio from 400 to 900.
          </p>
          <p>
            The team was well aware that like the rest of the world, our industry
            was also influenced by social media branding. We began with
            data-backed research of the leading players, both Indian and
            international. For example, one study including analysis of about
            3000 tweets from 2 celebrity business leaders and we could clearly
            see some patterns that were working for them.
          </p>
          <p>
            “Content is the king” had become an axiom. A “content-factory” was
            setup at STL where the objective was to produce good content in high
            volumes at a consistent pace. Some old employees were initially
            sceptical of this approach but with the data from our meticulous
            researches, Manish was able to convince them. With time, that team
            became ardent believers in this approach and as of 2024, it still
            works tirelessly for producing the content pieces in the same
            methodical ways.
          </p>
          <p>
            Mainstream media was not being ignored too. We had forged effective
            connections in the leading media houses like Hindustan Times, Business
            World, Business Today, etc. and articles after articles regularly
            came up that told the real picture of STL, highlighting its adherence
            to the highest quality standards, its innovations that made it as
            good as, if not better than, the leading players in the industry.
          </p>
        </div>

        <figure className="mt-12 overflow-hidden rounded-xl border border-white/10">
          <Image
            src={press}
            alt="Press coverage"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </figure>

        <div className="mt-8 space-y-3 text-sm sm:text-base leading-7 text-gray-300">
          <p>
            The team also began to establish STL as a thought leader and made
            appearances in industry events, big discussion forums and gave
            frequent interviews to the media. All of these efforts established
            STL as the modern, advanced manufacturer that it actually was.
          </p>
          <p>
            The employee part of the branding was deftly handled. The employees
            began to be called STLers (pronounced “stellars” – which resonated
            with the space theme while keeping the letters S, T and L). This
            boosted their self-esteem and transformed their communications,
            including the informal ones, with the outside world. While this may
            look like a low return exercise at the individual level, the
            cumulative impact on the brand building was significant.
          </p>
        </div>

        <div className="js-stagger-grid mt-6 grid gap-4 sm:grid-cols-2">
          {sketches.map((src, i) => (
            <div
              key={i}
              className="js-item overflow-hidden rounded-lg border border-white/10 bg-[#0b0b10]"
            >
              <img src={src} alt={`Sketch ${i + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-[60px] mt-[80px]" />
      </section>

      {/* ===== Outcomes / Tunnel ===== */}
      <section className="mx-auto mt-14 max-w-[1200px] px-6">
        <div className="js-reveal mt-10 grid gap-10 sm:grid-cols-3 mb-12">
          <div className="sm:col-span-1 text-sm text-gray-300">
            <h2 className="text-[22px] sm:text-[24px]">Outcomes</h2>
          </div>
          <div className="sm:col-span-2 text-sm sm:text-base">
            <p className="text-gray-300 leading-7">
              These efforts paid off and soon, STL had transformed itself from a
              low cost, poor quality ageing manufacturer to a trusted, innovative
              brand leading in the modern age.
            </p>
            <p className="text-gray-300 mt-6 leading-7">
              It began to be recognized globally across USA (15% market share),
              Europe (Optical and connectivity). The company began to be invited
              to newer geographies.
            </p>
            <p className="text-gray-300 mt-6 leading-7">
              It also saw high brand recall and win rates.
            </p>
            <p className="text-gray-300 mt-6 leading-7">
              Sales were happening in newer areas, beyond just Optical Fibre
              Cables, like Optical Fibre networks (including design and
              deployment), Access Network design and deployment.
            </p>
            <p className="text-gray-300 mt-6 leading-7">
              Traffic went up 400% and the patents portfolio was up 300%.
            </p>
            <p className="text-gray-300 mt-6 leading-7">
              Social engagement went up 10X and global media coverage increased
              to 250%.
            </p>
            <p className="text-gray-300 mt-6 leading-7">
              With the expanded market base, market capitalisation also increased
              which led to positive impact on stock performance. STLTECH picked
              up from a low of ₹95.40 in 2017 to ₹415 in 2018.
            </p>
            <p className="text-gray-300 mt-6 leading-7">
              This is the story of STL when Manish Sinha was the Group CMO there.
            </p>
          </div>
        </div>

        <div className="js-stagger-grid grid gap-6 sm:grid-cols-1">
          <div className="js-item overflow-hidden rounded-lg border border-white/10">
            <img
              src={tunnel}
              alt="STL factory"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-[80px] mt-[60px]" />
      </section>

      {/* ===== Testimonial ===== */}
      <section className="hidden js-reveal mx-auto mt-14 max-w-[1200px] px-6">
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start">
          {/* Text Block */}
          <div className="w-full md:basis-[222px] md:grow">
            <p className="text-lg leading-relaxed text-gray-200 font-light md:text-[28px] md:leading-[2.4rem]">
              It’s rare to find an agency that brings such an interesting,
              innovative idea to the table but then also knows how to design and
              engineer the product.
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
            <p className="uppercase text-xs tracking-wide text-zinc-500 mb-2">
              Up next
            </p>
            <h4 className="text-2xl sm:text-3xl font-normal mb-4">
              Quikr becomes an industry vertical listing site
            </h4>
            <Link
              href="https://www.zamun.com/case-studies/quikr-becomes-an-industry-vertical-listing-site"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-800"
            >
              Read Case Study <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-zinc-200 bg-zinc-100">
            <Image
              src={relatedThumb}
              alt="Related case study"
              fill
              className="object-cover"
            />
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
      <p className="text-[11px] uppercase tracking-widest text-gray-400">
        {label}
      </p>
      <p className="mt-1 text-gray-200 text-sm sm:text-base">{value}</p>
    </div>
  );
}

function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-[#0b0b10] ${className}`}
    >
      {children}
    </div>
  );
}

function Label({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={`text-sm uppercase tracking-widest text-gray-400 ${className}`}
    >
      {children}
    </h4>
  );
}
