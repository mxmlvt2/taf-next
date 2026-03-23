'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import type { Locale } from '@/lib/types';

const STORAGE_KEY = 'taf_cookie_consent';

export default function CookieBanner() {
  const locale = useLocale() as Locale;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  const isEn = locale === 'en';
  const privacyHref = isEn ? '/privacy-policy/' : '/pl/polityka-prywatnosci/';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#111111] text-white px-4 py-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="font-[Jost] text-sm text-white/80 leading-relaxed flex-1">
          {isEn
            ? 'We use cookies to improve your browsing experience and analyse site traffic. By clicking "Accept", you consent to our use of cookies.'
            : 'Używamy plików cookie w celu poprawy komfortu przeglądania i analizy ruchu na stronie. Klikając „Akceptuj", wyrażasz zgodę na ich użycie.'}{' '}
          <Link href={privacyHref} className="underline text-white/60 hover:text-white transition-colors">
            {isEn ? 'Privacy Policy' : 'Polityka prywatności'}
          </Link>
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="font-[Jost] text-sm text-white/50 hover:text-white transition-colors underline"
          >
            {isEn ? 'Decline' : 'Odrzuć'}
          </button>
          <button
            onClick={accept}
            className="font-[Jost] text-sm bg-white text-black px-6 py-2 hover:bg-gray-100 transition-colors"
          >
            {isEn ? 'Accept' : 'Akceptuj'}
          </button>
        </div>
      </div>
    </div>
  );
}
