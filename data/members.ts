export interface Member {
  slug: string;
  name: string;
  role: string;
  yearsActive: string;
  status: "current" | "former";
  bio: string;
  longBio: string;
  notableFacts: string[];
  born: string;
  birthplace: string;
  image: string;
}

export const members: Member[] = [
  {
    slug: "james-hetfield",
    name: "James Hetfield",
    role: "Vocalist, Rhythm Guitarist, Co-founder",
    yearsActive: "1981 – present",
    status: "current",
    born: "August 3, 1963",
    birthplace: "Downey, California, USA",
    image: "https://guitar.com/wp-content/uploads/2025/06/James-Hetfield-new-hero-13-June@2000x1500.jpg",
    bio: "Co-founder, vocalist, and rhythm guitarist. The riff architect behind Metallica's sound and one of heavy metal's most iconic frontmen.",
    longBio:
      "James Hetfield co-founded Metallica in 1981 after responding to a drum-player-wanted ad placed by Lars Ulrich. His down-picked rhythm guitar style — precise, thunderous, and uniquely percussive — became one of the defining elements of thrash metal. As the band's primary lyricist, Hetfield has explored themes ranging from war and addiction to personal trauma and self-examination across more than four decades of work. His baritone vocals evolved from aggressive thrash delivery to a more nuanced, emotionally expressive instrument on later records. In 2001, Hetfield entered rehabilitation for alcohol dependency, an experience documented in the film Some Kind of Monster. He has since spoken openly about recovery and mental health.",
    notableFacts: [
      "Developed one of the most technically precise rhythm guitar techniques in metal history",
      "His down-picking style on Battery is considered a benchmark of thrash guitar",
      "Entered alcohol rehabilitation in 2001, spurring a period of deep personal change",
      "Has spoken extensively about his Christian Science upbringing and its psychological impact",
      "Co-wrote Enter Sandman, Fade to Black, and Master of Puppets, among many others",
    ],
  },
  {
    slug: "lars-ulrich",
    name: "Lars Ulrich",
    role: "Drummer, Co-founder",
    yearsActive: "1981 – present",
    status: "current",
    born: "December 26, 1963",
    birthplace: "Gentofte, Denmark",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Lars_Ulrich_2025_Marvel_Stadium_%286%29.jpg",
    bio: "Co-founder and drummer. The driving business and creative force who helped turn Metallica into a global phenomenon.",
    longBio:
      "Lars Ulrich is the Danish-born drummer who placed the classified ad that brought James Hetfield into his life, forming the nucleus of Metallica. A self-taught drummer influenced by the New Wave of British Heavy Metal, Ulrich's aggressive, polyrhythmic playing style became inseparable from the Metallica sound. Beyond the kit, he has been a relentless advocate for the band's interests — most famously leading Metallica's high-profile legal battle against Napster in 2000. Ulrich is widely credited with shaping Metallica's business strategy, from early independent distribution to the founding of their own Blackened Recordings label.",
    notableFacts: [
      "Self-taught drummer who came to the US from Denmark specifically to pursue music",
      "Placed the ad in The Recycler newspaper that led to Metallica's formation",
      "Led Metallica's landmark legal case against Napster over file sharing in 2000",
      "Known for his forceful double-bass drumming and snare work on thrash tracks",
      "His father, Torben Ulrich, is a former professional tennis player",
    ],
  },
  {
    slug: "kirk-hammett",
    name: "Kirk Hammett",
    role: "Lead Guitarist",
    yearsActive: "1983 – present",
    status: "current",
    born: "November 18, 1962",
    birthplace: "San Francisco, California, USA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEm8AJm4P8FjYGMo5xelqDkWR_jUOZQLgUw&s",
    bio: "Lead guitarist since 1983, known for melodic, wah-infused solos and signature riffs across Metallica's greatest albums.",
    longBio:
      "Kirk Hammett replaced Dave Mustaine in April 1983 just before the recording of Kill 'Em All. Already a skilled guitarist as a member of Exodus, Hammett sought further instruction and studied under legendary guitar teacher Joe Satriani. His style blends aggressive thrash picking with melodic, blues-influenced lead work, and his heavy use of wah-wah pedal has become one of metal's most recognizable sounds. Hammett has crafted some of the most celebrated guitar solos in rock history, from the haunting One to the ferocious Battery. He is also a lifelong collector of horror memorabilia and vintage guitars.",
    notableFacts: [
      "Studied guitar under Joe Satriani before joining Metallica",
      "Replaced Dave Mustaine as lead guitarist in 1983",
      "His wah-pedal solos are considered defining moments in metal guitar history",
      "Co-wrote the riff to Enter Sandman, one of rock's most recognized opening figures",
      "An avid horror film enthusiast and collector of horror memorabilia",
    ],
  },
  {
    slug: "robert-trujillo",
    name: "Robert Trujillo",
    role: "Bassist",
    yearsActive: "2003 – present",
    status: "current",
    born: "October 23, 1964",
    birthplace: "Santa Monica, California, USA",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Robert_Trujillo_2025_Marvel_Stadium_%283%29.jpg",
    bio: "Bassist since 2003, bringing funk-influenced technique and massive low-end power to Metallica's live and studio sound.",
    longBio:
      "Robert Trujillo joined Metallica in February 2003 following stints with Suicidal Tendencies and Ozzy Osbourne. Famously, he was reportedly offered a $1 million signing bonus upon joining. His playing background spans funk, jazz, and metal, bringing a rhythmic complexity and stage presence that reinvigorated the band's live performances. Trujillo is known for his distinctive walking-while-playing stance and his ability to replicate both the technical demands of classic Metallica material and the groove-oriented work of later records. He produced the 2016 documentary Jaco, about jazz bassist Jaco Pastorius.",
    notableFacts: [
      "Reportedly received a $1 million bonus upon joining Metallica in 2003",
      "Previously played with Suicidal Tendencies and Ozzy Osbourne",
      "His playing background includes funk and jazz alongside heavy metal",
      "Produced the documentary Jaco about legendary bassist Jaco Pastorius",
      "Known for his signature crouching stance while performing live",
    ],
  },
  {
    slug: "cliff-burton",
    name: "Cliff Burton",
    role: "Bassist",
    yearsActive: "1982 – 1986",
    status: "former",
    born: "February 10, 1962",
    birthplace: "Castro Valley, California, USA",
    image: "https://static.wikia.nocookie.net/metal/images/f/f3/Cliff_Burton_1986.jpg/revision/latest?cb=20210823041210",
    bio: "Original bassist and musical visionary. His technical brilliance and melodic bass lines shaped Metallica's early sound.",
    longBio:
      "Cliff Burton was the original bassist of Metallica from 1982 until his tragic death in September 1986. His passing in a tour bus accident in Sweden at age 24 cut short one of the most promising careers in metal history. Burton brought a classical music sensibility to heavy metal bass playing, treating his instrument as a lead voice rather than purely a rhythmic support. His iconic bass solo Anesthesia (Pulling Teeth) from Kill 'Em All showcased his virtuosity, while his melodic contributions shaped Master of Puppets into a masterwork. He is universally regarded as one of the greatest rock bassists of all time.",
    notableFacts: [
      "Died in a tour bus accident in Sweden on September 27, 1986, at age 24",
      "Brought classical music theory and technique to thrash metal bass",
      "His bass solo Anesthesia (Pulling Teeth) is a landmark of rock bass performance",
      "Metallica relocated from Los Angeles to San Francisco partly at his insistence",
      "Inspired a generation of metal bassists and is considered one of the all-time greats",
    ],
  },
  {
    slug: "jason-newsted",
    name: "Jason Newsted",
    role: "Bassist",
    yearsActive: "1986 – 2001",
    status: "former",
    born: "March 4, 1963",
    birthplace: "Battle Creek, Michigan, USA",
    image: "https://townsquare.media/site/366/files/2021/08/attachment-jason_newsted_metallica_live_1992.jpg?w=780&q=75",
    bio: "Bassist from 1986 to 2001, whose tenure covered four studio albums and some of the band's most successful touring years.",
    longBio:
      "Jason Newsted joined Metallica in November 1986 following Cliff Burton's death, having been selected after an extensive audition process. His first major studio appearance on ...And Justice for All was notoriously marred by a mix that rendered his bass nearly inaudible — a source of ongoing frustration throughout his tenure. Newsted contributed significantly to the band's live performances and was a central figure in Metallica's global expansion through the 1990s. He departed in January 2001 citing a desire to pursue personal musical projects and exhaustion from years of touring. He has since reconciled with his former bandmates.",
    notableFacts: [
      "His bass was almost entirely absent from the mix on ...And Justice for All",
      "Previously played with Flotsam and Jetsam before joining Metallica",
      "Left the band in 2001 citing lack of creative freedom and physical burnout",
      "Played an integral role in the Garage Inc. covers album and S&M orchestral project",
      "Was inducted into the Rock and Roll Hall of Fame alongside Metallica in 2009",
    ],
  },
  {
    slug: "dave-mustaine",
    name: "Dave Mustaine",
    role: "Lead Guitarist (original)",
    yearsActive: "1981 – 1983",
    status: "former",
    born: "September 13, 1961",
    birthplace: "La Mesa, California, USA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQm2intw-sF7CYJDOg8iipAl5sh2uagl7Pg&s",
    bio: "Original lead guitarist who was fired before the first album. He went on to found Megadeth, one of metal's biggest bands.",
    longBio:
      "Dave Mustaine was Metallica's original lead guitarist from 1981 until April 1983, when he was dismissed from the band primarily due to alcohol-fueled behavioral problems. Despite being fired before any studio recordings, Mustaine contributed guitar riffs to several songs that appear on Kill 'Em All, including The Four Horsemen and Jump in the Fire. His dismissal fueled a fierce rivalry and deep personal resentment that he channeled into founding Megadeth, which became one of the Big Four of thrash metal alongside Metallica. Mustaine has spoken extensively about his complicated feelings toward the band over the decades.",
    notableFacts: [
      "Contributed riffs to Kill 'Em All despite being fired before its recording",
      "Founded Megadeth in 1983 after his dismissal from Metallica",
      "His rivalry with Metallica became one of metal's defining narratives for decades",
      "The Four Horsemen was originally written as Mechanix by Mustaine",
      "Was briefly reunited with Metallica members at the Big Four concerts in 2010",
    ],
  },
];
