import { t } from '../i18n';
import { PRIMARY_HERO_IMAGE } from './media';
import { SITE_DOMAIN as INDEXNOW_HOST_NAME } from './site';
import { getPageSeoEntry } from './pageSeo';

export const SITE_ORIGIN = `https://${t.site.domain}`;

export const DEFAULT_OG_IMAGE = PRIMARY_HERO_IMAGE;

export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string | undefined;

/** @example @arcraiderhacks */
export const TWITTER_SITE = import.meta.env.PUBLIC_TWITTER_SITE as string | undefined;

export const TWITTER_CREATOR = import.meta.env.PUBLIC_TWITTER_CREATOR as string | undefined;

/** Comma-separated profile URLs (X, YouTube, etc.) for Organization sameAs. */
export function getOrganizationSameAs(): string[] {
  const raw = import.meta.env.PUBLIC_ORG_SAME_AS as string | undefined;
  if (!raw?.trim()) return [];
  return raw
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY as string | undefined;

export function canonicalUrl(pathname: string, origin: string = SITE_ORIGIN): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  const base = origin.replace(/\/$/, '');
  return `${base}${path}`;
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function resolvePageSeo(pathname: string): { title: string; description: string } {
  const entry = getPageSeoEntry(pathname);
  if (entry) {
    return {
      title: normalizeDocumentTitle(entry.title),
      description: entry.description,
    };
  }
  return {
    title: normalizeDocumentTitle(t.site.title),
    description: t.site.description,
  };
}

/** Avoid duplicate brand tokens and dangling " | " in <title>. */
export function normalizeDocumentTitle(title: string): string {
  const brand = t.site.name;
  let normalized = title.trim();
  normalized = normalized.replace(/\s+\|\s*$/, '').trim();
  const brandSuffix = ` | ${brand}`;
  if (normalized.endsWith(brandSuffix)) {
    const withoutSuffix = normalized.slice(0, -brandSuffix.length).trim();
    const brandLower = brand.toLowerCase();
    if (withoutSuffix.toLowerCase().includes(brandLower)) {
      normalized = withoutSuffix;
    }
  }
  return normalized;
}

export function pageTitle(keyword: string, brand = t.site.name): string {
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${keyword}${suffix}`.length <= max) return `${keyword}${suffix}`;
  const trimmed = keyword.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const RSS_FEED_PATH = '/rss.xml';

/** Used by IndexNow postbuild script. */
export const INDEXNOW_HOST = INDEXNOW_HOST_NAME;
