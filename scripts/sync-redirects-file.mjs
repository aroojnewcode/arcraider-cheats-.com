import fs from 'node:fs';
import path from 'node:path';
import { PATH_REDIRECTS } from './redirects.mjs';

const root = process.cwd();
const outPath = path.join(root, 'public', '_redirects');

const lines = [];

for (const [from, to] of PATH_REDIRECTS.entries()) {
  if (to.startsWith('http://') || to.startsWith('https://')) continue;
  lines.push(`${from} ${to} 301`);
}

/** Checkout /go/* 302s live in Worker only (checkout-redirects.mjs) — not in _redirects, so Astro emits go/[slug] fallback HTML. */

fs.writeFileSync(outPath, lines.join('\n') + '\n', 'utf8');
console.log(`Synced public/_redirects (${lines.length} rules) from redirects.mjs.`);
