# Search Console workflow (arcraiderhacks.com)

Use this checklist after each content or SEO deploy.

## Property & sitemap

1. Open [Google Search Console](https://search.google.com/search-console) and add the **domain** property for `arcraiderhacks.com` if it is not already there.
2. Under **Sitemaps**, submit: `https://arcraiderhacks.com/sitemap-index.xml`
3. Confirm the sitemap reports success (no “couldn’t fetch” errors).

## After deploy

1. Use **URL Inspection** on the homepage and any changed product or blog URLs.
2. Request indexing for pages whose title or meta description changed in `src/config/pageSeo.ts`.
3. Recheck **Coverage** / **Pages** for soft 404s after route renames.

## Query → page cheat sheet

| Intent | Primary URL |
|--------|-------------|
| Arc Raiders hacks, arc raiders hacks | `/` |
| elite suite | `/products/arcraider-hacks/elite/` |
| hwid, skin changer | `/products/arcraider-hacks/utilities/` |
| setup / patch day | `/blog/` |
| FAQ | `/faq/` |

Edit titles and descriptions in `src/config/pageSeo.ts` once Search Console shows real impressions.
