import { normalizeSeoPath } from './pageSeo';

export interface SeoContextLink {
  href: string;
  label: string;
}

const LINK_SETS: Record<string, SeoContextLink[]> = {
  '/': [
    { href: '/about/', label: 'Meet the arcraiderhacks store team' },
    { href: '/products/arcraider-hacks/lite/', label: 'Lite ESP and map hack tier listing' },
    { href: '/products/arcraider-hacks/pro/', label: 'Pro aimbot and no recoil page' },
    { href: '/blog/buy-guide/', label: '2026 Arc Raiders checkout buy guide' },
    { href: '/blog/features/', label: 'Tier features module reference' },
    { href: '/forum/choose-tier/', label: 'Forum thread: choosing Lite vs Pro' },
    { href: '/sitemap.xml', label: 'XML sitemap index for crawlers' },
    { href: '/sitemap-pages.xml', label: 'Static pages XML sitemap listing' },
    { href: '/sitemap-blog.xml', label: 'Blog articles XML sitemap file' },
    { href: '/sitemap-forum.xml', label: 'Forum threads XML sitemap listing' },
  ],
  '/faq/': [
    { href: '/about/', label: 'About arcraiderhacks storefront page' },
    { href: '/products/arcraider-hacks/', label: 'Arc Raiders hack tier comparison hub' },
    { href: '/blog/lite-vs-pro/', label: 'Written Lite versus Pro guide' },
    { href: '/blog/eac-patch/', label: 'Anti-cheat patch-day checklist post' },
    { href: '/support/', label: 'Discord loader support tickets' },
    { href: '/forum/eac-init/', label: 'Forum thread: EAC initialize errors' },
    { href: '/sitemap.xml', label: 'Full site XML sitemap index' },
    { href: '/sitemap-pages.xml', label: 'Help-center pages XML sitemap file' },
    { href: '/sitemap-forum.xml', label: 'Forum threads XML sitemap file' },
  ],
  '/about/': [
    { href: '/products/arcraider-hacks/utilities/', label: 'HWID spoofer and UGC utilities hub' },
    { href: '/blog/stream-proof/', label: 'Stream-proof overlay setup for creators' },
    { href: '/forum/', label: 'Buyer forum Q&A archive' },
    { href: '/reviews/', label: 'Verified purchaser review hub' },
    { href: '/blog/buy-guide/', label: 'Checkout buy guide for Lite, Pro, Elite' },
    { href: '/sitemap-pages.xml', label: 'Static pages XML sitemap file' },
    { href: '/sitemap-forum.xml', label: 'Community threads XML sitemap file' },
    { href: '/sitemap.xml', label: 'Primary XML sitemap index URL' },
  ],
  '/blog/': [
    { href: '/blog/aimbot/', label: 'Aimbot and no recoil setup guide' },
    { href: '/blog/buy-guide/', label: 'Lite, Pro, Elite checkout walkthrough' },
    { href: '/blog/features/', label: 'Hack features explained by tier' },
    { href: '/products/arcraider-hacks/elite/', label: 'Elite full-suite product listing' },
    { href: '/forum/pre-install/', label: 'Forum thread: pre-install checklist' },
    { href: '/about/', label: 'Meet arcraiderhacks store background' },
    { href: '/sitemap-pages.xml', label: 'Marketing pages XML sitemap listing' },
    { href: '/sitemap-blog.xml', label: 'Blog posts XML sitemap file' },
  ],
  '/forum/': [
    { href: '/forum/choose-tier/', label: 'Choosing Lite vs Pro tier discussion' },
    { href: '/forum/esp-setup/', label: 'First-time ESP overlay calibration thread' },
    { href: '/blog/buy-guide/', label: 'Written checkout buy guide article' },
    { href: '/products/arcraider-hacks/', label: 'Live tier comparison products hub' },
    { href: '/faq/', label: 'Pre-purchase FAQ answers index' },
    { href: '/sitemap-forum.xml', label: 'Forum discussions XML sitemap' },
    { href: '/sitemap-pages.xml', label: 'Static marketing pages sitemap' },
  ],
  '/forum/choose-tier/': [
    { href: '/blog/buy-guide/', label: 'Source article: 2026 checkout buy guide' },
    { href: '/blog/lite-vs-pro/', label: 'Lite versus Pro feature comparison' },
    { href: '/products/arcraider-hacks/lite/', label: 'Lite tier product modules page' },
    { href: '/products/arcraider-hacks/pro/', label: 'Pro tier combat modules page' },
    { href: '/products/arcraider-hacks/elite/', label: 'Elite full-suite listing page' },
    { href: '/forum/', label: 'Return to buyer forum index' },
    { href: '/sitemap-forum.xml', label: 'All forum thread URLs sitemap' },
  ],
  '/blog/aimbot/': [
    { href: '/blog/bones/', label: 'Weapon bone select profile examples' },
    { href: '/blog/lite-vs-pro/', label: 'Lite vs Pro tier comparison write-up' },
    { href: '/products/arcraider-hacks/pro/', label: 'Pro tier product and pricing page' },
    { href: '/forum/aim-smooth/', label: 'Smoothing aim settings discussion' },
    { href: '/forum/recoil-drill/', label: 'Recoil control drills discussion' },
    { href: '/sitemap-blog.xml', label: 'Blog XML sitemap listing' },
  ],
  '/blog/buy-guide/': [
    { href: '/blog/use-codes/', label: 'Portal unlock after payment guide' },
    { href: '/blog/elite/', label: 'Elite upgrade modules explainer' },
    { href: '/faq/', label: 'Pre-purchase FAQ index page' },
    { href: '/forum/choose-tier/', label: 'Forum thread: tier selection advice' },
    { href: '/products/arcraider-hacks/', label: 'Live products hub with pricing' },
    { href: '/sitemap-blog.xml', label: 'Blog sitemap for all guides' },
  ],
  '/blog/features/': [
    { href: '/blog/esp/', label: 'Lite ESP and radar setup guide' },
    { href: '/blog/skins/', label: 'Skin Changer utility breakdown' },
    { href: '/products/arcraider-hacks/unlock-all/', label: 'Unlock All cosmetics product page' },
    { href: '/forum/esp-setup/', label: 'ESP overlay calibration discussion' },
    { href: '/forum/esp-include/', label: 'ESP filter toggles discussion' },
    { href: '/about/', label: 'Meet arcraiderhacks editorial team page' },
    { href: '/sitemap-blog.xml', label: 'Blog XML sitemap index file' },
  ],
  '/blog/bones/': [
    { href: '/blog/aimbot/', label: 'Pro aimbot buyer configuration guide' },
    { href: '/forum/recoil-drill/', label: 'Per-weapon recoil drills discussion' },
    { href: '/products/arcraider-hacks/pro/', label: 'Pro tier checkout listing page' },
    { href: '/forum/aim-smooth/', label: 'Aim smoothing presets discussion' },
    { href: '/sitemap-blog.xml', label: 'Blog articles sitemap URL' },
  ],
  '/blog/cheat-codes/': [
    { href: '/blog/console-cmds/', label: 'F1 admin console command reference' },
    { href: '/blog/external/', label: 'External loader versus admin-only tools' },
    { href: '/products/arcraider-hacks/lite/', label: 'Lite tier live-server ESP listing' },
    { href: '/forum/f1-console/', label: 'Forum: F1 console scope on live raids' },
    { href: '/forum/choose-tier/', label: 'Forum: tier pick before checkout' },
    { href: '/sitemap-blog.xml', label: 'Blog posts XML sitemap export' },
  ],
  '/blog/console-tips/': [
    { href: '/blog/cheat-codes/', label: 'Fake code lists versus loader article' },
    { href: '/blog/fov/', label: 'FOV tuning paired with ESP guide' },
    { href: '/products/arcraider-hacks/', label: 'Arc Raiders products hub overview' },
    { href: '/forum/spray-safe/', label: 'Forum: spray control practice thread' },
    { href: '/blog/buy-guide/', label: 'Written checkout buy guide for tiers' },
    { href: '/sitemap-blog.xml', label: 'Blog XML sitemap for console guides' },
  ],
};

function slugFromPath(path: string): string {
  return path.split('/').filter(Boolean).pop() ?? '';
}

function forumContextLinks(path: string): SeoContextLink[] {
  const slug = slugFromPath(path);
  const label = slug.replace(/-/g, ' ');
  return [
    { href: '/forum/', label: 'Buyer forum Q&A hub index' },
    { href: '/blog/buy-guide/', label: 'Checkout buy guide for all tiers' },
    { href: '/forum/lite-pro/', label: 'Lite versus Pro differences thread' },
    { href: '/forum/pre-install/', label: 'Pre-install checklist forum answers' },
    { href: '/products/arcraider-hacks/', label: `Products hub related to ${label}` },
    { href: '/sitemap-forum.xml', label: 'Forum thread XML sitemap export' },
  ];
}

function blogContextLinks(path: string): SeoContextLink[] {
  const slug = slugFromPath(path);
  const label = slug.replace(/-/g, ' ');
  return [
    { href: '/blog/', label: 'Checkout and tier blog guides hub' },
    { href: '/blog/buy-guide/', label: 'Dedicated checkout buy guide post' },
    { href: '/blog/features/', label: 'Module features reference article' },
    { href: '/products/arcraider-hacks/', label: `Tier listing for ${label} readers` },
    { href: '/sitemap-blog.xml', label: 'Blog posts XML sitemap file' },
  ];
}

const DEFAULT_LINKS: SeoContextLink[] = [
  { href: '/products/arcraider-hacks/', label: 'Arc Raiders hack products directory' },
  { href: '/blog/', label: 'Checkout and tier blog guides hub' },
  { href: '/faq/', label: 'Tier and checkout FAQ index page' },
  { href: '/sitemap.xml', label: 'Site XML sitemap index file' },
  { href: '/sitemap-pages.xml', label: 'Static pages XML sitemap file' },
];

export function getSeoContextLinks(pathname: string): SeoContextLink[] {
  const path = normalizeSeoPath(pathname);
  if (LINK_SETS[path]) return LINK_SETS[path];
  if (path.startsWith('/forum/') && path !== '/forum/') return forumContextLinks(path);
  if (path.startsWith('/blog/') && path !== '/blog/') return blogContextLinks(path);
  return DEFAULT_LINKS;
}
