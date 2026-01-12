// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "remixicon/fonts/remixicon.css";
import { Poppins } from "next/font/google";

const SITE_URL = "https://www.zamun.com";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOCAL_ID = `${SITE_URL}/#localbusiness`;

const LOGO_URL = `${SITE_URL}/zamun.png`;

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress:
    "Vipul Business Park, 205, Badshahpur Sohna Rd Hwy, Central Park II, Sector 48",
  addressLocality: "Gurugram",
  addressRegion: "Haryana",
  postalCode: "122018",
  addressCountry: "IN",
};

// ✅ Organization (Zamun)
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: SITE_URL,
  name: "Zamun",
  logo: LOGO_URL,
  description:
    "Zamun is a global marketing and brand strategy partner for technology and digital-first companies, delivering branding, content, SEO, design, and performance marketing to drive measurable growth.",
  email: "connect@zamun.com",
  telephone: "+91-9958960000",
  sameAs: [
    "https://www.linkedin.com/company/zamun-marketing/",
    "https://x.com/zamunservices",
    "https://www.facebook.com/zamunservices",
    "https://www.instagram.com/zamunservices/",
    "https://www.youtube.com/@ZamunStudios",
  ],
  address: ADDRESS,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9958960000",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: "en",
  },
};

// ✅ LocalBusiness (Zamun HQ)
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Zamun – Marketing & Brand Strategy Agency",
  image: LOGO_URL,
  "@id": LOCAL_ID,
  url: `${SITE_URL}/`,
  telephone: "+91-9958960000",
  address: ADDRESS,
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.4595",
    longitude: "77.0796",
  },
  sameAs: [
    "https://www.linkedin.com/company/zamun-marketing/",
    "https://x.com/zamunservices",
    "https://www.facebook.com/zamunservices",
    "https://www.instagram.com/zamunservices/",
    "https://www.youtube.com/@ZamunStudios",
  ],
};

// ✅ WebSite (Zamun)
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zamun",
  url: `${SITE_URL}/`,
  publisher: { "@id": ORG_ID },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blogs?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
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
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
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

        {/* ✅ Organization JSON-LD */}
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        {/* ✅ LocalBusiness JSON-LD */}
        <Script
          id="jsonld-localbusiness"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

        {/* ✅ WebSite JSON-LD */}
        <Script
          id="jsonld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
