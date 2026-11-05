/**
 * One-shot rebrand: Rust Cheats → Arc Raider Hacks (arcraiderhacks.com)
 * Run: node scripts/rebrand-arcraider.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro']);

const TEXT_EXT = new Set([
  '.ts',
  '.tsx',
  '.astro',
  '.mjs',
  '.js',
  '.json',
  '.md',
  '.txt',
  '.html',
  '.css',
  '.svg',
  '.toml',
]);

/** Longest-first literal replacements (paths/domains before bare "Rust"). */
const REPLACEMENTS = [
  ['https://rust-cheats.net', 'https://arcraiderhacks.com'],
  ['rust-cheats.net', 'arcraiderhacks.com'],
  ['rust-cheats-forum-vote:', 'arcraiderhacks-forum-vote:'],
  ['/products/rust-cheats/', '/products/arcraider-hacks/'],
  ['products/rust-cheats', 'products/arcraider-hacks'],
  ['/blog/rust-', '/blog/arc-raiders-'],
  ['/forum/how-to-choose-rust-product-tier', '/forum/how-to-choose-product-tier'],
  ['/forum/how-to-open-the-rust-f1-console', '/forum/how-to-open-dev-console'],
  ['/forum/practice-rust-recoil-patterns-safely', '/forum/practice-recoil-patterns-safely'],
  ['/forum/rust-lite-or-pro-aim-assist', '/forum/lite-or-pro-aim-assist'],
  ['/products/dota-2-cheats/', '/products/arcraider-hacks/'],
  ['/products/dota-2-cheats', '/products/arcraider-hacks'],
  ['dotacheats.com', 'arcraiderhacks.com'],
  ['%2Fproducts%2Fdota-2', '%2Fproducts%2Farc-raiders'],
  ['%2Fproducts%2Frust', '%2Fproducts%2Farc-raiders'],
  ['/products/rust', '/products/arc-raiders'],
  ['/go/rust/', '/go/arc-raiders/'],
  ['/go/rust', '/go/arc-raiders'],
  ['CHECKOUT_URLS.rust', 'CHECKOUT_URLS.arcRaider'],
  ["checkoutPath('rust')", "checkoutPath('arcRaider')"],
  ['checkoutPath("rust")', 'checkoutPath("arcRaider")'],
  ["checkoutRedirectPath('rust')", "checkoutRedirectPath('arcRaider')"],
  ["checkoutExternalUrl('rust')", "checkoutExternalUrl('arcRaider')"],
  ["checkoutPath('rust');", "checkoutPath('arcRaider');"],
  ['CheckoutProduct = \'rust\'', "CheckoutProduct = 'arcRaider'"],
  ['default:\n      return checkoutPath(\'rust\')', "default:\n      return checkoutPath('arcRaider')"],
  ['return checkoutPath(\'rust\')', "return checkoutPath('arcRaider')"],
  ['PRIMARY_CHECKOUT_PATH = checkoutPath(\'rust\')', "PRIMARY_CHECKOUT_PATH = checkoutPath('arcRaider')"],
  ['rust: \'https://zadeyo.com/go/QRH?to=%2Fproducts%2Frust\'', "arcRaider: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Farc-raiders'"],
  ['rust: "https://zadeyo.com/go/QRH?to=%2Fproducts%2Frust"', 'arcRaider: "https://zadeyo.com/go/QRH?to=%2Fproducts%2Farc-raiders"'],
  ['  rust: \'rust\',', "  arcRaider: 'arc-raiders',"],
  ["checkoutPath('rust')", "checkoutPath('arcRaider')"],
  ['checkoutForSlug(\'rust\')', "checkoutForSlug('arcRaider')"],
  ['Rust Cheats', 'Arc Raider Hacks'],
  ['rust cheats', 'Arc Raider hacks'],
  ['Rust cheats', 'Arc Raider hacks'],
  ['undetected rust cheats', 'undetected Arc Raider hacks'],
  ['Rust HWID', 'Arc Raiders HWID'],
  ['Rust UGC', 'Arc Raiders UGC'],
  ['Rust Elite', 'Arc Raiders Elite'],
  ['Rust Lite', 'Arc Raiders Lite'],
  ['Rust Pro', 'Arc Raiders Pro'],
  ['rust aimbot', 'arc raiders aimbot'],
  ['rust esp', 'arc raiders esp'],
  ['Rust ESP', 'Arc Raiders ESP'],
  ['Rust PC', 'Arc Raiders PC'],
  ['Steam Rust', 'Arc Raiders'],
  ['launch Steam Rust', 'launch Arc Raiders'],
  ['join Rust', 'play Arc Raiders'],
  ['Rust client', 'Arc Raiders client'],
  ['Rust —', 'Arc Raiders —'],
  ['Rust server', 'Arc Raiders session'],
  ['Rust update', 'Arc Raiders update'],
  ['Rust wipe', 'season patch'],
  ['Rust wild-west Thursday', 'Arc Raiders patch day'],
  ['Rust or EAC', 'Arc Raiders or anti-cheat'],
  ['after Rust', 'after Arc Raiders'],
  ['major Rust', 'major Arc Raiders'],
  ['Facepunch', 'Embark Studios'],
  ['wild-west', 'patch-day'],
  ['wipe day', 'patch day'],
  ['wipe-ready', 'patch-ready'],
  ['Wipe Day', 'Patch Day'],
  ['wipe notes', 'patch notes'],
  ['forced wipes', 'major patches'],
  ['Rust wipes', 'game patches'],
  ['every wipe', 'every major patch'],
  ['first raid', 'first extraction run'],
  ['raids, monument', 'extractions, POI'],
  ['monument fights', 'POI fights'],
  ['crowded roams', 'hot drop zones'],
  ['Official and Community servers', 'Surface raids and underground runs'],
  ['Official, Community, Vanilla and Modded', 'Surface, Underground, Co-op and PvPvE'],
  ['Official, Community or Modded servers', 'Surface, Underground or Co-op sessions'],
  ['Vanilla server', 'low-pop test session'],
  ['Vanilla and Modded', 'Co-op and PvPvE'],
  ['Rust skin', 'Arc Raiders cosmetic'],
  ['Rust skins', 'Arc Raiders cosmetics'],
  ['Rust Steam password', 'Arc Raiders account password'],
  ['Rust is rated', 'Arc Raiders is rated'],
  ['Rust product', 'Arc Raider product'],
  ['Rust tools', 'Arc Raider tools'],
  ['Rust loader', 'Arc Raider loader'],
  ['Rust cheat', 'Arc Raider hack'],
  ['Rust cheats', 'Arc Raider hacks'],
  ['Rust Cheat', 'Arc Raider Hack'],
  ['Rust map', 'Arc Raiders radar'],
  ['rust-map-hack', 'arc-raiders-map-hack'],
  ['rust-player-esp', 'arc-raiders-player-esp'],
  ['rust-zoom-hack', 'arc-raiders-zoom-hack'],
  ['rust-skin-changer', 'arc-raiders-skin-changer'],
  ['rust-scripts-combo', 'arc-raiders-scripts-combo'],
  ['rust-farm-bot', 'arc-raiders-loot-assist'],
  ['rust-auto-kill-steal', 'arc-raiders-loot-highlight'],
  ['rust-icon.jpg', 'arc-raiders-icon.jpg'],
  ['rust-cheats', 'arcraider-hacks'],
  ['@rustcheats', '@arcraiderhacks'],
  ['Rust — EAC build online', 'Arc Raiders — anti-cheat build online'],
  ['Undetected Rust Cheats', 'Undetected Arc Raider Hacks'],
  ['Rust server types', 'Arc Raiders modes'],
  ['Auto Farm Helpers', 'Loot Route Assist'],
  ['auto farm helpers', 'loot route assist'],
  ['Auto gather assist for ore and trees', 'Loot and container highlight assist'],
  ['Node-to-node route hints', 'Extraction route hints'],
  ['Wipe-day farm presets', 'Patch-day loot presets'],
  ['farm bot', 'loot assist'],
  ['Farm Bot', 'Loot Assist'],
  ['Farm Suite', 'Extraction Suite'],
  ['farm helpers', 'loot assist tools'],
  ['AK, LR-300, MP5 and bows', 'assault rifles, SMGs and sidearms'],
  ['crates, barrels, military and elite loot', 'containers, ARC drops and high-tier loot'],
  ['Ore, wood and resource node markers', 'Crafting and salvage node markers'],
  ['Stash, vehicle and airdrop alerts', 'Stash, vehicle and supply drop alerts'],
  ['noclip, god and give', 'dev-only debug toggles'],
  ['F1 admin commands', 'single-player debug commands'],
  ['F1 console', 'in-game console'],
  ['admin commands', 'debug commands'],
  ['private server', 'training mode or private lobby'],
  ['name": "rust-cheats"', 'name": "arcraider-hacks"'],
  ['name = "rust-cheats-net"', 'name = "arcraiderhacks-com"'],
  ['TITLE_PREFIX = \'Rust Cheats & Hacks\'', "TITLE_PREFIX = 'Arc Raider Hacks'"],
  ['Rust help center', 'Arc Raider help center'],
  ['Shop Rust products', 'Shop Arc Raider products'],
  ['Rust Cheats page', 'Arc Raider Hacks page'],
  ['Rust Cheats URL', 'Arc Raider Hacks URL'],
  ['Rust Cheats 404', 'Arc Raider Hacks 404'],
  ['Rust buyer forum', 'Arc Raider buyer forum'],
  ['Rust Cheats guide team', 'Arc Raider Hacks guide team'],
  ['Rust Cheats guides', 'Arc Raider Hacks guides'],
  ['Compare Rust utilities', 'Compare Arc Raider utilities'],
  ['Shop Rust cheats', 'Shop Arc Raider hacks'],
  ['More Rust cheat', 'More Arc Raider hack'],
  ['Rust-focused', 'Arc Raiders-focused'],
  ['All Rust Cheat', 'All Arc Raider Hack'],
  ['Rust Tiers', 'Arc Raider tiers'],
  ['Rust Cheats Reviews', 'Arc Raider Hacks Reviews'],
  ['Rust Cheats Terms', 'Arc Raider Hacks Terms'],
  ['Rust Cheats Discord', 'Arc Raider Hacks Discord'],
  ['Buy Rust Cheats', 'Buy Arc Raider Hacks'],
  ['Buy Rust HWID', 'Buy Arc Raiders HWID'],
  ['Purchase Elite tier: skeleton ESP', 'Purchase Elite tier: skeleton ESP'],
  ['Rust and Easy Anti-Cheat', 'Arc Raiders and anti-cheat'],
  ['Rust and EAC receive', 'Arc Raiders and anti-cheat receive'],
  ['Elite Rust cheats', 'Elite Arc Raider hacks'],
  ['Select Elite Rust cheats', 'Select Elite Arc Raider hacks'],
  ['segment || \'rust-cheats\'', "segment || 'arcraider-hacks'"],
  ['checkoutPath(\'rust\')', "checkoutPath('arcRaider')"],
  ['/go/rust/', '/go/arc-raiders/'],
];

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (SKIP_DIRS.has(name)) continue;
      walk(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

function applyReplacements(content) {
  let out = content;
  for (const [from, to] of REPLACEMENTS) {
    out = out.split(from).join(to);
  }
  // Remaining standalone "Rust" → "Arc Raiders" (avoid breaking "trust", URLs already done)
  out = out.replace(/\bRust\b/g, 'Arc Raiders');
  out = out.replace(/\brust\b/g, (m, offset, str) => {
    const before = str.slice(Math.max(0, offset - 20), offset);
    if (/checkoutPath\(['"]$/.test(before)) return m;
    return 'arc raiders';
  });
  return out;
}

function rebrandTextFiles() {
  const files = walk(root);
  let changed = 0;
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!TEXT_EXT.has(ext)) continue;
    if (file.endsWith('rebrand-arcraider.mjs')) continue;
    const raw = fs.readFileSync(file, 'utf8');
    const next = applyReplacements(raw);
    if (next !== raw) {
      fs.writeFileSync(file, next, 'utf8');
      changed++;
    }
  }
  console.log(`Updated ${changed} text files`);
}

function renameProductPagesDir() {
  const from = path.join(root, 'src', 'pages', 'products', 'rust-cheats');
  const to = path.join(root, 'src', 'pages', 'products', 'arcraider-hacks');
  if (fs.existsSync(from) && !fs.existsSync(to)) {
    fs.renameSync(from, to);
    console.log('Renamed products page directory');
  }
}

function renameGameplayImages() {
  const dir = path.join(root, 'public', 'images', 'gameplay');
  if (!fs.existsSync(dir)) return;
  const renames = [
    ['rust-map-hack', 'arc-raiders-map-hack'],
    ['rust-player-esp', 'arc-raiders-player-esp'],
    ['rust-zoom-hack', 'arc-raiders-zoom-hack'],
    ['rust-skin-changer', 'arc-raiders-skin-changer'],
    ['rust-scripts-combo', 'arc-raiders-scripts-combo'],
    ['rust-farm-bot', 'arc-raiders-loot-assist'],
    ['rust-auto-kill-steal', 'arc-raiders-loot-highlight'],
  ];
  for (const name of fs.readdirSync(dir)) {
    for (const [from, to] of renames) {
      if (name.startsWith(from)) {
        const newName = name.replace(from, to);
        fs.renameSync(path.join(dir, name), path.join(dir, newName));
        break;
      }
    }
  }
  const iconFrom = path.join(root, 'public', 'rust-icon.jpg');
  const iconTo = path.join(root, 'public', 'arc-raiders-icon.jpg');
  if (fs.existsSync(iconFrom) && !fs.existsSync(iconTo)) {
    fs.renameSync(iconFrom, iconTo);
  }
  console.log('Renamed gameplay images');
}

renameProductPagesDir();
renameGameplayImages();
rebrandTextFiles();
console.log('Rebrand complete');
