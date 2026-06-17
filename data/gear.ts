export interface GearItem {
  category: string;
  items: string[];
}

export interface MemberGear {
  member: string;
  slug: string;
  role: string;
  signature: string;
  gear: GearItem[];
}

export const memberGear: MemberGear[] = [
  {
    member: "James Hetfield",
    slug: "james-hetfield",
    role: "Rhythm Guitar & Vocals",
    signature: "ESP / ESP LTD signature models, Gibson Flying V (early career)",
    gear: [
      {
        category: "Guitars",
        items: [
          "ESP James Hetfield Signature 'Snakebyte' (primary since ~2009)",
          "ESP James Hetfield 'Iron Cross' (Black Album era)",
          "Gibson Flying V (Kill 'Em All / Ride the Lightning era)",
          "ESP MX-220 'Electra Glide' (Master of Puppets era)",
          "ESP Explorer-style custom builds (And Justice For All era)",
        ],
      },
      {
        category: "Amplifiers",
        items: [
          "Mesa/Boogie Mark IIC+ (iconic early Metallica tone)",
          "Mesa/Boogie Dual Rectifier (modern era)",
          "Roland JC-120 Jazz Chorus (clean tones)",
        ],
      },
      {
        category: "Effects",
        items: [
          "MXR Phase 90",
          "Boss NS-2 Noise Suppressor",
          "Klon Centaur overdrive (studio)",
          "TC Electronic rack units",
        ],
      },
      {
        category: "Strings & Picks",
        items: [
          "Ernie Ball strings (.010–.052)",
          "Dunlop Tortex picks (1.14mm)",
        ],
      },
    ],
  },
  {
    member: "Lars Ulrich",
    slug: "lars-ulrich",
    role: "Drums",
    signature: "Tama signature kits, Pearl (early career)",
    gear: [
      {
        category: "Drum Kit",
        items: [
          "Tama Lars Ulrich Signature 'Star' kit (current)",
          "Pearl kit (Kill 'Em All / Ride the Lightning era)",
          "Tama Artstar (Master of Puppets through Black Album)",
          "Tama Superstar (Damaged Justice era)",
        ],
      },
      {
        category: "Cymbals",
        items: [
          "Zildjian A Custom series (primary)",
          "Zildjian 14\" hi-hats",
          "Zildjian 18\" and 20\" crashes",
          "Zildjian 22\" ride",
        ],
      },
      {
        category: "Hardware & Pedals",
        items: [
          "Tama Iron Cobra double bass pedal",
          "Remo drumheads (Coated Ambassador batter)",
          "Vater drumsticks (Lars Ulrich signature)",
        ],
      },
    ],
  },
  {
    member: "Kirk Hammett",
    slug: "kirk-hammett",
    role: "Lead Guitar",
    signature: "ESP / ESP LTD KH series, Gibson Flying V (early career)",
    gear: [
      {
        category: "Guitars",
        items: [
          "ESP KH-2 (primary workhorse since mid-1980s)",
          "ESP Kirk Hammett 'Mummy' signature",
          "ESP Kirk Hammett 'Ouija' signature",
          "Gibson Flying V (pre-Metallica and early career)",
          "ESP KH-602 (standard production version of KH-2)",
        ],
      },
      {
        category: "Amplifiers",
        items: [
          "Mesa/Boogie Mark IIC+ (iconic Metallica lead tone)",
          "Mesa/Boogie Dual Rectifier",
          "Marshall JCM800 (early career)",
        ],
      },
      {
        category: "Effects",
        items: [
          "Dunlop KH95 Kirk Hammett Signature Cry Baby Wah (extensive use)",
          "MXR M116 Fullbore Metal distortion",
          "Boss DD-3 Digital Delay",
          "TC Electronic rack delay/reverb",
          "MXR Carbon Copy Analog Delay",
        ],
      },
      {
        category: "Strings & Picks",
        items: [
          "Ernie Ball strings (.010–.052)",
          "Dunlop Tortex picks (0.88mm)",
        ],
      },
    ],
  },
  {
    member: "Robert Trujillo",
    slug: "robert-trujillo",
    role: "Bass",
    signature: "Warwick, Sadowsky, Fender (early career with other bands)",
    gear: [
      {
        category: "Basses",
        items: [
          "Warwick Robert Trujillo Signature Streamer (primary)",
          "Sadowsky NYC Metro 5-string",
          "1961 Fender Jazz Bass (vintage studio use)",
          "Warwick Thumb Bass",
          "Custom Warwick 5-string fretless",
        ],
      },
      {
        category: "Amplifiers",
        items: [
          "Ampeg SVT-CL (classic tone)",
          "Ampeg 8x10 cabinet",
          "Mesa/Boogie Strategy 400 power amp",
          "Custom Ampeg / Mesa hybrid rig for live",
        ],
      },
      {
        category: "Effects",
        items: [
          "Boss TU-3 Chromatic Tuner",
          "MXR Bass Octave Deluxe",
          "Darkglass B7K Ultra overdrive",
        ],
      },
      {
        category: "Strings",
        items: [
          "DR Strings Hi-Beam (.045–.105)",
          "Warwick Black Label strings",
        ],
      },
    ],
  },
];
