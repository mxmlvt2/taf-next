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
    description: 'Wykonane z polerowanych ząbków metalowych (mosiądz, nikiel, aluminium). Są synonimem wyjątkowej wytrzymałości i trwałości. Oferują klasyczny, elegancki wygląd, często stanowiąc element dekoracyjny.',
    pros: ['Najwyższa trwałość, możliwość naprawy pojedynczych ząbków.', 'Wysokiej klasy wygląd.'],
    cons: ['Ciężkie, mało elastyczne, podatne na korozję.'],
    applications: 'Jeansy, odzież robocza, obuwie, ciężki bagaż, tapicerka.',
    durability: 'Bardzo wysoka', flexibility: 'Niska', weight: 'Wysoka', cost: '$$$',
  },
  {
    label: 'Plastikowe',
    title: 'Zamki plastikowe',
    description: 'Ząbki z tworzywa (np. Acetal) są wtryskiwane bezpośrednio na taśmę. Charakteryzują się dużą wytrzymałością i odpornością na warunki atmosferyczne, w tym słoną wodę i UV.',
    pros: ['Odporne na korozję i chemikalia, lekkie.', 'Dostępne w szerokiej gamie żywych kolorów.'],
    cons: ['Sztywniejsze niż nylonowe, uszkodzony ząbek wymaga wymiany całego zamka.'],
    applications: 'Sprzęt outdoorowy, odzież sportowa, kurtki, plecaki.',
    durability: 'Wysoka', flexibility: 'Średnia', weight: 'Niska', cost: '$$',
  },
  {
    label: 'Nylonowe',
    title: 'Zamki nylonowe',
    description: 'Ząbki tworzy ciągła spirala z nylonu, przyszywana do taśmy. Są wyjątkowo elastyczne i lekkie, co czyni je idealnym wyborem do projektów z krzywiznami.',
    pros: ['Bardzo elastyczne, lekkie, funkcja "samonaprawiania".', 'Duża odporność na rozerwanie poziome.'],
    cons: ['Nić mocująca może ulegać degradacji UV, podatne na zanieczyszczenia.'],
    applications: 'Lekka odzież, torebki, bagaż, namioty, odzież z dzianin.',
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
        : 'Z założenia dosyć prosty mechanizm zamka błyskawicznego, jest komponentem o tyle złożonym że zależnym od materiału z którego został wykonany. Trzy główne typy zamków – metalowe, plastikowe (kostkowe) oraz nylonowe (spiralne) różnią się konstrukcją, wydajnością oraz zastosowaniem.'
      }</p>

      <h2 id="characteristics">{isEn ? 'Characteristics, Advantages, and Applications' : 'Charakterystyka, zalety i zastosowania'}</h2>

      <h3>{isEn ? 'Metal Zippers' : 'Zamki metalowe'}</h3>
      <p>{isEn
        ? "Metal zippers feature polished teeth made from metal like brass, nickel, or aluminum, which are clamped onto the zipper tape. They are the oldest type of zipper. Their primary advantage is exceptional durability and longevity, making them ideal for applications that require high resistance to stress and intensive washing. If a single tooth is damaged, metal zippers can often be repaired. Additionally, they offer a classic, high-end look that can serve as a decorative element."
        : 'Zamki metalowe charakteryzują się polerowanymi ząbkami wykonanymi z metalu, takimi jak mosiądz, nikiel lub aluminium, które są zaciskane na taśmie zamka. Są to najstarsze typy zamków błyskawicznych. Ich główną zaletą jest wyjątkowa wytrzymałość i trwałość, co sprawia, że są one idealne do zastosowań wymagających wysokiej odporności na obciążenia i intensywne pranie. W przypadku uszkodzenia pojedynczego ząbka, metalowe zamki często nadają się do naprawy. Dodatkowo, oferują one klasyczny, wysokiej klasy wygląd, który może stanowić element dekoracyjny.'
      }</p>

      <h3>{isEn ? 'Plastic Zippers' : 'Zamki plastikowe'}</h3>
      <p>{isEn
        ? 'Plastic zippers, also known as molded zippers, are characterized by teeth that are injection-molded directly onto the zipper tape. The materials used to mold the teeth are most often POM—polyacetal resin—which gives them strength and durability. A key advantage of plastic zippers is their robustness and practical resistance to weather conditions. They are highly resistant to saltwater, chemicals, extreme temperatures, and UV radiation, making them a popular choice for outdoor and marine applications.'
        : 'Zamki plastikowe, znane również jako kostkowe, charakteryzują się ząbkami, które są bezpośrednio wtryskiwane na taśmę zamka. Ząbki te są zazwyczaj większe i bardziej wyraziste, a proces formowania zapewnia wysoką precyzję i spójność. Materiały używane do wtryskiwania ząbków to najczęściej POM – żywica poliacetalowa – używana w zamkach Vislon firmy YKK nadają im wytrzymałość i odporność.'
      }</p>
      {!isEn && (
        <p>Kluczową zaletą zamków plastikowych jest ich wytrzymałość i praktyczna odporność na warunki atmosferyczne. Są wysoce odporne na słoną wodę, chemikalia, ekstremalne temperatury i promieniowanie UV, co czyni je popularnym wyborem do zastosowań zewnętrznych i morskich.</p>
      )}

      <h3>{isEn ? 'Nylon Zippers' : 'Zamki nylonowe'}</h3>
      <p>{isEn
        ? 'Nylon zippers, often called coil zippers, feature coil-shaped teeth made from nylon or polyester filament, sewn onto the side tape. This construction makes them exceptionally flexible and lightweight. They have a "self-healing" ability—if a tooth is skipped, you can often correct the problem by moving the slider back and forth. They show strong horizontal tear resistance and are inherently more wind- and water-resistant than molded zippers.'
        : 'Zamki nylonowe, często nazywane spiralnymi, charakteryzują się ząbkami w kształcie spirali, wykonanymi z nylonowego lub poliestrowego włókna, przyszytymi do taśmy bocznej nicią poliestrową. Ich konstrukcja sprawia, że są wyjątkowo elastyczne i lekkie. Posiadają zdolność „samonaprawiania się" – w przypadku pominięcia ząbka, wystarczy przesunąć suwak, aby skorygować problem. Wykazują silną odporność na rozrywanie w poziomie i są z natury bardziej odporne na wiatr i wodę niż zamki formowane.'
      }</p>

      <h2 id="comparison">{isEn ? 'Zipper Material Comparison' : 'Porównanie materiałów zamków'}</h2>
      <p>{isEn
        ? 'Choosing the right material is a key decision that affects a product\'s durability, appearance, and functionality. Select the zipper type below to see characteristics and compare properties.'
        : 'Wybór materiału to kluczowa decyzja wpływająca na trwałość, wygląd i funkcjonalność produktu. Kliknij na przycisk, aby poznać charakterystykę każdego typu zamka i zobaczyć, jak wypadają na tle innych.'
      }</p>

      <ZipperTabs tabs={tabs} locale={locale} />

      <h2 id="disadvantages">{isEn ? 'The Most Common Disadvantages' : 'Najpopularniejsze wady'}</h2>

      <h3>{isEn ? 'Metal Zippers' : 'Zamki metalowe'}</h3>
      <p>{isEn
        ? 'Despite their advantages, metal zippers have certain limitations. They are prone to corrosion, especially in marine or humid environments. They are also significantly heavier than their plastic counterparts—a factor to consider in apparel projects to avoid weighing down light fabrics. Their rigidity makes them less flexible and can cause them to seize up. Shortening metal zippers requires specialized tools.'
        : 'Mimo swoich zalet, zamki metalowe posiadają pewne ograniczenia. Są podatne na korozję, zwłaszcza w środowiskach morskich lub wilgotnych, dlatego nie są zalecane do projektów zewnętrznych. Są również znacznie cięższe niż ich odpowiedniki z tworzyw sztucznych, co należy uwzględnić w projektach odzieżowych, aby uniknąć obciążania lekkich tkanin. Ich sztywność sprawia, że są mniej elastyczne i mogą „zapiekać się" lub działać mniej płynnie niż zamki spiralne. Skracanie zamków metalowych wymaga specjalistycznych narzędzi do usunięcia ząbków.'
      }</p>

      <h3>{isEn ? 'Plastic Zippers' : 'Zamki plastikowe'}</h3>
      <p>{isEn
        ? 'The main drawback is that a damaged tooth usually means the entire zipper needs to be replaced. They are also stiffer than coil zippers, which makes them better suited for straight applications. They are commonly used in outdoor gear, sportswear, luggage, jackets, backpacks, and coolers.'
        : 'Główną wadą jest to, że uszkodzony ząbek zazwyczaj oznacza konieczność wymiany całego zamka. Są również sztywniejsze niż zamki spiralne, co sprawia, że lepiej sprawdzają się w prostych aplikacjach. Stosowane są powszechnie w sprzęcie outdoorowym, odzieży sportowej, bagażu, kurtkach, plecakach, a także w chłodziarkach i pojemnikach na lunch.'
      }</p>

      <h3>{isEn ? 'Nylon Zippers' : 'Zamki nylonowe'}</h3>
      <p>{isEn
        ? 'A disadvantage of nylon zippers is that the polyester threads used to sew the teeth can degrade from UV exposure, which requires covering the zipper in outdoor projects. Furthermore, their coil design is more prone to collecting dust and debris, which can lead to premature wear without proper cleaning and lubrication.'
        : 'Wadą jest to, że nici poliestrowe używane do szycia ząbków mogą ulegać degradacji pod wpływem promieniowania UV, co wymaga zakrycia zamka w projektach zewnętrznych. Ponadto, ich spiralna konstrukcja jest bardziej podatna na gromadzenie kurzu i zanieczyszczeń, co bez odpowiedniego czyszczenia i smarowania może prowadzić do przedwczesnego zużycia. Stosuje się je w projektach z krzywiznami, kurtkach dzianinowych, spódnicach, spodniach, torebkach, bagażu, namiotach, odzieży codziennej i lekkich przedmiotach.'
      }</p>
    </div>
  );
}
