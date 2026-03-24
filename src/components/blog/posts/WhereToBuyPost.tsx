import { IconBoxGrid, StepsProcess, type IconBox, type Step } from '../BlogWidgets';

interface Props { locale: string }

const BOXES_EN: IconBox[] = [
  {
    icon: '📦',
    title: 'Wide Assortment',
    text: 'Thanks to an extensive partner network, TAF provides access to a wide assortment of zippers—nylon, resin (plastic), and metal—as well as tapes and sliders, available on demand.',
  },
  {
    icon: '⚙️',
    title: 'High-Level Customization',
    text: 'TAF offers comprehensive customization services, including the production of sliders with your logo. These personalized elements will make your products stand out on the market.',
  },
  {
    icon: '🤝',
    title: 'Flexibility and Business Support',
    text: 'TAF offers flexible cooperation terms and efficient logistics. Our experienced team provides professional advice and support at every stage, from product selection to delivery.',
  },
  {
    icon: '🌐',
    title: 'Local Partner with Global Standards',
    text: 'TAF combines the advantages of local partnership with access to products meeting global quality standards. Fast order fulfillment and comprehensive technical and commercial support.',
  },
];

const BOXES_PL: IconBox[] = [
  {
    icon: '📦',
    title: 'Szeroki asortyment',
    text: 'Dzięki rozbudowanej sieci partnerskiej TAF zapewnia dostęp do szerokiego asortymentu zamków — nylonowych, plastikowych i metalowych — a także taśm i suwaków, dostępnych na żądanie.',
  },
  {
    icon: '⚙️',
    title: 'Wysoki poziom personalizacji',
    text: 'TAF oferuje kompleksowe usługi personalizacji, w tym produkcję suwaków z Twoim logo. Te spersonalizowane elementy wyróżnią Twoje produkty na rynku.',
  },
  {
    icon: '🤝',
    title: 'Elastyczność i wsparcie biznesowe',
    text: 'TAF oferuje elastyczne warunki współpracy i sprawną logistykę. Nasz doświadczony zespół zapewnia fachową poradę i wsparcie na każdym etapie — od doboru produktu po dostawę.',
  },
  {
    icon: '🌐',
    title: 'Lokalny partner ze standardami globalnymi',
    text: 'TAF łączy zalety lokalnego partnerstwa z dostępem do produktów spełniających globalne standardy jakości. Szybka realizacja zamówień i kompleksowe wsparcie techniczne i handlowe.',
  },
];

const STEPS_EN: Step[] = [
  {
    title: 'Step 1: Define Your Needs and Consult',
    text: "At TAF, we'll precisely define your zipper requirements—from type and size to color and custom logo sliders. Our advisors will help you choose the best solutions.",
  },
  {
    title: 'Step 2: Order and Production',
    text: "After you accept the quote, we'll quickly move to fulfill the order. We use our own machinery and dyeing facilities to produce or prepare finished products.",
  },
  {
    title: 'Step 3: Delivery and Full Support',
    text: 'We ensure efficient delivery of your ordered zippers, often with no extra charge for larger orders. We also offer ongoing post-sale support and advice.',
  },
];

const STEPS_PL: Step[] = [
  {
    title: 'Krok 1: Określ potrzeby i skonsultuj się',
    text: 'W TAF precyzyjnie określimy Twoje wymagania dotyczące zamków — od typu i rozmiaru po kolor i suwaki z logo. Nasi doradcy pomogą Ci wybrać najlepsze rozwiązania.',
  },
  {
    title: 'Krok 2: Zamówienie i produkcja',
    text: 'Po zaakceptowaniu oferty szybko przystępujemy do realizacji zamówienia. Używamy własnych maszyn i farbiarni do produkcji lub przygotowania gotowych produktów.',
  },
  {
    title: 'Krok 3: Dostawa i pełne wsparcie',
    text: 'Zapewniamy sprawną dostawę zamówionych zamków, często bez dodatkowych opłat dla większych zamówień. Oferujemy też bieżące wsparcie posprzedażowe i doradztwo.',
  },
];

export default function WhereToBuyPost({ locale }: Props) {
  const isEn = locale === 'en';
  const boxes = isEn ? BOXES_EN : BOXES_PL;
  const steps = isEn ? STEPS_EN : STEPS_PL;

  return (
    <div className="prose prose-gray max-w-none font-[Jost] prose-headings:font-[Jost] prose-headings:font-normal">
      <p>{isEn
        ? 'We at Trims and Fasteners understand that buying zippers wholesale requires a precise understanding of your needs and a trustworthy partner. We provide comprehensive support to optimize your costs and processes.'
        : 'W Trims and Fasteners rozumiemy, że zakup hurtowy zamków wymaga precyzyjnego określenia potrzeb i zaufanego partnera. Zapewniamy kompleksowe wsparcie w optymalizacji kosztów i procesów.'
      }</p>

      <h2 id="key-aspects">{isEn ? 'Key Aspects of Wholesale Purchasing with Trims and Fasteners' : 'Kluczowe aspekty zakupu hurtowego w Trims and Fasteners'}</h2>
      <p>{isEn
        ? 'To help you optimize costs and efficiency, we assist our clients in precisely defining the following parameters before placing a wholesale order.'
        : 'Aby pomóc Ci zoptymalizować koszty i efektywność, pomagamy klientom precyzyjnie określić następujące parametry przed złożeniem zamówienia hurtowego.'
      }</p>

      <h3>{isEn ? 'Zipper Type' : 'Typ zamka'}</h3>
      <p>{isEn
        ? 'It is fundamental to specify whether you need a molded plastic (resin), nylon coil, metal, or a specialty zipper (e.g., luxury, waterproof). We offer all these types and will advise on the best solution for optimal functionality and durability.'
        : 'Kluczowe jest określenie, czy potrzebujesz zamka plastikowego (żywicznego), nylonowego spiralnego, metalowego czy specjalistycznego (np. luksusowego, wodoodpornego). Oferujemy wszystkie typy i doradzimy najlepsze rozwiązanie.'
      }</p>

      <h3>{isEn ? 'Size' : 'Rozmiar'}</h3>
      <p>{isEn
        ? 'The zipper size refers to the width of the teeth in millimeters when closed. Lower numbers (e.g., #2, #3) indicate thinner and lighter zippers, while higher numbers (e.g., #8, #10) identify thicker and heavier ones. Typical wholesale sizes are #2, #3, #5, #8, and #10.'
        : 'Rozmiar zamka odnosi się do szerokości zębów w milimetrach w stanie zamkniętym. Niższe numery (np. #2, #3) oznaczają cieńsze i lżejsze zamki, wyższe (np. #8, #10) — grubsze i cięższe. Typowe rozmiary hurtowe to #2, #3, #5, #8 i #10.'
      }</p>

      <h3>{isEn ? 'Zipper Style' : 'Styl zamka'}</h3>
      <p>{isEn
        ? 'The style defines how the zipper functions. You must choose whether the zipper should be separating at the bottom (like on jackets), closed at the bottom (like on trousers), or a two-way closed zipper. We offer all these variations.'
        : 'Styl określa sposób działania zamka. Musisz wybrać: rozdzielany u dołu (jak w kurtkach), zamknięty u dołu (jak w spodniach) lub dwukierunkowy zamknięty. Oferujemy wszystkie te warianty.'
      }</p>

      <h3>{isEn ? 'Length' : 'Długość'}</h3>
      <p>{isEn
        ? 'For wholesale purchases, you can choose between cut lengths or a continuous chain (long chain on a roll) that can be cut to size. A continuous chain is generally more cost-effective for large projects or custom lengths, offering flexibility and reducing waste.'
        : 'Przy zakupach hurtowych możesz wybrać między gotowymi długościami a ciągłą taśmą (rolką), którą można ciąć do rozmiaru. Ciągła taśma jest zazwyczaj bardziej opłacalna dla dużych projektów lub niestandardowych długości.'
      }</p>

      <h3>{isEn ? 'Tape Color' : 'Kolor taśmy'}</h3>
      <p>{isEn
        ? 'The tape is the fabric to which the zipper teeth are attached. We offer a wide range of colors from our standard swatches, and thanks to our in-house dyeing facility, we can custom-dye the tapes to perfectly match your product.'
        : 'Taśma to tkanina, do której przymocowane są zęby zamka. Oferujemy szeroką gamę kolorów ze standardowych wzorników, a dzięki własnej farbiarni możemy farbować taśmy na zamówienie, idealnie dopasowując kolor do Twojego produktu.'
      }</p>

      <h3>{isEn ? 'Slider Type' : 'Typ suwaka'}</h3>
      <p>{isEn
        ? 'Sliders can be auto-lock (keep the zipper in place, e.g., on hoodies) or non-locking (allow easy separation, e.g., on bags). We offer metal sliders (stronger) or plastic (corrosion-resistant), with single or double pull tab. Thanks to our in-house foundry, we can manufacture sliders with your logo!'
        : 'Suwaki mogą być automatyczne (utrzymują zamek w miejscu, np. w bluzach) lub bez blokady (łatwa separacja, np. w torbach). Oferujemy metalowe suwaki (mocniejsze) lub plastikowe (odporne na korozję), z pojedynczym lub podwójnym uchwytem. Dzięki własnej odlewni możemy produkować suwaki z Twoim logo!'
      }</p>

      <h2 id="why-taf">{isEn ? 'Why Is Trims and Fasteners Your Ideal Wholesale Partner?' : 'Dlaczego Trims and Fasteners to Twój idealny partner hurtowy?'}</h2>
      <p>{isEn
        ? 'At TAF, we combine years of experience with a modern approach to be your comprehensive zipper supplier. By choosing us, you gain:'
        : 'W TAF łączymy lata doświadczenia z nowoczesnym podejściem, by być Twoim kompleksowym dostawcą zamków. Wybierając nas, zyskujesz:'
      }</p>

      <IconBoxGrid boxes={boxes} />

      <h2 id="process">{isEn ? 'Simplified Wholesale Ordering Process with Trims and Fasteners' : 'Uproszczony proces zamawiania hurtowego w Trims and Fasteners'}</h2>
      <p>{isEn
        ? 'We simplify the wholesale purchasing process to ensure a smooth and efficient partnership. Here are three simple steps that lead to success:'
        : 'Upraszczamy proces zakupu hurtowego, aby zapewnić płynne i efektywne partnerstwo. Oto trzy proste kroki prowadzące do sukcesu:'
      }</p>

      <StepsProcess steps={steps} />
    </div>
  );
}
