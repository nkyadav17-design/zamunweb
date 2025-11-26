"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    /* ================= FOOTER ================= */
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-12 py-8 gap-6">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold tracking-wide">
          zamun<span className="text-purple-400">.</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <Link href="/case-studies" className="hover:text-white transition">
            Case Studies
          </Link>
          <Link href="/reports" className="hover:text-white transition">
            Reports
          </Link>
          <Link href="/services" className="hover:text-white transition">
            Our Services
          </Link>
          <Link href="/blogs" className="hover:text-white transition">
            Blogs
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About Us
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-white/80">
          <a href="#" aria-label="Twitter" className="hover:text-white transition">
            <i className="ri-twitter-fill text-lg" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-white transition">
            <i className="ri-facebook-fill text-lg" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white transition">
            <i className="ri-instagram-line text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
