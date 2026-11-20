# Allroad Works

Strength coaching for cyclists — allroadworks.com. Built with Vite, TypeScript, and Tailwind CSS v4; deployed to GitHub Pages on push to `main`.

## Development

```sh
yarn dev      # http://localhost:3000
yarn build    # tsc + vite build → dist/
yarn preview  # serve dist/
```

## Content

All markup lives in `src/pages/` and is inlined into `index.html` **at build time** via `<!-- include:… -->` comments (see the `html-includes` plugin in `vite.config.js`). The shipped HTML therefore contains the full content — readable by crawlers and AI agents without running JavaScript.

| Partial | What |
|---|---|
| `home.html` | Hero card, main nav, social links, legal links |
| `about.html` | About Me overlay (`#about-me`) |
| `pricing.html` | Pricing overlay (`#pricing`) |
| `imprint.html` | Imprint overlay (`#imprint`) — **placeholder text, must be filled in** |
| `privacy.html` | Privacy Policy overlay (`#privacy`) — **placeholder text, must be filled in** |

Overlays are `<dialog data-page-dialog>` elements opened by URL hash; routing is in `src/dialog-navigation.ts`. Reference assets by root path (e.g. `/src/assets/hero.webp`) — Vite fingerprints them.

## Brand

Source kit: the "Allroad Works — Logo Style Tile" plus SVG/GIF exports (kept outside the repo).

- **Colours** (Tailwind tokens in `src/style.css`): Graphite `#282B28`, Chalk `#F6F4ED`, Granite `#4F5C40`, Sage Cove `#83BCA9`, Spicy Paprika `#D36135`. Semantic tokens (`primary`, `accent`, …) point at these. Paprika and Sage don't have enough contrast for small text on Chalk — use them for large text or decoration only.
- **Font**: Archivo (variable, wght + wdth) via `@fontsource-variable/archivo`. Headings use `font-stretch-expanded` to echo the logo.
- **Logo**: `src/assets/brand/` — `logo-full.svg` (full lockup, `currentColor`, inlined into the hero `<h1>`), `logo-mark.svg` (compact mark, Graphite — source for the favicon and app icons), `logo-wordmark.svg` (wordmark only, `currentColor`).
- **Icons**: `public/favicon.svg` (switches to Chalk in dark mode), `favicon.ico`, `apple-touch-icon.png`, `icon-192/512.png`, `site.webmanifest`, `og-image.png` (link previews).

## Search and AI crawlers

`public/robots.txt` allows all crawlers and points to `https://allroadworks.com/sitemap.xml`. The sitemap lists the homepage only; the overlays aren't separate URLs.
