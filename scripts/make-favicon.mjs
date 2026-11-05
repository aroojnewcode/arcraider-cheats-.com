/**
 * Generate favicon + logo assets from public/brand/arc-favicon-source.png
 * Run: npm run brand:icons
 */
import sharp from 'sharp';
import { writeFileSync, readFileSync, mkdirSync, existsSync, unlinkSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const defaultSrc = path.join(root, 'public/brand/arc-favicon-source.png');
const src = process.env.BRAND_ICON_SOURCE?.trim() || defaultSrc;

if (!existsSync(src)) {
  console.error('Missing brand source:', src);
  process.exit(1);
}

const publicDir = path.join(root, 'public');
mkdirSync(path.join(publicDir, 'brand'), { recursive: true });

/** Single Arc Raiders icon set — no duplicate android-chrome / legacy game files. */
const sizes = [
  ['favicon-16.png', 16],
  ['favicon-32.png', 32],
  ['apple-touch-icon.png', 180],
  ['favicon-192.png', 192],
  ['favicon-512.png', 512],
];

for (const [name, size] of sizes) {
  await sharp(src)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, name));
}

function pngToIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let offset = 6 + count * 16;
  const entries = [];
  for (const png of pngBuffers) {
    const w = png.readUInt32BE(16);
    const h = png.readUInt32BE(20);
    const meta = Buffer.alloc(16);
    meta[0] = w >= 256 ? 0 : w;
    meta[1] = h >= 256 ? 0 : h;
    meta.writeUInt16LE(1, 4);
    meta.writeUInt16LE(32, 6);
    meta.writeUInt32LE(png.length, 8);
    meta.writeUInt32LE(offset, 12);
    entries.push(meta);
    offset += png.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

const p16 = await sharp(src)
  .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
  .png()
  .toBuffer();
const p32 = await sharp(src)
  .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
  .png()
  .toBuffer();
const p48 = await sharp(src)
  .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
  .png()
  .toBuffer();
writeFileSync(path.join(publicDir, 'favicon.ico'), pngToIco([p16, p32, p48]));

const png128 = (
  await sharp(src)
    .resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
    .png()
    .toBuffer()
).toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="Arc Raiders Hacks">
  <rect width="128" height="128" fill="#000"/>
  <image href="data:image/png;base64,${png128}" width="128" height="128"/>
</svg>
`;
writeFileSync(path.join(publicDir, 'favicon.svg'), svg);
writeFileSync(path.join(publicDir, 'logo.svg'), svg);

writeFileSync(path.join(publicDir, 'favicon.png'), readFileSync(path.join(publicDir, 'favicon-32.png')));

const legacyPublicIcons = [
  'android-chrome-192.png',
  'android-chrome-512.png',
  'favicon.ico.png',
  'logo.png',
];

for (const name of legacyPublicIcons) {
  const file = path.join(publicDir, name);
  if (existsSync(file)) {
    unlinkSync(file);
    console.log('Removed legacy icon', name);
  }
}

console.log('Brand icons generated from', path.relative(root, src));
