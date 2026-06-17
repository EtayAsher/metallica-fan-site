"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Song } from "@/data/songs";

interface Props {
  songs: Song[];
}

export default function SongsClient({ songs }: Props) {
  const [search, setSearch] = useState("");
  const [albumFilter, setAlbumFilter] = useState("All");

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

  return (
    <>
      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-2 mb-10">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search songs or albums..."
          className="flex-1 bg-[#1c1c1c] border border-neutral-600 focus:border-yellow-500/50 text-neutral-200 placeholder-neutral-700 text-sm px-4 py-3 outline-none transition-colors"
        />
        <select
          value={albumFilter}
          onChange={(e) => setAlbumFilter(e.target.value)}
          className="bg-[#1c1c1c] border border-neutral-600 text-neutral-400 text-sm px-4 py-3 outline-none focus:border-yellow-500/50 transition-colors min-w-[180px]"
        >
          {albums.map((a) => (
            <option key={a} value={a}>{a === "All" ? "All Albums" : a}</option>
          ))}
        </select>
      </div>

      <div className="text-neutral-700 text-[10px] tracking-[0.3em] uppercase mb-6">
        {filtered.length} {filtered.length === 1 ? "track" : "tracks"}
      </div>

      {filtered.length === 0 ? (
        <div className="bg-neutral-950 border border-neutral-900 p-16 text-center">
          <div className="text-neutral-600 text-sm">No tracks match your search.</div>
          <button
            onClick={() => { setSearch(""); setAlbumFilter("All"); }}
            className="mt-4 text-yellow-500 hover:text-yellow-400 text-xs tracking-[0.2em] uppercase transition-colors"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-px">
          {filtered.map((song, index) => (
            <article
              key={song.slug}
              className="bg-[#1c1c1c] border border-neutral-700 hover:border-yellow-500 p-5 transition-all duration-150 group"
            >
              <div className="flex items-start gap-5">
                <span className="text-neutral-800 font-black font-mono text-xs mt-0.5 w-6 shrink-0 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="font-black text-white text-base uppercase tracking-wide group-hover:text-yellow-400 transition-colors">
                      {song.title}
                    </h2>
                    <span className="text-neutral-700 font-mono text-xs">{song.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Link
                      href={`/albums/${song.albumSlug}`}
                      className="text-yellow-600/70 hover:text-yellow-400 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors"
                    >
                      {song.album}
                    </Link>
                    <span className="text-neutral-800 text-[10px]">·</span>
                    <span className="text-neutral-700 text-[10px] tracking-wider">{song.year}</span>
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
