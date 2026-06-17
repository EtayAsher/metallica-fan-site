import type { Metadata } from "next";
import AlbumRanking from "@/components/AlbumRanking";
import { albums } from "@/data/albums";

export const metadata: Metadata = {
  title: "Rank the Albums",
  description: "Drag and drop to rank every Metallica studio album.",
};

export default function RankPage() {
  return (
    <>
      <section className="bg-yellow-400 border-b-4 border-black px-4 sm:px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-black" />
            <span className="text-black text-[10px] font-black tracking-[0.4em] uppercase">Your Opinion</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tight">Rank the Albums</h1>
          <p className="text-black/60 mt-3 text-sm max-w-lg leading-relaxed font-medium">
            Drag and drop to arrange all 11 studio albums from best to worst. Your ranking is saved automatically.
          </p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <AlbumRanking albums={albums} />
      </div>
    </>
  );
}
