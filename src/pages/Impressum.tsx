import './Legal.css'

const Impressum = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <h1>Impressum & Datenschutz</h1>

        <section className="legal-section">
          <h2>Impressum</h2>
          <p className="legal-intro">
            Informationen gemäß § 5 E-Commerce-Gesetz (ECG) und Offenlegung gemäß § 25 Mediengesetz (MedienG)
          </p>

          <div className="info-block">
            <h3>Diensteanbieter / Medieninhaber</h3>
            <p>
              Ing. Michael Linder, MSc<br />
              Vellach 77<br />
              9135 Bad Eisenkappel<br />
              Österreich
            </p>
          </div>

          <div className="info-block">
            <h3>Kontakt</h3>
            <p>
              Telefon: <a href="tel:+436769658016">+43 676 965 8016</a><br />
              E-Mail: <a href="mailto:office@ferienhaus-bela.at">office@ferienhaus-bela.at</a>
            </p>
          </div>

          <div className="info-block">
            <h3>Unternehmensgegenstand</h3>
            <p>Vermietung von Ferienwohnungen (Freies Gastgewerbe)</p>
          </div>

          <div className="info-block">
            <h3>UID-Nummer</h3>
            <p>ATU72580414</p>
          </div>

          <div className="info-block">
            <h3>Mitgliedschaft</h3>
            <p>Wirtschaftskammer Kärnten</p>
          </div>

          <div className="info-block">
            <h3>Anwendbare Rechtsvorschriften</h3>
            <p>Gewerbeordnung (GewO), abrufbar unter <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer">www.ris.bka.gv.at</a></p>
          </div>

          <div className="info-block">
            <h3>Behörde gemäß ECG</h3>
            <p>Bezirkshauptmannschaft Völkermarkt</p>
          </div>

          <div className="info-block">
            <h3>Online-Streitbeilegung</h3>
            <p>
              Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform
              der EU zu richten:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="info-block">
            <h3>Haftungsausschluss</h3>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
              Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
              deren Betreiber verantwortlich.
            </p>
          </div>

          <div className="info-block">
            <h3>Urheberrecht</h3>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem österreichischen Urheberrecht. Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </section>

        <section className="legal-section">
          <h2>Datenschutzerklärung</h2>
          <p className="legal-intro">
            gemäß Art. 13 und 14 Datenschutz-Grundverordnung (DSGVO)
          </p>

          <div className="info-block">
            <h3>1. Verantwortlicher</h3>
            <p>
              Verantwortlicher im Sinne der DSGVO ist:<br /><br />
              Ing. Michael Linder, MSc<br />
              Vellach 77<br />
              9135 Bad Eisenkappel<br />
              Österreich<br /><br />
              Telefon: <a href="tel:+436769658016">+43 676 965 8016</a><br />
              E-Mail: <a href="mailto:office@ferienhaus-bela.at">office@ferienhaus-bela.at</a>
            </p>
          </div>

          <div className="info-block">
            <h3>2. Grundsätze der Datenverarbeitung</h3>
            <p>
              Die Nutzung unserer Website ist grundsätzlich ohne Angabe personenbezogener
              Daten möglich. Wir verarbeiten personenbezogene Daten nur, soweit dies zur
              Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und
              Leistungen erforderlich ist.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Die Verarbeitung personenbezogener Daten erfolgt nur nach Einwilligung des
              Nutzers oder wenn die Verarbeitung durch gesetzliche Vorschriften gestattet ist.
            </p>
          </div>

          <div className="info-block">
            <h3>3. Hosting und Content Delivery (Cloudflare)</h3>
            <p>
              Unsere Website wird über <strong>Cloudflare Tunnel</strong> bereitgestellt.
              Cloudflare ist ein Content Delivery Network (CDN) und bietet DDoS-Schutz sowie
              Sicherheitsfunktionen. Anbieter ist die Cloudflare Inc., 101 Townsend St,
              San Francisco, CA 94107, USA.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Verarbeitete Daten:</strong>
            </p>
            <ul>
              <li>IP-Adresse</li>
              <li>Kontaktdaten</li>
              <li>Inhaltsdaten</li>
              <li>Nutzungsdaten</li>
              <li>Meta-/Kommunikationsdaten</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an einer sicheren und effizienten Bereitstellung unserer Website).
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Cloudflare ist unter dem EU-US Data Privacy Framework zertifiziert und bietet
              damit eine Garantie für die Einhaltung europäischer Datenschutzstandards.
              Weitere Informationen finden Sie in der{' '}
              <a href="https://www.cloudflare.com/de-de/privacypolicy/" target="_blank" rel="noopener noreferrer">
                Datenschutzerklärung von Cloudflare
              </a>.
            </p>
          </div>

          <div className="info-block">
            <h3>4. Cookies und lokaler Speicher</h3>
            <p>
              Unsere Website verwendet <strong>keine Cookies</strong> zu Tracking-Zwecken.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Wir nutzen den <strong>localStorage</strong> Ihres Browsers ausschließlich zur
              Speicherung Ihrer Einwilligung bezüglich der Webanalyse. Dieser Eintrag enthält
              keine personenbezogenen Daten und dient lediglich dazu, Ihre Präferenz zu merken.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Gespeicherter Eintrag:</strong>
            </p>
            <ul>
              <li><code>ferienhaus-bela-analytics-consent</code> - Speichert Ihre Entscheidung
              bezüglich der Webanalyse ("accepted" oder "declined")</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Cloudflare-Cookies:</strong> Cloudflare kann technisch notwendige Cookies
              setzen (z.B. <code>__cf_bm</code> für Bot-Management). Diese Cookies sind für den
              sicheren Betrieb der Website erforderlich und werden nicht für Tracking verwendet.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
              für technisch notwendige Funktionen, Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
              für optionale Funktionen.
            </p>
          </div>

          <div className="info-block">
            <h3>5. Webanalyse mit Umami</h3>
            <p>
              Wir nutzen <strong>Umami</strong>, ein datenschutzfreundliches und selbst gehostetes
              Analyse-Tool, um die Nutzung unserer Website zu verstehen und zu verbessern.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Wichtig:</strong> Die Analyse erfolgt <strong>nur mit Ihrer ausdrücklichen
              Einwilligung</strong>. Ohne Ihre Zustimmung werden keine Analysedaten erhoben.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Eigenschaften von Umami:</strong>
            </p>
            <ul>
              <li>Keine Cookies - Umami setzt keine Cookies</li>
              <li>Keine persönlichen Daten - Es werden keine personenbezogenen Daten erfasst</li>
              <li>IP-Anonymisierung - IP-Adressen werden nicht gespeichert</li>
              <li>Kein Cross-Site-Tracking - Keine Verfolgung über mehrere Websites</li>
              <li>DSGVO-konform - Vollständig konform mit der Datenschutz-Grundverordnung</li>
              <li>Selbst gehostet - Die Daten verbleiben auf Servern in der EU</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Erfasste Daten (bei Einwilligung):</strong>
            </p>
            <ul>
              <li>Besuchte Seiten</li>
              <li>Verweildauer</li>
              <li>Referrer (woher Sie kommen)</li>
              <li>Browser und Betriebssystem (anonymisiert)</li>
              <li>Land (basierend auf anonymisierter IP)</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den Eintrag{' '}
              <code>ferienhaus-bela-analytics-consent</code> in Ihrem Browser-Speicher löschen
              oder uns kontaktieren.
            </p>
          </div>

          <div className="info-block">
            <h3>6. Eingebundene Dienste Dritter</h3>
            <p><strong>ferienhausmiete.de (Belegungskalender)</strong></p>
            <p>
              Auf unserer Seite "Preise & Belegung" binden wir einen Kalender von ferienhausmiete.de
              ein. Dabei kann es zur Übertragung von Daten an ferienhausmiete.de kommen.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Anbieter: Ferienhausmiete.de GmbH, Deutschland<br />
              Datenschutzerklärung:{' '}
              <a href="https://www.ferienhausmiete.de/datenschutz.htm" target="_blank" rel="noopener noreferrer">
                www.ferienhausmiete.de/datenschutz.htm
              </a>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an der Darstellung aktueller Verfügbarkeiten)
            </p>
          </div>

          <div className="info-block">
            <h3>7. Kontaktaufnahme</h3>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Verarbeitete Daten:</strong> Name, E-Mail-Adresse, Telefonnummer,
              Inhalt Ihrer Anfrage
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
              oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung)
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Speicherdauer:</strong> Bis zur vollständigen Bearbeitung Ihrer Anfrage,
              bei Buchungen bis zum Ablauf gesetzlicher Aufbewahrungsfristen (7 Jahre gemäß
              Bundesabgabenordnung).
            </p>
          </div>

          <div className="info-block">
            <h3>8. Buchungen und Vertragsabwicklung</h3>
            <p>
              Bei einer Buchung verarbeiten wir die für die Vertragserfüllung erforderlichen Daten.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Verarbeitete Daten:</strong> Name, Adresse, E-Mail, Telefonnummer,
              Buchungszeitraum, Zahlungsinformationen, Anzahl der Personen und Hunde
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Speicherdauer:</strong> 7 Jahre nach Vertragsende gemäß
              steuerrechtlichen Aufbewahrungspflichten (§ 132 BAO).
            </p>
          </div>

          <div className="info-block">
            <h3>9. Ihre Rechte</h3>
            <p>Sie haben gemäß DSGVO folgende Rechte:</p>
            <ul>
              <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre
              verarbeiteten personenbezogenen Daten verlangen.</li>
              <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie können die Berichtigung
              unrichtiger Daten verlangen.</li>
              <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer
              Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</li>
              <li><strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Sie können die Einschränkung
              der Verarbeitung verlangen.</li>
              <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können Ihre Daten
              in einem gängigen Format erhalten.</li>
              <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Verarbeitung
              aus berechtigtem Interesse widersprechen.</li>
              <li><strong>Widerrufsrecht (Art. 7 Abs. 3 DSGVO):</strong> Sie können erteilte
              Einwilligungen jederzeit widerrufen.</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an{' '}
              <a href="mailto:office@ferienhaus-bela.at">office@ferienhaus-bela.at</a>.
            </p>
          </div>

          <div className="info-block">
            <h3>10. Beschwerderecht</h3>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
              Zuständige Aufsichtsbehörde in Österreich ist:
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Österreichische Datenschutzbehörde<br />
              Barichgasse 40-42<br />
              1030 Wien<br />
              <a href="mailto:dsb@dsb.gv.at">dsb@dsb.gv.at</a><br />
              <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">www.dsb.gv.at</a>
            </p>
          </div>

          <div className="info-block">
            <h3>11. Datensicherheit</h3>
            <p>
              Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre
              Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung
              oder gegen den Zugriff unberechtigter Personen zu schützen.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Die Übertragung von Daten erfolgt verschlüsselt über HTTPS/TLS.
            </p>
          </div>

          <div className="info-block">
            <h3>12. Aktualität und Änderungen</h3>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Jänner 2026.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
              bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung
              zu ändern.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Impressum
