import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Arc Raiders Hacks',
    domain: 'arcraiderhacks.com',
    title: 'Buy Arc Raiders Hacks 2026 | Undetected ESP & Aimbot',
    description:
      'Shop undetected Arc Raiders hacks for PC—player ESP, loot ESP, soft aim, no recoil and stream-proof overlays. Compare Lite, Pro and Elite at arcraiderhacks.com.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/reviews/', label: 'Reviews' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Arc Raiders — EAC build online',
    eyebrow: 'Undetected Arc Raiders Hacks',
    title: 'Arc Raiders Hacks — Undetected ESP, Aimbot & Wallhacks for PC',
    subtitle:
      'Buy undetected Arc Raiders hacks for PC—player ESP, loot ESP, soft aim and no recoil. Compare Lite, Pro and Elite, then checkout for instant loader access.',
    ctaPrimary: 'Get access',
    ctaPrimaryHref: productBase,
    ctaDiscord: 'Shop products',
    modesLabel: 'Arc Raiders session types',
    modes: ['Surface', 'Underground', 'Co-op', 'PvPvE'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Tiers', strong: 'Lite · Pro · Elite' },
      { label: 'Discord support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'What you buy in one Arc Raiders hack package',
    subtitle: 'ESP, aimbot, no recoil and utilities—priced by tier, delivered after checkout, updated every major patch.',
    items: [
      {
        title: 'Aimbot / Soft Aim',
        subtitle: 'Win Fights. Look Human.',
        desc: 'Aimbot and Soft Aim with bone select, smoothing and FOV limits—tuned for rifles, SMGs and sidearms on Surface raids and underground runs.',
        bullets: [
          'Aimbot with smoothing and FOV circle limits',
          'Soft Aim that pulls the crosshair without hard snaps',
          'Bone select: head, chest or nearest bone',
          'Weapon profiles for assault rifles, SMGs and sidearms',
          'Humanized delay sliders and visibility checks',
        ],
        tags: ['arc raiders aimbot', 'soft aim', 'bone select'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'See Every Threat.',
        desc: 'Readable player ESP that stays clean in extractions, POI fights and hot drop zones.',
        bullets: [
          'Boxes, skeletons, names and distance',
          'Health, weapon and downed-player indicators',
          'Team and clan color filters',
        ],
        tags: ['arc raiders esp', 'player esp', 'skeleton esp'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-1',
      },
      {
        title: 'Loot & Resource ESP',
        subtitle: 'Find It Before They Do.',
        desc: 'Highlight containers, salvage nodes, stashes, ARC drops and extracted loot so you spend less time searching and more time extracting.',
        bullets: [
          'Crates, barrels, military and elite loot',
          'Crafting and salvage node markers',
          'Stash, vehicle and supply drop alerts',
        ],
        tags: ['loot esp', 'resource esp', 'ore esp'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'No Recoil / Spread',
        subtitle: 'Hold the Spray.',
        desc: 'Recoil and spread control with per-weapon profiles—start conservative and tighten as you get comfortable.',
        bullets: ['Per-weapon recoil compensation', 'Spread reduction sliders', 'Attachment-aware profiles in the portal'],
        tags: ['no recoil', 'no spread', 'recoil control'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-2',
      },
      {
        title: 'Utility Suite',
        subtitle: 'Extra Tools for Clutch Moments.',
        desc: 'Radar, Skin Changer and quality-of-life tools beyond raw ESP and aim assist.',
        bullets: [
          'Radar: Mini-map overlay for players and loot',
          'Skin Changer: Preview skins locally on your client',
          'Trigger Bot: Fire when the crosshair lands on a target',
          'Stream Proof: Hide overlays from OBS capture',
        ],
        tags: ['radar', 'skin changer', 'trigger bot'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Loot Route Assist',
        subtitle: 'Efficient Farm. Zero Grind.',
        desc: 'Speed up resource runs with helpers that stay humanized—so you farm faster without obvious bot patterns.',
        bullets: [
          'Loot and container highlight assist',
          'Extraction route hints',
          'Safe stop when players appear on ESP',
          'Patch-day loot presets',
        ],
        tags: ['auto farm', 'resource helper', 'loot assist'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-3',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Creators Stay Safe.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['OBS and Game Bar safe modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['obs safe', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-1 lg:row-start-5',
      },
      {
        title: 'FOV Hack',
        subtitle: 'See More of the Fight.',
        desc: 'Widen your field of view for better awareness in close quarters and open-field fights.',
        bullets: ['Adjustable FOV range', 'Quick reset to default FOV', 'Pairs with Player ESP and radar'],
        tags: ['fov hack', 'field of view', 'awareness'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-5 lg:row-start-5',
      },
      {
        title: 'Cloud Config & Updates',
        subtitle: 'Patch Day Ready.',
        desc: 'Same presets on every PC—portal updates track season patchs, major patches and EAC patch days.',
        bullets: ['Cloud backup for slider profiles', 'Loader push within hours of patches', 'Discord #status for build notes'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-5',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Why buy Arc Raiders Hacks here—patches, not empty promises',
    subtitle:
      'Most Arc Raiders hack shops ship stale loaders, obvious aimbots, and ticket bots. We built arcraiderhacks.com around patch-day delivery, humanized aim assist, and real Discord support.',
    usLabel: 'Arc Raiders Hacks',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'EAC-aware builds pushed within hours of Arc Raiders updates—check Discord #status before you queue for a raid.',
      },
      {
        title: 'Humanized aim & delays',
        desc: 'Smoothing, FOV limits and conservative defaults mimic real player movement—not instant snaps that get you reported and banned.',
      },
      {
        title: 'Real Discord support',
        desc: 'Open a ticket for loader setup, configs and HWID resets—real staff, not copy-paste FAQ replies.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes—no risky DLL injection into the Arc Raiders process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'Weapon, ESP and per-server profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord tickets—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major Arc Raiders or anti-cheat changes.',
      },
      {
        value: '24/7',
        title: 'Discord support',
        desc: 'Open a ticket for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active users',
        desc: 'Arc Raiders PC players running ESP, aim assist and utilities from arcraiderhacks.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first extraction run in just',
    titleHighlight: 'three simple steps',
    intro:
      'Buy a tier, unlock the portal, download the loader, load presets, and play Arc Raiders on PC—with Discord support if anything blocks you.',
    ctaPrimary: 'Shop products',
    ctaSecondary: 'Pre-purchase FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your portal dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import weapon and ESP presets, and tune aim assist plus overlay sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & play Arc Raiders',
        desc: 'Check the live status banner, launch Arc Raiders, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Arc Raiders after updates.',
    items: ['Windows 10 & 11', 'Steam', 'Arc Raiders client', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Elite hack',
    title: 'Arc Raiders Elite Cheats',
    subtitle: 'Full Arc Raiders suite—ESP, aimbot, no recoil, loot assist tools, Skin Changer, and priority patch delivery.',
    viewAll: 'Buy Elite details',
    explore: 'Get access',
    items: [
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'Arc Raiders Elite Cheats — Full ESP, Aimbot & Extraction Suite',
        desc: 'Elite tier is the full private suite—aimbot, no recoil, player ESP, loot ESP, loot route assist, Skin Changer and priority EAC patch delivery for PC.',
        features: ['Aimbot / Soft Aim', 'No Recoil / Spread', 'Player & Loot ESP', 'Loot Route Assist', 'Skin Changer', 'Priority patch queue'],
        more: 42,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'All Arc Raiders Hack Products & Utilities',
    subtitle:
      'Products hub for PC—browse Lite, Pro and Elite tiers plus HWID Spoofer, UGC and Unlock All utilities with module lists and secure checkout.',
    viewAll: 'Shop all products',
    get: 'Get access',
    explore: 'Get access',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'Arc Raiders HWID Spoofer — Reset Hardware After EAC Ban',
        subtitle: 'HWID spoofer for PC after an EAC hardware flag',
        desc: 'This HWID spoofer rotates disk serials, MAC addresses and GPU IDs after Easy Anti-Cheat flags your machine—portal setup included before you relaunch on Steam.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'Arc Raiders UGC — Steam & EAC Account Recovery',
        subtitle: 'Appeals for banned Arc Raiders accounts',
        desc: 'Buy Arc Raiders UGC recovery tools for platform holds, EAC bans, and platform or anti-cheat restrictions—custom appeal workflows, case docs and status tracking.',
        features: ['Custom appeal workflows', 'Dispute automation', 'Case documentation', 'Status tracking dashboard'],
        more: 6,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Unlock All — Skin Changer Cosmetics Locally',
        subtitle: 'Unlock All and Skin Changer on PC',
        desc: 'Unlock All with Skin Changer previews weapon skins, clothing and rare variants locally—client-side cosmetics without Steam market purchases.',
        features: ['Weapon skin swap', 'Clothing & item customizer', 'Rare skin preview', 'Loadout favorites export'],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Arc Raiders Hack Buy Guides',
    subtitle: 'Tier comparison guides, ESP and aimbot module explainers, and checkout walkthroughs—pick a plan with confidence.',
    latestTitle: 'Buy Guides & Checkout Tips for PC',
    latestSubtitle: 'Transactional guides to help you choose a tier and complete secure checkout for ESP, aimbot and utilities.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'Browse buy guides',
    read: 'Read & buy',
    items: [
      {
        tag: 'Guides',
        title: 'Arc Raiders console codes vs live-server loaders',
        slug: 'cheat-codes',
        image: '/images/blog/cheat-codes.png',
        desc: 'Admin console codes only work where you are admin. See what works on live extraction raids and when a private loader with ESP and aimbot is the right buy.',
        date: 'Aug 20, 2026',
        readTime: '10 min read',
      },
      {
        tag: 'Guides',
        title: 'From practice commands to live Arc Raiders ESP & aimbot',
        slug: 'console-tips',
        image: '/images/blog/console-tips.png',
        desc: 'Outgrown private-server practice? Compare undetected ESP and aimbot tiers for live PvP—Lite, Pro and Elite with secure checkout.',
        date: 'Aug 19, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'How to get Arc Raiders hacks working after checkout',
        slug: 'use-codes',
        image: '/images/blog/use-codes.png',
        desc: 'Bought Arc Raiders hacks? Portal login, loader download, conservative presets and first-launch checks so your ESP and aimbot run on Surface raids and underground runs.',
        date: 'Aug 18, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Features',
        title: 'Cheat features by tier: ESP, aimbot, no recoil & skins',
        slug: 'features',
        image: '/images/blog/features.png',
        desc: 'Feature guide: Player ESP, Loot ESP, Aimbot, No Recoil, FOV hack and Skin Changer by Lite, Pro and Elite tier—compare modules before checkout.',
        date: 'Aug 18, 2026',
        readTime: '12 min read',
      },
      {
        tag: 'Guides',
        title: 'Private loader vs debug commands on live raids',
        slug: 'console-cmds',
        image: '/images/blog/console-cmds.png',
        desc: 'Admin commands do not work on servers you do not own. Why buyers choose a private loader with ESP and aimbot—tiers, checkout and portal access.',
        date: 'Aug 17, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy Arc Raiders Lite vs Pro: which hack tier to purchase',
        slug: 'lite-vs-pro',
        image: '/images/blog/lite-vs-pro.png',
        desc: 'Lite for ESP and radar, Pro for aimbot and no recoil. Compare tiers side by side and buy the Arc Raiders hack tier that fits your server and playstyle.',
        date: 'Aug 16, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy Arc Raiders Elite hacks: full suite pricing & who should upgrade',
        slug: 'elite',
        image: '/images/blog/elite.png',
        desc: 'Elite is the full Arc Raiders hacks suite: aimbot, ESP, Loot Route Assist, Skin Changer and priority patches. See who should buy Elite and how to check out.',
        date: 'Aug 16, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy Arc Raiders aimbot & no recoil: Pro tier combat tools',
        slug: 'aimbot',
        image: '/images/blog/aimbot.png',
        desc: 'Buy Arc Raiders aimbot and no recoil with Pro tier. See what Aimbot, Soft Aim, Bone Select and No Recoil do, then compare tiers and get access.',
        date: 'Aug 15, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy Arc Raiders ESP & radar: Lite setup after purchase',
        slug: 'esp',
        image: '/images/blog/esp.png',
        desc: 'Buy undetected Arc Raiders ESP and radar with Lite. See what you get, how fast setup is after checkout and when to upgrade to Pro or Elite.',
        date: 'Aug 15, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy Arc Raiders FOV hack with ESP awareness (Lite+)',
        slug: 'fov',
        image: '/images/blog/fov.png',
        desc: 'FOV hack ships on Lite and carries through Pro and Elite. Buy a wider view with ESP for base fights and open-field PvP—compare tiers and get access.',
        date: 'Aug 14, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy Arc Raiders Skin Changer / Unlock All utility',
        slug: 'skins',
        image: '/images/blog/skins.png',
        desc: 'Buy Arc Raiders Skin Changer standalone or bundled with Elite. Preview weapon skins and clothing locally—see what you get and where to check out.',
        date: 'Aug 14, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'EAC patch day checklist before checkout',
        slug: 'eac-patch',
        image: '/images/blog/eac-patch.png',
        desc: 'Arc Raiders or anti-cheat patch just dropped? Check live status, pick the right tier and buy safely—patch-day checklist for checkout and first launch.',
        date: 'Aug 13, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy Arc Raiders HWID Spoofer after a ban',
        slug: 'hwid',
        image: '/images/blog/hwid.png',
        desc: 'Hardware flagged after an EAC ban? Buy Arc Raiders HWID Spoofer, compare it to a new account, and see when UGC appeal help fits. Checkout at arcraiderhacks.com.',
        date: 'Aug 13, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'Checkout buy guide: Lite, Pro & Elite (2026)',
        slug: 'buy-guide',
        image: '/images/blog/buy-guide.png',
        desc: 'Step-by-step buy guide: choose Lite, Pro or Elite, pay at secure checkout and unlock your portal. The 2026 walkthrough from tier pick to first launch.',
        date: 'Aug 12, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy Pro aimbot bone select & weapon profiles',
        slug: 'bones',
        image: '/images/blog/bones.png',
        desc: 'Buy Pro for aimbot bone select and per-weapon recoil profiles on Kettle, Tempest, Rattler and Ferro. See example profiles and get access.',
        date: 'Aug 12, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'EAC errors vs buying UGC recovery / HWID help',
        slug: 'eac-error',
        image: '/images/blog/eac-error.png',
        desc: 'EAC failed to initialize is usually not a ban. Quick checks first, then when to buy UGC appeal workflows or HWID Spoofer. Then get access to Arc Raiders hacks.',
        date: 'Aug 11, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy external Arc Raiders hacks: safer loader delivery',
        slug: 'external',
        image: '/images/blog/external.png',
        desc: 'Why buyers choose external Arc Raiders hacks: private loader, portal updates and cloud configs. Compare tiers and get access instead of risky free downloads.',
        date: 'Aug 11, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy stream-proof Arc Raiders hacks for creators',
        slug: 'stream-proof',
        image: '/images/blog/stream-proof.png',
        desc: 'Stream Proof hides your ESP and aimbot overlay from OBS and Game Bar. Included on every tier—compare Arc Raiders hacks for creators and get access.',
        date: 'Aug 10, 2026',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-session without tabbing through chaos.',
    items: [
      { num: '01', label: 'Combat', title: 'Aim assist that adapts to your weapon', desc: 'Aimbot, Soft Aim, Bone Select and smoothing in one combat tab.' },
      { num: '02', label: 'Vision', title: 'ESP that stays readable', desc: 'Filter by distance, team color, loot type and resource node.' },
      { num: '03', label: 'Radar', title: 'Awareness on a compact overlay', desc: 'Radar with players, loot and airdrop hints on a compact overlay.' },
      { num: '04', label: 'Weapons', title: 'Per-weapon recoil profiles', desc: 'Save Kettle, Tempest, Rattler and sidearm profiles and swap with hotkeys.' },
      { num: '05', label: 'Movement', title: 'Farm & movement helpers', desc: 'Loot Route Assist, FOV hack and utility tools for efficient resource runs.' },
      { num: '06', label: 'Profiles', title: 'Configs for every server type', desc: 'Separate Surface, Underground and Co-op presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to an Arc Raiders profile you can reuse every session.',
    ctaLabel: 'Shop products',
    ctaHref: productBase,
    ctaSecondary: 'Pre-purchase FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check EAC status',
        desc: 'Read the live banner on arcraiderhacks.com before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your tier',
        desc: 'Pick Lite, Pro or Elite—the access level that matches how you play.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune smoothing on a test server.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save Surface and Underground presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Arc Raiders plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal before the official blog—check before you queue for a raid.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with safe smoothing and ESP ranges, then tune up—not the other way around.' },
      { num: '03', title: 'Real Discord support', desc: 'Stuck on the loader or weapon configs? Discord staff walk you through it—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Arc Raiders Hacks Discord Support',
    subtitle: 'Open a Discord ticket for Arc Raiders loader errors, HWID Spoofer setup and checkout help.',
    channels: [
      {
        icon: 'messageCircle',
        title: 'Discord support',
        desc: 'Join Discord and open a ticket for loader, HWID, and account issues.',
        linkLabel: 'Join Discord',
        href: DISCORD_URL,
      },
    ],
    ticketTitle: 'Include in your Discord ticket',
    ticketItems: [
      { title: 'Order ID', desc: 'Your Zadeyo / checkout order ID from the purchase confirmation.' },
      { title: 'Issue type', desc: 'Loader, HWID Spoofer, Skin Changer, or account access—say which one.' },
      { title: 'Error screenshot', desc: 'Exact error text or a screenshot from the loader or game.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Meet arcraiderhacks — Buying FAQ — Tiers, Checkout & EAC Risk',
    subtitle: 'Clear answers on Arc Raiders hack tiers, EAC risk, Windows support and how checkout delivery works.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Arc Raiders hacks are online?',
        a: 'The live status banner is on arcraiderhacks.com and in the Discord #status channel. Always check after a season patch, patch or EAC update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Arc Raiders.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party Arc Raiders hacks?',
        a: 'Yes—any modification carries risk. Easy Anti-Cheat, Embark Studios and server admins keep evolving detection and reports. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Arc Raiders via Steam on Windows 10/11 64-bit only. macOS, Linux and consoles are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Hack tiers, HWID Spoofer, UGC and Skin Changer live at arcraiderhacks.com/products/arcraider-hacks with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'Buy undetected Arc Raiders hacks — ESP, aimbot & utilities for PC. Secure checkout at arcraiderhacks.com',
    explore: 'Shop',
    exploreLinks: [
      { href: '/', label: 'What you can buy', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/arcraider-hacks/elite/', label: 'Buy Elite Arc Raiders hacks', ariaLabel: 'Elite hacks' },
      { href: '/products/arcraider-hacks/', label: 'Shop all products', ariaLabel: 'Products' },
      { href: '/reviews/', label: 'Buyer reviews', ariaLabel: 'Reviews' },
      { href: '/blog/', label: 'Buy guides & tier tips', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Our Cheats Store',
      description:
        'Meet the team behind arcraiderhacks.com—the Arc Raiders hacks store for undetected ESP, aimbot and PC utilities, with patch-day updates and Discord help after checkout.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Arc Raiders Hacks (arcraiderhacks.com) is a buyer-focused storefront for undetected Arc Raiders tools on PC. We publish tier comparisons, setup guides, and honest risk notes so you know what you are purchasing before checkout—not vague marketing copy.',
            'We are not Embark Studios and we are not affiliated with Easy Anti-Cheat. Arc Raiders is a trademark of Embark Studios. Product names on this site describe software categories (ESP, aimbot, utilities), not official game features.',
          ],
        },
        {
          heading: 'What we sell',
          paragraphs: [
            'Combat tiers: Lite (player ESP, loot ESP, radar, FOV hack), Pro (adds aimbot, soft aim, no recoil, bone select), and Elite (full suite including loot assist tools, Skin Changer, and priority patch queue). Each tier page lists modules, screenshots, and system requirements for Windows 10/11.',
            'Utilities sold separately: HWID Spoofer for hardware-flag recovery, UGC tools for structured ban and account appeals, and Skin Changer / Unlock All for local cosmetic preview. The utilities comparison page explains which tool fits a ban versus a cosmetic goal.',
            'Every listing links to secure checkout through our payment partner. After purchase, your operator portal provides the loader, setup guide, and config library for the tier you bought.',
          ],
        },
        {
          heading: 'How buying works',
          paragraphs: [
            'Use Get access on the homepage or product page to open checkout. You will complete payment on our partner checkout, then receive portal access for downloads. Keep your order confirmation email—support tickets ask for that order ID.',
            'Not sure which tier to pick? Start with the Lite vs Pro guide on the blog, the features guide for every module, or the pre-purchase FAQ. Buyer reviews on /reviews/ describe real setups on Surface raids and underground runs (ESP tuning, stream-proof overlays, spoofer workflows).',
            'We do not sell loader files through Discord DMs or random download links. Only use files from your portal after checkout.',
          ],
        },
        {
          heading: 'How we update after Arc Raiders patches',
          paragraphs: [
            'season patch days and Easy Anti-Cheat updates can disable modules until a new build ships. We post status on the homepage banner and in Discord #status when builds are online, testing, or offline.',
            'Elite buyers get priority in the patch queue when slots are available. If the banner shows offline, do not launch modules—wait for the updated loader and read the EAC patch day checklist on the blog before rejoining servers.',
            'Blog posts cover post-patch workflows: checking status, downloading the latest loader, loading conservative presets, and when HWID Spoofer or UGC help applies after a ban.',
          ],
        },
        {
          heading: 'Proof and self-serve answers',
          paragraphs: [
            'The FAQ answers tier differences, ban risk, Windows/Steam requirements, and what happens after checkout. The forum hosts buyer-style Q&A on ESP setup, aim smoothing, and utility choice—search there before opening a ticket.',
            'Product pages include gameplay screenshots updated for current seasons. Reviews are labeled by product (Elite, HWID Spoofer, UGC, Skin Changer) so you can read feedback relevant to your purchase.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Loader errors, HWID Spoofer setup, and checkout questions go through Discord tickets (linked on the Support page). Include your order ID, Windows build, Arc Raiders session type, and a screenshot of any error text.',
            'For billing or refund policy questions, read the Terms of Sale first—then open a ticket if your case matches the supported refund criteria (fault on our side on a supported setup with the status banner online).',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy — Data, Cookies & Checkout',
      description:
        'Privacy policy for arcraiderhacks.com: how we handle cookies, analytics, Discord tickets, checkout partners, data retention and your rights as a shopper.',
      sections: [
        {
          heading: 'Scope',
          paragraphs: [
            'This privacy policy covers arcraiderhacks.com—the marketing site, guides, and product pages. It does not govern third-party checkout, payment processing, or your operator portal; those services have their own policies when you leave our domain.',
            'Last updated: October 2026. We may revise this page when our analytics or support tools change; material updates will be reflected in the date above.',
          ],
        },
        {
          heading: 'Information we collect',
          paragraphs: [
            'When Google Analytics is enabled, we may receive aggregated metrics such as pages viewed, referral source, device category, browser, and approximate geography. We use this to see which buy guides and product pages help shoppers—not to build individual advertising profiles on this site.',
            'If you open a Discord support ticket, we see what you send there: Discord username, message text, attachments you choose to upload, and any order ID or email you provide for billing lookup.',
            'We do not ask for your Arc Raiders account password on arcraiderhacks.com. We do not store payment card numbers, CVV codes, or full billing addresses on this domain.',
          ],
        },
        {
          heading: 'Information we do not sell',
          paragraphs: [
            'We do not sell your personal information to data brokers. Affiliate checkout links (for example through our Zadeyo partner URLs) may use their own tracking when you complete a purchase on their domain—that processing is governed by the checkout provider’s policy, not this page.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics inform content updates: which FAQ topics need expansion, which product pages get the most pre-purchase traffic, and whether mobile readers can load guides quickly.',
            'Support data is used only to troubleshoot loader issues, utility setup, or order access. Staff may reference your ticket history if you follow up on the same order ID.',
          ],
        },
        {
          heading: 'Cookies and local storage',
          paragraphs: [
            'Analytics cookies (when enabled) measure traffic volume. You can block or delete cookies in your browser; the site remains readable without them.',
            'We store theme preference (light or dark) in local storage so your choice persists between visits. That value stays on your device unless you clear site data.',
            'We do not use advertising cookies on arcraiderhacks.com for retargeting across unrelated websites.',
          ],
        },
        {
          heading: 'Checkout and delivery partners',
          paragraphs: [
            'Clicking Get access opens our partner checkout (Zadeyo) in the same browser tab to pay and receive portal credentials. Name, email, payment method, and fraud-prevention signals are handled by that provider.',
            'We may receive confirmation that a purchase completed (for example order ID and product tier) through support workflows you initiate—we do not host the payment form itself.',
          ],
        },
        {
          heading: 'Security',
          paragraphs: [
            'arcraiderhacks.com is served over HTTPS. Do not send payment details or portal passwords through Discord tickets; use the official checkout and portal only.',
          ],
        },
        {
          heading: 'Data retention',
          paragraphs: [
            'Analytics retention follows the configuration in Google Analytics when the service is active. Discord ticket content is kept as long as needed to resolve the issue and for reasonable follow-up on the same order.',
            'You may ask us to delete support messages that are no longer needed after a case is closed, subject to legal or fraud-prevention holds.',
          ],
        },
        {
          heading: 'Your choices and rights',
          paragraphs: [
            'You can opt out of analytics cookies via browser settings or extensions. For portal or billing data held by the checkout provider, contact that provider using the links in your order email.',
            'For privacy questions about arcraiderhacks.com or Discord tickets, open a ticket from the Support page. For purchase disputes, see the Terms of Sale.',
          ],
        },
        {
          heading: 'Children',
          paragraphs: [
            'arcraiderhacks.com is not directed at children under 13, and we do not knowingly collect personal information from children. Arc Raiders is rated for mature audiences; purchasers must comply with Embark account and local age rules.',
          ],
        },
      ],
    },
    terms: {
      title: 'Arc Raiders Hacks Terms of Sale',
      description:
        'Rules for purchasing Arc Raiders hack licenses on arcraiderhacks.com—delivery, personal use, refunds, EAC risk and acceptable product use.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using arcraiderhacks.com or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Arc Raiders hack tiers (Lite, Pro, Elite) and utility tools (HWID Spoofer, UGC, Skin Changer / Unlock All) delivered through a portal and loader for Steam on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Arc Raiders or Easy Anti-Cheat (EAC) updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. arcraiderhacks.com does not process or store payment card numbers.',
            'After purchase, use the portal linked from your order flow to download the current loader and setup guide before launching Arc Raiders.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, EAC or server bans, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Arc Raiders on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—open a ticket on our Discord. Include your order ID, Windows version, Arc Raiders build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Arc Raiders can conflict with game updates and Easy Anti-Cheat. Embark Studios and server admins may take action against accounts. You use this software at your own risk, including possible bans.',
            'Check the homepage status banner before every session. Do not join servers while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, join our Discord and open a ticket via the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Arc Raiders Hacks Discord Support',
      description:
        'Get Discord support for Arc Raiders loader errors, HWID Spoofer setup and checkout questions at arcraiderhacks.com.',
      sections: [
        {
          heading: 'Before you open a ticket',
          paragraphs: [
            'Check the live status banner on the homepage and in Discord #status—especially after an Arc Raiders update or EAC patch. If status is offline, wait for the new build instead of forcing an old loader.',
            'Download the loader only from your operator portal (linked in your order email). Do not run files from DMs, YouTube links, or forum attachments.',
            'Have your checkout order ID, Windows version (10 or 11), Arc Raiders build, and a screenshot of the exact error ready. Redact unrelated personal info from screenshots when possible.',
          ],
        },
        {
          heading: 'Loader and in-game issues',
          paragraphs: [
            'Start the loader before Arc Raiders, use the setup guide tier for your purchase, and test on a private or low-pop server with conservative ESP ranges and aim smoothing.',
            'If Easy Anti-Cheat shows “failed to initialize,” read the EAC errors guide on the blog first—many cases are driver or overlay conflicts, not a ban. Include whether the issue started right after a patch.',
            'For aimbot or ESP tuning, say which weapon and server type (Surface, Underground, PvPvE) you use. Staff can suggest portal presets; they cannot guarantee ban immunity.',
          ],
        },
        {
          heading: 'HWID Spoofer and utilities',
          paragraphs: [
            'HWID tickets: note whether you are on a fresh Embark account, if EAC flagged hardware, and whether you ran the compatibility scan from the spoofer guide. Follow cleanup steps before relaunching Arc Raiders.',
            'UGC tickets: describe ban type (Steam, EAC, server admin) and what appeal steps you already tried. UGC tools organize cases—they do not automatically remove bans.',
            'Skin Changer tickets: confirm you purchased the utility or Elite tier that includes it, and whether the issue is preview-only (client-side) versus a loader error.',
          ],
        },
        {
          heading: 'Checkout and portal access',
          paragraphs: [
            'If payment succeeded but portal access is missing, wait a few minutes and check spam for the order email. Open a ticket with the order ID and the email used at checkout—do not share card numbers in Discord.',
            'Wrong tier purchased? Ask in a ticket before rebuying; staff may advise upgrade paths through the portal when available.',
            'Refund requests must match the criteria in our Terms of Sale (fault on our side on a supported setup with status online). Change-of-mind or ban-related refunds are not offered.',
          ],
        },
        {
          heading: 'Buying help (pre-purchase)',
          paragraphs: [
            'Compare Lite, Pro and Elite on the products hub, read Lite vs Pro and the features guide, or search the FAQ for tier and ban-risk questions. Reviews on /reviews/ are grouped by product for ESP, Elite, spoofer, and UGC feedback.',
            'Utility shoppers: use the utilities comparison table for HWID Spoofer vs UGC vs Skin Changer, then open the product page for screenshots and requirements before Get access.',
          ],
        },
        {
          heading: 'What to expect from support',
          paragraphs: [
            'Tickets are answered in Discord when staff are online—peak times follow EU and US evenings. One ticket per issue keeps threads clear; bump only after 24 hours with new logs if nothing changed.',
            'We do not provide ban guarantees, server unbans, or instructions to evade Embark Studios rules. We help with loader delivery, setup, and product behavior described on arcraiderhacks.com.',
          ],
        },
      ],
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Get access',
    browseCheatsMobile: 'Get access',
    homeAria: 'Arc Raiders Hacks home',
    checkoutAria: 'Get access to Arc Raiders Hacks',
    discordAria: 'Join Arc Raiders Hacks on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
