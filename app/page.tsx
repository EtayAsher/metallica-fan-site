import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { albums } from "@/data/albums";
import { members } from "@/data/members";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Metallica Fan Site — Albums, Members, News & Trivia",
  description:
    "Your definitive fan resource for Metallica. Explore albums, band members, history, trivia, and the latest news.",
};

export default function HomePage() {
  const featuredAlbums = albums.slice(0, 4);
  const currentMembers = members.filter((m) => m.status === "current");
  const latestNews = news.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#080808] border-b border-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(202,138,4,0.08)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-40">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-yellow-500" />
              <span className="text-yellow-500 text-[10px] font-bold tracking-[0.4em] uppercase">
                Est. 1981 — Los Angeles, California
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-8 text-white uppercase">
              Metal<br />
              <span className="text-yellow-400">lica</span>
            </h1>
            <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-lg mb-12 font-light">
              Four decades. Eleven studio albums. A legacy that defined heavy music.
              The complete fan resource for everything Metallica.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/albums"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-colors duration-150"
              >
                Discography
              </Link>
              <Link
                href="/members"
                className="border border-neutral-700 hover:border-yellow-500 text-neutral-400 hover:text-yellow-400 font-medium px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-150"
              >
                The Band
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
      </section>

      {/* Stats */}
      <section className="bg-[#080808] border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "1981", label: "Founded" },
              { value: "11", label: "Studio Albums" },
              { value: "125M+", label: "Records Sold" },
              { value: "40+", label: "Years Active" },
            ].map((stat, i) => (
              <div key={stat.label} className={`py-8 px-6 text-center ${i < 3 ? "border-r border-neutral-900" : ""}`}>
                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1 tabular-nums">{stat.value}</div>
                <div className="text-[10px] text-neutral-600 tracking-[0.3em] uppercase">{stat.label}</div>
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
          <Link href="/albums" className="text-neutral-600 hover:text-yellow-400 text-xs tracking-[0.2em] uppercase font-medium transition-colors shrink-0 ml-4">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {featuredAlbums.map((album) => (
            <Link
              key={album.slug}
              href={`/albums/${album.slug}`}
              className="group block"
            >
              <div className="bg-neutral-950 border border-neutral-900 group-hover:border-yellow-500/40 transition-all duration-300 overflow-hidden">
                <div className="bg-neutral-900 h-44 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="text-center px-4">
                    <div className="text-yellow-500/40 text-[10px] tracking-widest uppercase mb-2">{album.year}</div>
                    <div className="text-neutral-600 text-xs font-bold uppercase tracking-wider leading-tight">{album.title}</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-yellow-500 text-[10px] font-bold tracking-[0.3em] mb-1">{album.year}</div>
                  <h3 className="font-black text-white text-sm leading-tight group-hover:text-yellow-400 transition-colors uppercase tracking-wide">
                    {album.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Band Members */}
      <section className="border-t border-neutral-900 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-yellow-500" />
                <span className="text-yellow-500 text-[10px] font-bold tracking-[0.35em] uppercase">Current Lineup</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">The Band</h2>
            </div>
            <Link href="/members" className="text-neutral-600 hover:text-yellow-400 text-xs tracking-[0.2em] uppercase font-medium transition-colors shrink-0 ml-4">
              All Members
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {currentMembers.map((member) => (
              <Link
                key={member.slug}
                href={`/members/${member.slug}`}
                className="group block"
              >
                <div className="bg-neutral-950 border border-neutral-900 group-hover:border-yellow-500/40 transition-all duration-300 overflow-hidden">
                  <div className="relative h-56 overflow-hidden bg-neutral-900">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="font-black text-white text-sm uppercase tracking-wide group-hover:text-yellow-400 transition-colors leading-tight">
                      {member.name}
                    </div>
                    <div className="text-neutral-600 text-[10px] tracking-[0.15em] uppercase mt-1">{member.role.split(",")[0]}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-6 bg-yellow-500" />
              <span className="text-yellow-500 text-[10px] font-bold tracking-[0.35em] uppercase">Latest</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">News</h2>
          </div>
          <Link href="/news" className="text-neutral-600 hover:text-yellow-400 text-xs tracking-[0.2em] uppercase font-medium transition-colors shrink-0 ml-4">
            All News
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {latestNews.map((item) => (
            <article
              key={item.id}
              className="bg-neutral-950 border border-neutral-900 hover:border-yellow-500/30 p-6 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-yellow-500 border border-yellow-500/30 text-[10px] px-2 py-0.5 font-bold tracking-[0.2em] uppercase">
                  {item.category}
                </span>
                <span className="text-neutral-700 text-[10px] tracking-wider">{item.date}</span>
              </div>
              <h3 className="font-bold text-white text-sm leading-snug mb-3 tracking-wide">{item.title}</h3>
              <p className="text-neutral-600 text-xs line-clamp-3 leading-relaxed">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Trivia CTA */}
      <section className="border-t border-neutral-900 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-yellow-500/40" />
            <span className="text-yellow-500 text-[10px] font-bold tracking-[0.4em] uppercase">Quiz</span>
            <div className="h-px w-12 bg-yellow-500/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Test Your Knowledge
          </h2>
          <p className="text-neutral-600 mb-10 max-w-sm mx-auto text-sm leading-relaxed">
            22 questions. Easy to Hard. How deep does your Metallica knowledge go?
          </p>
          <Link
            href="/trivia"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 text-xs tracking-[0.2em] uppercase transition-colors duration-150"
          >
            Start the Quiz
          </Link>
        </div>
      </section>
    </>
  );
}
