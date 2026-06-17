import type { Metadata } from "next";
import { albums } from "@/data/albums";
import AlbumsClient from "@/components/AlbumsClient";

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
        <AlbumsClient albums={albums} />
      </div>
    </>
  );
}
