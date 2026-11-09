import { resolvePathRedirect } from '../scripts/redirects.mjs';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';

/** Must match SITE_ORIGIN / sitemap finalize host (docs/SEO-DEPLOY.md). */
const CANONICAL_ORIGIN = 'https://arcraiderhacks.com';

function redirectResponse(target, status = 301) {
  return new Response(null, {
    status,
    headers: { Location: target },
  });
}

/** Serve sitemap XML with a real application/xml content-type on every host. */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (url.hostname.toLowerCase() === 'www.arcraiderhacks.com') {
      url.hostname = 'arcraiderhacks.com';
      url.protocol = 'https:';
      return redirectResponse(url.href, 301);
    }

    const checkoutRedirect = resolveCheckoutPathRedirect(pathname);
    if (checkoutRedirect) {
      return redirectResponse(new URL(checkoutRedirect, url).href, 302);
    }

    const pathRedirect = resolvePathRedirect(pathname);
    if (pathRedirect) {
      const destination = `${pathRedirect}${url.search}${url.hash}`;
      return redirectResponse(new URL(destination, url).href, 301);
    }

    const path = pathname.replace(/\/$/, '') || '/';

    if (path === '/robots.txt') {
      const body = `User-agent: *
Allow: /

Disallow: /go/

Sitemap: ${CANONICAL_ORIGIN}/sitemap-index.xml
`;
      return new Response(body, {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }

    const isSitemap =
      path === '/sitemap.xml' ||
      path === '/sitemap-index.xml' ||
      path === '/sitemap-pages.xml' ||
      path === '/sitemap-blog.xml' ||
      path === '/sitemap-forum.xml' ||
      path === '/sitemap-0.xml';

    if (isSitemap) {
      const assetUrl = new URL(request.url);
      assetUrl.pathname = path;
      const res = await env.ASSETS.fetch(new Request(assetUrl, request));
      if (res.ok) {
        const headers = new Headers(res.headers);
        if (path.endsWith('.xml')) {
          headers.set('Content-Type', 'application/xml; charset=utf-8');
        } else {
          headers.set('Content-Type', 'text/plain; charset=utf-8');
        }
        return new Response(res.body, { status: 200, headers });
      }
    }

    return env.ASSETS.fetch(request);
  },
};
