/**
 * Unique titles/descriptions per route — all Arc Raiders-focused, no duplicate SERP copy.
 * Titles ~50–60 chars; descriptions ~140–155 chars.
 */

import { BLOG_PAGE_SEO } from './pageSeoBlog';
import { FORUM_PAGE_SEO } from './forumSeo';
import type { PageSeoEntry } from './pageSeoTypes';

export type { PageSeoEntry } from './pageSeoTypes';

const CORE_PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Buy Arc Raiders Hacks 2026 | Undetected ESP & Aimbot',
    description:
      'Shop undetected Arc Raiders hacks for PC—player ESP, loot ESP, soft aim, no recoil and stream-proof overlays. Compare Lite, Pro and Elite.',
    h1: 'Arc Raiders Hacks',
  },
  '/products/arcraider-hacks/': {
    title: 'All Arc Raiders Hack Products | Lite, Pro, Elite Hub',
    description:
      'Products hub for undetected Arc Raiders hacks on PC—compare Lite, Pro and Elite tiers plus HWID, UGC and utilities. Module lists, buy guides and checkout.',
    h1: 'All Arc Raiders hack products & utilities',
  },
  '/products/arcraider-hacks/lite/': {
    title: 'Arc Raiders Lite Hacks for Sale | ESP, Radar & FOV',
    description:
      'Purchase Lite tier: player ESP, loot ESP, radar and FOV hack without aimbot—low-profile awareness tools with stream-proof overlay on PC.',
    h1: 'Arc Raiders Lite hacks — ESP, radar & FOV',
  },
  '/products/arcraider-hacks/pro/': {
    title: 'Arc Raiders Pro Hacks for Sale | ESP, Aimbot & Recoil',
    description:
      'Purchase Pro tier: every Lite module plus aimbot, Soft Aim, bone select and no recoil—combat-ready Arc Raiders hacks with secure checkout.',
    h1: 'Arc Raiders Pro hacks — ESP plus aimbot & recoil',
  },
  '/products/arcraider-hacks/elite/': {
    title: 'Arc Raiders Elite Hacks for Sale | Full ESP Suite',
    description:
      'Purchase Elite tier: skeleton ESP, aimbot, no recoil, loot route assist, Skin Changer and priority EAC patch queue for Surface and underground raids.',
    h1: 'Arc Raiders Elite hacks — full ESP & loot suite',
  },
  '/products/arcraider-hacks/hwid-spoofer/': {
    title: 'Arc Raiders HWID Spoofer for Sale | Reset After EAC Ban',
    description:
      'Buy an Arc Raiders HWID spoofer to rotate disk, MAC and GPU IDs after an Easy Anti-Cheat hardware flag. Portal setup guide and Discord support included.',
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
    title: 'Compare Hack Utilities | HWID Spoofer & UGC',
    description:
      'Utility comparison for PC—HWID Spoofer vs UGC recovery use cases, feature lists and product pages. Skin Changer details live on Unlock All.',
  },
  '/blog/': {
    title: 'Arc Raiders Hack Buy Guides | Lite, Pro & Elite',
    description:
      'Tier comparison guides, ESP and aimbot explainers, and checkout walkthroughs—Arc Raiders hack buy guides before secure checkout on PC.',
    h1: 'Arc Raiders hack buy guides',
  },
  '/forum/': {
    title: 'Buyer Forum | ESP, Radar & Tier Q&A',
    description:
      'Buyer forum: ESP and radar setup Q&A, HWID spoofer help, overlay tuning and tier picks before secure checkout on arcraiderhacks.com.',
    h1: 'Buyer forum — ESP, radar & utility Q&A',
  },
  '/forum/choose-tier/': {
    title: 'Choose Arc Raiders Hacks Tier | Lite, Pro or Elite',
    description:
      'Pick Lite, Pro or Elite by feature set—awareness-only vs aimbot and full Elite suite—then follow secure checkout on arcraiderhacks.com.',
    h1: 'How to choose the right Arc Raiders hacks tier to buy',
  },
  '/reviews/': {
    title: 'Arc Raiders Hacks Reviews | Buyer Ratings & Feedback',
    description:
      'Read verified Arc Raiders Hacks reviews for Elite ESP and aimbot, HWID Spoofer, UGC recovery and Skin Changer—real buyer ratings before you checkout.',
    h1: 'Arc Raiders Hacks reviews — ESP, aimbot & spoofer',
  },
  '/faq/': {
    title: 'Buying FAQ | Arc Raiders tiers, Checkout & EAC Risk',
    description:
      'FAQ before you buy: Windows and Steam setup, Lite vs Pro vs Elite, ban risk, checkout delivery and HWID resets—clear answers on arcraiderhacks.com.',
    h1: 'Buying FAQ — Arc Raiders tiers, checkout & EAC risk',
  },
  '/terms/': {
    title: 'Arc Raiders Hacks Terms of Sale | License & Refunds',
    description:
      'Legal terms for purchasing Arc Raiders hack licenses on arcraiderhacks.com—delivery, personal-use limits, refunds, EAC risk and acceptable product use.',
  },
  '/about/': {
    title: 'About Arc Raiders Hacks Store | Loader Updates & Help',
    description:
      'Meet the arcraiderhacks.com team—Lite, Pro and Elite tiers, utilities, patch-day loader updates and Discord help after checkout on Steam PC.',
    h1: 'About our Arc Raiders Hacks store',
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

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  ...CORE_PAGE_SEO,
  ...BLOG_PAGE_SEO,
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  const path = normalizeSeoPath(pathname);
  return PAGE_SEO[path] ?? FORUM_PAGE_SEO[path];
}
