import Image from 'next/image';

const WP = 'https://trimsandfasteners.com/wp-content/uploads/';

interface Props { locale: string; position: 'above' | 'below'; }

export default function FashionContent({ locale, position }: Props) {
  const isEn = locale === 'en';
  if (position === 'below') return null;

  return (
    <>
      {/* ── Metal Accessories ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Metal Accessories for the Fashion Industry' : 'Metalowe akcesoria dla branży mody'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? "We offer a wide range of die-cast Zamak products for the fashion industry, available in a variety of platings and finishes. We can give you all accessories tone-in-tone — no matter where your production is made globally."
                    : 'Oferujemy odlewane ciśnieniowo produkty ze stopu cynku w licznych wariantach powłok. Dostępne w różnych kolorach, w tym modnym różowym złocie. Możemy dopasować akcesoria ton w ton — niezależnie od tego, gdzie na świecie odbywa się Twoja produkcja.'}
                </p>
              </div>
            </div>
            <div className="overflow-hidden group">
              <Image
                src={`${WP}2025/06/metaloweakcesoriadlamody-scaled-e1751275748542.png`}
                alt={isEn ? 'Metal fashion accessories' : 'Metalowe akcesoria modowe'}
                width={800} height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Snaps ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Snaps' : 'Napy'}
              </h2>
              <p className="font-[Jost] text-gray-500 text-sm leading-relaxed">
                {isEn
                  ? "Advanced snap solutions covering military-grade (NIR-compliant), marine (UV/saltwater resistant), children's clothing, and fire-resistant workwear applications. A single source for all your snap fastening needs."
                  : 'Zatrzaski to kluczowe komponenty techniczne dla branży mody. Dostępne: zatrzaski metalowe i plastikowe do odzieży dziecięcej, klasy wojskowej ze zgodnością NIR, do zastosowań morskich (UV/sól), ognioodporne i antystatyczne — jedno źródło dla wszystkich potrzeb.'}
              </p>
            </div>
            <div className="overflow-hidden group">
              <Image
                src={`${WP}2025/07/snapfastening-1024x673.png`}
                alt={isEn ? 'Snap fastening' : 'Zapięcie napowe'}
                width={700} height={460}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Invisible Zippers – Fashion ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-4 text-[#111]">
            {isEn ? 'Invisible Zippers – Fashion' : 'Zamki kryte – moda'}
          </h2>
          <p className="font-[Jost] text-gray-500 text-sm leading-relaxed mb-10 max-w-2xl">
            {isEn
              ? "Used extensively in women's ready-to-wear. European-made #3 and #4 sizes available, with customization options including fancy pullers and logo integration."
              : 'Najczęściej stosowane w branży mody. Zamki w różnych rozmiarach spirali. Dostępne: taśmy tkane i koronkowe, standardowe uchwyty suwaka, wersje z ozdobną galwaniką i logiem klienta.'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { src: `${WP}2025/10/b7ddec0b-13e8-42ad-9234-9f1dbc6d018a.png`, label: isEn ? 'Fancy pullers' : 'Ozdobne suwaki' },
              { src: `${WP}2025/10/f547073d-2ad0-437f-82c4-a61638e7c53e-967x1024.png`, label: isEn ? 'Heavy duty' : 'Heavy duty' },
              { src: `${WP}2025/10/0accc8aa-6dc3-4572-a90a-2f75cbcaadbc.png`, label: isEn ? 'Special function' : 'Specjalna funkcja' },
              { src: `${WP}2025/10/4f59d9ed-4b74-4d00-841c-b05e949a9422.jpg`, label: isEn ? 'Customization' : 'Personalizacja' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="overflow-hidden group bg-gray-50 mb-3">
                  <Image src={item.src} alt={item.label} width={300} height={300}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw" />
                </div>
                <p className="font-[Jost] text-xs text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Invisible Zippers – Sport ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-4 text-[#111]">
            {isEn ? 'Invisible Zippers – Sport Use' : 'Zamki kryte – zastosowanie sportowe'}
          </h2>
          <p className="font-[Jost] text-gray-500 text-sm leading-relaxed mb-10 max-w-2xl">
            {isEn
              ? 'Sport use of zippers is a combination of unique function and design. Invisible zippers with staydown puller — autolock / non-lock — optimized for performance and aerodynamics.'
              : 'Specjalistyczne rozwiązania dla odzieży sportowej z uchwytem suwaka typu stay-down (autolock / non-lock). Dostępne wersje: rozdzielne, wodoodporne z laminacją, minimalizujące ruch suwaka podczas aktywności.'}
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-xl">
            {[
              `${WP}2025/10/9f2d421f-9de0-4ae9-a9c2-81667fa4ffd6.png`,
              `${WP}2025/10/d9c8a4fa-e94f-43b7-8c8b-81e3bb3de3d0.png`,
              `${WP}2025/10/5b15d6a3-0776-40d8-91b4-f842e2f7f0a4.png`,
            ].map((src, i) => (
              <div key={i} className="overflow-hidden group bg-white">
                <Image src={src} alt={isEn ? `Sport puller ${i + 1}` : `Suwak sportowy ${i + 1}`}
                  width={300} height={300}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="20vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Metal Zippers ── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-4 text-white">
            {isEn ? 'Metal Zippers – Y Teeth, Single Polished' : 'Zamki metalowe – zęby Y, polerowane'}
          </h2>
          <p className="font-[Jost] text-gray-400 text-sm leading-relaxed mb-10 max-w-2xl">
            {isEn
              ? 'Traditional in the fashion business, used widely across all fashion segments. Metal teeth can have different finishes and colors — antique brass, antique silver, nickel, black oxide, and more. Metal zippers are our core product.'
              : 'Tradycyjny element w branży modowej. Ząbki typu Y z różnymi wykończeniami i kolorami: antyczne, jasne złoto, różowe złoto, tytanowe, nikiel, aluminiowe. Zamki metalowe to nasz podstawowy produkt — dostarczamy je do producentów z całego świata.'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              `${WP}2025/10/99e556cb-cbb5-4b3b-8ffb-62a669f6142d.jpg`,
              `${WP}2025/10/95981608-02e9-41ea-a53f-69cd290f7fd9.png`,
              `${WP}2025/10/33d7c796-e7e7-43ea-8678-6f9d1520ec61.png`,
              `${WP}2025/10/5dae5067-07db-4732-b372-1cb71d205875.png`,
            ].map((src, i) => (
              <div key={i} className="overflow-hidden group bg-white/5">
                <Image src={src} alt={isEn ? `Metal zipper ${i + 1}` : `Zamek metalowy ${i + 1}`}
                  width={300} height={300}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
