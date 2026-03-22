import type { MetadataRoute } from 'next';

const BASE = 'https://trimsandfasteners.com';
const WP_API = `${BASE}/wp-json`;

const STATIC_PAGES = [
  { en: '/', pl: '/pl/', priority: 1.0 },
  { en: '/use-of-zippers/', pl: '/pl/zastosowanie-zamkow/', priority: 0.9 },
  { en: '/use-of-zippers/fashion/', pl: '/pl/zastosowanie-zamkow/moda/', priority: 0.85 },
  { en: '/use-of-zippers/cycling-sportswear/', pl: '/pl/zastosowanie-zamkow/odziez-sportowa/', priority: 0.85 },
  { en: '/use-of-zippers/baby/', pl: '/pl/zastosowanie-zamkow/dzieci/', priority: 0.85 },
  { en: '/use-of-zippers/military/', pl: '/pl/zastosowanie-zamkow/wojsko/', priority: 0.85 },
  { en: '/use-of-zippers/furniture/', pl: '/pl/zastosowanie-zamkow/meble/', priority: 0.85 },
  { en: '/use-of-zippers/fire-protection/', pl: '/pl/zastosowanie-zamkow/odziez-ognioodporna/', priority: 0.85 },
  { en: '/use-of-zippers/buckles-plastic-hardware/', pl: '/pl/zapiecia-elementy-plastikowe/', priority: 0.85 },
  { en: '/type-of-zippers/', pl: '/pl/rodzaje-zamkow/', priority: 0.9 },
  { en: '/type-of-zippers/nylon-zippers/', pl: '/pl/rodzaje-zamkow/zamki-nylonowe/', priority: 0.85 },
  { en: '/type-of-zippers/plastic-zippers/', pl: '/pl/rodzaje-zamkow/zamki-plastikowe/', priority: 0.85 },
  { en: '/type-of-zippers/metal-zippers/', pl: '/pl/rodzaje-zamkow/zamki-metalowe/', priority: 0.85 },
  { en: '/about-us/', pl: '/pl/o-nas/', priority: 0.7 },
  { en: '/contact/', pl: '/pl/kontakt/', priority: 0.7 },
  { en: '/blog/', pl: '/pl/blog/', priority: 0.7 },
  { en: '/personalization/', pl: '/pl/personalizacja/', priority: 0.7 },
  { en: '/privacy-policy/', pl: '/pl/polityka-prywatnosci/', priority: 0.3 },
  { en: '/nylon-zipper-chain-size-chart/', pl: '/pl/tasmy-spiralne-zestawienie-rozmiarow/', priority: 0.7 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static pages
  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map(({ en, pl, priority }) => ({
    url: `${BASE}${en}`,
    lastModified: new Date(),
    changeFrequency: priority > 0.8 ? 'weekly' : 'monthly',
    priority,
    alternates: {
      languages: { en: `${BASE}${en}`, pl: `${BASE}${pl}` },
    },
  }));

  // 2. Blog posts (EN + PL)
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const [enRes, plRes] = await Promise.all([
      fetch(`${WP_API}/wp/v2/posts?per_page=100&lang=en&_fields=slug,modified&status=publish`, { next: { revalidate: 3600 } }),
      fetch(`${WP_API}/wp/v2/posts?per_page=100&lang=pl&_fields=slug,modified&status=publish`, { next: { revalidate: 3600 } }),
    ]);
    const enPosts: Array<{ slug: string; modified: string }> = enRes.ok ? await enRes.json() : [];
    const plPosts: Array<{ slug: string; modified: string }> = plRes.ok ? await plRes.json() : [];

    blogEntries = [
      ...enPosts.map(p => ({ url: `${BASE}/blog/${p.slug}/`, lastModified: new Date(p.modified), changeFrequency: 'monthly' as const, priority: 0.6 })),
      ...plPosts.map(p => ({ url: `${BASE}/pl/blog/${p.slug}/`, lastModified: new Date(p.modified), changeFrequency: 'monthly' as const, priority: 0.6 })),
    ];
  } catch {}

  // 3. Individual zipper/product pages (EN + PL)
  let zipperEntries: MetadataRoute.Sitemap = [];
  try {
    const [enRes, plRes] = await Promise.all([
      fetch(`${WP_API}/taf/v1/all-zippers?lang=en`, { next: { revalidate: 3600 } }),
      fetch(`${WP_API}/taf/v1/all-zippers?lang=pl`, { next: { revalidate: 3600 } }),
    ]);
    const enZippers: Array<{ slug: string }> = enRes.ok ? await enRes.json() : [];
    const plZippers: Array<{ slug: string }> = plRes.ok ? await plRes.json() : [];

    zipperEntries = [
      ...enZippers.map(z => ({ url: `${BASE}/zipper/${z.slug}/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.75 })),
      ...plZippers.map(z => ({ url: `${BASE}/pl/zamek/${z.slug}/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.75 })),
    ];
  } catch {}

  return [...staticEntries, ...blogEntries, ...zipperEntries];
}
