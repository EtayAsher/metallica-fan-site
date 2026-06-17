"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import type { Album } from "@/data/albums";

interface Props {
  albums: Album[];
}

export default function AlbumRanking({ albums: initial }: Props) {
  const [list, setList] = useState<Album[]>([...initial]);
  const [dragging, setDragging] = useState<number | null>(null);
  const [over, setOver] = useState<number | null>(null);
  const dragIndex = useRef<number | null>(null);

  const onDragStart = (i: number) => {
    dragIndex.current = i;
    setDragging(i);
  };

  const onDragOver = (e: React.DragEvent, i: number) => {
    e.preventDefault();
    setOver(i);
  };

  const onDrop = (i: number) => {
    const from = dragIndex.current;
    if (from === null || from === i) return;
    const next = [...list];
    const [item] = next.splice(from, 1);
    next.splice(i, 0, item);
    setList(next);
    setDragging(null);
    setOver(null);
    dragIndex.current = null;
  };

  const onDragEnd = () => {
    setDragging(null);
    setOver(null);
    dragIndex.current = null;
  };

  const reset = () => setList([...initial]);

  const medalColor = (i: number) => {
    if (i === 0) return "text-yellow-400 border-yellow-400";
    if (i === 1) return "text-neutral-300 border-neutral-300";
    if (i === 2) return "text-orange-600 border-orange-600";
    return "text-neutral-600 border-neutral-700";
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-neutral-500 text-xs tracking-wider">Drag to reorder</p>
        <button
          onClick={reset}
          className="text-neutral-500 hover:text-yellow-400 text-xs tracking-[0.2em] uppercase transition-colors border border-neutral-700 hover:border-yellow-500 px-3 py-1.5"
        >
          Reset
        </button>
      </div>

      <div className="space-y-2">
        {list.map((album, i) => (
          <div
            key={album.slug}
            draggable
            onDragStart={() => onDragStart(i)}
            onDragOver={(e) => onDragOver(e, i)}
            onDrop={() => onDrop(i)}
            onDragEnd={onDragEnd}
            className={`flex items-center gap-4 p-4 border transition-all duration-150 cursor-grab active:cursor-grabbing select-none ${
              dragging === i
                ? "opacity-40 border-yellow-500/40 bg-[#1c1c1c]"
                : over === i && dragging !== i
                ? "border-yellow-500 bg-yellow-500/10 scale-[1.01]"
                : "border-neutral-700 bg-[#1c1c1c] hover:border-yellow-500/50"
            }`}
          >
            {/* Rank number */}
            <div className={`w-8 h-8 shrink-0 flex items-center justify-center border font-black text-sm tabular-nums ${medalColor(i)}`}>
              {i + 1}
            </div>

            {/* Drag handle */}
            <div className="text-neutral-700 shrink-0 hidden sm:flex flex-col gap-0.5">
              {[0,1,2].map(n => <div key={n} className="w-4 h-px bg-current" />)}
            </div>

            {/* Album cover */}
            {album.image ? (
              <div className="relative w-12 h-12 shrink-0 overflow-hidden bg-neutral-800">
                <Image src={album.image} alt={album.title} fill className="object-contain" sizes="48px" />
              </div>
            ) : (
              <div className="w-12 h-12 shrink-0 bg-neutral-800 flex items-center justify-center text-neutral-600 text-xs font-bold">
                {album.year}
              </div>
            )}

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="text-white font-black text-sm uppercase tracking-wide leading-tight truncate">{album.title}</div>
              <div className="text-neutral-500 text-[10px] tracking-wider">{album.year}</div>
            </div>

            {/* Position change indicator */}
            {i === 0 && <span className="text-yellow-400 text-[10px] font-black tracking-wider shrink-0">BEST</span>}
            {i === list.length - 1 && <span className="text-neutral-600 text-[10px] font-black tracking-wider shrink-0">WORST</span>}
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 bg-[#1c1c1c] border border-neutral-700">
        <div className="text-[10px] text-yellow-500 font-black tracking-[0.3em] uppercase mb-3">Your Top 3</div>
        <div className="flex gap-4">
          {list.slice(0, 3).map((a, i) => (
            <div key={a.slug} className="text-sm">
              <span className={`font-black ${i === 0 ? "text-yellow-400" : i === 1 ? "text-neutral-300" : "text-orange-600"}`}>
                {i + 1}.{" "}
              </span>
              <span className="text-neutral-300">{a.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
