import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageBySlug, getZipperCards, extractYoastMeta } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';
import ZipperGrid from '@/components/zipper/ZipperGrid';

// EN slug → WP slug mapping (both EN and PL)
const CATEGORY_SLUGS: Record<string, { wpSlugEn: string; wpSlugPl: string; labelEn: string; labelPl: string }> = {
  fashion: { wpSlugEn: 'fashion', wpSlugPl: 'moda', labelEn: 'Fashion', labelPl: 'Moda' },
  'cycling-sportswear': { wpSlugEn: 'cycling-sportswear', wpSlugPl: 'odziez-sportowa', labelEn: 'Cycling & Sportswear', labelPl: 'Kolarstwo & odzież sportowa' },
  baby: { wpSlugEn: 'baby', wpSlugPl: 'dzieci', labelEn: 'Baby', labelPl: 'Dzieci' },
  military: { wpSlugEn: 'military', wpSlugPl: 'wojsko', labelEn: 'Military', labelPl: 'Wojsko' },
  furniture: { wpSlugEn: 'furniture', wpSlugPl: 'meble', labelEn: 'Furniture', labelPl: 'Meble' },
  'fire-protection': { wpSlugEn: 'fire-protection', wpSlugPl: 'odziez-ognioodporna', labelEn: 'Fire-Resistant Clothing', labelPl: 'Odzież ognioodporna' },
  'buckles-plastic-hardware': { wpSlugEn: 'buckles-plastic-hardware', wpSlugPl: 'zapiecia-elementy-plastikowe', labelEn: 'Buckles & Plastic Hardware', labelPl: 'Zapięcia & elementy plastikowe' },
};

// PL slug → EN slug (for Polish routes)
const PL_TO_EN: Record<string, string> = {
  moda: 'fashion',
  'odziez-sportowa': 'cycling-sportswear',
  dzieci: 'baby',
  wojsko: 'military',
  meble: 'furniture',
  'odziez-ognioodporna': 'fire-protection',
  'zapiecia-elementy-plastikowe': 'buckles-plastic-hardware',
};

type Props = { params: Promise<{ locale: string; category: string }> };

export async function generateStaticParams() {
  const entries = Object.entries(CATEGORY_SLUGS);
  return [
    ...entries.map(([slug]) => ({ locale: 'en', category: slug })),
    ...entries.map(([, v]) => ({ locale: 'pl', category: v.wpSlugPl })),
  ];
}

function resolveEnSlug(category: string): string | null {
  if (CATEGORY_SLUGS[category]) return category;
  return PL_TO_EN[category] || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const enSlug = resolveEnSlug(category);
  if (!enSlug) return {};

  const meta = CATEGORY_SLUGS[enSlug];
  const wpSlug = locale === 'en' ? meta.wpSlugEn : meta.wpSlugPl;
  const page = await getPageBySlug(wpSlug, locale as Locale);
  const seo = extractYoastMeta(page);

  const canonical = locale === 'en'
    ? `https://trimsandfasteners.com/use-of-zippers/${enSlug}/`
    : `https://trimsandfasteners.com/pl/zastosowanie-zamkow/${meta.wpSlugPl}/`;

  return {
    title: seo.title || `${locale === 'en' ? meta.labelEn : meta.labelPl} | TAF`,
    description: seo.description,
    alternates: {
      canonical,
      languages: {
        en: `https://trimsandfasteners.com/use-of-zippers/${enSlug}/`,
        pl: `https://trimsandfasteners.com/pl/zastosowanie-zamkow/${meta.wpSlugPl}/`,
      },
    },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: seo.ogImage ? [seo.ogImage] : [],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params;
  const enSlug = resolveEnSlug(category);
  if (!enSlug) notFound();

  const meta = CATEGORY_SLUGS[enSlug!];
  const wpSlug = locale === 'en' ? meta.wpSlugEn : meta.wpSlugPl;

  const [page, zippers] = await Promise.all([
    getPageBySlug(wpSlug, locale as Locale),
    getZipperCards(enSlug!, locale as Locale),
  ]);

  const title = page?.title.rendered || (locale === 'en' ? meta.labelEn : meta.labelPl);

  return (
    <div>
      {/* Page header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/50 font-[Jost] mb-4">
            <span>{locale === 'en' ? 'Use of Zippers' : 'Zastosowanie zamków'}</span>
            <span className="mx-2">›</span>
            <span className="text-white/80">{title}</span>
          </nav>
          <h1
            className="font-[Jost] text-3xl sm:text-5xl font-normal"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {page?.excerpt.rendered && (
            <div
              className="font-[Jost] text-white/70 mt-4 max-w-2xl text-base"
              dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
            />
          )}
        </div>
      </div>

      {/* Page content from WP */}
      {page?.content.rendered && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div
            className="prose prose-gray max-w-none font-[Jost]"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        </section>
      )}

      {/* Zipper grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        {zippers.length > 0 ? (
          <>
            <p className="font-[Jost] text-sm text-gray-400 mb-6">
              {zippers.length} {locale === 'en' ? 'products' : 'produktów'}
            </p>
            <ZipperGrid zippers={zippers} />
          </>
        ) : (
          <div className="text-center py-20">
            <p className="font-[Jost] text-gray-400">
              {locale === 'en' ? 'Products loading...' : 'Produkty się ładują...'}
            </p>
            <p className="font-[Jost] text-gray-300 text-sm mt-2">
              {locale === 'en'
                ? 'The product API endpoint is being set up. Content will appear once the WordPress REST API plugin is configured.'
                : 'Endpoint API produktów jest konfigurowany. Zawartość pojawi się po skonfigurowaniu wtyczki WordPress REST API.'}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
