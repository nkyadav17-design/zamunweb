"use client";

import dynamic from "next/dynamic";

// Flipbook needs window → disable SSR
const ImageFlipBook = dynamic(
  () => import("../../components/PdfFlipBook"),
  {
    ssr: false,
    loading: () => (
      <div className="text-sm text-neutral-400 text-center py-10">
        Loading viewer…
      </div>
    ),
  }
);

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-neutral-900 py-20">
      
      {/* PAGE HEADING */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-16">
        <h2 className="mt-3 mb-6 text-[24px] font-semibold uppercase 
          bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400 
          bg-clip-text text-transparent tracking-wide">
          Reports
        </h2>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
          Wired to Win – Choosing the Right Manufacturing Tech Stack
        </h1>
      </div>

      {/* FLIPBOOK VIEWER */}
      <div className="flex justify-center">
        <ImageFlipBook />
      </div>
    </main>
  );
}
