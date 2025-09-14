import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header mit Navigation */}
      <header className="bg-clean-text text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Zurück</span>
            </Link>
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hauptinhalt */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-clean-text mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-lg mb-2">Cleanly Reinigungsdienst</p>
              <p>Schwarzenberger Straße 131</p>
              <p>47226 Duisburg</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">Kontakt</h2>
            <div className="space-y-2">
              <p><strong>Telefon:</strong> +49 171 2326771</p>
              <p><strong>E-Mail:</strong> reinigung.cleanly@gmail.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p>DE123456789 (Beispiel - bitte durch echte USt-IdNr. ersetzen)</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Cleanly Reinigungsdienst</p>
            <p>Schwarzenberger Straße 131</p>
            <p>47226 Duisburg</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen 
              werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren 
              zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="mt-4">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links 
              umgehend entfernen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-4">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden 
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" className="text-clean-green hover:underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-4">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="mt-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
