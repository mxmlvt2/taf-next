import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/types';

const WP_API = 'https://trimsandfasteners.com/wp-json';

interface ZipperDetail {
  id: number;
  slug: string;
  name: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
  translations: Record<string, string>;
  lang: string;
}

async function getZipperBySlug(slug: string, locale: Locale): Promise<ZipperDetail | null> {
  try {
    // First get ID by slug from elementor_library
    const listRes = await fetch(
      `${WP_API}/wp/v2/elementor_library?slug=${slug}&status=publish`,
      { next: { revalidate: 3600 } }
    );
    if (!listRes.ok) return null;
    const list = await listRes.json();
    if (!list.length) return null;

    const id = list[0].id;
    const res = await fetch(`${WP_API}/taf/v1/zipper/${id}`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

async function getAllZipperSlugs(locale: Locale): Promise<string[]> {
  try {
    const res = await fetch(
      `${WP_API}/taf/v1/all-zippers?lang=${locale}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data: Array<{ slug: string }> = await res.json();
    return data.map(d => d.slug);
  } catch {
    return [];
  }
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  try {
    const [enRes, plRes] = await Promise.all([
      fetch(`${WP_API}/taf/v1/all-zippers?lang=en`, { next: { revalidate: 3600 } }),
      fetch(`${WP_API}/taf/v1/all-zippers?lang=pl`, { next: { revalidate: 3600 } }),
    ]);

    const enSlugs: Array<{ slug: string }> = enRes.ok ? await enRes.json() : [];
    const plSlugs: Array<{ slug: string }> = plRes.ok ? await plRes.json() : [];

    return [
      ...enSlugs.map(({ slug }) => ({ locale: 'en', slug })),
      ...plSlugs.map(({ slug }) => ({ locale: 'pl', slug })),
    ];
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const zipper = await getZipperBySlug(slug, locale as Locale);

  if (!zipper) return { title: 'Zipper | TAF' };

  const canonicalBase = 'https://trimsandfasteners.com';
  const canonical = locale === 'en'
    ? `${canonicalBase}/zipper/${slug}/`
    : `${canonicalBase}/pl/zamek/${slug}/`;

  return {
    title: `${zipper.name} | TAF`,
    description: zipper.description
      ? zipper.description.replace(/<[^>]*>/g, '').slice(0, 160)
      : `${zipper.name} - professional zipper by TAF`,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        Object.entries(zipper.translations).map(([lang, transSlug]) => [
          lang,
          lang === 'en'
            ? `${canonicalBase}/zipper/${transSlug}/`
            : `${canonicalBase}/pl/zamek/${transSlug}/`,
        ])
      ),
    },
    openGraph: {
      title: zipper.name,
      images: zipper.thumbnailUrl ? [zipper.thumbnailUrl] : [],
      type: 'article',
    },
  };
}

export default async function ZipperPage({ params }: Props) {
  const { locale, slug } = await params;
  const zipper = await getZipperBySlug(slug, locale as Locale);

  if (!zipper) notFound();

  const backHref = locale === 'en' ? '/use-of-zippers/' : '/pl/zastosowanie-zamkow/';

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-xs text-gray-400 font-[Jost] flex items-center gap-2">
            <Link href={locale === 'en' ? '/' : '/pl/'} className="hover:text-black transition-colors">
              {locale === 'en' ? 'Home' : 'Start'}
            </Link>
            <span>›</span>
            <Link href={backHref} className="hover:text-black transition-colors">
              {locale === 'en' ? 'Products' : 'Produkty'}
            </Link>
            <span>›</span>
            <span className="text-gray-600">{zipper!.name}</span>
          </nav>
        </div>
      </div>

      {/* Product */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Image */}
          <div className="sm:w-1/2 flex-shrink-0">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50">
              {zipper!.thumbnailUrl ? (
                <Image
                  src={zipper!.thumbnailUrl}
                  alt={zipper!.thumbnailAlt || zipper!.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-300 text-4xl font-[Jost]">TAF</span>
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="sm:w-1/2 flex flex-col">
            <h1 className="font-[Jost] text-3xl font-normal text-black leading-snug mb-5">
              {zipper!.name}
            </h1>

            {zipper!.description && (
              <div
                className="font-[Jost] font-light text-gray-600 text-sm leading-relaxed mb-6 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: zipper!.description }}
              />
            )}

            {zipper!.specs && zipper!.specs.length > 0 && (
              <div className="mt-2">
                <h2 className="font-[Jost] text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  {locale === 'en' ? 'Specifications' : 'Specyfikacja'}
                </h2>
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {zipper!.specs.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-2 px-3 font-[Jost] font-medium text-gray-700 text-xs w-1/2 border-b border-gray-100">
                          {spec.label}
                        </td>
                        <td className="py-2 px-3 font-[Jost] text-gray-600 text-xs border-b border-gray-100">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link
                href={locale === 'en' ? '/contact/' : '/pl/kontakt/'}
                className="inline-block bg-black text-white font-[Jost] font-medium text-sm px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                {locale === 'en' ? 'Request a quote' : 'Zapytaj o wycenę'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: zipper!.name,
            description: zipper!.description?.replace(/<[^>]*>/g, '').slice(0, 500),
            image: zipper!.thumbnailUrl,
            brand: { '@type': 'Brand', name: 'YKK' },
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              seller: { '@type': 'Organization', name: 'TAF - Trims and Fasteners' },
            },
          }),
        }}
      />
    </div>
  );
}
