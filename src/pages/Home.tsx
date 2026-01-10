import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import Contact from '../components/Contact/Contact'
import TranslationDisclaimer from '../components/TranslationDisclaimer/TranslationDisclaimer'
import SEO from '../components/SEO/SEO'
import './Home.css'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="home">
      <SEO
        title="Ferienhaus Bela - Urlaub mit Hund in Kärnten, Österreich"
        description="Hundefreundliches Ferienhaus in Kärnten direkt an der Vellach. 84m² Wohnfläche, 1.300m² eingezäunter Garten, bis zu 3 Hunde gratis. Nahe Bad Eisenkappel."
        canonical="/"
      />
      <TranslationDisclaimer />
      <Hero
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        backgroundImage="/images/20200606_103912.jpg"
        showCTA={true}
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('home.welcome.title')}</h2>
          <div className="intro-grid">
            <div className="intro-content">
              <p>{t('home.welcome.p1')}</p>
              <p>{t('home.welcome.p2')}</p>
              <p>
                <strong>{t('home.welcome.p3')}</strong>
              </p>
            </div>
            <div className="intro-image">
              <img
                src="/images/20200524_203311-1.jpg"
                alt="Ferienhaus Bela Außenansicht - hundefreundliches Ferienhaus in Kärnten"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">{t('home.features.title')}</h2>
          <div className="features-grid">
            <Link to="/ferienhaus" className="feature-card feature-card-link">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
              </div>
              <h3>{t('home.features.house.title')}</h3>
              <p>{t('home.features.house.description')}</p>
            </Link>

            <Link to="/hundeurlaub" className="feature-card feature-card-link">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12h8M12 8v8"/>
                </svg>
              </div>
              <h3>{t('home.features.dogs.title')}</h3>
              <p>{t('home.features.dogs.description')}</p>
            </Link>

            <Link to="/umgebung" className="feature-card feature-card-link">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>{t('home.features.location.title')}</h3>
              <p>{t('home.features.location.description')}</p>
            </Link>

            <Link to="/preise" className="feature-card feature-card-link">
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
              <h3>{t('home.features.activities.title')}</h3>
              <p>{t('home.features.activities.description')}</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section gallery-preview">
        <div className="container">
          <h2 className="section-title">{t('home.impressions')}</h2>
          <div className="preview-grid">
            <img
              src="/images/20200118_111901-scaled.jpg"
              alt="Wohnzimmer mit Kachelofen im Ferienhaus Kärnten"
            />
            <img
              src="/images/20200118_132741-scaled.jpg"
              alt="Vollausgestattete Küche im Ferienhaus Bela"
            />
            <img
              src="/images/20200612_163615.jpg"
              alt="Eingezäunter Garten - ideal für Urlaub mit Hund"
            />
            <img
              src="/images/IMG-20200621-WA0012.jpg"
              alt="Vellach Fluss direkt am Ferienhaus Grundstück"
            />
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default Home
