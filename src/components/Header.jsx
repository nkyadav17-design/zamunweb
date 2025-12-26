"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { title } from "process";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  // Scroll effect for sticky background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-focus on search input
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      const timer = setTimeout(() => {
        searchInputRef.current.focus();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [searchOpen]);

  return (
    <>
      {/* ======= HEADER BAR ======= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md shadow-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1800px] mx-auto w-full flex items-center justify-between px-6 sm:px-10 relative">
          {/* === LEFT: Logo === */}
          <Link
            href="/"
            className="text-white text-2xl font-semibold tracking-wide" title="Zamun"
          >
            zamun<span className="text-purple-400">.</span>
          </Link>

          {/* === CENTER: Navigation (Desktop) === */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-10 text-white text-sm font-light">
            <Link href="/case-studies" className="hover:text-purple-300 transition" title="Case Studies">
              Case Studies
            </Link>
            <Link href="/reports" className="hover:text-purple-300 transition" title="Reports">
              Reports
            </Link>
            <Link href="/services" className="hover:text-purple-300 transition" title="Our Services">
              Our Services
            </Link>
            <Link href="/blogs" className="hover:text-purple-300 transition" title="Blogs">
              Blogs
            </Link>
            <Link href="/about" className="hover:text-purple-300 transition" title="About Us">
              About Us
            </Link>
          </nav>

          {/* === RIGHT: Search + Menu Icons === */}
          <div className="flex items-center space-x-6 text-white z-[60]">
            {/* Search Icon */}
            <button
              type="button"
              className="hover:text-purple-300 focus:outline-none"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <i className="ri-search-line text-xl"></i>
            </button>

            {/* Menu / Close Icon */}
            <button
              type="button"
              className="hover:text-purple-300 focus:outline-none text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <i
                className={`ri-${menuOpen ? "close-line" : "menu-line"} text-2xl`}
              ></i>
            </button>
          </div>
        </div>
      </header>

      {/* ======= MOBILE OVERLAY MENU ======= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center z-40"
          >
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-10 text-white text-3xl font-light text-center"
            >
              {[
                { name: "Case Studies", link: "/case-studies" },
                { name: "Reports", link: "/reports" },
                { name: "Our Services", link: "/services" },
                { name: "Blogs", link: "/blogs" },
                { name: "About Us", link: "/about" },
              ].map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-purple-300 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======= SEARCH OVERLAY ======= */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            key="search-bar"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[70] flex flex-col items-center justify-start pt-32 px-6"
            onClick={() => setSearchOpen(false)}
          >
            <div
              className="w-full max-w-2xl bg-black/50 border border-white/20 rounded-xl shadow-lg flex items-center px-5 py-4"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="ri-search-line text-xl text-white/70 mr-3"></i>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search case studies, reports, blogs..."
                className="flex-1 bg-transparent text-white placeholder-white/60 text-lg outline-none"
              />
              <button
                type="button"
                className="ml-3 text-white/70 hover:text-white transition"
                onClick={() => setSearchOpen(false)}
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
