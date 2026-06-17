export interface Tour {
  name: string;
  years: string;
  albumSupport: string;
  shows: number;
  countries: number;
  description: string;
  highlights: string[];
}

export const tours: Tour[] = [
  {
    name: "Kill 'Em All for One Tour",
    years: "1983",
    albumSupport: "Kill 'Em All",
    shows: 42,
    countries: 2,
    description: "Metallica's first headline tour, playing small clubs across North America and supporting Raven on the East Coast. Raw, aggressive, and unpolished — exactly like the album.",
    highlights: ["First headline shows in New York and Los Angeles", "Opened for Raven across the East Coast", "Sets rarely exceeded 45 minutes"],
  },
  {
    name: "Bang That Head Tour",
    years: "1984",
    albumSupport: "Ride the Lightning",
    shows: 67,
    countries: 6,
    description: "First major European run, including dates supporting Ozzy Osbourne. The tour established Metallica's presence in the UK and Scandinavia, where thrash metal found an early passionate fanbase.",
    highlights: ["First UK and European dates", "Supported Ozzy Osbourne on select dates", "Debut at the legendary Marquee Club, London"],
  },
  {
    name: "Damage Inc. Tour",
    years: "1986–1987",
    albumSupport: "Master of Puppets",
    shows: 179,
    countries: 14,
    description: "The largest and most ambitious tour of Metallica's early career, tragically cut short by the death of Cliff Burton in a tour bus accident in Sweden on September 27, 1986. Jason Newsted joined as bassist to complete the remaining dates.",
    highlights: ["Headlined major arenas across Europe and North America", "Cliff Burton's final performances", "Jason Newsted joined for the final legs after Burton's death"],
  },
  {
    name: "Damaged Justice Tour",
    years: "1988–1989",
    albumSupport: "...And Justice for All",
    shows: 232,
    countries: 24,
    description: "A sprawling global tour featuring an elaborate stage set including a giant Lady Justice statue that crumbled at the end of each show. The tour cemented Metallica as a major arena act worldwide.",
    highlights: ["Giant crumbling Lady Justice statue on stage", "First major South American dates", "Over 232 shows across 24 countries", "First MTV Video Music Award nomination tie-in"],
  },
  {
    name: "Wherever We May Roam Tour",
    years: "1991–1993",
    albumSupport: "Metallica (The Black Album)",
    shows: 300,
    countries: 35,
    description: "One of the highest-grossing concert tours in history at the time, the Wherever We May Roam Tour took Metallica from arenas to stadiums worldwide. The Black Album's commercial explosion made them the biggest band on the planet.",
    highlights: ["Over 300 shows in 35 countries", "Multiple sold-out nights at major stadiums", "Massive 'snake pit' stage design", "Guns N' Roses co-headlining dates (Stadium tour)"],
  },
  {
    name: "Escape from the Studio '95",
    years: "1995",
    albumSupport: "Load (preview)",
    shows: 22,
    countries: 4,
    description: "A smaller warm-up tour as the band previewed new material and returned to a more stripped-back stage setup before the Load era began in earnest.",
    highlights: ["First shows since Nowhere Else to Roam", "Preview of Load-era direction", "Intimate venue sizes relative to previous tours"],
  },
  {
    name: "Poor Touring Me",
    years: "1996–1997",
    albumSupport: "Load / Reload",
    shows: 189,
    countries: 28,
    description: "Supporting both Load and Reload, this tour saw Metallica embracing a more hard rock image and sound. The stage setup was more stripped-down, focusing attention on the band rather than theatrical props.",
    highlights: ["Supported both Load and Reload albums", "Rolling Stones collaboration and co-bill dates", "Major festival headline slots across Europe"],
  },
  {
    name: "Summer Sanitarium Tour",
    years: "2000 & 2003",
    albumSupport: "Garage Inc. / St. Anger",
    shows: 44,
    countries: 1,
    description: "Two separate massive US stadium tours that featured rotating supporting acts. The 2003 run supported St. Anger and was documented in the film 'Some Kind of Monster.'",
    highlights: ["Stadium-sized US shows", "Supporting acts included Korn, Kid Rock, Limp Bizkit, Linkin Park", "Filmed for the documentary Some Kind of Monster"],
  },
  {
    name: "World Magnetic Tour",
    years: "2008–2010",
    albumSupport: "Death Magnetic",
    shows: 220,
    countries: 38,
    description: "A triumphant return to the road following Death Magnetic's release. The tour featured a 360-degree stage design and broke attendance records at multiple venues, grossing over $150 million.",
    highlights: ["360-degree stage allowing full arena floor usage", "Over $150 million grossed", "Sold out multiple nights at Madison Square Garden", "First shows in many markets since the early 2000s"],
  },
  {
    name: "By Request Tour",
    years: "2013–2014",
    albumSupport: "Catalog",
    shows: 35,
    countries: 18,
    description: "A unique tour concept where fans voted on the setlist for each city in advance. Every night delivered a different set of songs drawn from fan votes across Metallica's entire catalog.",
    highlights: ["Fan-voted setlists unique to each city", "Rare and deep cuts performed for the first time in decades", "South America, Europe, and North America legs"],
  },
  {
    name: "WorldWired Tour",
    years: "2016–2019",
    albumSupport: "Hardwired... to Self-Destruct",
    shows: 165,
    countries: 43,
    description: "Metallica's most technologically advanced tour, featuring drone light shows, massive LED installations, and a 360-degree stage in stadiums. One of the highest-grossing tours of the decade.",
    highlights: ["Drone light shows above the audience", "360-degree stadium stage setup", "No opening acts — two full Metallica sets", "Over $150 million grossed"],
  },
  {
    name: "M72 World Tour",
    years: "2023–2025",
    albumSupport: "72 Seasons",
    shows: 120,
    countries: 22,
    description: "The M72 tour introduced a groundbreaking 'no repeat weekend' format: two consecutive nights in each city with completely different setlists and different supporting acts. A milestone in live music innovation.",
    highlights: ["No-repeat weekend: two unique setlists per city", "Different support acts each night", "In-the-round stage with full floor access", "Fan-pit area called 'Snake Pit' for lottery winners"],
  },
];
