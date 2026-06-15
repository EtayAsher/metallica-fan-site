import type { Metadata } from "next";
import Link from "next/link";
import { members } from "@/data/members";

export const metadata: Metadata = {
  title: "Band Members",
  description: "Current and former Metallica members — James Hetfield, Lars Ulrich, Kirk Hammett, Robert Trujillo, Cliff Burton, Jason Newsted, and Dave Mustaine.",
};

export default function MembersPage() {
  const current = members.filter((m) => m.status === "current");
  const former = members.filter((m) => m.status === "former");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="border-b border-neutral-800 pb-8 mb-10">
        <span className="inline-block text-red-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          The Band
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-white">Band Members</h1>
        <p className="text-neutral-400 mt-2 text-sm max-w-lg">
          Current lineup and the musicians who shaped Metallica across more than four decades.
        </p>
      </div>

      {/* Current members */}
      <section className="mb-14">
        <h2 className="text-xs font-semibold tracking-[0.25em] text-neutral-500 uppercase mb-6">Current Lineup</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {current.map((member) => (
            <Link
              key={member.slug}
              href={`/members/${member.slug}`}
              className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-600 p-6 transition-all duration-200"
            >
              <div className="w-16 h-16 bg-neutral-800 rounded-full mb-5 flex items-center justify-center text-neutral-400 text-lg font-black group-hover:bg-red-900/30 transition-colors">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="font-black text-white text-lg leading-tight group-hover:text-red-400 transition-colors mb-1">
                {member.name}
              </div>
              <div className="text-red-700 text-xs font-medium tracking-wide mb-3">
                {member.role.split(",")[0]}
              </div>
              <div className="text-neutral-500 text-xs leading-relaxed mb-4">{member.yearsActive}</div>
              <p className="text-neutral-400 text-xs leading-relaxed line-clamp-3">{member.bio}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Former members */}
      <section>
        <h2 className="text-xs font-semibold tracking-[0.25em] text-neutral-500 uppercase mb-6">Former Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {former.map((member) => (
            <Link
              key={member.slug}
              href={`/members/${member.slug}`}
              className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-600 p-6 transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-neutral-800 rounded-full shrink-0 flex items-center justify-center text-neutral-500 text-sm font-bold group-hover:bg-neutral-700 transition-colors">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-bold text-white text-sm group-hover:text-red-400 transition-colors">
                    {member.name}
                  </div>
                  <div className="text-neutral-500 text-xs">{member.yearsActive}</div>
                </div>
              </div>
              <div className="text-neutral-500 text-xs mb-3 font-medium">{member.role.split(",")[0]}</div>
              <p className="text-neutral-500 text-xs leading-relaxed line-clamp-3">{member.bio}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
