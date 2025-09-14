import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Datenschutz = () => {
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
        <h1 className="text-4xl font-bold text-clean-text mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold text-clean-text mb-3">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
              Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">2. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold text-clean-text mb-3">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>

            <h3 className="text-xl font-semibold text-clean-text mb-3 mt-6">Wie erfassen wir Ihre Daten?</h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um 
              Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mt-4">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
              IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder 
              Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <h3 className="text-xl font-semibold text-clean-text mb-3 mt-6">Wofür nutzen wir Ihre Daten?</h3>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
              Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h3 className="text-xl font-semibold text-clean-text mb-3 mt-6">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder 
              Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, 
              können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter 
              bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
              Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">3. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p><strong>Vercel Inc.</strong></p>
              <p>340 S Lemon Ave #4133</p>
              <p>Walnut, CA 91789</p>
              <p>USA</p>
            </div>
            <p className="mt-4">
              Die Erfassung und Verarbeitung Ihrer Daten erfolgt ausschließlich in Deutschland und unterliegt den 
              strengen deutschen Datenschutzgesetzen. Die Datenübertragung erfolgt verschlüsselt (SSL/TLS).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">4. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-semibold text-clean-text mb-3">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
              dieser Datenschutzerklärung.
            </p>
            <p className="mt-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene 
              Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung 
              erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem 
              Zweck das geschieht.
            </p>
            <p className="mt-4">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) 
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-xl font-semibold text-clean-text mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p><strong>Cleanly Reinigungsdienst</strong></p>
              <p>Schwarzenberger Straße 131</p>
              <p>47226 Duisburg</p>
              <p>Deutschland</p>
              <p className="mt-2">Telefon: +49 171 2326771</p>
              <p>E-Mail: reinigung.cleanly@gmail.com</p>
            </div>
            <p className="mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen 
              über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">5. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold text-clean-text mb-3">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
            <p className="mt-4">
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat 
              ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – 
              hierzu müssen die Server-Log-Files erfasst werden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">6. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
              von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage 
              mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. 
              In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven 
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung 
              (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-4">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, 
              Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach 
              abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – 
              bleiben unberührt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">7. Plugins und Tools</h2>
            <h3 className="text-xl font-semibold text-clean-text mb-3">Google Fonts (lokales Hosting)</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google 
              bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet 
              dabei nicht statt.
            </p>
            <p className="mt-4">
              Weitere Informationen zu Google Fonts finden Sie unter 
              <a href="https://developers.google.com/fonts/faq" className="text-clean-green hover:underline ml-1">
                https://developers.google.com/fonts/faq
              </a> und in der Datenschutzerklärung von Google: 
              <a href="https://policies.google.com/privacy?hl=de" className="text-clean-green hover:underline ml-1">
                https://policies.google.com/privacy?hl=de
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clean-text mb-4">8. eRecht24 Safe Sharing</h2>
            <p>
              Diese Website nutzt den eRecht24 Safe Sharing Service. Dieser stellt sicher, dass Ihre IP-Adresse nicht 
              an den Server des jeweiligen Social-Media-Anbieters übertragen wird, ohne dass Sie explizit auf den 
              Button klicken.
            </p>
            <p className="mt-4">
              Weitere Informationen zum eRecht24 Safe Sharing Service finden Sie unter: 
              <a href="https://www.erecht24.de/artikel/datenschutz/20924-whatsapp-teilen-button-datenschutz-konform.html" className="text-clean-green hover:underline ml-1">
                https://www.erecht24.de/artikel/datenschutz/20924-whatsapp-teilen-button-datenschutz-konform.html
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;
