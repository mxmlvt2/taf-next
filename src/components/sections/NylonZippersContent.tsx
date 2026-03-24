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
                      : 'Najczęściej spotykanym i najbardziej wszechstronnym rodzajem zamków są zamki nylonowe. Działają w tak wielu zastosowaniach, które używamy na co dzień, dzięki swojej elastyczności i wytrzymałości. Są to najtrwalsze zamki dzięki konstrukcji, w której elementy zamka są szyte lub wplecione w taśmę.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Their uses span sportswear, cycling apparel, PPE, backpacks, footwear, and the yachting industry — wherever a reliable, lightweight fastener is required.'
                      : 'Są to zamki najczęściej wykorzystywane w odzieży sportowej, w odzieży rowerowej jak i w ochronach osobistych, plecakach i obuwiu. Są to również zamki wykorzystywane w branży jachtowej.'}
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
                      : 'Powszechnie stosowane w przemyśle odzieżowym, od obuwia po meble i siedzenia samochodowe. Są to głównie zamki używane w odzieży outdoor i w sporcie.'}
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
                      : 'Ten sam typ zamka, ale suwak działa po stronie taśmy, dzięki czemu elementy zamka pozostają ukryte.'}
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
                : 'Zamki spiralne mogą być podatne na zabrudzenia i uszkodzenia nici. W wymagających warunkach zalecamy warianty wodoodporne z dodatkowymi powłokami ochronnymi.'}
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
                    : 'Zamki nylonowe z dwukierunkowym otwarciem są dość trudne do zaprojektowania. Dostarczamy tylko najwyższej jakości zamki dwukierunkowe, w których użytkownik nie musi walczyć z zamkiem, aby go zamknąć.'}
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
                    : 'Dostarczamy wszystkie typy zamków błyskawicznych używanych w zastosowaniach wojskowych. Zamki błyskawiczne dla wojska muszą charakteryzować się zmniejszoną sygnaturą w bliskiej podczerwieni (NIR). Opracowujemy kolory na zamówienie na podstawie próbek tkanin i wymagań specyfikacji NATO.'}
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
                    : 'Mamy długie doświadczenie w dostarczaniu różnego rodzaju zamków błyskawicznych dla producentów odzieży kolarskiej. Doskonale znamy tę branżę i możemy zaoferować zarówno innowacyjne rozwiązania, jak i najlepsze oferty na standardowe zamki błyskawiczne.'}
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
                    : 'Zamki nylonowe kryte to szeroka kategoria zamków nylonowych, stosowana w wielu różnych dziedzinach – od konfekcji, przez odzież outdoorową, po przemysł motoryzacyjny i meblarski. Główne różnice pomiędzy poszczególnymi typami to rodzaj taśmy i rozmiar ząbków.'}
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
                    : 'Zamki kryte na taśmie dzianinowej charakteryzują się wyjątkową elastycznością, pozwalając zamkowi poruszać się razem z tkaniną. Taśma koronkowa jest odpowiednia do lekkich tkanin, gdzie na zamek nie działają siły poprzeczne, głównie w przypadku lekkich sukienek.'}
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
                    : 'Zastępstwo dla plastikowego profilu do zamknięcia poszycia fotela lub sofy. Dostarczamy wszystkie niezbędne urządzenia oraz koordynację procesu i szkolenie personelu w zakładzie klienta.'}
                </p>
                <ul className="space-y-2 mt-4">
                  {(isEn ? [
                    '5 CC – heavy-duty, stiff, high closing forces',
                    '45 ECH – flexible, furniture-suitable, woven elements',
                  ] : [
                    '5 CC – ciężki, sztywny, duże siły zamykania',
                    '45 ECH – elastyczny, odpowiedni do mebli, elementy tkane',
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
                    : 'Popularny zamek ze względu na ładny wygląd i ochronę przed zachlapaniem wodą. Zapewniają podstawowy poziom wodoodporności i są powszechnie stosowane w różnego rodzaju odzieży sportowej i outdoorowej.'}
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
                    : 'W tej zaawansowanej konstrukcji, elementy ząbkowe są integralnie wplecione w strukturę taśmy, a nie tylko przyszyte. Eliminuje to potencjalny słaby punkt związany z degradacją nici.'}
                </p>
                <p>
                  {isEn
                    ? 'Standard sewn coil zippers have teeth sewn onto the side tape with polyester thread — these threads degrade from UV exposure over time. The woven-in type offers extended lifespan with greater tape resistance.'
                    : 'Standardowa spirala szyta ma ząbki przyszywane do taśmy bocznej nicią poliestrową. Nici mogą ulegać degradacji UV, a ząbki mogą się oddzielać od taśmy. Taśma tkana oferuje znacznie dłuższą żywotność.'}
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
