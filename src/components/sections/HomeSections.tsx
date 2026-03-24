import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/lib/types';
import { getRecentPosts } from '@/lib/wordpress';
import { formatDate } from '@/lib/utils';

interface HomeSectionsProps {
  locale: Locale;
}

export default async function HomeSections({ locale }: HomeSectionsProps) {
  const base = locale === 'en' ? '' : '/pl';
  const isEn = locale === 'en';

  const recentPosts = await getRecentPosts(locale, 6);

  const typeCategories = [
    {
      label: isEn ? 'Plastic Zippers' : 'Zamki plastikowe',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/plastikowyzielony-1.jpg',
      href: isEn ? `${base}/type-of-zippers/plastic-zippers/` : '/pl/type-of-zippers/plastic-zippers/',
    },
    {
      label: isEn ? 'Nylon Zippers' : 'Zamki nylonowe',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg',
      href: isEn ? `${base}/type-of-zippers/nylon-zippers/` : '/pl/type-of-zippers/nylon-zippers/',
    },
    {
      label: isEn ? 'Metal Zippers' : 'Zamki metalowe',
      img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/metalslider34-scaled.jpg',
      href: isEn ? `${base}/type-of-zippers/metal-zippers/` : '/pl/type-of-zippers/metal-zippers/',
    },
  ];

  const usageCategories = [
    { slug: 'fire-protection', label: isEn ? 'Fire-Resistant Clothing' : 'Odzież ognioodporna', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-9.png', href: `${base}/use-of-zippers/fire-protection/` },
    { slug: 'military', label: isEn ? 'Military' : 'Wojsko', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png', href: `${base}/use-of-zippers/military/` },
    { slug: 'cycling-sportswear', label: isEn ? 'Cycling & Sportswear' : 'Kolarstwo & odzież sportowa', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/zamki-dla-odziezy-sportowej.png', href: `${base}/use-of-zippers/cycling-sportswear/` },
    { slug: 'baby', label: isEn ? 'Baby' : 'Dzieci', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-42.png', href: `${base}/use-of-zippers/baby/` },
    { slug: 'fashion', label: isEn ? 'Fashion' : 'Moda', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-43.png', href: `${base}/use-of-zippers/fashion/` },
    { slug: 'furniture', label: isEn ? 'Furniture' : 'Meble', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-44.png', href: `${base}/use-of-zippers/furniture/` },
    { slug: 'buckles-plastic-hardware', label: isEn ? 'Buckles & Plastic Hardware' : 'Zapięcia & elementy plastikowe', img: 'https://trimsandfasteners.com/wp-content/uploads/2025/09/Projekt-bez-nazwy-79.png', href: `${base}/use-of-zippers/buckles-plastic-hardware/` },
  ];

  return (
    <>
      {/* ── Section 1: Company intro ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="font-[Jost] text-gray-500 text-sm leading-relaxed max-w-4xl">
            {isEn
              ? 'For years, we have been supporting customers in the production of clothing and accessories by providing reliable zippers. As a distributor of zippers, we offer solutions tailored to the needs of the clothing, technical, furniture and outdoor markets. Our range mainly includes products from the renowned YKK company, which is why we are confident in the quality of the products offered by trimsandfasteners.com.'
              : 'Od lat wspieramy klientów w produkcji odzieży i akcesoriów, dostarczając niezawodne zamki błyskawiczne. Jako dystrybutor zamków oferujemy rozwiązania dopasowane do potrzeb rynku odzieżowego, technicznego, meblarskiego i outdoorowego. Nasz asortyment obejmuje głównie produkty renomowanej firmy YKK.'}
          </p>
          <p className="font-[Jost] text-gray-500 text-sm leading-relaxed max-w-4xl">
            {isEn
              ? 'We make easy every trim and fastener order procedure, save time and money for companies. Use our knowledge and streamline your developments. Having big experience in supplying large scale projects and customer development. Always helpful, always listening. Appreciate business relationship with our customers as a key value.'
              : 'Upraszczamy każdy proces zamawiania, oszczędzamy czas i pieniądze firm. Wykorzystaj naszą wiedzę i usprawnij swoje projekty. Posiadamy duże doświadczenie w realizacji dużych projektów i we współpracy z klientami. Zawsze pomocni, zawsze słuchamy.'}
          </p>
        </div>
      </section>

      {/* ── Section 2: Type of Zippers ── */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-3xl sm:text-4xl font-light text-center text-white mb-4">
            {isEn ? 'Types of zippers' : 'Rodzaje zamków'}
          </h2>
          <p className="text-center text-gray-400 font-[Jost] mb-12 max-w-2xl mx-auto text-sm leading-relaxed">
            {isEn
              ? 'Every project requires precise and proven components. That is why our range of zippers includes products that combine quality with functionality. A zipper may be a small detail, but there is no room for compromise in a good design.'
              : 'Każdy projekt wymaga precyzyjnych i sprawdzonych komponentów. Dlatego nasz asortyment zamków obejmuje produkty łączące jakość z funkcjonalnością.'}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {typeCategories.map(cat => (
              <Link key={cat.label} href={cat.href} className="group relative overflow-hidden aspect-[4/3] block">
                <Image src={cat.img} alt={cat.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-[Jost] text-white text-lg font-light">{cat.label}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Types bullet list */}
          <div className="max-w-4xl mx-auto space-y-3">
            <p className="font-[Jost] text-gray-400 text-sm leading-relaxed">
              {isEn
                ? 'At TAF, we offer clothing and accessory manufacturers the following zippers:'
                : 'W TAF oferujemy producentom odzieży i akcesoriów następujące rodzaje zamków:'}
            </p>
            <ul className="space-y-2 font-[Jost] text-gray-400 text-sm">
              <li className="flex gap-2"><span className="text-gray-600 flex-shrink-0">—</span>{isEn ? 'Spiral – lightweight, flexible, ideal for sportswear and children\'s clothing, and industrial applications.' : 'Spiralne – lekkie, elastyczne, idealne do odzieży sportowej i dziecięcej.'}</li>
              <li className="flex gap-2"><span className="text-gray-600 flex-shrink-0">—</span>{isEn ? 'Plastic – durable and versatile, suitable for jackets and accessories, but also for heavy duty applications.' : 'Plastikowe – trwałe i wszechstronne, do kurtek i akcesoriów, również do ciężkich zastosowań.'}</li>
              <li className="flex gap-2"><span className="text-gray-600 flex-shrink-0">—</span>{isEn ? 'Metal – solid, with an elegant appearance, used in premium fashion. Traditional type of zipper.' : 'Metalowe – solidne, eleganckie, stosowane w premium fashion. Tradycyjny typ zamka.'}</li>
            </ul>
            <p className="font-[Jost] text-gray-400 text-sm leading-relaxed pt-2">
              {isEn
                ? 'In addition, we offer complementary components such as sliders and pullers – also available in customised versions with the customer\'s logo. We also supply zipper tapes and special elements, designed for unusual orders and individual customer needs. We supply also raw components for zipper make.'
                : 'Oferujemy również elementy uzupełniające, takie jak suwaki i uchwytki – dostępne w wersjach z logo klienta. Dostarczamy taśmy zamkowe i elementy specjalne, a także surowce do produkcji zamków.'}
            </p>
            <p className="font-[Jost] text-gray-400 text-sm leading-relaxed">
              {isEn
                ? 'We offer a wide range of colours, customized options and technical support for each product group. Our specialists will advise you on how to choose the right type of zipper for your specific application. We work mainly on large scale projects, however also supply small local businesses.'
                : 'Oferujemy szeroką gamę kolorów, opcje personalizacji i wsparcie techniczne dla każdej grupy produktowej. Nasi specjaliści doradzą w doborze odpowiedniego zamka.'}
            </p>
            <p className="font-[Jost] text-gray-400 text-sm leading-relaxed">
              {isEn
                ? 'With a down-to-earth approach, we take care of customers in an exceptional way, making the whole purchase process as easy as possible. Just tell us your demand and we\'ll give the best option for you, let\'s talk!'
                : 'Z praktycznym podejściem dbamy o klientów wyjątkowo, upraszczając cały proces zakupu. Po prostu powiedz nam, czego potrzebujesz!'}
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: Use of Zippers ── */}
      <section className="py-20 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-3xl sm:text-4xl font-light text-center mb-4 text-[#111]">
            {isEn ? 'Use of zip fasteners' : 'Zastosowanie zamków'}
          </h2>
          <p className="text-center text-gray-500 font-[Jost] mb-12 max-w-2xl mx-auto text-sm leading-relaxed">
            {isEn
              ? 'The solutions offered by our company are used by customers from various market sectors who value quality and reliability.'
              : 'Rozwiązania naszej firmy są używane przez klientów z różnych sektorów rynku, ceniących jakość i niezawodność.'}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
            {usageCategories.map(cat => (
              <Link key={cat.slug} href={cat.href} className="group relative overflow-hidden aspect-[4/3] block">
                <Image src={cat.img} alt={cat.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-[Jost] text-white text-sm font-normal leading-tight">{cat.label}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Use text */}
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="font-[Jost] text-gray-500 text-sm leading-relaxed">
              {isEn
                ? 'As an experienced distributor of zipper fasteners, we supply components that meet these requirements 100%. Thanks to TAF, zippers are supplied to manufacturers of everyday, technical and sports clothing, tailors and fashion designers, companies in the upholstery, furniture and outdoor industries, as well as companies sewing backpacks, bags, footwear and other accessories, and military tenders for army uniforms and PPE, tactical gear.'
                : 'Jako doświadczony dystrybutor zamków błyskawicznych dostarczamy komponenty spełniające te wymagania w 100%. Zamki TAF trafiają do producentów odzieży codziennej, technicznej i sportowej, krawców, projektantów mody, firm tapicerskich, meblarskich i outdoorowych, a także firm szyących plecaki, torby, obuwie i inne akcesoria oraz na przetargi wojskowe.'}
            </p>
            <p className="font-[Jost] text-gray-500 text-sm leading-relaxed">
              {isEn
                ? 'We mainly offer YKK zippers, which are also used in specialised military clothing, where reliability and resistance to intensive use are of key importance. What makes us different from many other distributing companies is a high quality technical knowledge and big market experience in zipper fasteners.'
                : 'Oferujemy głównie zamki YKK, stosowane również w specjalistycznej odzieży wojskowej, gdzie niezawodność i odporność na intensywne użytkowanie są kluczowe. Wyróżniamy się wysoką wiedzą techniczną i dużym doświadczeniem rynkowym.'}
            </p>
            <p className="font-[Jost] text-gray-500 text-sm leading-relaxed">
              {isEn
                ? 'Thanks to our wide and flexible range, we are able to meet the needs of a diverse customer base. We fulfil orders requiring high repeatability as well as niche projects requiring an individual approach.'
                : 'Dzięki szerokiej i elastycznej ofercie jesteśmy w stanie zaspokoić potrzeby różnorodnych klientów. Realizujemy zarówno zamówienia wymagające wysokiej powtarzalności, jak i niszowe projekty wymagające indywidualnego podejścia.'}
            </p>
            <Link
              href={isEn ? '/use-of-zippers/' : '/pl/use-of-zippers/'}
              className="inline-block font-[Jost] text-sm text-[#111] border border-[#111] px-6 py-2.5 hover:bg-[#111] hover:text-white transition-colors"
            >
              {isEn ? 'See more' : 'Zobacz więcej'}
            </Link>
            <p className="font-[Jost] text-gray-500 text-sm leading-relaxed pt-2">
              {isEn
                ? 'In our business, we focus on quality at every stage of cooperation. That is why we work exclusively with proven component manufacturers from whom we demand equally reliable solutions. One of the most respected and globally recognised brands we work with is the Japanese company YKK – a benchmark for reliability and precision. Use our knowledge and save your time and money.'
                : 'W naszej działalności skupiamy się na jakości na każdym etapie współpracy. Dlatego pracujemy wyłącznie ze sprawdzonymi producentami komponentów. Jedną z najbardziej szanowanych marek, z którymi współpracujemy, jest japońska firma YKK – wzorzec niezawodności i precyzji.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: Combining Innovation ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[Jost] text-3xl sm:text-4xl font-light mb-6 leading-snug text-[#111]">
                {isEn
                  ? 'Combining Innovation, Passion, and Technological Expertise — Join Us'
                  : 'Łącząc innowację, pasję i wiedzę technologiczną — Dołącz do nas'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'If you are looking for a partner who will provide you with not only a product, but also support and advice, Trims and Fasteners is the right place for you. Our team will help you choose the perfect solutions for your collection or product line. We offer a comprehensive approach – from technical advice and customisation to efficient logistics.'
                    : 'Jeśli szukasz partnera, który zapewni Ci nie tylko produkt, ale także wsparcie i doradztwo, Trims and Fasteners to właściwe miejsce. Nasz zespół pomoże Ci wybrać idealne rozwiązania dla Twojej kolekcji lub linii produktów.'}
                </p>
                <p>
                  {isEn
                    ? 'Together with our customers, we look for the best solutions that will not only meet their expectations but also allow them to stay ahead of the competition. Trust the experience and quality we build every day.'
                    : 'Wspólnie z klientami szukamy najlepszych rozwiązań, które nie tylko spełniają oczekiwania, ale pozwalają wyprzedzać konkurencję. Zaufaj doświadczeniu i jakości, którą budujemy każdego dnia.'}
                </p>
                <p>
                  {isEn
                    ? 'TAF is quality that translates into customer satisfaction and long-term business relationships. Take a look at our full range and see what we can offer you. Our offer is the result of years of experience and close cooperation with customers from various industries. Regardless of the size of your order, we always deliver solutions you can rely on.'
                    : 'TAF to jakość przekładająca się na satysfakcję klientów i długoterminowe relacje biznesowe. Nasza oferta jest wynikiem lat doświadczeń i bliskiej współpracy z klientami z różnych branż. Niezależnie od wielkości zamówienia, zawsze dostarczamy rozwiązania, na których możesz polegać.'}
                </p>
              </div>
              <Link
                href={isEn ? '/contact/' : '/pl/contact/'}
                className="inline-block mt-8 bg-[#111111] text-white font-[Jost] font-normal text-sm px-8 py-3 hover:bg-black transition-colors"
              >
                {isEn ? 'Contact' : 'Kontakt'}
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg"
                alt={isEn ? 'TAF - Trims and Fasteners' : 'TAF - Zamki i dodatki'}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Blog (6 posts) ── */}
      {recentPosts.length > 0 && (
        <section className="py-20 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[Jost] text-3xl sm:text-4xl font-light text-center mb-12 text-[#111]">
              Blog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recentPosts.map(post => {
                const featuredImg = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                const postHref = isEn ? `/blog/${post.slug}/` : `/pl/blog/${post.slug}/`;
                const category = post._embedded?.['wp:term']?.[0]?.[0]?.name;
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
                      {category && (
                        <p className="font-[Jost] text-xs text-gray-400 uppercase tracking-wider mb-1">{category}</p>
                      )}
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
                      <div className="flex items-center justify-between">
                        <Link
                          href={postHref}
                          className="font-[Jost] text-sm font-normal text-[#111] underline underline-offset-2 hover:text-gray-500 transition-colors"
                        >
                          {isEn ? 'Read more >' : 'Czytaj więcej >'}
                        </Link>
                        <time className="font-[Jost] text-xs text-gray-400">
                          {formatDate(post.date, locale)}
                        </time>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <Link
                href={isEn ? '/blog/' : '/pl/blog/'}
                className="inline-block font-[Jost] text-sm text-[#111] border border-[#111] px-8 py-3 hover:bg-[#111] hover:text-white transition-colors"
              >
                {isEn ? 'See more' : 'Zobacz więcej'}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
