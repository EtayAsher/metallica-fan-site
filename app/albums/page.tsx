import type { Metadata } from "next";
import Link from "next/link";
import { albums } from "@/data/albums";

export const metadata: Metadata = {
  title: "Albums",
  description: "The complete Metallica discography — from Kill 'Em All to 72 Seasons.",
};

export default function AlbumsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="border-b border-neutral-800 pb-8 mb-10">
        <span className="inline-block text-red-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          Discography
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-white">Albums</h1>
        <p className="text-neutral-400 mt-2 text-sm max-w-lg">
          Eleven studio albums spanning over four decades of relentless creative output.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {albums.map((album, index) => (
          <Link
            key={album.slug}
            href={`/albums/${album.slug}`}
            className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 flex flex-col"
          >
            {/* Album art placeholder */}
            <div className="bg-neutral-800 h-48 sm:h-52 flex items-center justify-center relative overflow-hidden group-hover:bg-neutral-750 transition-colors">
              <div className="absolute top-3 left-3 bg-neutral-900/80 text-neutral-500 text-xs px-2 py-1 font-mono">
                {String(index + 1).padStart(2, "0")}
              </div>
              <span className="text-neutral-600 text-xs tracking-widest uppercase font-medium">Album Art</span>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="text-red-600 text-xs font-semibold tracking-widest mb-1">{album.year}</div>
              <h2 className="font-black text-white text-lg leading-snug group-hover:text-red-400 transition-colors mb-2">
                {album.title}
              </h2>
              <p className="text-neutral-400 text-xs leading-relaxed mb-4 flex-1">{album.description}</p>

              {/* Notable tracks preview */}
              <div>
                <div className="text-neutral-600 text-xs tracking-widest uppercase mb-2">Notable Tracks</div>
                <div className="flex flex-wrap gap-1">
                  {album.notableTracks.slice(0, 3).map((track) => (
                    <span
                      key={track}
                      className="border border-neutral-700 text-neutral-500 text-xs px-2 py-0.5"
                    >
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
