export const SITE_DOMAIN = 'arcraiderhacks.com';
export const SITE_URL = `https://${SITE_DOMAIN}`;
/** Site mark (favicon + header/footer). Regenerate: npm run brand:icons */
export const SITE_LOGO = '/logo.svg';
export const PRODUCT_BASE = '/products/arcraider-hacks/';
export const TITLE_PREFIX = 'Arc Raiders Hacks';
export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;
/** Discord invite for support tickets. Override with PUBLIC_DISCORD_URL. */
export const DISCORD_URL =
  (typeof import.meta !== 'undefined' && (import.meta.env.PUBLIC_DISCORD_URL as string | undefined)?.trim()) ||
  'https://discord.gg/Vu85F8auQS';
