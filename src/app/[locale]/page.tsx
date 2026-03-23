import type { Metadata } from 'next';
import { getPageBySlug, extractYoastMeta } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';
import Hero from '@/components/sections/Hero';
import HomeSections from '@/components/sections/HomeSections';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const slug = locale === 'pl' ? 'start' : 'start';
  const page = await getPageBySlug(slug, locale as Locale);
  const seo = extractYoastMeta(page);

  return {
    title: seo.title || (locale === 'en'
      ? 'TAF - Premium Zippers & Fasteners Supplier | Trims and Fasteners'
      : 'TAF - Kompleksowy Dostawca Zamków | Dystrybutor YKK Polska'),
    description: seo.description || (locale === 'en'
      ? 'Professional supplier of high-quality zippers, fasteners, and bag hardware. YKK distributor.'
      : 'Profesjonalny dostawca zamków błyskawicznych YKK. Zamki plastikowe, nylonowe i metalowe.'),
    alternates: {
      canonical: locale === 'en' ? 'https://trimsandfasteners.com/' : 'https://trimsandfasteners.com/pl/',
      languages: {
        'en': 'https://trimsandfasteners.com/',
        'pl': 'https://trimsandfasteners.com/pl/',
      },
    },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: seo.ogImage ? [seo.ogImage] : [],
      locale: locale === 'en' ? 'en_US' : 'pl_PL',
      type: 'website',
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  const HERO_SLIDES = [
    'https://trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg',
    'https://trimsandfasteners.com/wp-content/uploads/2025/06/metalslider2-scaled.jpg',
  ];

  return (
    <>
      <Hero slides={HERO_SLIDES} />
      <HomeSections locale={locale as Locale} />
    </>
  );
}
