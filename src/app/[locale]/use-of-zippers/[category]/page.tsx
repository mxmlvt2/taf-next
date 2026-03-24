import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getZippersByIds } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';
import ZipperGrid from '@/components/zipper/ZipperGrid';
import { CATEGORY_POPUP_IDS } from '@/lib/popup-ids';
import FireProtectionContent from '@/components/sections/FireProtectionContent';
import MilitaryContent from '@/components/sections/MilitaryContent';
import CyclingSportswearContent from '@/components/sections/CyclingSportswearContent';
import BabyContent from '@/components/sections/BabyContent';
import FashionContent from '@/components/sections/FashionContent';
import FurnitureContent from '@/components/sections/FurnitureContent';
import BucklesContent from '@/components/sections/BucklesContent';

// EN slug → WP slug mapping (both EN and PL)
const CATEGORY_SLUGS: Record<string, { wpSlugEn: string; wpSlugPl: string; labelEn: string; labelPl: string; heroImg: string }> = {
  fashion: { wpSlugEn: 'fashion', wpSlugPl: 'moda', labelEn: 'Fashion', labelPl: 'Moda', heroImg: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-43.png' },
  'cycling-sportswear': { wpSlugEn: 'cycling-sportswear', wpSlugPl: 'odziez-sportowa', labelEn: 'Cycling & Sportswear', labelPl: 'Kolarstwo & odzież sportowa', heroImg: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/zamki-dla-odziezy-sportowej.png' },
  baby: { wpSlugEn: 'baby', wpSlugPl: 'dzieci', labelEn: 'Baby', labelPl: 'Dzieci', heroImg: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-42.png' },
  military: { wpSlugEn: 'military', wpSlugPl: 'wojsko', labelEn: 'Military', labelPl: 'Wojsko', heroImg: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png' },
  furniture: { wpSlugEn: 'furniture', wpSlugPl: 'meble', labelEn: 'Furniture', labelPl: 'Meble', heroImg: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-44.png' },
  'fire-protection': { wpSlugEn: 'fire-protection', wpSlugPl: 'odziez-ognioodporna', labelEn: 'Fire-Resistant Clothing', labelPl: 'Odzież ognioodporna', heroImg: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-9.png' },
  'buckles-plastic-hardware': { wpSlugEn: 'buckles-plastic-hardware', wpSlugPl: 'zapiecia-elementy-plastikowe', labelEn: 'Buckles & Plastic Hardware', labelPl: 'Zapięcia & elementy plastikowe', heroImg: 'https://trimsandfasteners.com/wp-content/uploads/2025/09/Projekt-bez-nazwy-79.png' },
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
    ...entries.map(([slug]) => ({ locale: 'pl', category: slug })),
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
  return {
    title: `${locale === 'en' ? meta.labelEn : meta.labelPl} | TAF`,
    description: locale === 'en'
      ? `Zippers for ${meta.labelEn}. Professional YKK zipper supplier TAF.`
      : `Zamki dla: ${meta.labelPl}. Profesjonalny dostawca zamków YKK TAF.`,
    alternates: {
      canonical: locale === 'en'
        ? `https://trimsandfasteners.com/use-of-zippers/${enSlug}/`
        : `https://trimsandfasteners.com/pl/zastosowanie-zamkow/${meta.wpSlugPl}/`,
      languages: {
        en: `https://trimsandfasteners.com/use-of-zippers/${enSlug}/`,
        pl: `https://trimsandfasteners.com/pl/zastosowanie-zamkow/${meta.wpSlugPl}/`,
      },
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params;
  const enSlug = resolveEnSlug(category);
  if (!enSlug) notFound();

  const meta = CATEGORY_SLUGS[enSlug!];

  const lang = locale as Locale;
  // Get popup IDs for this category in this language
  const plSlug = meta.wpSlugPl;
  const popupKey = lang === 'en' ? enSlug! : plSlug;
  const popupIds = CATEGORY_POPUP_IDS[lang]?.[popupKey] ?? [];

  const zippers = await getZippersByIds(popupIds, lang);

  const title = locale === 'en' ? meta.labelEn : meta.labelPl;
  const contactHref = locale === 'en' ? '/contact/' : '/pl/contact/';

  return (
    <div>
      {/* Dark hero with background image */}
      <div className="subpage-hero relative bg-[#111111] text-white min-h-[90vh] flex items-center overflow-hidden">
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
              href={locale === 'en' ? '/use-of-zippers/' : '/pl/use-of-zippers/'}
              className="hover:text-white transition-colors"
            >
              {locale === 'en' ? 'Use of Zippers' : 'Zastosowanie zamków'}
            </Link>
            <span>›</span>
            <span className="text-white/70">{locale === 'en' ? meta.labelEn : meta.labelPl}</span>
          </nav>

          <h1
            className="font-[Jost] text-3xl sm:text-5xl font-light mb-5 max-w-3xl text-white"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <Link
            href={contactHref}
            className="inline-block bg-white text-black font-[Jost] font-normal text-sm px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            {locale === 'en' ? 'Contact us' : 'Skontaktuj się'}
          </Link>
        </div>
      </div>

      {/* Hardcoded content sections (above product grid) */}
      {enSlug === 'fire-protection' && <FireProtectionContent locale={locale} position="above" />}
      {enSlug === 'military' && <MilitaryContent locale={locale} position="above" />}
      {enSlug === 'cycling-sportswear' && <CyclingSportswearContent locale={locale} position="above" />}
      {enSlug === 'baby' && <BabyContent locale={locale} position="above" />}
      {enSlug === 'fashion' && <FashionContent locale={locale} position="above" />}
      {enSlug === 'furniture' && <FurnitureContent locale={locale} position="above" />}
      {enSlug === 'buckles-plastic-hardware' && <BucklesContent locale={locale} position="above" />}

      {/* Our products section */}
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

      {/* Hardcoded content sections (below product grid) */}
      {enSlug === 'fire-protection' && <FireProtectionContent locale={locale} position="below" />}
      {enSlug === 'military' && <MilitaryContent locale={locale} position="below" />}
      {enSlug === 'cycling-sportswear' && <CyclingSportswearContent locale={locale} position="below" />}
      {enSlug === 'baby' && <BabyContent locale={locale} position="below" />}
      {enSlug === 'fashion' && <FashionContent locale={locale} position="below" />}
      {enSlug === 'furniture' && <FurnitureContent locale={locale} position="below" />}
      {enSlug === 'buckles-plastic-hardware' && <BucklesContent locale={locale} position="below" />}

    </div>
  );
}
