/** Serve sitemap XML with a real application/xml content-type on every host. */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, '') || '/';

    if (path === '/robots.txt') {
      const origin = `${url.protocol}//${url.host}`;
      const body = `User-agent: *
Allow: /

Disallow: /go/

Sitemap: ${origin}/sitemap-index.xml
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
