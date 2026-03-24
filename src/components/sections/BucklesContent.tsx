import Image from 'next/image';

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

  // position === 'below' — accessories grid
  return (
    <section className="py-16 bg-[#f5f3ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-10 text-[#111]">
          {isEn ? 'Hardware & Accessories' : 'Okucia i akcesoria'}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {ACCESSORIES.map((acc, i) => (
            <div key={i} className="text-center">
              <div className="overflow-hidden group bg-white mb-3 aspect-square flex items-center justify-center p-3">
                <Image src={acc.img} alt={isEn ? acc.heading : acc.headingPl}
                  width={250} height={250}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="20vw" />
              </div>
              <p className="font-[Jost] text-xs text-gray-600 leading-snug">
                {isEn ? acc.heading : acc.headingPl}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
