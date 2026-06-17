"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import GlobalSearch from "./GlobalSearch";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/albums", label: "Albums" },
  { href: "/members", label: "Members" },
  { href: "/songs", label: "Songs" },
  { href: "/tours", label: "Tours" },
  { href: "/news", label: "News" },
  { href: "/trivia", label: "Trivia" },
  { href: "/gear", label: "Gear" },
  { href: "/quotes", label: "Quotes" },
  { href: "/about", label: "Timeline" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#111111] border-b-2 border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-1 h-5 bg-yellow-500" />
            <span className="text-yellow-400 font-black text-base tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-200">
              Metallica
            </span>
            <span className="hidden sm:block text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-light border-l border-neutral-700 pl-2.5">
              Fan Site
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-2 text-[11px] tracking-[0.1em] uppercase font-bold transition-all duration-150 ${
                  pathname === link.href
                    ? "text-black bg-yellow-500"
                    : "text-neutral-300 hover:text-yellow-400 hover:bg-yellow-500/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search + hamburger */}
          <div className="flex items-center gap-2">
            <GlobalSearch />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden flex flex-col gap-1.5 p-2 text-neutral-400 hover:text-yellow-400 transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px bg-current transition-transform duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block w-5 h-px bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-current transition-transform duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="xl:hidden pb-4 border-t border-neutral-800 pt-2 grid grid-cols-2 gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-2 text-xs tracking-[0.15em] uppercase font-bold transition-colors border-b border-neutral-800 ${
                  pathname === link.href
                    ? "text-yellow-400"
                    : "text-neutral-400 hover:text-yellow-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
