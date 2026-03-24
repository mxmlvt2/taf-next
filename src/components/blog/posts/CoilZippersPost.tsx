import Image from 'next/image';
import { ImageToggle, SideBySideImages, type ToggleItem, type SideBySideItem } from '../BlogWidgets';

interface Props { locale: string }

const TOGGLE_EN: ToggleItem[] = [
  {
    label: 'Standard zipper',
    src: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers8-1024x1024.jpg',
    description: 'In a standard coil zipper, the teeth are visible on the tape. This is a classic, functional solution that often requires a fabric flap for covering or is intentionally exposed as a design element.',
  },
  {
    label: 'Concealed zipper',
    src: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers11-1024x1024.jpg',
    description: 'In a concealed zipper, the teeth are completely hidden behind the tape, making it look like a regular seam when sewn. It\'s ideal when aesthetics require an invisible closure.',
  },
];

const TOGGLE_PL: ToggleItem[] = [
  {
    label: 'Zamek standardowy',
    src: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers8-1024x1024.jpg',
    description: 'W standardowym zamku spiralnym zęby są widoczne na taśmie. To klasyczne, funkcjonalne rozwiązanie, które często wymaga zakrycia materiałem lub jest celowo eksponowane jako element designu.',
  },
  {
    label: 'Zamek kryty',
    src: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers11-1024x1024.jpg',
    description: 'W zamku krytym zęby są całkowicie ukryte za taśmą, dzięki czemu po wszywaniu wygląda jak zwykły szew. Idealny, gdy estetyka wymaga niewidocznego zamknięcia.',
  },
];

const COMPARISON_EN: SideBySideItem[] = [
  {
    label: 'Standard Sewn Coil',
    src: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers8-1024x1024.jpg',
    description: 'The teeth are sewn onto the tape with polyester thread. The threads can degrade from UV exposure, and the teeth may separate from the tape—a potential weak point.',
  },
  {
    label: 'Woven S-Type Tape Zipper',
    src: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/porownanie-spirali-S80-WOVENIN-I-standardowej-80S-sewon-type-1024x718.jpeg',
    description: 'In this advanced construction, the tooth elements are integrally woven into the tape\'s structure. This eliminates the weak point of thread degradation and radically increases durability.',
  },
];

const COMPARISON_PL: SideBySideItem[] = [
  {
    label: 'Standardowa spirala szyta',
    src: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers8-1024x1024.jpg',
    description: 'Zęby są zszyte na taśmie nicią poliestrową. Nici mogą degradować się pod wpływem UV, a zęby mogą oddzielać się od taśmy — potencjalne słabe ogniwo.',
  },
  {
    label: 'Zamek z taśmą S-Type wplataną',
    src: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/porownanie-spirali-S80-WOVENIN-I-standardowej-80S-sewon-type-1024x718.jpeg',
    description: 'W tej zaawansowanej konstrukcji elementy zębów są integralnie wplecione w strukturę taśmy. Eliminuje to słaby punkt degradacji nici i radykalnie zwiększa trwałość.',
  },
];

export default function CoilZippersPost({ locale }: Props) {
  const isEn = locale === 'en';
  const toggle = isEn ? TOGGLE_EN : TOGGLE_PL;
  const comparison = isEn ? COMPARISON_EN : COMPARISON_PL;

  return (
    <div className="prose prose-gray max-w-none font-[Jost] prose-headings:font-[Jost] prose-headings:font-normal">
      <p>{isEn
        ? 'Coil zippers, widely used for their flexibility and versatility, have specific features and subtypes that affect their application.'
        : 'Zamki spiralne, powszechnie stosowane ze względu na elastyczność i wszechstronność, mają specyficzne cechy i podtypy wpływające na ich zastosowanie.'
      }</p>

      <h2 id="general">{isEn ? 'General characteristics of coil zippers' : 'Ogólna charakterystyka zamków spiralnych'}</h2>
      <p>{isEn
        ? 'Coil zippers, often called nylon zippers, are made with a continuous spiral of nylon or polyester filament that is sewn onto the zipper tape. This construction makes them very flexible and lightweight.'
        : 'Zamki spiralne, często nazywane nylonowymi, są wykonane z ciągłej spirali z nylonu lub poliestru wszytej na taśmę. Ta konstrukcja sprawia, że są bardzo elastyczne i lekkie.'
      }</p>
      <p><strong>{isEn ? 'Key features:' : 'Kluczowe cechy:'}</strong></p>
      <ul>
        <li><strong>{isEn ? 'Flexibility:' : 'Elastyczność:'}</strong> {isEn ? 'An excellent choice for projects with curves, such as knit jackets.' : 'Doskonały wybór do projektów z krzywymi, np. dzianinowych kurtek.'}</li>
        <li><strong>{isEn ? 'Lightweight:' : 'Lekkość:'}</strong> {isEn ? 'Soft and comfortable to wear.' : 'Miękkie i komfortowe w noszeniu.'}</li>
        <li><strong>{isEn ? 'Versatility:' : 'Wszechstronność:'}</strong> {isEn ? 'Widely used in clothing, luggage, furniture, sports equipment, and automotive applications.' : 'Powszechnie stosowane w odzieży, bagażach, meblach, sprzęcie sportowym i motoryzacji.'}</li>
      </ul>

      <h2 id="concealed">{isEn ? 'Concealed zipper' : 'Zamek kryty'}</h2>
      <p>{isEn
        ? 'In concealed zippers, the teeth are completely hidden behind the tape, making the zipper practically invisible once sewn in, except for the small pull tab. The zipper tape is often made of lighter fabric. Their main purpose is to provide a "polished" and uninterrupted look.'
        : 'W zamkach krytych zęby są całkowicie ukryte za taśmą, dzięki czemu zamek po wszywaniu jest praktycznie niewidoczny. Taśma jest często z lżejszego materiału. Ich głównym celem jest zapewnienie "dopracowanego" i nieprzerwanego wyglądu.'
      }</p>
      <p><strong>{isEn ? 'Typical applications for concealed zippers:' : 'Typowe zastosowania zamków krytych:'}</strong></p>
      <ul>
        <li>{isEn ? 'Elegant outfits, evening gowns.' : 'Elegancka odzież, suknie wieczorowe.'}</li>
        <li>{isEn ? 'Skirts, dresses (side seams).' : 'Spódnice, sukienki (boczne szwy).'}</li>
        <li>{isEn ? 'Furniture pillows and duvet covers.' : 'Poduszki meblowe i poszewki na kołdry.'}</li>
      </ul>

      <h2 id="see-difference">{isEn ? 'See the difference' : 'Zobacz różnicę'}</h2>
      <ImageToggle items={toggle} />

      <h2 id="woven-vs-standard">{isEn ? 'Woven-in S-Tape Zippers vs. Standard Sewn Coil' : 'Zamki z taśmą S-Type wplataną vs. standardowa spirala szyta'}</h2>
      <p>{isEn
        ? 'The evolution of coil zippers reflects the industry\'s continuous pursuit of increased durability and reliability. Key differences in construction have a huge impact on performance characteristics.'
        : 'Ewolucja zamków spiralnych odzwierciedla ciągłe dążenie branży do zwiększenia trwałości i niezawodności. Kluczowe różnice w konstrukcji mają ogromny wpływ na charakterystykę działania.'
      }</p>

      <SideBySideImages items={comparison} />

      <h2 id="advantage">{isEn ? 'The Advantage and Applications of Woven Construction' : 'Zalety i zastosowania konstrukcji wplatanej'}</h2>
      <ul>
        <li><strong>{isEn ? 'Increased Durability:' : 'Zwiększona trwałość:'}</strong> {isEn ? 'Significantly enhanced resistance to stretching, abrasion, and frequent use.' : 'Znacznie zwiększona odporność na rozciąganie, ścieranie i częste użytkowanie.'}</li>
        <li><strong>{isEn ? 'Longer Lifespan:' : 'Dłuższa żywotność:'}</strong> {isEn ? 'Provides greater reliability, especially in demanding applications.' : 'Zapewnia większą niezawodność, szczególnie w wymagających zastosowaniach.'}</li>
        <li><strong>{isEn ? 'Dimensional Stability:' : 'Stabilność wymiarowa:'}</strong> {isEn ? 'Crucial for applications that require precision and shape retention under stress.' : 'Kluczowa dla zastosowań wymagających precyzji i utrzymania kształtu pod obciążeniem.'}</li>
      </ul>
      <p>{isEn
        ? 'Zippers with S-type (woven) tape are ideal for products subject to heavy loads and very frequent opening/closing: high-quality bags, tactical backpacks, outdoor gear, and workwear where reliability is a priority.'
        : 'Zamki z taśmą S-type (wplataną) są idealne do produktów narażonych na duże obciążenia i bardzo częste otwieranie/zamykanie: wysokiej jakości torby, taktyczne plecaki, sprzęt outdoorowy i odzież robocza, gdzie niezawodność jest priorytetem.'
      }</p>

      <div className="not-prose my-8">
        <div className="relative w-full max-w-2xl aspect-[718/500] overflow-hidden bg-gray-100">
          <Image
            src="https://trimsandfasteners.com/wp-content/uploads/2025/06/porownanie-spirali-S80-WOVENIN-I-standardowej-80S-sewon-type-1024x718.jpeg"
            alt={isEn ? 'Woven S-Type vs Standard sewn coil comparison' : 'Porównanie spirali S-Type wplatanej i standardowej szytej'}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
      </div>
    </div>
  );
}
