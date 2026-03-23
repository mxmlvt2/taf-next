import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPageBySlug, getZippersByIds, extractYoastMeta } from '@/lib/wordpress';
import { stripElementorHero, extractFaqItems, stripFaqBlock } from '@/lib/utils';
import { CATEGORY_POPUP_IDS } from '@/lib/popup-ids';
import type { Locale } from '@/lib/types';
import ZipperGrid from '@/components/zipper/ZipperGrid';
import FaqAccordion from '@/components/sections/FaqAccordion';

const TYPE_SLUGS: Record<string, { wpSlugEn: string; wpSlugPl: string; labelEn: string; labelPl: string; heroImg: string }> = {
  'nylon-zippers': { wpSlugEn: 'nylon-zippers', wpSlugPl: 'zamki-nylonowe', labelEn: 'Nylon Zippers', labelPl: 'Zamki nylonowe', heroImg: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg' },
  'plastic-zippers': { wpSlugEn: 'plastic-zippers', wpSlugPl: 'zamki-plastikowe', labelEn: 'Plastic Zippers', labelPl: 'Zamki plastikowe', heroImg: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/plastikowyzielony-1.jpg' },
  'metal-zippers': { wpSlugEn: 'metal-zippers', wpSlugPl: 'zamki-metalowe', labelEn: 'Metal Zippers', labelPl: 'Zamki metalowe', heroImg: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/metalslider34-scaled.jpg' },
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

  const lang = locale as Locale;
  const popupKey = lang === 'en' ? enSlug! : meta.wpSlugPl;
  const popupIds = CATEGORY_POPUP_IDS[lang]?.[popupKey] ?? [];

  const [page, zippers] = await Promise.all([
    getPageBySlug(wpSlug, lang),
    getZippersByIds(popupIds, lang),
  ]);

  const title = page?.title.rendered || (locale === 'en' ? meta.labelEn : meta.labelPl);
  const contactHref = locale === 'en' ? '/contact/' : '/pl/kontakt/';

  // FAQ schema from Yoast if available
  const faqSchema = page?.yoast_head_json?.schema;

  // Extract FAQ items from Elementor HTML widget and strip from content
  const rawContent = page?.content.rendered ?? '';
  const faqItems = extractFaqItems(rawContent);
  const cleanContent = faqItems.length > 0 ? stripFaqBlock(rawContent) : rawContent;

  return (
    <div>
      {/* Dark hero with background image */}
      <div className="relative bg-[#111111] text-white py-20 overflow-hidden">
        {meta.heroImg && (
          <>
            <Image
              src={meta.heroImg}
              alt=""
              fill
              className="object-cover opacity-40"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/40 font-[Jost] mb-4 flex items-center gap-2">
            <Link href={locale === 'en' ? '/' : '/pl/'} className="hover:text-white transition-colors">
              {locale === 'en' ? 'Home' : 'Start'}
            </Link>
            <span>›</span>
            <Link
              href={locale === 'en' ? '/type-of-zippers/' : '/pl/rodzaje-zamkow/'}
              className="hover:text-white transition-colors"
            >
              {locale === 'en' ? 'Type of Zippers' : 'Rodzaje zamków'}
            </Link>
            <span>›</span>
            <span className="text-white/70">{locale === 'en' ? meta.labelEn : meta.labelPl}</span>
          </nav>

          <h1
            className="font-[Jost] text-3xl sm:text-5xl font-light mb-5 max-w-3xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {page?.excerpt.rendered && (
            <div
              className="font-[Jost] text-white/60 mb-8 max-w-2xl text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
            />
          )}

          <Link
            href={contactHref}
            className="inline-block bg-white text-black font-[Jost] font-normal text-sm px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            {locale === 'en' ? 'Contact us' : 'Skontaktuj się'}
          </Link>
        </div>
      </div>

      {/* Page content from WP (alternating image/text sections) */}
      {cleanContent && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
            className="elementor-content prose prose-gray prose-lg max-w-none font-[Jost] prose-headings:font-[Jost] prose-headings:font-normal prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: stripElementorHero(cleanContent) }}
          />
        </section>
      )}

      {/* Product grid */}
      {zippers.length > 0 && (
        <section className="bg-[#f5f3ef] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-3 text-[#111]">
              {locale === 'en' ? 'Our products' : 'Nasze produkty'}
            </h2>
            <p className="font-[Jost] text-sm text-gray-400 mb-8">
              {zippers.length} {locale === 'en' ? 'products' : 'produktów'}
            </p>
            <ZipperGrid zippers={zippers} />
          </div>
        </section>
      )}

      {/* Nylon size chart link (only for nylon page) */}
      {enSlug === 'nylon-zippers' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href={locale === 'en' ? '/nylon-zipper-chain-size-chart/' : '/pl/tasmy-spiralne-zestawienie-rozmiarow/'}
            className="inline-flex items-center gap-2 text-sm font-[Jost] text-gray-600 hover:text-black border border-gray-200 hover:border-gray-400 rounded-lg px-5 py-3 transition-colors"
          >
            {locale === 'en' ? 'View Nylon Zipper Chain Size Chart →' : 'Zobacz tabelę rozmiarów taśm nylonowych →'}
          </Link>
        </section>
      )}

      {/* FAQ accordion (extracted from Elementor HTML widget) */}
      <FaqAccordion items={faqItems} locale={locale} />

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
