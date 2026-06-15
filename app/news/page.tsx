import type { Metadata } from "next";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description: "The latest Metallica news — tours, releases, interviews, and announcements.",
};

const categoryColors: Record<string, string> = {
  Tour: "text-blue-400 border-blue-900/50",
  Music: "text-green-400 border-green-900/50",
  Anniversary: "text-yellow-500 border-yellow-900/50",
  Interview: "text-purple-400 border-purple-900/50",
  Award: "text-orange-400 border-orange-900/50",
};

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Page header */}
      <div className="border-b border-neutral-800 pb-8 mb-10">
        <span className="inline-block text-red-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          Latest
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-white">News & Updates</h1>
        <p className="text-neutral-400 mt-2 text-sm max-w-lg">
          Fan-curated coverage of Metallica tours, releases, interviews, and milestones. Summaries only — no copied articles.
        </p>
      </div>

      {/* News feed */}
      <div className="space-y-4">
        {news.map((item) => (
          <article
            key={item.id}
            className="bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 p-6 md:p-7"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className={`border text-xs px-2 py-0.5 font-medium tracking-wide ${
                      categoryColors[item.category] ?? "text-neutral-400 border-neutral-700"
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="text-neutral-600 text-xs">{item.date}</span>
                  <span className="text-neutral-700 text-xs">via {item.source}</span>
                </div>
                <h2 className="text-white font-bold text-lg leading-snug mb-3">{item.title}</h2>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.summary}</p>
              </div>
              <div className="shrink-0">
                <button
                  disabled
                  className="border border-neutral-700 text-neutral-500 text-xs px-4 py-2 tracking-wide uppercase font-medium cursor-not-allowed"
                  title="External source — fan site only"
                >
                  Read More
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="text-neutral-700 text-xs mt-10 text-center leading-relaxed">
        This is a fan site. News summaries are written by fans for informational purposes and do not reproduce copyrighted articles.
      </p>
    </div>
  );
}
