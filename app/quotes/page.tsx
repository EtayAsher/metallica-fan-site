import type { Metadata } from "next";
import { quotes } from "@/data/quotes";

export const metadata: Metadata = {
  title: "Quotes",
  description: "Famous quotes from James Hetfield, Lars Ulrich, Kirk Hammett, and Robert Trujillo.",
};

const authorColors: Record<string, string> = {
  "James Hetfield": "text-yellow-400",
  "Lars Ulrich": "text-blue-400",
  "Kirk Hammett": "text-green-400",
  "Robert Trujillo": "text-orange-400",
};

export default function QuotesPage() {
  return (
    <>
      <section className="bg-yellow-400 border-b-4 border-black px-4 sm:px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-black" />
            <span className="text-black text-[10px] font-black tracking-[0.4em] uppercase">Words</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tight">Quotes</h1>
          <p className="text-black/60 mt-3 text-sm max-w-lg leading-relaxed font-medium">
            In their own words — the most memorable things said by the members of Metallica.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-10 pb-8 border-b border-neutral-800">
          {Object.entries(authorColors).map(([name, color]) => (
            <div key={name} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full bg-current ${color}`} />
              <span className="text-neutral-400 text-xs">{name}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {quotes.map((quote, i) => (
            <div
              key={i}
              className="bg-[#1c1c1c] border border-neutral-700 hover:border-yellow-500/50 transition-all p-6 flex flex-col"
            >
              <div className="text-yellow-500/30 text-5xl font-black leading-none mb-3">&ldquo;</div>
              <p className="text-neutral-200 text-sm leading-relaxed flex-1 mb-5 italic">
                {quote.text}
              </p>
              {quote.context && (
                <p className="text-neutral-600 text-xs leading-relaxed mb-3 border-l-2 border-neutral-700 pl-3">
                  {quote.context}
                </p>
              )}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-800">
                <span className={`font-black text-xs uppercase tracking-wider ${authorColors[quote.author] ?? "text-neutral-400"}`}>
                  {quote.author}
                </span>
                {quote.year && (
                  <span className="text-neutral-600 text-[10px] tracking-wider">{quote.year}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
