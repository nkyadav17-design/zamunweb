"use client";

import Image from "next/image";
import Link from "next/link";

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-8 lg:px-10 py-16 md:py-20 lg:py-32">

        {/* Intro Copy */}
        <section className="space-y-8">
  <h1 className="font-light tracking-[-0.02em] leading-[1.30] text-[32px] md:text-[40px] lg:text-[52px]">
    <span className="[text-wrap:balance]">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
        We are good at this.
      </span>{" "}
      Our designers have been designer-ing for years and they've done some great stuff in that time.
    </span>
  </h1>

  <p className="font-light text-white/85 tracking-[-0.01em] leading-[1.30] text-[32px] md:text-[40px] lg:text-[52px]">
    They've built products of all scales and sizes, across industries and platforms, and crafted some{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
      uniquely human brands.
    </span>
  </p>
</section>



        {/* Spacer */}
        <div className="h-14" />

        {/* Block 1 */}
        <ProjectBlock
          captionTitle="India Mobile Congress"
          captionItems={["Identity, Visual System, On-site Experience", "2024"]}
          bodyText="The Experience Equation: Crafting a World-Class Tech Event"
          imageSrc="/images/case-studies/imc-24/IMC-Hero-img.png"
          imageTitle="WNS – Industrial & Infrastructure Case Study"
          link="/case-studies/imc-24"
        />

        <div className="my-10 h-px bg-white/10" />

        {/* Block 2 */}
        <ProjectBlock
          captionTitle="STL Tech"
          captionItems={["Enters the Access Solutions market"]}
          bodyText="STL enters Access Solutions market"
          imageSrc="/images/case-studies/stl/stl-case-study-cover-page.png"
          imageTitle="STL enters Access Solutions market"
          link="/case-studies/stl-enters-access-solutions-market"
        />

        <div className="my-10 h-px bg-white/10" />

        {/* Block 3 */}
        <ProjectBlock
          captionTitle="Quikr"
          captionItems={["An industry-specific listing site"]}
          bodyText="Quikr becomes an industry vertical listing site."
          imageSrc="/images/case-studies/quikr/Quikrites-at-the-Inaguratio.jpg"
          imageTitle="Quikr"
          link="/case-studies/quikr-becomes-an-industry-vertical-listing-site"
        />

        <div className="my-10 h-px bg-white/10" />

        {/* Block 4 */}
        <ProjectBlock
          captionTitle="Favista Real Estate Pvt. Ltd"
          captionItems={["Favista emerges as a strong online lead generator."]}
          bodyText="Favista establishes presence as an online lead generator"
          imageSrc="/images/case-studies/favista/favista-office.png"
          imageTitle="Favista Real Estate Pvt. Ltd"
          link="/case-studies/favista-establishes-presence-as-an-online-lead-generator"
        />

        <div className="my-10 h-px bg-white/10" />

        {/* Block 5 */}
        <ProjectBlock
          captionTitle="WNS"
          captionItems={["WNS becomes an Industrial & Infrastructure specialist"]}
          bodyText="WNS establishes itself as an Industrial and Infrastructure industry specialist"
          imageSrc="/images/case-studies/wns/WNS.jpeg"
          imageTitle="WNS"
          link="/case-studies/WNS"
        />

        <div className="my-10 h-px bg-white/10" />

        {/* Testimonial - Shirf ye remove kar do chal jayega - false && -  */}
        
        {false && <Testimonial />}

      </div>
    </main>
  );
}

/* --------------------------------------------------
   Project Block Component
-------------------------------------------------- */
function ProjectBlock({
  captionTitle,
  captionItems,
  bodyText,
  imageSrc,
  imageTitle,
  link,
}: {
  captionTitle: string;
  captionItems: string[];
  bodyText: string;
  imageSrc: string;
  imageTitle?: string;
  link: string;
}) {
  return (
    <section className="w-full">
      <Link href={link} className="block group" title="Case study">
        <div className="relative w-full aspect-[1114/768] rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
          <Image
            src={imageSrc}
            alt={captionTitle}
            title={imageTitle || captionTitle}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
        </div>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        <div className="lg:col-span-6">
          <div className="text-[13px] md:text-[14px] leading-5 text-white/75 space-y-[2px]">
            <p className="text-white font-medium">{captionTitle}</p>
            {captionItems.map((i) => (
              <p key={i}>{i}</p>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <p className="text-white/90 text-[22px] md:text-[24px] leading-[1.45] tracking-[-0.01em] max-w-[640px]">
            {bodyText}
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   UPDATED TESTIMONIAL (IMC Style)
-------------------------------------------------- */
function Testimonial() {
  return (
    <section className="mt-16">
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start">

       
        <div className="w-full md:basis-[222px] md:grow">
          <p className="text-lg leading-relaxed text-gray-200 font-light md:text-[28px] md:leading-[2.4rem]">
            It’s rare to find an agency that brings such an interesting, innovative idea
            to the table but then also knows how to design and engineer the product.
          </p>

          <p className="mt-4 text-base text-gray-400 md:text-lg">
            Full Name, Vice President
          </p>
        </div>

       
        <div className="w-full max-w-[260px] md:max-w-none md:w-64 shrink-0">
          <Image
            src="/images/case-studies/imc-24/testimonials-icons.png"
            alt="Testimonial illustration"
            title="Testimonial illustration"
            width={260}
            height={260}
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
}
