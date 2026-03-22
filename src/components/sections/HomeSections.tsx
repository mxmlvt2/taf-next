import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/lib/types';

interface HomeSectionsProps {
  locale: Locale;
}

export default function HomeSections({ locale }: HomeSectionsProps) {
  const base = locale === 'en' ? '' : '/pl';
  const isEn = locale === 'en';

  const usageCategories = [
    {
      slug: isEn ? 'fashion' : 'moda',
      label: isEn ? 'Fashion' : 'Moda',
      desc: isEn ? 'Premium zippers for fashion & haute couture' : 'Zamki premium dla mody i haute couture',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/moda-kategoria.jpg',
      href: isEn ? `${base}/use-of-zippers/fashion/` : '/pl/zastosowanie-zamkow/moda/',
    },
    {
      slug: isEn ? 'cycling-sportswear' : 'odziez-sportowa',
      label: isEn ? 'Cycling & Sportswear' : 'Kolarstwo & odzież sportowa',
      desc: isEn ? 'High-performance zippers for sportswear' : 'Zamki wysokiej wydajności do odzieży sportowej',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/sport-kategoria.jpg',
      href: isEn ? `${base}/use-of-zippers/cycling-sportswear/` : '/pl/zastosowanie-zamkow/odziez-sportowa/',
    },
    {
      slug: isEn ? 'baby' : 'dzieci',
      label: isEn ? 'Baby' : 'Dzieci',
      desc: isEn ? 'Safe, soft zippers for baby clothing' : 'Bezpieczne, miękkie zamki do odzieży dziecięcej',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/dzieci-kategoria.jpg',
      href: isEn ? `${base}/use-of-zippers/baby/` : '/pl/zastosowanie-zamkow/dzieci/',
    },
    {
      slug: isEn ? 'military' : 'wojsko',
      label: isEn ? 'Military' : 'Wojsko',
      desc: isEn ? 'Tactical zippers for military gear' : 'Zamki taktyczne dla sprzętu wojskowego',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/wojsko-kategoria.jpg',
      href: isEn ? `${base}/use-of-zippers/military/` : '/pl/zastosowanie-zamkow/wojsko/',
    },
    {
      slug: isEn ? 'furniture' : 'meble',
      label: isEn ? 'Furniture' : 'Meble',
      desc: isEn ? 'Concealed zippers for upholstery' : 'Ukryte zamki do tapicerki',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/meble-kategoria.jpg',
      href: isEn ? `${base}/use-of-zippers/furniture/` : '/pl/zastosowanie-zamkow/meble/',
    },
    {
      slug: isEn ? 'fire-protection' : 'odziez-ognioodporna',
      label: isEn ? 'Fire Protection' : 'Odzież ognioodporna',
      desc: isEn ? 'Flame-retardant certified zippers' : 'Zamki trudnopalne z certyfikatem',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/ogien-kategoria.jpg',
      href: isEn ? `${base}/use-of-zippers/fire-protection/` : '/pl/zastosowanie-zamkow/odziez-ognioodporna/',
    },
  ];

  const typeCategories = [
    {
      label: isEn ? 'Nylon Zippers' : 'Zamki nylonowe',
      desc: isEn ? 'Flexible coil zippers for every application' : 'Elastyczne zamki spiralne do każdego zastosowania',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/nylon-kategoria.jpg',
      href: isEn ? `${base}/type-of-zippers/nylon-zippers/` : '/pl/rodzaje-zamkow/zamki-nylonowe/',
    },
    {
      label: isEn ? 'Plastic Zippers' : 'Zamki plastikowe',
      desc: isEn ? 'Durable molded Delrin zippers' : 'Trwałe zamki kostkowe Delrin',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/plastik-kategoria.jpg',
      href: isEn ? `${base}/type-of-zippers/plastic-zippers/` : '/pl/rodzaje-zamkow/zamki-plastikowe/',
    },
    {
      label: isEn ? 'Metal Zippers' : 'Zamki metalowe',
      desc: isEn ? 'Premium metal zippers for fashion & workwear' : 'Zamki metalowe premium do mody i odzieży roboczej',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/metal-kategoria.jpg',
      href: isEn ? `${base}/type-of-zippers/metal-zippers/` : '/pl/rodzaje-zamkow/zamki-metalowe/',
    },
  ];

  return (
    <>
      {/* Use of Zippers section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-3xl sm:text-4xl font-normal text-center mb-3">
            {isEn ? 'Use of Zippers' : 'Zastosowanie zamków'}
          </h2>
          <p className="text-center text-gray-500 font-[Jost] mb-12 max-w-xl mx-auto">
            {isEn
              ? 'Specialized zipper solutions for every industry'
              : 'Specjalistyczne rozwiązania dla każdej branży'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {usageCategories.map(cat => (
              <Link
                key={cat.slug}
                href={cat.href}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] block"
              >
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-[Jost] text-white text-xl font-medium mb-1">{cat.label}</h3>
                  <p className="font-[Jost] text-white/70 text-sm">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={isEn ? '/use-of-zippers/' : '/pl/zastosowanie-zamkow/'}
              className="inline-block border border-gray-300 text-gray-700 font-[Jost] font-medium text-sm px-6 py-3 rounded-lg hover:border-black hover:text-black transition-colors"
            >
              {isEn ? 'See all applications' : 'Zobacz wszystkie zastosowania'}
            </Link>
          </div>
        </div>
      </section>

      {/* Type of Zippers section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-3xl sm:text-4xl font-normal text-center mb-3">
            {isEn ? 'Type of Zippers' : 'Rodzaje zamków'}
          </h2>
          <p className="text-center text-gray-500 font-[Jost] mb-12 max-w-xl mx-auto">
            {isEn
              ? 'Nylon, plastic and metal zippers for any project'
              : 'Zamki nylonowe, plastikowe i metalowe do każdego projektu'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {typeCategories.map(cat => (
              <Link
                key={cat.label}
                href={cat.href}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] block"
              >
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-[Jost] text-white text-xl font-medium mb-1">{cat.label}</h3>
                  <p className="font-[Jost] text-white/70 text-sm">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why TAF section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[Jost] text-3xl sm:text-4xl font-normal mb-4">
            {isEn ? 'Why TAF?' : 'Dlaczego TAF?'}
          </h2>
          <p className="font-[Jost] text-white/70 max-w-2xl mx-auto mb-12">
            {isEn
              ? 'Business of our customers is important for us. It gives us opportunity to develop together and streamline logistics processes. B2B is a native language for us.'
              : 'Biznes naszych klientów jest dla nas ważny. Daje nam to możliwość wspólnego rozwoju i usprawnienia procesów logistycznych. B2B to nasz język.'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            {[
              {
                title: isEn ? 'YKK Distributor' : 'Dystrybutor YKK',
                desc: isEn ? 'Authorized distributor of YKK — the world\'s leading zipper manufacturer' : 'Autoryzowany dystrybutor YKK — wiodącego producenta zamków na świecie',
              },
              {
                title: isEn ? 'Custom Solutions' : 'Rozwiązania na zamówienie',
                desc: isEn ? 'Custom colors, finishes, and logos for your brand' : 'Własne kolory, wykończenia i logo dla Twojej marki',
              },
              {
                title: isEn ? 'Fast Delivery' : 'Szybka dostawa',
                desc: isEn ? 'Stock and just-in-time delivery across Europe' : 'Dostawa z magazynu i just-in-time na terenie Europy',
              },
            ].map(item => (
              <div key={item.title} className="border border-white/10 rounded-xl p-6">
                <h3 className="font-[Jost] text-lg font-medium mb-2">{item.title}</h3>
                <p className="font-[Jost] text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href={isEn ? '/contact/' : '/pl/kontakt/'}
              className="inline-block bg-white text-black font-[Jost] font-medium text-sm px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isEn ? 'Contact us' : 'Skontaktuj się'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
