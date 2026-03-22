import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPageBySlug, extractYoastMeta } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';

type Props = { params: Promise<{ locale: string }> };

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
    openGraph: { title: seo.ogTitle, description: seo.ogDescription },
  };
}

export default async function UseOfZippersPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const categories = isEn
    ? [
        { slug: 'fashion', label: 'Fashion', desc: 'Premium zippers for fashion & haute couture', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-43.png', href: '/use-of-zippers/fashion/' },
        { slug: 'cycling-sportswear', label: 'Cycling & Sportswear', desc: 'High-performance zippers for sportswear', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png', href: '/use-of-zippers/cycling-sportswear/' },
        { slug: 'baby', label: 'Baby', desc: 'Safe, soft zippers for baby clothing', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png', href: '/use-of-zippers/baby/' },
        { slug: 'military', label: 'Military', desc: 'NIR-compliant tactical zippers', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png', href: '/use-of-zippers/military/' },
        { slug: 'furniture', label: 'Furniture', desc: 'Concealed zippers for upholstery', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png', href: '/use-of-zippers/furniture/' },
        { slug: 'fire-protection', label: 'Fire-Resistant Clothing', desc: 'Flame-retardant certified zippers', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png', href: '/use-of-zippers/fire-protection/' },
        { slug: 'buckles-plastic-hardware', label: 'Buckles & Plastic Hardware', desc: 'Buckles and clips for bags & tactical gear', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png', href: '/use-of-zippers/buckles-plastic-hardware/' },
      ]
    : [
        { slug: 'moda', label: 'Moda', desc: 'Zamki premium dla mody i haute couture', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-43.png', href: '/pl/zastosowanie-zamkow/moda/' },
        { slug: 'odziez-sportowa', label: 'Kolarstwo & odzież sportowa', desc: 'Zamki wysokiej wydajności do odzieży sportowej', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png', href: '/pl/zastosowanie-zamkow/odziez-sportowa/' },
        { slug: 'dzieci', label: 'Odzież dziecięca', desc: 'Bezpieczne, miękkie zamki do odzieży dziecięcej', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png', href: '/pl/zastosowanie-zamkow/dzieci/' },
        { slug: 'wojsko', label: 'Wojsko', desc: 'Zamki taktyczne z ograniczoną sygnaturą NIR', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png', href: '/pl/zastosowanie-zamkow/wojsko/' },
        { slug: 'meble', label: 'Meble', desc: 'Ukryte zamki do tapicerki meblowej', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png', href: '/pl/zastosowanie-zamkow/meble/' },
        { slug: 'odziez-ognioodporna', label: 'Odzież ognioodporna', desc: 'Zamki trudnopalne z certyfikatem EN', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png', href: '/pl/zastosowanie-zamkow/odziez-ognioodporna/' },
        { slug: 'zapiecia', label: 'Zapięcia & elementy plastikowe', desc: 'Klamry i zapięcia do plecaków i sprzętu taktycznego', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png', href: '/pl/zapiecia-elementy-plastikowe/' },
      ];

  return (
    <div>
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[Jost] text-3xl sm:text-5xl font-normal">
            {isEn ? 'Use of Zippers' : 'Zastosowanie zamków'}
          </h1>
          <p className="font-[Jost] text-white/60 mt-3 max-w-xl">
            {isEn
              ? 'Specialized zipper solutions for every industry — from military to fashion.'
              : 'Specjalistyczne zamki dla każdej branży — od wojska po modę.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => (
            <Link key={cat.slug} href={cat.href} className="group block">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="font-[Jost] text-white text-xl font-medium">{cat.label}</h2>
                </div>
              </div>
              <p className="font-[Jost] text-sm text-gray-500 group-hover:text-gray-700 transition-colors">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
