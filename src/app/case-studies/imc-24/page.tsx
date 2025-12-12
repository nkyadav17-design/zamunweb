"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function IMC2024CaseStudy() {
  const rootRef = useRef<HTMLDivElement | null>(null);


  // ---------- IMAGES ----------
  const hero = "/images/case-studies/imc-24/IMC-Hero-img.png";
  const wordmarkRow = [
    "/images/case-studies/imc-24/imc-3d-logo-1.png",
    "/images/case-studies/imc-24/imc-3d-logo-2.png",
  ];
  const colourWave = "/images/case-studies/imc-24/imc-24-wave.png";
  const logos = ["/images/case-studies/imc-24/imc-24-logo.png"];
  const gateway = "/images/case-studies/imc-24/imc-24-gateway.png";
  const posters = [
    "/images/case-studies/imc-24/imc-24-poster-1.png",
    "/images/case-studies/imc-24/imc-24-poster-2.png",
  ];
  const booths = [
    "/images/case-studies/imc-24/imc-24-booth-1.png",
    "/images/case-studies/imc-24/imc-24-booth-2.png",
    "/images/case-studies/imc-24/imc-24-booth-3.png",
  ];
  const sketches = [
    "/images/case-studies/imc-24/imc-24-sketch-1.png",
    "/images/case-studies/imc-24/imc-24-sketch-2.jpg",
    "/images/case-studies/imc-24/imc-24-sketch-3.png",
    "/images/case-studies/imc-24/imc-24-sketch-4.jpg",
    "/images/case-studies/imc-24/imc-24-sketch-5.jpg",
    "/images/case-studies/imc-24/imc-24-sketch-6.png",
  ];
  const tunnel = "/images/case-studies/imc-24/imc-24-entry-gate.jpg";
  const lab = "/images/case-studies/imc-24/imc-24-visual-large.jpg";
  const relatedThumb = "/images/case-studies/stl/stl-case-study-cover-page.png";
  const testiIcons = "/images/case-studies/imc-24/testimonials-icons.png";

  // ---------- GSAP (no ScrollTrigger) ----------
  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Hero
      gsap.from(".js-hero-title", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
      });
      gsap.from(".js-hero-img", {
        scale: 1.08,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.1,
      });

      // Generic reveal (play once on mount with staggered delays)
      gsap.utils.toArray<HTMLElement>(".js-reveal").forEach((el, i) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.2 + i * 0.08,
        });
      });

      // Grids: stagger children with .js-item
      gsap.utils.toArray<HTMLElement>(".js-stagger-grid").forEach((grid, g) => {
        const items = grid.querySelectorAll<HTMLElement>(".js-item");
        gsap.from(items, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.2 + g * 0.15,
        });
      });

      // Colour wave (one-time wipe)
      gsap.from(".js-wave", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1,
        ease: "power2.out",
        delay: 0.4,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="bg-black text-white">
      {/* ===== Intro ===== */}
      <section className="mx-auto max-w-[1200px] px-6 pt-32 sm:pt-20">
        <h1 className="js-hero-title text-[30px] mt-16 leading-tight tracking-[-0.02em] sm:text-[44px] md:text-[52px] lg:text-[56px] font-light">
          The Experience Equation:
          <br />
          Crafting a World-Class Tech Event
        </h1>

        {/* Hero Image */}
        <div className="js-hero-img mt-8 overflow-hidden rounded-lg border border-white/10">
          <img src={hero} alt="IMC Opening Ceremony" className="w-full" />
        </div>

        {/* Meta + Overview */}
        <div className="js-reveal mt-10 grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-1 space-y-3 text-sm text-gray-300">
            <div>
              <p className="uppercase tracking-widest text-[11px] text-gray-400">Event</p>
              <h2 className="text-[24px]">India Mobile Congress</h2>
            </div>
            <div>
              <p className="uppercase tracking-widest text-[11px] text-gray-400">Scope</p>
              <h2 className="text-[24px]">Identity, Visual System, On-site Experience</h2>
            </div>
            <div>
              <p className="uppercase tracking-widest text-[11px] text-gray-400">Year</p>
              <h2 className="text-[24px]">2024</h2>
            </div>
          </div>

          <div className="sm:col-span-2">
            <h3 className="text-xl font-light">Brief</h3>
            <p className="mt-3 text-gray-300 leading-7 font-bold">
              How do you design a world class technology event, hosting a global audience from 120
              countries, while keeping its India roots center-stage ?
            </p>
            <p className="mt-6 text-gray-300 leading-7">
              It was a pleasantly mild winter month of October last year. New Delhi was hosting IMC
              (India Mobile Congress) 2024 in Bharat Mandapam, one of the largest convention
              centres of India. It brought together global leaders, innovators, and industry experts
              to collaborate on next-generation technologies. The event focused on key areas such as
              6G and 5G advancements, artificial intelligence, quantum technology, cybersecurity,
              semiconductors, cloud computing, Internet of Things (IoT) and electronics
              manufacturing.
            </p>
            <p className="mt-6 text-gray-300 leading-7">
              IMC is Asia’s largest tech fest, organised annually. The 8th edition was a 4 days
              event from 15 to 18 Oct, 2024. About 2 lakh visitors experienced the latest in tech
              showcased by more than 400 exhibitors and 900 startups coming from over 120 countries.
            </p>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mt-[30px] mb-[30px]" />
      </section>

      {/* ===== Objectives / Strategy ===== */}
      <section className="mx-auto mt-14 max-w-[1200px] px-6 js-reveal">
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-1 space-y-3 text-sm text-gray-300">
            <h2 className="text-[24px]">Brand Strategy</h2>
          </div>

          <div className="sm:col-span-2">
            <h3 className="text-xl font-light">2024 Edition – a turning point for the event</h3>
            <p className="mt-6 text-gray-300 leading-7">
              He kept designing stalls for his employer every year after that, including in 2024. In
              parallel, he was also having discussions with IMC CEO Ramkrishna (fondly called Ramki
              ) and team, brainstorming on ideas to make the event bigger and bolder every year.
              They were interested in collaborating with us and saw us as a partner who
            </p>
            <ol className="max-w-md space-y-1 text-gray-300 list-decimal list-inside mt-12">
              <li>wanted IMC to succeed and</li>
              <li>
                can come up with a new, fresh way of thinking about design that is not a copy of an
                American or Indian design
              </li>
              <li>has the persistence to get those designs executed</li>
            </ol>
            <p className="mt-6 text-gray-300 leading-7">
              In August 2024, we were asked to take charge directly and develop the complete design
              and experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Wordmarks Row ===== */}
      <section className="mx-auto mt-10 max-w-[1200px] px-6">
        <div className="js-stagger-grid grid grid-cols-2 gap-4">
          {wordmarkRow.map((src, i) => (
            <div key={i} className="js-item">
              <img src={src} alt={`Wordmark ${i + 1}`} className="w-full" />
            </div>
          ))}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mt-[30px] mb-[30px]" />
      </section>

      {/* ===== Colour Motion / Wave ===== */}
      <section className="mx-auto mt-14 max-w-[1200px] px-6 js-reveal">
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-1 text-sm text-gray-300">
            <h2 className="text-[24px]">
              Vibrant Colour Palette representing Utopian Vision
            </h2>
          </div>

          <div className="sm:col-span-2">
            <h3 className="text-xl font-light">2024 Edition – a turning point for the event</h3>
            <p className="mt-6 text-gray-300 leading-7">
              The design process begins with a careful selection of the colour palette.
            </p>
            <p className="mt-6 text-gray-300 leading-7">
              The theme for IMC 2024 was Future is Now. It had to be about the future more than the
              past.
            </p>
            <p className="mt-6 text-gray-300 leading-7">
              We chose vibrant colours representing utopian future rather than steel colours that
              have dystopian undertones. To give it a modern contemporary look, we chose flowing
              gradients instead of spot colours.
            </p>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded">
          <img src={colourWave} alt="Colour wave" className="js-wave w-full" />
        </div>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-[30px]" />
      </section>

      {/* ===== Logos / Badges ===== */}
      <section className="mx-auto mt-14 max-w-[1200px] px-6 js-reveal">
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-1 text-sm text-gray-300">
            <h2 className="text-[24px]">Transformed Logo with Depth and Meaning</h2>
          </div>

        <div className="sm:col-span-2">
            <p className="mt-3 text-gray-300 leading-7">
              The logo had to be unique and yet not disconnected from the past logos.
            </p>
            <p className="mt-6 text-gray-300 leading-7">
              The previous logo had a lot of details and needed the viewer to focus a lot of
              attention to grasp it. We needed something instantly eye-catching in the
              attention-deficit age that we are living in.
            </p>
            <p className="mt-6 text-gray-300 leading-7">
              So we took the hard-edged monochrome hexagon of the old logo and transformed it into a
              floating cube with soft edges and multiple colors. The 3 dimensional cube had depth
              vis-à-vis the 2D hexagon.
            </p>
            <p className="mt-6 text-gray-300 leading-7">
              We gave it soft corners that represented flexibility and fungibility instead of
              rigidity. It also gelled well with the roundedness of Poppins font in the name.
              Multiple colors signified the openness to a wide spectrum of possibilities.
            </p>
          </div>
        </div>

        <div className="js-stagger-grid grid gap-6 sm:grid-cols-1">
          {logos.map((src, i) => (
            <div key={i} className="js-item flex items-center justify-center">
              <img src={src} alt={`IMC Logo ${i + 1}`} className="h-auto w-auto" />
            </div>
          ))}
        </div>
      </section>

      {/* ===== Giant Gateway + Posters ===== */}
      <section className="mx-auto mt-14 max-w-[1200px] px-6">
        <div className="js-reveal overflow-hidden rounded-lg border border-white/10">
          <img src={gateway} alt="IMC Gateway" className="w-full" />
        </div>

        <div className="js-reveal mx-auto mt-40 max-w-[1200px]">
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            <div className="sm:col-span-1" />
            <div className="sm:col-span-2">
              <h2 className="text-[36px]">Imagery Eliciting Positive Emotions</h2>
              <p className="mt-3 text-gray-300 leading-7">
                The imagery you choose depends upon the emotions you want them to generate in your
                viewers. In our case, they were wonder, joy and unconstrained possibilities.
              </p>
              <p className="mt-6 text-gray-300 leading-7">
                No borders were to be used in the designs to bring out the unconstrained
                possibilities aspect. We also designed our creatives with the images going beyond
                the frames for this.
              </p>
              <p className="mt-6 text-gray-300 leading-7">
                We began looking for pictures of people with smiling faces that conveyed joy at work
                and wonder inspired by the tech around. Online repositories of stock photos were the
                best places to find them.
              </p>
              <p className="mt-6 text-gray-300 leading-7">
                To our disappointment though, we soon discovered a sheer lack of Indian faces in such
                photos. Indian faces were absolutely necessary because that is how we make the
                imagery relatable to the India in India Mobile Congress.
              </p>
              <p className="mt-6 text-white font-bold leading-7">
                We chose to go for compositing images – picking up the backdrops and the models
                separately and stitching them together carefully.
              </p>
            </div>
          </div>

          <div className="js-stagger-grid mt-8 grid gap-6 sm:grid-cols-2">
            {posters.map((src, i) => (
              <div key={i} className="js-item overflow-hidden rounded-lg border border-white/10">
                <img src={src} alt={`Poster ${i + 1}`} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Unique Booths ===== */}
      <section className="mx-auto mt-14 max-w-[1200px] px-6 js-reveal">
        <div className="max-w-[800px]">
          <h2 className="text-[36px]">Unique and Easily Replicable Shape</h2>
          <p className="mt-3 text-gray-300 leading-7">
            The imagery you choose depends upon the emotions you want them to generate in your
            viewers. In our case, they were wonder, joy and unconstrained possibilities.
          </p>
          <p className="mt-6 text-gray-300 leading-7">
            Our design philosophy was guided by the aim of making IMC uniquely recognisable. We
            wanted that when people looked at them, they should immediately say “Oh I know this is
            IMC.” Also, it had to be unique in the sense that its IMC 2024.
          </p>
          <p className="mt-6 text-gray-300 leading-7">
            When we looked at the existing design trends, we found common shapes, like squares and
            rectangles inside squares and rectangles, circles, ellipses, triangles, etc. Our aim was
            to have a unique shape which is also simple enough to be easily replicated.
          </p>
          <p className="mt-6 text-gray-300 leading-7">
            We chose a shape that wasn’t used anywhere else and denoted a movement from one place to
            another. We chose the portal, in the form of an oblique quadrilateral with rounded
            corners.
          </p>
          <p className="mt-6 text-gray-300 leading-7">
            This shape was then used everywhere in all the designs we made for the event, from the
            entrance gates to the stages and from the print and digital collateral to the trophies.
          </p>
        </div>

        <div className="js-stagger-grid mt-8 grid gap-6 sm:grid-cols-3">
          {booths.map((src, i) => (
            <div key={i} className="js-item overflow-hidden rounded-lg border border-white/10">
              <img src={src} alt={`Booth ${i + 1}`} className="w-full" />
            </div>
          ))}
        </div>

        <div className="js-reveal mt-6 overflow-hidden rounded-lg border border-white/10">
          <img src={gateway} alt="IMC Gateway" className="w-full" />
        </div>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-[30px] mt-[30px]" />
      </section>

      {/* ===== Sketch Wall ===== */}
      <section className="mx-auto mt-14 max-w-[1200px] px-6">
        <div className="js-reveal mt-10 grid gap-10 sm:grid-cols-3 mb-12">
          <div className="sm:col-span-1 text-sm text-gray-300">
            <h2 className="text-[24px]">Visual Identity</h2>
          </div>
          <div className="sm:col-span-2">
            <p className="text-gray-300 leading-7">
              We also came up with a lot of other design options for walkthroughs, selfie spots,
              trophies, stages (thematic designs like the globe is ours, tree of knowledge them,
              celestial space design, palace themed design, etc.)
            </p>
          </div>
        </div>

        <div className="js-stagger-grid mt-4 grid gap-4 sm:grid-cols-3">
          {sketches.map((src, i) => (
            <div key={i} className="js-item overflow-hidden rounded-lg border border-white/10 bg-[#0b0b10]">
              <img src={src} alt={`Sketch ${i + 1}`} className="w-full" />
            </div>
          ))}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-[30px] mt-[30px]" />
      </section>

      {/* ===== Tunnel & Lab ===== */}
      <section className="mx-auto mt-14 max-w-[1200px] px-6">
        <div className="js-reveal mt-10 grid gap-10 sm:grid-cols-3 mb-12">
          <div className="sm:col-span-1 text-sm text-gray-300">
            <h2 className="text-[24px]">Visual Identity</h2>
          </div>
          <div className="sm:col-span-2">
            <p className="text-gray-300 leading-7">
              We also came up with a lot of other design options for walkthroughs, selfie spots,
              trophies, stages (thematic designs like the globe is ours, tree of knowledge them,
              celestial space design, palace themed design, etc.)
            </p>
          </div>
        </div>

        <div className="js-stagger-grid grid gap-6 sm:grid-cols-1">
          <div className="js-item overflow-hidden rounded-lg border border-white/10">
            <img src={tunnel} alt="The Future is Now tunnel" className="w-full" />
          </div>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-[10px] mt-[10px]" />

          <div className="js-reveal mt-10 grid gap-10 sm:grid-cols-3 mb-6">
            <div className="sm:col-span-1 text-sm text-gray-300">
              <h2 className="text-[24px]">Visual Identity</h2>
            </div>
            <div className="sm:col-span-2">
              <p className="text-gray-300 leading-7">Another big success was the knowledge street.</p>
            </div>
          </div>

          <div className="js-item overflow-hidden rounded-lg border border-white/10">
            <img src={lab} alt="Innovation lab space" className="w-full" />
          </div>
        </div>
      </section>

      {/* ===== Our Approach in Action ===== */}
      <section className="mx-auto mt-14 max-w-[1200px] px-6 js-reveal">
        <div className="max-w-[800px]">
          <h2 className="text-[36px]">The Blueprint for Brilliance: Our Approach in Action</h2>
          <p className="mt-3 text-gray-300 leading-7 ">
            We had some fantastic brainstorming sessions with designers and experts, generating
            some truly spectacular themes, ideas, and concepts! Our next step was to work with the
            implementers to bring these exciting visions to life.
          </p>
          <p className="mt-6 text-gray-300 leading-7">
            We learned a lot about how to best collaborate and communicate during this process.
            Sometimes, it took a bit of gentle encouragement to explore new approaches and try
            things that seemed unconventional at first.
          </p>
          <p className="mt-6 text-gray-300 leading-7">
            We discovered that everyone has a wealth of experience to share, and by working
            together, we could often achieve results that surprised even ourselves!
          </p>
          <p className="mt-6 text-gray-300 leading-7">
            This experience also gave us valuable insights into the implementers’ technical
            expertise and capabilities. We gained a clearer understanding of the types of designs
            they could readily produce, and where we could offer additional support.
          </p>
          <p className="mt-6 text-gray-300 leading-7">
            Another key takeaway was the importance of early and frequent communication. We found
            that providing feedback during the initial stages of the implementation process, rather
            than waiting for the final output, was incredibly helpful. This allowed us to address
            any potential issues early on, saving time, effort, and resources, and ultimately
            leading to much more successful outcomes.
          </p>
          <p className="mt-6 text-gray-300 leading-7">
            Overall, it was a truly rewarding journey, full of excitement and valuable learning
            experiences.
          </p>
        </div>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-[20px] mt-[20px]" />
      </section>

      {/* ===== Testimonial ===== */}
     <section className="mx-auto mt-14 max-w-[1200px] px-6 js-reveal">
  <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start">
    {/* Text Block */}
    <div className="w-full md:basis-[222px] md:grow">
      <p className="text-xl leading-relaxed text-gray-200 font-light md:text-[36px] md:leading-[3rem]">
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
        alt="Related case study"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</section>


      {/* ===== Related / Next Case ===== */}
      <section className="blog w-full bg-white text-zinc-900 py-20 mt-24">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-[1fr_420px] items-center">
          <div className="blog-text">
            <p className="uppercase text-xs tracking-wide text-zinc-500 mb-2">Up next</p>
            <h4 className="text-2xl sm:text-3xl font-normal mb-4">
              STL enters Access Solutions market
            </h4>
            <Link
              href="https://www.zamun.com/case-studies/stl-enters-access-solutions-market"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-800"
            >
              Read Case Study <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl ring-1 ring-zinc-200 bg-zinc-100 blog-img">
            <img src={relatedThumb} alt="Related case study" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>
    </main>
  );
}