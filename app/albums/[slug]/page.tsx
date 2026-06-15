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
  return {
    title: album.title,
    description: album.description,
  };
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/albums"
        className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-200 text-sm mb-10 transition-colors"
      >
        <span>&#8592;</span> All Albums
      </Link>

      {/* Album header */}
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <div className="md:col-span-1">
          <div className="bg-neutral-900 border border-neutral-800 aspect-square flex items-center justify-center text-neutral-600 text-xs tracking-widest uppercase font-medium">
            Album Art
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-red-600 text-xs font-semibold tracking-[0.25em] uppercase mb-2">{album.year}</div>
          <h1 className="font-black text-white text-3xl md:text-4xl leading-tight mb-3">{album.title}</h1>

          <div className="flex flex-wrap gap-2 mb-5">
            {album.genre.map((g) => (
              <span key={g} className="border border-neutral-700 text-neutral-400 text-xs px-2.5 py-1">
                {g}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs mb-6">
            <div>
              <div className="text-neutral-600 uppercase tracking-widest mb-0.5">Label</div>
              <div className="text-neutral-300">{album.label}</div>
            </div>
            <div>
              <div className="text-neutral-600 uppercase tracking-widest mb-0.5">Producer</div>
              <div className="text-neutral-300">{album.producer}</div>
            </div>
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed">{album.longDescription}</p>
        </div>
      </div>

      {/* Notable tracks */}
      <div className="bg-neutral-900 border border-neutral-800 p-6 mb-8">
        <h2 className="text-xs font-semibold tracking-[0.25em] text-neutral-500 uppercase mb-4">Notable Tracks</h2>
        <div className="space-y-2">
          {album.notableTracks.map((track, i) => {
            const songMatch = albumSongs.find((s) => s.title === track);
            return (
              <div key={track} className="flex items-center gap-3 py-2 border-b border-neutral-800 last:border-0">
                <span className="text-neutral-700 font-mono text-xs w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                {songMatch ? (
                  <Link
                    href={`/songs`}
                    className="text-neutral-200 hover:text-red-400 text-sm transition-colors"
                  >
                    {track}
                  </Link>
                ) : (
                  <span className="text-neutral-300 text-sm">{track}</span>
                )}
                {songMatch && (
                  <span className="ml-auto text-neutral-600 text-xs font-mono">{songMatch.duration}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div className="grid grid-cols-2 gap-4">
        {prevAlbum ? (
          <Link
            href={`/albums/${prevAlbum.slug}`}
            className="bg-neutral-900 border border-neutral-800 hover:border-neutral-600 p-4 transition-all"
          >
            <div className="text-neutral-600 text-xs uppercase tracking-widest mb-1">Previous</div>
            <div className="text-white text-sm font-bold">{prevAlbum.title}</div>
            <div className="text-neutral-500 text-xs">{prevAlbum.year}</div>
          </Link>
        ) : (
          <div />
        )}
        {nextAlbum ? (
          <Link
            href={`/albums/${nextAlbum.slug}`}
            className="bg-neutral-900 border border-neutral-800 hover:border-neutral-600 p-4 transition-all text-right"
          >
            <div className="text-neutral-600 text-xs uppercase tracking-widest mb-1">Next</div>
            <div className="text-white text-sm font-bold">{nextAlbum.title}</div>
            <div className="text-neutral-500 text-xs">{nextAlbum.year}</div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
