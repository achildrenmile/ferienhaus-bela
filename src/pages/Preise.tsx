import Hero from '../components/Hero/Hero'
import './Preise.css'

const Preise = () => {
  return (
    <div className="preise-page">
      <Hero
        title="Preise & Belegung"
        subtitle="Transparente Preise für Ihren Traumurlaub in Kärnten"
        backgroundImage="/images/20200118_111901-scaled.jpg"
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Saisonpreise</h2>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-header">
                <h3>Nebensaison</h3>
                <span className="price-period">Oktober - Mai</span>
                <span className="price-note">(außer Ostern, Weihnachten, Silvester)</span>
              </div>
              <div className="price-body">
                <span className="price-amount">€136</span>
                <span className="price-unit">pro Nacht</span>
              </div>
            </div>

            <div className="price-card featured">
              <div className="price-badge">Beliebt</div>
              <div className="price-header">
                <h3>Hauptsaison</h3>
                <span className="price-period">Juni - September</span>
              </div>
              <div className="price-body">
                <span className="price-amount">€161</span>
                <span className="price-unit">pro Nacht</span>
              </div>
            </div>

            <div className="price-card">
              <div className="price-header">
                <h3>Feiertage</h3>
                <span className="price-period">Ostern, Weihnachten, Silvester</span>
              </div>
              <div className="price-body">
                <span className="price-amount">€207</span>
                <span className="price-unit">pro Nacht</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Zusätzliche Kosten</h2>
          <div className="extras-grid">
            <div className="extra-card">
              <div className="extra-icon">🧹</div>
              <h4>Endreinigung & Bettwäsche</h4>
              <span className="extra-price">€90</span>
              <span className="extra-note">einmalig</span>
            </div>
            <div className="extra-card">
              <div className="extra-icon">🔑</div>
              <h4>Kaution</h4>
              <span className="extra-price">€100</span>
              <span className="extra-note">Rückgabe bei Abreise</span>
            </div>
            <div className="extra-card">
              <div className="extra-icon">📋</div>
              <h4>Ortstaxe</h4>
              <span className="extra-price">€2,30</span>
              <span className="extra-note">pro Nacht pro Person</span>
            </div>
            <div className="extra-card highlight">
              <div className="extra-icon">🐕</div>
              <h4>Hunde</h4>
              <span className="extra-price">Gratis!</span>
              <span className="extra-note">bis zu 3 Hunde kostenfrei</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Im Preis inklusive</h2>
          <div className="included-grid">
            <div className="included-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Bis zu 4 Erwachsene/Teenager + 2 Kinder</span>
            </div>
            <div className="included-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Strom und Wasser</span>
            </div>
            <div className="included-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Heizmaterial</span>
            </div>
            <div className="included-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>W-LAN</span>
            </div>
            <div className="included-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Reisegitterbett/Zustellbett (auf Anfrage)</span>
            </div>
            <div className="included-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Hundrum-Sorglospaket</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Buchungsbedingungen</h2>
          <div className="conditions-grid">
            <div className="condition-card">
              <h4>Check-in</h4>
              <p>Ab 14:00 Uhr</p>
            </div>
            <div className="condition-card">
              <h4>Check-out</h4>
              <p>Bis 10:00 Uhr</p>
            </div>
            <div className="condition-card">
              <h4>Mindestaufenthalt</h4>
              <p>
                In der Hauptsaison vermieten wir grundsätzlich nur wochenweise.
                Kürzere Aufenthalte sind auf Anfrage möglich, wenn das Haus verfügbar ist.
              </p>
            </div>
            <div className="condition-card">
              <h4>Anzahlung</h4>
              <p>20% des Gesamtpreises bei Buchungsbestätigung</p>
            </div>
            <div className="condition-card">
              <h4>Restzahlung</h4>
              <p>14 Tage vor Anreise</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Interesse geweckt?</h2>
            <p>
              Kontaktieren Sie uns für Verfügbarkeit und Buchungsanfragen.
              Wir freuen uns auf Sie und Ihre Vierbeiner!
            </p>
            <a href="mailto:office@ferienhaus-bela.at" className="btn btn-accent">
              Jetzt anfragen
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Preise
