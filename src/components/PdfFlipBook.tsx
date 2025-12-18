"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

/* PDF.js worker */
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

/* react-pageflip typing workaround */
const FlipBook: any = HTMLFlipBook;

type Props = {
  fileUrl: string;
};

/* Cache type */
type Cache = Record<number, string>; // pageNumber -> image

export default function PdfFlipBook({ fileUrl }: Props) {
  const bookRef = useRef<any>(null);

  /* PDF + pagination */
  const [pdf, setPdf] = useState<any>(null);
  const [numPages, setNumPages] = useState(0);
  const [pageIndex, setPageIndex] = useState(0); // 0-based

  /* Rendering */
  const [loading, setLoading] = useState(true);
  const [renderScale, setRenderScale] = useState(1.1); // tweak for quality/speed

  /* Cache + render guards */
  const cacheRef = useRef<Cache>({});
  const renderingRef = useRef<Set<number>>(new Set());

  /* Force re-render when cache updates */
  const [, setTick] = useState(0);

  const width = 420;
  const height = 560;

  /* Load PDF once */
  useEffect(() => {
    let cancelled = false;

    async function loadPdf() {
      try {
        setLoading(true);
        cacheRef.current = {};
        renderingRef.current.clear();

        const doc = await pdfjsLib.getDocument(fileUrl).promise;
        if (cancelled) return;

        setPdf(doc);
        setNumPages(doc.numPages);
        setPageIndex(0);
      } catch (e) {
        console.error("PDF load error:", e);
        if (!cancelled) {
          setPdf(null);
          setNumPages(0);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadPdf();
    return () => {
      cancelled = true;
    };
  }, [fileUrl]);

  /* Render a single page into cache */
  const renderPageToCache = async (pageNumber: number) => {
    if (!pdf) return;
    if (pageNumber < 1 || pageNumber > numPages) return;
    if (cacheRef.current[pageNumber]) return;
    if (renderingRef.current.has(pageNumber)) return;

    renderingRef.current.add(pageNumber);

    try {
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale: renderScale });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);

      await page.render({ canvasContext: ctx, viewport }).promise;

      cacheRef.current[pageNumber] = canvas.toDataURL("image/jpeg", 0.8);
      setTick((t) => t + 1); // trigger re-render
    } catch (e) {
      console.error("Render error:", pageNumber, e);
    } finally {
      renderingRef.current.delete(pageNumber);
    }
  };

  /* Lazy prefetch: current + next 2 + prev */
  useEffect(() => {
    if (!pdf || !numPages) return;

    const current = pageIndex + 1;

    renderPageToCache(current);
    renderPageToCache(current + 1);
    renderPageToCache(current + 2);
    renderPageToCache(current - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf, numPages, pageIndex, renderScale]);

  /* Zoom = clear cache and re-render around current */
  useEffect(() => {
    if (!pdf) return;

    cacheRef.current = {};
    renderingRef.current.clear();

    const current = pageIndex + 1;
    renderPageToCache(current);
    renderPageToCache(current + 1);
    renderPageToCache(current + 2);
    renderPageToCache(current - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderScale]);

  /* Controls */
  const next = () => bookRef.current?.pageFlip()?.flipNext();
  const prev = () => bookRef.current?.pageFlip()?.flipPrev();

  const zoomIn = () => setRenderScale((z) => Math.min(1.8, +(z + 0.2).toFixed(2)));
  const zoomOut = () => setRenderScale((z) => Math.max(1.0, +(z - 0.2).toFixed(2)));
  const resetZoom = () => setRenderScale(1.1);

  const pageLabel = useMemo(() => {
    const current = Math.min(numPages, Math.max(1, pageIndex + 1));
    return { current, total: numPages };
  }, [pageIndex, numPages]);

  const getImage = (pageNumber: number) => cacheRef.current[pageNumber];

  if (loading) {
    return (
      <div className="py-12 text-center text-neutral-400">
        Preparing flipbook…
      </div>
    );
  }

  if (!pdf || !numPages) {
    return (
      <div className="py-12 text-center text-red-400">
        Failed to load PDF.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* Flipbook */}
      <FlipBook
        ref={bookRef}
        width={width}
        height={height}
        showCover
        mobileScrollSupport
        onFlip={(e: any) => setPageIndex(e.data)}
        className="shadow-2xl"
      >
        {Array.from({ length: numPages }, (_, idx) => {
          const pageNumber = idx + 1;
          const img = getImage(pageNumber);

          return (
            <div key={pageNumber} className="bg-neutral-900">
              {img ? (
                <img
                  src={img}
                  alt={`Page ${pageNumber}`}
                  className="w-full h-full object-contain select-none"
                  draggable={false}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-400 text-sm">
                  Loading page {pageNumber}…
                </div>
              )}
            </div>
          );
        })}
      </FlipBook>

      {/* Bottom Controls */}
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-white/10 bg-neutral-950/80 px-4 py-3">
        <button onClick={prev} className="px-3 py-2 text-sm border rounded-lg text-white border-white/10">
          Prev
        </button>
        <button onClick={next} className="px-3 py-2 text-sm border rounded-lg text-white border-white/10">
          Next
        </button>

        <span className="mx-2 text-sm text-neutral-300">
          Page <span className="text-white">{pageLabel.current}</span> / {pageLabel.total}
        </span>

        <button onClick={zoomOut} className="px-3 py-2 text-sm border rounded-lg text-white border-white/10">
          −
        </button>
        <button onClick={resetZoom} className="px-3 py-2 text-sm border rounded-lg text-white border-white/10">
          {Math.round((renderScale / 1.1) * 100)}%
        </button>
        <button onClick={zoomIn} className="px-3 py-2 text-sm border rounded-lg text-white border-white/10">
          +
        </button>

        <a
          href={fileUrl}
          download
          className="ml-2 px-3 py-2 text-sm rounded-lg bg-white text-black"
        >
          Download
        </a>
      </div>
    </div>
  );
}
