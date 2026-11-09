/** Map forum source guides to the most relevant product URL for internal linking. */
export function productLinkForForumSource(sourcePath?: string): { href: string; label: string } {
  if (!sourcePath) {
    return { href: '/products/arcraider-hacks/', label: 'Compare hack tiers' };
  }

  const bySource: Record<string, { href: string; label: string }> = {
    '/blog/esp/': { href: '/products/arcraider-hacks/lite/', label: 'Lite ESP & radar product page' },
    '/blog/fov/': { href: '/products/arcraider-hacks/lite/', label: 'Lite tier with FOV hack' },
    '/blog/aimbot/': { href: '/products/arcraider-hacks/pro/', label: 'Pro aimbot product page' },
    '/blog/bones/': { href: '/products/arcraider-hacks/pro/', label: 'Pro weapon profiles page' },
    '/blog/elite/': { href: '/products/arcraider-hacks/elite/', label: 'Elite full-suite page' },
    '/blog/hwid/': { href: '/products/arcraider-hacks/hwid-spoofer/', label: 'HWID Spoofer product page' },
    '/blog/skins/': { href: '/products/arcraider-hacks/unlock-all/', label: 'Unlock All / Skin Changer page' },
    '/blog/lite-vs-pro/': { href: '/products/arcraider-hacks/', label: 'Compare Lite, Pro & Elite' },
    '/blog/features/': { href: '/products/arcraider-hacks/', label: 'Products hub by tier' },
    '/blog/buy-guide/': { href: '/products/arcraider-hacks/', label: 'Shop tiers before checkout' },
    '/blog/stream-proof/': { href: '/products/arcraider-hacks/lite/', label: 'All tiers include Stream Proof' },
    '/blog/eac-error/': { href: '/products/arcraider-hacks/utilities/', label: 'HWID & UGC utilities hub' },
    '/blog/eac-patch/': { href: '/products/arcraider-hacks/', label: 'Tier listings after patches' },
    '/blog/external/': { href: '/products/arcraider-hacks/', label: 'External loader tiers' },
  };

  return bySource[sourcePath] ?? { href: '/products/arcraider-hacks/', label: 'Arc Raiders hack products' };
}
