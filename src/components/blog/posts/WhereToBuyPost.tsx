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
    text: 'Dzięki rozbudowanej sieci partnerskiej TAF zapewnia dostęp do szerokiego asortymentu zamków błyskawicznych – nylonowych, żywicznych (plastikowych) i metalowych – a także taśm i suwaków. Nasze produkty są dostępne na zamówienie, abyś mógł szybko i sprawnie realizować swoje projekty.',
  },
  {
    icon: '🎨',
    title: 'Personalizacja na wysokim poziomie',
    text: 'TAF oferuje kompleksowe usługi personalizacji, w tym produkcję suwaków z Twoim logo poprzez współpracę z zaufanymi partnerami. Spersonalizowane elementy wyróżnią Twoje produkty na rynku, zapewniając unikalny branding i profesjonalne wykończenie.',
  },
  {
    icon: '🤝',
    title: 'Elastyczność i wsparcie biznesowe',
    text: 'Jako wiodący dystrybutor w Polsce, TAF oferuje elastyczne warunki współpracy i sprawną logistykę. Nasz doświadczony zespół służy profesjonalnym doradztwem i wsparciem na każdym etapie – od wyboru produktu po dostawę.',
  },
  {
    icon: '🌐',
    title: 'Lokalny partner z globalnymi standardami',
    text: 'TAF łączy atuty lokalnego partnerstwa z dostępem do produktów spełniających globalne standardy jakości. Zapewniamy szybką realizację zamówień oraz kompleksowe wsparcie techniczne i handlowe, kluczowe dla optymalizacji Twojego łańcucha dostaw.',
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
    title: 'Krok 1: Definicja potrzeb i konsultacja',
    text: 'W TAF precyzyjnie określimy Twoje wymagania dotyczące zamków – od typu i rozmiaru po kolor i personalizację suwaka z logo. Nasi doradcy pomogą Ci w wyborze najlepszych rozwiązań.',
  },
  {
    title: 'Krok 2: Proces zamówienia i produkcja',
    text: 'Po akceptacji oferty przystępujemy do szybkiej realizacji zamówienia. Wykorzystujemy nasz własny park maszynowy i farbiarnię do produkcji lub przygotowania gotowych produktów.',
  },
  {
    title: 'Krok 3: Dostawa i pełne wsparcie',
    text: 'Zapewniamy sprawną dostawę zamówionych zamków, często bez dodatkowych kosztów dla większych zamówień. Oferujemy również stałe wsparcie i doradztwo posprzedażowe, abyś zawsze mógł na nas liczyć.',
  },
];

export default function WhereToBuyPost({ locale }: Props) {
  const isEn = locale === 'en';
  const boxes = isEn ? BOXES_EN : BOXES_PL;
  const steps = isEn ? STEPS_EN : STEPS_PL;

  return (
    <div className="prose prose-gray max-w-none font-[Jost]">
      <p>{isEn
        ? 'We at Trims and Fasteners understand that buying zippers wholesale requires a precise understanding of your needs and a trustworthy partner. We provide comprehensive support to optimize your costs and processes.'
        : 'W TAF rozumiemy, że zakup hurtowy zamków błyskawicznych wymaga precyzyjnego określenia potrzeb i zaufanego partnera. Zapewniamy kompleksowe wsparcie, aby zoptymalizować Twoje koszty i procesy.'
      }</p>

      <h2 id="key-aspects">{isEn ? 'Key Aspects of Wholesale Purchasing with Trims and Fasteners' : 'Kluczowe aspekty zakupu hurtowego z Trims and Fasteners'}</h2>
      <p>{isEn
        ? 'To help you optimize costs and efficiency, we assist our clients in precisely defining the following parameters before placing a wholesale order.'
        : 'Aby zapewnić optymalizację kosztów i efektywność, w TAF pomagamy naszym klientom precyzyjnie określić następujące parametry przed złożeniem zamówienia hurtowego. Skorzystaj z naszych wskazówek, aby dokonać najlepszego wyboru.'
      }</p>

      <h3>{isEn ? 'Zipper Type' : 'Typ zamka'}</h3>
      <p>{isEn
        ? 'It is fundamental to specify whether you need a molded plastic (resin), nylon coil, metal, or a specialty zipper (e.g., luxury, waterproof). We offer all these types and will advise on the best solution for optimal functionality and durability.'
        : 'Fundamentalne jest precyzyjne określenie, czy potrzebny jest zamek plastikowy formowany (kostkowy), nylonowy spiralny, metalowy, czy też zamek o specjalnych właściwościach (np. luksusowy, wodoodporny). W TAF oferujemy wszystkie te typy, doradzając w wyborze najlepszego rozwiązania dla Twojego produktu, aby zapewnić optymalną funkcjonalność i trwałość.'
      }</p>

      <h3>{isEn ? 'Size' : 'Rozmiar'}</h3>
      <p>{isEn
        ? 'The zipper size refers to the width of the teeth in millimeters when closed. Lower numbers (e.g., #2, #3) indicate thinner and lighter zippers, while higher numbers (e.g., #8, #10) identify thicker and heavier ones. Typical wholesale sizes are #2, #3, #5, #8, and #10.'
        : 'Rozmiar zamka odnosi się do szerokości ząbków w milimetrach, gdy zamek jest zamknięty. Niższe numery (np. #2, #3) oznaczają cieńsze i lżejsze zamki, podczas gdy wyższe numery (np. #8, #10) identyfikują grubsze i cięższe zamki. Typowe rozmiary hurtowe to #2, #3, #5, #8 i #10. Nasi eksperci pomogą Ci dobrać odpowiedni rozmiar, co jest kluczowe dla prawidłowego działania i estetyki finalnego produktu.'
      }</p>

      <h3>{isEn ? 'Zipper Style' : 'Styl zamka'}</h3>
      <p>{isEn
        ? 'The style defines how the zipper functions. You must choose whether the zipper should be separating at the bottom (like on jackets), closed at the bottom (like on trousers), or a two-way closed zipper. We offer all these variations.'
        : 'Styl określa sposób funkcjonowania zamka. Należy wybrać, czy zamek ma być rozdzielający na dole (jak w kurtkach), zamknięty na dole (jak w spodniach), czy też dwukierunkowy zamknięty. Trims and Fasteners oferuje wszystkie te warianty, aby idealnie dopasować się do funkcjonalności Twojego produktu.'
      }</p>

      <h3>{isEn ? 'Length' : 'Długość'}</h3>
      <p>{isEn
        ? 'For wholesale purchases, you can choose between cut lengths or a continuous chain (long chain on a roll) that can be cut to size. A continuous chain is generally more cost-effective for large projects or custom lengths, offering flexibility and reducing waste.'
        : 'Przy zakupach hurtowych w TAF możesz wybierać między gotowymi, ciętymi długościami a ciągłym łańcuchem (long chain), który jest dostarczany na rolce i może być cięty na wymiar. Ciągły łańcuch jest zazwyczaj bardziej opłacalny dla dużych projektów lub niestandardowych długości, oferując elastyczność i redukcję odpadów.'
      }</p>

      <h3>{isEn ? 'Tape Color' : 'Kolor taśmy'}</h3>
      <p>{isEn
        ? 'The tape is the fabric to which the zipper teeth are attached. We offer a wide range of colors from our standard swatches, and thanks to our in-house dyeing facility, we can custom-dye the tapes to perfectly match your product.'
        : 'Taśma to tkanina, do której przymocowane są ząbki zamka. W Trims and Fasteners oferujemy szeroką gamę kolorów z naszych standardowych wzorników. Dzięki własnej farbiarni jesteśmy w stanie barwić taśmy na zamówienie, aby idealnie dopasować je do Twojego produktu i zapewnić estetyczną spójność.'
      }</p>

      <h3>{isEn ? 'Slider Type' : 'Typ suwaka'}</h3>
      <p>{isEn
        ? 'Sliders can be auto-lock (keep the zipper in place, e.g., on hoodies) or non-locking (allow easy separation, e.g., on bags). We offer metal sliders (stronger) or plastic (corrosion-resistant), with single or double pull tab. Thanks to our in-house foundry, we can manufacture sliders with your logo!'
        : 'Suwaki mogą być blokujące (auto-lock), które utrzymują zamek w miejscu (np. w bluzach), lub nieblokujące (non-locking), które pozwalają na łatwe rozdzielenie zamka (np. w torebkach). Oferujemy suwaki metalowe (mocniejsze) lub plastikowe (odporne na korozję), z pojedynczym lub podwójnym uchwytem. Możemy wykonać suwaki z Twoim logo, wzmacniając wizerunek Twojej marki!'
      }</p>

      <h2 id="why-taf">{isEn ? 'Why Is Trims and Fasteners Your Ideal Wholesale Partner?' : 'Dlaczego TAF to Twój idealny partner hurtowy?'}</h2>
      <p>{isEn
        ? 'At TAF, we combine years of experience with a modern approach to be your comprehensive zipper supplier. By choosing us, you gain:'
        : 'W Trims and Fasteners łączymy wieloletnie doświadczenie z nowoczesnym podejściem, aby być Twoim kompleksowym dostawcą zamków błyskawicznych. Wybierając nas, zyskujesz:'
      }</p>

      <IconBoxGrid boxes={boxes} />

      <h2 id="process">{isEn ? 'Simplified Wholesale Ordering Process with Trims and Fasteners' : 'Uproszczony proces zamawiania hurtowego z Trims and Fasteners'}</h2>
      <p>{isEn
        ? 'We simplify the wholesale purchasing process to ensure a smooth and efficient partnership. Here are three simple steps that lead to success:'
        : 'W TAF upraszczamy proces zakupu hurtowego, zapewniając płynną i efektywną współpracę. Oto trzy proste kroki, które prowadzą do sukcesu:'
      }</p>

      <StepsProcess steps={steps} />
    </div>
  );
}
