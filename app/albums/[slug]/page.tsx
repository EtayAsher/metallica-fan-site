import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { albums } from "@/data/albums";
import { songs } from "@/data/songs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return albums.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const album = albums.find((a) => a.slug === slug);
  if (!album) return {};
  return { title: album.title, description: album.description };
}

export default async function AlbumDetailPage({ params }: Props) {
  const { slug } = await params;
  const album = albums.find((a) => a.slug === slug);
  if (!album) notFound();

  const albumIndex = albums.findIndex((a) => a.slug === slug);
  const albumSongs = songs.filter((s) => s.albumSlug === slug);
  const prevAlbum = albums[albumIndex - 1];
  const nextAlbum = albums[albumIndex + 1];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <Link
        href="/albums"
        className="inline-flex items-center gap-2 text-neutral-600 hover:text-yellow-400 text-xs tracking-[0.2em] uppercase font-medium mb-12 transition-colors"
      >
        <span>&#8592;</span> All Albums
      </Link>

      <div className="grid md:grid-cols-5 gap-8 mb-14">
        {/* Album art placeholder */}
        <div className="md:col-span-2">
          <div className="bg-neutral-950 border border-neutral-900 aspect-square flex flex-col items-center justify-center relative overflow-hidden">
            <div className="text-neutral-800 font-black text-7xl tabular-nums select-none absolute top-4 right-4">
              {String(albumIndex + 1).padStart(2, "0")}
            </div>
            <div className="text-center px-8 relative">
              <div className="text-yellow-500/40 text-[10px] tracking-[0.4em] uppercase mb-4">{album.year}</div>
              <div className="text-neutral-600 text-lg font-black uppercase tracking-wider leading-tight">{album.title}</div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-6 bg-yellow-500" />
            <span className="text-yellow-500 text-[10px] font-bold tracking-[0.35em] uppercase">{album.year}</span>
          </div>
          <h1 className="font-black text-white text-4xl md:text-5xl uppercase tracking-tight leading-none mb-6">
            {album.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {album.genre.map((g) => (
              <span key={g} className="border border-neutral-800 text-neutral-500 text-[10px] px-3 py-1 tracking-[0.2em] uppercase">
                {g}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs mb-8 p-4 bg-neutral-950 border border-neutral-900">
            <div>
              <div className="text-neutral-700 uppercase tracking-[0.3em] text-[10px] mb-1">Label</div>
              <div className="text-neutral-300">{album.label}</div>
            </div>
            <div>
              <div className="text-neutral-700 uppercase tracking-[0.3em] text-[10px] mb-1">Producer</div>
              <div className="text-neutral-300">{album.producer}</div>
            </div>
          </div>

          <p className="text-neutral-400 text-sm leading-relaxed">{album.longDescription}</p>
        </div>
      </div>

      {/* Tracklist */}
      <div className="bg-neutral-950 border border-neutral-900 p-6 mb-8">
        <div className="text-[10px] font-bold tracking-[0.35em] text-neutral-600 uppercase mb-6">Notable Tracks</div>
        <div className="space-y-px">
          {album.notableTracks.map((track, i) => {
            const songMatch = albumSongs.find((s) => s.title === track);
            return (
              <div key={track} className="flex items-center gap-4 py-3 border-b border-neutral-900 last:border-0 group/track">
                <span className="text-neutral-800 font-black font-mono text-xs w-6 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-neutral-300 text-sm flex-1 group-hover/track:text-yellow-400 transition-colors">{track}</span>
                {songMatch && (
                  <span className="text-neutral-700 text-xs font-mono">{songMatch.duration}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Prev / Next */}
      <div className="grid grid-cols-2 gap-3">
        {prevAlbum ? (
          <Link href={`/albums/${prevAlbum.slug}`} className="bg-neutral-950 border border-neutral-900 hover:border-yellow-500/40 p-5 transition-all group">
            <div className="text-neutral-700 text-[10px] uppercase tracking-[0.3em] mb-2">Previous</div>
            <div className="text-white text-sm font-black uppercase tracking-wide group-hover:text-yellow-400 transition-colors">{prevAlbum.title}</div>
            <div className="text-neutral-700 text-xs mt-0.5">{prevAlbum.year}</div>
          </Link>
        ) : <div />}
        {nextAlbum ? (
          <Link href={`/albums/${nextAlbum.slug}`} className="bg-neutral-950 border border-neutral-900 hover:border-yellow-500/40 p-5 transition-all text-right group">
            <div className="text-neutral-700 text-[10px] uppercase tracking-[0.3em] mb-2">Next</div>
            <div className="text-white text-sm font-black uppercase tracking-wide group-hover:text-yellow-400 transition-colors">{nextAlbum.title}</div>
            <div className="text-neutral-700 text-xs mt-0.5">{nextAlbum.year}</div>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
