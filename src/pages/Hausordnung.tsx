import SEO from '../components/SEO/SEO'
import './Legal.css'

const Hausordnung = () => {
  return (
    <div className="legal-page">
      <SEO
        title="Hausordnung | Ferienhaus Bela Kärnten"
        description="Hausordnung für das Ferienhaus Bela: An- und Abreise, Ruhezeiten, Regeln für Haustiere, Rauchverbot und wichtige Hinweise für Ihren Aufenthalt."
        canonical="/hausordnung"
      />
      <div className="container">
        <h1>Hausordnung</h1>

        <p className="intro-text">
          Bitte beachten Sie die folgenden Regelungen für einen angenehmen
          Aufenthalt im Ferienhaus Bela.
        </p>

        <section className="legal-section">
          <div className="rule-grid">
            <div className="rule-item">
              <span className="rule-number">1</span>
              <div>
                <h4>An- und Abreise</h4>
                <p>
                  An- und Abreisetag ist Samstag. Die Anreise kann ab 14 Uhr erfolgen.
                  Die Abreise muss bis spätestens 10 Uhr erfolgen.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">2</span>
              <div>
                <h4>Belegung</h4>
                <p>
                  Maximal 4 Erwachsene/Teenager und 2 Kinder in Zustellbetten.
                  Zwei Schlafzimmer mit Doppelbetten stehen zur Verfügung.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">3</span>
              <div>
                <h4>Küche</h4>
                <p>
                  Pfleglicher Umgang mit allen Geräten. Untersetzer für heiße
                  Gegenstände verwenden, Schneidebretter sind Pflicht. Bitte
                  hinterlassen Sie den Innenraum von Backofen und Kühlschrank
                  in sauberem Zustand.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">4</span>
              <div>
                <h4>Schäden</h4>
                <p>
                  Gäste haften für Schäden zum Wiederbeschaffungswert.
                  Schäden sind sofort zu melden.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">5</span>
              <div>
                <h4>Sorgfalt & Sicherheit</h4>
                <p>
                  Türen und Fenster beim Verlassen verschließen.
                  Haustiere dürfen nicht alleine im Haus gelassen werden.
                  Wasser und Strom sparsam nutzen.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">6</span>
              <div>
                <h4>Reinigung</h4>
                <p>
                  Wir bitten Sie, das Haus bei Abreise besenrein zu hinterlassen.
                  Regelmäßiges Lüften ist wichtig zur Schimmelvermeidung,
                  besonders nach dem Duschen.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">7</span>
              <div>
                <h4>Wasser</h4>
                <p>
                  Das Haus nutzt eine hauseigene Quelle. Es liegt kein
                  zertifiziertes Trinkwassergutachten vor, die lokale
                  Wasserqualität ist jedoch ausgezeichnet.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">8</span>
              <div>
                <h4>Schneeräumung (Winter)</h4>
                <p>
                  Gäste räumen Parkplatz und Zugang eigenverantwortlich.
                  Die dafür notwendigen Geräte werden bereitgestellt.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">9</span>
              <div>
                <h4>Abfall</h4>
                <p>
                  Müll nach Fraktionen trennen.
                  Keine Essensreste oder Abfälle in Abflüsse oder Toiletten.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">10</span>
              <div>
                <h4>Ruhezeiten</h4>
                <p>22:00 Uhr bis 6:00 Uhr.</p>
              </div>
            </div>

            <div className="rule-item highlight">
              <span className="rule-number">11</span>
              <div>
                <h4>Rauchen</h4>
                <p>
                  Im Haus ist das Rauchen absolut verboten.
                  Bitte nutzen Sie den Aschenbecher auf der Terrasse.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">12</span>
              <div>
                <h4>Kaminofen</h4>
                <p>
                  Bitte befolgen Sie die Anheizanleitung und das Holz-Stapelverfahren.
                  Abgekühlte Asche bitte in den bereitgestellten Metalleimer
                  vor der Haustür entsorgen.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">13</span>
              <div>
                <h4>Haustiere</h4>
                <p>
                  Hunde sind herzlich willkommen, dürfen aber nicht auf
                  Betten oder Möbel. Bitte beseitigen Sie die Hinterlassenschaften
                  Ihres/r Hund(e) im Garten sofort.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">14</span>
              <div>
                <h4>Parkplatz</h4>
                <p>
                  Parkmöglichkeit direkt vor dem Haus. Der Vermieter haftet
                  nicht für Schäden oder Diebstahl, außer bei Fahrlässigkeit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="legal-note">
          <p>
            Wir wünschen Ihnen einen angenehmen Aufenthalt im Ferienhaus Bela!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hausordnung
