/** Shared canonical host check for Worker and tooling. */
export const CANONICAL_ORIGIN = 'https://arcraiderhacks.com';
export const CANONICAL_HOSTNAMES = new Set(['arcraiderhacks.com', 'www.arcraiderhacks.com']);

export function isCanonicalHostname(hostname) {
  return CANONICAL_HOSTNAMES.has(String(hostname || '').toLowerCase());
}