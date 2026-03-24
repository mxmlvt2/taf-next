import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

type Props = { params: Promise<{ locale: string }> };

const TYPES = [
  {
    labelEn: 'Plastic Zippers',
    labelPl: 'Zamki plastikowe',
    hrefEn: '/type-of-zippers/plastic-zippers/',
    hrefPl: '/pl/type-of-zippers/plastic-zippers/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/plastikowyzielony-1.jpg',
  },
  {
    labelEn: 'Nylon Zippers',
    labelPl: 'Zamki nylonowe',
    hrefEn: '/type-of-zippers/nylon-zippers/',
    hrefPl: '/pl/type-of-zippers/nylon-zippers/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg',
  },
  {
    labelEn: 'Metal Zippers',
    labelPl: 'Zamki metalowe',
    hrefEn: '/type-of-zippers/metal-zippers/',
    hrefPl: '/pl/type-of-zippers/metal-zippers/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/metalslider34-scaled.jpg',
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'en' ? 'Types of Zippers | TAF' : 'Rodzaje zamków | TAF',
    description: locale === 'en'
      ? 'Plastic, nylon and metal zippers from YKK. Professional zipper supplier TAF.'
      : 'Zamki plastikowe, nylonowe i metalowe YKK. Profesjonalny dostawca zamków TAF.',
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
  const title = isEn ? 'Type of Zippers' : 'Rodzaje zamków';
  const contactHref = isEn ? '/contact/' : '/pl/contact/';

  return (
    <div>
      {/* Dark hero */}
      <div className="relative bg-[#111111] text-white py-20 overflow-hidden">
        <Image
          src="https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg"
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
            <span className="text-white/70">{isEn ? 'Type of Zippers' : 'Rodzaje zamków'}</span>
          </nav>

          <h1
            className="font-[Jost] text-3xl sm:text-5xl font-light mb-5 max-w-3xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />

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

    </div>
  );
}
