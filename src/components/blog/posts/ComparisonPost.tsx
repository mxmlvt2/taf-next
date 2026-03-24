import { ZipperTabs, type TabData } from '../BlogWidgets';

interface Props { locale: string }

const TABS_EN: TabData[] = [
  {
    label: 'Metal',
    title: 'Metal zippers',
    description: 'Made with polished metal teeth (brass, nickel, aluminum). They are synonymous with exceptional strength and durability. They offer a classic, elegant look, often serving as a decorative element.',
    pros: ['Highest durability, ability to repair individual teeth.', 'High-class appearance.'],
    cons: ['Heavy, not very flexible, susceptible to corrosion.'],
    applications: 'Jeans, workwear, footwear, heavy luggage, upholstery.',
    durability: 'Very high', flexibility: 'Low', weight: 'High', cost: '$$$',
  },
  {
    label: 'Plastic',
    title: 'Plastic zippers',
    description: 'The teeth, made of plastic (e.g., Acetal), are injection-molded directly onto the tape. They are characterized by high durability and resistance to weather conditions, including saltwater and UV radiation.',
    pros: ['Resistant to corrosion and chemicals, lightweight.', 'Available in a wide range of vibrant colors.'],
    cons: ['Stiffer than nylon zippers; a damaged tooth requires replacing the entire zipper.'],
    applications: 'Outdoor gear, sportswear, jackets, backpacks.',
    durability: 'High', flexibility: 'Medium', weight: 'Low', cost: '$$',
  },
  {
    label: 'Nylon',
    title: 'Nylon zippers',
    description: 'The teeth are a continuous nylon coil sewn onto the tape. They are exceptionally flexible and lightweight, making them an ideal choice for projects with curves.',
    pros: ['Very flexible, lightweight, "self-healing" function.', 'High resistance to horizontal tearing.'],
    cons: ['The sewing thread can degrade from UV exposure, susceptible to contamination.'],
    applications: 'Lightweight apparel, handbags, luggage, tents, knitwear.',
    durability: 'Medium', flexibility: 'Very high', weight: 'Very low', cost: '$',
  },
];

const TABS_PL: TabData[] = [
  {
    label: 'Metalowe',
    title: 'Zamki metalowe',
    description: 'Wykonane z polerowanych metalowych zębów (mosiądz, nikiel, aluminium). Synonimy wyjątkowej wytrzymałości i trwałości. Oferują klasyczny, elegancki wygląd, często pełniąc rolę ozdoby.',
    pros: ['Najwyższa trwałość, możliwość naprawy pojedynczych zębów.', 'Wysokiej klasy wygląd.'],
    cons: ['Ciężkie, mało elastyczne, podatne na korozję.'],
    applications: 'Jeansy, odzież robocza, obuwie, ciężkie bagaże, tapicerka.',
    durability: 'Bardzo wysoka', flexibility: 'Niska', weight: 'Wysoka', cost: '$$$',
  },
  {
    label: 'Plastikowe',
    title: 'Zamki plastikowe',
    description: 'Zęby, wykonane z plastiku (np. Acetalu), są wtryskiwane bezpośrednio na taśmę. Charakteryzują się wysoką trwałością i odpornością na warunki atmosferyczne, w tym słoną wodę i promieniowanie UV.',
    pros: ['Odporne na korozję i chemikalia, lekkie.', 'Dostępne w szerokiej gamie żywych kolorów.'],
    cons: ['Sztywniejsze niż zamki nylonowe; uszkodzony ząb wymaga wymiany całego zamka.'],
    applications: 'Sprzęt outdoorowy, odzież sportowa, kurtki, plecaki.',
    durability: 'Wysoka', flexibility: 'Średnia', weight: 'Niska', cost: '$$',
  },
  {
    label: 'Nylonowe',
    title: 'Zamki nylonowe',
    description: 'Zęby to ciągła spirala nylonowa zszyta na taśmie. Są wyjątkowo elastyczne i lekkie, co czyni je idealnym wyborem do projektów z krzywymi liniami.',
    pros: ['Bardzo elastyczne, lekkie, funkcja "samoleczenia".', 'Wysoka odporność na poziome rozrywanie.'],
    cons: ['Nici do zszywania mogą degradować się pod wpływem UV, podatne na zabrudzenia.'],
    applications: 'Lekka odzież, torebki, bagaże, namioty, dzianiny.',
    durability: 'Średnia', flexibility: 'Bardzo wysoka', weight: 'Bardzo niska', cost: '$',
  },
];

export default function ComparisonPost({ locale }: Props) {
  const isEn = locale === 'en';
  const tabs = isEn ? TABS_EN : TABS_PL;

  return (
    <div className="prose prose-gray max-w-none font-[Jost] prose-headings:font-[Jost] prose-headings:font-normal">
      <p>{isEn
        ? "The zipper's mechanism is a relatively simple concept, yet it's a complex component because its performance depends on the material it's made from. The three main types of zippers—metal, plastic (molded), and nylon (coil)—differ in their construction, performance, and application."
        : 'Mechanizm zamka błyskawicznego jest stosunkowo prostą koncepcją, ale to złożony komponent, ponieważ jego właściwości zależą od materiału, z którego jest wykonany. Trzy główne typy zamków — metalowe, plastikowe (formowane) i nylonowe (spiralne) — różnią się budową, osiągami i zastosowaniem.'
      }</p>

      <h2 id="characteristics">{isEn ? 'Characteristics, Advantages, and Applications' : 'Charakterystyka, zalety i zastosowania'}</h2>

      <h3>{isEn ? 'Metal Zippers' : 'Zamki metalowe'}</h3>
      <p>{isEn
        ? "Metal zippers feature polished teeth made from metal like brass, nickel, or aluminum, which are clamped onto the zipper tape. They are the oldest type of zipper. Their primary advantage is exceptional durability and longevity, making them ideal for applications that require high resistance to stress and intensive washing. If a single tooth is damaged, metal zippers can often be repaired. Additionally, they offer a classic, high-end look that can serve as a decorative element."
        : 'Zamki metalowe mają polerowane zęby z mosiądzu, niklu lub aluminium, zaciskane na taśmie. Są najstarszym typem zamka. Ich główną zaletą jest wyjątkowa trwałość i długowieczność. W razie uszkodzenia pojedynczego zęba zamki metalowe można często naprawić. Oferują klasyczny, luksusowy wygląd mogący pełnić funkcję ozdobną.'
      }</p>

      <h3>{isEn ? 'Plastic Zippers' : 'Zamki plastikowe'}</h3>
      <p>{isEn
        ? 'Plastic zippers, also known as molded zippers, are characterized by teeth that are injection-molded directly onto the zipper tape. The materials used to mold the teeth are most often POM—polyacetal resin—which gives them strength and durability. A key advantage of plastic zippers is their robustness and practical resistance to weather conditions. They are highly resistant to saltwater, chemicals, extreme temperatures, and UV radiation, making them a popular choice for outdoor and marine applications.'
        : 'Zamki plastikowe, znane jako zamki formowane, mają zęby wtryskiwane bezpośrednio na taśmę. Materiałem najczęściej stosowanym jest POM — żywica poliacetalowa — nadająca im wytrzymałość. Kluczową zaletą jest odporność na warunki atmosferyczne: słoną wodę, chemikalia, ekstremalne temperatury i promieniowanie UV. Popularne w zastosowaniach outdoorowych.'
      }</p>

      <h3>{isEn ? 'Nylon Zippers' : 'Zamki nylonowe'}</h3>
      <p>{isEn
        ? 'Nylon zippers, often called coil zippers, feature coil-shaped teeth made from nylon or polyester filament, sewn onto the side tape. This construction makes them exceptionally flexible and lightweight. They have a "self-healing" ability—if a tooth is skipped, you can often correct the problem by moving the slider back and forth. They show strong horizontal tear resistance and are inherently more wind- and water-resistant than molded zippers.'
        : 'Zamki nylonowe, zwane spiralnymi, mają zęby w kształcie spirali z nylonu lub poliestru, zszyte na taśmie. Konstrukcja ta czyni je wyjątkowo elastycznymi i lekkimi. Posiadają zdolność "samoleczenia". Wykazują silną odporność na poziome rozrywanie i są bardziej wiatroszczelne od zamków formowanych.'
      }</p>

      <h2 id="comparison">{isEn ? 'Zipper Material Comparison' : 'Porównanie materiałów zamków'}</h2>
      <p>{isEn
        ? 'Choosing the right material is a key decision that affects a product\'s durability, appearance, and functionality. Select the zipper type below to see characteristics and compare properties.'
        : 'Wybór odpowiedniego materiału to kluczowa decyzja wpływająca na trwałość, wygląd i funkcjonalność produktu. Wybierz typ zamka poniżej, aby zobaczyć charakterystykę i porównać właściwości.'
      }</p>

      <ZipperTabs tabs={tabs} locale={locale} />

      <h2 id="disadvantages">{isEn ? 'The Most Common Disadvantages' : 'Najczęstsze wady'}</h2>

      <h3>{isEn ? 'Metal Zippers' : 'Zamki metalowe'}</h3>
      <p>{isEn
        ? 'Despite their advantages, metal zippers have certain limitations. They are prone to corrosion, especially in marine or humid environments. They are also significantly heavier than their plastic counterparts—a factor to consider in apparel projects to avoid weighing down light fabrics. Their rigidity makes them less flexible and can cause them to seize up. Shortening metal zippers requires specialized tools.'
        : 'Pomimo zalet zamki metalowe mają ograniczenia. Są podatne na korozję, szczególnie w środowiskach morskich lub wilgotnych. Są znacznie cięższe od plastikowych — ważny czynnik w lekkich tkaninach. Ich sztywność powoduje mniejszą elastyczność i możliwe zacięcia. Skracanie wymaga specjalistycznych narzędzi.'
      }</p>

      <h3>{isEn ? 'Plastic Zippers' : 'Zamki plastikowe'}</h3>
      <p>{isEn
        ? 'The main drawback is that a damaged tooth usually means the entire zipper needs to be replaced. They are also stiffer than coil zippers, which makes them better suited for straight applications. They are commonly used in outdoor gear, sportswear, luggage, jackets, backpacks, and coolers.'
        : 'Główną wadą jest to, że uszkodzony ząb zazwyczaj oznacza konieczność wymiany całego zamka. Są też sztywniejsze od zamków spiralnych. Stosowane powszechnie w sprzęcie outdoorowym, odzieży sportowej, bagażach i kurtkach.'
      }</p>

      <h3>{isEn ? 'Nylon Zippers' : 'Zamki nylonowe'}</h3>
      <p>{isEn
        ? 'A disadvantage of nylon zippers is that the polyester threads used to sew the teeth can degrade from UV exposure, which requires covering the zipper in outdoor projects. Furthermore, their coil design is more prone to collecting dust and debris, which can lead to premature wear without proper cleaning and lubrication.'
        : 'Wadą zamków nylonowych jest to, że nici poliuretanowe mogą degradować się pod wpływem UV — wymaga to osłonięcia zamka w projektach outdoorowych. Ponadto ich spiralna budowa jest bardziej podatna na zbieranie kurzu i brudu, co bez odpowiedniej pielęgnacji przyspiesza zużycie.'
      }</p>
    </div>
  );
}
