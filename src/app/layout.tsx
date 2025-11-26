import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
// @ -> root folder (src folder)
import Footer from "@/components/Footer";


import "remixicon/fonts/remixicon.css";
import "./globals.css";

import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // ✅ All font weights
  subsets: ['latin'],
  display: 'swap', // ✅ optional but recommended for performance
  variable: '--font-poppins', // ✅ optional custom CSS variable name
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zamun | Marketing Solutions",
  description: "We offer a range of marketing services, such as branding, content creation, SEO, social media and more. We also use the latest tools and technologies to ...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        
        <Header/>
        {children}
        <Footer />

      </body>
    </html>
  );
}

