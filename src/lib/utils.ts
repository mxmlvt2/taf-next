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

/**
 * Strip the first Elementor hero section from page content.
 * Elementor pages start with a full-width hero container (e-con e-parent)
 * that duplicates our custom hero. We remove it and only keep the body content.
 */
export function stripElementorHero(html: string): string {
  const marker = 'e-con e-parent';
  const firstIdx = html.indexOf(marker);
  if (firstIdx === -1) return html;

  // Walk back to the opening <div
  let start = firstIdx;
  while (start > 0 && !(html[start] === '<' && html[start + 1] === 'd')) {
    start--;
  }

  // Count div depth to find matching </div>
  let depth = 0;
  let i = start;
  while (i < html.length) {
    if (html[i] === '<' && html[i + 1] === 'd' && html[i + 2] === 'i' && html[i + 3] === 'v') {
      depth++;
      // skip to end of opening tag
      while (i < html.length && html[i] !== '>') i++;
      i++;
    } else if (html[i] === '<' && html[i + 1] === '/' && html[i + 2] === 'd' && html[i + 3] === 'i' && html[i + 4] === 'v' && html[i + 5] === '>') {
      depth--;
      if (depth === 0) {
        return html.slice(0, start) + html.slice(i + 6);
      }
      i += 6;
    } else {
      i++;
    }
  }

  return html;
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
