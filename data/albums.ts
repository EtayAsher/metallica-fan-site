export interface Album {
  slug: string;
  title: string;
  year: number;
  label: string;
  description: string;
  longDescription: string;
  notableTracks: string[];
  producer: string;
  genre: string[];
}

export const albums: Album[] = [
  {
    slug: "kill-em-all",
    title: "Kill 'Em All",
    year: 1983,
    label: "Megaforce Records",
    description: "The debut album that launched a thrash metal movement. Raw, fast, and unrelenting.",
    longDescription:
      "Released in July 1983, Kill 'Em All was originally titled Metal Up Your Ass before label concerns forced the change. Recorded on a shoestring budget, the album introduced the world to Metallica's aggressive blend of speed, precision, and heaviness. Tracks like Whiplash and Jump in the Fire set the template for thrash metal and influenced countless bands that followed.",
    notableTracks: ["Hit the Lights", "The Four Horsemen", "Jump in the Fire", "Whiplash", "Seek & Destroy"],
    producer: "Paul Curcio",
    genre: ["Thrash Metal", "Heavy Metal"],
  },
  {
    slug: "ride-the-lightning",
    title: "Ride the Lightning",
    year: 1984,
    label: "Megaforce / Elektra Records",
    description: "A darker, more complex follow-up that expanded the band's musical ambitions.",
    longDescription:
      "Ride the Lightning showed a band refusing to repeat itself. Released in 1984, it introduced slower tempos, acoustic elements, and more introspective themes alongside crushing thrash. The album marked Metallica's first collaboration with producer Flemming Rasmussen and cemented their status as serious artists, not just speed merchants.",
    notableTracks: ["Fight Fire with Fire", "Ride the Lightning", "For Whom the Bell Tolls", "Fade to Black", "Creeping Death"],
    producer: "Flemming Rasmussen",
    genre: ["Thrash Metal", "Heavy Metal"],
  },
  {
    slug: "master-of-puppets",
    title: "Master of Puppets",
    year: 1986,
    label: "Elektra Records",
    description: "Widely regarded as the greatest thrash metal album ever recorded. A flawless masterpiece.",
    longDescription:
      "Master of Puppets is the apex of Metallica's thrash era and one of the most critically acclaimed heavy metal albums in history. Released in March 1986, it pushed technical complexity, song length, and thematic depth to new extremes. Themes of addiction, war, and manipulation run throughout. Tragically, bassist Cliff Burton died in a bus accident later that year, making this the last Metallica album to feature him.",
    notableTracks: ["Battery", "Master of Puppets", "The Thing That Should Not Be", "Disposable Heroes", "Damage, Inc."],
    producer: "Flemming Rasmussen",
    genre: ["Thrash Metal", "Heavy Metal"],
  },
  {
    slug: "and-justice-for-all",
    title: "...And Justice for All",
    year: 1988,
    label: "Elektra Records",
    description: "A progressive, politically charged epic and the debut of bassist Jason Newsted.",
    longDescription:
      "Released in 1988, ...And Justice for All marked Jason Newsted's debut as Metallica's bassist following Cliff Burton's death. Notoriously, Newsted's bass was nearly inaudible in the final mix — a production decision that still divides fans. The album features some of Metallica's most complex song structures and politically charged lyrics, including the anti-war epic One, which became their first music video.",
    notableTracks: ["Blackened", "...And Justice for All", "Eye of the Beholder", "One", "The Shortest Straw"],
    producer: "Flemming Rasmussen",
    genre: ["Thrash Metal", "Progressive Metal"],
  },
  {
    slug: "metallica-black-album",
    title: "Metallica (The Black Album)",
    year: 1991,
    label: "Elektra Records",
    description: "The album that broke Metallica into mainstream superstardom. A landmark in rock history.",
    longDescription:
      "Simply titled Metallica but universally known as The Black Album, this 1991 release transformed the band from thrash metal heroes into global superstars. Producer Bob Rock pushed the band toward slower tempos, cleaner production, and more accessible songwriting without sacrificing heaviness. It became one of the best-selling albums of all time, spending over 700 weeks on the Billboard charts.",
    notableTracks: ["Enter Sandman", "Sad But True", "The Unforgiven", "Nothing Else Matters", "Wherever I May Roam"],
    producer: "Bob Rock",
    genre: ["Heavy Metal", "Hard Rock"],
  },
  {
    slug: "load",
    title: "Load",
    year: 1996,
    label: "Elektra Records",
    description: "A controversial left turn into blues-influenced hard rock that divided longtime fans.",
    longDescription:
      "Load saw Metallica drastically alter their image and sound, embracing blues, country, and Southern rock influences. The band cut their hair, appeared in fashion shoots, and delivered an album far removed from their thrash roots. Commercially successful but critically divisive, Load remains one of the most debated entries in their catalog. Songs like Until It Sleeps and Hero of the Day showed a softer, more introspective side.",
    notableTracks: ["Ain't My Bitch", "Until It Sleeps", "Hero of the Day", "Bleeding Me", "The Outlaw Torn"],
    producer: "Bob Rock",
    genre: ["Hard Rock", "Alternative Metal"],
  },
  {
    slug: "reload",
    title: "Reload",
    year: 1997,
    label: "Elektra Records",
    description: "The second half of the Load sessions, released a year later with fan favorites.",
    longDescription:
      "Reload comprised material recorded alongside Load but held back for a follow-up release. While sharing the same blues-and-hard-rock DNA as its predecessor, Reload contains some beloved tracks including The Memory Remains, a duet with Marianne Faithfull, and Fuel, which became a live staple. The album proved the band's willingness to explore beyond heavy metal conventions, for better or worse in fans' eyes.",
    notableTracks: ["Fuel", "The Memory Remains", "The Unforgiven II", "Better Than You", "Where the Wild Things Are"],
    producer: "Bob Rock",
    genre: ["Hard Rock", "Alternative Metal"],
  },
  {
    slug: "st-anger",
    title: "St. Anger",
    year: 2003,
    label: "Elektra Records",
    description: "A raw, stripped-down record born from internal turmoil. Famous for its snare sound.",
    longDescription:
      "St. Anger arrived after a period of intense internal turmoil — bassist Jason Newsted had departed, James Hetfield had entered rehab, and the band underwent filmed therapy sessions documented in the film Some Kind of Monster. The album reflected all of that chaos: long tracks, no guitar solos, and an infamous snare drum sound that polarized listeners. Despite its flaws, it represented a genuine moment of band survival.",
    notableTracks: ["Frantic", "St. Anger", "Some Kind of Monster", "The Unnamed Feeling", "All Within My Hands"],
    producer: "Bob Rock",
    genre: ["Heavy Metal", "Alternative Metal"],
  },
  {
    slug: "death-magnetic",
    title: "Death Magnetic",
    year: 2008,
    label: "Warner Bros. Records",
    description: "A triumphant return to form featuring guitar solos and thrash-influenced energy.",
    longDescription:
      "Death Magnetic was widely seen as Metallica's return to their roots, featuring guitar solos absent since the Black Album era, faster tempos, and a more aggressive tone. Produced by Rick Rubin, it debuted at number one in multiple countries. The album also introduced Robert Trujillo as a more prominent creative force. Though some critics noted the heavily compressed mastering as a flaw, Death Magnetic revitalized the band's critical standing.",
    notableTracks: ["That Was Just Your Life", "The End of the Line", "Broken, Beat & Scarred", "The Day That Never Comes", "All Nightmare Long"],
    producer: "Rick Rubin",
    genre: ["Thrash Metal", "Heavy Metal"],
  },
  {
    slug: "hardwired-to-self-destruct",
    title: "Hardwired... to Self-Destruct",
    year: 2016,
    label: "Blackened Recordings",
    description: "A double album that delivered Metallica's heaviest, most confident work in decades.",
    longDescription:
      "Eight years after Death Magnetic, Metallica returned with a double album released on their own Blackened Recordings label. Hardwired... to Self-Destruct was met with widespread critical acclaim for its balance of aggression and melody. The title track was released as a surprise single and instantly became a fan favorite. The album demonstrated a band comfortable in their legacy while still pushing forward.",
    notableTracks: ["Hardwired", "Atlas, Rise!", "Now That We're Dead", "Moth into Flame", "Spit Out the Bone"],
    producer: "Greg Fidelman",
    genre: ["Thrash Metal", "Heavy Metal"],
  },
  {
    slug: "72-seasons",
    title: "72 Seasons",
    year: 2023,
    label: "Blackened Recordings",
    description: "The most recent chapter, exploring themes of childhood and identity with thundering riffs.",
    longDescription:
      "72 Seasons takes its title from the concept that the first 18 years of life — 72 seasons — shape the character we carry into adulthood. James Hetfield's lyrics explore childhood trauma, identity, and resilience with remarkable candor. Musically, the album continues the heavier direction of Hardwired while introducing new textures. Supported by a massive world tour, 72 Seasons showed Metallica still operating at the highest level after four decades.",
    notableTracks: ["Screaming Suicide", "Lux Aeterna", "72 Seasons", "Sleepwalk My Life Away", "You Must Burn!"],
    producer: "Greg Fidelman",
    genre: ["Thrash Metal", "Heavy Metal"],
  },
];
