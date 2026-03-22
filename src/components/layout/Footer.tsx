import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import type { Locale } from '@/lib/types';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const base = locale === 'en' ? '' : '/pl';

  const usageLinks = locale === 'en'
    ? [
        { label: 'Fashion', href: `${base}/use-of-zippers/fashion/` },
        { label: 'Cycling & Sportswear', href: `${base}/use-of-zippers/cycling-sportswear/` },
        { label: 'Baby', href: `${base}/use-of-zippers/baby/` },
        { label: 'Military', href: `${base}/use-of-zippers/military/` },
        { label: 'Furniture', href: `${base}/use-of-zippers/furniture/` },
        { label: 'Fire-Resistant Clothing', href: `${base}/use-of-zippers/fire-protection/` },
        { label: 'Buckles & Plastic Hardware', href: `${base}/use-of-zippers/buckles-plastic-hardware/` },
      ]
    : [
        { label: 'Zamki dla mody', href: '/pl/zastosowanie-zamkow/moda/' },
        { label: 'Kolarstwo & odzież sportowa', href: '/pl/zastosowanie-zamkow/odziez-sportowa/' },
        { label: 'Odzież dziecięca', href: '/pl/zastosowanie-zamkow/dzieci/' },
        { label: 'Wojsko', href: '/pl/zastosowanie-zamkow/wojsko/' },
        { label: 'Meble', href: '/pl/zastosowanie-zamkow/meble/' },
        { label: 'Odzież ognioodporna', href: '/pl/zastosowanie-zamkow/odziez-ognioodporna/' },
        { label: 'Zapięcia & elementy plastikowe', href: '/pl/zapiecia-elementy-plastikowe/' },
      ];

  const typeLinks = locale === 'en'
    ? [
        { label: 'Nylon Zippers', href: `${base}/type-of-zippers/nylon-zippers/` },
        { label: 'Plastic Zippers', href: `${base}/type-of-zippers/plastic-zippers/` },
        { label: 'Metal Zippers', href: `${base}/type-of-zippers/metal-zippers/` },
        { label: 'Nylon Size Chart', href: `${base}/nylon-zipper-chain-size-chart/` },
      ]
    : [
        { label: 'Zamki nylonowe', href: '/pl/rodzaje-zamkow/zamki-nylonowe/' },
        { label: 'Zamki plastikowe', href: '/pl/rodzaje-zamkow/zamki-plastikowe/' },
        { label: 'Zamki metalowe', href: '/pl/rodzaje-zamkow/zamki-metalowe/' },
        { label: 'Tabela rozmiarów taśm', href: '/pl/tasmy-spiralne-zestawienie-rozmiarow/' },
      ];

  const companyLinks = locale === 'en'
    ? [
        { label: 'About Us', href: `${base}/about-us/` },
        { label: 'Contact', href: `${base}/contact/` },
        { label: 'Blog', href: `${base}/blog/` },
        { label: 'Personalization', href: `${base}/personalization/` },
        { label: 'Privacy Policy', href: `${base}/privacy-policy/` },
      ]
    : [
        { label: 'O nas', href: '/pl/o-nas/' },
        { label: 'Kontakt', href: '/pl/kontakt/' },
        { label: 'Blog', href: '/pl/blog/' },
        { label: 'Personalizacja', href: '/pl/personalizacja/' },
        { label: 'Polityka prywatności', href: '/pl/polityka-prywatnosci/' },
      ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href={locale === 'en' ? '/' : '/pl/'}>
              <Image
                src="https://trimsandfasteners.com/wp-content/uploads/2025/06/logo-taf-1.png"
                alt="TAF"
                width={100}
                height={40}
                className="h-10 w-auto brightness-0 invert mb-4"
              />
            </Link>
            <p className="text-sm leading-relaxed font-[Jost] text-gray-400">
              {locale === 'en'
                ? 'Professional supplier of high-quality zippers and fasteners. Authorized YKK distributor.'
                : 'Profesjonalny dostawca zamków błyskawicznych i akcesoriów. Autoryzowany dystrybutor YKK.'}
            </p>
          </div>

          {/* Use of zippers */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-[Jost]">
              {locale === 'en' ? 'Use of Zippers' : 'Zastosowanie zamków'}
            </h3>
            <ul className="space-y-2">
              {usageLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-[Jost]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Type of zippers */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-[Jost]">
              {locale === 'en' ? 'Type of Zippers' : 'Rodzaje zamków'}
            </h3>
            <ul className="space-y-2">
              {typeLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-[Jost]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-[Jost]">
              {locale === 'en' ? 'Company' : 'Firma'}
            </h3>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-[Jost]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-[Jost]">
            © {new Date().getFullYear()} TAF – Trims and Fasteners. {t('footer.rights')}.
          </p>
          <div className="flex gap-4 text-xs text-gray-500 font-[Jost]">
            <span>Warsaw, Poland</span>
            <span>·</span>
            <a href="mailto:info@trimsandfasteners.com" className="hover:text-white transition-colors">
              info@trimsandfasteners.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
