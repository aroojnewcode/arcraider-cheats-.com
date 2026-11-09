import type { FaqItem } from '../i18n/types';
import { SITE_LOGO, SITE_URL, SUPPORT_EMAIL } from '../config/site';
import { getProductPlans } from '../data/productPricing';
import { SITE_ORIGIN, absoluteAssetUrl, canonicalUrl, getOrganizationSameAs } from '../config/seo';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Arc Raiders Hacks',
    url: `${SITE_ORIGIN}/`,
    inLanguage: 'en-US',
    description:
      'Shop undetected Arc Raiders hacks for PC—player ESP, loot ESP, soft aim, no recoil and stream-proof overlays at arcraiderhacks.com.',
  };
}

export function organizationSchema() {
  const sameAs = getOrganizationSameAs();

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Arc Raiders Hacks',
    url: `${SITE_ORIGIN}/`,
    logo: absoluteAssetUrl(SITE_LOGO),
    email: SUPPORT_EMAIL,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SUPPORT_EMAIL,
        url: canonicalUrl('/support/'),
        availableLanguage: ['English'],
        areaServed: 'Worldwide',
      },
    ],
  };
}

export function collectionPageSchema(input: {
  name: string;
  description: string;
  url: string;
  aggregateRating?: { ratingValue: number; reviewCount: number };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Arc Raiders Hacks',
      url: `${SITE_ORIGIN}/`,
    },
    ...(input.aggregateRating
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: String(input.aggregateRating.ratingValue),
            reviewCount: String(input.aggregateRating.reviewCount),
            bestRating: '5',
            worstRating: '1',
          },
        }
      : {}),
  };
}

export function webPageSchema(input: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Arc Raiders Hacks',
      url: `${SITE_ORIGIN}/`,
    },
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export interface ReviewListItem {
  name: string;
  title: string;
  body: string;
  date: string;
  rating: number;
}

export function reviewsListSchema(input: {
  pageUrl: string;
  pageName: string;
  description: string;
  reviews: ReviewListItem[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: input.pageName,
    description: input.description,
    url: canonicalUrl(input.pageUrl),
    inLanguage: 'en-US',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: input.reviews.map((r, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Review',
          author: { '@type': 'Person', name: r.name },
          datePublished: new Date(r.date).toISOString().slice(0, 10),
          reviewBody: r.body,
          name: r.title,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: String(r.rating),
            bestRating: '5',
            worstRating: '1',
          },
        },
      })),
    },
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: canonicalUrl(item.url),
    })),
  };
}

export function discussionForumPostingSchema(input: {
  name: string;
  text: string;
  url: string;
  author: string;
  comments: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DiscussionForumPosting',
    headline: input.name,
    articleBody: input.text,
    url: canonicalUrl(input.url),
    author: { '@type': 'Person', name: input.author },
    commentCount: input.comments,
    isPartOf: { '@type': 'CollectionPage', name: 'Arc Raiders Hacks Community Forum', url: canonicalUrl('/forum/') },
  };
}

function offerUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return canonicalUrl(path);
}

export function productSchema(input: {
  name: string;
  description: string;
  url: string;
  offerUrl: string;
  image?: string;
  sku?: string;
  productSlug?: string;
}) {
  const checkout = offerUrl(input.offerUrl);
  const seller = {
    '@type': 'Organization' as const,
    name: 'Arc Raiders Hacks',
  };
  const plans = input.productSlug ? getProductPlans(input.productSlug) : [];
  const pricedOffers =
    plans.length > 0
      ? {
          '@type': 'AggregateOffer' as const,
          priceCurrency: 'USD',
          lowPrice: String(Math.min(...plans.map((p) => p.priceUsd))),
          highPrice: String(Math.max(...plans.map((p) => p.priceUsd))),
          offerCount: plans.length,
          offers: plans.map((plan) => ({
            '@type': 'Offer' as const,
            name: plan.label,
            price: String(plan.priceUsd),
            priceCurrency: 'USD',
            url: checkout,
            availability: 'https://schema.org/InStock',
            seller,
          })),
        }
      : {
          '@type': 'Offer' as const,
          url: checkout,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          seller,
        };

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    sku: input.sku ?? input.url.replace(/\//g, '-'),
    brand: {
      '@type': 'Brand',
      name: 'Arc Raiders Hacks',
    },
    ...(input.image ? { image: absoluteAssetUrl(input.image) } : {}),
    offers: pricedOffers,
  };
}

/** @deprecated Prefer productSchema for product/cheat detail pages. */
export function softwareApplicationSchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
  offerUrl?: string;
}) {
  return productSchema({
    name: input.name,
    description: input.description,
    url: input.url,
    offerUrl: input.offerUrl ?? input.url,
    image: input.image,
  });
}

export function articleSchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    ...(input.image ? { image: absoluteAssetUrl(input.image) } : {}),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: 'en-US',
    author: {
      '@type': 'Organization',
      name: 'Arc Raiders Hacks',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Arc Raiders Hacks',
      logo: {
        '@type': 'ImageObject',
        url: absoluteAssetUrl(SITE_LOGO),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl(input.url),
    },
  };
}

export function parseBlogDate(date: string): string {
  const parsed = Date.parse(date);
  if (Number.isNaN(parsed)) return new Date().toISOString().slice(0, 10);
  return new Date(parsed).toISOString().slice(0, 10);
}
