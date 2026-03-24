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
 * Extract FAQ items from Elementor custom HTML widget (faq-container pattern).
 * Returns parsed question/answer pairs so we can render a React accordion.
 */
export function extractFaqItems(html: string): { question: string; answer: string }[] {
  if (!html.includes('class="faq-container"')) return [];

  const items: { question: string; answer: string }[] = [];
  const parts = html.split('<div class="faq-item">');

  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    const qMatch = part.match(/class="faq-question"[^>]*>\s*([\s\S]*?)\s*<\/div>/);
    const aMatch = part.match(/class="faq-answer"[^>]*>\s*([\s\S]*?)\s*<\/div>/);
    if (qMatch && aMatch) {
      items.push({ question: qMatch[1].trim(), answer: aMatch[1].trim() });
    }
  }
  return items;
}

/**
 * Remove the FAQ custom HTML widget block from Elementor content.
 * Strips from the <style>.faq-container definition through the </script> toggle function.
 */
export function stripFaqBlock(html: string): string {
  const faqCssIdx = html.indexOf('.faq-container');
  if (faqCssIdx === -1) return html;

  const styleStart = html.lastIndexOf('<style>', faqCssIdx);
  const scriptEnd = html.indexOf('</script>', html.indexOf('toggleFAQ'));

  if (styleStart === -1 || scriptEnd === -1) return html;
  return html.slice(0, styleStart) + html.slice(scriptEnd + 9);
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

  // If there's only one e-con e-parent section, don't strip —
  // the entire page content would be removed (e.g. privacy-policy, simple pages)
  const secondIdx = html.indexOf(marker, firstIdx + marker.length);
  if (secondIdx === -1) return html;

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

/**
 * Strip nested div blocks from HTML by tracking div depth.
 * Used to remove plugin-injected blocks (TOC, related posts, etc.)
 */
function stripNestedDiv(html: string, startPattern: RegExp): string {
  const match = startPattern.exec(html);
  if (!match) return html;

  const startIdx = match.index;
  let pos = startIdx + match[0].length;
  let depth = 1;

  while (pos < html.length && depth > 0) {
    if (html[pos] === '<' && html[pos + 1] === 'd' && html[pos + 2] === 'i' && html[pos + 3] === 'v') {
      depth++;
      while (pos < html.length && html[pos] !== '>') pos++;
      pos++;
    } else if (html[pos] === '<' && html[pos + 1] === '/' && html[pos + 2] === 'd' && html[pos + 3] === 'i' && html[pos + 4] === 'v' && html[pos + 5] === '>') {
      depth--;
      if (depth === 0) return html.slice(0, startIdx) + html.slice(pos + 6);
      pos += 6;
    } else {
      pos++;
    }
  }
  return html;
}

/**
 * Clean WP blog post content by removing plugin-injected blocks:
 * - Table of Contents (EzTOC, Rank Math, LuckyWP, Gutenberg)
 * - Related/Other Posts (Jetpack, YARPP, and common Elementor widgets)
 */
export function cleanBlogContent(html: string): string {
  let result = html;
  // TOC plugins — div-based
  result = stripNestedDiv(result, /<div[^>]*id=["']?ez-toc-container["']?/i);
  result = stripNestedDiv(result, /<div[^>]*class=["'][^"']*\bez-toc\b[^"']*["']/i);
  result = stripNestedDiv(result, /<div[^>]*class=["'][^"']*wp-block-rank-math-toc-block[^"']*["']/i);
  result = stripNestedDiv(result, /<div[^>]*class=["'][^"']*luckywp-toc[^"']*["']/i);
  result = stripNestedDiv(result, /<div[^>]*class=["'][^"']*wp-block-table-of-contents[^"']*["']/i);
  result = stripNestedDiv(result, /<div[^>]*class=["'][^"']*\btoc\b[^"']*["']/i);
  // Related / other posts — by class or id
  result = stripNestedDiv(result, /<div[^>]*id=["']?jp-relatedposts["']?/i);
  result = stripNestedDiv(result, /<div[^>]*class=["'][^"']*jp-relatedposts[^"']*["']/i);
  result = stripNestedDiv(result, /<div[^>]*class=["'][^"']*yarpp-related[^"']*["']/i);
  result = stripNestedDiv(result, /<div[^>]*class=["'][^"']*related-posts[^"']*["']/i);
  result = stripNestedDiv(result, /<div[^>]*class=["'][^"']*elementor-widget-posts[^"']*["']/i);
  // Strip SVG spinner/progress circles (loading state from TOC plugins)
  result = result.replace(/<svg[\s\S]*?<\/svg>/gi, '');
  // Strip standalone "table of contents" links/text left by some plugins
  result = result.replace(/<[a-z][^>]*>\s*[Tt]able [Oo]f [Cc]ontents\s*<\/[a-z]+>/g, '');
  // Strip "table of contents" anchor links (case-insensitive)
  result = result.replace(/<a[^>]*>[^<]*(?:table\s+of\s+contents|spis\s+tre[sś]ci)[^<]*<\/a>/gi, '');
  // Strip Elementor TOC widget containers
  result = stripNestedDiv(result, /<div[^>]*class=["'][^"']*elementor-widget-table-of-contents[^"']*["']/i);
  result = stripNestedDiv(result, /<div[^>]*class=["'][^"']*elementor-toc[^"']*["']/i);
  // Strip "Other posts" / "Inne artykuły" heading elements left after posts widget is stripped
  result = result.replace(/<h[1-6][^>]*>[^<]*Other\s+posts[^<]*<\/h[1-6]>/gi, '');
  result = result.replace(/<h[1-6][^>]*>[^<]*Inne\s+artyku[^<]*<\/h[1-6]>/gi, '');
  result = result.replace(/<h[1-6][^>]*>[^<]*Inne\s+wpisy[^<]*<\/h[1-6]>/gi, '');
  // Strip the entire e-con section that contains "Other posts" (Elementor section wrapping heading+posts)
  // Find sections containing "Other posts" text and strip them
  const otherPostsMarkers = ['Other posts', 'Inne artykuły', 'Inne wpisy'];
  for (const marker of otherPostsMarkers) {
    const markerIdx = result.indexOf(marker);
    if (markerIdx === -1) continue;
    // Walk back to find the nearest e-con e-parent opening
    const sectionStart = result.lastIndexOf('e-con e-parent', markerIdx);
    if (sectionStart === -1) continue;
    const divStart = result.lastIndexOf('<div', sectionStart);
    if (divStart === -1) continue;
    // Use depth counting to find matching </div>
    let depth = 0;
    let i = divStart;
    while (i < result.length) {
      if (result[i] === '<' && result[i+1] === 'd' && result[i+2] === 'i' && result[i+3] === 'v') {
        depth++;
        while (i < result.length && result[i] !== '>') i++;
        i++;
      } else if (result[i] === '<' && result[i+1] === '/' && result[i+2] === 'd' && result[i+3] === 'i' && result[i+4] === 'v' && result[i+5] === '>') {
        depth--;
        if (depth === 0) { result = result.slice(0, divStart) + result.slice(i + 6); break; }
        i += 6;
      } else { i++; }
    }
  }
  // Strip TAF CTA block embedded in WP content (we render our own hardcoded CTA)
  const ctaMarkers = ['Need the perfect zippers', 'Potrzebujesz idealnych zamk'];
  for (const ctaMarker of ctaMarkers) {
    const markerIdx = result.indexOf(ctaMarker);
    if (markerIdx === -1) continue;
    const sectionStart = result.lastIndexOf('e-con e-parent', markerIdx);
    if (sectionStart === -1) continue;
    const divStart = result.lastIndexOf('<div', sectionStart);
    if (divStart === -1) continue;
    let depth = 0;
    let i = divStart;
    while (i < result.length) {
      if (result[i] === '<' && result[i+1] === 'd' && result[i+2] === 'i' && result[i+3] === 'v') {
        depth++;
        while (i < result.length && result[i] !== '>') i++;
        i++;
      } else if (result[i] === '<' && result[i+1] === '/' && result[i+2] === 'd' && result[i+3] === 'i' && result[i+4] === 'v' && result[i+5] === '>') {
        depth--;
        if (depth === 0) { result = result.slice(0, divStart) + result.slice(i + 6); break; }
        i += 6;
      } else { i++; }
    }
    break;
  }
  return result;
}

/**
 * Extract h2 headings from HTML, add id attributes to each, return modified HTML + heading list.
 * Generates URL-safe IDs from heading text (handles PL characters too).
 */
export function processHeadings(html: string): {
  html: string;
  headings: { id: string; text: string }[];
} {
  const headings: { id: string; text: string }[] = [];
  const seen = new Map<string, number>();

  // Match both h2 and h3 — Elementor may render section headings as either
  const processed = html.replace(/<(h[23])([^>]*)>([\s\S]*?)<\/\1>/gi, (_match, tag, attrs, inner) => {
    const text = inner.replace(/<[^>]*>/g, '').trim();
    if (!text) return _match;
    const base = text
      .toLowerCase()
      .replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e')
      .replace(/ł/g, 'l').replace(/ń/g, 'n').replace(/ó/g, 'o')
      .replace(/ś/g, 's').replace(/ź/g, 'z').replace(/ż/g, 'z')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 60);
    const count = seen.get(base) ?? 0;
    const id = count === 0 ? base : `${base}-${count}`;
    seen.set(base, count + 1);
    headings.push({ id, text });
    const newAttrs = /\bid=/.test(attrs)
      ? attrs.replace(/\bid="[^"]*"/, `id="${id}"`)
      : ` id="${id}"${attrs}`;
    return `<${tag}${newAttrs}>${inner}</${tag}>`;
  });

  return { html: processed, headings };
}

/**
 * Split cleaned blog HTML into [beforeFaq, faqAndAfter].
 * Looks for common FAQ section markers (Elementor accordion, custom faq-container, FAQ heading).
 * If no FAQ found, returns [html, ''].
 */
export function splitContentAtFaq(html: string): [string, string] {
  const markers = [
    'elementor-widget-accordion',
    'wp-block-faq',
    'faq-container',
    // Elementor section with FAQ heading — find <h2/h3 containing FAQ/Często
    //<h[23][^>]*>[^<]*(FAQ|Często zadawane|Frequently asked)/i — handled below
  ];

  for (const marker of markers) {
    const idx = html.indexOf(marker);
    if (idx === -1) continue;
    // Walk back to the nearest e-con e-parent section boundary so the FAQ heading
    // (which is a sibling widget in the same section) is also captured in faqAndAfter
    const sectionMarker = 'e-con e-parent';
    const sectionIdx = html.lastIndexOf(sectionMarker, idx);
    if (sectionIdx !== -1) {
      const divStart = html.lastIndexOf('<div', sectionIdx);
      if (divStart !== -1) {
        return [html.slice(0, divStart), html.slice(divStart)];
      }
    }
    // Fallback: find the immediate opening <div before the marker
    let start = idx;
    while (start > 0 && !(html[start] === '<' && html[start + 1] === 'd')) {
      start--;
    }
    return [html.slice(0, start), html.slice(start)];
  }

  // Fallback: look for a heading that contains FAQ text
  const faqHeadingMatch = html.match(/<h[2-4][^>]*>[^<]*(FAQ|Często zadawane|Frequently asked)/i);
  if (faqHeadingMatch && faqHeadingMatch.index !== undefined) {
    // Walk back to nearest e-con section from this heading
    const idx = faqHeadingMatch.index;
    const sectionIdx = html.lastIndexOf('e-con e-parent', idx);
    if (sectionIdx !== -1) {
      const divStart = html.lastIndexOf('<div', sectionIdx);
      if (divStart !== -1) return [html.slice(0, divStart), html.slice(divStart)];
    }
    return [html.slice(0, idx), html.slice(idx)];
  }

  return [html, ''];
}

/**
 * Strip language suffixes added to EN popup post titles in WP
 * e.g. "CFOR-39 DS5YG eng" → "CFOR-39 DS5YG"
 *      "VSOR-36 DA-3-eng"  → "VSOR-36 DA-3"
 */
export function cleanZipperName(name: string): string {
  return name.replace(/[\s-]+en(g)?$/i, '').trim();
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
