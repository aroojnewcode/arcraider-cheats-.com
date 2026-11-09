import fs from 'node:fs';
import path from 'node:path';
import { CHECKOUT_URLS } from '../src/config/checkout-redirects.mjs';
import { PATH_REDIRECTS } from './redirects.mjs';

const root = process.cwd();
const outPath = path.join(root, 'public', '_redirects');

const lines = [];

for (const [from, to] of PATH_REDIRECTS.entries()) {
  if (to.startsWith('http://') || to.startsWith('https://')) continue;
  lines.push(`${from} ${to} 301`);
}

/** External checkout 302s — handled by Worker + checkout-redirects.mjs, kept for CF Assets fallback. */
const checkoutTargets = [
  ['/go/arc-raiders/', CHECKOUT_URLS.arcRaider],
  ['/go/arc-raiders', CHECKOUT_URLS.arcRaider],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
  ['/go/ugc', CHECKOUT_URLS.ugc],
];
for (const [from, to] of checkoutTargets) {
  lines.push(`${from} ${to} 302`);
}

fs.writeFileSync(outPath, lines.join('\n') + '\n', 'utf8');
console.log(`Synced public/_redirects (${lines.length} rules) from redirects.mjs.`);
