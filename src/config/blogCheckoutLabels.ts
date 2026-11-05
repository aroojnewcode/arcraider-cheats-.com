export const blogCheckoutLabelBySlug: Record<string, string> = {
  aimbot: 'Checkout Pro aimbot tier',
  features: 'Checkout after comparing features',
  'buy-guide': 'Open checkout from buy guide',
  bones: 'Checkout with weapon profiles',
  'cheat-codes': 'Checkout live-server loader',
  'console-tips': 'Checkout for live ESP tier',
};

export function getBlogCheckoutLabel(slug: string): string {
  return blogCheckoutLabelBySlug[slug] ?? 'Get portal access via checkout';
}
