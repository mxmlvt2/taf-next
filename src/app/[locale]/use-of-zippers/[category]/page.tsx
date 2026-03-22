import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPageBySlug, getZippersByIds, extractYoastMeta } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';
import ZipperGrid from '@/components/zipper/ZipperGrid';
import { CATEGORY_POPUP_IDS } from '@/lib/popup-ids';

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

  const lang = locale as Locale;
  // Get popup IDs for this category in this language
  const plSlug = meta.wpSlugPl;
  const popupKey = lang === 'en' ? enSlug! : plSlug;
  const popupIds = CATEGORY_POPUP_IDS[lang]?.[popupKey] ?? [];

  const [page, zippers] = await Promise.all([
    getPageBySlug(wpSlug, lang),
    getZippersByIds(popupIds, lang),
  ]);

  const title = page?.title.rendered || (locale === 'en' ? meta.labelEn : meta.labelPl);
  const contactHref = locale === 'en' ? '/contact/' : '/pl/kontakt/';

  // FAQ schema from Yoast if available
  const faqSchema = page?.yoast_head_json?.schema;

  return (
    <div>
      {/* Dark hero */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/40 font-[Jost] mb-4 flex items-center gap-2">
            <Link href={locale === 'en' ? '/' : '/pl/'} className="hover:text-white transition-colors">
              {locale === 'en' ? 'Home' : 'Start'}
            </Link>
            <span>›</span>
            <Link
              href={locale === 'en' ? '/use-of-zippers/' : '/pl/zastosowanie-zamkow/'}
              className="hover:text-white transition-colors"
            >
              {locale === 'en' ? 'Use of Zippers' : 'Zastosowanie zamków'}
            </Link>
            <span>›</span>
            <span className="text-white/70">{locale === 'en' ? meta.labelEn : meta.labelPl}</span>
          </nav>

          <h1
            className="font-[Jost] text-3xl sm:text-5xl font-normal mb-5 max-w-3xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {page?.excerpt.rendered && (
            <div
              className="font-[Jost] text-white/70 mb-8 max-w-2xl text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
            />
          )}

          <Link
            href={contactHref}
            className="inline-block bg-white text-black font-[Jost] font-medium text-sm px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {locale === 'en' ? 'Contact us' : 'Skontaktuj się'}
          </Link>
        </div>
      </div>

      {/* Page content from WP (editorial sections with alternating image+text) */}
      {page?.content.rendered && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
            className="prose prose-gray prose-lg max-w-none font-[Jost] prose-headings:font-[Jost] prose-headings:font-normal prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        </section>
      )}

      {/* Our products section */}
      {zippers.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[Jost] text-2xl sm:text-3xl font-normal mb-3">
              {locale === 'en' ? 'Our products' : 'Nasze produkty'}
            </h2>
            <p className="font-[Jost] text-sm text-gray-400 mb-8">
              {zippers.length} {locale === 'en' ? 'products' : 'produktów'}
            </p>
            <ZipperGrid zippers={zippers} />
          </div>
        </section>
      )}

      {/* JSON-LD FAQ schema if available from Yoast */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </div>
  );
}
