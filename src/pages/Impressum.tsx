import './Legal.css'

const Impressum = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <h1>Impressum & Datenschutz</h1>

        <section className="legal-section">
          <h2>Impressum</h2>

          <div className="info-block">
            <h3>Betreiber</h3>
            <p>Ing. Michael Linder, MSc</p>
          </div>

          <div className="info-block">
            <h3>Geschäftstätigkeit</h3>
            <p>Freies Gastgewerbe</p>
          </div>

          <div className="info-block">
            <h3>UID-Nummer</h3>
            <p>ATU72580414</p>
          </div>

          <div className="info-block">
            <h3>Adresse</h3>
            <p>
              Vellach 77<br />
              9135 Bad Eisenkappel<br />
              Österreich
            </p>
          </div>

          <div className="info-block">
            <h3>Kontakt</h3>
            <p>
              <a href="mailto:office@ferienhaus-bela.at">office@ferienhaus-bela.at</a>
            </p>
          </div>

          <div className="info-block">
            <h3>Mitgliedschaft</h3>
            <p>Wirtschaftskammer Kärnten</p>
          </div>

          <div className="info-block">
            <h3>Streitbeilegung</h3>
            <p>
              Verbraucher können Beschwerden an die Online-Streitbeilegungsplattform
              der EU richten:{' '}
              <a
                href="https://ec.europa.eu/odr"
                target="_blank"
                rel="noopener noreferrer"
              >
                ec.europa.eu/odr
              </a>
            </p>
          </div>
        </section>

        <section className="legal-section">
          <h2>Datenschutzerklärung</h2>

          <div className="info-block">
            <h3>Verantwortlicher</h3>
            <p>
              Michael Linder<br />
              Nötsch 55<br />
              9611 Nötsch<br />
              Österreich<br />
              <a href="tel:+436769658016">+43 676 965 8016</a>
            </p>
          </div>

          <div className="info-block">
            <h3>Grundsätze</h3>
            <p>
              Die Nutzung unserer Website ist grundsätzlich ohne jede Angabe
              personenbezogener Daten möglich. Personenbezogene Daten werden
              gemäß der Datenschutz-Grundverordnung (DSGVO) verarbeitet.
            </p>
          </div>

          <div className="info-block">
            <h3>Cookies und Speicher</h3>
            <p>
              Wir verwenden LocalStorage zur Speicherung Ihrer Einwilligung
              bezüglich der Webanalyse. Es werden keine Tracking-Cookies gesetzt.
            </p>
          </div>

          <div className="info-block">
            <h3>Webanalyse mit Umami</h3>
            <p>
              Wir nutzen Umami, ein datenschutzfreundliches Analyse-Tool,
              um unsere Website zu verbessern. Die Nutzung erfolgt nur mit
              Ihrer ausdrücklichen Einwilligung.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Umami zeichnet sich durch folgende Eigenschaften aus:</strong>
            </p>
            <ul>
              <li>Keine Cookies - Umami verwendet keine Cookies</li>
              <li>Keine persönlichen Daten - Es werden keine personenbezogenen Daten erfasst</li>
              <li>Anonymisierung - Alle Daten werden anonymisiert verarbeitet</li>
              <li>DSGVO-konform - Vollständig konform mit der Datenschutz-Grundverordnung</li>
              <li>Selbst gehostet - Die Daten verbleiben auf unseren Servern</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den
              entsprechenden Eintrag in Ihrem Browser-Speicher löschen oder uns
              kontaktieren.
            </p>
          </div>

          <div className="info-block">
            <h3>Server-Logfiles</h3>
            <p>
              Bei jedem Zugriff auf unsere Website erfassen wir automatisch
              folgende Informationen:
            </p>
            <ul>
              <li>Browser-Typ und Version</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>IP-Adresse</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
          </div>

          <div className="info-block">
            <h3>Automatisierte Entscheidungsfindung</h3>
            <p>
              Es findet keine automatisierte Entscheidungsfindung oder
              Profiling statt.
            </p>
          </div>

          <div className="info-block">
            <h3>Ihre Rechte</h3>
            <p>Sie haben das Recht auf:</p>
            <ul>
              <li>Bestätigung, ob personenbezogene Daten verarbeitet werden</li>
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerruf erteilter Einwilligungen</li>
              <li>Beschwerde bei einer Aufsichtsbehörde</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Impressum
