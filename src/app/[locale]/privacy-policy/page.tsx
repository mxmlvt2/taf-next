import type { Metadata } from 'next';
import Link from 'next/link';
import { getPageBySlug, extractYoastMeta } from '@/lib/wordpress';
import { stripElementorHero } from '@/lib/utils';
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

  const rawContent = page?.content.rendered ?? '';
  const content = rawContent ? stripElementorHero(rawContent) : '';

  return (
    <div>
      {/* Dark hero */}
      <div className="bg-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/40 font-[Jost] mb-4 flex items-center gap-2">
            <Link href={locale === 'en' ? '/' : '/pl/'} className="hover:text-white transition-colors">
              {locale === 'en' ? 'Home' : 'Start'}
            </Link>
            <span>›</span>
            <span className="text-white/70">{locale === 'en' ? 'Privacy Policy' : 'Polityka prywatności'}</span>
          </nav>
          <h1 className="font-[Jost] text-3xl sm:text-4xl font-light">
            {locale === 'en' ? 'Privacy Policy' : 'Polityka prywatności'}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {content ? (
          <div
            className="prose prose-gray prose-lg max-w-none font-[Jost]
              prose-headings:font-[Jost] prose-headings:font-light prose-headings:text-[#111]
              prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:text-sm prose-p:leading-relaxed
              prose-li:text-gray-600 prose-li:text-sm
              prose-a:text-black prose-a:underline hover:prose-a:text-gray-600
              prose-strong:text-gray-800 prose-strong:font-medium"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <p className="font-[Jost] text-gray-400">{locale === 'en' ? 'Content loading...' : 'Ładowanie...'}</p>
        )}
      </div>
    </div>
  );
}
