import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "remixicon/fonts/remixicon.css";

import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
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
  metadataBase: new URL("https://www.zamun.com"),

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

  authors: [
    {
      name: "Zamun",
      url: "https://www.zamun.com",
    },
  ],

  publisher: "Zamun",

  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://www.zamun.com",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Organization schema for Zamun
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zamun",
    url: "https://www.zamun.com",
    logo: "https://www.zamun.com/favicon-512.png", // update to your final logo URL
    description:
      "Zamun is a marketing and brand strategy partner for tech companies, offering branding, content, SEO, design, and performance marketing services.",
    sameAs: [
      "https://www.linkedin.com/company/zamun-marketing",
      "https://www.instagram.com/zamunservices/",
      "https://x.com/zamunservices",
      "https://www.youtube.com/@ZamunStudios",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
    >
      <head>
        {/* Google Analytics (gtag.js) */}
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

        {/* Organization JSON-LD schema */}
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
