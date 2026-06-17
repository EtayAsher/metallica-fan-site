"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Album } from "@/data/albums";

const eras = [
  { label: "All", years: null },
  { label: "Thrash Era", years: [1983, 1988] },
  { label: "Mainstream", years: [1991, 1997] },
  { label: "Modern", years: [2003, 2023] },
];

interface Props {
  albums: Album[];
}

export default function AlbumsClient({ albums }: Props) {
  const [activeEra, setActiveEra] = useState("All");

  const filtered = albums.filter((a) => {
    if (activeEra === "All") return true;
    const era = eras.find((e) => e.label === activeEra);
    if (!era?.years) return true;
    return a.year >= era.years[0] && a.year <= era.years[1];
  });

  return (
    <>
      {/* Era filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {eras.map((era) => (
          <button
            key={era.label}
            onClick={() => setActiveEra(era.label)}
            className={`px-4 py-2 text-xs font-black tracking-[0.2em] uppercase transition-all border ${
              activeEra === era.label
                ? "bg-yellow-500 text-black border-yellow-500"
                : "bg-transparent text-neutral-400 border-neutral-700 hover:border-yellow-500 hover:text-yellow-400"
            }`}
          >
            {era.label}
            {era.years && (
              <span className={`ml-2 text-[10px] ${activeEra === era.label ? "text-black/60" : "text-neutral-600"}`}>
                {era.years[0]}–{era.years[1]}
              </span>
            )}
          </button>
        ))}
        <span className="ml-auto text-neutral-600 text-xs self-center tracking-wider">
          {filtered.length} album{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((album, index) => (
          <Link key={album.slug} href={`/albums/${album.slug}`} className="group block">
            <div className="bg-[#1c1c1c] border border-neutral-700 group-hover:border-yellow-500 transition-all duration-300 overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-neutral-800">
                {album.image ? (
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-neutral-700 font-black text-4xl tabular-nums">{String(index + 1).padStart(2, "0")}</div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <div className="text-yellow-500 text-[10px] font-bold tracking-[0.3em] mb-1">{album.year}</div>
                <h2 className="font-black text-white text-sm uppercase tracking-wide leading-tight group-hover:text-yellow-400 transition-colors">
                  {album.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
