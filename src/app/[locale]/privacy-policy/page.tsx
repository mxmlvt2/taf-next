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
    <div className="bg-white">
      {/* Simple white header — no big black hero for a legal/info page */}
      <div className="border-b border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-gray-400 font-[Jost] mb-4 flex items-center gap-2">
            <Link href={locale === 'en' ? '/' : '/pl/'} className="hover:text-gray-700 transition-colors">
              {locale === 'en' ? 'Home' : 'Start'}
            </Link>
            <span>›</span>
            <span className="text-gray-600">{locale === 'en' ? 'Privacy Policy' : 'Polityka prywatności'}</span>
          </nav>
          <h1 className="font-[Jost] text-3xl sm:text-4xl font-light text-[#111]">
            {locale === 'en' ? 'Privacy Policy' : 'Polityka prywatności'}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {content ? (
          <div
            className="
              prose prose-gray max-w-none font-[Jost]
              prose-headings:font-[Jost] prose-headings:font-normal prose-headings:text-[#111]
              prose-h1:text-3xl prose-h1:font-light
              prose-h2:text-xl prose-h2:font-semibold prose-h2:mt-10 prose-h2:mb-3
              prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
              prose-h3:text-base prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-2
              prose-p:text-gray-600 prose-p:text-sm prose-p:leading-relaxed prose-p:my-3
              prose-li:text-gray-600 prose-li:text-sm
              prose-ul:my-3 prose-ol:my-3
              prose-a:text-[#111] prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-gray-500
              prose-strong:text-gray-800 prose-strong:font-semibold
            "
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <p className="font-[Jost] text-gray-400">{locale === 'en' ? 'Content loading...' : 'Ładowanie...'}</p>
        )}
      </div>
    </div>
  );
}
