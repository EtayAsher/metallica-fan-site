import type { Metadata } from "next";
import { memberGear } from "@/data/gear";

export const metadata: Metadata = {
  title: "Gear",
  description: "The guitars, amps, drums, and effects behind the Metallica sound.",
};

export default function GearPage() {
  return (
    <>
      <section className="bg-yellow-400 border-b-4 border-black px-4 sm:px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-black" />
            <span className="text-black text-[10px] font-black tracking-[0.4em] uppercase">Equipment</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tight">Gear</h1>
          <p className="text-black/60 mt-3 text-sm max-w-lg leading-relaxed font-medium">
            The guitars, amplifiers, drums, and effects that create the Metallica sound.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-8">
          {memberGear.map((member) => (
            <div key={member.slug} className="bg-[#1c1c1c] border border-neutral-700 overflow-hidden">
              <div className="bg-black border-b border-neutral-700 px-6 py-5 flex items-center justify-between">
                <div>
                  <h2 className="text-yellow-400 font-black text-xl uppercase tracking-wide">{member.member}</h2>
                  <div className="text-neutral-400 text-xs tracking-wider uppercase mt-0.5">{member.role}</div>
                </div>
                <div className="text-neutral-600 text-xs max-w-xs text-right hidden md:block leading-relaxed">
                  {member.signature}
                </div>
              </div>

              <div className="p-6 grid sm:grid-cols-2 gap-6">
                {member.gear.map((cat) => (
                  <div key={cat.category}>
                    <div className="text-[10px] font-black tracking-[0.35em] text-yellow-500 uppercase mb-3 flex items-center gap-2">
                      <div className="h-px w-4 bg-yellow-500" />
                      {cat.category}
                    </div>
                    <ul className="space-y-2">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                          <span className="text-yellow-500/60 shrink-0 mt-0.5">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
