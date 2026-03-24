import Image from 'next/image';

const WP = 'https://trimsandfasteners.com/wp-content/uploads/';

interface Props {
  locale: string;
  position: 'above' | 'below';
}

export default function CyclingSportswearContent({ locale, position }: Props) {
  const isEn = locale === 'en';

  if (position === 'above') {
    return (
      <>
        {/* ── Intro ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn
                    ? 'Nylon Zippers for Cycling & Sportswear'
                    : 'Zamki nylonowe do odzieży kolarskiej i sportowej'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'We have extensive experience in supplying a variety of zippers to sportswear manufacturers. Sportswear, especially cycling apparel, is an incredibly demanding market — zippers must be lightweight, aerodynamic, durable, and reliable across thousands of open-close cycles.'
                      : 'Mamy długie doświadczenie w dostarczaniu różnego rodzaju zamków błyskawicznych dla producentów odzieży kolarskiej. Branża ubioru kolarskiego wymaga funkcjonalności, niskiej wagi, aerodynamiki i niezawodności każdego komponentu.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Regardless of whether you are creating professional apparel for competitive athletes or enthusiast cycling collections, we offer both innovative solutions and the best deals on standard zippers — with full technical support at every stage.'
                      : 'Doskonale znamy tę branżę i możemy zaoferować zarówno innowacyjne rozwiązania, jak i najlepsze oferty na standardowe zamki błyskawiczne — z pełnym wsparciem technicznym na każdym etapie współpracy.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Key requirements we address: smooth glide at high speed, minimal wind resistance profile, corrosion resistance from sweat exposure, and compatibility with stretch fabrics.'
                      : 'Kluczowe wymagania, które spełniamy: płynne działanie, minimalny profil oporu wiatru, odporność na korozję od potu oraz kompatybilność z tkaninami elastycznymi.'}
                  </p>
                </div>
              </div>
              <div className="overflow-hidden group">
                <Image
                  src={`${WP}2025/06/nylonsportswear.jpg`}
                  alt={isEn ? 'Cycling sportswear nylon zipper' : 'Zamek nylonowy do odzieży kolarskiej'}
                  width={800}
                  height={600}
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

  return null;
}
