import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { albums } from "@/data/albums";
import { members } from "@/data/members";
import { news } from "@/data/news";
import { quotes } from "@/data/quotes";
import { tours } from "@/data/tours";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Metallica Fan Site — Albums, Members, News & Trivia",
  description:
    "Your definitive fan resource for Metallica. Explore albums, band members, history, trivia, and the latest news.",
};

export default function HomePage() {
  const featuredAlbums = albums.slice(0, 4);
  const currentMembers = members.filter((m) => m.status === "current");
  const latestNews = news.slice(0, 3);
  const featuredQuote = quotes[0];
  const latestTour = tours[tours.length - 1];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-yellow-400 border-b-4 border-black">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,rgba(0,0,0,0.03)_40px,rgba(0,0,0,0.03)_80px)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-44">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-black" />
              <span className="text-black text-[10px] font-black tracking-[0.4em] uppercase">
                Est. 1981 — Los Angeles, California
              </span>
            </div>
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight leading-none mb-8 uppercase text-black">
              Metallica
            </h1>
            <p className="text-black/70 text-base md:text-xl leading-relaxed max-w-xl mb-12 font-medium">
              Four decades. Eleven studio albums. A legacy that defined heavy music.
              The complete fan resource for everything Metallica.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/albums" className="bg-black hover:bg-neutral-800 text-yellow-400 font-black px-10 py-4 text-xs tracking-[0.2em] uppercase transition-colors duration-150">
                Discography
              </Link>
              <Link href="/members" className="border-2 border-black text-black hover:bg-black hover:text-yellow-400 font-black px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-150">
                The Band
              </Link>
              <Link href="/trivia" className="border-2 border-black/40 text-black/70 hover:border-black hover:text-black font-black px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-150">
                Take the Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="bg-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { end: 1981, suffix: "", label: "Founded" },
              { end: 11, suffix: "", label: "Studio Albums" },
              { end: 125, suffix: "M+", label: "Records Sold" },
              { end: 40, suffix: "+", label: "Years Active" },
            ].map((stat, i) => (
              <div key={stat.label} className={`py-10 px-6 text-center ${i < 3 ? "border-r border-neutral-800" : ""}`}>
                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1 tabular-nums">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] text-neutral-500 tracking-[0.3em] uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Albums */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-6 bg-yellow-500" />
              <span className="text-yellow-500 text-[10px] font-bold tracking-[0.35em] uppercase">Discography</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Albums</h2>
          </div>
          <Link href="/albums" className="text-neutral-500 hover:text-yellow-400 text-xs tracking-[0.2em] uppercase font-bold transition-colors shrink-0 ml-4">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {featuredAlbums.map((album) => (
            <Link key={album.slug} href={`/albums/${album.slug}`} className="group block">
              <div className="bg-[#1c1c1c] border border-neutral-700 group-hover:border-yellow-500 transition-all duration-300 overflow-hidden">
                <div className="relative h-44 overflow-hidden bg-neutral-800">
                  {album.image ? (
                    <Image src={album.image} alt={album.title} fill className="object-contain group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 25vw" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-neutral-600 text-xs font-bold uppercase tracking-wider">{album.title}</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-yellow-500 text-[10px] font-bold tracking-[0.3em] mb-1">{album.year}</div>
                  <h3 className="font-black text-white text-sm leading-tight group-hover:text-yellow-400 transition-colors uppercase tracking-wide">{album.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Quote */}
      <section className="bg-yellow-400 border-y-4 border-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-black/20 text-8xl font-black leading-none mb-4">&ldquo;</div>
          <blockquote className="text-black text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight mb-6">
            {featuredQuote.text}
          </blockquote>
          <div className="text-black/60 font-bold text-sm tracking-widest uppercase">— {featuredQuote.author}</div>
          <div className="mt-6">
            <Link href="/quotes" className="border-2 border-black text-black hover:bg-black hover:text-yellow-400 font-black px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-150 inline-block">
              More Quotes
            </Link>
          </div>
        </div>
      </section>

      {/* Band Members */}
      <section className="bg-[#1a1a1a] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-yellow-500" />
                <span className="text-yellow-400 text-[10px] font-bold tracking-[0.35em] uppercase">Current Lineup</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">The Band</h2>
            </div>
            <Link href="/members" className="text-neutral-500 hover:text-yellow-400 text-xs tracking-[0.2em] uppercase font-bold transition-colors shrink-0 ml-4">
              All Members →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentMembers.map((member) => (
              <Link key={member.slug} href={`/members/${member.slug}`} className="group block">
                <div className="bg-[#222] border border-neutral-700 group-hover:border-yellow-500 transition-all duration-300 overflow-hidden">
                  <div className="relative h-56 overflow-hidden bg-neutral-800">
                    <Image src={member.image} alt={member.name} fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="font-black text-white text-sm uppercase tracking-wide group-hover:text-yellow-400 transition-colors leading-tight">{member.name}</div>
                    <div className="text-neutral-400 text-[10px] tracking-[0.15em] uppercase mt-1">{member.role.split(",")[0]}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Tour */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-6 bg-yellow-500" />
              <span className="text-yellow-500 text-[10px] font-bold tracking-[0.35em] uppercase">Live</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Latest Tour</h2>
          </div>
          <Link href="/tours" className="text-neutral-500 hover:text-yellow-400 text-xs tracking-[0.2em] uppercase font-bold transition-colors shrink-0 ml-4">
            All Tours →
          </Link>
        </div>
        <div className="bg-[#1c1c1c] border border-neutral-700 hover:border-yellow-500/60 transition-all p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-yellow-400 font-black text-sm tracking-widest">{latestTour.years}</span>
                <span className="text-neutral-600 text-[10px] border border-neutral-700 px-2 py-0.5 uppercase tracking-wider">{latestTour.albumSupport}</span>
              </div>
              <h3 className="text-white font-black text-2xl md:text-3xl uppercase tracking-wide mb-4">{latestTour.name}</h3>
              <p className="text-neutral-300 text-sm leading-relaxed max-w-2xl">{latestTour.description}</p>
            </div>
            <div className="flex gap-8 shrink-0">
              <div className="text-center">
                <div className="text-yellow-400 font-black text-4xl tabular-nums">{latestTour.shows}</div>
                <div className="text-neutral-500 text-[10px] uppercase tracking-wider mt-1">Shows</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-black text-4xl tabular-nums">{latestTour.countries}</div>
                <div className="text-neutral-500 text-[10px] uppercase tracking-wider mt-1">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-[#1a1a1a] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-yellow-500" />
                <span className="text-yellow-500 text-[10px] font-bold tracking-[0.35em] uppercase">Latest</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">News</h2>
            </div>
            <Link href="/news" className="text-neutral-500 hover:text-yellow-400 text-xs tracking-[0.2em] uppercase font-bold transition-colors shrink-0 ml-4">
              All News →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {latestNews.map((item) => (
              <article key={item.id} className="bg-[#222] border border-neutral-700 hover:border-yellow-500/50 p-6 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-yellow-500 border border-yellow-500/40 text-[10px] px-2 py-0.5 font-bold tracking-[0.2em] uppercase">{item.category}</span>
                  <span className="text-neutral-600 text-[10px] tracking-wider">{item.date}</span>
                </div>
                <h3 className="font-bold text-white text-sm leading-snug mb-3 tracking-wide">{item.title}</h3>
                <p className="text-neutral-400 text-xs line-clamp-3 leading-relaxed">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-yellow-500/40" />
              <span className="text-yellow-500 text-[10px] font-bold tracking-[0.4em] uppercase">Explore</span>
              <div className="h-px w-12 bg-yellow-500/40" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">More to Discover</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/gear", label: "Gear", desc: "Guitars, amps & effects" },
              { href: "/quotes", label: "Quotes", desc: "In their own words" },
              { href: "/tours", label: "Tours", desc: "Complete live history" },
              { href: "/trivia", label: "Trivia", desc: "22 questions, 3 levels" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group bg-[#1c1c1c] border border-neutral-700 hover:border-yellow-500 hover:bg-yellow-500 transition-all duration-200 p-6 text-center">
                <div className="font-black text-white group-hover:text-black text-lg uppercase tracking-wide mb-2 transition-colors">{item.label}</div>
                <div className="text-neutral-500 group-hover:text-black/60 text-xs transition-colors">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trivia CTA */}
      <section className="bg-yellow-400 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-4">
            Test Your Knowledge
          </h2>
          <p className="text-black/60 mb-10 max-w-sm mx-auto text-sm leading-relaxed font-medium">
            22 questions. Easy to Hard. How deep does your Metallica knowledge go?
          </p>
          <Link href="/trivia" className="inline-block bg-black hover:bg-neutral-800 text-yellow-400 font-black px-12 py-4 text-sm tracking-[0.2em] uppercase transition-colors duration-150">
            Start the Quiz
          </Link>
        </div>
      </section>
    </>
  );
}
