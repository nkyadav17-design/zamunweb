// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { toJsonLd } from "@/lib/schema";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "remixicon/fonts/remixicon.css";
import { Poppins } from "next/font/google";

const SITE_URL = "https://www.zamun.com";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOCAL_ID = `${SITE_URL}/#localbusiness`;
const BLOG_ID = `${SITE_URL}/blogs#blog`;
const AUTHOR_ID = `${SITE_URL}/#author-amritarupa-laha`;

const LOGO_URL = `${SITE_URL}/zamun.png`;
const CONTACT_URL = `${SITE_URL}/contact`;

// ✅ Use direct Sanity image URL (better for schema than _next/image)
const AUTHOR_IMAGE =
  "https://cdn.sanity.io/images/ft9hq9oa/production/441861c8c04dde2e8eed0e731cf5fcc3af238f1d-200x200.png";

// ✅ Address (as visible on zamun.com contact page)
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress:
    "Vipul Business Park, 205, Badshahpur Sohna Rd Hwy, Central Park II, Sector 48",
  addressLocality: "Gurugram",
  addressRegion: "Haryana",
  postalCode: "122018",
  addressCountry: "IN",
};

const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ---------------- ORGANIZATION ----------------
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Zamun",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: LOGO_URL,
        contentUrl: LOGO_URL,
      },
      email: "connect@zamun.com",
      telephone: "+91-9958960000",
      sameAs: [
        "https://www.linkedin.com/company/zamun-marketing/",
        "https://x.com/zamunservices",
        "https://www.facebook.com/zamunservices",
        "https://www.instagram.com/zamunservices/",
        "https://www.youtube.com/@ZamunStudios",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+91-9958960000",
          email: "connect@zamun.com",
          availableLanguage: ["en"],
          url: CONTACT_URL,
        },
      ],
    },

    // ---------------- WEBSITE ----------------
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: "Zamun",
      publisher: { "@id": ORG_ID },
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/blogs?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },

    // ---------------- LOCAL BUSINESS / PROFESSIONAL SERVICE ----------------
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": LOCAL_ID,
      name: "Zamun",
      url: `${SITE_URL}/`,
      image: LOGO_URL,
      logo: { "@id": `${SITE_URL}/#logo` },
      telephone: "+91-9958960000",
      email: "connect@zamun.com",
      priceRange: "$$",
      address: ADDRESS,
      parentOrganization: { "@id": ORG_ID },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Place", name: "Global" },
      ],
      sameAs: [
        "https://www.linkedin.com/company/zamun-marketing/",
        "https://x.com/zamunservices",
        "https://www.instagram.com/zamunservices/",
      ],
    },

    // ---------------- AUTHOR (PERSON) ----------------
    {
      "@type": "Person",
      "@id": AUTHOR_ID,
      name: "Amritarupa Laha",
      image: AUTHOR_IMAGE,
      url: `${SITE_URL}/blogs`,
      worksFor: { "@id": ORG_ID },
      jobTitle: "Author",
    },

    // ---------------- BLOG (HUB ENTITY) ----------------
    {
      "@type": "Blog",
      "@id": BLOG_ID,
      name: "Zamun Blogs",
      url: `${SITE_URL}/blogs`,
      publisher: { "@id": ORG_ID },
      inLanguage: "en",
    },

    // ---------------- SERVICES CATALOG ----------------
    // Global services list (safe to keep in layout)
    {
      "@type": "OfferCatalog",
      "@id": `${SITE_URL}/services#catalog`,
      name: "Zamun Services",
      url: `${SITE_URL}/services`,
      itemListElement: [
        {
          "@type": "Offer",
          name: "Marketing Strategy Development",
          url: `${SITE_URL}/services/marketing-strategy-development`,
          itemOffered: {
            "@type": "Service",
            name: "Marketing Strategy Development",
            provider: { "@id": ORG_ID },
          },
        },
        {
          "@type": "Offer",
          name: "Content Strategy and Marketing",
          url: `${SITE_URL}/services/content-strategy-and-marketing`,
          itemOffered: {
            "@type": "Service",
            name: "Content Strategy and Marketing",
            provider: { "@id": ORG_ID },
          },
        },
        {
          "@type": "Offer",
          name: "Design Strategy and Service",
          url: `${SITE_URL}/services/design-strategy-and-service`,
          itemOffered: {
            "@type": "Service",
            name: "Design Strategy and Service",
            provider: { "@id": ORG_ID },
          },
        },
        {
          "@type": "Offer",
          name: "Specialized Marketing Services",
          url: `${SITE_URL}/services/specialized-marketing-services`,
          itemOffered: {
            "@type": "Service",
            name: "Specialized Marketing Services",
            provider: { "@id": ORG_ID },
          },
        },
      ],
    },
  ],
};

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ================== GLOBAL METADATA ================== */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zamun | Global Marketing & Brand Strategy Partner",
    template: "%s | Zamun",
  },
  description:
    "Zamun empowers tech and digital-first companies to grow with strategic branding, content, SEO, and performance marketing — all under one roof.",
  keywords: [
    "Zamun",
    "marketing strategy",
    "brand strategy",
    "content marketing",
    "performance marketing",
    "SEO services",
    "tech marketing agency",
    "digital branding",
    "B2B marketing",
    "global marketing partner",
  ],
  authors: [{ name: "Zamun", url: SITE_URL }],
  publisher: "Zamun",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Zamun | Global Marketing & Brand Strategy Partner",
    description:
      "A marketing and brand strategy studio helping tech companies turn ideas into measurable growth through content, design, and performance.",
    siteName: "Zamun",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zamun | Marketing Solutions for Tech Brands",
    description:
      "End-to-end marketing, branding, and growth campaigns designed for fast-moving tech and digital businesses.",
    site: "@zamunservices",
    creator: "@zamunservices",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

/* ================== ROOT LAYOUT ================== */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
    >
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3D72HD61BK"
          strategy="afterInteractive"
        />
        <Script
          id="ga-gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3D72HD61BK');
            `,
          }}
        />

        {/* Global JSON-LD */}
        <Script
          id="jsonld-global"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: toJsonLd(globalJsonLd) }}
        />
      </head>

      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
