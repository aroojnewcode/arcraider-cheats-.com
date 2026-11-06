import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const key = process.env.INDEXNOW_KEY?.trim();
const host = process.env.INDEXNOW_HOST?.trim() || 'arcraiderhacks.com';

if (!key) {
  console.log('IndexNow: skipped (INDEXNOW_KEY not set).');
  process.exit(0);
}

const childSitemaps = ['sitemap-pages.xml', 'sitemap-blog.xml', 'sitemap-forum.xml'];
const urlList = [];
for (const name of childSitemaps) {
  const filePath = path.join(dist, name);
  if (!fs.existsSync(filePath)) continue;
  const xml = fs.readFileSync(filePath, 'utf8');
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    urlList.push(match[1]);
  }
}
const uniqueUrls = [...new Set(urlList)].slice(0, 10000);

if (uniqueUrls.length === 0) {
  console.warn('IndexNow: no URLs found in child sitemaps.');
  process.exit(0);
}

const keyFile = path.join(dist, `${key}.txt`);
fs.writeFileSync(keyFile, key, 'utf8');
const publicDir = path.join(root, 'public');
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, `${key}.txt`), key, 'utf8');

const payload = {
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: uniqueUrls,
};

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

if (response.ok) {
  console.log(`IndexNow: submitted ${urlList.length} URL(s) (HTTP ${response.status}).`);
} else {
  const body = await response.text();
  console.warn(`IndexNow: ping failed HTTP ${response.status}: ${body.slice(0, 200)}`);
}
