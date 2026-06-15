import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-[#0a0a0a] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-red-600 font-black text-lg tracking-widest uppercase">Metallica</span>
            <p className="text-neutral-500 text-xs mt-2 leading-relaxed max-w-xs">
              An independent fan resource. Not affiliated with Metallica or their management.
            </p>
          </div>

          <div>
            <h4 className="text-neutral-300 text-xs font-semibold tracking-widest uppercase mb-3">Explore</h4>
            <ul className="space-y-2">
              {[
                { href: "/albums", label: "Albums" },
                { href: "/songs", label: "Songs" },
                { href: "/members", label: "Members" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-500 hover:text-neutral-200 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-neutral-300 text-xs font-semibold tracking-widest uppercase mb-3">Discover</h4>
            <ul className="space-y-2">
              {[
                { href: "/news", label: "News" },
                { href: "/trivia", label: "Trivia Quiz" },
                { href: "/about", label: "Timeline" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-500 hover:text-neutral-200 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-neutral-300 text-xs font-semibold tracking-widest uppercase mb-3">Official</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-neutral-600 text-sm">metallica.com</span>
              </li>
              <li>
                <span className="text-neutral-600 text-sm">Blackened Recordings</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-neutral-600 text-xs">
            Fan-made site. All band info is for informational purposes only.
          </p>
          <p className="text-neutral-700 text-xs">
            {new Date().getFullYear()} — Independent Fan Project
          </p>
        </div>
      </div>
    </footer>
  );
}
