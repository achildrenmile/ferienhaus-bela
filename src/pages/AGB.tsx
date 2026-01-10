import './Legal.css'

const AGB = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <h1>Allgemeine Geschäftsbedingungen</h1>

        <section className="legal-section">
          <h2>1. Buchung & Zahlungsweise</h2>
          <p>
            Die Buchung wird durch Bestätigung und Anzahlung rechtsgültig.
            Mit der Buchungsbestätigung wird eine <strong>Anzahlung von 20%
            des Gesamtpreises</strong> fällig.
          </p>
          <p>
            Der restliche Betrag ist <strong>14 Tage vor Anreise</strong> zu zahlen.
          </p>

          <div className="info-box">
            <h4>Bankverbindung</h4>
            <p>
              Bank: Raiffeisen Bank<br />
              IBAN: AT15 3949 6000 0111 7506<br />
              BIC: RZKTAT2K496
            </p>
          </div>

          <p>
            Bei Anreise ist eine <strong>Kaution von €100 in bar</strong> zu
            hinterlegen. Diese wird bei schadenfreier Abreise vollständig
            zurückgegeben.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Stornierung</h2>
          <p>
            Bei Stornierung der Buchung fallen folgende Rücktrittsgebühren an:
          </p>
          <table className="storno-table">
            <thead>
              <tr>
                <th>Zeitpunkt vor Anreise</th>
                <th>Stornierungsgebühr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>45+ Tage</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>33-44 Tage</td>
                <td>30%</td>
              </tr>
              <tr>
                <td>22-32 Tage</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>12-21 Tage</td>
                <td>80%</td>
              </tr>
              <tr>
                <td>Weniger als 12 Tage</td>
                <td>90%</td>
              </tr>
            </tbody>
          </table>
          <p>
            Bei Nennung eines Nachmieters entfallen die Stornierungsgebühren.
            Stattdessen kann eine <strong>Bearbeitungsgebühr von €50</strong> erhoben werden.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Mieterpflichten</h2>
          <ul>
            <li>Der Mieter haftet für alle verursachten Schäden.</li>
            <li>
              <strong>Das Rauchen ist innerhalb des Gebäudes nicht gestattet.</strong>
            </li>
            <li>Haustiere sind nach Vereinbarung erlaubt.</li>
            <li>Mängel müssen unverzüglich gemeldet werden.</li>
            <li>Das Ferienhaus ist pfleglich zu behandeln.</li>
            <li>Bei Abreise ist das Haus besenrein zu übergeben.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Rechtliches</h2>
          <p>
            Der Mietvertrag unterliegt österreichischem Recht. Für Streitigkeiten
            ist das Amtsgericht am Wohnsitz des Vermieters zuständig.
          </p>
        </section>
      </div>
    </div>
  )
}

export default AGB
