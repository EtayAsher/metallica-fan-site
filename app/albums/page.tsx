import type { Metadata } from "next";
import Link from "next/link";
import { albums } from "@/data/albums";

export const metadata: Metadata = {
  title: "Albums",
  description: "The complete Metallica discography — from Kill 'Em All to 72 Seasons.",
};

export default function AlbumsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="border-b border-neutral-900 pb-10 mb-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-yellow-500" />
          <span className="text-yellow-500 text-[10px] font-bold tracking-[0.4em] uppercase">Discography</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Albums</h1>
        <p className="text-neutral-600 mt-3 text-sm max-w-lg leading-relaxed">
          Eleven studio albums spanning over four decades of relentless creative output.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {albums.map((album, index) => (
          <Link
            key={album.slug}
            href={`/albums/${album.slug}`}
            className="group block"
          >
            <div className="bg-neutral-950 border border-neutral-900 group-hover:border-yellow-500/40 transition-all duration-300 overflow-hidden flex flex-col">
              {/* Album art placeholder — styled premium */}
              <div className="bg-neutral-900 h-52 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 text-neutral-800 font-black text-4xl tabular-nums select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="text-center px-8 relative">
                  <div className="text-yellow-500/30 text-[10px] tracking-[0.4em] uppercase mb-3">{album.year}</div>
                  <div className="text-neutral-700 text-sm font-black uppercase tracking-wider leading-tight">{album.title}</div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="text-yellow-500 text-[10px] font-bold tracking-[0.3em] mb-2">{album.year}</div>
                <h2 className="font-black text-white text-base uppercase tracking-wide leading-tight group-hover:text-yellow-400 transition-colors mb-3">
                  {album.title}
                </h2>
                <p className="text-neutral-600 text-xs leading-relaxed mb-4 flex-1 line-clamp-2">{album.description}</p>

                <div className="flex flex-wrap gap-1 pt-3 border-t border-neutral-900">
                  {album.notableTracks.slice(0, 2).map((track) => (
                    <span key={track} className="border border-neutral-800 text-neutral-700 text-[10px] px-2 py-0.5 tracking-wide">
                      {track}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
