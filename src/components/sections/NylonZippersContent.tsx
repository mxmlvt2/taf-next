import Image from 'next/image';

const WP = 'https://trimsandfasteners.com/wp-content/uploads/';

interface Props {
  locale: string;
  position: 'above' | 'below';
}

export default function NylonZippersContent({ locale, position }: Props) {
  const isEn = locale === 'en';

  if (position === 'above') {
    return (
      <>
        {/* ── Characteristics ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn ? 'Characteristics of Coil Zippers' : 'Charakterystyka zamków spiralnych'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'Coil zippers, also known as nylon zippers, are the most common and versatile type of fastener. They work across so many everyday applications thanks to their flexibility and strength.'
                      : 'Zamki spiralne, znane również jako nylonowe, to najpopularniejszy i najbardziej wszechstronny typ zapięcia. Sprawdzają się w wielu codziennych zastosowaniach dzięki swojej elastyczności i wytrzymałości.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Their uses span sportswear, cycling apparel, PPE, backpacks, footwear, and the yachting industry — wherever a reliable, lightweight fastener is required.'
                      : 'Stosowane są w odzieży sportowej, kolarskiej, środkach ochrony osobistej, plecakach, obuwiu i branży żeglarskiej — wszędzie tam, gdzie potrzebne jest niezawodne, lekkie zapięcie.'}
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden group">
                <Image
                  src={`${WP}2025/06/nylonzippers16-scaled.jpg`}
                  alt={isEn ? 'Nylon coil zippers' : 'Zamki spiralne nylonowe'}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Standard ── */}
        <section className="py-16 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn ? 'Standard' : 'Standardowy'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'Commonly used across the apparel industry, from footwear to furniture and car seats, these zippers are primarily utilized in outdoor and sports applications.'
                      : 'Powszechnie stosowane w całym przemyśle odzieżowym — od obuwia po meble i fotele samochodowe. Przede wszystkim wykorzystywane w zastosowaniach outdoorowych i sportowych.'}
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden group">
                <Image
                  src={`${WP}2025/06/standardowa-spirala-nylonowa-min-1024x681.png`}
                  alt={isEn ? 'Standard nylon coil zipper' : 'Standardowy zamek spiralny nylonowy'}
                  width={700}
                  height={467}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Reverse ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="relative overflow-hidden group">
                <Image
                  src={`${WP}2025/10/2800134-1024x1024.jpg`}
                  alt={isEn ? 'Reverse nylon zipper' : 'Zamek nylonowy odwrócony'}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn ? 'Reverse' : 'Odwrócony'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'This is the same type of zipper (coil zipper), but the slider operates on the tape side, which keeps the zipper elements hidden. Ideal for garments where a clean, concealed finish is desired.'
                      : 'To ten sam typ zamka spiralnego, ale suwak porusza się po stronie taśmy, dzięki czemu elementy zamka pozostają ukryte. Idealny do ubrań wymagających czystego, ukrytego wykończenia.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Note on disadvantages ── */}
        <section className="py-10 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-[Jost] text-gray-500 text-sm leading-relaxed max-w-3xl">
              {isEn
                ? 'Coil zippers can be vulnerable to contaminants and thread damage if not properly protected. For demanding environments, we recommend water-resistant variants with additional protective coatings.'
                : 'Zamki spiralne mogą być podatne na zabrudzenia i uszkodzenia nici, jeśli nie są odpowiednio chronione. W wymagających warunkach zalecamy warianty wodoodporne z dodatkowymi powłokami ochronnymi.'}
            </p>
          </div>
        </section>
      </>
    );
  }

  // position === 'below'
  return (
    <>
      {/* ── Two-Way Separating ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Two Way Separating Zippers' : 'Zamki dwusuwakowe rozdzielne'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'Two-way separating zippers present design challenges that are recognized globally. We source and offer only the highest quality two-way zippers, ensuring the user doesn\'t have to struggle to close them.'
                    : 'Zamki dwusuwakowe rozdzielne to uznane globalnie wyzwanie projektowe. Pozyskujemy i oferujemy wyłącznie zamki dwusuwakowe najwyższej jakości, zapewniając użytkownikowi łatwe zapinanie.'}
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src={`${WP}2025/06/nylonzippers4-1024x1024.jpg`}
                alt={isEn ? 'Two-way separating nylon zipper' : 'Zamek nylonowy dwusuwakowy rozdzielny'}
                width={600}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Military / PPE ── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-white">
                {isEn ? 'Nylon Zippers for Military and PPE' : 'Zamki nylonowe dla wojska i PPE'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-400 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'We are a supplier of military-grade zippers with reduced Near-Infrared (NIR) signature, matching the light reflection properties of the surrounding fabric. We offer custom colors to meet precise specification requirements.'
                    : 'Jesteśmy dostawcą zamków klasy militarnej z obniżoną sygnaturą bliskiej podczerwieni (NIR), dopasowaną do właściwości odbicia światła otaczającej tkaniny. Oferujemy kolory na zamówienie spełniające dokładne wymagania specyfikacji.'}
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src={`${WP}2025/06/nylonzippers5-1024x576.png`}
                alt={isEn ? 'Military nylon zippers' : 'Zamki nylonowe militarne'}
                width={700}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Sportswear / Cycling ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Nylon Zippers for Sportswear & Cycling Apparel' : 'Zamki nylonowe do odzieży sportowej i kolarskiej'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'We have extensive experience supplying cycling manufacturers. We offer both innovative solutions and the best deals on standard zippers — everything needed to keep your sportswear production running smoothly.'
                    : 'Posiadamy szerokie doświadczenie w dostawach dla producentów odzieży kolarskiej. Oferujemy zarówno innowacyjne rozwiązania, jak i najlepsze ceny na standardowe zamki — wszystko, czego potrzebujesz, by produkcja odzieży sportowej przebiegała sprawnie.'}
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src={`${WP}2025/06/sport-garment-zipper--1024x576.jpeg`}
                alt={isEn ? 'Sportswear cycling nylon zipper' : 'Zamek nylonowy do odzieży sportowej'}
                width={700}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Concealed Coil ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Concealed Coil Zippers' : 'Zamki spiralne kryte'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'Concealed coil zippers have a broad application range across apparel. They are categorized by tape type and teeth size. The lightweight CHC-26 concealed zippers use a lace-style tape, creating a mesh-like zipper ideal for very lightweight garments.'
                    : 'Zamki spiralne kryte mają szerokie zastosowanie w odzieży. Kategoryzuje się je według rodzaju taśmy i rozmiaru zębów. Lekkie zamki kryte CHC-26 używają taśmy koronkowej, tworząc zamek o strukturze siatki — idealny do bardzo lekkich tkanin.'}
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src={`${WP}2025/06/nylonzippers10-1024x1024.jpg`}
                alt={isEn ? 'Concealed coil zipper' : 'Zamek spiralny kryty'}
                width={600}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Knitted Tape ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative overflow-hidden group">
              <Image
                src={`${WP}2025/06/nylonzippers11-1024x1024.jpg`}
                alt={isEn ? 'Concealed zipper with knitted tape' : 'Zamek kryty z taśmą dzianą'}
                width={600}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Concealed Coil Zippers with Knitted Tape' : 'Zamki spiralne kryte z taśmą dzianą'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'These offer exceptional flexibility, allowing the zipper to move with the fabric. Suitable for elastane blends and thin knits. Note: the lace tape version is suitable for lightweight fabrics where no lateral forces act on the zipper.'
                    : 'Oferują wyjątkową elastyczność, pozwalając zamkowi poruszać się razem z tkaniną. Odpowiednie do mieszanek z elastanem i cienkich dzianin. Uwaga: wersja z taśmą koronkową nadaje się do lekkich tkanin, na które nie działają siły boczne.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Upholstery / Technical ── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-white">
                {isEn ? 'Upholstery / Technical Concealed Zippers' : 'Zamki kryte tapicerskie / techniczne'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-400 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'A replacement for a plastic profile creating an aesthetic, invisible closure. We provide equipment and staff training to ensure perfect installation results.'
                    : 'Zamiennik plastikowego profilu tworzący estetyczne, niewidoczne zamknięcie. Zapewniamy wyposażenie i szkolenie personelu w celu uzyskania doskonałych wyników montażu.'}
                </p>
                <ul className="space-y-2 mt-4">
                  {(isEn ? [
                    '5 CC – heavy-duty, stiff, high closing forces',
                    '45 ECH – flexible, furniture-suitable, woven elements',
                  ] : [
                    '5 CC – ciężki, sztywny, duże siły zamykania',
                    '45 ECH – elastyczny, odpowiedni do mebli, tkane elementy',
                  ]).map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-gray-600 flex-shrink-0">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src={`${WP}2025/07/zamek5cc.png`}
                alt={isEn ? 'Upholstery concealed zipper' : 'Zamek kryty tapicerski'}
                width={700}
                height={500}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Water-Resistant ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Water-Resistant Nylon Zippers' : 'Wodoodporne zamki nylonowe'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'Popular for splash protection and a basic level of water resistance in sportswear. The film appearance ranges from fully glossy to matte. Available in clear and solid-color versions.'
                    : 'Popularne do ochrony przed zachlapaniem i podstawowego poziomu wodoodporności w odzieży sportowej. Wygląd folii waha się od w pełni błyszczącego do matowego. Dostępne w wersjach przezroczystych i pełnokolorowych.'}
                </p>
                <p className="font-medium text-gray-600">
                  {isEn ? 'Available sizes: N3, N4, N5, N7, N8, N10' : 'Dostępne rozmiary: N3, N4, N5, N7, N8, N10'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { src: `${WP}2025/06/wodoodporny2-1024x987.jpg`, alt: 'Water resistant zipper 1' },
                { src: `${WP}2025/06/wodoodporny3-1024x1024.jpg`, alt: 'Water resistant zipper 2' },
                { src: `${WP}2025/06/wodoodpornyzamek-1-1024x576.png`, alt: 'Water resistant zipper 3' },
              ].map((img, i) => (
                <div key={i} className="overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="15vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Woven S-Tape vs Standard ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Woven-in S-Tape vs. Standard Sewn Coil Zippers' : 'Spirala tkana S-Tape vs. standardowa szyta'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'The evolution toward enhanced durability has produced the woven-in S-Tape zipper, where tooth elements are integrally woven into the tape\'s structure. This eliminates the thread degradation weak point found in standard sewn coil zippers.'
                    : 'Ewolucja ku zwiększonej trwałości dała zamek z taśmą tkaną S-Tape, gdzie elementy zębów są integralnie wplecione w strukturę taśmy. Eliminuje to słaby punkt degradacji nici w standardowych zamkach szytych.'}
                </p>
                <p>
                  {isEn
                    ? 'Standard sewn coil zippers have teeth sewn onto the side tape with polyester thread — these threads degrade from UV exposure over time. The woven-in type offers extended lifespan with greater tape resistance.'
                    : 'Standardowe zamki szyte mają zęby przyszyte do bocznej taśmy nicią poliestrową — nici te degradują się pod wpływem promieniowania UV. Typ tkany oferuje wydłużoną żywotność i większą odporność taśmy.'}
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src={`${WP}2025/06/porownanie-spirali-S80-WOVENIN-I-standardowej-80S-sewon-type-1024x718.jpeg`}
                alt={isEn ? 'Woven vs standard coil zipper comparison' : 'Porównanie spirali tkanej i standardowej'}
                width={700}
                height={490}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
