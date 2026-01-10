import './Legal.css'

const Hausordnung = () => {
  return (
    <div className="legal-page">
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
                  An- und Abreise ist samstags. Ankunft ab 14:00 Uhr,
                  Abreise bis 10:00 Uhr.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">2</span>
              <div>
                <h4>Belegung</h4>
                <p>
                  Maximal 4 Erwachsene/Teenager und 2 Kinder.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">3</span>
              <div>
                <h4>Küche</h4>
                <p>
                  Pfleglicher Umgang mit allen Geräten. Geschirr sauber lagern.
                  Untersetzer für heiße Gegenstände nutzen.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">4</span>
              <div>
                <h4>Schäden</h4>
                <p>
                  Schäden sind sofort zu melden. Mieter haftet für Beschädigungen.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">5</span>
              <div>
                <h4>Sorgfalt</h4>
                <p>
                  Haus beim Verlassen verschließen. Fenster schließen.
                  Wasser und Strom sparsam nutzen.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">6</span>
              <div>
                <h4>Reinigung</h4>
                <p>
                  Verschmutzungen sofort beseitigen. Haus besenrein abgeben.
                  Regelmäßig lüften.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">7</span>
              <div>
                <h4>Wasser</h4>
                <p>
                  Das Wasser stammt aus einer hauseigenen Quelle.
                  Es liegt kein Trinkwassergutachten vor.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">8</span>
              <div>
                <h4>Schneeräumung</h4>
                <p>
                  Mieter räumt Parkplatz und Zugang eigenverantwortlich.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">9</span>
              <div>
                <h4>Abfall</h4>
                <p>
                  Müll nach Fraktionen trennen.
                  Keine Essensreste in Rohre oder Toilette.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">10</span>
              <div>
                <h4>Ruhezeiten</h4>
                <p>22:00 bis 6:00 Uhr.</p>
              </div>
            </div>

            <div className="rule-item highlight">
              <span className="rule-number">11</span>
              <div>
                <h4>Rauchen & Feuer</h4>
                <p>
                  Rauchen im Haus verboten.
                  Offenes Feuer im Außenbereich nicht erlaubt.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">12</span>
              <div>
                <h4>Kaminofen</h4>
                <p>
                  Bitte der Anheizanleitung folgen.
                  Asche in den Metalleimer vor der Haustür.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">13</span>
              <div>
                <h4>Haustiere</h4>
                <p>
                  Hunde sind herzlich willkommen. Kotbeutel nutzen.
                  Hunde nicht auf Möbeln.
                </p>
              </div>
            </div>

            <div className="rule-item">
              <span className="rule-number">14</span>
              <div>
                <h4>Hausrecht</h4>
                <p>
                  Der Vermieter darf bei notwendigen Reparaturen
                  das Haus betreten.
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
