import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {albums.map((album, index) => (
          <Link key={album.slug} href={`/albums/${album.slug}`} className="group block">
            <div className="bg-neutral-950 border border-neutral-900 group-hover:border-yellow-500/40 transition-all duration-300 overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-neutral-900">
                {album.image ? (
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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
    </div>
  );
}
