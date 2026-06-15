import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  return { title: member.name, description: member.bio };
}

export default async function MemberDetailPage({ params }: Props) {
  const { slug } = await params;
  const member = members.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <Link
        href="/members"
        className="inline-flex items-center gap-2 text-neutral-600 hover:text-yellow-400 text-xs tracking-[0.2em] uppercase font-medium mb-12 transition-colors"
      >
        <span>&#8592;</span> All Members
      </Link>

      <div className="grid md:grid-cols-5 gap-8 mb-14">
        {/* Photo */}
        <div className="md:col-span-2">
          <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-neutral-900">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Info card */}
          <div className="bg-neutral-950 border border-neutral-900 mt-3 p-5 space-y-4 text-xs">
            {[
              { label: "Status", value: member.status === "current" ? "Current Member" : "Former Member", highlight: member.status === "current" },
              { label: "Active", value: member.yearsActive },
              { label: "Born", value: member.born },
              { label: "From", value: member.birthplace },
            ].map((row) => (
              <div key={row.label}>
                <div className="text-neutral-700 uppercase tracking-[0.3em] text-[10px] mb-0.5">{row.label}</div>
                <div className={row.highlight ? "text-yellow-400 font-medium" : "text-neutral-300"}>{row.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-6 bg-yellow-500" />
            <span className="text-yellow-500 text-[10px] font-bold tracking-[0.35em] uppercase">{member.role.split(",")[0]}</span>
          </div>
          <h1 className="font-black text-white text-4xl md:text-5xl uppercase tracking-tight leading-none mb-8">
            {member.name}
          </h1>

          <div className="mb-10">
            <div className="text-[10px] font-bold tracking-[0.35em] text-neutral-600 uppercase mb-4">Biography</div>
            <p className="text-neutral-400 leading-relaxed text-sm">{member.longBio}</p>
          </div>

          <div>
            <div className="text-[10px] font-bold tracking-[0.35em] text-neutral-600 uppercase mb-4">Notable Facts</div>
            <ul className="space-y-3">
              {member.notableFacts.map((fact, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-yellow-500/60 mt-0.5 shrink-0 text-xs font-bold">0{i + 1}</span>
                  <span className="text-neutral-500 text-sm leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Other members */}
      <div className="border-t border-neutral-900 pt-10">
        <div className="text-[10px] font-bold tracking-[0.4em] text-neutral-700 uppercase mb-6">Other Members</div>
        <div className="flex flex-wrap gap-2">
          {members
            .filter((m) => m.slug !== slug)
            .map((m) => (
              <Link
                key={m.slug}
                href={`/members/${m.slug}`}
                className="border border-neutral-800 hover:border-yellow-500/50 text-neutral-600 hover:text-yellow-400 text-xs px-4 py-2 tracking-[0.15em] uppercase font-medium transition-all duration-150"
              >
                {m.name}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
