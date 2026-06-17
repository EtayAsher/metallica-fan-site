"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import type { Song } from "@/data/songs";

interface Props {
  songs: Song[];
}

export default function SongsClient({ songs }: Props) {
  const [search, setSearch] = useState("");
  const [albumFilter, setAlbumFilter] = useState("All");
  const [highlightSlug, setHighlightSlug] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const albums = useMemo(() => {
    const unique = Array.from(new Set(songs.map((s) => s.album)));
    return ["All", ...unique];
  }, [songs]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return songs.filter((s) => {
      const matchSearch = !q || s.title.toLowerCase().includes(q) || s.album.toLowerCase().includes(q);
      const matchAlbum = albumFilter === "All" || s.album === albumFilter;
      return matchSearch && matchAlbum;
    });
  }, [songs, search, albumFilter]);

  const pickRandom = () => {
    const pool = filtered.length > 0 ? filtered : songs;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setSearch("");
    setAlbumFilter("All");
    setHighlightSlug(pick.slug);
    setTimeout(() => {
      const el = document.getElementById(`song-${pick.slug}`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
    setTimeout(() => setHighlightSlug(null), 3000);
  };

  return (
    <>
      {/* Search + filter + random */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search songs or albums..."
          className="flex-1 bg-[#1c1c1c] border border-neutral-600 focus:border-yellow-500 text-neutral-200 placeholder-neutral-500 text-sm px-4 py-3 outline-none transition-colors"
        />
        <select
          value={albumFilter}
          onChange={(e) => setAlbumFilter(e.target.value)}
          className="bg-[#1c1c1c] border border-neutral-600 text-neutral-400 text-sm px-4 py-3 outline-none focus:border-yellow-500 transition-colors min-w-[180px]"
        >
          {albums.map((a) => (
            <option key={a} value={a}>{a === "All" ? "All Albums" : a}</option>
          ))}
        </select>
        <button
          onClick={pickRandom}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-5 py-3 text-xs tracking-[0.2em] uppercase transition-colors whitespace-nowrap"
        >
          🎲 Random
        </button>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase">
          {filtered.length} {filtered.length === 1 ? "track" : "tracks"}
        </div>
        {(search || albumFilter !== "All") && (
          <button
            onClick={() => { setSearch(""); setAlbumFilter("All"); }}
            className="text-yellow-500 hover:text-yellow-400 text-xs tracking-[0.2em] uppercase transition-colors"
          >
            Clear filters ×
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="bg-[#1c1c1c] border border-neutral-700 p-16 text-center">
          <div className="text-neutral-500 text-sm">No tracks match your search.</div>
          <button
            onClick={() => { setSearch(""); setAlbumFilter("All"); }}
            className="mt-4 text-yellow-500 hover:text-yellow-400 text-xs tracking-[0.2em] uppercase transition-colors"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-px" ref={listRef}>
          {filtered.map((song, index) => (
            <article
              id={`song-${song.slug}`}
              key={song.slug}
              className={`border p-5 transition-all duration-300 group ${
                highlightSlug === song.slug
                  ? "border-yellow-500 bg-yellow-500/10 scale-[1.01]"
                  : "bg-[#1c1c1c] border-neutral-700 hover:border-yellow-500"
              }`}
            >
              <div className="flex items-start gap-5">
                <span className={`font-black font-mono text-xs mt-0.5 w-6 shrink-0 tabular-nums ${highlightSlug === song.slug ? "text-yellow-400" : "text-neutral-700"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className={`font-black text-base uppercase tracking-wide transition-colors ${highlightSlug === song.slug ? "text-yellow-400" : "text-white group-hover:text-yellow-400"}`}>
                      {song.title}
                    </h2>
                    <span className="text-neutral-600 font-mono text-xs">{song.duration}</span>
                    {highlightSlug === song.slug && (
                      <span className="bg-yellow-500 text-black text-[10px] font-black px-2 py-0.5 uppercase tracking-wider">Random Pick</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Link href={`/albums/${song.albumSlug}`} className="text-yellow-500/70 hover:text-yellow-400 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">
                      {song.album}
                    </Link>
                    <span className="text-neutral-800 text-[10px]">·</span>
                    <span className="text-neutral-600 text-[10px] tracking-wider">{song.year}</span>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">{song.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
