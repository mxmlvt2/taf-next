import type { Metadata } from 'next';
import { getPageBySlug, extractYoastMeta } from '@/lib/wordpress';
import { stripElementorHero } from '@/lib/utils';
import type { Locale } from '@/lib/types';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const slug = locale === 'en' ? 'personalization' : 'personalizacja';
  const page = await getPageBySlug(slug, locale as Locale);
  const seo = extractYoastMeta(page);
  return {
    title: seo.title || (locale === 'en' ? 'Personalization | TAF' : 'Personalizacja | TAF'),
    description: seo.description,
    alternates: {
      canonical: locale === 'en' ? 'https://trimsandfasteners.com/personalization/' : 'https://trimsandfasteners.com/pl/personalizacja/',
      languages: {
        en: 'https://trimsandfasteners.com/personalization/',
        pl: 'https://trimsandfasteners.com/pl/personalizacja/',
      },
    },
    openGraph: { title: seo.ogTitle, description: seo.ogDescription, images: seo.ogImage ? [seo.ogImage] : [] },
  };
}

export default async function PersonalizationPage({ params }: Props) {
  const { locale } = await params;
  const slug = locale === 'en' ? 'personalization' : 'personalizacja';
  const page = await getPageBySlug(slug, locale as Locale);

  return (
    <div>
      {/* Dark hero with background image — matches WP personalization page */}
      <div className="relative bg-[#111111] text-white overflow-hidden" style={{ minHeight: '280px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: 'url(https://trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 flex flex-col justify-end" style={{ minHeight: '280px' }}>
          <h1
            className="font-[Jost] text-4xl sm:text-6xl font-light"
            dangerouslySetInnerHTML={{ __html: page?.title.rendered || (locale === 'en' ? 'Personalization' : 'Personalizacja') }}
          />
          {locale === 'en' && (
            <p className="font-[Jost] text-white/60 text-base font-light mt-2">Your vision, our mission</p>
          )}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {page?.content.rendered ? (
          <div
            className="elementor-content prose prose-gray max-w-none font-[Jost] prose-headings:font-[Jost] prose-headings:font-light prose-headings:text-[#111] prose-p:text-gray-500 prose-p:text-sm"
            dangerouslySetInnerHTML={{ __html: stripElementorHero(page.content.rendered) }}
          />
        ) : (
          <p className="font-[Jost] text-gray-400">Content loading...</p>
        )}
      </div>
    </div>
  );
}
