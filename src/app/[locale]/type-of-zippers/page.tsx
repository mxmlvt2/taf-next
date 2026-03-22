import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPageBySlug, extractYoastMeta } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';

type Props = { params: Promise<{ locale: string }> };

const TYPES = [
  {
    labelEn: 'Plastic Zippers',
    labelPl: 'Zamki plastikowe',
    hrefEn: '/type-of-zippers/plastic-zippers/',
    hrefPl: '/pl/rodzaje-zamkow/zamki-plastikowe/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/plastikowyzielony-1.jpg',
  },
  {
    labelEn: 'Nylon Zippers',
    labelPl: 'Zamki nylonowe',
    hrefEn: '/type-of-zippers/nylon-zippers/',
    hrefPl: '/pl/rodzaje-zamkow/zamki-nylonowe/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg',
  },
  {
    labelEn: 'Metal Zippers',
    labelPl: 'Zamki metalowe',
    hrefEn: '/type-of-zippers/metal-zippers/',
    hrefPl: '/pl/rodzaje-zamkow/zamki-metalowe/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/metalslider34-scaled.jpg',
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const slug = locale === 'en' ? 'type-of-zippers' : 'rodzaje-zamkow';
  const page = await getPageBySlug(slug, locale as Locale);
  const seo = extractYoastMeta(page);
  return {
    title: seo.title || (locale === 'en' ? 'Types of Zippers | TAF' : 'Rodzaje zamków | TAF'),
    description: seo.description,
    alternates: {
      canonical: locale === 'en'
        ? 'https://trimsandfasteners.com/type-of-zippers/'
        : 'https://trimsandfasteners.com/pl/rodzaje-zamkow/',
      languages: {
        en: 'https://trimsandfasteners.com/type-of-zippers/',
        pl: 'https://trimsandfasteners.com/pl/rodzaje-zamkow/',
      },
    },
    openGraph: { title: seo.ogTitle, description: seo.ogDescription, images: seo.ogImage ? [seo.ogImage] : [] },
  };
}

export default async function TypeOfZippersPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === 'en';
  const slug = isEn ? 'type-of-zippers' : 'rodzaje-zamkow';
  const page = await getPageBySlug(slug, locale as Locale);

  const title = page?.title.rendered || (isEn ? 'Type of Zippers' : 'Rodzaje zamków');
  const faqSchema = page?.yoast_head_json?.schema;
  const contactHref = isEn ? '/contact/' : '/pl/kontakt/';

  return (
    <div>
      {/* Dark hero */}
      <div className="bg-[#111111] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/40 font-[Jost] mb-4 flex items-center gap-2">
            <Link href={isEn ? '/' : '/pl/'} className="hover:text-white transition-colors">
              {isEn ? 'Home' : 'Start'}
            </Link>
            <span>›</span>
            <span className="text-white/70">{isEn ? 'Type of Zippers' : 'Rodzaje zamków'}</span>
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
            {isEn ? 'Contact us' : 'Skontaktuj się'}
          </Link>
        </div>
      </div>

      {/* WP page content (alternating image/text sections) */}
      {page?.content.rendered && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
            className="prose prose-gray prose-lg max-w-none font-[Jost] prose-headings:font-[Jost] prose-headings:font-normal prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        </section>
      )}

      {/* Sub-category cards */}
      <section className="bg-[#f5f3ef] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-10 text-[#111]">
            {isEn ? 'Types of Zippers' : 'Rodzaje zamków'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TYPES.map(t => (
              <Link
                key={t.hrefEn}
                href={isEn ? t.hrefEn : t.hrefPl}
                className="group relative overflow-hidden aspect-[4/3] block"
              >
                <Image
                  src={t.img}
                  alt={isEn ? t.labelEn : t.labelPl}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-[Jost] text-white text-lg font-light">
                    {isEn ? t.labelEn : t.labelPl}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD FAQ schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </div>
  );
}
