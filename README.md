# Arc Raiders Hacks (arcraiderhacks.com)

Static marketing site for **Arc Raiders** PC hacks — built with [Astro](https://astro.build).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Media & brand

- Product screenshots: `npm run media:arc-raiders` (see `src/config/productGallery.ts`)
- Favicon / logo: replace `public/brand/arc-favicon-source.png`, then `npm run brand:icons`

## Deploy

Output is in `dist/`. Cloudflare Workers static assets: `wrangler deploy` (see `wrangler.toml`).
