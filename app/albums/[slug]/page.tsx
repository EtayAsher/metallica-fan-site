import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
        {/* Album cover */}
        <div className="md:col-span-2">
          <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-neutral-900">
            {album.image ? (
              <Image
                src={album.image}
                alt={album.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-neutral-700 font-black text-6xl tabular-nums">
                  {String(albumIndex + 1).padStart(2, "0")}
                </div>
              </div>
            )}
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
          <Link href={`/albums/${prevAlbum.slug}`} className="bg-neutral-950 border border-neutral-900 hover:border-yellow-500/40 p-5 transition-all group flex items-center gap-4">
            {prevAlbum.image && (
              <div className="relative w-12 h-12 shrink-0 overflow-hidden">
                <Image src={prevAlbum.image} alt={prevAlbum.title} fill className="object-cover" sizes="48px" />
              </div>
            )}
            <div>
              <div className="text-neutral-700 text-[10px] uppercase tracking-[0.3em] mb-1">Previous</div>
              <div className="text-white text-sm font-black uppercase tracking-wide group-hover:text-yellow-400 transition-colors">{prevAlbum.title}</div>
            </div>
          </Link>
        ) : <div />}
        {nextAlbum ? (
          <Link href={`/albums/${nextAlbum.slug}`} className="bg-neutral-950 border border-neutral-900 hover:border-yellow-500/40 p-5 transition-all text-right group flex items-center justify-end gap-4">
            <div>
              <div className="text-neutral-700 text-[10px] uppercase tracking-[0.3em] mb-1">Next</div>
              <div className="text-white text-sm font-black uppercase tracking-wide group-hover:text-yellow-400 transition-colors">{nextAlbum.title}</div>
            </div>
            {nextAlbum.image && (
              <div className="relative w-12 h-12 shrink-0 overflow-hidden">
                <Image src={nextAlbum.image} alt={nextAlbum.title} fill className="object-cover" sizes="48px" />
              </div>
            )}
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
