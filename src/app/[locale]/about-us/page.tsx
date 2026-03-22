import type { Metadata } from 'next';
import Image from 'next/image';
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
    <div className="bg-[#f5f3ef] min-h-screen">
      {/* Main about section — cream background, two-column */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text content */}
          <div>
            <p className="font-[Jost] text-xs font-normal text-gray-500 uppercase tracking-widest mb-4">
              {locale === 'en' ? 'Trims and Fasteners Company' : 'Firma Trims and Fasteners'}
            </p>
            <h1 className="font-[Jost] text-4xl sm:text-5xl font-light text-[#111] leading-tight mb-8">
              {page?.title.rendered
                ? <span dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
                : (locale === 'en' ? 'Proven supplier of zip fasteners' : 'Sprawdzony dostawca zamków błyskawicznych')}
            </h1>

            {page?.content.rendered ? (
              <div
                className="prose max-w-none font-[Jost] prose-headings:font-[Jost] prose-headings:font-light prose-headings:text-[#111] prose-p:text-gray-500 prose-p:text-sm prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: page.content.rendered }}
              />
            ) : (
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {locale === 'en'
                    ? 'TAF – Trims and Fasteners is a professional distributor of YKK zippers and fasteners, serving fashion, military, sportswear, furniture, and industrial clients across Europe.'
                    : 'TAF – Trims and Fasteners to profesjonalny dystrybutor zamków YKK i akcesoriów, obsługujący klientów z branży modowej, wojskowej, sportowej, meblowej i przemysłowej w całej Europie.'}
                </p>
                <p>
                  {locale === 'en'
                    ? 'As an authorized YKK distributor, we offer the full range of nylon, plastic, and metal zippers with custom options for color, finish, and branding.'
                    : 'Jako autoryzowany dystrybutor YKK oferujemy pełną gamę zamków nylonowych, plastikowych i metalowych z opcjami personalizacji koloru, wykończenia i brandingu.'}
                </p>
              </div>
            )}
          </div>

          {/* Right: large TAF logo graphic */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Large TAF text graphic — very light watermark */}
              <div className="text-[12rem] sm:text-[16rem] font-[Jost] font-bold text-[#111]/8 leading-none select-none pointer-events-none">
                TAF
              </div>
              {/* Actual logo on top */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="https://trimsandfasteners.com/wp-content/uploads/2025/08/Projekt-bez-nazwy-75.png"
                  alt="TAF - Trims and Fasteners"
                  width={200}
                  height={80}
                  className="w-40 sm:w-52 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer-style dark section is in the actual Footer, so no stats needed — the WP page just has the content */}
    </div>
  );
}
