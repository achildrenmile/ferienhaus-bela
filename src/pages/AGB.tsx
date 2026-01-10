import { Link } from 'react-router-dom'
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
            Der restliche Betrag ist <strong>14 Tage vor Reiseantritt</strong> zu zahlen.
          </p>
          <p>
            Bei nicht fristgerechter Zahlung ist der Vermieter berechtigt, vom Vertrag
            zurückzutreten und Schadenersatz gemäß den Rücktrittsgebühren (Punkt 2)
            zu beanspruchen.
          </p>

          <div className="info-box">
            <h4>Bankverbindung</h4>
            <p>
              Bank: Raiffeisen Bank<br />
              Kontoinhaber: Michael Linder<br />
              IBAN: AT15 3949 6000 0111 7506<br />
              BIC: RZKTAT2K496
            </p>
          </div>

          <p>
            Bei Anreise ist eine <strong>Kaution von € 100,- in bar</strong> zu
            hinterlegen. Diese wird bei schadenfreier Abreise vollständig
            zurückgegeben.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Stornierung</h2>
          <p>
            Wir empfehlen den Abschluss einer <strong>Reiserücktrittsversicherung</strong>.
          </p>
          <p>
            Bei Stornierung der Buchung ohne Nennung eines Nachmieters fallen
            folgende Rücktrittsgebühren an:
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
                <td>45 Tage und mehr</td>
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
            Es kann jedoch eine <strong>Bearbeitungsgebühr von € 50,-</strong> erhoben werden.
          </p>
          <p>
            Bei vorzeitiger Abreise ist der volle Mietpreis zu entrichten.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Mieterpflichten</h2>
          <p>
            Der Mieter verpflichtet sich, die Mieträumlichkeiten und die
            Einrichtungsgegenstände pfleglich zu behandeln und schuldhaft
            verursachte Schäden zu ersetzen.
          </p>
          <ul>
            <li>Mängelansprüche müssen unverzüglich beim Vermieter gemeldet werden.</li>
            <li>
              <strong>Das Rauchen ist innerhalb des Gebäudes nicht gestattet.</strong>
            </li>
            <li>Haustiere sind nach Vereinbarung erlaubt.</li>
            <li>
              Der Mieter verpflichtet sich, die{' '}
              <Link to="/hausordnung">Hausordnung</Link> einzuhalten.
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Salvatorische Klausel</h2>
          <p>
            Sollten einzelne Bestimmungen dieses Vertrages unwirksam oder
            undurchführbar sein oder werden, so wird die Wirksamkeit der
            übrigen Bestimmungen nicht berührt.
          </p>
          <p>
            Änderungen und Ergänzungen dieses Vertrages bedürfen der Schriftform.
          </p>
          <p>
            Es gilt österreichisches Recht.
          </p>
        </section>
      </div>
    </div>
  )
}

export default AGB
