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
          <a href="https://www.linkedin.com/company/zamun-marketing" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="hover:text-white transition">
            <i className="ri-linkedin-fill text-lg" />
          </a>
           <a
  href="https://x.com/zamunservices"
  aria-label="Twitter"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  <i className="ri-twitter-fill text-lg" />
</a>

<a
  href="https://www.facebook.com/zamunservices"
  aria-label="Facebook"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  <i className="ri-facebook-fill text-lg" />
</a>

<a
  href="https://www.instagram.com/zamunservices/"
  aria-label="Instagram"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  <i className="ri-instagram-line text-lg" />
</a>

<a
  href="https://www.youtube.com/@ZamunStudios"
  aria-label="YouTube"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  <i className="ri-youtube-fill text-lg" />
</a>

        </div>
      </div>
    </footer>
  );
}
