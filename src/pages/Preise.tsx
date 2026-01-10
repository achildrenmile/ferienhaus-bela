import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero/Hero'
import TranslationDisclaimer from '../components/TranslationDisclaimer/TranslationDisclaimer'
import SEO from '../components/SEO/SEO'
import './Preise.css'

const Preise = () => {
  const { t } = useTranslation()
  const includedItems = t('preise.included.items', { returnObjects: true }) as string[]

  return (
    <div className="preise-page">
      <SEO
        title="Preise Ferienhaus Kärnten - ab €136/Nacht | Ferienhaus Bela"
        description="Ferienhaus Kärnten Preise: Nebensaison €136/Nacht, Hauptsaison €161/Nacht. Hunde gratis! Endreinigung €90. Belegungskalender und Buchungsbedingungen."
        canonical="/preise"
      />
      <TranslationDisclaimer />
      <Hero
        title={t('preise.hero.title')}
        subtitle={t('preise.hero.subtitle')}
        backgroundImage="/images/20200118_111901-scaled.jpg"
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('preise.season.title')}</h2>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-header">
                <h3>{t('preise.season.low.title')}</h3>
                <span className="price-period">{t('preise.season.low.period')}</span>
                <span className="price-note">{t('preise.season.low.note')}</span>
              </div>
              <div className="price-body">
                <span className="price-amount">€136</span>
                <span className="price-unit">{t('preise.season.perNight')}</span>
              </div>
            </div>

            <div className="price-card featured">
              <div className="price-badge">{t('preise.season.high.badge')}</div>
              <div className="price-header">
                <h3>{t('preise.season.high.title')}</h3>
                <span className="price-period">{t('preise.season.high.period')}</span>
              </div>
              <div className="price-body">
                <span className="price-amount">€161</span>
                <span className="price-unit">{t('preise.season.perNight')}</span>
              </div>
            </div>

            <div className="price-card">
              <div className="price-header">
                <h3>{t('preise.season.holiday.title')}</h3>
                <span className="price-period">{t('preise.season.holiday.period')}</span>
              </div>
              <div className="price-body">
                <span className="price-amount">€207</span>
                <span className="price-unit">{t('preise.season.perNight')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('preise.extras.title')}</h2>
          <div className="extras-grid">
            <div className="extra-card">
              <div className="extra-icon">🧹</div>
              <h4>{t('preise.extras.cleaning.title')}</h4>
              <span className="extra-price">€90</span>
              <span className="extra-note">{t('preise.extras.cleaning.note')}</span>
            </div>
            <div className="extra-card">
              <div className="extra-icon">🔑</div>
              <h4>{t('preise.extras.deposit.title')}</h4>
              <span className="extra-price">€100</span>
              <span className="extra-note">{t('preise.extras.deposit.note')}</span>
            </div>
            <div className="extra-card">
              <div className="extra-icon">📋</div>
              <h4>{t('preise.extras.tax.title')}</h4>
              <span className="extra-price">€2,30</span>
              <span className="extra-note">{t('preise.extras.tax.note')}</span>
            </div>
            <div className="extra-card highlight">
              <div className="extra-icon">🐕</div>
              <h4>{t('preise.extras.dogs.title')}</h4>
              <span className="extra-price">{t('preise.extras.dogs.price')}</span>
              <span className="extra-note">{t('preise.extras.dogs.note')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('preise.included.title')}</h2>
          <div className="included-grid">
            {includedItems.map((item, i) => (
              <div className="included-item" key={i}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('preise.conditions.title')}</h2>
          <div className="conditions-grid">
            <div className="condition-card">
              <h4>{t('preise.conditions.arrivalDay.title')}</h4>
              <p>{t('preise.conditions.arrivalDay.text')}</p>
            </div>
            <div className="condition-card">
              <h4>{t('preise.conditions.checkInOut.title')}</h4>
              <p>{t('preise.conditions.checkInOut.text')}</p>
            </div>
            <div className="condition-card">
              <h4>{t('preise.conditions.minStay.title')}</h4>
              <p>{t('preise.conditions.minStay.text')}</p>
            </div>
            <div className="condition-card">
              <h4>{t('preise.conditions.deposit.title')}</h4>
              <p>{t('preise.conditions.deposit.text')}</p>
            </div>
            <div className="condition-card">
              <h4>{t('preise.conditions.balance.title')}</h4>
              <p>{t('preise.conditions.balance.text')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('preise.calendar.title')}</h2>
          <p className="calendar-intro">{t('preise.calendar.intro')}</p>
          <div className="calendar-wrapper">
            <iframe
              src="/calendar.html"
              title={t('preise.calendar.title')}
              className="calendar-iframe"
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-box">
            <h2>{t('preise.cta.title')}</h2>
            <p>{t('preise.cta.text')}</p>
            <a href="mailto:office@ferienhaus-bela.at?subject=Ferienhaus%20Bela%20-%20Buchungsanfrage" className="btn btn-accent">
              {t('preise.cta.button')}
            </a>
          </div>
          <div className="region-partner">
            <a
              href="https://www.klopeinersee.at"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-logo-link"
            >
              <img
                src="/images/klopeiner-see-suedkaernten-logo.png"
                alt="Klopeiner See Südkärnten Tourismusregion - Partner von Ferienhaus Bela"
                className="partner-logo"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Preise
