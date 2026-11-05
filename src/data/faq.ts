import type { IconName } from '../components/icons/types';
import { blogPostPath, normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const elite = link('Arc Raiders Elite', productPath('elite'));
const lite = link('Lite tier (ESP & radar)', ROUTES.products);
const pro = link('Pro tier (aimbot & no recoil)', ROUTES.products);
const productsHub = link('Arc Raiders hack products', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('hwid-spoofer'));
const ugc = link('UGC', productPath('ugc'));
const skin = link('Skin Changer', productPath('unlock-all'));
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

const guideFeatures = link('Arc Raiders hacks features guide', blogPostPath('features'));
const guideLiteVsPro = link('Lite vs Pro guide', blogPostPath('lite-vs-pro'));
const guideElite = link('Elite tier guide', blogPostPath('elite'));
const guideEsp = link('ESP and radar setup guide', blogPostPath('esp'));
const guidePatch = link('EAC patch day checklist', blogPostPath('eac-patch'));
const guideBuy = link('how to buy Arc Raiders hacks in 2026', blogPostPath('buy-guide'));
const guideExternal = link('external cheat guide', blogPostPath('external'));
const guideStream = link('stream-proof setup guide', blogPostPath('stream-proof'));
const guideAdmin = link('in-game console and debug commands guide', blogPostPath('cheat-codes'));
const guideHwid = link('HWID spoofer vs new account guide', blogPostPath('hwid'));
const guideEacInit = link('EAC failed to initialize troubleshooting guide', blogPostPath('eac-error'));
const guideRecoil = link('aimbot and recoil scripts guide', blogPostPath('aimbot'));

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Arc Raiders hacks are online?',
    a: a('The live status banner is on arcraiderhacks.com and in the Discord #status channel. Always check it after an Arc Raiders update or a major anti-cheat patch, or an Easy Anti-Cheat (EAC) update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Arc Raiders, and start the loader before the game so EAC sees a clean launch order.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using Arc Raiders hacks?',
    a: a('Yes—any third-party software carries risk. EAC, Embark Studios server-side checks and admin reports all evolve, and Arc Raiders bans can follow your Embark account and hardware. Read the current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Arc Raiders on Steam for PC, Windows 10/11 64-bit only. Arc Raiders Console Edition, macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${productsHub} lists hack tiers, ${hwid}, ${ugc}, and ${skin} with feature lists and checkout via our partner.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Arc Raiders ESP and what does it show?',
    a: `Player ESP draws boxes, names, health, distance and skeletons through walls and terrain. Loot ESP marks containers, stashes, salvage nodes and dropped items. ${lite} covers the full awareness overlay. ${pro} and ${elite} add aim assist on top. Setup details are in the ${guideEsp}.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-scripts',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aimbot?',
    a: `ESP and radar are information overlays—they never move your mouse. Aimbot, Soft Aim and No Recoil are aim assist modules on ${pro} and ${elite}. You can run ESP-only on ${lite} and keep a much quieter footprint on a server.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Which tier do I need for ESP only?',
    a: `${lite} is awareness only: Player ESP, Loot & Resource ESP, radar, FOV hack and stream-proof overlay. ${pro} adds Aimbot, Soft Aim and No Recoil. ${elite} adds loot assist tools, Skin Changer and priority patches.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Which tier includes Aimbot and No Recoil?',
    a: `${pro} ships Aimbot, Soft Aim, Bone Select, Trigger Bot and No Recoil / Spread. ${elite} includes everything in Pro plus Loot Route Assist and Skin Changer. ${lite} has no aim assist—it is overlay only.`,
    scopes: ['pro'],
  },
  {
    id: 'aim-modes',
    topic: 'scripts',
    icon: 'faqEspVsScripts',
    q: 'Aimbot or Soft Aim—which should I use?',
    a: `Aimbot locks on hard inside its FOV circle and is the most obvious in a killcam or spectate. Soft Aim only pulls the crosshair toward the target with smoothing, which looks closer to a human. Start with Soft Aim, a small FOV and a humanized smoothing value. See the ${guideRecoil}.`,
    scopes: ['pro', 'elite'],
  },
  {
    id: 'no-recoil',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'How does No Recoil work in Arc Raiders?',
    a: `No Recoil / Spread compensates for weapon recoil with per-weapon profiles—Kettle, Tempest, Rattler, Hullcracker, Ferro and more. Keep compensation below 100% so sprays still look natural, and test each weapon on a private or practice server before wiping your kit on a live one.`,
    scopes: ['pro', 'elite'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do you rank Lite vs Pro vs Elite?',
    a: `ESP and radar only → ${lite}. Gunfights with aim assist → ${pro}. Full suite, loot assist tools and priority patches → ${elite}. Compare on each cheat page, in the ${guideLiteVsPro}, or in the ${faqPage}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Why is Elite limited slots?',
    a: `Elite is a private build with direct dev support and priority patch delivery. Slot caps keep patch cycles fast, especially on Arc Raiders update and EAC patch days. Check the status banner before checkout, or read the ${guideElite}.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode on ${lite}, ${pro} and ${elite} hides overlays from OBS, Discord share and capture cards. Record a short local test before going live. Full steps are in the ${guideStream}.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are undetected Arc Raiders hacks guaranteed?',
    a: a('No. Undetected is the current status on the product page—not a permanent guarantee. Stop if the build shows updating, testing or detected, and never play on your main account while a status is unclear.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP-only safer than aimbot?',
    a: a('ESP is quieter than an obvious aimbot or no-recoil pattern in a killcam, but it is still a cheat. Admins, clips and EAC do not ignore overlays because aim assist is off. Wallbang-free play and sensible reaction timing reduce reports.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the HWID Spoofer?',
    a: `Use ${hwid} when a fresh Embark account gets blocked instantly on one PC but works on another—a hardware-level restriction. It is not for account-only bans; see ${ugc} for appeal workflows instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'hwid-after-ban',
    topic: 'safety',
    icon: 'faqHwidWhen',
    q: 'Do I need a new account and a spoofer after an EAC ban?',
    a: `Usually both: a new Embark account with Arc Raiders, plus ${hwid} if the ban is tied to your hardware. Read the ${guideHwid} before buying anything, and never reuse the banned account on your main PC.`,
  },
  {
    id: 'ugc-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'What is UGC?',
    a: `${ugc} (Unban & Governance Control) is an appeal workspace for Embark Studios and EAC bans and Steam restrictions—custom workflows and case tracking, not a guaranteed unban service.`,
    scopes: ['ugc'],
  },
  {
    id: 'skin-changer',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'Does Skin Changer modify my Steam inventory?',
    a: `${skin} previews weapon skins, clothing and workshop items locally on your client. Other players see your real inventory. Included with ${elite}; available standalone for cosmetic preview only.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the Arc Raiders folder?',
    a: `Arc Raiders Hacks runs external with cloud config sync—no files are written into the Arc Raiders install directory. EAC risk still applies. See the ${guideExternal} and ${productsHub}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are single-player debug commands the same as Arc Raiders hacks?',
    a: `No. in-game console commands like dev-only debug toggles only work for admins on servers you own or moderate. Paid Arc Raiders hacks are separate products for live raids—see ${lite}, ${pro} and ${elite}, and the ${guideAdmin}.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to tier pages and ${productsHub}. Checkout runs through our secure partner—never paste loader files from random Discord DMs. Walkthrough: ${guideBuy}.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where do I compare plans side by side?',
    a: `Each hack tier page includes a compare table. The ${faqPage} collects product, cheat and blog answers in one place, and the ${guideFeatures} maps every module to a tier.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'faqWhoLite',
    q: 'Who should stay on Lite?',
    a: `Players who only want awareness—Player ESP, Loot ESP and radar—and will not touch aim assist. If you keep wanting recoil control, buy ${pro} instead.`,
    scopes: ['lite'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'faqWhoPro',
    q: 'Who should buy Pro?',
    a: `PvP players who want Aimbot, Soft Aim and No Recoil with ESP and radar included. Pro is the most popular tier at arcraiderhacks.com.`,
    scopes: ['pro'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Elite?',
    a: `Operators who want Loot Route Assist, Skin Changer and priority patch delivery when slots are open.`,
    scopes: ['elite'],
  },
  {
    id: 'eac-update',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'What should I do after an EAC or Arc Raiders update?',
    a: a('Check arcraiderhacks.com status and Discord #status. Do not launch until the banner shows online. Reload your loader, then use conservative presets and test on a quiet test session first. The EAC patch day checklist covers the full routine.'),
  },
  {
    id: 'eac-init',
    topic: 'setup',
    icon: 'faqEacUpdate',
    q: 'EAC says it failed to initialize—is that a ban?',
    a: `Usually not. It is most often a broken EAC install, a service conflict or a blocked driver. Verify Arc Raiders files in Steam, reinstall EAC from the Arc Raiders folder and restart before assuming a ban. See the ${guideEacInit}; if it is a real ban, check ${ugc}.`,
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a('Open Discord after purchase with your order email, Windows version and Arc Raiders build number. Staff walk through loader setup live.'),
  },
  {
    id: 'server-types',
    topic: 'plans',
    icon: 'faqServerModes',
    q: 'Do tiers work on Surface, Underground and PvPvE sessions?',
    a: `Yes—${lite}, ${pro} and ${elite} include presets for Surface, Underground and PvPvE sessions in the portal. Tune ESP distance, aim FOV and smoothing before your first extraction run or POI push.`,
  },
  {
    id: 'zoom-hack',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Which tier includes FOV Hack?',
    a: `FOV Hack ships on ${lite} and carries through ${pro} and ${elite}. A wider field of view helps in base fights and open-field PvP, but keep it near the default range so the server does not flag it.`,
    scopes: ['lite'],
  },
  {
    id: 'loot-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What does Loot & Resource ESP highlight?',
    a: `Containers, stashes, supply drops, salvage and crafting nodes, and dropped items—filtered by type and distance. All tiers include it, and the ${guideEsp} explains how to keep the screen readable.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'auto-farm',
    topic: 'scripts',
    icon: 'faqAutoFarm',
    q: 'Which tier includes Loot Route Assist?',
    a: `Loot Route Assist for resource and loot routes are ${elite} only. ${pro} covers aim assist without farm automation.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private Arc Raiders hacks?',
    a: a('Private means per-user keys and maintained builds—not public zip packs. Arc Raiders Hacks ships portal delivery for ESP, aim assist and radar tiers.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage} for all product, cheat and blog answers—or read ${blog} for deep guides.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'Arc Raiders topics',
  title: 'Browse Arc Raiders hack answers by category',
  subtitle: 'Filter Arc Raiders plans, ESP, aimbot, products, setup and buy-guide answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'compare-plans', 'undetected', 'eac-update'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Should I use single-player debug commands on live extraction raids?',
      a: a('No. Admin commands like dev-only debug toggles only work for admins on servers you own or moderate. Live-server play needs separate Arc Raiders hacks from arcraiderhacks.com tiers—and carries ban risk.'),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which tier matches this guide?',
      a: `ESP and radar guides → ${lite}. Aimbot and recoil guides → ${pro}. Farm helpers and Skin Changer topics → ${elite}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and the live status banner. Patch-day articles note when modules change—Discord #status has the latest build notes after each Arc Raiders update or major patch.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout—not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test on a quiet test session first?',
      a: a('Yes. Load conservative presets on a low-pop or training mode or private lobby before busy Surface or Underground servers. Tune aim FOV, smoothing and ESP distance caps over several sessions.'),
    },
  ],
  Features: [
    {
      id: 'blog-features-modules',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Are all modules in this article on every tier?',
      a: `No. Lite is ESP, radar and FOV only; ${pro} adds Aimbot, Soft Aim and No Recoil; ${elite} adds loot assist tools and Skin Changer. Check the compare table before checkout.`,
    },
  ],
  Updates: [
    {
      id: 'blog-updates-eac',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'How fast do builds update after an EAC patch?',
      a: `Elite gets priority delivery; Lite and Pro follow once the build is verified. Do not launch until the banner is green—see the ${guidePatch}.`,
    },
  ],
  Troubleshooting: [
    {
      id: 'blog-trouble-eac',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Is an EAC error always a ban?',
      a: a('No. Start with Steam file verification, an EAC reinstall and a clean restart. A ban message names the account or hardware; startup errors usually do not.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-eac',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article guarantee undetected status?',
      a: a('No article replaces the live status banner. Undetected is a point-in-time label—stop if status shows updating or detected.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${lite}, ${pro}, ${elite} and ${productsHub}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every Arc Raiders update. Portal presets update with patch notes—reload configs instead of copying old sliders.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('map-hack') || slug.includes('esp') || slug.includes('radar') || slug.includes('zoom')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which tier covers ESP and radar from this article?',
      a: `${lite} includes Player ESP, Loot & Resource ESP, radar and FOV hack. ${pro} adds aim assist on the same overlay stack.`,
    });
  }
  if (slug.includes('script') || slug.includes('combo') || slug.includes('recoil') || slug.includes('aim')) {
    slugHints.push({
      id: 'blog-slug-scripts',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which tier includes the aimbot and recoil modules in this article?',
      a: `${pro} and ${elite} ship Aimbot, Soft Aim, Bone Select and No Recoil. ${lite} is ESP and radar only.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('eac')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace HWID or UGC products?',
      a: `Recovery and EAC guides complement ${hwid} and ${ugc}—read product pages for workflow scope and realistic outcomes.`,
    });
  }
  if (slug.includes('stream')) {
    slugHints.push({
      id: 'blog-slug-stream',
      topic: 'esp',
      icon: 'faqStreamProof',
      q: 'Does stream-proof mode hide everything from OBS?',
      a: `It hides the cheat overlay on supported capture methods. Always record a local test with your exact OBS scene first—see the ${guideStream}.`,
    });
  }
  if (slug.includes('skin')) {
    slugHints.push({
      id: 'blog-slug-skin',
      topic: 'products',
      icon: 'faqSkinChanger',
      q: 'Do other players see my changed skins?',
      a: `No. ${skin} is a local preview on your client; other players see your real inventory.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Player ESP (boxes, names, health)', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Skeleton ESP', icon: 'skeletonEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Loot & Resource ESP', icon: 'lootEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Radar overlay', icon: 'compareMinimapHack' as const, lite: true, pro: true, elite: true },
  { feature: 'FOV Hack', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Stream Proof overlay', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'Cloud config backup', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
  { feature: 'Aimbot', icon: 'featureAimbot' as const, lite: false, pro: true, elite: true },
  { feature: 'Soft Aim (smoothed)', icon: 'softAim' as const, lite: false, pro: true, elite: true },
  { feature: 'Bone Select (head / chest / body)', icon: 'boneSelect' as const, lite: false, pro: true, elite: true },
  { feature: 'Aim FOV circle & target selector', icon: 'compareTargetSelector' as const, lite: false, pro: true, elite: true },
  { feature: 'No Recoil / Spread', icon: 'noRecoil' as const, lite: false, pro: true, elite: true },
  { feature: 'Weapon recoil profiles (Kettle, Tempest, Rattler)', icon: 'stepCrosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Trigger Bot', icon: 'triggerBot' as const, lite: false, pro: true, elite: true },
  { feature: 'Loot Route Assist', icon: 'compareAutoFarm' as const, lite: false, pro: false, elite: true },
  { feature: 'Full radar suite (UAV-style)', icon: 'uavRadar' as const, lite: false, pro: false, elite: true },
  { feature: 'Skin Changer (Unlock All)', icon: 'compareSkinChanger' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority patch queue', icon: 'comparePriorityPatch' as const, lite: false, pro: false, elite: true },
  { feature: 'Direct dev Discord support', icon: 'compareDevSupport' as const, lite: false, pro: false, elite: true },
];
