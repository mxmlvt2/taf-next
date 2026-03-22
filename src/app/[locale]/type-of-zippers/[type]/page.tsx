import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageBySlug, getZipperCards, extractYoastMeta } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';
import ZipperGrid from '@/components/zipper/ZipperGrid';

const TYPE_SLUGS: Record<string, { wpSlugEn: string; wpSlugPl: string; labelEn: string; labelPl: string }> = {
  'nylon-zippers': { wpSlugEn: 'nylon-zippers', wpSlugPl: 'zamki-nylonowe', labelEn: 'Nylon Zippers', labelPl: 'Zamki nylonowe' },
  'plastic-zippers': { wpSlugEn: 'plastic-zippers', wpSlugPl: 'zamki-plastikowe', labelEn: 'Plastic Zippers', labelPl: 'Zamki plastikowe' },
  'metal-zippers': { wpSlugEn: 'metal-zippers', wpSlugPl: 'zamki-metalowe', labelEn: 'Metal Zippers', labelPl: 'Zamki metalowe' },
};

const PL_TO_EN: Record<string, string> = {
  'zamki-nylonowe': 'nylon-zippers',
  'zamki-plastikowe': 'plastic-zippers',
  'zamki-metalowe': 'metal-zippers',
};

type Props = { params: Promise<{ locale: string; type: string }> };

export async function generateStaticParams() {
  return [
    ...Object.keys(TYPE_SLUGS).map(slug => ({ locale: 'en', type: slug })),
    ...Object.values(TYPE_SLUGS).map(v => ({ locale: 'pl', type: v.wpSlugPl })),
  ];
}

function resolveEnSlug(type: string): string | null {
  return TYPE_SLUGS[type] ? type : (PL_TO_EN[type] || null);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, type } = await params;
  const enSlug = resolveEnSlug(type);
  if (!enSlug) return {};

  const meta = TYPE_SLUGS[enSlug];
  const wpSlug = locale === 'en' ? meta.wpSlugEn : meta.wpSlugPl;
  const page = await getPageBySlug(wpSlug, locale as Locale);
  const seo = extractYoastMeta(page);

  return {
    title: seo.title || `${locale === 'en' ? meta.labelEn : meta.labelPl} | TAF`,
    description: seo.description,
    alternates: {
      canonical: locale === 'en'
        ? `https://trimsandfasteners.com/type-of-zippers/${enSlug}/`
        : `https://trimsandfasteners.com/pl/rodzaje-zamkow/${meta.wpSlugPl}/`,
      languages: {
        en: `https://trimsandfasteners.com/type-of-zippers/${enSlug}/`,
        pl: `https://trimsandfasteners.com/pl/rodzaje-zamkow/${meta.wpSlugPl}/`,
      },
    },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: seo.ogImage ? [seo.ogImage] : [],
    },
  };
}

export default async function TypePage({ params }: Props) {
  const { locale, type } = await params;
  const enSlug = resolveEnSlug(type);
  if (!enSlug) notFound();

  const meta = TYPE_SLUGS[enSlug!];
  const wpSlug = locale === 'en' ? meta.wpSlugEn : meta.wpSlugPl;

  const [page, zippers] = await Promise.all([
    getPageBySlug(wpSlug, locale as Locale),
    getZipperCards(enSlug!, locale as Locale),
  ]);

  const title = page?.title.rendered || (locale === 'en' ? meta.labelEn : meta.labelPl);

  return (
    <div>
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/50 font-[Jost] mb-4">
            <span>{locale === 'en' ? 'Type of Zippers' : 'Rodzaje zamków'}</span>
            <span className="mx-2">›</span>
            <span className="text-white/80">{title}</span>
          </nav>
          <h1
            className="font-[Jost] text-3xl sm:text-5xl font-normal"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {page?.excerpt.rendered && (
            <div
              className="font-[Jost] text-white/70 mt-4 max-w-2xl"
              dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
            />
          )}
        </div>
      </div>

      {page?.content.rendered && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div
            className="prose prose-gray max-w-none font-[Jost]"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        </section>
      )}

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
              {locale === 'en' ? 'Products will appear once API is configured.' : 'Produkty pojawią się po skonfigurowaniu API.'}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
