"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/albums", label: "Albums" },
  { href: "/members", label: "Members" },
  { href: "/songs", label: "Songs" },
  { href: "/trivia", label: "Trivia" },
  { href: "/about", label: "Timeline" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#111111] border-b-2 border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-1 h-6 bg-yellow-500" />
            <span className="text-yellow-400 font-black text-lg tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-200">
              Metallica
            </span>
            <span className="hidden sm:block text-neutral-500 text-[10px] tracking-[0.4em] uppercase font-light border-l border-neutral-700 pl-3">
              Fan Site
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-xs tracking-[0.12em] uppercase font-bold transition-all duration-150 ${
                  pathname === link.href
                    ? "text-black bg-yellow-500"
                    : "text-neutral-300 hover:text-yellow-400 hover:bg-yellow-500/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 text-neutral-500 hover:text-neutral-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-px bg-current transition-transform duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-5 h-px bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-current transition-transform duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-neutral-900 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 px-2 text-xs tracking-[0.15em] uppercase font-medium transition-colors border-b border-neutral-900 last:border-0 ${
                  pathname === link.href
                    ? "text-yellow-400"
                    : "text-neutral-500 hover:text-neutral-200"
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
