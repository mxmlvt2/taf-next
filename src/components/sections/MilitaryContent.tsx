import Image from 'next/image';

const WP = 'https://trimsandfasteners.com/wp-content/uploads/';

interface Props {
  locale: string;
  position: 'above' | 'below';
}

export default function MilitaryContent({ locale, position }: Props) {
  const isEn = locale === 'en';

  if (position === 'above') {
    return (
      <>
        {/* ── Nylon / NIR ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn
                    ? 'Nylon Zippers for Military and PPE'
                    : 'Zamki nylonowe dla wojska i PPE'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'We supply all military-grade zipper types with emphasis on reduced Near-Infrared (NIR) signature capabilities. NIR-compliant zippers match the light reflection properties of the surrounding fabric — critical for camouflage effectiveness in the field.'
                      : 'Dostarczamy wszystkie typy zamków klasy wojskowej, ze szczególnym naciskiem na możliwości zredukowanej sygnatury bliskiej podczerwieni (NIR). Zamki zgodne z NIR dopasowują właściwości odbicia światła do otaczającej tkaniny — kluczowe dla skuteczności kamuflażu w terenie.'}
                  </p>
                  <p>
                    {isEn
                      ? 'We develop custom colors based on fabric swatches and NATO specification requirements. Our extensive experience in fulfilling military tenders means we understand exactly what documentation, testing, and compliance is required.'
                      : 'Opracowujemy kolory na zamówienie na podstawie próbek tkanin i wymagań specyfikacji NATO. Nasze bogate doświadczenie w realizacji przetargów wojskowych oznacza, że doskonale rozumiemy wymaganą dokumentację, testy i zgodność.'}
                  </p>
                </div>
              </div>
              <div className="overflow-hidden group">
                <Image
                  src={`${WP}2025/06/nylonzippers5-scaled.png`}
                  alt={isEn ? 'Military nylon zippers NIR' : 'Zamki nylonowe militarne NIR'}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Military-Grade Plastic ── */}
        <section className="py-16 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-white">
                  {isEn ? 'Military-Grade Plastic Zippers' : 'Plastikowe zamki klasy militarnej'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-400 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'When selecting suppliers for military plastic zippers, we prioritize partners with in-house component manufacturing capabilities. This ensures full control over material properties, tolerances, and compliance with military specifications.'
                      : 'Przy wyborze dostawców plastikowych zamków militarnych priorytetem są partnerzy z własną produkcją komponentów. Zapewnia to pełną kontrolę nad właściwościami materiałów, tolerancjami i zgodnością ze specyfikacjami wojskowymi.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Molded zippers are a preferred choice for bulletproof vests, tactical jackets, and PPE — where the ease of cleaning from dirt and debris is as important as structural reliability.'
                      : 'Zamki formowane to preferowany wybór do kamizelek kuloodpornych, kurtek taktycznych i PPE — gdzie łatwość czyszczenia z brudu i zanieczyszczeń jest równie ważna jak niezawodność strukturalna.'}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  `${WP}2025/06/militarnyzamekplastikowy3-1024x576.jpg`,
                  `${WP}2025/06/militarntyzamekplastikowy-1024x1024.jpg`,
                ].map((src, i) => (
                  <div key={i} className="overflow-hidden group">
                    <Image
                      src={src}
                      alt={isEn ? `Military plastic zipper ${i + 1}` : `Zamek plastikowy militarny ${i + 1}`}
                      width={500}
                      height={400}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return null;
}
