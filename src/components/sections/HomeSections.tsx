import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/lib/types';
import { getRecentPosts } from '@/lib/wordpress';

interface HomeSectionsProps {
  locale: Locale;
}

export default async function HomeSections({ locale }: HomeSectionsProps) {
  const base = locale === 'en' ? '' : '/pl';
  const isEn = locale === 'en';

  // Fetch recent blog posts server-side
  const recentPosts = await getRecentPosts(locale, 3);

  const typeCategories = [
    {
      label: isEn ? 'Plastic Zippers' : 'Zamki plastikowe',
      desc: isEn ? 'Durable molded Delrin zippers' : 'Trwałe zamki kostkowe Delrin',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/plastikowyzielony-1.jpg',
      href: isEn ? `${base}/type-of-zippers/plastic-zippers/` : '/pl/rodzaje-zamkow/zamki-plastikowe/',
    },
    {
      label: isEn ? 'Nylon Zippers' : 'Zamki nylonowe',
      desc: isEn ? 'Flexible coil zippers for every application' : 'Elastyczne zamki spiralne do każdego zastosowania',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg',
      href: isEn ? `${base}/type-of-zippers/nylon-zippers/` : '/pl/rodzaje-zamkow/zamki-nylonowe/',
    },
    {
      label: isEn ? 'Metal Zippers' : 'Zamki metalowe',
      desc: isEn ? 'Premium metal zippers for fashion & workwear' : 'Zamki metalowe premium do mody i odzieży roboczej',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/metalslider34-scaled.jpg',
      href: isEn ? `${base}/type-of-zippers/metal-zippers/` : '/pl/rodzaje-zamkow/zamki-metalowe/',
    },
  ];

  const usageCategories = [
    {
      slug: isEn ? 'fire-protection' : 'odziez-ognioodporna',
      label: isEn ? 'Fire-Resistant Clothing' : 'Odzież ognioodporna',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-9.png',
      href: isEn ? `${base}/use-of-zippers/fire-protection/` : '/pl/zastosowanie-zamkow/odziez-ognioodporna/',
    },
    {
      slug: isEn ? 'military' : 'wojsko',
      label: isEn ? 'Military' : 'Wojsko',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png',
      href: isEn ? `${base}/use-of-zippers/military/` : '/pl/zastosowanie-zamkow/wojsko/',
    },
    {
      slug: isEn ? 'cycling-sportswear' : 'odziez-sportowa',
      label: isEn ? 'Cycling & Sportswear' : 'Kolarstwo & odzież sportowa',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/zamki-dla-odziezy-sportowej.png',
      href: isEn ? `${base}/use-of-zippers/cycling-sportswear/` : '/pl/zastosowanie-zamkow/odziez-sportowa/',
    },
    {
      slug: isEn ? 'baby' : 'dzieci',
      label: isEn ? 'Baby' : 'Dzieci',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-42.png',
      href: isEn ? `${base}/use-of-zippers/baby/` : '/pl/zastosowanie-zamkow/dzieci/',
    },
    {
      slug: isEn ? 'fashion' : 'moda',
      label: isEn ? 'Fashion' : 'Moda',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-43.png',
      href: isEn ? `${base}/use-of-zippers/fashion/` : '/pl/zastosowanie-zamkow/moda/',
    },
    {
      slug: isEn ? 'furniture' : 'meble',
      label: isEn ? 'Furniture' : 'Meble',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-44.png',
      href: isEn ? `${base}/use-of-zippers/furniture/` : '/pl/zastosowanie-zamkow/meble/',
    },
    {
      slug: isEn ? 'buckles-plastic-hardware' : 'zapiecia-elementy-plastikowe',
      label: isEn ? 'Buckles & Plastic Hardware' : 'Zapięcia & elementy plastikowe',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/09/Projekt-bez-nazwy-79.png',
      href: isEn ? `${base}/use-of-zippers/buckles-plastic-hardware/` : '/pl/zastosowanie-zamkow/zapiecia-elementy-plastikowe/',
    },
  ];

  return (
    <>
      {/* ── Section 1: Company intro text ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-[Jost] text-gray-500 text-sm leading-relaxed max-w-3xl">
            {isEn
              ? 'For years we have been supporting customers in the production of clothing and accessories, delivering reliable zippers as well as zipper tapes and sliders. As a distributor of zippers, we offer solutions tailored to the needs of the clothing, technical, furniture and outdoor markets. We mainly carry products from the renowned YKK company and the best alternatives.'
              : 'Od lat wspieramy klientów w produkcji odzieży i akcesoriów, dostarczając niezawodne zamki błyskawiczne, jak również taśmy zamkowe i suwaki. Jako dystrybutor zamków błyskawicznych, oferujemy rozwiązania dopasowane do potrzeb rynków odzieżowego, technicznego, meblowego oraz outdoorowego. W naszym asortymencie posiadamy głównie produkty renomowanej firmy YKK oraz najlepsze zamienniki.'}
          </p>
        </div>
      </section>

      {/* ── Section 2: Type of Zippers (dark background) ── */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-3xl sm:text-4xl font-light text-center text-white mb-3">
            {isEn ? 'Types of zippers' : 'Rodzaje zamków'}
          </h2>
          <p className="text-center text-gray-500 font-[Jost] mb-12 max-w-xl mx-auto text-sm">
            {isEn
              ? 'Nylon, plastic and metal zippers for any project'
              : 'Zamki nylonowe, plastikowe i metalowe do każdego projektu'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {typeCategories.map(cat => (
              <Link
                key={cat.label}
                href={cat.href}
                className="group relative overflow-hidden aspect-[4/3] block"
              >
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-[Jost] text-white text-lg font-light">{cat.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2b: Zipper types text bridge ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-[Jost] text-gray-500 text-sm leading-relaxed max-w-3xl">
            {isEn
              ? 'For each product group we ensure colour variety, personalisation options and technical support. Our specialists will advise you on how to choose the right type of zipper for a specific application. We serve both large brands and local manufacturers, guaranteeing quality regardless of the scale of the order.'
              : 'Dla każdej grupy produktowej zapewniamy różnorodność kolorystyczną, opcje personalizacji oraz wsparcie techniczne. Nasi specjaliści doradzą, jak dobrać odpowiedni typ zamka do konkretnego zastosowania. Obsługujemy zarówno duże marki, jak i lokalnych producentów, gwarantując jakość niezależnie od skali zamówienia.'}
          </p>
        </div>
      </section>

      {/* ── Section 3: Use of Zippers (cream/off-white background) ── */}
      <section className="py-20 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-3xl sm:text-4xl font-light text-center mb-3 text-[#111]">
            {isEn ? 'Use of zip fasteners' : 'Zastosowanie zamków'}
          </h2>
          <p className="text-center text-gray-500 font-[Jost] mb-12 max-w-xl mx-auto text-sm">
            {isEn
              ? 'Specialized zipper solutions for every industry'
              : 'Specjalistyczne rozwiązania dla każdej branży'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {usageCategories.map(cat => (
              <Link
                key={cat.slug}
                href={cat.href}
                className="group relative overflow-hidden aspect-[4/3] block"
              >
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-[Jost] text-white text-sm font-normal leading-tight">{cat.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Company / About ("Combining Innovation...") ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <h2 className="font-[Jost] text-3xl sm:text-4xl font-light mb-6 leading-snug text-[#111]">
                {isEn
                  ? 'Combining Innovation, Passion, and Technological Expertise - Join Us'
                  : 'Łącząc innowację, pasję i wiedzę technologiczną - Dołącz do nas'}
              </h2>
              <p className="font-[Jost] text-gray-500 text-sm leading-relaxed mb-4">
                {isEn
                  ? 'For years, we have been supporting customers in the production of clothing and accessories by providing reliable zippers. As a distributor of zippers, we offer solutions tailored to the needs of the clothing, technical, furniture and outdoor markets.'
                  : 'Od lat wspieramy klientów w produkcji odzieży i akcesoriów, dostarczając niezawodne zamki. Jako dystrybutor zamków oferujemy rozwiązania dostosowane do potrzeb rynku odzieżowego, technicznego, meblarskiego i outdoorowego.'}
              </p>
              <p className="font-[Jost] text-gray-500 text-sm leading-relaxed mb-8">
                {isEn
                  ? 'If you are looking for a partner who will provide you with not only a product, but also support and advice, Trims and Fasteners is the right place for you.'
                  : 'Jeśli szukasz partnera, który zapewni Ci nie tylko produkt, ale także wsparcie i doradztwo, Trims and Fasteners to właściwe miejsce dla Ciebie.'}
              </p>
              <Link
                href={isEn ? '/about-us/' : '/pl/o-nas/'}
                className="inline-block bg-[#111111] text-white font-[Jost] font-normal text-sm px-8 py-3 hover:bg-black transition-colors"
              >
                {isEn ? 'About us' : 'O nas'}
              </Link>
            </div>
            {/* Right: image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg"
                alt={isEn ? 'TAF - Trims and Fasteners' : 'TAF - Zamki i dodatki'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Blog ── */}
      {recentPosts.length > 0 && (
        <section className="py-20 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[Jost] text-3xl sm:text-4xl font-light text-center mb-12 text-[#111]">
              Blog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recentPosts.map(post => {
                const featuredImg = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                const postHref = isEn
                  ? `/blog/${post.slug}/`
                  : `/pl/blog/${post.slug}/`;
                const dateStr = new Date(post.date).toLocaleDateString(
                  isEn ? 'en-GB' : 'pl-PL',
                  { year: 'numeric', month: 'long', day: 'numeric' }
                );
                return (
                  <article key={post.id} className="bg-white overflow-hidden hover:shadow-md transition-shadow">
                    {featuredImg && (
                      <Link href={postHref} className="block relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={featuredImg}
                          alt={post.title.rendered}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </Link>
                    )}
                    <div className="p-5">
                      <p className="font-[Jost] text-xs text-gray-400 mb-2">{dateStr}</p>
                      <h3 className="font-[Jost] text-base font-normal text-[#111] mb-2 leading-snug">
                        <Link href={postHref} className="hover:text-gray-600 transition-colors">
                          {post.title.rendered}
                        </Link>
                      </h3>
                      <div
                        className="font-[Jost] text-sm text-gray-500 line-clamp-3 mb-4"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 120) + '…',
                        }}
                      />
                      <Link
                        href={postHref}
                        className="font-[Jost] text-sm font-normal text-[#111] underline underline-offset-2 hover:text-gray-500 transition-colors"
                      >
                        {isEn ? 'Read more' : 'Czytaj więcej'}
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
