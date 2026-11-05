import { spawnSync } from 'node:child_process';

const crawlOrigin = 'https://arcraider-cheats--com.uroojroziroti.workers.dev';
process.env.SITE_ORIGIN ||= crawlOrigin;
process.env.SITEMAP_ORIGIN ||= crawlOrigin;

const result = spawnSync('npm', ['run', 'build'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

process.exit(result.status ?? 1);
