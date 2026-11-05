/**
 * Final pass: unify site copy for ARC Raiders (Embark) — brand, weapons, no Rust leftovers.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const TARGET_DIRS = ['src', 'public', '.seo-baseline', 'docs'];
const SKIP = new Set(['node_modules', '.git', 'dist', 'scripts']);

const REPLACEMENTS = [
  ['Arc Raider Hacks', 'Arc Raiders Hacks'],
  ['Arc Raider hacks', 'Arc Raiders hacks'],
  ['Arc Raider hack', 'Arc Raiders hack'],
  ['Arc Raider buyer', 'Arc Raiders buyer'],
  ['Arc Raider product', 'Arc Raiders product'],
  ['Buy Arc Raider', 'Buy Arc Raiders'],
  ['Shop Arc Raider', 'Shop Arc Raiders'],
  ['TITLE_PREFIX = \'Arc Raider Hacks\'', "TITLE_PREFIX = 'Arc Raiders Hacks'"],
  ['Sleeper & stash locator', 'Downed-player & stash locator'],
  ['Monument & event alerts', 'POI & ARC event alerts'],
  ['Wipe-day ready', 'Patch-day ready'],
  ['Wipe Ready', 'Patch Ready'],
  ['wipe your kit', 'lose your loadout'],
  ['official servers', 'live extraction raids'],
  ['official server', 'live extraction raid'],
  ['community server restrictions', 'platform and anti-cheat restrictions'],
  ['community server where', 'custom lobby where'],
  ['community server', 'custom lobby'],
  ['busy servers', 'busy Surface raids'],
  ['quiet server', 'quiet test session'],
  ['live servers', 'live raids'],
  ['live server', 'live raid'],
  ['cheat tools features', 'Arc Raiders hack features'],
  ['How to buy cheat tools', 'How to buy Arc Raiders hacks'],
  ['cheat tools in 2026', 'Arc Raiders hacks in 2026'],
  ['EAC patch day checklist for cheat tools', 'EAC patch day checklist for Arc Raiders hacks'],
  ['Arc Raiders console cheats and tips', 'Arc Raiders aim and recoil practice tips'],
  ['How to use cheat codes', 'How to use your loader after checkout'],
  ['cheat codes guide: in-game console and debug commands for training mode or private lobbys', 'Arc Raiders hacks guide: loader setup in training mode or private lobbies'],
  ['Admin cheat codes', 'Loader on live raids'],
  ['Can I use Admin cheat codes on official servers?', 'Can I use the hack loader on live Arc Raiders extractions?'],
  ['in-game console commands only work for admins', 'Arc Raiders live raids use the external loader—not in-game console codes'],
  ['AK, LR-300, MP5, M249, bolt and more', 'Kettle, Tempest, Rattler, Hullcracker, Ferro and more'],
  ['AK, LR-300, MP5 and bolt', 'Kettle, Tempest, Rattler and Ferro'],
  ['AK, LR-300 and MP5', 'Kettle, Tempest and Rattler'],
  ['AK / LR-300', 'Kettle / Tempest'],
  ['AK and MP5', 'Kettle and Rattler'],
  ['AK and LR-300', 'Kettle and Tempest'],
  ['MP5 and bolt', 'Rattler and Ferro'],
  ['AK","Soft Aim', 'Kettle","Soft Aim'],
  ['LR-300","Soft Aim', 'Tempest","Soft Aim'],
  ['MP5","Soft Aim', 'Rattler","Soft Aim'],
  ['Bolt rifle","Soft Aim', 'Ferro","Soft Aim'],
  ['The AK has', 'The Kettle has'],
  ['The LR-300 is', 'The Tempest is'],
  ['The MP5 shines', 'The Rattler shines'],
  ['Bolt rifles are', 'Ferro precision shots are'],
  ['controlling an AK spray', 'controlling a Kettle spray'],
  ['ak_or_nothing', 'kettle_main'],
  ['inventory.give', 'loadout spawns in a private lobby'],
  ['noclip, god and inventory.give', 'spectator tools in a private lobby'],
  ['noclip, god and env.time', 'private-lobby training tools'],
  ['noclip and the debug camera', 'the training range and spectator camera'],
  ['god mode off', 'damage enabled'],
  ['Turn god off', 'Enable damage'],
  ['turn god off', 'enable damage'],
  ['building and raid timings', 'extraction timing and POI rotations'],
  ['base layouts', 'compound layouts'],
  ['on your own base', 'on your stash route'],
  ['bow profiles', 'sidearm profiles'],
  [' and bow', ' and sidearm'],
  ['—the cheats store', '—the Arc Raiders hacks store'],
  ['Elite cheats', 'Elite hacks'],
  ['Buy Elite Arc Raider hacks', 'Buy Elite Arc Raiders hacks'],
  ['Buy Arc Raiders Elite cheats:', 'Buy Arc Raiders Elite hacks:'],
  ['cheats store', 'hacks store'],
  ['third-party cheat tools on live servers', 'Arc Raiders hack loader on live extractions'],
  ['third-party cheat tools', 'Arc Raiders hack loader'],
  ['cheat tier to buy', 'hack tier to buy'],
  ['cheat tier', 'hack tier'],
  ['Cheat tier', 'Hack tier'],
  ['Which cheat tier', 'Which hack tier'],
  ['cheat products', 'hack products'],
  ['Searching for "Arc Raider hack codes"', 'Searching for "Arc Raiders hack codes"'],
  ['Commands such as noclip, god and loadout spawns in a private lobby are server administration tools', 'Arc Raiders has no public admin console on live extractions—the loader is what runs on Surface and Underground raids'],
  ['give commands for repeatable Kettle and Rattler drills', 'private-lobby drills for Kettle and Rattler recoil'],
  ['use commands such as loadout spawns in a private lobby to add a weapon', 'use a private lobby loadout to pick a weapon'],
  ['Weapon recoil profiles (AK, LR-300, MP5)', 'Weapon recoil profiles (Kettle, Tempest, Rattler)'],
  ['guide walks through example profiles for the AK, LR-300, MP5 and bolt rifle', 'guide walks through example profiles for Kettle, Tempest, Rattler and Ferro'],
  ['Elite cheat', 'Elite hack'],
  ['join a server', 'queue for a raid'],
  ['before you join a server', 'before you queue for a raid'],
  ['Patch notes hit Discord and the portal before the official blog—check before you join a server.', 'Patch notes hit Discord and the portal before the Embark blog—check before you queue for a raid.'],
];

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      if (SKIP.has(name)) continue;
      walk(full, files);
    } else if (/\.(ts|astro|txt|md|html|webmanifest|svg|css|toml)$/.test(name) || name === '_redirects') {
      files.push(full);
    }
  }
  return files;
}

let changed = 0;
for (const dir of TARGET_DIRS.map((d) => path.join(root, d))) {
  for (const file of walk(dir)) {
    const raw = fs.readFileSync(file, 'utf8');
    let next = raw;
    for (const [from, to] of REPLACEMENTS) {
      next = next.split(from).join(to);
    }
    if (next !== raw) {
      fs.writeFileSync(file, next, 'utf8');
      changed++;
    }
  }
}
console.log(`Arc Raiders conversion updated ${changed} files`);
