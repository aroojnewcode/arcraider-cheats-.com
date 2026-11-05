/**
 * Product & hero screenshots — edit this file (or swap PNGs in public/images/product/) to change gallery images site-wide.
 *
 * Files:
 *   public/images/product/awareness.png
 *   public/images/product/combat.png
 *   public/images/product/world.png
 *
 * Re-download from Supabase: npm run media:arc-raiders
 */

export interface GallerySlideConfig {
  id: string;
  /** Path under public/ (PNG source; WebP variants are generated at build). */
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

const productImage = (name: string) => `/images/product/${name}.png`;

/** Three unique Arc Raiders shots — never duplicate src in one gallery. */
export const PRODUCT_GALLERY_SLIDES: GallerySlideConfig[] = [
  {
    id: 'awareness',
    src: productImage('awareness'),
    alt: 'Arc Raiders player ESP highlighting raiders and loot through interior windows',
    caption: 'Player & loot ESP',
    captionDesc: 'Track raiders, containers and loot lines before you push a room or extract.',
  },
  {
    id: 'combat',
    src: productImage('combat'),
    alt: 'Arc Raiders combat overlay with aim assist and threat markers in a firefight',
    caption: 'Combat assist',
    captionDesc: 'Aim smoothing, FOV limits and ESP together for mid-fight control.',
  },
  {
    id: 'world',
    src: productImage('world'),
    alt: 'Arc Raiders wide view of the surface raid zone with radar-style awareness',
    caption: 'Surface & POI awareness',
    captionDesc: 'Orientation on Surface raids—see routes and hotspots before rotating.',
  },
];

export type ProductGalleryId = (typeof PRODUCT_GALLERY_SLIDES)[number]['id'];

const slideById = new Map(PRODUCT_GALLERY_SLIDES.map((s) => [s.id, s]));

/** Pick slides by id; skips unknown ids and dedupes by src (no repeated image on one page). */
export function resolveProductGallery(ids: ProductGalleryId[]): GallerySlideConfig[] {
  const seen = new Set<string>();
  const out: GallerySlideConfig[] = [];
  for (const id of ids) {
    const slide = slideById.get(id);
    if (!slide || seen.has(slide.src)) continue;
    seen.add(slide.src);
    out.push(slide);
  }
  return out;
}

/** Default triple for tier pages (unique order per tier). */
export const PRODUCT_GALLERY_BY_TIER: Record<string, ProductGalleryId[]> = {
  lite: ['awareness', 'world', 'combat'],
  pro: ['combat', 'awareness', 'world'],
  elite: ['world', 'combat', 'awareness'],
  'hwid-spoofer': ['awareness', 'combat', 'world'],
  ugc: ['world', 'awareness', 'combat'],
  'unlock-all': ['combat', 'world', 'awareness'],
};

/** Home hero carousel — one pass through all unique slides. */
export const HERO_GALLERY_IDS: ProductGalleryId[] = ['awareness', 'combat', 'world'];
