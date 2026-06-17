"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { albums } from "@/data/albums";
import { members } from "@/data/members";
import { songs } from "@/data/songs";

interface Result {
  type: "Album" | "Member" | "Song";
  title: string;
  subtitle: string;
  href: string;
}

function search(q: string): Result[] {
  if (!q.trim()) return [];
  const lower = q.toLowerCase();
  const results: Result[] = [];

  albums.forEach((a) => {
    if (a.title.toLowerCase().includes(lower) || String(a.year).includes(lower)) {
      results.push({ type: "Album", title: a.title, subtitle: String(a.year), href: `/albums/${a.slug}` });
    }
  });

  members.forEach((m) => {
    if (m.name.toLowerCase().includes(lower) || m.role.toLowerCase().includes(lower)) {
      results.push({ type: "Member", title: m.name, subtitle: m.role.split(",")[0], href: `/members/${m.slug}` });
    }
  });

  songs.forEach((s) => {
    if (s.title.toLowerCase().includes(lower) || s.album.toLowerCase().includes(lower)) {
      results.push({ type: "Song", title: s.title, subtitle: s.album, href: `/songs` });
    }
  });

  return results.slice(0, 8);
}

const typeColor: Record<string, string> = {
  Album: "bg-yellow-500/20 text-yellow-400",
  Member: "bg-blue-500/20 text-blue-400",
  Song: "bg-green-500/20 text-green-400",
};

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setResults(search(query));
  }, [query]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
    else setQuery("");
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen(true); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-neutral-400 hover:text-yellow-400 transition-colors px-2 py-1.5 text-xs border border-neutral-700 hover:border-yellow-500/50"
        aria-label="Search"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <span className="hidden lg:inline tracking-wider">Search</span>
        <span className="hidden lg:inline text-neutral-600 text-[10px] border border-neutral-700 px-1">⌘K</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={close} />
          <div className="relative w-full max-w-xl bg-[#1a1a1a] border border-yellow-500/40 shadow-2xl">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-700">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search albums, members, songs..."
                className="flex-1 bg-transparent text-white placeholder-neutral-500 outline-none text-sm"
              />
              <button onClick={close} className="text-neutral-600 hover:text-neutral-300 text-xs border border-neutral-700 px-1.5 py-0.5">ESC</button>
            </div>

            {results.length > 0 && (
              <div className="py-2 max-h-80 overflow-y-auto">
                {results.map((r, i) => (
                  <Link
                    key={i}
                    href={r.href}
                    onClick={close}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-yellow-500/8 transition-colors group"
                  >
                    <span className={`text-[10px] px-2 py-0.5 font-bold tracking-wider uppercase shrink-0 ${typeColor[r.type]}`}>
                      {r.type}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-bold group-hover:text-yellow-400 transition-colors truncate">{r.title}</div>
                      <div className="text-neutral-500 text-xs truncate">{r.subtitle}</div>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-700 group-hover:text-yellow-500 shrink-0">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                ))}
              </div>
            )}

            {query && results.length === 0 && (
              <div className="px-4 py-8 text-center text-neutral-500 text-sm">No results for &ldquo;{query}&rdquo;</div>
            )}

            {!query && (
              <div className="px-4 py-6 text-center text-neutral-600 text-xs tracking-wider">
                Search across albums, members, and songs
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
