import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero/Hero'
import Gallery from '../components/Gallery/Gallery'
import TranslationDisclaimer from '../components/TranslationDisclaimer/TranslationDisclaimer'
import SEO from '../components/SEO/SEO'
import './Ferienhaus.css'

const ferienhaus_images = [
  { src: '/images/20200118_132741-scaled.jpg', alt: 'Vollausgestattete Küche im Ferienhaus Bela Kärnten' },
  { src: '/images/20200118_105344-scaled.jpg', alt: 'Badezimmer mit Waschmaschine im Ferienhaus' },
  { src: '/images/20200118_111901-scaled.jpg', alt: 'Gemütliches Wohnzimmer mit Kachelofen' },
  { src: '/images/20200118_095706-scaled.jpg', alt: 'Schlafzimmer mit Doppelbett 180x200cm' },
  { src: '/images/20200118_101629-scaled.jpg', alt: 'Zweites Schlafzimmer im Ferienhaus Kärnten' },
  { src: '/images/20200612_163615.jpg', alt: 'Eingezäunter Garten mit 1300m² am Ferienhaus' },
  { src: '/images/20200611_142130.jpg', alt: 'Knusperhäuschen Spielhaus für Kinder' },
  { src: '/images/IMG-20200621-WA0012.jpg', alt: 'Vellach Fluss direkt am Ferienhaus Grundstück' },
]

const Ferienhaus = () => {
  const { t } = useTranslation()

  return (
    <div className="ferienhaus-page">
      <SEO
        title="Ferienhaus Kärnten - 84m² mit Garten | Ferienhaus Bela"
        description="Ferienhaus in Bad Eisenkappel: 84m² auf 2 Etagen, 2 Schlafzimmer, vollausgestattete Küche, Kachelofen. 1.300m² Garten direkt an der Vellach. Ideal für Familien."
        canonical="/ferienhaus"
        ogImage="/images/20200118_111901-scaled.jpg"
      />
      <TranslationDisclaimer />
      <Hero
        title={t('ferienhaus.hero.title')}
        subtitle={t('ferienhaus.hero.subtitle')}
        backgroundImage="/images/20200606_103912.jpg"
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('ferienhaus.location.title')}</h2>
          <div className="content-block">
            <p>{t('ferienhaus.location.text')}</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('ferienhaus.size.title')}</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">84 m²</span>
              <span className="stat-label">{t('ferienhaus.size.area')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">4+2</span>
              <span className="stat-label">{t('ferienhaus.size.persons')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">1.300 m²</span>
              <span className="stat-label">{t('ferienhaus.size.garden')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">2</span>
              <span className="stat-label">{t('ferienhaus.size.bedrooms')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('ferienhaus.rooms.title')}</h2>
          <div className="floor-grid">
            <div className="floor-card">
              <h3>{t('ferienhaus.rooms.ground')}</h3>
              <ul>
                {(t('ferienhaus.rooms.groundItems', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="floor-card">
              <h3>{t('ferienhaus.rooms.upper')}</h3>
              <ul>
                {(t('ferienhaus.rooms.upperItems', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('ferienhaus.equipment.title')}</h2>
          <div className="equipment-grid">
            <div className="equipment-card">
              <h4>{t('ferienhaus.equipment.kitchen')}</h4>
              <ul>
                {(t('ferienhaus.equipment.kitchenItems', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="equipment-card">
              <h4>{t('ferienhaus.equipment.living')}</h4>
              <ul>
                {(t('ferienhaus.equipment.livingItems', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="equipment-card">
              <h4>{t('ferienhaus.equipment.bathroom')}</h4>
              <ul>
                {(t('ferienhaus.equipment.bathroomItems', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="equipment-card">
              <h4>{t('ferienhaus.equipment.gardenTitle')}</h4>
              <ul>
                {(t('ferienhaus.equipment.gardenItems', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="equipment-card">
              <h4>{t('ferienhaus.equipment.other')}</h4>
              <ul>
                {(t('ferienhaus.equipment.otherItems', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="equipment-card highlight">
              <h4>{t('ferienhaus.equipment.dogPackage')}</h4>
              <ul>
                {(t('ferienhaus.equipment.dogPackageItems', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('ferienhaus.gallery')}</h2>
          <Gallery images={ferienhaus_images} />
        </div>
      </section>
    </div>
  )
}

export default Ferienhaus
