'use client';
import { usePathname } from 'next/navigation';

export default function SubpageCopyright({ locale }: { locale: string }) {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '/pl' || pathname === '/pl/';
  if (isHome) return null;

  const isEn = locale === 'en';
  return (
    <div className="bg-[#f5f3ef] py-5 text-center border-t border-gray-200">
      <p className="font-[Jost] text-xs text-gray-500 px-4">
        {isEn
          ? "© All rights reserved. Copying, processing, and distribution of materials without the author's consent is prohibited."
          : '© Wszelkie prawa zastrzeżone. Kopiowanie, przetwarzanie i dystrybucja materiałów bez zgody autora jest zabroniona.'}
      </p>
    </div>
  );
}
