# Metallica Fan Site

An independent, mobile-first fan resource for Metallica built with Next.js, React, and Tailwind CSS.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, featured albums, current members, latest news |
| `/albums` | Full discography — all 11 studio albums |
| `/albums/[slug]` | Album detail — description, tracks, navigation |
| `/members` | Current and former band members |
| `/members/[slug]` | Member detail — bio, notable facts |
| `/songs` | Iconic tracks with search and album filter |
| `/news` | News feed with placeholder summaries |
| `/trivia` | 22-question interactive quiz with difficulty labels |
| `/about` | Visual timeline of band milestones |

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building for production

```bash
npm run build
npm start
```

## Project structure

```
metallica-fan-site/
├── app/                   # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header + Footer
│   ├── page.tsx           # Home page
│   ├── albums/
│   ├── members/
│   ├── songs/
│   ├── news/
│   ├── trivia/
│   └── about/
├── components/
│   ├── Header.tsx         # Sticky nav with mobile menu
│   ├── Footer.tsx
│   ├── TriviaQuiz.tsx     # Interactive quiz (client component)
│   └── SongsClient.tsx    # Search/filter songs (client component)
└── data/
    ├── albums.ts
    ├── members.ts
    ├── songs.ts
    ├── news.ts
    └── trivia.ts
```

## Tech stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Font**: Geist (via next/font)

## Design notes

- Dark rock/metal palette: black, dark gray, silver, subtle red accents
- Mobile-first with sticky header and hamburger menu
- No emojis, no copied lyrics or copyrighted articles
- Placeholder image blocks where album art would appear
- SEO metadata on all pages

---

Independent fan project. Not affiliated with Metallica or their management.
