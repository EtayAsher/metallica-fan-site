import type { Metadata } from "next";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description: "The latest Metallica news — tours, releases, interviews, and announcements.",
};

const categoryColors: Record<string, string> = {
  Tour:        "bg-blue-500/20 text-blue-300 border border-blue-500/40",
  Music:       "bg-green-500/20 text-green-300 border border-green-500/40",
  Anniversary: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/40",
  Interview:   "bg-purple-500/20 text-purple-300 border border-purple-500/40",
  Award:       "bg-orange-500/20 text-orange-300 border border-orange-500/40",
};

export default function NewsPage() {
  return (
    <>
      {/* Yellow page header */}
      <section className="bg-yellow-400 border-b-4 border-black px-4 sm:px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-black" />
            <span className="text-black text-[10px] font-black tracking-[0.4em] uppercase">Latest</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tight">News</h1>
          <p className="text-black/60 mt-3 text-sm max-w-lg leading-relaxed font-medium">
            Fan-curated summaries of Metallica tours, releases, interviews, and milestones.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-4">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-[#1c1c1c] border border-neutral-700 hover:border-yellow-500 transition-all duration-200 p-6 md:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`text-[10px] px-2.5 py-0.5 font-bold tracking-[0.2em] uppercase ${categoryColors[item.category] ?? "text-neutral-400 border border-neutral-600"}`}>
                      {item.category}
                    </span>
                    <span className="text-neutral-400 text-[10px] tracking-wider">{item.date}</span>
                    <span className="text-neutral-500 text-[10px] tracking-wider">via {item.source}</span>
                  </div>
                  <h2 className="text-white font-black text-lg uppercase tracking-wide leading-tight mb-3">{item.title}</h2>
                  <p className="text-neutral-300 text-sm leading-relaxed">{item.summary}</p>
                </div>
                <div className="shrink-0">
                  <span className="border border-yellow-500/40 text-yellow-500 text-[10px] px-4 py-2 tracking-[0.2em] uppercase font-bold inline-block">
                    Fan Summary
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-neutral-600 text-xs mt-12 text-center">
          Fan site — summaries only, no copyrighted articles reproduced.
        </p>
      </div>
    </>
  );
}
