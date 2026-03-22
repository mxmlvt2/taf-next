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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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

      {/* Dark overlay — strong near-black matching WP */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content — left-aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <span className="block font-[Jost] text-white/70 text-sm sm:text-base font-light mb-4 tracking-widest uppercase animate-fade-in">
            {title || t('brand')}
          </span>
          <h1 className="font-[Jost] text-4xl sm:text-6xl font-light text-white leading-tight mb-5 animate-fade-in">
            {subtitle || t('tagline')}
          </h1>
          {description && (
            <p
              className="font-[Jost] text-white/70 text-base font-light mb-8 max-w-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={ctaUrl || contactUrl}
              className="inline-block bg-white text-black font-[Jost] font-medium text-sm px-7 py-3 hover:bg-gray-100 transition-colors"
            >
              {t('cta')}
            </Link>
            <Link
              href={locale === 'en' ? '/use-of-zippers/' : '/pl/zastosowanie-zamkow/'}
              className="inline-block border border-white/50 text-white font-[Jost] font-medium text-sm px-7 py-3 hover:bg-white/10 transition-colors"
            >
              {t('ctaSub')}
            </Link>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${i === current ? 'bg-white w-8' : 'bg-white/40 w-4'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
