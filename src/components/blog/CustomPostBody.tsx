import ComparisonPost from './posts/ComparisonPost';
import CoilZippersPost from './posts/CoilZippersPost';
import WhereToBuyPost from './posts/WhereToBuyPost';
import BagsPost from './posts/BagsPost';

export interface Heading { id: string; text: string }

// Pre-defined TOC headings for each custom post (EN and PL slugs)
const HEADINGS: Record<string, Record<string, Heading[]>> = {
  'zippers-comparison-metal-plastic-and-nylon': {
    en: [
      { id: 'characteristics', text: 'Characteristics, Advantages, and Applications' },
      { id: 'comparison', text: 'Zipper Material Comparison' },
      { id: 'disadvantages', text: 'The Most Common Disadvantages' },
    ],
    pl: [
      { id: 'characteristics', text: 'Charakterystyka, zalety i zastosowania' },
      { id: 'comparison', text: 'Porównanie materiałów zamków' },
      { id: 'disadvantages', text: 'Najpopularniejsze wady' },
    ],
  },
  'porownanie-zamkow-blyskawicznych-metalowe-plastikowe-i-nylonowe': {
    pl: [
      { id: 'characteristics', text: 'Charakterystyka, zalety i zastosowania' },
      { id: 'comparison', text: 'Porównanie materiałów zamków' },
      { id: 'disadvantages', text: 'Najpopularniejsze wady' },
    ],
    en: [
      { id: 'characteristics', text: 'Characteristics, Advantages, and Applications' },
      { id: 'comparison', text: 'Zipper Material Comparison' },
      { id: 'disadvantages', text: 'The Most Common Disadvantages' },
    ],
  },
  'coil-zippers-characteristics-and-subtypes': {
    en: [
      { id: 'general', text: 'General characteristics of coil zippers' },
      { id: 'concealed', text: 'Concealed zipper' },
      { id: 'see-difference', text: 'See the difference' },
      { id: 'woven-vs-standard', text: 'Woven-in S-Tape Zippers vs. Standard Sewn Coil' },
      { id: 'advantage', text: 'The Advantage and Applications of Woven Construction' },
    ],
    pl: [
      { id: 'general', text: 'Ogólna charakterystyka zamków spiralnych' },
      { id: 'concealed', text: 'Zamki kryte' },
      { id: 'see-difference', text: 'Zobacz różnicę' },
      { id: 'woven-vs-standard', text: 'Zamki na taśmie S tkanej (Woven-in S-Tape) vs. standardowa spirala szyta' },
      { id: 'advantage', text: 'Przewaga i zastosowania tkanej konstrukcji' },
    ],
  },
  'zamki-spiralne-charakterystyka-i-podtypy': {
    pl: [
      { id: 'general', text: 'Ogólna charakterystyka zamków spiralnych' },
      { id: 'concealed', text: 'Zamki kryte' },
      { id: 'see-difference', text: 'Zobacz różnicę' },
      { id: 'woven-vs-standard', text: 'Zamki na taśmie S tkanej (Woven-in S-Tape) vs. standardowa spirala szyta' },
      { id: 'advantage', text: 'Przewaga i zastosowania tkanej konstrukcji' },
    ],
    en: [
      { id: 'general', text: 'General characteristics of coil zippers' },
      { id: 'concealed', text: 'Concealed zipper' },
      { id: 'see-difference', text: 'See the difference' },
      { id: 'woven-vs-standard', text: 'Woven-in S-Tape Zippers vs. Standard Sewn Coil' },
      { id: 'advantage', text: 'The Advantage and Applications of Woven Construction' },
    ],
  },
  'where-to-buy-zippers-wholesale': {
    en: [
      { id: 'key-aspects', text: 'Key Aspects of Wholesale Purchasing with Trims and Fasteners' },
      { id: 'why-taf', text: 'Why Is Trims and Fasteners Your Ideal Wholesale Partner?' },
      { id: 'process', text: 'Simplified Wholesale Ordering Process' },
    ],
    pl: [
      { id: 'key-aspects', text: 'Kluczowe aspekty zakupu hurtowego' },
      { id: 'why-taf', text: 'Dlaczego Trims and Fasteners to Twój idealny partner?' },
      { id: 'process', text: 'Uproszczony proces zamawiania hurtowego' },
    ],
  },
  'gdzie-kupic-zamki-blyskawiczne-hurtem': {
    pl: [
      { id: 'key-aspects', text: 'Kluczowe aspekty zakupu hurtowego z Trims and Fasteners' },
      { id: 'why-taf', text: 'Dlaczego TAF to Twój idealny partner hurtowy?' },
      { id: 'process', text: 'Uproszczony proces zamawiania hurtowego z Trims and Fasteners' },
    ],
    en: [
      { id: 'key-aspects', text: 'Key Aspects of Wholesale Purchasing' },
      { id: 'why-taf', text: 'Why Is Trims and Fasteners Your Ideal Wholesale Partner?' },
      { id: 'process', text: 'Simplified Wholesale Ordering Process' },
    ],
  },
  'zippers-for-bags-and-backpacks': {
    en: [
      { id: 'choosing', text: 'Choosing Zippers for Bags and Backpacks' },
      { id: 's-type', text: 'The Advantage of S-Type Tapes over a Standard Coil' },
      { id: 'advantages', text: 'Advantages of S-Type (Woven-in) Zippers' },
      { id: 'summary', text: 'Summary' },
    ],
    pl: [
      { id: 'choosing', text: 'Dobór zamków do toreb i plecaków' },
      { id: 's-type', text: 'Zalety taśm S-Type nad standardową spiralą' },
      { id: 'advantages', text: 'Zalety zamków S-Type (wplatanych)' },
      { id: 'summary', text: 'Podsumowanie' },
    ],
  },
  'zamki-blyskawiczne-do-toreb-i-plecakow': {
    pl: [
      { id: 'choosing', text: 'Wybór zamków do toreb i plecaków' },
      { id: 's-type', text: 'Przewaga taśm typu S nad zwykłą spiralą' },
      { id: 'advantages', text: 'Zalety taśmy S (Woven-in) dla toreb i plecaków' },
      { id: 'summary', text: 'Podsumowanie' },
    ],
    en: [
      { id: 'choosing', text: 'Choosing Zippers for Bags and Backpacks' },
      { id: 's-type', text: 'The Advantage of S-Type Tapes over a Standard Coil' },
      { id: 'advantages', text: 'Advantages of S-Type (Woven-in) Zippers' },
      { id: 'summary', text: 'Summary' },
    ],
  },
};

export function getCustomHeadings(slug: string, locale: string): Heading[] | null {
  const entry = HEADINGS[slug];
  if (!entry) return null;
  return entry[locale] ?? entry['en'] ?? null;
}

interface Props { slug: string; locale: string }

export default function CustomPostBody({ slug, locale }: Props) {
  // Map both EN and PL slugs to the correct component
  if (slug === 'zippers-comparison-metal-plastic-and-nylon' ||
      slug === 'porownanie-zamkow-blyskawicznych-metalowe-plastikowe-i-nylonowe') {
    return <ComparisonPost locale={locale} />;
  }
  if (slug === 'coil-zippers-characteristics-and-subtypes' ||
      slug === 'zamki-spiralne-charakterystyka-i-podtypy') {
    return <CoilZippersPost locale={locale} />;
  }
  if (slug === 'where-to-buy-zippers-wholesale' ||
      slug === 'gdzie-kupic-zamki-blyskawiczne-hurtem') {
    return <WhereToBuyPost locale={locale} />;
  }
  if (slug === 'zippers-for-bags-and-backpacks' ||
      slug === 'zamki-blyskawiczne-do-toreb-i-plecakow') {
    return <BagsPost locale={locale} />;
  }
  return null;
}
