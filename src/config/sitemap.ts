import type { SitemapItem } from '@astrojs/sitemap';
import { blogPosts } from '../data/blog';
import { forumPosts } from '../data/forum';
import { parseBlogDate } from '../utils/schema';

const blogLastmod = new Map(
  blogPosts.map((post) => [`/blog/${post.slug}/`, parseBlogDate(post.date)] as const),
);

const forumLastmod = new Map(
  forumPosts.map((post) => {
    const sourceSlug = post.sourcePath?.split('/').filter(Boolean).at(-1);
    const sourceArticle = sourceSlug ? blogPosts.find((item) => item.slug === sourceSlug) : undefined;
    const lastmod = sourceArticle ? parseBlogDate(sourceArticle.date) : undefined;
    return [`/forum/${post.slug}/`, lastmod] as const;
  }),
);

function latestBlogDate(): string | undefined {
  const dates = [...blogLastmod.values()].filter(Boolean).sort();
  return dates.at(-1);
}

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

/** Omit lastmod on static/product URLs so we do not emit misleading build-time dates. */
function omitLastmod(item: SitemapItem): SitemapItem {
  delete item.lastmod;
  return item;
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

  delete item.lastmod;

  if (path === '/') {
    item.priority = 1;
    item.changefreq = 'weekly';
    const latest = latestBlogDate();
    if (latest) item.lastmod = latest;
    return item;
  }

  if (path === '/blog/') {
    item.priority = 0.9;
    item.changefreq = 'weekly';
    const latest = latestBlogDate();
    if (latest) item.lastmod = latest;
    return item;
  }

  if (path === '/forum/') {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    const forumDates = [...forumLastmod.values()].filter(Boolean).sort();
    if (forumDates.length > 0) item.lastmod = forumDates.at(-1);
    return item;
  }

  if (path.startsWith('/forum/')) {
    item.priority = 0.6;
    item.changefreq = 'monthly';
    const mod = forumLastmod.get(path);
    if (mod) item.lastmod = mod;
    return item;
  }

  if (path.startsWith('/blog/')) {
    item.priority = 0.7;
    item.changefreq = 'monthly';
    const mod = blogLastmod.get(path);
    if (mod) item.lastmod = mod;
    return item;
  }

  if (path.startsWith('/products/')) {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    return omitLastmod(item);
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
    return omitLastmod(item);
  }

  item.priority = 0.6;
  item.changefreq = 'monthly';
  return omitLastmod(item);
}
