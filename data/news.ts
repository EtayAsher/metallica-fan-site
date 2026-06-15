export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  source: string;
  category: "Tour" | "Music" | "Anniversary" | "Interview" | "Award";
}

export const news: NewsItem[] = [
  {
    id: "1",
    title: "M72 World Tour Continues to Break Attendance Records",
    date: "2026-05-20",
    summary:
      "Metallica's M72 World Tour, launched in support of 72 Seasons, continues to sell out stadium venues across multiple continents. The two-night no-repeat format has drawn widespread praise from fans and press alike.",
    source: "Metal Insider",
    category: "Tour",
  },
  {
    id: "2",
    title: "72 Seasons Celebrates Three Years of Critical Acclaim",
    date: "2026-04-14",
    summary:
      "Released in April 2023, Metallica's latest studio album 72 Seasons marked the band's third anniversary with continued strong streaming numbers and renewed interest from younger audiences.",
    source: "Rolling Stone",
    category: "Anniversary",
  },
  {
    id: "3",
    title: "James Hetfield Discusses the Making of Master of Puppets",
    date: "2026-03-10",
    summary:
      "In a candid interview marking 40 years since the album's release, James Hetfield opened up about the writing sessions, Cliff Burton's contributions, and why the record still resonates so deeply with listeners worldwide.",
    source: "Guitar World",
    category: "Interview",
  },
  {
    id: "4",
    title: "Kirk Hammett's Vintage Guitar Collection Featured in New Exhibition",
    date: "2026-02-22",
    summary:
      "A traveling exhibition showcasing Kirk Hammett's collection of vintage horror memorabilia and rare guitars is set to expand to several new international venues following a successful North American run.",
    source: "Guitar Magazine",
    category: "Interview",
  },
  {
    id: "5",
    title: "The Black Album at 35: Revisiting Metallica's Commercial Turning Point",
    date: "2026-01-15",
    summary:
      "Music critics and longtime fans reflect on the 35-year legacy of Metallica's self-titled album, examining how a decision to slow down and simplify reshaped the band's trajectory and the mainstream metal landscape.",
    source: "Pitchfork",
    category: "Anniversary",
  },
  {
    id: "6",
    title: "Metallica's All Within My Hands Foundation Surpasses $10 Million in Donations",
    date: "2025-12-05",
    summary:
      "The band's charitable foundation, All Within My Hands, announced it has distributed over $10 million to food banks, workforce education programs, and disaster relief efforts since its founding in 2017.",
    source: "Consequence",
    category: "Music",
  },
  {
    id: "7",
    title: "Lars Ulrich on the Future: 'We Have More to Say'",
    date: "2025-11-18",
    summary:
      "Drummer Lars Ulrich told a Danish publication that Metallica has no plans to slow down, hinting that early conversations about new studio material have already begun following the conclusion of the current tour cycle.",
    source: "Loudwire",
    category: "Interview",
  },
  {
    id: "8",
    title: "Ride the Lightning Reissue Brings Remastered Audio to New Generation",
    date: "2025-10-07",
    summary:
      "A deluxe reissue of Ride the Lightning features newly remastered audio, rare session outtakes, and previously unseen tour photography from the band's formative 1984 touring period across Europe and North America.",
    source: "NME",
    category: "Music",
  },
];
