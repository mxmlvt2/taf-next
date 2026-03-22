import type { Metadata } from 'next';
import { getPageBySlug, extractYoastMeta } from '@/lib/wordpress';
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
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-[Jost] text-3xl sm:text-5xl font-normal"
            dangerouslySetInnerHTML={{ __html: page?.title.rendered || (locale === 'en' ? 'Personalization' : 'Personalizacja') }}
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {page?.content.rendered ? (
          <div
            className="prose prose-gray max-w-none font-[Jost]"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        ) : (
          <p className="font-[Jost] text-gray-400">Content loading...</p>
        )}
      </div>
    </div>
  );
}
