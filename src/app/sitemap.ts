import type { MetadataRoute } from 'next';

const BASE = 'https://trimsandfasteners.com';

const STATIC_PAGES = [
  { en: '/', pl: '/pl/' },
  { en: '/use-of-zippers/', pl: '/pl/zastosowanie-zamkow/' },
  { en: '/use-of-zippers/fashion/', pl: '/pl/zastosowanie-zamkow/moda/' },
  { en: '/use-of-zippers/cycling-sportswear/', pl: '/pl/zastosowanie-zamkow/odziez-sportowa/' },
  { en: '/use-of-zippers/baby/', pl: '/pl/zastosowanie-zamkow/dzieci/' },
  { en: '/use-of-zippers/military/', pl: '/pl/zastosowanie-zamkow/wojsko/' },
  { en: '/use-of-zippers/furniture/', pl: '/pl/zastosowanie-zamkow/meble/' },
  { en: '/use-of-zippers/fire-protection/', pl: '/pl/zastosowanie-zamkow/odziez-ognioodporna/' },
  { en: '/use-of-zippers/buckles-plastic-hardware/', pl: '/pl/zapiecia-elementy-plastikowe/' },
  { en: '/type-of-zippers/', pl: '/pl/rodzaje-zamkow/' },
  { en: '/type-of-zippers/nylon-zippers/', pl: '/pl/rodzaje-zamkow/zamki-nylonowe/' },
  { en: '/type-of-zippers/plastic-zippers/', pl: '/pl/rodzaje-zamkow/zamki-plastikowe/' },
  { en: '/type-of-zippers/metal-zippers/', pl: '/pl/rodzaje-zamkow/zamki-metalowe/' },
  { en: '/about-us/', pl: '/pl/o-nas/' },
  { en: '/contact/', pl: '/pl/kontakt/' },
  { en: '/blog/', pl: '/pl/blog/' },
  { en: '/personalization/', pl: '/pl/personalizacja/' },
  { en: '/privacy-policy/', pl: '/pl/polityka-prywatnosci/' },
  { en: '/nylon-zipper-chain-size-chart/', pl: '/pl/tasmy-spiralne-zestawienie-rozmiarow/' },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map(({ en, pl }) => ({
    url: `${BASE}${en}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: en === '/' ? 1.0 : 0.8,
    alternates: {
      languages: {
        en: `${BASE}${en}`,
        pl: `${BASE}${pl}`,
      },
    },
  }));

  // Blog posts from WP API
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(
      'https://trimsandfasteners.com/wp-json/wp/v2/posts?per_page=100&lang=en&_fields=slug,modified&status=publish',
      { next: { revalidate: 3600 } }
    );
    if (res.ok) {
      const posts: Array<{ slug: string; modified: string }> = await res.json();
      blogEntries = posts.map(post => ({
        url: `${BASE}/blog/${post.slug}/`,
        lastModified: new Date(post.modified),
        changeFrequency: 'monthly',
        priority: 0.6,
      }));
    }
  } catch {}

  return [...staticEntries, ...blogEntries];
}
