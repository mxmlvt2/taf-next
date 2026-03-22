'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import type { Locale } from '@/lib/types';

interface HeroProps {
  slides: string[];
  title?: string;
  subtitle?: string;
  description?: string;
  ctaUrl?: string;
}

const DEFAULT_SLIDES = [
  'https://trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg',
  'https://trimsandfasteners.com/wp-content/uploads/2025/06/metalslider2-scaled.jpg',
];

export default function Hero({ slides = DEFAULT_SLIDES, title, subtitle, description, ctaUrl }: HeroProps) {
  const t = useTranslations('hero');
  const locale = useLocale() as Locale;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const contactUrl = locale === 'en' ? '/contact/' : '/pl/kontakt/';

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Slideshow */}
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center sm:text-left">
        <span className="block font-[Jost] text-white/80 text-base sm:text-lg font-normal mb-2 tracking-wide animate-fade-in">
          {title || t('brand')}
        </span>
        <h1 className="font-[Jost] text-3xl sm:text-5xl font-normal text-white leading-snug mb-4 animate-fade-in">
          {subtitle || t('tagline')}
        </h1>
        {description && (
          <p
            className="font-[Jost] text-white/80 text-base font-normal mb-8 max-w-xl"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
          <Link
            href={ctaUrl || contactUrl}
            className="inline-block bg-white text-black font-[Jost] font-medium text-sm px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t('cta')}
          </Link>
          <Link
            href={locale === 'en' ? '/use-of-zippers/' : '/pl/zastosowanie-zamkow/'}
            className="inline-block border border-white/60 text-white font-[Jost] font-medium text-sm px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            {t('ctaSub')}
          </Link>
        </div>
      </div>

      {/* Slide dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
