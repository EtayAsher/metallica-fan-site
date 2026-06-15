import type { Metadata } from "next";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description: "The latest Metallica news — tours, releases, interviews, and announcements.",
};

const categoryColors: Record<string, string> = {
  Tour: "text-blue-400 border-blue-900/60",
  Music: "text-green-400 border-green-900/60",
  Anniversary: "text-yellow-400 border-yellow-700/60",
  Interview: "text-purple-400 border-purple-900/60",
  Award: "text-orange-400 border-orange-900/60",
};

export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="border-b border-neutral-900 pb-10 mb-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-yellow-500" />
          <span className="text-yellow-500 text-[10px] font-bold tracking-[0.4em] uppercase">Latest</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">News</h1>
        <p className="text-neutral-600 mt-3 text-sm max-w-lg leading-relaxed">
          Fan-curated summaries of Metallica tours, releases, interviews, and milestones.
        </p>
      </div>

      <div className="space-y-3">
        {news.map((item) => (
          <article
            key={item.id}
            className="bg-neutral-950 border border-neutral-900 hover:border-yellow-500/30 transition-all duration-200 p-6 md:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`border text-[10px] px-2.5 py-0.5 font-bold tracking-[0.2em] uppercase ${categoryColors[item.category] ?? "text-neutral-500 border-neutral-700"}`}>
                    {item.category}
                  </span>
                  <span className="text-neutral-700 text-[10px] tracking-wider">{item.date}</span>
                  <span className="text-neutral-800 text-[10px] tracking-wider">via {item.source}</span>
                </div>
                <h2 className="text-white font-black text-lg uppercase tracking-wide leading-tight mb-3">{item.title}</h2>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.summary}</p>
              </div>
              <div className="shrink-0">
                <span className="border border-neutral-800 text-neutral-700 text-[10px] px-4 py-2 tracking-[0.2em] uppercase font-medium inline-block">
                  Fan Summary
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="text-neutral-800 text-xs mt-12 text-center">
        Fan site — summaries only, no copyrighted articles reproduced.
      </p>
    </div>
  );
}
