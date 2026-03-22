import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import type { Locale } from '@/lib/types';

export default function Footer() {
  const locale = useLocale() as Locale;

  const typeLinks = locale === 'en'
    ? [
        { label: 'Metal zippers', href: '/type-of-zippers/metal-zippers/' },
        { label: 'Plastic zippers', href: '/type-of-zippers/plastic-zippers/' },
        { label: 'Nylon zippers', href: '/type-of-zippers/nylon-zippers/' },
        { label: 'Nylon size chart', href: '/nylon-zipper-chain-size-chart/' },
      ]
    : [
        { label: 'Zamki metalowe', href: '/pl/rodzaje-zamkow/zamki-metalowe/' },
        { label: 'Zamki plastikowe', href: '/pl/rodzaje-zamkow/zamki-plastikowe/' },
        { label: 'Zamki nylonowe', href: '/pl/rodzaje-zamkow/zamki-nylonowe/' },
        { label: 'Tabela rozmiarów taśm', href: '/pl/tasmy-spiralne-zestawienie-rozmiarow/' },
      ];

  const usageLinks = locale === 'en'
    ? [
        { label: 'Fire-resistant clothing', href: '/use-of-zippers/fire-protection/' },
        { label: 'Military', href: '/use-of-zippers/military/' },
        { label: 'Cycling & Sportswear', href: '/use-of-zippers/cycling-sportswear/' },
        { label: 'Baby', href: '/use-of-zippers/baby/' },
        { label: 'Fashion', href: '/use-of-zippers/fashion/' },
        { label: 'Furniture', href: '/use-of-zippers/furniture/' },
        { label: 'Buckles & Plastic Hardware', href: '/use-of-zippers/buckles-plastic-hardware/' },
      ]
    : [
        { label: 'Odzież ognioodporna', href: '/pl/zastosowanie-zamkow/odziez-ognioodporna/' },
        { label: 'Wojsko', href: '/pl/zastosowanie-zamkow/wojsko/' },
        { label: 'Kolarstwo & odzież sportowa', href: '/pl/zastosowanie-zamkow/odziez-sportowa/' },
        { label: 'Odzież dziecięca', href: '/pl/zastosowanie-zamkow/dzieci/' },
        { label: 'Moda', href: '/pl/zastosowanie-zamkow/moda/' },
        { label: 'Meble', href: '/pl/zastosowanie-zamkow/meble/' },
        { label: 'Zapięcia & elementy plastikowe', href: '/pl/zapiecia-elementy-plastikowe/' },
      ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 font-[Jost] text-sm uppercase tracking-wider">
              {locale === 'en' ? 'Contact' : 'Kontakt'}
            </h3>
            <ul className="space-y-3 text-sm font-[Jost] text-gray-400">
              <li>
                <p className="text-gray-500 text-xs mb-1">{locale === 'en' ? 'Address' : 'Adres'}</p>
                <p>Warsaw, Poland</p>
              </li>
              <li>
                <p className="text-gray-500 text-xs mb-1">{locale === 'en' ? 'Phone' : 'Telefon'}</p>
                <a href="tel:+48000000000" className="hover:text-white transition-colors">
                  +48 000 000 000
                </a>
              </li>
              <li>
                <p className="text-gray-500 text-xs mb-1">{locale === 'en' ? 'Email' : 'E-mail'}</p>
                <a href="mailto:info@trimsandfasteners.com" className="hover:text-white transition-colors">
                  info@trimsandfasteners.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Type of Zippers */}
          <div>
            <h3 className="text-white font-semibold mb-5 font-[Jost] text-sm uppercase tracking-wider">
              {locale === 'en' ? 'Type of Zippers' : 'Rodzaje zamków'}
            </h3>
            <ul className="space-y-2.5">
              {typeLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-[Jost]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Use of Zippers */}
          <div>
            <h3 className="text-white font-semibold mb-5 font-[Jost] text-sm uppercase tracking-wider">
              {locale === 'en' ? 'Use of Zippers' : 'Zastosowanie zamków'}
            </h3>
            <ul className="space-y-2.5">
              {usageLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-[Jost]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: QR code + TAF logo */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-semibold mb-5 font-[Jost] text-sm uppercase tracking-wider">
              TAF
            </h3>
            {/* Logo */}
            <Link href={locale === 'en' ? '/' : '/pl/'} className="mb-6">
              <Image
                src="https://trimsandfasteners.com/wp-content/uploads/2025/08/Projekt-bez-nazwy-75.png"
                alt="TAF - Trims and Fasteners"
                width={100}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            {/* QR code placeholder - replace with actual QR code image when available */}
            <div className="bg-white rounded-lg p-2 w-24 h-24 flex items-center justify-center">
              <Image
                src="https://trimsandfasteners.com/wp-content/uploads/2025/08/Projekt-bez-nazwy-75.png"
                alt="TAF QR Code"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs text-gray-500 font-[Jost] mt-2">
              {locale === 'en' ? 'Scan to visit' : 'Zeskanuj, aby odwiedzić'}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-[Jost]">
            © {new Date().getFullYear()} TAF – Trims and Fasteners. {locale === 'en' ? 'All rights reserved.' : 'Wszelkie prawa zastrzeżone.'}
          </p>
          <div className="flex gap-4 text-xs text-gray-500 font-[Jost]">
            <Link
              href={locale === 'en' ? '/privacy-policy/' : '/pl/polityka-prywatnosci/'}
              className="hover:text-white transition-colors"
            >
              {locale === 'en' ? 'Privacy Policy' : 'Polityka prywatności'}
            </Link>
            <span>·</span>
            <Link
              href={locale === 'en' ? '/about-us/' : '/pl/o-nas/'}
              className="hover:text-white transition-colors"
            >
              {locale === 'en' ? 'About Us' : 'O nas'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
