import type { Metadata } from "next";
import SongsClient from "@/components/SongsClient";
import { songs } from "@/data/songs";

export const metadata: Metadata = {
  title: "Songs",
  description: "Metallica's most iconic songs — search and filter by title or album.",
};

export default function SongsPage() {
  return (
    <>
      <section className="bg-yellow-400 border-b-4 border-black px-4 sm:px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-black" />
            <span className="text-black text-[10px] font-black tracking-[0.4em] uppercase">Tracks</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tight">Songs</h1>
          <p className="text-black/60 mt-3 text-sm max-w-lg leading-relaxed font-medium">
            Iconic tracks from across the Metallica catalog. Search by title or filter by album.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <SongsClient songs={songs} />
      </div>
    </>
  );
}
