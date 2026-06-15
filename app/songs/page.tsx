import type { Metadata } from "next";
import SongsClient from "@/components/SongsClient";
import { songs } from "@/data/songs";

export const metadata: Metadata = {
  title: "Songs",
  description: "Metallica's most iconic songs — search and filter by title or album.",
};

export default function SongsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="border-b border-neutral-800 pb-8 mb-10">
        <span className="inline-block text-red-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          Tracks
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-white">Songs</h1>
        <p className="text-neutral-400 mt-2 text-sm max-w-lg">
          Iconic tracks from across the Metallica catalog. Search by title or filter by album.
        </p>
      </div>
      <SongsClient songs={songs} />
    </div>
  );
}
