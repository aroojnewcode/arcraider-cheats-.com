/**
 * Download Supabase Arc Raiders screenshots → public PNG sources + responsive WebP variants.
 * Excludes ESP overlay screenshots (s1 + arcraidersimage1).
 * Run: node scripts/fetch-arc-raiders-media.mjs && node scripts/optimize-images.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();

const SOURCES = [
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793866391955-mn4li4-arcane-arc-s2.webp',
    file: 'arc-raiders-screenshot-2.png',
  },
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793866372473-d20cm3-arcane-arc-s3.webp',
    file: 'arc-raiders-screenshot-3.png',
  },
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793866348754-97lv7p-arcane-arc-s4.webp',
    file: 'arc-raiders-screenshot-4.png',
  },
];

/** Gameplay gallery + hero slider filenames (reuse promo shots only). */
const GAMEPLAY_MAP = [
  ['arc-raiders-map-hack.png', 0],
  ['arc-raiders-player-esp.png', 1],
  ['arc-raiders-scripts-combo.png', 2],
  ['arc-raiders-zoom-hack.png', 0],
  ['arc-raiders-skin-changer.png', 1],
  ['arc-raiders-loot-highlight.png', 2],
  ['arc-raiders-loot-assist.png', 0],
];

const BLOG_FILES = [
  'cheat-codes.png',
  'console-tips.png',
  'use-codes.png',
  'features.png',
  'console-cmds.png',
  'lite-vs-pro.png',
  'elite.png',
  'aimbot.png',
  'esp.png',
  'fov.png',
  'skins.png',
  'eac-patch.png',
  'hwid.png',
  'buy-guide.png',
  'eac-error.png',
  'external.png',
  'stream-proof.png',
];

async function downloadBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function writeGameplayPng(buffer, destPath) {
  await sharp(buffer)
    .resize({ width: 1600, height: 900, fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 8, effort: 7 })
    .toFile(destPath);
}

const arcDir = path.join(root, 'public/images/arc-raiders');
const gameplayDir = path.join(root, 'public/images/gameplay');
const productDir = path.join(root, 'public/images/product');
const blogDir = path.join(root, 'public/images/blog');

/** Product page gallery — edit ids in src/config/productGallery.ts */
const PRODUCT_MAP = [
  ['awareness.png', 0],
  ['combat.png', 1],
  ['world.png', 2],
];

for (const dir of [arcDir, gameplayDir, productDir, blogDir]) {
  fs.mkdirSync(dir, { recursive: true });
}

for (const legacy of ['arc-raiders-screenshot-1.png', 'arc-raiders-screenshot-5.png']) {
  const p = path.join(arcDir, legacy);
  if (fs.existsSync(p)) fs.unlinkSync(p);
}

const buffers = [];
for (const { url, file } of SOURCES) {
  console.log('Downloading', file);
  const buf = await downloadBuffer(url);
  buffers.push(buf);
  await writeGameplayPng(buf, path.join(arcDir, file));
}

for (const [outName, srcIndex] of GAMEPLAY_MAP) {
  await writeGameplayPng(buffers[srcIndex], path.join(gameplayDir, outName));
  console.log('Gameplay', outName);
}

for (const [outName, srcIndex] of PRODUCT_MAP) {
  await writeGameplayPng(buffers[srcIndex], path.join(productDir, outName));
  console.log('Product', outName);
}

for (let i = 0; i < BLOG_FILES.length; i++) {
  const srcIndex = i % buffers.length;
  await writeGameplayPng(buffers[srcIndex], path.join(blogDir, BLOG_FILES[i]));
  console.log('Blog', BLOG_FILES[i]);
}

const bonesPath = path.join(blogDir, 'bones.png');
if (fs.existsSync(bonesPath)) fs.unlinkSync(bonesPath);
for (const w of [320, 400, 512, 640, 960]) {
  const webp = path.join(blogDir, `bones-${w}.webp`);
  if (fs.existsSync(webp)) fs.unlinkSync(webp);
}

console.log('Arc Raiders media import complete.');
