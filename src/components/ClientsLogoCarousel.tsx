"use client";

import Image from "next/image";

type LogoItem = {
  id: string;
  name: string;
  src: string;
  href?: string;
};

const logos: LogoItem[] = [
  { id: "exicom", name: "Exicom", src: "/images/clients-logo/exicom.png" },
  { id: "mainstream", name: "The Mainstream", src: "/images/clients-logo/Themainstream.png" },
  { id: "hfcl", name: "HFCL", src: "/images/clients-logo/hfcl.png" },
  { id: "airtel", name: "Airtel", src: "/images/clients-logo/airtel.png" },
  { id: "aistra", name: "Aistra", src: "/images/clients-logo/Aistra.png" },
  { id: "apar", name: "Apar", src: "/images/clients-logo/apar.png" },
  { id: "imc", name: "India Mobile Congress", src: "/images/clients-logo/India-mobile-congress.png" },
  { id: "ima", name: "IMA", src: "/images/clients-logo/IMA.png" },
  { id: "pavilions", name: "Pavilions & Interiors", src: "/images/clients-logo/Pavilions-and-Interiors.png" },
  { id: "jubilant", name: "Jubilant Pharmova", src: "/images/clients-logo/Jubilant-pharmova.png" },
  { id: "mothercare", name: "Mothercare", src: "/images/clients-logo/mothercare.png" },
  { id: "comviva", name: "Comviva", src: "/images/clients-logo/Comviva.png" },
  { id: "invenia", name: "Invenia", src: "/images/clients-logo/invenia.png" },
  { id: "bhabani", name: "Bhabani", src: "/images/clients-logo/bhabani.png" },
];

function LogoRow({ items }: { items: LogoItem[] }) {
  return (
    <div className="flex items-center gap-10">
      {items.map((logo) => (
        <div
          key={logo.id}
          className="flex items-center justify-center min-w-[150px] sm:min-w-[200px]"
          title={logo.name}
        >
          <Image
            src={logo.src}
            alt={`${logo.name} logo`}
            title={logo.name}
            width={200}
            height={100}
            className="w-auto object-contain rounded-sm transition"
          />
        </div>
      ))}
    </div>
  );
}

export default function ClientsLogoCarousel() {
  return (
    <section id="clients" className="bg-neutral-950 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white">
            Clients & Partners
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-8">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-neutral-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-neutral-950 to-transparent" />

          {/* IMPORTANT:
              We render TWO identical rows side-by-side.
              We animate the container by -50% so the second replaces the first seamlessly. */}
          <div className="group">
            <div className="flex w-max items-center whitespace-nowrap will-change-transform animate-[marquee_14s_linear_infinite] group-hover:[animation-play-state:paused]">
              <div className="flex items-center gap-10 pr-10">
                <LogoRow items={logos} />
              </div>
              <div className="flex items-center gap-10 pr-10" aria-hidden="true">
                <LogoRow items={logos} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_14s_linear_infinite\\] {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
