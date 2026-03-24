import Image from 'next/image';

const WP = 'https://trimsandfasteners.com/wp-content/uploads/';

interface Props { locale: string; position: 'above' | 'below'; }

export default function BabyContent({ locale, position }: Props) {
  const isEn = locale === 'en';
  if (position === 'below') return null;

  return (
    <>
      {/* ── The World of Children's Fashion ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? "The World of Children's Fashion" : 'Świat mody dziecięcej'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? "The children's apparel industry demands the highest standards in quality, safety, and functionality. Comfort, material durability, and compliance with health and environmental standards are non-negotiable."
                    : 'Branża odzieży dziecięcej obejmuje projektowanie, produkcję i sprzedaż ubrań przeznaczonych dla niemowląt, dzieci i młodzieży. Charakteryzuje się dużą dynamiką oraz wysokimi wymaganiami dotyczącymi jakości, bezpieczeństwa i funkcjonalności produktów. Kluczowe znaczenie mają wygoda, trwałość materiałów oraz zgodność z normami zdrowotnymi i ekologicznymi.'}
                </p>
                <p>
                  {isEn
                    ? 'Crucially, compliance with norms regarding the detachment of small parts is vital, as these can pose a choking hazard for young children. All zipper components must be securely attached and tested accordingly.'
                    : 'Bardzo ważną rzeczą jest zgodność z normami dotyczącymi odrywania się małych przedmiotów, gdyż stanowi to niebezpieczeństwo dla małych dzieci.'}
                </p>
                <p>
                  {isEn
                    ? "Children's fashion prioritizes joyful colors. With molded zippers, changing tooth color creates beautiful contrasts. Molded zippers can even have a different color on each side — offering unlimited possibilities for unique designs."
                    : 'Moda dziecięca stawia na radosne kolory. Zamki formowane mogą mieć nawet inny kolor po każdej stronie, co daje nieograniczone możliwości tworzenia unikalnych wzorów.'}
                </p>
                <p>
                  {isEn
                    ? 'Plastic and coil zippers are the most commonly used types. We also offer zippers specifically designed for sleeping bags and strollers. Magnetic auto-lock closures help preschool children dress independently — solving the challenge of inserting zipper ends into the box.'
                    : 'Zamki plastikowe i spiralne to najczęściej stosowane typy. Posiadamy w ofercie również zamki do śpiworów oraz wózków. Magnetyczne zamknięcia auto-lock pomagają dzieciom przedszkolnym samodzielnie się ubierać.'}
                </p>
              </div>
            </div>
            <div className="overflow-hidden group">
              <Image
                src={`${WP}2025/03/Projekt-bez-nazwy-2025-03-04T132235.388.png`}
                alt={isEn ? "Children's clothing zipper" : 'Zamek do odzieży dziecięcej'}
                width={700}
                height={700}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Glow-in-the-Dark ── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-white">
                {isEn ? 'Glow-in-the-Dark Zippers' : 'Zamki świecące w ciemności'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-400 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? "Zipper elements injection-molded from a special glow-in-the-dark material — perfect for children's clothing. Just shine a flashlight on the zipper for a moment, and the teeth will start to glow beautifully. Kids love it!"
                    : 'Elementy zamka wtryskiwane ze specjalnego materiału świecącego w ciemnościach, idealne do odzieży dziecięcej. Wystarczy na chwilę oświetlić zamek latarką, a ząbki zaczną ładnie świecić – dzieci to uwielbiają!'}
                </p>
                <h3 className="font-[Jost] text-base font-medium text-white mt-4">
                  {isEn ? 'How does the magic work? Photoluminescence' : 'Jak działa magia? Technologia fotoluminescencji'}
                </h3>
                <p>
                  {isEn
                    ? 'The secret lies in the material: specialized plastic enriched with photoluminescent pigments that absorb and store light energy, then slowly release it as visible greenish or bluish light. The longer the exposure to light, the brighter and longer-lasting the glow — children can "charge" their own clothes and enjoy the effect after the lights go out.'
                    : 'Sekret tych wyjątkowych zamków tkwi w materiale, z którego formowane są ich elementy, takie jak ząbki i suwak. Jest to specjalistyczne tworzywo sztuczne, wzbogacone o pigmenty fotoluminescencyjne. Pigmenty te mają zdolność do absorbowania i magazynowania energii świetlnej, a następnie powolnego jej uwalniania w postaci widzialnego, zielonkawego lub niebieskiego światła. Proces jest niezwykle prosty: wystarczy na chwilę oświetlić zamek latarką lub wystawić na działanie słońca, a ząbki zaczną ładnie świecić w ciemności.'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                `${WP}2025/06/zamekswiecacywciemnosci-1-e1751275851765-782x1024.jpg`,
                `${WP}2025/06/zamekswiecacywciemnosci2-768x1024.jpg`,
              ].map((src, i) => (
                <div key={i} className="overflow-hidden group">
                  <Image src={src} alt={isEn ? `Glow zipper ${i + 1}` : `Zamek świecący ${i + 1}`}
                    width={400} height={533}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
