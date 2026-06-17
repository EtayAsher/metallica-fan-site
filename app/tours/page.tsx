import type { Metadata } from "next";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Tours",
  description: "Complete Metallica tour history — from small clubs in 1983 to global stadium runs.",
};

export default function ToursPage() {
  return (
    <>
      <section className="bg-yellow-400 border-b-4 border-black px-4 sm:px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-black" />
            <span className="text-black text-[10px] font-black tracking-[0.4em] uppercase">Live History</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tight">Tours</h1>
          <p className="text-black/60 mt-3 text-sm max-w-lg leading-relaxed font-medium">
            From 42-show club runs to 300-date global stadium tours — the complete live history of Metallica.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-4">
          {tours.map((tour, i) => (
            <div
              key={i}
              className="bg-[#1c1c1c] border border-neutral-700 hover:border-yellow-500/60 transition-all duration-200 p-6 md:p-8 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-yellow-400 font-black text-sm tracking-widest">{tour.years}</span>
                    <span className="text-neutral-600 text-[10px] border border-neutral-700 px-2 py-0.5 uppercase tracking-wider">
                      {tour.albumSupport}
                    </span>
                  </div>
                  <h2 className="text-white font-black text-xl md:text-2xl uppercase tracking-wide group-hover:text-yellow-400 transition-colors">
                    {tour.name}
                  </h2>
                </div>
                <div className="flex gap-4 shrink-0">
                  <div className="text-center">
                    <div className="text-yellow-400 font-black text-2xl tabular-nums">{tour.shows}</div>
                    <div className="text-neutral-500 text-[10px] uppercase tracking-wider">Shows</div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 font-black text-2xl tabular-nums">{tour.countries}</div>
                    <div className="text-neutral-500 text-[10px] uppercase tracking-wider">Countries</div>
                  </div>
                </div>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed mb-5">{tour.description}</p>

              <div className="border-t border-neutral-800 pt-4">
                <div className="text-[10px] text-yellow-500 font-black tracking-[0.3em] uppercase mb-3">Highlights</div>
                <ul className="space-y-1.5">
                  {tour.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-neutral-400">
                      <span className="text-yellow-500 mt-1 shrink-0">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
