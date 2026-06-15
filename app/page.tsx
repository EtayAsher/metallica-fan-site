import type { Metadata } from "next";
import Link from "next/link";
import { albums } from "@/data/albums";
import { members } from "@/data/members";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Metallica Fan Site — Albums, Members, News & Trivia",
  description:
    "Your definitive fan resource for Metallica. Explore albums, band members, history, trivia, and the latest news.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-red-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
      {children}
    </span>
  );
}

export default function HomePage() {
  const featuredAlbums = albums.slice(0, 4);
  const currentMembers = members.filter((m) => m.status === "current");
  const latestNews = news.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0a0a] border-b border-neutral-800">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <SectionLabel>Est. 1981 — Los Angeles, CA</SectionLabel>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none mb-6 text-white">
              The World&apos;s
              <br />
              <span className="text-red-600">Greatest</span>
              <br />
              Metal Band
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Four decades. Eleven studio albums. A legacy that redefined what heavy music could be.
              Explore the complete story of Metallica — from the thrash origins to the stadium years.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/albums"
                className="bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 text-sm tracking-wide uppercase transition-colors"
              >
                Explore Albums
              </Link>
              <Link
                href="/trivia"
                className="border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-semibold px-6 py-3 text-sm tracking-wide uppercase transition-colors"
              >
                Take the Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-neutral-800 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800">
            {[
              { value: "1981", label: "Founded" },
              { value: "11", label: "Studio Albums" },
              { value: "125M+", label: "Records Sold" },
              { value: "40+", label: "Years Active" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 px-4 sm:px-8 text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-neutral-500 tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Albums */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <SectionLabel>Discography</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Landmark Albums</h2>
          </div>
          <Link href="/albums" className="text-red-600 hover:text-red-500 text-sm font-medium tracking-wide transition-colors shrink-0 ml-4">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredAlbums.map((album) => (
            <Link
              key={album.slug}
              href={`/albums/${album.slug}`}
              className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-600 p-5 transition-all duration-200"
            >
              <div className="bg-neutral-800 h-40 mb-4 flex items-center justify-center text-neutral-600 text-xs tracking-widest uppercase font-medium group-hover:bg-neutral-700 transition-colors">
                Album Art
              </div>
              <div className="text-red-600 text-xs font-semibold tracking-widest mb-1">{album.year}</div>
              <h3 className="font-bold text-white text-base leading-snug group-hover:text-red-400 transition-colors mb-2">
                {album.title}
              </h3>
              <p className="text-neutral-500 text-xs line-clamp-2 leading-relaxed">{album.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Band Members */}
      <section className="border-t border-neutral-800 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <SectionLabel>The Band</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Current Lineup</h2>
            </div>
            <Link href="/members" className="text-red-600 hover:text-red-500 text-sm font-medium tracking-wide transition-colors shrink-0 ml-4">
              All Members
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentMembers.map((member) => (
              <Link
                key={member.slug}
                href={`/members/${member.slug}`}
                className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-600 p-5 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-neutral-800 rounded-full mb-4 flex items-center justify-center text-neutral-500 text-sm font-bold group-hover:bg-red-900/30 transition-colors">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="font-bold text-white text-sm group-hover:text-red-400 transition-colors mb-0.5">
                  {member.name}
                </div>
                <div className="text-neutral-500 text-xs leading-relaxed">{member.role.split(",")[0]}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <SectionLabel>Latest</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-white">News & Updates</h2>
          </div>
          <Link href="/news" className="text-red-600 hover:text-red-500 text-sm font-medium tracking-wide transition-colors shrink-0 ml-4">
            All News
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {latestNews.map((item) => (
            <article
              key={item.id}
              className="bg-neutral-900 border border-neutral-800 hover:border-neutral-600 p-5 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-700 border border-red-900/50 text-xs px-2 py-0.5 font-medium tracking-wide">
                  {item.category}
                </span>
                <span className="text-neutral-600 text-xs">{item.date}</span>
              </div>
              <h3 className="font-bold text-white text-sm leading-snug mb-2">{item.title}</h3>
              <p className="text-neutral-500 text-xs line-clamp-3 leading-relaxed">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Trivia CTA */}
      <section className="border-t border-neutral-800 bg-gradient-to-b from-red-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <SectionLabel>Test Your Knowledge</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Think You Know Metallica?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            22 questions. Easy, Medium, and Hard difficulty. See how deep your Metallica knowledge really goes.
          </p>
          <Link
            href="/trivia"
            className="inline-block bg-red-700 hover:bg-red-600 text-white font-semibold px-8 py-3 text-sm tracking-wide uppercase transition-colors"
          >
            Start the Quiz
          </Link>
        </div>
      </section>
    </>
  );
}
