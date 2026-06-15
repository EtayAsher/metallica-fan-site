export interface Song {
  slug: string;
  title: string;
  album: string;
  albumSlug: string;
  year: number;
  duration: string;
  description: string;
  writtenBy: string[];
}

export const songs: Song[] = [
  {
    slug: "master-of-puppets",
    title: "Master of Puppets",
    album: "Master of Puppets",
    albumSlug: "master-of-puppets",
    year: 1986,
    duration: "8:35",
    description:
      "An eight-minute thrash epic exploring the grip of addiction. The layered riff structures, dynamic shifts, and haunting mid-section make it a benchmark of heavy metal composition.",
    writtenBy: ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Cliff Burton"],
  },
  {
    slug: "one",
    title: "One",
    album: "...And Justice for All",
    albumSlug: "and-justice-for-all",
    year: 1988,
    duration: "7:25",
    description:
      "Inspired by the anti-war novel Johnny Got His Gun, One begins as a quiet ballad before erupting into one of the most visceral endings in rock history. Metallica's first music video.",
    writtenBy: ["James Hetfield", "Lars Ulrich"],
  },
  {
    slug: "enter-sandman",
    title: "Enter Sandman",
    album: "Metallica (The Black Album)",
    albumSlug: "metallica-black-album",
    year: 1991,
    duration: "5:32",
    description:
      "The iconic opening track of The Black Album. Its opening riff is one of the most recognizable in rock history. A dark children's lullaby twisted into a heavy metal anthem.",
    writtenBy: ["James Hetfield", "Lars Ulrich", "Kirk Hammett"],
  },
  {
    slug: "nothing-else-matters",
    title: "Nothing Else Matters",
    album: "Metallica (The Black Album)",
    albumSlug: "metallica-black-album",
    year: 1991,
    duration: "6:28",
    description:
      "James Hetfield wrote this ballad for himself, never intending it to be heard publicly. Its vulnerability and orchestral arrangement made it one of Metallica's most beloved songs.",
    writtenBy: ["James Hetfield", "Lars Ulrich"],
  },
  {
    slug: "fade-to-black",
    title: "Fade to Black",
    album: "Ride the Lightning",
    albumSlug: "ride-the-lightning",
    year: 1984,
    duration: "6:57",
    description:
      "Metallica's first ballad, controversial at the time for its soft introduction. Explores themes of despair and resignation, building from acoustic calm to full heavy metal intensity.",
    writtenBy: ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Cliff Burton"],
  },
  {
    slug: "creeping-death",
    title: "Creeping Death",
    album: "Ride the Lightning",
    albumSlug: "ride-the-lightning",
    year: 1984,
    duration: "6:36",
    description:
      "Drawn from the Book of Exodus, Creeping Death is a thrash powerhouse with one of Metallica's most beloved breakdown chants. A staple of every live setlist.",
    writtenBy: ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Cliff Burton"],
  },
  {
    slug: "battery",
    title: "Battery",
    album: "Master of Puppets",
    albumSlug: "master-of-puppets",
    year: 1986,
    duration: "5:12",
    description:
      "The opening statement of Master of Puppets begins with classical acoustic guitars before detonating into one of thrash metal's definitive riffs. Named after the SF club Old Waldorf Battery.",
    writtenBy: ["James Hetfield", "Lars Ulrich"],
  },
  {
    slug: "for-whom-the-bell-tolls",
    title: "For Whom the Bell Tolls",
    album: "Ride the Lightning",
    albumSlug: "ride-the-lightning",
    year: 1984,
    duration: "5:10",
    description:
      "Inspired by Ernest Hemingway's novel, this mid-paced crusher features Cliff Burton's massive bass intro and remains one of Metallica's most atmospheric compositions.",
    writtenBy: ["James Hetfield", "Lars Ulrich", "Cliff Burton"],
  },
  {
    slug: "sad-but-true",
    title: "Sad But True",
    album: "Metallica (The Black Album)",
    albumSlug: "metallica-black-album",
    year: 1991,
    duration: "5:24",
    description:
      "A slow, down-tuned behemoth built on one of James Hetfield's heaviest riffs. The drop-D tuning and plodding tempo give it an oppressive, hypnotic weight.",
    writtenBy: ["James Hetfield", "Lars Ulrich"],
  },
  {
    slug: "the-four-horsemen",
    title: "The Four Horsemen",
    album: "Kill 'Em All",
    albumSlug: "kill-em-all",
    year: 1983,
    duration: "7:14",
    description:
      "Originally conceived by Dave Mustaine as Mechanix, this sprawling debut album track features tempo shifts and a mid-section that hinted at the band's prog-influenced future.",
    writtenBy: ["James Hetfield", "Lars Ulrich", "Dave Mustaine"],
  },
  {
    slug: "seek-and-destroy",
    title: "Seek & Destroy",
    album: "Kill 'Em All",
    albumSlug: "kill-em-all",
    year: 1983,
    duration: "6:55",
    description:
      "A crowd-engagement favorite that has closed countless Metallica shows. Its swaggering riff and call-and-response structure make it an enduring live set staple.",
    writtenBy: ["James Hetfield", "Lars Ulrich"],
  },
  {
    slug: "blackened",
    title: "Blackened",
    album: "...And Justice for All",
    albumSlug: "and-justice-for-all",
    year: 1988,
    duration: "6:40",
    description:
      "An environmental apocalypse set to thrash metal. Blackened opens with a distinctive reversed guitar intro and builds to a furious tempo that showcases the band at their most technically demanding.",
    writtenBy: ["James Hetfield", "Lars Ulrich", "Jason Newsted"],
  },
  {
    slug: "fuel",
    title: "Fuel",
    album: "Reload",
    albumSlug: "reload",
    year: 1997,
    duration: "4:29",
    description:
      "A throttle-down adrenaline track that became one of Reload's most successful singles. Its high-octane energy has made it a fixture at sporting events worldwide.",
    writtenBy: ["James Hetfield", "Lars Ulrich", "Kirk Hammett"],
  },
  {
    slug: "the-unforgiven",
    title: "The Unforgiven",
    album: "Metallica (The Black Album)",
    albumSlug: "metallica-black-album",
    year: 1991,
    duration: "6:27",
    description:
      "A cinematic ballad built around themes of societal control and personal regret. Its sweeping structure and string arrangements made it one of The Black Album's most emotional moments.",
    writtenBy: ["James Hetfield", "Lars Ulrich", "Kirk Hammett"],
  },
  {
    slug: "hardwired",
    title: "Hardwired",
    album: "Hardwired... to Self-Destruct",
    albumSlug: "hardwired-to-self-destruct",
    year: 2016,
    duration: "3:11",
    description:
      "Released as a surprise single before the album, Hardwired is a lean, brutal thrash track clocking under four minutes. A direct statement of intent after an eight-year studio absence.",
    writtenBy: ["James Hetfield", "Lars Ulrich"],
  },
  {
    slug: "lux-aeterna",
    title: "Lux Aeterna",
    album: "72 Seasons",
    albumSlug: "72-seasons",
    year: 2023,
    duration: "3:27",
    description:
      "The lead single from 72 Seasons channels early-period Metallica energy with a melodic, high-speed riff and direct, uncluttered production that felt like a mission statement.",
    writtenBy: ["James Hetfield", "Lars Ulrich"],
  },
];
