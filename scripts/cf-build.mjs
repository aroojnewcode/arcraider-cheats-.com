import { spawnSync } from 'node:child_process';

/** Cloudflare Builds: bake canonical URLs for arcraiderhacks.com (override with SITE_ORIGIN / SITEMAP_ORIGIN in CI if needed). */
const productionOrigin = 'https://arcraiderhacks.com';
process.env.SITE_ORIGIN ||= productionOrigin;
process.env.SITEMAP_ORIGIN ||= productionOrigin;

const result = spawnSync('npm', ['run', 'build'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

process.exit(result.status ?? 1);
