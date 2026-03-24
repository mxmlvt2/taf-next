import type { Metadata } from 'next';
import Link from 'next/link';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'en' ? 'Privacy Policy | TAF' : 'Polityka prywatności | TAF',
    description: locale === 'en'
      ? 'Privacy policy of TAF - Trims and Fasteners (EMKA Marta Kubicka). Information on personal data processing.'
      : 'Polityka prywatności TAF - Trims and Fasteners (EMKA Marta Kubicka). Informacje o przetwarzaniu danych osobowych.',
    alternates: {
      canonical: locale === 'en' ? 'https://trimsandfasteners.com/privacy-policy/' : 'https://trimsandfasteners.com/pl/polityka-prywatnosci/',
      languages: {
        en: 'https://trimsandfasteners.com/privacy-policy/',
        pl: 'https://trimsandfasteners.com/pl/polityka-prywatnosci/',
      },
    },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === 'en';
  const title = isEn ? 'Privacy Policy' : 'Polityka prywatności';

  return (
    <div className="bg-white">
      <div className="border-b border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-gray-400 font-[Jost] mb-4 flex items-center gap-2">
            <Link href={isEn ? '/' : '/pl/'} className="hover:text-gray-700 transition-colors">
              {isEn ? 'Home' : 'Start'}
            </Link>
            <span>›</span>
            <span className="text-gray-600">{title}</span>
          </nav>
          <h1 className="font-[Jost] text-3xl sm:text-4xl font-light text-[#111]">{title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-gray max-w-none font-[Jost] prose-headings:font-[Jost] prose-headings:text-[#111] prose-h2:text-xl prose-h2:font-semibold prose-h2:mt-10 prose-h2:mb-3 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 prose-p:text-gray-600 prose-p:text-sm prose-p:leading-relaxed prose-p:my-3 prose-li:text-gray-600 prose-li:text-sm prose-ul:my-3 prose-strong:text-gray-800 prose-strong:font-semibold">
          {isEn ? (
            <>
              <p>This Privacy Policy defines the rules for processing personal data on the website operated by EMKA Marta Kubicka, ul. Grzybowska 87, 00-844 Warszawa, NIP: 118-171-51-85 (hereinafter: &ldquo;Administrator&rdquo;).</p>

              <h2>1. Definitions</h2>
              <ul>
                <li><strong>Administrator</strong> — EMKA Marta Kubicka, acting as the data controller per GDPR Regulation (EU) 2016/679.</li>
                <li><strong>User</strong> — any person visiting the website.</li>
                <li><strong>Website</strong> — the online service operated by the Administrator at trimsandfasteners.com.</li>
              </ul>

              <h2>2. Legal Basis for Data Processing</h2>
              <p>The Administrator processes personal data based on:</p>
              <ul>
                <li>User consent (Article 6(1)(a) GDPR)</li>
                <li>Performance of a contract or pre-contractual steps (Article 6(1)(b) GDPR)</li>
                <li>Administrator&apos;s legal obligations (Article 6(1)(c) GDPR)</li>
                <li>Administrator&apos;s legitimate interest, such as direct marketing (Article 6(1)(f) GDPR)</li>
              </ul>

              <h2>3. Purpose of Data Processing</h2>
              <ul>
                <li>Handling inquiries and requests from Users</li>
                <li>Processing orders and providing services</li>
                <li>Sending newsletters (with User consent)</li>
                <li>Conducting marketing activities</li>
                <li>Analyzing traffic and maintaining website statistics</li>
              </ul>

              <h2>4. Types of Processed Data</h2>
              <ul>
                <li>First and last name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>IP address</li>
                <li>Website usage data (cookies)</li>
              </ul>

              <h2>5. Data Sharing</h2>
              <p>Personal data may be shared with:</p>
              <ul>
                <li>Hosting service providers</li>
                <li>Online payment service providers</li>
                <li>Analytical and marketing tool providers (e.g., Google Analytics)</li>
                <li>Authorized state authorities as required by law</li>
              </ul>

              <h2>6. User Rights</h2>
              <p>Users have the following rights:</p>
              <ul>
                <li>Right to access their data</li>
                <li>Right to rectify incorrect or incomplete data</li>
                <li>Right to erasure (&ldquo;right to be forgotten&rdquo;)</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to data processing</li>
                <li>Right to withdraw consent at any time</li>
              </ul>
              <p>To exercise your rights, contact us at: <a href="mailto:contact@trimsandfasteners.com">contact@trimsandfasteners.com</a></p>

              <h2>7. Cookies</h2>
              <p>The Website uses cookies to customize content, analyze statistics, and conduct marketing activities. Users can change cookie settings in their web browser.</p>

              <h2>8. Data Retention Period</h2>
              <p>Personal data is stored for the period necessary to achieve the purposes for which it was collected, or as required by law.</p>

              <h2>9. Changes to the Privacy Policy</h2>
              <p>The Administrator reserves the right to modify this policy. Continued use of the website constitutes acceptance of updates.</p>

              <h2>10. Contact Information</h2>
              <p>EMKA Marta Kubicka<br />ul. Grzybowska 87, 00-844 Warszawa<br />NIP: 118-171-51-85, REGON: 147429516<br />Phone: +48 22 1101101, +48 723 331 331<br />Email: <a href="mailto:contact@trimsandfasteners.com">contact@trimsandfasteners.com</a></p>
            </>
          ) : (
            <>
              <p>Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych w ramach strony internetowej prowadzonej przez EMKA Marta Kubicka z siedzibą przy ul. Grzybowska 87, 00-844 Warszawa, NIP: 118-171-51-85 (dalej: &bdquo;Administrator&rdquo;).</p>

              <h2>1. Definicje</h2>
              <ul>
                <li><strong>Administrator</strong> — EMKA Marta Kubicka będący administratorem danych osobowych zgodnie z Rozporządzeniem (UE) 2016/679 (RODO).</li>
                <li><strong>Użytkownik</strong> — osoba odwiedzająca stronę internetową.</li>
                <li><strong>Strona</strong> — serwis internetowy prowadzony przez Administratora, dostępny pod adresem trimsandfasteners.com.</li>
              </ul>

              <h2>2. Podstawa prawna przetwarzania danych</h2>
              <p>Administrator przetwarza dane osobowe zgodnie z obowiązującym prawem, w tym RODO, na podstawie:</p>
              <ul>
                <li>zgody wyrażonej przez Użytkownika (art. 6 ust. 1 lit. a RODO)</li>
                <li>realizacji umowy lub działań przed jej zawarciem (art. 6 ust. 1 lit. b RODO)</li>
                <li>obowiązków prawnych ciążących na Administratorze (art. 6 ust. 1 lit. c RODO)</li>
                <li>prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO)</li>
              </ul>

              <h2>3. Cele przetwarzania danych</h2>
              <ul>
                <li>Obsługa zgłoszeń i zapytań Użytkowników</li>
                <li>Realizacja zamówień i świadczenie usług</li>
                <li>Wysyłanie newslettera (za zgodą Użytkownika)</li>
                <li>Prowadzenie działań marketingowych</li>
                <li>Analiza ruchu i prowadzenie statystyk strony</li>
              </ul>

              <h2>4. Rodzaje przetwarzanych danych</h2>
              <ul>
                <li>Imię i nazwisko</li>
                <li>Adres e-mail</li>
                <li>Numer telefonu</li>
                <li>Adres IP</li>
                <li>Dane dotyczące korzystania ze strony (pliki cookies)</li>
              </ul>

              <h2>5. Udostępnianie danych</h2>
              <p>Dane osobowe Użytkowników mogą być przekazywane:</p>
              <ul>
                <li>Podmiotom świadczącym usługi hostingowe</li>
                <li>Podmiotom obsługującym płatności online</li>
                <li>Dostawcom narzędzi analitycznych i marketingowych (np. Google Analytics)</li>
                <li>Uprawnionym organom państwowym na podstawie przepisów prawa</li>
              </ul>

              <h2>6. Prawa Użytkownika</h2>
              <p>Użytkownikom przysługują następujące prawa:</p>
              <ul>
                <li>Prawo dostępu do swoich danych</li>
                <li>Prawo do sprostowania danych</li>
                <li>Prawo do usunięcia danych (&bdquo;prawo do bycia zapomnianym&rdquo;)</li>
                <li>Prawo do ograniczenia przetwarzania</li>
                <li>Prawo do przenoszenia danych</li>
                <li>Prawo do wniesienia sprzeciwu wobec przetwarzania danych</li>
                <li>Prawo do wycofania zgody w dowolnym momencie</li>
              </ul>
              <p>Aby skorzystać ze swoich praw, skontaktuj się z Administratorem: <a href="mailto:contact@trimsandfasteners.com">contact@trimsandfasteners.com</a></p>

              <h2>7. Pliki cookies</h2>
              <p>Strona wykorzystuje pliki cookies w celu dostosowania treści do preferencji Użytkownika, analizowania statystyk oraz prowadzenia działań marketingowych. Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w przeglądarce.</p>

              <h2>8. Okres przechowywania danych</h2>
              <p>Dane osobowe Użytkowników będą przechowywane przez okres niezbędny do realizacji celów, dla których zostały zebrane, lub przez okres wynikający z przepisów prawa.</p>

              <h2>9. Zmiany w Polityce Prywatności</h2>
              <p>Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. Korzystanie ze strony po wprowadzeniu zmian oznacza akceptację nowych postanowień.</p>

              <h2>10. Kontakt</h2>
              <p>EMKA Marta Kubicka<br />ul. Grzybowska 87, 00-844 Warszawa<br />NIP: 118-171-51-85, REGON: 147429516<br />Tel: +48 22 1101101, +48 723 331 331<br />E-mail: <a href="mailto:contact@trimsandfasteners.com">contact@trimsandfasteners.com</a></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
