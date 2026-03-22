'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Menu, X, ChevronDown, Search, Phone } from 'lucide-react';
import type { MenuItem } from '@/lib/types';
import type { Locale } from '@/lib/types';

interface HeaderProps {
  menu: MenuItem[];
  translations: Record<string, string>;
}

// Use-of-zippers mega menu categories with hover images
const USE_CATS_EN = [
  {
    label: 'Zippers for fire-resistant clothing',
    href: '/use-of-zippers/fire-protection/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/ogien-kategoria.jpg',
  },
  {
    label: 'Zippers for Military',
    href: '/use-of-zippers/military/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/wojsko-kategoria.jpg',
  },
  {
    label: 'Zippers for cycling & sportswear',
    href: '/use-of-zippers/cycling-sportswear/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/sport-kategoria.jpg',
  },
  {
    label: 'Zippers for babies',
    href: '/use-of-zippers/baby/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/dzieci-kategoria.jpg',
  },
  {
    label: 'Zippers for fashion',
    href: '/use-of-zippers/fashion/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/moda-kategoria.jpg',
  },
  {
    label: 'Zippers for furniture',
    href: '/use-of-zippers/furniture/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/meble-kategoria.jpg',
  },
  {
    label: 'Buckles & plastic hardware',
    href: '/use-of-zippers/buckles-plastic-hardware/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/wojsko-kategoria.jpg',
  },
];

const USE_CATS_PL = [
  {
    label: 'Zamki do odzieży ognioodpornej',
    href: '/pl/zastosowanie-zamkow/odziez-ognioodporna/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/ogien-kategoria.jpg',
  },
  {
    label: 'Zamki dla wojska',
    href: '/pl/zastosowanie-zamkow/wojsko/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/wojsko-kategoria.jpg',
  },
  {
    label: 'Zamki dla kolarstwa i sportu',
    href: '/pl/zastosowanie-zamkow/odziez-sportowa/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/sport-kategoria.jpg',
  },
  {
    label: 'Zamki do odzieży dziecięcej',
    href: '/pl/zastosowanie-zamkow/dzieci/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/dzieci-kategoria.jpg',
  },
  {
    label: 'Zamki dla mody',
    href: '/pl/zastosowanie-zamkow/moda/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/moda-kategoria.jpg',
  },
  {
    label: 'Zamki do mebli',
    href: '/pl/zastosowanie-zamkow/meble/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/meble-kategoria.jpg',
  },
  {
    label: 'Zapięcia i elementy plastikowe',
    href: '/pl/zapiecia-elementy-plastikowe/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/wojsko-kategoria.jpg',
  },
];

export default function Header({ menu, translations }: HeaderProps) {
  const locale = useLocale() as Locale;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredUseCat, setHoveredUseCat] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  const useCats = locale === 'en' ? USE_CATS_EN : USE_CATS_PL;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const otherLocale = locale === 'en' ? 'pl' : 'en';
  const otherUrl = translations[otherLocale] || (otherLocale === 'pl' ? '/pl/' : '/');

  // Type of Zippers items (simple list)
  const typeItems = locale === 'en'
    ? [
        { label: 'Plastic zippers', href: '/type-of-zippers/plastic-zippers/' },
        { label: 'Nylon zippers', href: '/type-of-zippers/nylon-zippers/', sub: { label: 'Nylon zipper chain size chart', href: '/nylon-zipper-chain-size-chart/' } },
        { label: 'Metal zippers', href: '/type-of-zippers/metal-zippers/' },
        { label: 'Personalization', href: '/personalization/' },
      ]
    : [
        { label: 'Zamki plastikowe', href: '/pl/rodzaje-zamkow/zamki-plastikowe/' },
        { label: 'Zamki nylonowe', href: '/pl/rodzaje-zamkow/zamki-nylonowe/', sub: { label: 'Tabela rozmiarów taśm nylonowych', href: '/pl/tasmy-spiralne-zestawienie-rozmiarow/' } },
        { label: 'Zamki metalowe', href: '/pl/rodzaje-zamkow/zamki-metalowe/' },
        { label: 'Personalizacja', href: '/pl/personalizacja/' },
      ];

  // Simple nav items (non-dropdown)
  const simpleItems = locale === 'en'
    ? [
        { label: 'About Us', href: '/about-us/' },
        { label: 'Contact', href: '/contact/' },
      ]
    : [
        { label: 'O nas', href: '/pl/o-nas/' },
        { label: 'Kontakt', href: '/pl/kontakt/' },
      ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" ref={headerRef}>
      {/* Top bar: phones + email */}
      <div className="hidden lg:block border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs font-[Jost] text-gray-500">
            <div className="flex items-center gap-5">
              <a href="tel:+48221101101" className="flex items-center gap-1.5 hover:text-black transition-colors">
                <Phone size={11} />
                +48 22 1101 01
              </a>
              <a href="tel:+48723331331" className="flex items-center gap-1.5 hover:text-black transition-colors">
                <Phone size={11} />
                +48 723 331 331
              </a>
            </div>
            <a href="mailto:contact@trimsandfasteners.com" className="hover:text-black transition-colors">
              contact@trimsandfasteners.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={locale === 'en' ? '/' : '/pl/'} className="flex items-center flex-shrink-0">
            <Image
              src="https://trimsandfasteners.com/wp-content/uploads/2025/08/Projekt-bez-nazwy-75.png"
              alt="TAF - Trims and Fasteners"
              width={100}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Start */}
            <Link
              href={locale === 'en' ? '/' : '/pl/'}
              className="px-3 py-2 text-sm font-normal text-gray-700 hover:text-black transition-colors font-[Jost]"
            >
              {locale === 'en' ? 'Start' : 'Start'}
            </Link>

            {/* Type of Zippers */}
            <div className="relative">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-normal text-gray-700 hover:text-black transition-colors font-[Jost]"
                onClick={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}
                onMouseEnter={() => setOpenDropdown('type')}
              >
                {locale === 'en' ? 'Type of zippers' : 'Rodzaje zamków'}
                <ChevronDown size={13} className={`transition-transform ${openDropdown === 'type' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'type' && (
                <div
                  className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-100 py-2 min-w-56 z-50"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {typeItems.map(item => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-5 py-2.5 text-sm text-gray-700 hover:text-black hover:bg-gray-50 font-[Jost] transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label}
                      </Link>
                      {item.sub && (
                        <Link
                          href={item.sub.href}
                          className="block pl-9 pr-5 py-2 text-xs text-gray-500 hover:text-black hover:bg-gray-50 font-[Jost] transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.sub.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Use of Zippers — mega menu with hover image */}
            <div className="relative">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-normal text-gray-700 hover:text-black transition-colors font-[Jost]"
                onClick={() => setOpenDropdown(openDropdown === 'use' ? null : 'use')}
                onMouseEnter={() => setOpenDropdown('use')}
              >
                {locale === 'en' ? 'Use of zippers' : 'Zastosowanie zamków'}
                <ChevronDown size={13} className={`transition-transform ${openDropdown === 'use' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'use' && (
                <div
                  className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-100 z-50 flex"
                  style={{ minWidth: '560px' }}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {/* Left: category list */}
                  <div className="py-3 flex-1">
                    {useCats.map((cat, i) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        className={`block px-5 py-2.5 text-sm font-[Jost] transition-colors ${
                          hoveredUseCat === i
                            ? 'text-black bg-gray-50'
                            : 'text-gray-700 hover:text-black hover:bg-gray-50'
                        }`}
                        onMouseEnter={() => setHoveredUseCat(i)}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>

                  {/* Right: hover image */}
                  <div className="w-48 flex-shrink-0 relative overflow-hidden bg-gray-100">
                    <Image
                      src={useCats[hoveredUseCat]?.img || useCats[0].img}
                      alt={useCats[hoveredUseCat]?.label || ''}
                      fill
                      className="object-cover transition-all duration-300"
                      sizes="192px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-xs font-[Jost] leading-tight">
                        {useCats[hoveredUseCat]?.label}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Simple items */}
            {simpleItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-normal text-gray-700 hover:text-black transition-colors font-[Jost]"
              >
                {item.label}
              </Link>
            ))}

            {/* Search */}
            <button
              className="px-3 py-2 text-sm font-normal text-gray-700 hover:text-black transition-colors font-[Jost] flex items-center gap-1"
              aria-label="Search"
            >
              {locale === 'en' ? 'Search...' : 'Szukaj...'}
            </button>
          </nav>

          {/* Right: search icon + lang flags + mobile toggle */}
          <div className="flex items-center gap-2">
            {/* Search icon button */}
            <button
              className="hidden lg:flex items-center justify-center w-8 h-8 bg-black text-white hover:bg-gray-800 transition-colors"
              aria-label="Search"
            >
              <Search size={14} />
            </button>

            {/* Language switcher with flag-style buttons */}
            <div className="hidden lg:flex items-center gap-0">
              <a
                href={locale === 'en' ? '#' : '/'}
                className={`text-xs font-[Jost] font-medium px-2 py-1 transition-colors ${locale === 'en' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
              >
                EN
              </a>
              <span className="text-gray-300 text-xs">|</span>
              <a
                href={locale === 'pl' ? '#' : '/pl/'}
                className={`text-xs font-[Jost] font-medium px-2 py-1 transition-colors ${locale === 'pl' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
              >
                PL
              </a>
            </div>

            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4">
          {/* Type of Zippers mobile */}
          <div className="mb-2">
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider font-[Jost]">
              {locale === 'en' ? 'Type of Zippers' : 'Rodzaje zamków'}
            </p>
            {typeItems.map(item => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-black font-[Jost]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <Link
                    href={item.sub.href}
                    className="block pl-6 py-1.5 text-xs text-gray-500 hover:text-black font-[Jost]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.sub.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Use of Zippers mobile */}
          <div className="mb-2">
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider font-[Jost]">
              {locale === 'en' ? 'Use of Zippers' : 'Zastosowanie zamków'}
            </p>
            {useCats.map(cat => (
              <Link
                key={cat.href}
                href={cat.href}
                className="block px-3 py-2 text-sm text-gray-700 hover:text-black font-[Jost]"
                onClick={() => setMobileOpen(false)}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Simple items mobile */}
          {simpleItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-black font-[Jost]"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
