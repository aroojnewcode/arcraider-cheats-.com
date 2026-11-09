# SEO & canonical host

## Canonical domain

Production canonical origin is **`https://arcraiderhacks.com`** (`src/config/site.ts`, `scripts/cf-build.mjs`, sitemap finalize).

1. Add **arcraiderhacks.com** (and `www` if used) as a **Custom Domain** on the Cloudflare Worker `arcraider-cheats--com` in the same account as the zone.
2. When the zone is available, uncomment and set `[[routes]]` in `wrangler.toml` (see file comments).
3. In **Google Search Console**, use one **Domain** or **URL-prefix** property for `https://arcraiderhacks.com/` only.
4. Submit `https://arcraiderhacks.com/sitemap-index.xml` (also linked from `/robots.txt` on the live host).

Builds set `SITE_ORIGIN` and `SITEMAP_ORIGIN` to arcraiderhacks.com so sitemap `<loc>` values match HTML `<link rel="canonical">` on the custom domain.

`src/worker.js` applies the same **301** rules as `scripts/redirects.mjs` (legacy blog/forum slugs, trailing slashes) before serving static assets. `/robots.txt` always advertises `https://arcraiderhacks.com/sitemap-index.xml`, matching the built sitemap files.

## IndexNow

Set `INDEXNOW_KEY` in CI/Cloudflare build env. The postbuild script writes `dist/<key>.txt` and copies it to `public/` for verification.

## Meta & structured data

- Per-route titles/descriptions: `src/config/pageSeo.ts`, `pageSeoBlog.ts`, `forumSeo.ts`
- Organization `sameAs`: `PUBLIC_ORG_SAME_AS` or default Discord invite from `src/config/site.ts`
