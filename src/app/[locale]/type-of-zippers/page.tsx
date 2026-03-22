import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPageBySlug, extractYoastMeta } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';

type Props = { params: Promise<{ locale: string }> };

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
  };
}

export default async function TypeOfZippersPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const types = isEn
    ? [
        { label: 'Nylon Zippers', desc: 'Flexible coil zippers — the most versatile type. Available water-resistant, concealed, and with custom tapes.', href: '/type-of-zippers/nylon-zippers/', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png' },
        { label: 'Plastic Zippers', desc: 'Durable molded Delrin zippers. Waterproof, flame-retardant, UV-resistant options available.', href: '/type-of-zippers/plastic-zippers/', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png' },
        { label: 'Metal Zippers', desc: 'Premium brass, aluminium and stainless steel zippers for fashion, workwear, and footwear.', href: '/type-of-zippers/metal-zippers/', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png' },
      ]
    : [
        { label: 'Zamki nylonowe', desc: 'Elastyczne zamki spiralne — najbardziej wszechstronny typ. Dostępne wodoodporne, ukryte i z własną taśmą.', href: '/pl/rodzaje-zamkow/zamki-nylonowe/', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png' },
        { label: 'Zamki plastikowe', desc: 'Trwałe zamki kostkowe Delrin. Opcje wodoodporne, trudnopalne, odporne na UV.', href: '/pl/rodzaje-zamkow/zamki-plastikowe/', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png' },
        { label: 'Zamki metalowe', desc: 'Zamki premium z mosiądzu, aluminium i stali nierdzewnej do mody, odzieży roboczej i obuwia.', href: '/pl/rodzaje-zamkow/zamki-metalowe/', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png' },
      ];

  return (
    <div>
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[Jost] text-3xl sm:text-5xl font-normal">
            {isEn ? 'Types of Zippers' : 'Rodzaje zamków'}
          </h1>
          <p className="font-[Jost] text-white/60 mt-3 max-w-xl">
            {isEn
              ? 'Nylon coil, plastic molded and metal zippers — choose the right type for your project.'
              : 'Zamki nylonowe spiralne, plastikowe kostkowe i metalowe — wybierz odpowiedni typ do swojego projektu.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {types.map(type => (
            <Link key={type.label} href={type.href} className="group block">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                <Image
                  src={type.img}
                  alt={type.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="font-[Jost] text-white text-xl font-medium">{type.label}</h2>
                </div>
              </div>
              <p className="font-[Jost] text-sm text-gray-500 group-hover:text-gray-700 transition-colors leading-relaxed">
                {type.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
