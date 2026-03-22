'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, X, ChevronDown } from 'lucide-react';
import type { MenuItem } from '@/lib/types';
import type { Locale } from '@/lib/types';

interface HeaderProps {
  menu: MenuItem[];
  translations: Record<string, string>; // { en: '/...', pl: '/pl/...' }
}

export default function Header({ menu, translations }: HeaderProps) {
  const locale = useLocale() as Locale;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const otherLocale = locale === 'en' ? 'pl' : 'en';
  const otherUrl = translations[otherLocale] || (otherLocale === 'pl' ? '/pl/' : '/');

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={locale === 'en' ? '/' : '/pl/'} className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="https://trimsandfasteners.com/wp-content/uploads/2025/06/logo-taf-1.png"
              alt="TAF - Trims and Fasteners"
              width={120}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {menu.map(item => (
              <div key={item.id} className="relative">
                {item.children && item.children.length > 0 ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-black rounded-md hover:bg-gray-50 transition-colors font-[Jost]"
                      onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                    >
                      {item.title}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${openDropdown === item.id ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openDropdown === item.id && (
                      <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-56 z-50">
                        {item.children.map(child => (
                          <Link
                            key={child.id}
                            href={child.url}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 font-[Jost]"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.url}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-black rounded-md hover:bg-gray-50 transition-colors font-[Jost]"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right: lang switcher + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href={otherUrl}
              className="text-sm font-medium text-gray-500 hover:text-black border border-gray-200 rounded px-2 py-1 font-[Jost] transition-colors"
            >
              {otherLocale.toUpperCase()}
            </Link>
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
          {menu.map(item => (
            <div key={item.id} className="mb-1">
              <Link
                href={item.url}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-black font-[Jost]"
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
              {item.children?.map(child => (
                <Link
                  key={child.id}
                  href={child.url}
                  className="block px-6 py-1.5 text-sm text-gray-500 hover:text-black font-[Jost]"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
