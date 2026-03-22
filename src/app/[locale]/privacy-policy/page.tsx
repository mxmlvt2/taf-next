import type { Metadata } from 'next';
import { getPageBySlug, extractYoastMeta } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const slug = locale === 'en' ? 'privacy-policy' : 'polityka-prywatnosci';
  const page = await getPageBySlug(slug, locale as Locale);
  const seo = extractYoastMeta(page);
  return {
    title: seo.title || (locale === 'en' ? 'Privacy Policy | TAF' : 'Polityka prywatności | TAF'),
    description: seo.description,
    alternates: {
      canonical: locale === 'en' ? 'https://trimsandfasteners.com/privacy-policy/' : 'https://trimsandfasteners.com/pl/polityka-prywatnosci/',
      languages: {
        en: 'https://trimsandfasteners.com/privacy-policy/',
        pl: 'https://trimsandfasteners.com/pl/polityka-prywatnosci/',
      },
    },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  const slug = locale === 'en' ? 'privacy-policy' : 'polityka-prywatnosci';
  const page = await getPageBySlug(slug, locale as Locale);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1
        className="font-[Jost] text-3xl font-normal mb-8"
        dangerouslySetInnerHTML={{ __html: page?.title.rendered || (locale === 'en' ? 'Privacy Policy' : 'Polityka prywatności') }}
      />
      {page?.content.rendered ? (
        <div
          className="prose prose-gray max-w-none font-[Jost]"
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        />
      ) : (
        <p className="font-[Jost] text-gray-400">Content loading...</p>
      )}
    </div>
  );
}
