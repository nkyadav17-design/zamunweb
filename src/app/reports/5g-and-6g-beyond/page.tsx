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
      <div className="max-w-4xl mx-auto text-center px-4 mb-4">
        <h2 className="mt-3 mb-6 text-[24px] font-semibold uppercase  bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400  bg-clip-text text-transparent tracking-wide">Report - 5G AND BEYOND</h2>
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">A definitive guide to build the next-gen
network of 5G and the future vision of 6G. </h1>
        </div>
      <div className="flex justify-center px-4">
        <PdfFlipBook fileUrl="/pdfs/5g-and-6g-beyond.pdf" />
      </div>
    </main>
  );
}
