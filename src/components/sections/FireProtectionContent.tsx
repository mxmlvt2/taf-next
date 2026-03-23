import Image from 'next/image';

const WP = 'https://trimsandfasteners.com/wp-content/uploads/';

interface Props {
  locale: string;
  position: 'above' | 'below';
}

export default function FireProtectionContent({ locale, position }: Props) {
  const isEn = locale === 'en';

  if (position === 'above') {
    return (
      <>
        {/* ── Intro ── */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <p className="font-[Jost] text-gray-500 text-sm leading-relaxed">
              {isEn
                ? 'Protective clothing must meet strict safety standards with different protection levels. All materials — including zippers — must be self-extinguishing with no afterglow and no heat accumulation. Maintaining full zipper functionality for emergency removal is critical.'
                : 'Odzież ochronna musi spełniać rygorystyczne normy bezpieczeństwa na różnych poziomach ochrony. Wszystkie materiały — w tym zamki — muszą być samogasnące, bez tlenia i bez kumulacji ciepła. Kluczowe jest zachowanie pełnej funkcjonalności zamka umożliwiającej awaryjne zdjęcie odzieży.'}
            </p>
          </div>
        </section>

        {/* ── Metal FR ── */}
        <section className="py-16 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn ? 'Fire Retardant Metal Zippers' : 'Metalowe zamki ognioodporne'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'Constructed with brass teeth and meta-aramid tape. Brass has a melting point of approximately 900–940°C, while the aramid fiber chars rather than burns — creating a protective barrier that maintains the zipper\'s structural integrity under extreme heat.'
                      : 'Wykonane z zębami mosiężnymi i taśmą meta-aramidową. Mosiądz ma temperaturę topnienia ok. 900–940°C, a włókno aramidowe zwęgla się zamiast spalać — tworząc barierę ochronną zachowującą integralność strukturalną zamka w ekstremalnym cieple.'}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <p className="font-medium text-gray-700 mb-2">{isEn ? '✓ Advantages' : '✓ Zalety'}</p>
                      <ul className="space-y-1 text-xs text-gray-500">
                        {(isEn ? ['Durable', 'Strong', 'Self-extinguishing'] : ['Trwałe', 'Wytrzymałe', 'Samogasnące']).map(i => (
                          <li key={i} className="flex gap-1"><span className="text-green-600">›</span>{i}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-2">{isEn ? '✗ Disadvantages' : '✗ Wady'}</p>
                      <ul className="space-y-1 text-xs text-gray-500">
                        {(isEn ? ['Heavy', 'Metal accumulates heat'] : ['Ciężkie', 'Metal kumuluje ciepło']).map(i => (
                          <li key={i} className="flex gap-1"><span className="text-red-400">›</span>{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden group">
                <Image
                  src={`${WP}2025/06/metalowezamkitrudnopalne.jpg`}
                  alt={isEn ? 'Fire retardant metal zipper' : 'Metalowy zamek ognioodporny'}
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Plastic FR ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="overflow-hidden group">
                <Image
                  src={`${WP}2025/03/Photoroom_20250328_052331-768x1024.jpeg`}
                  alt={isEn ? 'Fire retardant plastic zipper' : 'Plastikowy zamek ognioodporny'}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn ? 'Fire Retardant Plastic Zippers' : 'Plastikowe zamki ognioodporne'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'An innovative plastic molded alternative to metal fire-retardant zippers, maintaining full aramid tape functionality. The plastic teeth are injection-molded from flame-retardant compounds certified to international standards.'
                      : 'Innowacyjna alternatywa z tworzywa sztucznego dla metalowych zamków ognioodpornych, zachowująca pełną funkcjonalność taśmy aramidowej. Zęby plastikowe są formowane wtryskiwaniem ze związków trudnopalnych certyfikowanych według norm międzynarodowych.'}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <p className="font-medium text-gray-700 mb-2">{isEn ? '✓ Advantages' : '✓ Zalety'}</p>
                      <ul className="space-y-1 text-xs text-gray-500">
                        {(isEn
                          ? ['Self-extinguishing', 'Lightweight', 'Easy to clean', "Doesn't accumulate heat"]
                          : ['Samogasnące', 'Lekkie', 'Łatwe do czyszczenia', 'Nie kumuluje ciepła']
                        ).map(i => (
                          <li key={i} className="flex gap-1"><span className="text-green-600">›</span>{i}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-2">{isEn ? '✗ Disadvantages' : '✗ Wady'}</p>
                      <ul className="space-y-1 text-xs text-gray-500">
                        {(isEn ? ['Lower transverse strength'] : ['Niższa wytrzymałość poprzeczna']).map(i => (
                          <li key={i} className="flex gap-1"><span className="text-red-400">›</span>{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // position === 'below'
  return (
    <>
      {/* ── D8 FR Open-End ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-xl sm:text-2xl font-light mb-4 text-[#111]">
            {isEn ? 'D8 Fire Retardant Open-End Molded Zipper' : 'D8 Zamek formowany ognioodporny rozdzielny'}
          </h2>
          <p className="font-[Jost] text-gray-500 text-sm leading-relaxed mb-8 max-w-2xl">
            {isEn
              ? 'Size 8 molded zipper with plastic teeth on aramid fiber tape, suitable for electrician workwear. No metal parts to reduce heat hazard risk on the body.'
              : 'Zamek formowany rozmiar 8 z zębami z tworzywa na taśmie aramidowej, odpowiedni dla odzieży roboczej elektryka. Brak metalowych części redukuje ryzyko zagrożenia ciepłem na ciele.'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[`${WP}2025/09/2.jpg`, `${WP}2025/09/9.jpg`, `${WP}2025/09/7.jpg`, `${WP}2025/09/1.jpg`].map((src, i) => (
              <div key={i} className="overflow-hidden group aspect-square bg-gray-50">
                <Image src={src} alt={`D8 FR zipper ${i + 1}`} width={300} height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FB40FRGR Suspender Buckle ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-xl sm:text-2xl font-light mb-4 text-[#111]">
            {isEn ? 'FB40FRGR Suspender Buckle' : 'Klamra szelkowa FB40FRGR'}
          </h2>
          <p className="font-[Jost] text-gray-500 text-sm leading-relaxed mb-8 max-w-2xl">
            {isEn
              ? 'Plastic buckle meeting UL94 standard, class V-0 requirements for flame-resistant workwear accessories. Designed for safety workwear applications where all components must meet fire-resistance standards.'
              : 'Klamra plastikowa spełniająca wymagania normy UL94, klasa V-0 dla akcesoriów odzieży roboczej trudnopalnej. Zaprojektowana do odzieży ochronnej, gdzie wszystkie elementy muszą spełniać normy ognioodporności.'}
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-xl">
            {[`${WP}2025/09/5.jpg`, `${WP}2025/09/4.jpg`, `${WP}2025/09/5.jpg`].map((src, i) => (
              <div key={i} className="overflow-hidden group aspect-square bg-white">
                <Image src={src} alt={`Suspender buckle ${i + 1}`} width={300} height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="15vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── D8 FR Two-Way ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-xl sm:text-2xl font-light mb-4 text-[#111]">
            {isEn ? 'D8 Fire Retardant Two-Way Separating Molded Zipper' : 'D8 Zamek formowany ognioodporny dwusuwakowy rozdzielny'}
          </h2>
          <p className="font-[Jost] text-gray-500 text-sm leading-relaxed mb-8 max-w-2xl">
            {isEn
              ? 'Size 8 molded zipper with flame-retardant plastic teeth and metal slider. Available in a quick-release version for fast emergency removal of protective garments.'
              : 'Zamek formowany rozmiar 8 z zębami z tworzywa trudnopalnego i metalowym suwakiem. Dostępny w wersji szybkiego zwalniania dla szybkiego awaryjnego zdjęcia odzieży ochronnej.'}
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-xl">
            {[`${WP}2025/09/9.jpg`, `${WP}2025/09/7.jpg`, `${WP}2025/09/8.jpg`].map((src, i) => (
              <div key={i} className="overflow-hidden group aspect-square bg-gray-50">
                <Image src={src} alt={`D8 two-way FR ${i + 1}`} width={300} height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="15vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── M-series + M8 NOMEX ── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="space-y-10">
              <div>
                <h2 className="font-[Jost] text-xl sm:text-2xl font-light mb-4 text-white">
                  {isEn ? 'M3/M5/M8 Fire Retardant Treated' : 'M3/M5/M8 z impregnacją ognioodporną'}
                </h2>
                <p className="font-[Jost] text-gray-400 text-sm leading-relaxed">
                  {isEn
                    ? 'Metal zipper with treated polyester or cotton tape. Approximately 20 wash cycles durability. Meets ISO-EN14116 / NFPA 2112 / NFPA 2113 standards.'
                    : 'Zamek metalowy z taśmą poliestrową lub bawełnianą z impregnacją. Trwałość ok. 20 cykli prania. Spełnia normy ISO-EN14116 / NFPA 2112 / NFPA 2113.'}
                </p>
              </div>
              <div>
                <h2 className="font-[Jost] text-xl sm:text-2xl font-light mb-4 text-white">
                  {isEn ? 'M8 NOMEX – Firefighter Turnout Gear' : 'M8 NOMEX – odzież strażacka'}
                </h2>
                <p className="font-[Jost] text-gray-400 text-sm leading-relaxed">
                  {isEn
                    ? 'Standard metal zipper on meta-aramid (NOMEX) tape for firefighter equipment worldwide. Meets ISO-EN469 / NFPA 1975 standards for proximity and structural firefighting protective clothing.'
                    : 'Standardowy zamek metalowy na taśmie meta-aramidowej (NOMEX) do sprzętu strażackiego na całym świecie. Spełnia normy ISO-EN469 / NFPA 1975 dla odzieży ochronnej strażackiej.'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden group bg-white/5 p-2">
                <Image
                  src={`${WP}2025/09/11-256x1024.jpg`}
                  alt={isEn ? 'M-series FR metal zipper' : 'Zamek metalowy M z impregnacją FR'}
                  width={256}
                  height={1024}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="20vw"
                />
              </div>
              <div className="overflow-hidden group bg-white/5 p-2">
                <Image
                  src={`${WP}2025/09/12.jpg`}
                  alt={isEn ? 'M8 NOMEX firefighter zipper' : 'Zamek M8 NOMEX strażacki'}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="20vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
