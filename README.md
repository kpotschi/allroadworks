# ALLROADWORKS

Cycling strength coaching website, built with Vite, TypeScript, and Tailwind CSS.

## Development

```sh
yarn dev
```

## Build

```sh
yarn build
```

## Hero image

The hero uses `public/hero-placeholder.jpg`. Replace that file to change the cyclist photo. The About Me overlay uses `src/assets/kevin.jpg` for Kevin's portrait.

## Fonts

IBM Plex Sans is used for body text; Barlow Condensed is used for headings. Required font files and their OFL licenses are in `src/assets/fonts/`.

## Content pages

Home, About Me, and Pricing markup live in `src/pages/home.html`, `src/pages/about.html`, and `src/pages/pricing.html`. The pages are assembled by `src/main.ts`; dialog routing lives in `src/dialog-navigation.ts`.

About Me and Pricing open as hash-addressable overlays (`#about-me` and `#pricing`). The current Lorem ipsum and `Price: add rate` text are placeholders.