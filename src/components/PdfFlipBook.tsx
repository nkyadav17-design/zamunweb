"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const PAGES = [
  "/pdfs/whitepaper-pages/whitepaper_page-0001.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0002.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0003.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0004.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0005.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0006.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0007.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0008.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0009.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0010.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0011.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0012.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0013.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0014.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0015.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0016.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0017.jpg",
  "/pdfs/whitepaper-pages/whitepaper_page-0018.jpg",
];

export default function ImageBook() {
  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = PAGES.length;

  const goPrev = useCallback(() => {
    setPageIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goNext = useCallback(() => {
    setPageIndex((prev) => Math.min(prev + 1, totalPages - 1));
  }, [totalPages]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goPrev, goNext]);

  const currentSrc = PAGES[pageIndex];

  return (
    <div className="flex flex-col items-center gap-8">
      {/* BIG viewer – width-based, no fixed height */}
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[1100px] rounded-[28px] bg-neutral-900/80 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
          <div className="w-full rounded-[22px] bg-neutral-800/90 p-4">
            <div className="w-full rounded-[18px] bg-white overflow-hidden">
              <Image
                src={currentSrc}
                alt={`Page ${pageIndex + 1}`}
                width={1100}     // main width on desktop
                height={1550}    // just keeps aspect ratio
                className="w-full h-auto object-contain"
                priority={pageIndex === 0}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom pager */}
      <div className="flex items-center gap-3 rounded-full border border-neutral-700 bg-neutral-900/95 px-6 py-2 text-xs text-neutral-100 shadow-[0_18px_40px_rgba(0,0,0,0.55)]">
        <button
          onClick={goPrev}
          disabled={pageIndex === 0}
          className="h-7 w-7 rounded-full border border-neutral-700 flex items-center justify-center text-[13px] hover:bg-neutral-800 disabled:opacity-40"
        >
          ‹
        </button>

        <div className="flex items-center gap-1 rounded-md bg-neutral-800/90 px-4 py-1">
          <span className="text-[11px] font-medium">{pageIndex + 1}</span>
          <span className="text-neutral-400 text-[11px]">/ {totalPages}</span>
        </div>

        <button
          onClick={goNext}
          disabled={pageIndex === totalPages - 1}
          className="h-7 w-7 rounded-full border border-neutral-700 flex items-center justify-center text-[13px] hover:bg-neutral-800 disabled:opacity-40"
        >
          ›
        </button>
      </div>
    </div>
  );
}
