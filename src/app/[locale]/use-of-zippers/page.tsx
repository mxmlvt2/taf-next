import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPageBySlug, extractYoastMeta } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';

type Props = { params: Promise<{ locale: string }> };

const CATEGORIES = [
  {
    labelEn: 'Fire-Resistant Clothing',
    labelPl: 'Odzież ognioodporna',
    hrefEn: '/use-of-zippers/fire-protection/',
    hrefPl: '/pl/zastosowanie-zamkow/odziez-ognioodporna/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-9.png',
  },
  {
    labelEn: 'Military',
    labelPl: 'Wojsko',
    hrefEn: '/use-of-zippers/military/',
    hrefPl: '/pl/zastosowanie-zamkow/wojsko/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png',
  },
  {
    labelEn: 'Cycling & Sportswear',
    labelPl: 'Kolarstwo & odzież sportowa',
    hrefEn: '/use-of-zippers/cycling-sportswear/',
    hrefPl: '/pl/zastosowanie-zamkow/odziez-sportowa/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/zamki-dla-odziezy-sportowej.png',
  },
  {
    labelEn: 'Baby',
    labelPl: 'Odzież dziecięca',
    hrefEn: '/use-of-zippers/baby/',
    hrefPl: '/pl/zastosowanie-zamkow/dzieci/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-42.png',
  },
  {
    labelEn: 'Fashion',
    labelPl: 'Moda',
    hrefEn: '/use-of-zippers/fashion/',
    hrefPl: '/pl/zastosowanie-zamkow/moda/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-43.png',
  },
  {
    labelEn: 'Furniture',
    labelPl: 'Meble',
    hrefEn: '/use-of-zippers/furniture/',
    hrefPl: '/pl/zastosowanie-zamkow/meble/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-44.png',
  },
  {
    labelEn: 'Buckles & Plastic Hardware',
    labelPl: 'Zapięcia & elementy plastikowe',
    hrefEn: '/use-of-zippers/buckles-plastic-hardware/',
    hrefPl: '/pl/zastosowanie-zamkow/zapiecia-elementy-plastikowe/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/09/Projekt-bez-nazwy-79.png',
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const slug = locale === 'en' ? 'use-of-zippers' : 'zastosowanie-zamkow';
  const page = await getPageBySlug(slug, locale as Locale);
  const seo = extractYoastMeta(page);
  return {
    title: seo.title || (locale === 'en' ? 'Use of Zippers | TAF' : 'Zastosowanie zamków | TAF'),
    description: seo.description,
    alternates: {
      canonical: locale === 'en'
        ? 'https://trimsandfasteners.com/use-of-zippers/'
        : 'https://trimsandfasteners.com/pl/zastosowanie-zamkow/',
      languages: {
        en: 'https://trimsandfasteners.com/use-of-zippers/',
        pl: 'https://trimsandfasteners.com/pl/zastosowanie-zamkow/',
      },
    },
    openGraph: { title: seo.ogTitle, description: seo.ogDescription, images: seo.ogImage ? [seo.ogImage] : [] },
  };
}

export default async function UseOfZippersPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === 'en';
  const slug = isEn ? 'use-of-zippers' : 'zastosowanie-zamkow';
  const page = await getPageBySlug(slug, locale as Locale);

  const title = page?.title.rendered || (isEn ? 'Use of Zippers' : 'Zastosowanie zamków');
  const faqSchema = page?.yoast_head_json?.schema;
  const contactHref = isEn ? '/contact/' : '/pl/kontakt/';

  return (
    <div>
      {/* Dark hero */}
      <div className="relative bg-[#111111] text-white py-20 overflow-hidden">
        <Image
          src="https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-9.png"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/40 font-[Jost] mb-4 flex items-center gap-2">
            <Link href={isEn ? '/' : '/pl/'} className="hover:text-white transition-colors">
              {isEn ? 'Home' : 'Start'}
            </Link>
            <span>›</span>
            <span className="text-white/70">{isEn ? 'Use of Zippers' : 'Zastosowanie zamków'}</span>
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


      {/* Sub-category cards */}
      <section className="bg-[#f5f3ef] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-16">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.hrefEn}
                href={isEn ? cat.hrefEn : cat.hrefPl}
                className="group relative overflow-hidden aspect-[4/3] block"
              >
                <Image
                  src={cat.img}
                  alt={isEn ? cat.labelEn : cat.labelPl}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h2 className="font-[Jost] text-white text-sm font-normal leading-tight">
                    {isEn ? cat.labelEn : cat.labelPl}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WP page content */}
      {page?.content.rendered && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
            className="prose prose-gray prose-lg max-w-none font-[Jost] prose-headings:font-[Jost] prose-headings:font-normal prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        </section>
      )}

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
