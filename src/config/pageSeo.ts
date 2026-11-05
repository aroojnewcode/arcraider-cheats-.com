/**
 * Unique titles/descriptions per route — all Arc Raiders-focused, no duplicate SERP copy.
 * Titles ~50–60 chars; descriptions ~140–155 chars.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
  h1?: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Buy Arc Raiders Hacks 2026 | Undetected ESP & Aimbot',
    description:
      'Shop undetected Arc Raiders hacks for PC—player ESP, loot ESP, soft aim, no recoil and stream-proof overlays. Compare Lite, Pro and Elite.',
    h1: 'Arc Raiders Hacks 2026 — Undetected ESP, Aimbot & Wallhacks for PC',
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
    title: 'Checkout – and secure payment flow at arcraiderhacks',
    description:
      'Checkout tips and secure payment flow—tier picks, portal access, HWID recovery notes, and post-purchase loader steps at arcraiderhacks.com.',
    h1: 'Checkout at arcraiderhacks — secure payment flow & Lite, Pro, Elite buy guides for PC',
  },
  '/forum/': {
    title: 'Buyer Forum – ESP and radar setup Q&A from our guides',
    description:
      'Buyer forum: ESP and radar setup Q&A, HWID spoofer help, overlay tuning and tier picks before secure checkout on arcraiderhacks.com.',
    h1: 'Buyer Forum — ESP and radar setup Q&A from our guides, spoofer help & utility Q&A',
  },
  '/forum/choose-tier/': {
    title: 'How do I choose the right Arc Raiders hacks tier to buy?',
    description:
      'Tier: Pick Lite, Pro or Elite hack tools by feature set, then follow secure checkout on arcraiderhacks.com. 48 d/community · Arc Raiders Hacks guide team.',
    h1: 'How to choose the right Arc Raiders hacks tier: Lite, Pro or Elite to buy',
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
    h1: 'Buying FAQ — Arc Raiders Tiers, Checkout & EAC Risk',
  },
  '/terms/': {
    title: 'Arc Raiders Hacks Terms of Sale | License & Refunds',
    description:
      'Legal terms for purchasing Arc Raiders hack licenses on arcraiderhacks.com—delivery, personal-use limits, refunds, EAC risk and acceptable product use.',
  },
  '/about/': {
    title: 'Cheats Store – patch-day loader updates and Discord help',
    description:
      'Cheats Store: Meet the arcraiderhacks.com hacks store team—tiers, utilities, patch-day loader updates and Discord help after checkout on PC.',
    h1: 'About Our Cheats Store — patch-day loader updates & Discord help on Steam PC',
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
  '/blog/aimbot/': {
    title: 'Aimbot – Bone Select and No Recoil | Arc Raiders Hacks',
    description:
      'Aimbot and no recoil for Arc Raiders Pro tier—Bone Select, Soft Aim, Trigger Bot and recoil control before secure checkout.',
    h1: 'Arc Raiders Aimbot – Bone Select and No Recoil: Pro tier combat tools | Hacks',
  },
  '/blog/buy-guide/': {
    title: 'Arc Raiders checkout buy guide: Lite, Pro & Elite | Hacks',
    description:
      'Buy guide: step-by-step Arc Raiders checkout—choose Lite, Pro or Elite, pay securely and unlock the operator portal for loader download.',
    h1: 'Arc Raiders hacks checkout buy guide: Lite, Pro & Elite (2026)',
  },
  '/blog/console-tips/': {
    title: 'Arc Raiders – Admin commands are a warm-up, not a product',
    description:
      'Arc Raiders: Outgrown private-server practice? Compare undetected ESP and aimbot tiers for live PvP—Lite, Pro and Elite with secure checkout.',
    h1: 'From practice commands to live Arc Raiders ESP, aimbot & hacks',
  },
  '/blog/cheat-codes/': {
    title: 'Codes – See what works on live extraction raids and when a',
    description:
      'Admin console codes only work where you are admin. See what works on live extraction raids and when a private loader with ESP and aimbot is the right buy.',
    h1: 'Codes: Arc Raiders loader vs fake lists — what works on live extraction raids and when',
  },
  '/blog/bones/': {
    title: 'Buy Pro aimbot bone select & weapon | Arc Raiders Hacks',
    description:
      'Buy Pro for aimbot bone select and per-weapon recoil profiles on Kettle, Tempest, Rattler and Ferro. See example profiles and get access.',
    h1: 'Buy Pro Arc Raiders hacks aimbot bone select & weapon profiles',
  },
  '/blog/features/': {
    title: 'Features – Arc Raiders Hacks by tier | Meet arcraiderhacks',
    description:
      'Features by tier for Arc Raiders hacks—ESP, aimbot, no recoil, loot assist and Skin Changer on Lite, Pro and Elite before you buy.',
    h1: 'Meet arcraiderhacks — Arc Raiders Hacks cheat features by tier: ESP, aimbot, no recoil & skins',
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
