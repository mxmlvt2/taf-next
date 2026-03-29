import Image from 'next/image';

const WP = 'https://trimsandfasteners.com/wp-content/uploads/';

interface Props {
  locale: string;
  position: 'above' | 'below';
}

export default function MetalZippersContent({ locale, position }: Props) {
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
                  {isEn ? 'Characteristics of Metal Zippers' : 'Charakterystyka zamków metalowych'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'Metal zippers are a traditional fastener requiring precision craftsmanship and offering exceptional durability. Teeth are typically made of brass (Y-type), European/Swiss style, or stainless steel.'
                      : 'Zamki metalowe to tradycyjny typ zamków, który wymaga dużej precyzji pod względem jakości, szczególnie w zastosowaniach wymagających dużej wytrzymałości.'}
                  </p>
                  <p>
                    {isEn
                      ? 'The smoothness of the teeth is a key quality indicator. High-quality metal zippers glide effortlessly and maintain their appearance even after years of intensive use — making them the preferred choice for premium fashion and heritage products.'
                      : 'Zęby wykonane są zazwyczaj z mosiądzu z specjalnie profilowanego drutu (zęby typu Y) lub przyłączane jeden po drugim – tzw. zęby europejskie/szwajcarskie lub ząbki polerowane. Oferowane są także zamki z zębami ze stali nierdzewnej.'}
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden group">
                <Image
                  src={`${WP}2025/08/PIAS2361-scaled.jpg`}
                  alt={isEn ? 'Metal zipper close-up' : 'Zamek metalowy z bliska'}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Tooth Style Showcase ── */}
        <section className="py-14 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  img: `${WP}2025/08/white-Photoroom-9-1024x1024.png`,
                  label: isEn ? 'Polished Teeth – Antique Copper' : 'Zęby polerowane – miedź antyczna',
                },
                {
                  img: `${WP}2025/08/white-Photoroom-10-1024x1018.png`,
                  label: isEn ? 'Antique Silver – Standard Y-type' : 'Srebro antyczne – standard typ Y',
                },
                {
                  img: `${WP}2025/08/white-Photoroom-11-1024x1024.png`,
                  label: isEn ? 'Standard Teeth – Light Antique Brass' : 'Zęby standardowe – jasny mosiądz antyczny',
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="overflow-hidden group bg-white p-4 mb-4">
                    <Image
                      src={item.img}
                      alt={item.label}
                      width={400}
                      height={400}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="30vw"
                    />
                  </div>
                  <p className="font-[Jost] text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stainless Steel ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div className="relative overflow-hidden group">
                <Image
                  src={`${WP}2025/08/white-Photoroom-12-1024x967.png`}
                  alt={isEn ? 'Stainless steel zipper' : 'Zamek ze stali nierdzewnej'}
                  width={600}
                  height={567}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn ? 'Stainless Steel Zipper' : 'Zamek ze stali nierdzewnej'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'Stainless steel offers an alternative to brass for industrial laundering applications. Its corrosion resistance makes it ideal for the workwear rental industry where garments undergo frequent, intensive washing cycles.'
                      : 'Zamki z ząbkami ze stali nierdzewnej są bardziej wytrzymałą alternatywą dla ząbków mosiężnych do zastosowania w branżach wymagających prania przemysłowego, np. w odzieży roboczej na wynajem.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Additionally, stainless steel zippers are fully recyclable, making them an environmentally conscious choice aligned with modern sustainability requirements in workwear supply chains.'
                      : 'Stal nierdzewna jest odporna na pranie przemysłowe, umożliwiając użycie w ubraniach wymagających takiego procesu. Materiał jest w pełni recyclingowalny, wspierając prosty proces odzyskiwania materiałów.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // position === 'below' — nothing extra for metal (FAQ handles it)
  return null;
}
