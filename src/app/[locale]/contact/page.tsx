import type { Metadata } from 'next';
import { getPageBySlug, extractYoastMeta } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';
import ContactForm from '@/components/sections/ContactForm';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const slug = locale === 'en' ? 'contact' : 'kontakt';
  const page = await getPageBySlug(slug, locale as Locale);
  const seo = extractYoastMeta(page);
  return {
    title: seo.title || (locale === 'en' ? 'Contact TAF | Zipper Supplier' : 'Kontakt TAF | Dostawca zamków'),
    description: seo.description,
    alternates: {
      canonical: locale === 'en' ? 'https://trimsandfasteners.com/contact/' : 'https://trimsandfasteners.com/pl/kontakt/',
      languages: {
        en: 'https://trimsandfasteners.com/contact/',
        pl: 'https://trimsandfasteners.com/pl/kontakt/',
      },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const slug = locale === 'en' ? 'contact' : 'kontakt';
  const page = await getPageBySlug(slug, locale as Locale);

  return (
    <div>
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[Jost] text-3xl sm:text-5xl font-normal">
            {locale === 'en' ? 'Contact' : 'Kontakt'}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: page content */}
          <div>
            {page?.content.rendered ? (
              <div
                className="prose prose-gray max-w-none font-[Jost]"
                dangerouslySetInnerHTML={{ __html: page.content.rendered }}
              />
            ) : (
              <div className="space-y-4 font-[Jost]">
                <p className="text-gray-600">
                  {locale === 'en'
                    ? 'Contact us for pricing, bulk orders, or any questions about our zipper range.'
                    : 'Skontaktuj się z nami w sprawie wyceny, zamówień hurtowych lub pytań dotyczących naszego asortymentu zamków.'}
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>📧 <a href="mailto:info@trimsandfasteners.com" className="hover:text-black">info@trimsandfasteners.com</a></p>
                  <p>📍 Warsaw, Poland</p>
                </div>
              </div>
            )}
          </div>
          {/* Right: contact form */}
          <ContactForm locale={locale as Locale} />
        </div>
      </div>
    </div>
  );
}
