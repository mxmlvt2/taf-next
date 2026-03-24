import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/types';
import { getProductBySlug, getAllProductSlugs, getRelatedProducts } from '@/lib/wordpress';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  try {
    const [enSlugs, plSlugs] = await Promise.all([
      getAllProductSlugs('en'),
      getAllProductSlugs('pl'),
    ]);
    return [
      ...enSlugs.map(slug => ({ locale: 'en', slug })),
      ...plSlugs.map(slug => ({ locale: 'pl', slug })),
    ];
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = await getProductBySlug(slug, locale as Locale);
  if (!product) return { title: 'Product | TAF' };

  const name = product.title?.rendered || slug;
  const description = product.excerpt?.rendered
    ? product.excerpt.rendered.replace(/<[^>]*>/g, '').trim().slice(0, 160)
    : `${name} - professional zipper by TAF`;

  const featuredImg = product._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  const canonical = locale === 'en'
    ? `https://trimsandfasteners.com/product/${slug}/`
    : `https://trimsandfasteners.com/pl/produkt/${slug}/`;

  return {
    title: `${name} | TAF`,
    description,
    alternates: {
      canonical,
      languages: {
        en: `https://trimsandfasteners.com/product/${slug}/`,
        pl: `https://trimsandfasteners.com/pl/produkt/${slug}/`,
      },
    },
    openGraph: {
      title: name,
      description,
      images: featuredImg ? [featuredImg] : [],
      type: 'website',
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = await params;
  const product = await getProductBySlug(slug, locale as Locale);
  if (!product) notFound();

  const name = product.title?.rendered || slug;
  const featuredImg = product._embedded?.['wp:featuredmedia']?.[0];
  const backHref = locale === 'en' ? '/use-of-zippers/' : '/pl/use-of-zippers/';

  // Get related products (by category)
  const categoryId = product._embedded?.['wp:term']?.[0]?.[0]?.id;
  const related = categoryId
    ? await getRelatedProducts(product.id, categoryId, locale as Locale)
    : [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description: product.excerpt?.rendered?.replace(/<[^>]*>/g, '').trim().slice(0, 500) || name,
    image: featuredImg?.source_url,
    brand: { '@type': 'Brand', name: 'YKK' },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'TAF - Trims and Fasteners' },
    },
  };

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
            <span
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: name }}
            />
          </nav>
        </div>
      </div>

      {/* Product main section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
          {/* Left: image */}
          <div className="relative aspect-square overflow-hidden bg-white border border-gray-100 group">
            {featuredImg ? (
              <>
                <Image
                  src={featuredImg.source_url}
                  alt={featuredImg.alt_text || name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority
                />
                {/* Zoom icon overlay */}
                <div className="absolute top-3 right-3 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </>
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-300 text-4xl font-[Jost]">TAF</span>
              </div>
            )}
          </div>

          {/* Right: details */}
          <div className="flex flex-col">
            <h1
              className="font-[Jost] text-3xl font-light text-[#111] leading-snug mb-5"
              dangerouslySetInnerHTML={{ __html: name }}
            />

            {product.excerpt?.rendered && (
              <div
                className="font-[Jost] font-light text-gray-600 text-sm leading-relaxed mb-6 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: product.excerpt.rendered }}
              />
            )}

            {product.content?.rendered && !product.excerpt?.rendered && (
              <div
                className="font-[Jost] font-light text-gray-600 text-sm leading-relaxed mb-6 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: product.content.rendered }}
              />
            )}

            <div className="mt-auto pt-6 border-t border-gray-100">
              <Link
                href={locale === 'en' ? '/contact/' : '/pl/contact/'}
                className="inline-block bg-black text-white font-[Jost] font-medium text-sm px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                {locale === 'en' ? 'Contact us' : 'Skontaktuj się'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-[#f5f3ef] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[Jost] text-2xl font-light mb-8 text-[#111] text-center">
              {locale === 'en' ? 'Related products' : 'Powiązane produkty'}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {related.slice(0, 4).map(rel => {
                const relImg = rel._embedded?.['wp:featuredmedia']?.[0];
                const relName = rel.title?.rendered || '';
                const relHref = locale === 'en'
                  ? `/product/${rel.slug}/`
                  : `/pl/produkt/${rel.slug}/`;
                return (
                  <Link
                    key={rel.id}
                    href={relHref}
                    className="group bg-white overflow-hidden border border-gray-100 hover:shadow-sm transition-shadow"
                  >
                    <div className="relative aspect-square bg-white">
                      {relImg ? (
                        <Image
                          src={relImg.source_url}
                          alt={relImg.alt_text || relName}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-200 text-2xl font-[Jost]">TAF</div>
                      )}
                    </div>
                    <div className="p-3 border-t border-gray-100">
                      <p
                        className="font-[Jost] text-xs font-normal text-gray-700 mb-1 line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: relName }}
                      />
                      <span className="font-[Jost] text-xs text-gray-400">
                        {locale === 'en' ? 'Learn more' : 'Dowiedz się więcej'} →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
