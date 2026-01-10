import Hero from '../components/Hero/Hero'
import Contact from '../components/Contact/Contact'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Hero
        title="Ferienhaus Bela"
        subtitle="Ihr hundefreundliches Ferienhaus in Kärnten, direkt an der Vellach. Erholung und Natur pur, nur 4 km von Bad Eisenkappel entfernt."
        backgroundImage="/images/20200606_103912.jpg"
        showCTA={true}
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Willkommen im Ferienhaus Bela</h2>
          <div className="intro-grid">
            <div className="intro-content">
              <p>
                Unser Ferienhaus befindet sich etwa 4 km nach dem Kurort Bad Eisenkappel
                direkt am Fluss Vellach (slowenisch: Bela). Die idyllische Lage ermöglicht
                Naturgenuss abseits von Hektik und Lärm.
              </p>
              <p>
                Erholungsuchende und Aktivurlauber können bei uns beidseitig der
                Grenze die Natur genießen. Mit unserer Lage nahe der slowenischen
                Grenze bieten sich zahlreiche Ausflugsmöglichkeiten in zwei Ländern.
              </p>
              <p>
                <strong>Hunde sind bei uns nicht nur erlaubt, sondern HERZLICH WILLKOMMEN
                und wohnen selbstverständlich kostenfrei!</strong>
              </p>
            </div>
            <div className="intro-image">
              <img
                src="/images/20200524_203311-1.jpg"
                alt="Ferienhaus Bela Außenansicht"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Was uns besonders macht</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
              </div>
              <h3>Gemütliches Ferienhaus</h3>
              <p>84 m² Wohnfläche auf zwei Etagen, komplett ausgestattet für bis zu 4 Erwachsene und 2 Kinder.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12h8M12 8v8"/>
                </svg>
              </div>
              <h3>Hundefreundlich</h3>
              <p>1.300 m² großes Grundstück direkt an der Vellach. Hunde wohnen kostenfrei mit Hundrum-Sorglospaket.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Perfekte Lage</h3>
              <p>Direkt am Fluss Vellach, nur 4 km von Bad Eisenkappel, nahe der slowenischen Grenze.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/>
                  <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/>
                  <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/>
                  <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/>
                  <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
                  <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/>
                  <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>
                </svg>
              </div>
              <h3>Vielfältige Aktivitäten</h3>
              <p>Wandern, Radfahren, Schwimmen, Klettern und mehr - für jeden Geschmack ist etwas dabei.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section gallery-preview">
        <div className="container">
          <h2 className="section-title">Impressionen</h2>
          <div className="preview-grid">
            <img
              src="/images/20200118_111901-scaled.jpg"
              alt="Wohnzimmer"
            />
            <img
              src="/images/20200118_132741-scaled.jpg"
              alt="Küche"
            />
            <img
              src="/images/20200612_163615.jpg"
              alt="Garten"
            />
            <img
              src="/images/IMG-20200621-WA0012.jpg"
              alt="Vellach Fluss"
            />
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default Home
