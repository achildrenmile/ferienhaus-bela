import Hero from '../components/Hero/Hero'
import Gallery from '../components/Gallery/Gallery'
import './Ferienhaus.css'

const ferienhaus_images = [
  { src: '/images/20200118_132741-scaled.jpg', alt: 'Küche' },
  { src: '/images/20200118_105344-scaled.jpg', alt: 'Badezimmer' },
  { src: '/images/20200118_111901-scaled.jpg', alt: 'Wohnzimmer' },
  { src: '/images/20200118_095706-scaled.jpg', alt: 'Schlafzimmer 1' },
  { src: '/images/20200118_101629-scaled.jpg', alt: 'Schlafzimmer 2' },
  { src: '/images/20200612_163615.jpg', alt: 'Garten' },
  { src: '/images/20200611_142130.jpg', alt: 'Knusperhäuschen' },
  { src: '/images/IMG-20200621-WA0012.jpg', alt: 'Vellach Fluss' },
]

const Ferienhaus = () => {
  return (
    <div className="ferienhaus-page">
      <Hero
        title="Das Ferienhaus"
        subtitle="84 m² Wohnfläche auf zwei Etagen - gemütlich und komplett ausgestattet"
        backgroundImage="/images/20200606_103912.jpg"
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Standort & Beschreibung</h2>
          <div className="content-block">
            <p>
              Das Ferienhaus befindet sich etwa 4 km nach dem Kurort Bad Eisenkappel
              direkt am Fluss Vellach (slowenisch: Bela). Die idyllische Lage ermöglicht
              Naturgenuss abseits von Hektik und Lärm. Hunde sind herzlich willkommen.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Größe & Kapazität</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">84 m²</span>
              <span className="stat-label">Wohnfläche</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">4+2</span>
              <span className="stat-label">Personen (4 Erwachsene + 2 Kinder)</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">1.300 m²</span>
              <span className="stat-label">Garten</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">2</span>
              <span className="stat-label">Schlafzimmer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Raumaufteilung</h2>
          <div className="floor-grid">
            <div className="floor-card">
              <h3>Erdgeschoss</h3>
              <ul>
                <li>Vorraum</li>
                <li>Wohnzimmer mit Kachelofen</li>
                <li>Essküche</li>
                <li>Badezimmer</li>
                <li>Separates WC</li>
              </ul>
            </div>
            <div className="floor-card">
              <h3>Obergeschoss</h3>
              <ul>
                <li>Vorraum</li>
                <li>Schlafzimmer 1 (Doppelbett 180×200 cm)</li>
                <li>Schlafzimmer 2 (Doppelbett 180×200 cm)</li>
                <li>Zustellbett/Reisegitterbett auf Anfrage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Ausstattung</h2>
          <div className="equipment-grid">
            <div className="equipment-card">
              <h4>Küche</h4>
              <ul>
                <li>Elektroherd mit Backofen</li>
                <li>Kühlschrank mit Gefrierfach</li>
                <li>Separater Gefrierschrank</li>
                <li>Kaffeevollautomat</li>
                <li>Wasserkocher & Toaster</li>
                <li>Geschirr und Besteck für 6+ Personen</li>
              </ul>
            </div>
            <div className="equipment-card">
              <h4>Wohnbereich</h4>
              <ul>
                <li>Gemütlicher Kachelofen</li>
                <li>Fernseher (Video on Demand)</li>
                <li>Playstation</li>
                <li>Bücher und Spiele</li>
              </ul>
            </div>
            <div className="equipment-card">
              <h4>Badezimmer</h4>
              <ul>
                <li>Waschmaschine</li>
                <li>Wäschetrockner</li>
                <li>Haartrockner</li>
              </ul>
            </div>
            <div className="equipment-card">
              <h4>Garten</h4>
              <ul>
                <li>Sitzmöbel</li>
                <li>Grill</li>
                <li>Trampolin</li>
                <li>Rutsche & Sandkiste</li>
                <li>Kinderspielzeug (saisonal)</li>
              </ul>
            </div>
            <div className="equipment-card">
              <h4>Sonstiges</h4>
              <ul>
                <li>W-LAN kostenfrei</li>
                <li>Parkplatz vor dem Haus</li>
              </ul>
            </div>
            <div className="equipment-card highlight">
              <h4>Hundrum-Sorglospaket</h4>
              <ul>
                <li>Hundekekse</li>
                <li>Wasser-/Futterschüsseln</li>
                <li>Hundebett</li>
                <li>Hundedecken</li>
                <li>Spielzeug</li>
                <li>Garten-Hundedusche</li>
                <li>Kotbeutel</li>
                <li>Handtücher</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Bildergalerie</h2>
          <Gallery images={ferienhaus_images} />
        </div>
      </section>
    </div>
  )
}

export default Ferienhaus
