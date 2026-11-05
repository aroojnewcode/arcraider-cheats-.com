import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/** Zadeyo affiliate checkout destinations. */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  arcRaider: 'arc-raiders',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Zadeyo affiliate URL for visible “Get access” / buy CTAs (same tab — no target=_blank). */
export function checkoutPath(product: CheckoutProduct = 'arcRaider'): string {
  return CHECKOUT[product];
}

/** Internal /go/* path (blog links, bookmarks); 302 to Zadeyo via public/_redirects. */
export function checkoutRedirectPath(product: CheckoutProduct = 'arcRaider'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Alias used by /go/[slug] static redirect pages. */
export function checkoutExternalUrl(product: CheckoutProduct = 'arcRaider'): string {
  return CHECKOUT[product];
}

/** Default product checkout redirect (replaces legacy Discord CTAs). */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('arcRaider');

/** Map internal product slugs to checkout redirect paths. */
export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'unlock-all':
      return checkoutPath('skinChanger');
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'ugc':
    case 'account-recovery':
      return checkoutPath('ugc');
    case 'lite':
    case 'pro':
    case 'elite':
    default:
      return checkoutPath('arcRaider');
  }
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  const normalized = href.startsWith('/') ? href : `/${href}`;
  const goMatch = normalized.match(/^\/go\/([^/]+)\/?$/);
  if (goMatch) {
    const product = CHECKOUT_SLUG_TO_PRODUCT[goMatch[1]];
    if (product) return checkoutPath(product);
  }

  if (!href.startsWith('http')) {
    return normalized;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}&`) || href.startsWith(`${url}?`)) {
      return checkoutPath(product);
    }
  }

  // Zadeyo affiliate / legacy product paths → internal checkout
  if (href.includes('%2Fproducts%2Fhwid-spoofer') || href.includes('/products/hwid-spoofer')) {
    return checkoutPath('hwidSpoofer');
  }
  if (href.includes('%2Fproducts%2Fskin-changer') || href.includes('/products/skin-changer')) {
    return checkoutPath('skinChanger');
  }
  if (href.includes('%2Fproducts%2Fugc') || href.includes('/products/ugc')) {
    return checkoutPath('ugc');
  }
  if (href.includes('%2Fproducts%2Fcloud-dma') || href.includes('/products/cloud-dma')) {
    return checkoutPath('arcRaider');
  }
  if (href.includes('%2Fproducts%2Farc-raiders') || href.includes('/products/arc-raiders')) {
    return checkoutPath('arcRaider');
  }

  return href;
}
