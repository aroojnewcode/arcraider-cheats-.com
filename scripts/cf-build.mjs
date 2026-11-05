import { spawnSync } from 'node:child_process';

process.env.SITE_ORIGIN ||= 'https://arcraider-cheats--com.uroojroziroti.workers.dev';
process.env.SITEMAP_ORIGIN ||= 'https://arcraiderhacks.com';

const result = spawnSync('npm', ['run', 'build'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

process.exit(result.status ?? 1);
