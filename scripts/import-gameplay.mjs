import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const assets =
  'C:/Users/3Tee System/.cursor/projects/c-Users-3Tee-System-Downloads-arcraider-hacks-net-main/assets';
const outDir = 'public/images/gameplay';
mkdirSync(outDir, { recursive: true });

/** Map source screenshots → site gameplay filenames */
const map = [
  ['Screenshot_2026-10-26_154515-5f0a1c42-c5da-4212-8164-b941d9c0a9f0.jpg', 'arc-raiders-map-hack.png'],
  [
    'Nishan_Kazi_Entertainment_-_I_Tested_the_BEST_RUST_CHEATS_in_2026__This_Wipe_Got_Crazy__EXId_RhmLAc_-_1426x802_-_0m44s_-b4dafbf3-54e1-424c-9aca-08263fad38c9.jpg',
    'arc-raiders-scripts-combo.png',
  ],
  ['Screenshot_2026-10-26_154452-9ae2c9e8-e94d-4cd2-a3db-e6a66657191c.jpg', 'arc-raiders-zoom-hack.png'],
  [
    'Nishan_Kazi_Entertainment_-_I_Tested_the_BEST_RUST_CHEATS_in_2026__This_Wipe_Got_Crazy__EXId_RhmLAc_-_1426x802_-_1m00s_-646fee91-e762-463c-860a-0bc7d9f022ed.jpg',
    'arc-raiders-skin-changer.png',
  ],
  ['Screenshot_2026-10-26_154508-9a945289-8f3c-4b13-8a6e-deb32c82e4bd.jpg', 'arc-raiders-loot-highlight.png'],
  ['Screenshot_2026-10-26_154658-911d337c-d568-47be-9de5-cbd0b06af6bf.jpg', 'arc-raiders-loot-assist.png'],
  ['Screenshot_2026-10-26_154501-eda1a21a-bbb0-49e1-bb79-c7f2f29d9eb6.jpg', 'arc-raiders-player-esp.png'],
];

for (const [srcName, outName] of map) {
  const src = join(assets, srcName);
  const dest = join(outDir, outName);
  await sharp(src)
    .resize({ width: 1600, height: 900, fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 8, effort: 7 })
    .toFile(dest);
  console.log('wrote', outName);
}

console.log('Gameplay import complete');
