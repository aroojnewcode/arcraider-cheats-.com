export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
  extraBody?: string[];
}): ForumPost {
  const { answer, detail, tip, extraBody, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    flair: 'Guide Q&A',
    body: [answer, detail, ...(extraBody ?? [])],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'esp-include', title: 'What does Player ESP include before I buy?', upvotes: 73,
    excerpt: 'Player ESP breakdown: boxes, loot, salvage nodes and radar covered in the ESP buy guide before checkout.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'ESP and radar setup for Arc Raiders', sourcePath: '/blog/esp/',
    answer: 'The guide covers player boxes, names, health and distance, skeleton ESP, loot and resource markers, and the radar overlay. The exact options depend on the selected product tier.',
    detail: 'It recommends starting with a restrained layout and enabling only the information you can read comfortably during a fight at a POI or on a compound wall.',
    tip: 'Keep the overlay uncluttered: begin with players and the nearest loot, then adjust the distance filters one at a time.',
  }),
  guideDiscussion({
    slug: 'esp-setup', title: 'How should I set up ESP overlay the first time?', upvotes: 58,
    excerpt: 'First-time ESP overlay setup: enable basics, confirm on a quiet test session, then tune one setting at a time.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'ESP and radar setup for Arc Raiders', sourcePath: '/blog/esp/',
    answer: 'Use the setup guide to enable the overlay, choose readable colors, and check that the indicators do not cover your hotbar, health bars or the crosshair.',
    detail: 'Test your layout on a low-population or training mode or private lobby before relying on it in a busy one. A simple configuration is easier to read than turning on every option immediately.',
    tip: 'If the screen feels crowded, lower the loot distance and hide low-value items before changing colors or sizes.',
  }),
  guideDiscussion({
    slug: 'fov-settings', title: 'What FOV hack settings feel comfortable in PvP?', upvotes: 44,
    excerpt: 'FOV hack tips: widen awareness without stretching the screen or making distant targets hard to track.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'FOV hack guide for Arc Raiders', sourcePath: '/blog/fov/',
    answer: 'There is no single ideal FOV for every player. The guide recommends adjusting gradually and checking that you can still judge distance, recoil and enemy movement at range.',
    detail: 'Keep a quick reset hotkey to the default FOV available so you can compare the wider view with familiar framing, especially for base fights.',
    tip: 'Change one step at a time and spend a short session on a quiet test session before settling on a new value.',
  }),
  guideDiscussion({
    slug: 'aim-smooth', title: 'How do Aimbot smoothing settings change soft aim?', upvotes: 32,
    excerpt: 'Aimbot smoothing, FOV circles and why the PvP buy guide recommends conservative soft-aim tuning.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Aimbot and recoil scripts for PvP', sourcePath: '/blog/aimbot/',
    answer: 'Smoothing controls how quickly the crosshair moves toward a target. The guide recommends higher smoothing, a small FOV circle and a short test session before making any changes.',
    detail: 'Changing one value at a time is easier to review than adjusting FOV, smoothing and bone selection together.',
    tip: 'Keep a note of each configuration you try so you can return to the last setup that behaved as expected.',
  }),
  guideDiscussion({
    slug: 'recoil-drill', title: 'Best way to test No-recoil weapon profiles?', upvotes: 29,
    excerpt: 'Practice recoil profiles one weapon at a time on a quiet test session wall before live PvP.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Aimbot bone select and recoil scripts for Arc Raiders', sourcePath: '/blog/bones/',
    answer: 'Choose one weapon and one profile to test at a time. The guide walks through example profiles for the Kettle, Tempest, Rattler and Ferro rifle, and explains how bone selection fits with recoil compensation.',
    detail: 'A training mode or private lobby lets you repeat the same spray at a wall and see which values need adjustment without risking your kit.',
    tip: 'Learn the manual spray pattern first; that makes it much easier to spot when a profile is over-compensating.',
  }),
  guideDiscussion({
    slug: 'elite-tools', title: 'What extra tools ship with Elite tier cheats?', upvotes: 67,
    excerpt: 'Elite tier vs Lite/Pro: Loot Route Assist, Skin Changer, priority patches and the full ESP suite.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Elite tier guide: when to upgrade your cheat tools', sourcePath: '/blog/elite/',
    answer: 'The guide describes Elite as including the Lite and Pro feature sets plus additional utilities such as Loot Route Assist, the full radar suite, priority patch delivery and Skin Changer.',
    detail: 'It also covers who may benefit from the extra modules and why it makes sense to understand the simpler feature set first.',
    tip: 'Compare the included features against your needs before choosing a tier; the full comparison is linked in the guide.',
  }),
  guideDiscussion({
    slug: 'lite-pro', title: 'How do Lite tier and Pro hack tiers differ?', upvotes: 53,
    excerpt: 'Lite tier is ESP and radar; Pro adds aimbot and no recoil. Short buyer comparison before checkout.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Lite tier vs Pro: which tier fits you', sourcePath: '/blog/lite-vs-pro/',
    answer: 'The comparison guide describes Lite as focused on awareness tools such as player ESP, loot ESP, radar and FOV. Pro adds Aimbot, Soft Aim and No Recoil on top of that foundation.',
    detail: 'The right choice depends on whether you need map information alone or also want the aim assist modules described in the comparison.',
    tip: 'Use the full side-by-side comparison to check specific modules before making a decision.',
  }),
  guideDiscussion({
    slug: 'skin-info', title: 'What should I know before buying Skin Changer?', upvotes: 38,
    excerpt: 'Skin Changer / Unlock All: local weapon and clothing previews, limits, and what other players see.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Skin changer and Unlock All for Arc Raiders', sourcePath: '/blog/skins/',
    answer: 'The guide describes Skin Changer as a local cosmetic preview utility for weapon skins, clothing and workshop items. It explains setup, supported options, and how to restore your default appearance.',
    detail: 'Review the compatibility notes and follow the current setup instructions before using the utility.',
    tip: 'Cosmetic changes are local previews that other players do not see; check the guide for current limitations and setup steps.',
  }),
  guideDiscussion({
    slug: 'eac-init', title: 'EAC failed to initialize—what should I try first?', upvotes: 24,
    excerpt: 'Easy Anti-Cheat failed to initialize: verify Steam files and reinstall EAC before assuming a ban.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'Easy Anti-Cheat failed to initialize in Arc Raiders', sourcePath: '/blog/eac-error/',
    answer: 'The troubleshooting guide says the message can result from game-file problems or software conflicts and does not always mean an account ban. First verify game files through Steam.',
    detail: 'It also recommends fully exiting Steam, reinstalling EAC from the game install folder, restarting the PC, and checking for conflicting overlays or drivers before trying more disruptive steps.',
    tip: 'Test a normal Steam launch before starting other software so you can narrow down the cause.',
  }),
  guideDiscussion({
    slug: 'ext-loader', title: 'What does an External cheat loader mean?', upvotes: 46,
    excerpt: 'External cheat loader explained: separate process, overlay UI, portal updates vs risky injectors.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Arc Raiders external cheat guide', sourcePath: '/blog/external/',
    answer: 'The article uses “external” to describe software that runs separately from the game process and presents its interface as an overlay.',
    detail: 'It discusses the architecture at a high level and explains setup, patch updates, and the differences described between external and internal tools.',
    tip: 'Check compatibility and current status information whenever the game or EAC receives an update.',
  }),
  guideDiscussion({
    slug: 'stream-check', title: 'How do I check Stream-proof overlay in OBS?', upvotes: 21,
    excerpt: 'Stream-proof setup: record an OBS test so ESP overlays stay off your VOD before you go live.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Stream-proof overlay setup for Arc Raiders', sourcePath: '/blog/stream-proof/',
    answer: 'Record a short local test with the exact OBS scene and capture mode you plan to use, then review the playback for any overlay elements.',
    detail: 'The guide recommends testing game capture and display capture separately, since capture methods and multi-monitor setups can behave differently.',
    tip: 'Do not rely on the preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'hwid-check', title: 'After an EAC ban, what should I check on HWID?', upvotes: 33,
    excerpt: 'HWID Spoofer vs new account after an EAC hardware flag—checks before Discord support.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'HWID spoofer vs new account after an EAC ban', sourcePath: '/blog/hwid/',
    answer: 'Start by checking the account and device instructions for your product. The guide explains common HWID questions, when a new Embark account is enough, and when a reset request may be needed.',
    detail: 'Avoid changing several system settings at once. If the product does not recognize your device, contact support with the relevant error details.',
    tip: 'Use the official support path for device resets instead of relying on unrelated third-party tools.',
  }),
  guideDiscussion({
    slug: 'pre-install', title: 'What to review before installing cheat tools?', upvotes: 18,
    excerpt: 'Before installing cheat tools: status banner, Windows/Steam notes, and official setup on arcraiderhacks.com.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'Arc Raiders hack features: aimbot, ESP, no recoil and more', sourcePath: '/blog/features/',
    answer: 'Read the feature and setup information first, confirm that it matches your system, and check the current update and status notes.',
    detail: 'The site guide describes the available feature groups and links to more specific setup articles for individual modules.',
    tip: 'Use the linked product and support pages as the source of truth for current availability and compatibility.',
  }),
  guideDiscussion({
    slug: 'choose-tier', title: 'How do I choose the right hack tier to buy?', upvotes: 48,
    excerpt: 'Pick Lite, Pro or Elite hack tools by feature set, then follow secure checkout on arcraiderhacks.com.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'How to buy Arc Raiders hacks in 2026', sourcePath: '/blog/buy-guide/',
    answer: 'The buying guide recommends comparing included features and choosing the tier that fits your needs before continuing through the official checkout.',
    detail: 'It covers the purchase flow, account access, downloading the current build, and checking setup instructions before launching the game.',
    tip: 'If you have a payment or account question, use the site support page and avoid sharing purchase details publicly.',
    extraBody: [
      'Lite fits awareness-only players who want player ESP, loot lines and radar without aim automation. Pro adds aimbot, no recoil and Smart Aim for busier PvPvE weeks. Elite bundles loot assist, Skin Changer and priority patch delivery when you want every module in one license.',
      'Open the comparison on the products hub, confirm the live status banner, then checkout when your Windows build matches the published requirements.',
      'If you are unsure after reading the buy guide, skim the features article for module lists, note which combat tools you actually use in raids, and pick the smallest license that still covers those modules—you can review upgrade paths in Discord before paying.',
      'Delivery is the same for Lite, Pro and Elite: pay on the checkout partner, open the operator portal with your order email, download the current loader, then confirm the status banner is green before you queue for a raid.',
      'After the loader installs, import a conservative ESP preset first. Confirm overlay scaling in a training mode or private lobby, then enable combat modules only if you bought Pro or Elite. Keep Discord #status open on patch weeks so you do not launch into a queued update.',
    ],
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'admin-official', category: 'General', categoryTone: 'purple',
    title: 'Can I use Arc Raiders hacks on live extractions?',
    excerpt: 'Yes—through the external loader after checkout. Arc Raiders has no public console for ESP or aimbot on Surface or Underground raids.',
    author: 'guide_team', age: '2 hours ago', commentsCount: 3, upvotes: 128, flair: 'Guide Q&A',
    sourceTitle: 'Arc Raiders hacks guide: loader setup in training mode or private lobbies', sourcePath: '/blog/cheat-codes/',
    body: ['Live Arc Raiders extractions use Embark matchmaking—not a server you admin. That is why ESP, aimbot and radar ship through the Arc Raiders Hacks loader from your portal, not through in-game codes.', 'Test in a training mode or private lobby first: import a conservative preset, verify ESP alignment, then queue for Surface or Underground when the status banner is online.'],
    comments: [
      { author: 'base_builder_42', age: '1 hour ago', score: 24, body: 'Private lobby first saved me—caught overlay scaling issues before I took loot to the Surface.' },
      { author: 'kettle_main', age: '48 min. ago', score: 11, body: 'Status banner is non-negotiable after Embark patches. Wait for the build note in Discord #status.' },
      { author: 'scrap_collector', age: '35 min. ago', score: 8, body: 'Loader is the product. Random console lists from other games do not apply to Arc Raiders.' },
    ],
  },
  {
    slug: 'f1-console', category: 'General', categoryTone: 'purple',
    title: 'How do I install the loader after checkout?',
    excerpt: 'Use a private lobby first. Here is the quick setup from our walkthrough, including how to test modules before live raids.',
    author: 'guide_team', age: '4 hours ago', commentsCount: 2, upvotes: 86, flair: 'Guide Q&A',
    sourceTitle: 'How to use your loader after checkout', sourcePath: '/blog/use-codes/',
    body: ['Arc Raiders Hacks run through the external loader—not in-game console codes. On a training mode or private lobby, install the loader, import a conservative preset, and verify ESP before you queue for Surface or Underground runs.', 'If a module does nothing, confirm the live status banner is online, restart the loader after patches, and open a Discord ticket with your order ID.'],
    comments: [
      { author: 'raid_runner', age: '3 hours ago', score: 17, body: 'Portal → download loader → run as admin once → load preset. That order is in the use-codes guide.' },
      { author: 'carry_curious', age: '2 hours ago', score: 9, body: 'If Windows SmartScreen blocks the loader, use the hash from the portal and allow through Discord ticket steps.' },
    ],
  },
  {
    slug: 'spray-safe', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'Safest way to Practice recoil patterns?',
    excerpt: 'Practice spray control on a training mode or private lobby with a target wall before live seasons.',
    author: 'guide_team', age: '6 hours ago', commentsCount: 2, upvotes: 64, flair: 'Guide Q&A',
    sourceTitle: 'Arc Raiders aim and recoil practice tips', sourcePath: '/blog/console-tips/',
    body: ['Practice on your own training mode or private lobby. Give yourself the weapon and ammo, spray at a wall from a fixed distance, and compare each burst so you can see how the pattern climbs and drifts.', 'The guide also covers tools like the training range and spectator camera, which help you inspect sight lines and compound layouts without waiting for real in-game progress.'],
    comments: [
      { author: 'stack_and_pull', age: '5 hours ago', score: 13, body: 'I mark the wall after every magazine to see the shape. It makes controlling a Kettle spray much easier to learn.' },
      { author: 'map_reader', age: '4 hours ago', score: 6, body: 'And the debug camera is handy when you want to check angles on your stash route before a major patch.' },
    ],
  },
  {
    slug: 'after-patch', category: 'Patch Talk', categoryTone: 'orange',
    title: 'What should I check before playing after an EAC or game patch?',
    excerpt: 'The patch-day checklist recommends checking build status, updating, and testing on a quiet test session before a real session.',
    author: 'guide_team', age: '9 hours ago', commentsCount: 2, upvotes: 42, flair: 'Guide Q&A',
    sourceTitle: 'EAC patch day checklist for Arc Raiders hacks', sourcePath: '/blog/eac-patch/',
    body: ['Check the current build and status notice first. After a game or EAC update, wait for a compatible build, update the loader, then verify the setup on a quiet or training mode or private lobby before returning to busy Surface raids.', 'If anything behaves unexpectedly, stop and review the status notes rather than assuming the old setup still applies. The checklist covers the patch-day routine in more detail.'],
    comments: [
      { author: 'patch_day_vet', age: '8 hours ago', score: 12, body: 'Testing after the update before a real session is the part I used to skip. Now I check the build note and run a quick private test.' },
      { author: 'roamer_main_5', age: '7 hours ago', score: 7, body: 'Agree. If the status has not caught up, wait. A checklist is better than guessing.' },
    ],
  },
  {
    slug: 'lite-or-pro', category: 'Community', categoryTone: 'green',
    title: 'Lite tier or Pro: which tier includes aim assist?',
    excerpt: 'Lite tier is vision tools; Pro adds aimbot and recoil. See which hack tier to buy for your PvP style.',
    author: 'guide_team', age: '12 hours ago', commentsCount: 1, upvotes: 31, flair: 'Guide Q&A',
    sourceTitle: 'Lite tier vs Pro: which tier fits you', sourcePath: '/blog/lite-vs-pro/',
    body: ['According to the comparison guide, Lite centers on awareness features such as player ESP, loot and resource ESP, radar, FOV and stream-proof options. Pro includes those features and adds Aimbot, Soft Aim, Bone Select, Trigger Bot and No Recoil.', 'The best fit depends on which features you need. Read the full comparison before choosing.'],
    comments: [
      { author: 'one_more_raid', age: '10 hours ago', score: 10, body: 'The comparison page is useful because it shows which modules are included in each tier instead of only listing headlines.' },
    ],
  },
  {
    slug: 'spray-server', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'Practice spray control without risking kit?',
    excerpt: 'Create a training mode or private lobby, spawn a target and use private-lobby drills for Kettle and Rattler recoil.',
    author: 'guide_team', age: '1 day ago', commentsCount: 2, upvotes: 27, flair: 'Guide Q&A',
    sourceTitle: 'Arc Raiders hacks guide: loader setup in training mode or private lobbies', sourcePath: '/blog/cheat-codes/',
    body: ['Start a training mode or private lobby and make yourself an admin. You can then use a private lobby loadout to pick a weapon and ammo and respawn between attempts, so every drill starts from the same state.', 'For realistic practice, turn damage enabled before drilling. These commands are for servers you control; the linked guide has the full command list and setup steps.'],
    comments: [
      { author: 'kettle_main', age: '20 hours ago', score: 10, body: 'Start with a wall target and repeat the same spray until the pattern feels automatic.' },
      { author: 'base_builder_42', age: '18 hours ago', score: 5, body: 'Enable damage when you want to practice with normal damage and healing constraints.' },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
