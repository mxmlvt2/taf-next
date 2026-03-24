'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import type { Locale } from '@/lib/types';

const STORAGE_KEY = 'taf_cookie_consent';
const GA_ID = 'G-1WQEEEEQ4B';

// Push gtag commands safely (gtag may not be loaded yet)
function gtagConsent(granted: boolean) {
  if (typeof window === 'undefined') return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const win = window as any;
  win.dataLayer = win.dataLayer || [];
  function gtag(...args: unknown[]) { win.dataLayer.push(args); }

  if (granted) {
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
  } else {
    gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }
}

export default function CookieBanner() {
  const locale = useLocale() as Locale;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setVisible(true);
    } else {
      // Re-apply stored consent on every page load so GA respects it
      gtagConsent(saved === 'accepted');
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    gtagConsent(true);
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    gtagConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  const isEn = locale === 'en';
  const privacyHref = isEn ? '/privacy-policy/' : '/pl/privacy-policy/';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#111111] text-white px-4 py-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="font-[Jost] text-sm text-white/80 leading-relaxed flex-1">
          {isEn
            ? 'We use cookies to improve your browsing experience and analyse site traffic. By clicking "Accept", you consent to our use of analytics and advertising cookies.'
            : 'Używamy plików cookie w celu poprawy komfortu przeglądania i analizy ruchu na stronie. Klikając „Akceptuj", wyrażasz zgodę na używanie plików cookie analitycznych i reklamowych.'}{' '}
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

// GA4 ID export so layout can use it
export { GA_ID };
