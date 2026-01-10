import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero/Hero'
import Gallery from '../components/Gallery/Gallery'
import './Hundeurlaub.css'

const dog_images = [
  { src: '/images/20200729_0907180-01.jpeg', alt: '' },
  { src: '/images/20200714_172322-01.jpeg', alt: '' },
  { src: '/images/20200714_172806-01.jpeg', alt: '' },
  { src: '/images/hunde-neu-1.jpeg', alt: '' },
  { src: '/images/20200606_173431-1.jpg', alt: '' },
  { src: '/images/20200607_134551-1.jpg', alt: '' },
  { src: '/images/20200612_155329.jpg', alt: '' },
  { src: '/images/hunde-neu-2.jpeg', alt: '' },
  { src: '/images/20200607_134617-1.jpg', alt: '' },
  { src: '/images/20200607_134538-1.jpg', alt: '' },
  { src: '/images/20200717_092706-01.jpeg', alt: '' },
  { src: '/images/hunde-neu-3.jpeg', alt: '' },
  { src: '/images/20200717_091806-01.jpeg', alt: '' },
  { src: '/images/20200607_095217-1.jpg', alt: '' },
  { src: '/images/20200517_142635-2.jpg', alt: '' },
]

const Hundeurlaub = () => {
  const { t } = useTranslation()
  const packageItems = t('hundeurlaub.package.items', { returnObjects: true }) as string[]
  const packageIcons = ['🦴', '🥣', '🛏️', '🧣', '🎾', '🚿', '🗑️', '🛁']

  return (
    <div className="hundeurlaub-page">
      <Hero
        title={t('hundeurlaub.hero.title')}
        subtitle={t('hundeurlaub.hero.subtitle')}
        backgroundImage="/images/hunde-neu-1.jpeg"
      />

      <section className="section">
        <div className="container">
          <div className="intro-block">
            <h2>{t('hundeurlaub.intro.title')}</h2>
            <p>{t('hundeurlaub.intro.text')}</p>
          </div>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="container">
          <h2 className="section-title">{t('hundeurlaub.package.title')}</h2>
          <p className="section-subtitle">{t('hundeurlaub.package.subtitle')}</p>
          <div className="package-grid">
            {packageItems.map((item, i) => (
              <div className="package-item" key={i}>
                <div className="package-icon">{packageIcons[i]}</div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('hundeurlaub.outdoor.title')}</h2>
          <div className="features-row">
            <div className="feature-box">
              <h3>{t('hundeurlaub.outdoor.property.title')}</h3>
              <p>{t('hundeurlaub.outdoor.property.text')}</p>
            </div>
            <div className="feature-box">
              <h3>{t('hundeurlaub.outdoor.river.title')}</h3>
              <p>{t('hundeurlaub.outdoor.river.text')}</p>
            </div>
            <div className="feature-box">
              <h3>{t('hundeurlaub.outdoor.fenced.title')}</h3>
              <p>{t('hundeurlaub.outdoor.fenced.text')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('hundeurlaub.rules.title')}</h2>
          <div className="rules-grid">
            <div className="rule-card">
              <h4>{t('hundeurlaub.rules.count.title')}</h4>
              <p>{t('hundeurlaub.rules.count.text')}</p>
            </div>
            <div className="rule-card">
              <h4>{t('hundeurlaub.rules.inside.title')}</h4>
              <p>{t('hundeurlaub.rules.inside.text')}</p>
            </div>
            <div className="rule-card">
              <h4>{t('hundeurlaub.rules.cost.title')}</h4>
              <p><strong>{t('hundeurlaub.rules.cost.text')}</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('hundeurlaub.ourDogs.title')}</h2>
          <p className="section-subtitle">{t('hundeurlaub.ourDogs.subtitle')}</p>
          <div className="dogs-grid">
            <div className="dog-card">
              <h3>{t('hundeurlaub.ourDogs.kiki.name')}</h3>
              <p className="dog-age">{t('hundeurlaub.ourDogs.kiki.breed')}</p>
              <p>{t('hundeurlaub.ourDogs.kiki.description')}</p>
            </div>
            <div className="dog-card">
              <h3>{t('hundeurlaub.ourDogs.king.name')}</h3>
              <p className="dog-age">{t('hundeurlaub.ourDogs.king.breed')}</p>
              <p>{t('hundeurlaub.ourDogs.king.description')}</p>
            </div>
            <div className="dog-card">
              <h3>{t('hundeurlaub.ourDogs.neo.name')}</h3>
              <p className="dog-age">{t('hundeurlaub.ourDogs.neo.breed')}</p>
              <p>{t('hundeurlaub.ourDogs.neo.description')}</p>
            </div>
          </div>

          <div className="memorial-card">
            <h3>{t('hundeurlaub.ourDogs.memorial.title')}</h3>
            <p className="memorial-subtitle">{t('hundeurlaub.ourDogs.memorial.subtitle')}</p>
            <p>{t('hundeurlaub.ourDogs.memorial.text')}</p>
          </div>

        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('hundeurlaub.gallery')}</h2>
          <Gallery images={dog_images} />
        </div>
      </section>
    </div>
  )
}

export default Hundeurlaub
