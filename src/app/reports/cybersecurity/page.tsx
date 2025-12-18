"use client";

import dynamic from "next/dynamic";

const PdfFlipBook = dynamic(() => import("../../../components/PdfFlipBook"), {
  ssr: false,
  loading: () => (
    <div className="text-sm text-neutral-400 text-center py-16">
      Loading flipbook…
    </div>
  ),
});

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-neutral-900 py-16">
      <div className="max-w-4xl mx-auto text-center px-4 mb-16">
        <h2 className="mt-3 mb-6 text-[24px] font-semibold uppercase  bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400  bg-clip-text text-transparent tracking-wide">Report - CYBERSECURITY</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">A Foundational Understanding of Cybersecurity</h1>
        </div>
      <div className="flex justify-center px-4">
        <PdfFlipBook fileUrl="/pdfs/cyber_security.pdf" />
      </div>
    </main>
  );
}
