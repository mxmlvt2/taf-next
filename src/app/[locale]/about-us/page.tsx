import type { Metadata } from 'next';
import { getPageBySlug, extractYoastMeta } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const slug = locale === 'en' ? 'about-us' : 'o-nas';
  const page = await getPageBySlug(slug, locale as Locale);
  const seo = extractYoastMeta(page);
  return {
    title: seo.title || (locale === 'en' ? 'About TAF | Premium Zipper Supplier' : 'O TAF | Dystrybutor YKK'),
    description: seo.description,
    alternates: {
      canonical: locale === 'en' ? 'https://trimsandfasteners.com/about-us/' : 'https://trimsandfasteners.com/pl/o-nas/',
      languages: {
        en: 'https://trimsandfasteners.com/about-us/',
        pl: 'https://trimsandfasteners.com/pl/o-nas/',
      },
    },
    openGraph: { title: seo.ogTitle, description: seo.ogDescription, images: seo.ogImage ? [seo.ogImage] : [] },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const slug = locale === 'en' ? 'about-us' : 'o-nas';
  const page = await getPageBySlug(slug, locale as Locale);

  return (
    <div>
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-[Jost] text-3xl sm:text-5xl font-normal"
            dangerouslySetInnerHTML={{ __html: page?.title.rendered || (locale === 'en' ? 'About Us' : 'O nas') }}
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
