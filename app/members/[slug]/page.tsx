import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { members } from "@/data/members";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = members.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: member.name,
    description: member.bio,
  };
}

export default async function MemberDetailPage({ params }: Props) {
  const { slug } = await params;
  const member = members.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/members"
        className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-200 text-sm mb-10 transition-colors"
      >
        <span>&#8592;</span> All Members
      </Link>

      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {/* Avatar + basic info */}
        <div className="md:col-span-1">
          <div className="bg-neutral-900 border border-neutral-800 p-6 mb-4">
            <div className="w-20 h-20 bg-neutral-800 rounded-full mb-5 flex items-center justify-center text-neutral-400 text-2xl font-black">
              {member.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <h1 className="font-black text-white text-2xl leading-tight mb-1">{member.name}</h1>
            <div className="text-red-600 text-sm font-medium mb-4">{member.role.split(",")[0]}</div>

            <div className="space-y-3 text-xs">
              <div>
                <div className="text-neutral-600 uppercase tracking-widest mb-0.5">Status</div>
                <div className={member.status === "current" ? "text-green-400" : "text-neutral-400"}>
                  {member.status === "current" ? "Current Member" : "Former Member"}
                </div>
              </div>
              <div>
                <div className="text-neutral-600 uppercase tracking-widest mb-0.5">Active</div>
                <div className="text-neutral-300">{member.yearsActive}</div>
              </div>
              <div>
                <div className="text-neutral-600 uppercase tracking-widest mb-0.5">Born</div>
                <div className="text-neutral-300">{member.born}</div>
              </div>
              <div>
                <div className="text-neutral-600 uppercase tracking-widest mb-0.5">From</div>
                <div className="text-neutral-300">{member.birthplace}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio + facts */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-xs font-semibold tracking-[0.25em] text-neutral-500 uppercase mb-4">Biography</h2>
            <p className="text-neutral-300 leading-relaxed text-sm">{member.longBio}</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.25em] text-neutral-500 uppercase mb-4">Notable Facts</h2>
            <ul className="space-y-3">
              {member.notableFacts.map((fact, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-700 mt-1 shrink-0 text-xs">—</span>
                  <span className="text-neutral-400 text-sm leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Other members */}
      <div className="border-t border-neutral-800 pt-8">
        <h3 className="text-xs font-semibold tracking-[0.25em] text-neutral-600 uppercase mb-4">Other Members</h3>
        <div className="flex flex-wrap gap-2">
          {members
            .filter((m) => m.slug !== slug)
            .map((m) => (
              <Link
                key={m.slug}
                href={`/members/${m.slug}`}
                className="border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white text-xs px-3 py-1.5 transition-colors"
              >
                {m.name}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
