# SEO & canonical host

## Canonical domain

Production canonical origin is **`https://arcraiderhacks.com`** (`src/config/site.ts`, `scripts/cf-build.mjs`, sitemap finalize).

1. Add **arcraiderhacks.com** (and `www` if used) as a **Custom Domain** on the Cloudflare Worker `arcraider-cheats--com` in the same account as the zone.
2. When the zone is available, uncomment and set `[[routes]]` in `wrangler.toml` (see file comments). Apex should be the primary property; `www` is redirected to apex in `src/worker.js` (301, same path/query).
3. In **Google Search Console**, use one **Domain** or **URL-prefix** property for `https://arcraiderhacks.com/` only (do not split apex vs www once www redirects).
4. Submit `https://arcraiderhacks.com/sitemap-index.xml` (also linked from `/robots.txt` on the live host).

Builds set `SITE_ORIGIN` and `SITEMAP_ORIGIN` to arcraiderhacks.com so sitemap `<loc>` values match HTML `<link rel="canonical">` on the custom domain.

`src/worker.js` applies redirects in order: **www → apex**, **checkout `/go/*` 302**, **`scripts/redirects.mjs` 301s** (legacy blog/forum slugs, Rust/Dota product paths, `/cheats/*` tier aliases), then static assets. `/robots.txt` always advertises `https://arcraiderhacks.com/sitemap-index.xml`, matching the built sitemap files.

`npm run build` runs `scripts/sync-redirects-file.mjs` so `public/_redirects` mirrors internal 301s from `redirects.mjs` plus checkout 302 lines (Pages/static fallback only; Worker does not read `_redirects`).

### Post-deploy smoke checks

```bash
curl -sI "https://arcraiderhacks.com/blog/rust-cheat-codes-guide" | findstr /i location
curl -sI "https://www.arcraiderhacks.com/reviews/" | findstr /i location
curl -sI "https://arcraiderhacks.com/products/rust" | findstr /i location
curl -sI "https://arcraiderhacks.com/go/rust/" | findstr /i location
```

Expect 301 to the mapped canonical paths (blog cheat-codes, apex host, products hub, then checkout chain for `/go/rust/`).

## IndexNow

Set in Cloudflare **Build** environment (see `.env.example`):

- `INDEXNOW_KEY` — random verification key (hex or alphanumeric)
- `INDEXNOW_HOST=arcraiderhacks.com`

The postbuild script `scripts/indexnow.mjs` writes `dist/<INDEXNOW_KEY>.txt`, copies the key file to `public/`, and pings IndexNow when the key is present. Builds without `INDEXNOW_KEY` skip submission safely.

## Google Analytics 4

Set `PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` in build env. The layout loads GA only when this variable is set at build time.

## Organization schema

Optional `PUBLIC_ORG_SAME_AS` — comma-separated profile URLs (X, YouTube, etc.). When unset, Discord from `PUBLIC_DISCORD_URL` / `src/config/site.ts` is used for `Organization.sameAs`.

## Meta & structured data

- Per-route titles/descriptions: `src/config/pageSeo.ts`, `pageSeoBlog.ts`, `forumSeo.ts`
- Home: `WebSite` + `Organization` only (no duplicate `FAQPage`; full FAQ schema lives on `/faq/`)
- Reviews: `CollectionPage` + `WebPage` with `ItemList` of `Review` items (no `Product` without offers)
- Product pages: `Product` with `AggregateOffer` from `src/data/productPricing.ts`
