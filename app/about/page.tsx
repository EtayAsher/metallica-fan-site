import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline",
  description: "Major milestones in Metallica's history — from formation in 1981 to the present day.",
};

const milestones = [
  {
    year: "1981",
    title: "Formation",
    body: "Lars Ulrich places an ad in The Recycler newspaper looking for musicians. James Hetfield responds, and the two co-found Metallica in Los Angeles. Ron McGovney joins on bass, with Lloyd Grant contributing the first recorded lead guitar work.",
    era: "Origins",
  },
  {
    year: "1982",
    title: "The Cliff Burton Era Begins",
    body: "Cliff Burton replaces Ron McGovney on bass. Burton's classical technique and musical depth transform the band's sound. Metallica also records the No Life 'til Leather demo, which circulates widely in tape-trading circles and establishes the band's underground reputation.",
    era: "Origins",
  },
  {
    year: "1983",
    title: "Dave Mustaine Fired / Kirk Hammett Joins",
    body: "Dave Mustaine is dismissed from the band due to ongoing behavioral issues. Kirk Hammett, formerly of Bay Area thrash act Exodus, joins as lead guitarist. Metallica relocates to San Francisco at Cliff Burton's insistence. Kill 'Em All is released in July — the first true thrash metal album.",
    era: "Thrash Era",
  },
  {
    year: "1984",
    title: "Ride the Lightning",
    body: "The band releases Ride the Lightning, demonstrating dramatic growth as composers. The album introduces slower tempos, acoustic passages, and more nuanced lyrical themes. Fade to Black becomes their first ballad, causing controversy among fans expecting pure thrash.",
    era: "Thrash Era",
  },
  {
    year: "1986",
    title: "Master of Puppets & The Death of Cliff Burton",
    body: "Metallica releases Master of Puppets in March to widespread acclaim — it becomes the first metal album to go gold without radio airplay. In September, Cliff Burton dies in a tour bus accident in Sweden at the age of 24. The loss devastates the band and the metal world.",
    era: "Thrash Era",
  },
  {
    year: "1987–1988",
    title: "Jason Newsted Joins / ...And Justice for All",
    body: "Jason Newsted is selected as the new bassist after an extensive audition process. The band releases ...And Justice for All, their most progressive and politically charged record. One wins the band's first Grammy Award for Best Metal Performance.",
    era: "Transition",
  },
  {
    year: "1991",
    title: "The Black Album",
    body: "Working with producer Bob Rock, Metallica releases their self-titled album — known as The Black Album — in August. Enter Sandman becomes a rock radio staple. The album spends over 700 weeks on the Billboard charts and becomes one of the best-selling albums in history.",
    era: "Mainstream Breakthrough",
  },
  {
    year: "1996–1997",
    title: "Load and Reload",
    body: "Metallica cuts their hair and releases Load and Reload in consecutive years, embracing blues, alternative rock, and country influences. The albums divide their fanbase but produce several enduring tracks including Until It Sleeps, Fuel, and The Memory Remains.",
    era: "Mainstream Breakthrough",
  },
  {
    year: "2000",
    title: "The Napster Lawsuit",
    body: "Lars Ulrich leads Metallica in a high-profile lawsuit against Napster for copyright infringement, becoming one of the most controversial moments in the band's history. The case becomes a landmark in music industry debates around digital distribution.",
    era: "Controversy",
  },
  {
    year: "2001–2003",
    title: "Jason Newsted Departs / St. Anger",
    body: "Jason Newsted leaves the band in January 2001 citing creative frustration. James Hetfield enters rehabilitation for alcohol dependency. The band's internal struggles are documented in the film Some Kind of Monster. St. Anger is released in 2003 to polarizing reviews.",
    era: "Turbulence",
  },
  {
    year: "2003",
    title: "Robert Trujillo Joins",
    body: "Robert Trujillo is announced as Metallica's new bassist in February 2003 after auditions including several prominent players. His background in Suicidal Tendencies and Ozzy Osbourne's band brings a new rhythmic energy to the group.",
    era: "Renewal",
  },
  {
    year: "2008",
    title: "Death Magnetic",
    body: "Produced by Rick Rubin, Death Magnetic represents a widely celebrated return to heavier, more guitar-driven territory. Guitar solos, absent on St. Anger, return in force. The album debuts at number one in multiple countries.",
    era: "Renewal",
  },
  {
    year: "2009",
    title: "Rock and Roll Hall of Fame Induction",
    body: "Metallica is inducted into the Rock and Roll Hall of Fame. The ceremony features a performance with all surviving members alongside guests, and brings the band's full history into cultural focus.",
    era: "Legacy",
  },
  {
    year: "2016",
    title: "Hardwired... to Self-Destruct",
    body: "After an eight-year gap, Metallica releases the double album Hardwired... to Self-Destruct on their own Blackened Recordings label. The album receives strong critical and fan reception, with Moth into Flame and Hardwired becoming immediate concert staples.",
    era: "Legacy",
  },
  {
    year: "2023",
    title: "72 Seasons",
    body: "Metallica releases their eleventh studio album, 72 Seasons, exploring the formative years of childhood and their impact on identity. The M72 World Tour introduces a no-repeat two-night format and becomes one of the highest-grossing concert tours in history.",
    era: "Present",
  },
];

const eraColors: Record<string, string> = {
  Origins: "border-neutral-600 bg-neutral-800",
  "Thrash Era": "border-red-800 bg-red-950/30",
  Transition: "border-neutral-600 bg-neutral-800",
  "Mainstream Breakthrough": "border-yellow-800 bg-yellow-950/20",
  Controversy: "border-orange-800 bg-orange-950/20",
  Turbulence: "border-neutral-600 bg-neutral-800",
  Renewal: "border-green-800 bg-green-950/20",
  Legacy: "border-blue-800 bg-blue-950/20",
  Present: "border-red-700 bg-red-950/30",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="border-b border-neutral-800 pb-8 mb-12">
        <span className="inline-block text-red-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          History
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-white">Band Timeline</h1>
        <p className="text-neutral-400 mt-2 text-sm max-w-lg">
          From a Los Angeles rehearsal room in 1981 to stadiums across the globe — the major milestones of Metallica.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-neutral-800 hidden sm:block" />

        <div className="space-y-8">
          {milestones.map((milestone, i) => (
            <div key={i} className="flex gap-6 sm:gap-8 relative">
              {/* Year + dot */}
              <div className="flex flex-col items-end sm:items-center w-16 sm:w-24 shrink-0 pt-1">
                <div className="font-black text-neutral-400 text-sm sm:text-base tabular-nums">{milestone.year}</div>
                <div className="hidden sm:block w-2 h-2 rounded-full bg-red-700 mt-2 relative z-10 shrink-0" />
              </div>

              {/* Content */}
              <div
                className={`flex-1 border p-5 sm:p-6 mb-2 ${eraColors[milestone.era] ?? "border-neutral-700 bg-neutral-900"}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="font-bold text-white text-base leading-snug">{milestone.title}</h2>
                  <span className="text-neutral-600 text-xs border border-neutral-700 px-2 py-0.5 shrink-0">
                    {milestone.era}
                  </span>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{milestone.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
