import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const publicRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');

const REPLACEMENTS = [
  ['rustSystemRequirements', 'arcRaiderSystemRequirements'],
  ['raid_or_rust', 'raid_runner'],
  ['wipe_scout', 'patch_scout'],
  ["modes: ['Official', 'Community', 'Vanilla', 'Modded']", "modes: ['Surface', 'Underground', 'Co-op', 'PvPvE']"],
  ['Official and Community', 'Surface and Underground'],
  ['Official or Community', 'Surface or Underground'],
  ['Official, Community', 'Surface, Underground'],
  ['Official / Community', 'Surface / Underground'],
  ['Official servers', 'live extraction raids'],
  ['Official server', 'live extraction raid'],
  ['Official play', 'live raid play'],
  ['Official and Community presets', 'Surface and Underground presets'],
  ['Separate Official, Community and Vanilla presets', 'Separate Surface, Underground and Co-op presets'],
  ['Official, Community, Modded', 'Surface, Underground, PvPvE'],
  ['Modded servers', 'PvPvE sessions'],
  ['busy wipes', 'busy raid weeks'],
  ['between wipes', 'between seasons'],
  ['before wipe', 'before a major patch'],
  ['force-wipe', 'major patch'],
  ['wipe-day', 'patch-day'],
  ['wipe topics', 'patch topics'],
  ['current wipes', 'current seasons'],
  ['monument runs', 'POI runs'],
  ['monument alerts', 'POI alerts'],
  ['monument presets', 'POI presets'],
  ['monuments or beaches', 'POIs or beaches'],
  ['push monuments', 'push POIs'],
  ['sleepers and corpses', 'downed players and corpses'],
  ['sleepers and world loot', 'downed players and world loot'],
  ['sleepers and loot', 'downed players and loot'],
  ['sleepers and loot are', 'threats and loot are'],
  ['into sleepers', 'into ambushes'],
  ['sleeper and stash locator', 'downed-player and stash locator'],
  ['sleeper and corpse markers', 'downed-player and corpse markers'],
  ['sleeper indicators', 'downed-player indicators'],
  ['sleeper locator', 'downed-player locator'],
  ['sleepers', 'downed players'],
  ['sleeper', 'downed player'],
  ['hemp, wood, stone', 'salvage and crafting materials'],
  ['hemp wood stone', 'salvage crafting nodes'],
  ['forest wipe farm route', 'forest loot route'],
  ['stone base', 'compound wall'],
  ['oil rig coastline', 'refinery coastline'],
  ['Thursday update', 'patch day update'],
  ['F1 conflicts', 'default console key conflicts'],
  ['F1 admin', 'debug'],
  ['F1 console', 'in-game console'],
  ['admin console codes', 'debug console codes'],
  ['admin commands', 'debug commands'],
  ['admin-only', 'debug-only'],
  ['private server', 'private lobby'],
  ['private servers', 'private lobbies'],
  ['Vanilla preset', 'Co-op preset'],
  ['Vanilla and Modded', 'Co-op and PvPvE'],
  ['Vanilla server', 'Co-op test session'],
  ['Vanilla and', 'Co-op and'],
  ['Vanilla', 'Co-op'],
  ['Modded', 'PvPvE'],
  ['Official', 'Surface'],
  ['Community servers', 'Underground runs'],
  ['Community server', 'Underground run'],
  ['Community preset', 'Underground preset'],
  ['Community and', 'Underground and'],
  ['Community', 'Underground'],
  ['Steam PC utilities', 'PC utilities'],
  ['via Steam with', 'with'],
  ['on Steam PC', 'on PC'],
  ['for Steam PC', 'for PC'],
  ['Steam platform', 'PC platform'],
  ['Steam and local', 'Embark account and local'],
  ['Steam holds', 'platform holds'],
  ['Steam account', 'Embark account'],
  ['buying every Arc Raiders cosmetic on Steam', 'unlocking every Arc Raiders cosmetic locally'],
];

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      if (name === 'node_modules') continue;
      walk(full, files);
    } else if (/\.(ts|astro|json|txt|webmanifest|svg|md)$/.test(name) || name === '_redirects') {
      files.push(full);
    }
  }
  return files;
}

let changed = 0;
for (const file of [...walk(root), ...walk(publicRoot)]) {
  let text = fs.readFileSync(file, 'utf8');
  let next = text;
  for (const [from, to] of REPLACEMENTS) {
    next = next.split(from).join(to);
  }
  if (next !== text) {
    fs.writeFileSync(file, next, 'utf8');
    changed++;
  }
}
console.log(`Terminology cleanup: ${changed} files updated`);
