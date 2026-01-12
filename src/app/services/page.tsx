import type { Metadata } from "next";
import Script from "next/script";
import ServicesSlider from "@/components/ServicesSlider";
import { toJsonLd } from "@/lib/schema";

const SITE_URL = "https://www.zamun.com";
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const metadata: Metadata = {
  title: "Marketing, Brand, Design & Content Services",
  description:
    "Explore Zamun’s marketing strategy, brand positioning, design strategy, content marketing, campaign management, and specialized marketing services for tech-driven businesses.",
  alternates: {
    canonical: "https://www.zamun.com/services",
  },
  keywords: [
    "marketing services",
    "marketing strategy development",
    "brand positioning",
    "brand marketing services",
    "design strategy services",
    "content strategy and marketing",
    "channel and campaign management",
    "specialized marketing services",
    "B2B marketing services",
    "tech marketing agency",
  ],
};

const services = [
  { slug: "marketing-strategy-development", name: "Marketing Strategy Development" },
  { slug: "brand-positioning-and-marketing", name: "Brand Positioning and Marketing" },
  { slug: "design-strategy-and-service", name: "Design Strategy and Service" },
  { slug: "content-strategy-and-marketing-services", name: "Content Strategy and Marketing Services" },
  { slug: "channel-and-campaign-management", name: "Channel & Campaign Management" },
  { slug: "specialized-marketing-services", name: "Specialized Marketing Services" },
];

const servicesIndexJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/services#webpage`,
      url: `${SITE_URL}/services`,
      name: "Services | Zamun",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      inLanguage: "en",
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/services#itemlist`,
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: `${SITE_URL}/services/${s.slug}`,
      })),
    },
  ],
};

const items = [
  {
    id: "mk-1",
    category: "Marketing",
    title: "Marketing Strategy Development",
    href: "/services/marketing-strategy-development",
    image: "/images/services/Marketing-Strategy-Development.png",
    alt: "Marketing strategy development services for technology-driven businesses",
  },
  {
    id: "br-1",
    category: "Brand",
    title: "Brand Positioning and Marketing",
    href: "/services/brand-positioning-and-marketing",
    image: "/images/services/Brand-Positioning-and-Marketing.jpg",
    alt: "Brand positioning and brand marketing services for B2B companies",
  },
  {
    id: "de-1",
    category: "Design",
    title: "Design Strategy and Service",
    href: "/services/design-strategy-and-service",
    image: "/images/services/Design-Strategy-Services.jpg",
    alt: "Design strategy and creative services for modern digital brands",
  },
  {
    id: "mk-2",
    category: "Strategy and Marketing",
    title: "Content Strategy and Marketing Services",
    href: "/services/content-strategy-and-marketing",
    image: "/images/services/Content-Strategy-and-Marketing.jpg",
    alt: "Content strategy and marketing services for B2B growth",
  },
  {
    id: "mk-3",
    category: "Marketing",
    title: "Channel & Campaign Management",
    href: "/services/channel-and-campaign-marketing",
    image: "/images/services/Channel-and-Campaign-Marketing.jpg",
    alt: "Channel and campaign management services across digital platforms",
  },
  {
    id: "mk-4",
    category: "Marketing",
    title: "Specialized Marketing Services",
    href: "/services/specialized-marketing-services",
    image: "/images/services/Specialized-Marketing-Services.jpg",
    alt: "Specialized marketing services tailored for tech companies",
  },
];

export default function OurServicesPage() {
  return (
    <>
      <Script
        id="jsonld-services-index"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: toJsonLd(servicesIndexJsonLd) }}
      />

      <main className="bg-black">
        <ServicesSlider heading="Our Services" items={items} />
      </main>
    </>
  );
}
