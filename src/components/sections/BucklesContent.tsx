import Image from 'next/image';
import FaqAccordion from './FaqAccordion';

const WP = 'https://trimsandfasteners.com/wp-content/uploads/';

interface Props { locale: string; position: 'above' | 'below'; }

type BuckleItem = {
  heading: string;
  headingPl: string;
  text: string;
  textPl: string;
  images: string[];
  bg: string;
};

const BUCKLES: BuckleItem[] = [
  {
    heading: 'YKK LB-WG / WGD Buckle',
    headingPl: 'Klamra YKK LB-WG / WGD',
    text: "One of the best buckles for military applications, injection-molded from T-POM (toughened POM) — extremely durable and resistant to impacts. Features low-temperature resistance and one-handed operation even with gloves.",
    textPl: 'Jedną z najlepszych klamer do zastosowań wojskowych jest model YKK LB-WG / WGD, który jest wtryskiwany ze specjalnej gatunkowo odmiany POM (T-POM) – utwardzonego POM, co czyni go niezwykle trwałym i odpornym na uderzenia lub przypadkowe uszkodzenia. Niezawodna klamra, wyjątkowo łatwa w obsłudze w rękawicach i jedną ręką.',
    images: [`${WP}2025/08/white-Photoroom-14.png`, `${WP}2025/08/white-Photoroom-15.png`, `${WP}2025/08/white-Photoroom-13.png`],
    bg: 'bg-white',
  },
  {
    heading: 'HP-M 50 Belt Buckle',
    headingPl: 'Klamra pasa HP-M 50',
    text: 'Magnetic design with hidden release mechanism. Easy operation — can be fastened and unfastened with one hand, even while wearing gloves. Features swivel function and tactical matte finish.',
    textPl: 'Magnetyczna klamra z centralnym, ukrytym mechanizmem zwalniającym. Zaprojektowana do stosowania w pasach taktycznych. Łatwa obsługa — możliwość zapięcia i rozpięcia jedną ręką, nawet w rękawiczkach. Funkcja obrotowa (swivel). Atrakcyjny design z taktycznym, matowym wykończeniem.',
    images: [`${WP}2025/09/HP-M-50-BELT-BUCKLE-500x1024.png`, `${WP}2025/09/HP-M-50-BELT-BUCKLE3-418x1024.png`, `${WP}2025/09/HP-M-50-BELT-BUCKLE1.png`],
    bg: 'bg-[#f5f3ef]',
  },
  {
    heading: 'LB25WGD YKK Belt Buckle T-POM',
    headingPl: 'Klamra YKK LB25WGD T-POM',
    text: 'Heavy-duty side-release construction offering exceptional impact resistance. Glove-friendly operation compatible with standard webbing. The T-POM material provides superior strength over standard POM.',
    textPl: 'Wytrzymała klamra zatrzaskowa do dużych obciążeń, zaprojektowana, by sprostać najtrudniejszym warunkom użytkowania. Wyjątkowa odporność na uderzenia. Solidna i wytrzymała. Łatwe otwieranie w rękawiczkach i proste zapinanie nawet jedną ręką.',
    images: [`${WP}2025/09/LB25WGD-YKK-BELT-BUCKLE-T-POM.png`, `${WP}2025/09/LB25WGD-YKK-BELT-BUCKLE-T-POM2.png`, `${WP}2025/09/LB25WGD-YKK-BELT-BUCKLE-T-POM1-e1756985500770-576x1024.png`],
    bg: 'bg-[#111111]',
  },
  {
    heading: 'Quick-Release Buckle for Vest',
    headingPl: 'Klamra szybkiego otwierania do kamizelki',
    text: '40mm webbing compatibility. Cord-activated rapid release system. Enhanced durability against UV, water, snow, and ice. Designed for tactical vests and PPE where emergency removal is required.',
    textPl: 'Klamra do zastosowania z taśmami w szerokości 40mm, do szybkiego otwierania przez pociągnięcie sznurka, używana do kamizelek taktycznych. Zwiększona trwałość na UV, wodę, śnieg i lód.',
    images: [`${WP}2025/09/KLAMRA-SZYBKIEGO-OTWIERANIA-DO-KAMIZELKI-450x1024.png`],
    bg: 'bg-white',
  },
  {
    heading: 'Standard Side Release Buckle',
    headingPl: 'Standardowa klamra boczna',
    text: 'POM (acetal) construction. Available in flame-retardant UL-94 V0 and reduced NIR variants. Suitable for general purpose, workwear, and tactical applications.',
    textPl: 'Standardowe klamry używane w wielu aplikacjach, wykonane z tworzywa POM czyli acetalu. Dostarczamy wszystkie elementy tworzywowe w wersji trudnopalnej spełniające wymagania normy UL-94, klasa V0.',
    images: [`${WP}2025/09/STANDARD-SIDE-RELEASE-BUCKLE.png`],
    bg: 'bg-[#f5f3ef]',
  },
  {
    heading: 'Self-locking Adjustment Buckle',
    headingPl: 'Klamra z samozaciskową regulacją',
    text: 'Features a cam adjustment mechanism for rapid strap length modification. Available in standard and NIR-compliant versions for military applications.',
    textPl: 'Posiada mechanizm krzywkowej regulacji do szybkiej zmiany długości pasa. Dostępna w wersji standardowej i zgodnej z NIR do zastosowań militarnych.',
    images: [`${WP}2025/09/KLAMRA-Z-SAMOZACISKOWA-REGULACJA.png`],
    bg: 'bg-white',
  },
  {
    heading: 'Quick-Release System for Vests',
    headingPl: 'System szybkiego odpinania kamizelek',
    text: 'Simultaneous disconnection of four buckles via a single central release. Neodymium magnets facilitate re-fastening. Designed for rapid doffing of tactical vests and body armor.',
    textPl: 'Jednoczesne odpięcie czterech klamer przez jedno centralne zwolnienie. Magnesy neodymowe ułatwiają ponowne zapinanie. Zaprojektowany do szybkiego zdejmowania kamizelek taktycznych i pancerzy.',
    images: [`${WP}2025/09/systemszybkiegoodpinaniaklamer.png`],
    bg: 'bg-[#111111]',
  },
  {
    heading: '40mm Magnetic Buckle',
    headingPl: 'Klamra magnetyczna 40mm',
    text: 'Easy to use with intuitive one-handed unfastening and fastening thanks to the magnet. Used in Polish Police protective equipment and similar law enforcement applications.',
    textPl: 'Wygodna klamra z magnetycznym zapięciem, stosowana w wielu aplikacjach, między innymi w ochronach osobistych oraz zastosowaniach wojskowych. Użyta w nowym modelu kamizelek dla Polskiej policji.',
    images: [`${WP}2025/09/klamramagnetyczna40mm-e1756986571379.png`],
    bg: 'bg-[#f5f3ef]',
  },
];

const ACCESSORIES = [
  { heading: 'Sew-on Tactical Buckles', headingPl: 'Klamry szyte taktyczne', img: `${WP}2025/09/surfacemountbuckle.png` },
  { heading: 'Buckles for Workwear', headingPl: 'Klamry do odzieży roboczej', img: `${WP}2025/09/workwearbuckles.jpg` },
  { heading: 'Snap Hook', headingPl: 'Karabińczyk', img: `${WP}2025/09/snaphook.jpg` },
  { heading: 'Cord Stopper / Cord Lock', headingPl: 'Stoper sznurka / Zamek sznurka', img: `${WP}2025/09/cordstopper.jpg` },
  { heading: 'Quick-attach Loop', headingPl: 'Pętla szybkiego mocowania', img: `${WP}2025/09/quickattachmentloop.jpg` },
  { heading: 'Strap Adjuster', headingPl: 'Regulator pasa', img: `${WP}2025/09/strapadjuster.jpg` },
  { heading: 'Standard Side-Release Buckles', headingPl: 'Standardowe klamry boczne', img: `${WP}2025/09/standard-side-release-buckles.png` },
  { heading: 'High-Strength Buckles', headingPl: 'Klamry wysokiej wytrzymałości', img: `${WP}2025/09/heavy-duty-buckles.jpg` },
  { heading: 'Three-step Adjusters', headingPl: 'Regulatory trójstopniowe', img: `${WP}2025/09/tribar-adjuster.png` },
];

export default function BucklesContent({ locale, position }: Props) {
  const isEn = locale === 'en';

  if (position === 'above') {
    return (
      <>
        {BUCKLES.map((item, i) => {
          const isDark = item.bg === 'bg-[#111111]';
          const isEven = i % 2 === 0;
          return (
            <section key={i} className={`py-16 ${item.bg}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                  {/* Text col — swap order for even/odd */}
                  <div className={isEven ? 'order-1' : 'order-2'}>
                    <h2 className={`font-[Jost] text-xl sm:text-2xl font-light mb-5 ${isDark ? 'text-white' : 'text-[#111]'}`}>
                      {isEn ? item.heading : item.headingPl}
                    </h2>
                    <p className={`font-[Jost] text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {isEn ? item.text : item.textPl}
                    </p>
                  </div>
                  {/* Images col */}
                  <div className={`${isEven ? 'order-2' : 'order-1'} ${item.images.length > 1 ? 'grid grid-cols-' + item.images.length + ' gap-3' : ''}`}>
                    {item.images.map((src, j) => (
                      <div key={j} className={`overflow-hidden group ${isDark ? 'bg-white/5' : 'bg-gray-50'} p-2`}>
                        <Image src={src} alt={`${item.heading} ${j + 1}`}
                          width={400} height={400}
                          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                          sizes={item.images.length > 1 ? '20vw' : '45vw'} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </>
    );
  }

  const FAQ_EN = [
    {
      question: 'What types of buckles and plastic hardware do you offer?',
      answer:
        "We offer a comprehensive range of buckles and plastic hardware components for various applications, from delicate children's products to durable tactical gear. Our selection includes side-release buckles (standard and high-strength), magnetic buckles with intuitive closure, belt buckles with dual adjusters, quick-release buckles for vests, self-locking adjustment buckles with cam mechanisms, surface mount buckles, cord stoppers and locks, strap adjusters, snap hooks, quick-attach loops, D-rings, strap holders, clips, and specialized tactical buckles. All components are available in various materials including standard POM, reinforced T-POM, flame-retardant versions meeting UL-94 V0 standards, and NIR-reduced variants for military applications.",
    },
    {
      question: 'What makes YKK LB-WG/WGD buckles ideal for military applications?',
      answer:
        "The YKK LB-WG/WGD buckle is one of the best buckles for military applications, injection-molded from a special grade of POM called T-POM (toughened POM). This material makes it extremely durable and resistant to impacts or accidental damage. The buckle is exceptionally easy to operate with gloves and with one hand, which is crucial for tactical situations. T-POM is extremely resistant to low temperatures as well as temperature changes, ensuring reliable performance in harsh environments. The hardened acetal construction makes it one of the strongest buckles on the market, if not the strongest, providing dependable performance where failure is not an option.",
    },
    {
      question: 'How do magnetic buckles work and what are their advantages?',
      answer:
        "Magnetic buckles offer convenient, intuitive operation that can be performed with one hand, even while wearing gloves. The 40mm magnetic buckle features a magnetic closure used in personal protective equipment and military applications, making fastening and unfastening quick and effortless. The HP-M 50 belt buckle includes a central, hidden release mechanism with swivel function and tactical matte finish, ideal for tactical belts. Our quick-release vest system uses neodymium magnets in each buckle to enable easy fastening, combined with a central mechanical release that disconnects all four buckles simultaneously. The magnetic feature provides intuitive operation while maintaining secure hold during use.",
    },
    {
      question: 'What materials are buckles made from and what special versions are available?',
      answer:
        "Standard buckles are made from POM plastic (acetal), a universal material often modified by manufacturers for specific requirements. For demanding applications, we offer T-POM (toughened POM), which provides exceptional impact resistance and durability, particularly for tactical and military uses. When special applications require it, we supply buckles in flame-retardant versions meeting UL-94 standard, class V0 requirements, essential for workwear and protective equipment. We also offer buckles with reduced Near-Infrared (NIR) signature for military applications where tactical concealment is critical. Each material variant is selected based on the specific performance requirements, environmental conditions, and safety standards of your application.",
    },
    {
      question: 'What specialized buckle systems do you offer for tactical vests?',
      answer:
        "We offer several specialized buckle systems designed specifically for tactical vests and plate carriers. The quick-release buckle for 40mm webbing allows rapid release by pulling a cord, with special reinforced material ensuring excellent durability and high resistance to weather conditions including UV, water, snow, and ice. Our quick-release vest system features a central release mechanism that disconnects all four buckles simultaneously through mechanical cable disengagement, with neodymium magnets enabling easy fastening. The LB25WGD YKK belt buckle in T-POM offers exceptional impact resistance, easy operation with gloves, and compatibility with most webbing. These systems are used in professional applications including the new model vests for the Polish Police, demonstrating their proven reliability in demanding field conditions.",
    },
  ];

  const FAQ_PL = [
    {
      question: 'Jakie rodzaje klamer i plastikowego hardware oferujecie?',
      answer:
        'Oferujemy kompleksowy asortyment klamer i plastikowych elementów do różnych zastosowań — od delikatnych produktów dziecięcych po trwały sprzęt taktyczny. Nasza oferta obejmuje: klamry boczne (standardowe i wysokiej wytrzymałości), klamry magnetyczne, klamry pasów z podwójnym regulatorem, klamry szybkiego otwierania do kamizelek, klamry z samozaciskową regulacją, klamry montowane powierzchniowo, stopery i zamki sznurka, regulatory pasów, karabińczyki, pętle szybkiego mocowania, D-ringi i specjalistyczne klamry taktyczne. Wszystkie komponenty dostępne w POM, T-POM, wersjach trudnopalnych UL-94 V0 oraz z obniżoną sygnaturą NIR.',
    },
    {
      question: 'Co sprawia, że klamry YKK LB-WG/WGD są idealne do zastosowań militarnych?',
      answer:
        'Klamra YKK LB-WG/WGD to jedna z najlepszych klamer do zastosowań wojskowych, wtryskiwana ze specjalnej odmiany POM — T-POM (utwardzonego POM), co czyni ją niezwykle trwałą i odporną na uderzenia. Klamra jest wyjątkowo łatwa w obsłudze w rękawicach i jedną ręką — kluczowe w sytuacjach taktycznych. T-POM jest wyjątkowo odporny na niskie temperatury i zmiany temperatur, zapewniając niezawodność w trudnych warunkach. Utwardzona konstrukcja acetal czyni ją jedną z najsilniejszych klamer na rynku.',
    },
    {
      question: 'Jak działają klamry magnetyczne i jakie mają zalety?',
      answer:
        'Klamry magnetyczne oferują wygodną, intuicyjną obsługę jedną ręką, nawet w rękawiczkach. Klamra magnetyczna 40mm stosowana jest w środkach ochrony indywidualnej i zastosowaniach militarnych. Klamra pasa HP-M 50 ma centralny, ukryty mechanizm zwalniający z funkcją obrotową i taktycznym matowym wykończeniem. Nasz system szybkiego odpinania kamizelek używa magnesów neodymowych do łatwego zapinania w połączeniu z centralnym mechanicznym zwolnieniem, które odłącza wszystkie cztery klamry jednocześnie.',
    },
    {
      question: 'Z jakich materiałów wykonane są klamry i jakie specjalne wersje są dostępne?',
      answer:
        'Standardowe klamry wykonane są z tworzywa POM (acetal), modyfikowanego przez producentów do konkretnych wymagań. Do wymagających zastosowań oferujemy T-POM (utwardzony POM) zapewniający wyjątkową odporność na uderzenia. Gdy wymagają tego szczególne zastosowania, dostarczamy klamry w wersjach trudnopalnych spełniających normę UL-94, klasa V0. Oferujemy też klamry z obniżoną sygnaturą NIR do zastosowań militarnych. Każdy wariant materiałowy jest dobierany na podstawie wymagań wydajnościowych, warunków środowiskowych i norm bezpieczeństwa.',
    },
    {
      question: 'Jakie specjalistyczne systemy klamer oferujecie do kamizelek taktycznych?',
      answer:
        'Oferujemy kilka specjalistycznych systemów klamer zaprojektowanych dla kamizelek taktycznych i nosidełek płyt. Klamra szybkiego otwierania na taśmy 40mm umożliwia szybkie odpięcie przez pociągnięcie sznurka z wysoką odpornością na UV, wodę, śnieg i lód. Nasz system szybkiego odpinania kamizelek ma centralny mechanizm odłączający wszystkie cztery klamry jednocześnie, z magnesami neodymowymi do łatwego zapinania. Klamra YKK LB25WGD T-POM oferuje wyjątkową odporność na uderzenia i łatwą obsługę w rękawiczkach. Systemy te stosowane są w profesjonalnych zastosowaniach, w tym w nowych modelach kamizelek dla Polskiej Policji.',
    },
  ];

  // position === 'below' — accessories grid + FAQ
  return (
    <>
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-10 text-[#111]">
            {isEn ? 'Hardware & Accessories' : 'Okucia i akcesoria'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACCESSORIES.map((acc, i) => (
              <div key={i} className="text-center">
                <div className="overflow-hidden group bg-white mb-3 aspect-square flex items-center justify-center p-3">
                  <Image src={acc.img} alt={isEn ? acc.heading : acc.headingPl}
                    width={250} height={250}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <p className="font-[Jost] text-xs text-gray-600 leading-snug">
                  {isEn ? acc.heading : acc.headingPl}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <FaqAccordion items={isEn ? FAQ_EN : FAQ_PL} locale={locale} />
      </section>
    </>
  );
}
