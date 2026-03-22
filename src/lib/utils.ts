import type { Locale } from './types';

export function localePath(locale: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return locale === 'en' ? cleanPath : `/pl${cleanPath}`;
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
}

export function formatDate(dateString: string, locale: Locale): string {
  return new Date(dateString).toLocaleDateString(locale === 'pl' ? 'pl-PL' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Category slug mapping EN <-> PL
export const CATEGORY_MAP: Record<string, { en: string; pl: string; enParent: string; plParent: string }> = {
  fashion: { en: 'fashion', pl: 'moda', enParent: 'use-of-zippers', plParent: 'zastosowanie-zamkow' },
  'cycling-sportswear': { en: 'cycling-sportswear', pl: 'odziez-sportowa', enParent: 'use-of-zippers', plParent: 'zastosowanie-zamkow' },
  baby: { en: 'baby', pl: 'dzieci', enParent: 'use-of-zippers', plParent: 'zastosowanie-zamkow' },
  military: { en: 'military', pl: 'wojsko', enParent: 'use-of-zippers', plParent: 'zastosowanie-zamkow' },
  furniture: { en: 'furniture', pl: 'meble', enParent: 'use-of-zippers', plParent: 'zastosowanie-zamkow' },
  'fire-protection': { en: 'fire-protection', pl: 'odziez-ognioodporna', enParent: 'use-of-zippers', plParent: 'zastosowanie-zamkow' },
  'buckles-plastic-hardware': { en: 'buckles-plastic-hardware', pl: 'zapiecia-elementy-plastikowe', enParent: 'use-of-zippers', plParent: '' },
  'nylon-zippers': { en: 'nylon-zippers', pl: 'zamki-nylonowe', enParent: 'type-of-zippers', plParent: 'rodzaje-zamkow' },
  'plastic-zippers': { en: 'plastic-zippers', pl: 'zamki-plastikowe', enParent: 'type-of-zippers', plParent: 'rodzaje-zamkow' },
  'metal-zippers': { en: 'metal-zippers', pl: 'zamki-metalowe', enParent: 'type-of-zippers', plParent: 'rodzaje-zamkow' },
};
