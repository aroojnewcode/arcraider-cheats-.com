import type { SitemapItem } from '@astrojs/sitemap';
import { blogPosts } from '../data/blog';
import { forumPosts } from '../data/forum';
import { parseBlogDate } from '../utils/schema';

const buildDate = new Date().toISOString().slice(0, 10);

const blogLastmod = new Map(
  blogPosts.map((post) => [`/blog/${post.slug}/`, parseBlogDate(post.date)] as const),
);

const forumLastmod = new Map(
  forumPosts.map((post) => {
    const sourceSlug = post.sourcePath?.split('/').filter(Boolean).at(-1);
    const sourceArticle = sourceSlug ? blogPosts.find((item) => item.slug === sourceSlug) : undefined;
    const lastmod = sourceArticle ? parseBlogDate(sourceArticle.date) : buildDate;
    return [`/forum/${post.slug}/`, lastmod] as const;
  }),
);

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (path.includes('/404') || path.startsWith('/go/') || path.includes('/rss.xml')) {
    return undefined;
  }

  const canonical = new URL(item.url);
  if (canonical.pathname !== '/' && !canonical.pathname.endsWith('/')) {
    canonical.pathname = `${canonical.pathname}/`;
  }
  item.url = canonical.href;

  item.lastmod = buildDate;

  if (path === '/') {
    item.priority = 1;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/blog/') {
    item.priority = 0.9;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/forum/') {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    const forumDates = [...forumLastmod.values()].filter(Boolean).sort();
    if (forumDates.length > 0) {
      item.lastmod = forumDates.at(-1) ?? buildDate;
    }
    return item;
  }

  if (path.startsWith('/forum/')) {
    item.priority = 0.6;
    item.changefreq = 'monthly';
    item.lastmod = forumLastmod.get(path) ?? buildDate;
    return item;
  }

  if (path.startsWith('/blog/')) {
    item.priority = 0.7;
    item.changefreq = 'monthly';
    item.lastmod = blogLastmod.get(path) ?? buildDate;
    return item;
  }

  if (path.startsWith('/products/')) {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    return item;
  }

  if (
    path === '/about/' ||
    path === '/support/' ||
    path === '/privacy/' ||
    path === '/terms/' ||
    path === '/faq/'
  ) {
    item.priority = 0.5;
    item.changefreq = 'yearly';
    return item;
  }

  item.priority = 0.6;
  item.changefreq = 'monthly';
  return item;
}
