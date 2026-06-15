import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-[#060606] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-0.5 h-5 bg-yellow-500" />
              <span className="text-white font-black text-base tracking-[0.2em] uppercase">Metallica</span>
            </div>
            <p className="text-neutral-700 text-xs leading-relaxed max-w-xs">
              Independent fan resource. Not affiliated with Metallica or their management.
            </p>
          </div>

          <div>
            <h4 className="text-neutral-600 text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {[{ href: "/albums", label: "Albums" }, { href: "/songs", label: "Songs" }, { href: "/members", label: "Members" }].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-700 hover:text-yellow-400 text-xs tracking-[0.1em] uppercase transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-neutral-600 text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Discover</h4>
            <ul className="space-y-2.5">
              {[{ href: "/news", label: "News" }, { href: "/trivia", label: "Trivia Quiz" }, { href: "/about", label: "Timeline" }].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-700 hover:text-yellow-400 text-xs tracking-[0.1em] uppercase transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-neutral-600 text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Official</h4>
            <ul className="space-y-2.5">
              <li><span className="text-neutral-800 text-xs tracking-wider">metallica.com</span></li>
              <li><span className="text-neutral-800 text-xs tracking-wider">Blackened Recordings</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-neutral-800 text-[10px] tracking-wider uppercase">
            Fan-made site — informational use only
          </p>
          <p className="text-neutral-900 text-[10px] tracking-wider">
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
