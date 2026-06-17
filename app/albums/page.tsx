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
    <>
      <section className="bg-yellow-400 border-b-4 border-black px-4 sm:px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-black" />
            <span className="text-black text-[10px] font-black tracking-[0.4em] uppercase">Discography</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tight">Albums</h1>
          <p className="text-black/60 mt-3 text-sm max-w-lg leading-relaxed font-medium">
            Eleven studio albums spanning over four decades of relentless creative output.
          </p>
        </div>
      </section>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {albums.map((album, index) => (
          <Link key={album.slug} href={`/albums/${album.slug}`} className="group block">
            <div className="bg-[#1c1c1c] border border-neutral-700 group-hover:border-yellow-500/60 transition-all duration-300 overflow-hidden">
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
    </div>
    </>
  );
}
