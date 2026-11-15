/**
 * Post-deploy HTTPS redirect smoke tests (see docs/SEO-DEPLOY.md).
 * Usage: SMOKE_ORIGIN=https://arcraiderhacks.com node scripts/seo-smoke.mjs
 */
const origin = (process.env.SMOKE_ORIGIN || 'https://arcraiderhacks.com').replace(/\/$/, '');

/** @type {{ url: string; expectStatus: number; expectLocation?: RegExp | string }[]} */
const cases = [
  { url: `${origin}/`, expectStatus: 200 },
  { url: `${origin}/products/arcraider-hacks/lite/`, expectStatus: 200 },
  { url: `${origin}/blog/buy-guide/`, expectStatus: 200 },
  { url: `${origin}/forum/`, expectStatus: 200 },
  {
    url: `${origin}/blog/rust-cheat-codes-guide`,
    expectStatus: 301,
    expectLocation: /\/blog\/cheat-codes\//,
  },
  {
    url: `https://www.arcraiderhacks.com/reviews/`,
    expectStatus: 301,
    expectLocation: /https:\/\/arcraiderhacks\.com\/reviews\//,
  },
  {
    url: `${origin}/products/rust`,
    expectStatus: 301,
    expectLocation: /\/products\/arcraider-hacks\//,
  },
  {
    url: `${origin}/cheats/lite`,
    expectStatus: 301,
    expectLocation: /\/products\/arcraider-hacks\/lite\//,
  },
  {
    url: `${origin}/contact/`,
    expectStatus: 301,
    expectLocation: /\/support\//,
  },
];

async function checkCase(test) {
  const res = await fetch(test.url, { redirect: 'manual' });
  if (res.status !== test.expectStatus) {
    return `${test.url} → expected HTTP ${test.expectStatus}, got ${res.status}`;
  }
  if (test.expectLocation) {
    const loc = res.headers.get('location') ?? '';
    const pattern = test.expectLocation;
    const ok = typeof pattern === 'string' ? loc.includes(pattern) : pattern.test(loc);
    if (!ok) return `${test.url} → Location "${loc}" did not match ${pattern}`;
  }
  if (test.expectStatus === 200) {
    const proto = res.url.startsWith('https:');
    if (!proto) return `${test.url} → final URL is not HTTPS: ${res.url}`;
  }
  return null;
}

let failed = 0;
for (const test of cases) {
  try {
    const err = await checkCase(test);
    if (err) {
      console.error('✗', err);
      failed += 1;
    } else {
      console.log('✓', test.url);
    }
  } catch (e) {
    console.error('✗', test.url, e instanceof Error ? e.message : e);
    failed += 1;
  }
}

if (failed > 0) {
  console.error(`\n${failed} smoke test(s) failed.`);
  if (process.env.SMOKE_OPTIONAL === '1') {
    console.error('SMOKE_OPTIONAL=1 — exiting 0 (e.g. DNS not reachable from this network).');
    process.exit(0);
  }
  process.exit(1);
}
console.log('\nAll SEO smoke tests passed.');