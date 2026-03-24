import Image from 'next/image';

const WP = 'https://trimsandfasteners.com/wp-content/uploads/';

interface Props { locale: string; position: 'above' | 'below'; }

export default function FurnitureContent({ locale, position }: Props) {
  const isEn = locale === 'en';
  if (position === 'below') return null;

  return (
    <>
      {/* ── 45-ECH ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">45-ECH</h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'A concealed zipper by YKK with flat elements and a coil woven into the tape. An excellent choice for applications requiring more flexibility than the 5-CC zipper offers.'
                    : 'Zamek kryty produkcji YKK o płaskich elementach oraz spirali wtkanej w taśmę.'}
                </p>
                <p>
                  {isEn
                    ? 'Performs perfectly in concealed applications within the furniture, upholstery, and automotive industries. Provides great flexibility and an excellent concealed connection for a wide variety of materials.'
                    : 'Doskonały wybór do aplikacji wymagających większej elastyczności niż oferowana przez zamek 5-CC. Zamek świetnie sprawdza się w krytych aplikacjach w branży meblowej, tapicerskiej i automotive. Świetna elastyczność i doskonałe kryte połączenie bardzo wielu materiałów.'}
                </p>
                <p className="text-gray-400 text-xs">
                  {isEn
                    ? 'Available as non-separating (closed-end), or as chain tape and sliders sold separately.'
                    : 'Oferujemy ten zamek w wersji nierozdzielnej jak również jako taśma i suwaki.'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[`${WP}2025/09/45ech1.png`, `${WP}2025/09/45ech2.png`].map((src, i) => (
                <div key={i} className="overflow-hidden group bg-gray-50">
                  <Image src={src} alt={`45-ECH zipper ${i + 1}`} width={400} height={400}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-CC ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">5-CC</h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'The strongest concealed zipper for heavy-duty applications. Used in automotive seating and furniture where high closing forces and dimensional stability are required.'
                    : 'Najmocniejszy kryty zamek, do wysoko obciążanych aplikacji. Zastosowanie w siedzeniach samochodowych oraz w meblarstwie.'}
                </p>
                <p className="text-gray-400 text-xs">
                  {isEn
                    ? 'Available as non-separating (closed-end), or as zipper chain and sliders.'
                    : 'Oferujemy zamek w postaci zamka nierozdzielnego lub taśmy zamkowej i suwaków.'}
                </p>
              </div>
            </div>
            <div className="overflow-hidden group bg-white p-4">
              <Image
                src={`${WP}2025/09/5-CC-LONG1.png`}
                alt={isEn ? '5-CC heavy duty zipper' : 'Zamek 5-CC ciężki'}
                width={700} height={400}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5N Flexible Tape ── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-white">
                {isEn ? '5N Flexible Tape' : '5N Taśma elastyczna'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-400 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'Zipper chain that allows for sewing on a curve — excellent for curved applications as well as in places where the construction requires vertical flexibility.'
                    : 'Taśma zamkowa umożliwiająca wszywanie po łuku, doskonała do zakrzywionych aplikacji jak również w miejscach wymagających elastyczności pionowej, wynikających z konstrukcji.'}
                </p>
                <p className="text-gray-500 text-xs">
                  {isEn
                    ? 'We offer it as chain tape and sliders sold separately.'
                    : 'Oferujemy jako taśmę i suwaki.'}
                </p>
              </div>
            </div>
            <div className="overflow-hidden group bg-white/5 p-4">
              <Image
                src={`${WP}2025/09/5nflexibletape.png`}
                alt={isEn ? '5N flexible tape zipper' : 'Zamek 5N taśma elastyczna'}
                width={700} height={400}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
