import type { Metadata } from 'next';
import { getPageBySlug, extractYoastMeta } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const slug = locale === 'en' ? 'nylon-zipper-chain-size-chart' : 'tasmy-spiralne-zestawienie-rozmiarow';
  const page = await getPageBySlug(slug, locale as Locale);
  const seo = extractYoastMeta(page);
  return {
    title: seo.title || 'Nylon Zipper Size Chart | TAF',
    description: seo.description,
    alternates: {
      canonical: locale === 'en'
        ? 'https://trimsandfasteners.com/nylon-zipper-chain-size-chart/'
        : 'https://trimsandfasteners.com/pl/tasmy-spiralne-zestawienie-rozmiarow/',
      languages: {
        en: 'https://trimsandfasteners.com/nylon-zipper-chain-size-chart/',
        pl: 'https://trimsandfasteners.com/pl/tasmy-spiralne-zestawienie-rozmiarow/',
      },
    },
  };
}

export default async function SizeChartPage({ params }: Props) {
  const { locale } = await params;
  const slug = locale === 'en' ? 'nylon-zipper-chain-size-chart' : 'tasmy-spiralne-zestawienie-rozmiarow';
  const page = await getPageBySlug(slug, locale as Locale);

  return (
    <div>
      <div className="bg-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-[Jost] text-3xl sm:text-4xl font-light"
            dangerouslySetInnerHTML={{ __html: page?.title.rendered || 'Nylon Zipper Chain Size Chart' }}
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-x-auto">
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
