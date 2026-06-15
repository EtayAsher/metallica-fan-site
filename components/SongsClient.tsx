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
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="flex-1 relative">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search songs or albums..."
            className="w-full bg-neutral-900 border border-neutral-700 focus:border-neutral-500 text-neutral-200 placeholder-neutral-600 text-sm px-4 py-3 outline-none transition-colors"
          />
        </div>
        <select
          value={albumFilter}
          onChange={(e) => setAlbumFilter(e.target.value)}
          className="bg-neutral-900 border border-neutral-700 text-neutral-300 text-sm px-4 py-3 outline-none focus:border-neutral-500 transition-colors min-w-[160px]"
        >
          {albums.map((a) => (
            <option key={a} value={a}>
              {a === "All" ? "All Albums" : a}
            </option>
          ))}
        </select>
      </div>

      {/* Result count */}
      <div className="text-neutral-600 text-xs mb-5 tracking-wide">
        {filtered.length} {filtered.length === 1 ? "track" : "tracks"} found
      </div>

      {/* Songs list */}
      {filtered.length === 0 ? (
        <div className="bg-neutral-900 border border-neutral-800 p-12 text-center">
          <div className="text-neutral-500 text-sm">No tracks match your search.</div>
          <button
            onClick={() => { setSearch(""); setAlbumFilter("All"); }}
            className="mt-4 text-red-600 hover:text-red-500 text-xs transition-colors underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((song, index) => (
            <article
              key={song.slug}
              className="bg-neutral-900 border border-neutral-800 hover:border-neutral-600 p-5 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <span className="text-neutral-700 font-mono text-xs mt-1 w-6 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                    <h2 className="font-bold text-white text-base">{song.title}</h2>
                    <span className="text-neutral-600 font-mono text-xs">{song.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Link
                      href={`/albums/${song.albumSlug}`}
                      className="text-red-700 hover:text-red-500 text-xs font-medium tracking-wide transition-colors"
                    >
                      {song.album}
                    </Link>
                    <span className="text-neutral-700 text-xs">·</span>
                    <span className="text-neutral-600 text-xs">{song.year}</span>
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
