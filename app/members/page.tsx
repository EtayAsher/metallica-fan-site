import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { members } from "@/data/members";

export const metadata: Metadata = {
  title: "Band Members",
  description: "Current and former Metallica members.",
};

export default function MembersPage() {
  const current = members.filter((m) => m.status === "current");
  const former = members.filter((m) => m.status === "former");

  return (
    <>
      {/* Yellow page header */}
      <section className="bg-yellow-400 border-b-4 border-black px-4 sm:px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-black" />
            <span className="text-black text-[10px] font-black tracking-[0.4em] uppercase">The Band</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tight">Band Members</h1>
          <p className="text-black/60 mt-3 text-sm max-w-lg leading-relaxed font-medium">
            The musicians who shaped Metallica across four decades of heavy music.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Current members */}
        <section className="mb-20">
          <div className="text-[10px] font-black tracking-[0.4em] text-yellow-400 uppercase mb-8 flex items-center gap-4">
            <span>Current Lineup</span>
            <div className="flex-1 h-px bg-neutral-700" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {current.map((member) => (
              <Link key={member.slug} href={`/members/${member.slug}`} className="group block">
                <div className="bg-[#1c1c1c] border border-neutral-700 group-hover:border-yellow-500 transition-all duration-300 overflow-hidden">
                  <div className="relative h-64 md:h-72 overflow-hidden bg-neutral-800">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="font-black text-white text-base uppercase tracking-wide leading-tight group-hover:text-yellow-400 transition-colors">
                        {member.name}
                      </div>
                      <div className="text-neutral-400 text-[10px] tracking-[0.2em] uppercase mt-0.5">{member.role.split(",")[0]}</div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-neutral-700">
                    <div className="text-neutral-400 text-[10px] tracking-widest uppercase">{member.yearsActive}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Former members */}
        <section>
          <div className="text-[10px] font-black tracking-[0.4em] text-yellow-400 uppercase mb-8 flex items-center gap-4">
            <span>Former Members</span>
            <div className="flex-1 h-px bg-neutral-700" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {former.map((member) => (
              <Link key={member.slug} href={`/members/${member.slug}`} className="group block">
                <div className="bg-[#1c1c1c] border border-neutral-700 group-hover:border-yellow-500 transition-all duration-300 overflow-hidden flex gap-0">
                  <div className="relative w-24 shrink-0 overflow-hidden bg-neutral-800">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                      sizes="96px"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="font-black text-white text-sm uppercase tracking-wide group-hover:text-yellow-400 transition-colors leading-tight mb-0.5">
                      {member.name}
                    </div>
                    <div className="text-yellow-500 text-[10px] tracking-[0.15em] uppercase mb-2">{member.role.split(",")[0]}</div>
                    <div className="text-neutral-400 text-[10px] tracking-wider">{member.yearsActive}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
