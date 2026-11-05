/**
 * Unique titles/descriptions per route — all Arc Raiders-focused, no duplicate SERP copy.
 * Titles ~50–60 chars; descriptions ~140–155 chars.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Buy Arc Raiders Hacks 2026 | Undetected ESP & Aimbot',
    description:
      'Shop undetected Arc Raiders hacks for PC—player ESP, loot ESP, soft aim, no recoil and stream-proof overlays. Compare Lite, Pro and Elite at arcraiderhacks.com.',
  },
  '/products/arcraider-hacks/': {
    title: 'All Arc Raiders Hack Products | Lite, Pro, Elite Hub',
    description:
      'Products hub for undetected Arc Raiders hacks on PC—compare Lite, Pro and Elite tiers plus HWID, UGC and utilities. Module lists, buy guides and checkout.',
  },
  '/products/arcraider-hacks/elite/': {
    title: 'Arc Raiders Elite Cheats for Sale | ESP, Aimbot, Loot Assist',
    description:
      'Purchase Elite tier: skeleton ESP, aimbot, no recoil, loot route assist, Skin Changer and priority EAC patch queue for Surface raids and underground runs.',
  },
  '/products/arcraider-hacks/hwid-spoofer/': {
    title: 'Arc Raiders HWID Spoofer for Sale | Reset After EAC Ban',
    description:
      'Buy a Arc Raiders HWID spoofer to rotate disk, MAC and GPU IDs after an Easy Anti-Cheat hardware flag. Portal setup guide and Discord support included.',
  },
  '/products/arcraider-hacks/ugc/': {
    title: 'Arc Raiders UGC Recovery Tool | Steam & Ban Appeals',
    description:
      'UGC appeal workspace for platform holds, EAC bans and server restrictions—document cases, track status and rebuild account access with structured workflows.',
  },
  '/products/arcraider-hacks/unlock-all/': {
    title: 'Unlock All & Skin Changer | Local Cosmetics',
    description:
      'Unlock All and Skin Changer for local weapon and clothing previews on PC—client-side cosmetics without market purchases; standalone or with Elite tier.',
  },
  '/products/arcraider-hacks/utilities/': {
    title: 'Compare Cheat Utilities | HWID Spoofer & UGC',
    description:
      'Cheat utility comparison for PC—HWID Spoofer vs UGC recovery use cases, feature lists and product pages. Skin Changer details live on Unlock All.',
  },
  '/blog/': {
    title: 'Buy Guides & Checkout Tips | Lite, Pro, Elite',
    description:
      'Step-by-step buy guides and checkout tips—tier picks, ESP and aimbot modules, HWID recovery after bans, and secure payment flow at arcraiderhacks.com.',
  },
  '/forum/': {
    title: 'Buyer Forum Q&A | ESP, Radar & Spoofer Help',
    description:
      'Arc Raiders buyer forum: ESP and radar setup Q&A from our guides—overlay tuning, HWID tools, patch readiness and tier picks before checkout.',
  },
  '/reviews/': {
    title: 'Arc Raiders Hacks Reviews | Buyer Ratings & Feedback',
    description:
      'Read verified Arc Raiders Hacks reviews for Elite ESP and aimbot, HWID Spoofer, UGC recovery and Skin Changer—real buyer ratings before you checkout.',
  },
  '/faq/': {
    title: 'Buying FAQ | Arc Raiders tiers, Checkout & EAC Risk',
    description:
      'FAQ before you buy: Windows and Steam setup, Lite vs Pro vs Elite, ban risk, checkout delivery and HWID resets—clear answers on arcraiderhacks.com.',
  },
  '/terms/': {
    title: 'Arc Raiders Hacks Terms of Sale | License & Refunds',
    description:
      'Legal terms for purchasing Arc Raiders hack licenses on arcraiderhacks.com—delivery, personal-use limits, refunds, EAC risk and acceptable product use.',
  },
  '/about/': {
    title: 'About Our Cheats Store | Steam PC Tools',
    description:
      'Meet the arcraiderhacks.com hacks store team—tiers, utilities, patch-day loader updates and Discord help after checkout on PC.',
  },
  '/support/': {
    title: 'Arc Raiders Hacks Discord Support | Loader Help Tickets',
    description:
      'Discord support for loader errors, HWID Spoofer setup and checkout—open a ticket with your order ID, issue type and screenshots for fast help.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Data, Cookies & Your Rights',
    description:
      'Privacy policy for arcraiderhacks.com—cookies, analytics, Discord ticket data, checkout partners, retention and your rights when browsing or purchasing.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
