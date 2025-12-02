"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0B0B10] text-white flex flex-col justify-center items-center px-6 text-center">
      
      {/* Gradient 404 */}
      <h1 className="text-[110px] sm:text-[150px] font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        404
      </h1>

      {/* Headline */}
      <h2 className="text-2xl sm:text-3xl font-semibold mt-2">
        Page Not Found
      </h2>

      {/* Sub Message */}
      <p className="mt-3 text-white/70 max-w-lg">
        The page you’re trying to reach doesn’t exist or has been moved to a new location.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex gap-4">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition"
        >
          Go Back
        </button>

        {/* Gradient Button */}
        <Link
          href="/"
          className="px-8 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
        >
          Get Started
        </Link>
      </div>

      {/* Soft Gradient Background Graphic */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_center,_#7c3aed,_#ec4899,_transparent_60%)]" />
    </div>
  );
}
