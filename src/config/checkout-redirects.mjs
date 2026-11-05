/** Primary Zadeyo affiliate checkout — all Get access / buy CTAs. */
export const ARC_RAIDERS_CHECKOUT_URL =
  'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Farc-raiders';

/** Checkout destinations keyed by internal product id (same affiliate link for all buy CTAs). */
export const CHECKOUT_URLS = {
  arcRaider: ARC_RAIDERS_CHECKOUT_URL,
  skinChanger: ARC_RAIDERS_CHECKOUT_URL,
  hwidSpoofer: ARC_RAIDERS_CHECKOUT_URL,
  ugc: ARC_RAIDERS_CHECKOUT_URL,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/arc-raiders', CHECKOUT_URLS.arcRaider],
  ['/go/arc-raiders/', CHECKOUT_URLS.arcRaider],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
