import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero/Hero'
import Gallery from '../components/Gallery/Gallery'
import './Umgebung.css'

const umgebung_images = [
  // Landschaft & Panorama
  { src: '/images/b_DJI_0142-1920.jpg', alt: 'Luftaufnahme der Region' },
  { src: '/images/bek-pano-kl.jpg', alt: 'Bad Eisenkappel Panorama' },
  { src: '/images/20200602_170436-01-1.jpeg', alt: 'Landschaft bei Bad Eisenkappel' },
  { src: '/images/SDIM0693_stitch-1920.jpg', alt: 'Storschitz Panorama' },
  { src: '/images/SDIM0671-2-1920.jpg', alt: 'Bergpanorama' },
  { src: '/images/DSC01205-2-1920.jpg', alt: 'Aussicht vom Berg' },
  { src: '/images/Blick-Rainer-SH.jpg', alt: 'Bergblick' },

  // Hochobir
  { src: '/images/Hochobir1.jpg', alt: 'Hochobir Gipfel' },
  { src: '/images/Hochobir.jpg', alt: 'Hochobir Panorama' },
  { src: '/images/20200613_092336.jpg', alt: 'Aufstieg zum Hochobir' },
  { src: '/images/20200613_093021.jpg', alt: 'Wanderung Hochobir' },
  { src: '/images/20200613_095755.jpg', alt: 'Hochobir Aussicht' },
  { src: '/images/20200613_095828.jpg', alt: 'Gipfelkreuz Hochobir' },

  // Storschitz & Petzen
  { src: '/images/F056E5EE-DD4C-4D4A-A1A7-EF71CAB3B0A2.jpg', alt: 'Storschitz' },
  { src: '/images/IMG-20200731-WA0010.jpg', alt: 'Storschitz Wanderung' },
  { src: '/images/20200905_110256.jpg', alt: 'Bergwanderung' },
  { src: '/images/20200905_120551.jpg', alt: 'Berggipfel' },
  { src: '/images/20200905_124852.jpg', alt: 'Aussichtspunkt' },
  { src: '/images/20200905_134629.jpg', alt: 'Berglandschaft' },
  { src: '/images/20200905_100103.jpg', alt: 'Wanderweg' },
  { src: '/images/20200905_115743.jpg', alt: 'Petzen Ausblick' },
  { src: '/images/Florian-Mori-DSC1963-1920.jpg', alt: 'Petzen' },

  // Wasserfälle & Klammen
  { src: '/images/20200717_093515-01.jpeg', alt: 'Wildensteiner Wasserfall' },
  { src: '/images/20200717_091829-01.jpeg', alt: 'Wasserfall Nahaufnahme' },
  { src: '/images/20200728_085935.jpg', alt: 'Trögerner Klamm' },
  { src: '/images/20200729_085608-01.jpeg', alt: 'Klamm Wanderung' },
  { src: '/images/20200729_090132-01.jpeg', alt: 'Kupitzklamm' },

  // Obir Tropfsteinhöhle
  { src: '/images/DSC08111-2-1920.jpg', alt: 'Obir Tropfsteinhöhle' },
  { src: '/images/orgel-1-1920.jpg', alt: 'Höhlenorgel' },
  { src: '/images/Fledermaus-1920.jpg', alt: 'Fledermaus in der Höhle' },

  // Wandern & Klettern
  { src: '/images/DSCN9604-1920.jpg', alt: 'Wanderleidenschaft' },
  { src: '/images/DSCN9725-1920.jpg', alt: 'Bergwandern' },
  { src: '/images/koschuta_twk-344.jpg', alt: 'Koschuta Gebirge' },
  { src: '/images/koschuta_twk-112.jpg', alt: 'Wanderweg Koschuta' },
  { src: '/images/koschuta_twk-439.jpg', alt: 'Klettern' },
  { src: '/images/koschuta_twk-450.jpg', alt: 'Klettersteig' },
  { src: '/images/Klettern-Kinder2.jpg', alt: 'Klettern für Kinder' },
  { src: '/images/20200731_103452-01.jpeg', alt: 'Wanderbegleiter' },

  // Freizeit & Sport
  { src: '/images/freibad-02.jpg', alt: 'Freibad Bad Eisenkappel' },
  { src: '/images/20200627_152938.jpg', alt: 'Schwimmbad' },
  { src: '/images/tennis.jpg', alt: 'Tennisplatz' },
  { src: '/images/Stollenbiken-1920.jpg', alt: 'Stollenbiken Petzen' },
  { src: '/images/radfamilie-01.jpg', alt: 'Radfahren mit Familie' },
  { src: '/images/20200715_102221.jpg', alt: 'Bikepark' },
  { src: '/images/IMG_2060.jpg', alt: 'Walking' },
  { src: '/images/P1530728-1920.jpg', alt: 'Schneeschuhwandern' },
  { src: '/images/Rudnik-Mezica-kajak-2013-2-1920.jpg', alt: 'Kajak Rudnik Mezica' },

  // Seen & Ausflugsziele
  { src: '/images/20200715_105245.jpg', alt: 'Badesee' },
  { src: '/images/20200715_091106.jpg', alt: 'Bergbahn' },
  { src: '/images/c-Franz-GERDL-2015-gr-140-1920.jpg', alt: 'Kärntner See' },
  { src: '/images/c-Franz-GERDL-2015-gr-218-1920.jpg', alt: 'Seelandschaft' },
  { src: '/images/c-Franz-GERDL-2015-gr-231-1920.jpg', alt: 'Wassersport am See' },
  { src: '/images/20200714_093124.jpg', alt: 'Vogelpark Turnersee' },
  { src: '/images/20200714_104935.jpg', alt: 'Walderlebniswelt' },
  { src: '/images/20200714_104930.jpg', alt: 'Naturerlebnis' },
  { src: '/images/20200714_104233.jpg', alt: 'Familienausflug' },

  // Almen & Hütten
  { src: '/images/Luschaalm.jpg', alt: 'Luschaalm' },
  { src: '/images/Luschaalm1.jpg', alt: 'Luschaalm Wanderung' },
  { src: '/images/Luschaalm_Rieplhof.jpg', alt: 'Almhütte' },
  { src: '/images/Luscha.jpg', alt: 'Luscha Berg' },
  { src: '/images/hagenegg-5.jpg', alt: 'Hagenegg' },
  { src: '/images/alex1.jpg', alt: 'Gasthaus' },
  { src: '/images/20200816_135028.jpg', alt: 'Restaurant Rogar' },

  // Grenzübergang & Slowenien
  { src: '/images/Unterwegs-am-Paulitschsattel-1920.jpg', alt: 'Paulitschsattel Grenzübergang' },
  { src: '/images/20200111_154707-scaled.jpg', alt: 'Winter am Paulitschsattel' },
  { src: '/images/20200111_155907-scaled.jpg', alt: 'Winterlandschaft Grenze' },
  { src: '/images/DSC_0108-1920.jpg', alt: 'Ojstra' },
  { src: '/images/DSC_0186-1920.jpg', alt: 'Koschutnikturm' },
  { src: '/images/DSCN8563-rici-1920.jpg', alt: 'Uschowa' },
  { src: '/images/20200604_114938-1.jpg', alt: 'Jezersko Slowenien' },
  { src: '/images/20200104_153755-01-2.jpeg', alt: 'Jezersko mit Hunden' },

  // Hemmaberg
  { src: '/images/20200903_095936-01.jpeg', alt: 'Hemmaberg' },
  { src: '/images/20200903_101057-01.jpeg', alt: 'Hemmaberg Aussicht' },
  { src: '/images/20200903_100448-01.jpeg', alt: 'Hemmaberg Kirche' },

  // Kirchen & Kulturstätten
  { src: '/images/Maria-Dorn.jpg', alt: 'Maria Dorn Kirche' },
  { src: '/images/pfarrkirche-02.jpg', alt: 'Pfarrkirche Bad Eisenkappel' },
  { src: '/images/IMG-20200816-WA0180.jpg', alt: 'Weg nach St. Leonhard' },
  { src: '/images/IMG-20200816-WA0179.jpg', alt: 'Kirche St. Leonhard' },
  { src: '/images/IMG-20200816-WA0296.jpg', alt: 'Felsentor' },
  { src: '/images/Koschnigkreuz.jpg', alt: 'Koschnigkreuz' },
  { src: '/images/Panunziuskreuz-Schaida.jpg', alt: 'Panunziuskreuz Schaida' },
  { src: '/images/20200530_133053.jpg', alt: 'Christophorusfelsen' },

  // Brauchtum
  { src: '/images/Ante-Pante.jpg', alt: 'Ante Pante Brauchtum' },
  { src: '/images/20200201_184758.jpg', alt: 'Kirchleintragen' },
  { src: '/images/antepante.jpg', alt: 'Ante Pante Tradition' },
  { src: '/images/bek_26.jpg', alt: 'Ante Pante Feier' },
  { src: '/images/Kirchtag.jpg', alt: 'Kirchtag Tradition' },
  { src: '/images/IMGL4412.jpg', alt: 'Josefimarkt' },
  { src: '/images/IMGL4392.jpg', alt: 'Markttreiben' },
  { src: '/images/IMG-20200617-WA0002.jpg', alt: 'Gailtaler Tracht' },
  { src: '/images/IMG-20200617-WA0000.jpg', alt: 'Polentafest' },
  { src: '/images/perchten1.jpg', alt: 'Perchtengruppe' },
  { src: '/images/perchten2.jpg', alt: 'Perchtenlauf' },
  { src: '/images/perchten3.jpg', alt: 'Krampus und Perchten' },
  { src: '/images/perchten4.jpg', alt: 'Perchtenbrauch' },
]

interface ActivityItem {
  name: string
  desc: string
  highlight?: boolean
}

interface TraditionItem {
  date: string
  title: string
  text: string
}

interface LinkItem {
  title: string
  desc: string
}

const linkUrls = [
  'https://www.bad-eisenkappel.info/tourismus/services/infomaterial-download.html',
  'https://www.bad-eisenkappel.info/tourismus/services/uebersichtskarte.html',
  'http://www.jezersko.info/de/',
  'http://www.perchtengruppe-badeisenkappel.at'
]

const Umgebung = () => {
  const { t } = useTranslation()

  const highlightItems = t('umgebung.intro.highlights.items', { returnObjects: true }) as string[]

  const hikingItems = t('umgebung.activities.hiking.items', { returnObjects: true }) as ActivityItem[]
  const natureItems = t('umgebung.activities.nature.items', { returnObjects: true }) as ActivityItem[]
  const waterItems = t('umgebung.activities.water.items', { returnObjects: true }) as ActivityItem[]
  const bikingItems = t('umgebung.activities.biking.items', { returnObjects: true }) as ActivityItem[]
  const cultureItems = t('umgebung.activities.culture.items', { returnObjects: true }) as ActivityItem[]
  const jezerskoItems = t('umgebung.activities.jezersko.items', { returnObjects: true }) as ActivityItem[]

  const traditionItems = t('umgebung.traditions.items', { returnObjects: true }) as TraditionItem[]
  const linkItems = t('umgebung.links.items', { returnObjects: true }) as LinkItem[]

  return (
    <div className="umgebung-page">
      <Hero
        title={t('umgebung.hero.title')}
        subtitle={t('umgebung.hero.subtitle')}
        backgroundImage="/images/b_DJI_0142-1920.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="intro-block">
            <h2>{t('umgebung.intro.title')}</h2>
            <p>{t('umgebung.intro.text')}</p>
            <div className="highlight-box">
              <h3>{t('umgebung.intro.highlights.title')}</h3>
              <ul>
                {highlightItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('umgebung.gallery.title')}</h2>
          <p className="section-intro">{t('umgebung.gallery.intro')}</p>
          <Gallery images={umgebung_images} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('umgebung.activities.title')}</h2>
          <p className="section-intro">{t('umgebung.activities.intro')}</p>

          <div className="activity-category">
            <h3>{t('umgebung.activities.hiking.title')}</h3>
            <p className="category-description">{t('umgebung.activities.hiking.description')}</p>
            <div className="activity-grid">
              {hikingItems.map((item, i) => (
                <div className={`activity-item${item.highlight ? ' highlight' : ''}`} key={i}>
                  <strong>{item.name}</strong>
                  <span>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="activity-category">
            <h3>{t('umgebung.activities.nature.title')}</h3>
            <p className="category-description">{t('umgebung.activities.nature.description')}</p>
            <div className="activity-grid">
              {natureItems.map((item, i) => (
                <div className={`activity-item${item.highlight ? ' highlight' : ''}`} key={i}>
                  <strong>{item.name}</strong>
                  <span>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="activity-category">
            <h3>{t('umgebung.activities.water.title')}</h3>
            <p className="category-description">{t('umgebung.activities.water.description')}</p>
            <div className="activity-grid">
              {waterItems.map((item, i) => (
                <div className={`activity-item${item.highlight ? ' highlight' : ''}`} key={i}>
                  <strong>{item.name}</strong>
                  <span>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="activity-category">
            <h3>{t('umgebung.activities.biking.title')}</h3>
            <p className="category-description">{t('umgebung.activities.biking.description')}</p>
            <div className="activity-grid">
              {bikingItems.map((item, i) => (
                <div className={`activity-item${item.highlight ? ' highlight' : ''}`} key={i}>
                  <strong>{item.name}</strong>
                  <span>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="activity-category">
            <h3>{t('umgebung.activities.culture.title')}</h3>
            <p className="category-description">{t('umgebung.activities.culture.description')}</p>
            <div className="activity-grid">
              {cultureItems.map((item, i) => (
                <div className={`activity-item${item.highlight ? ' highlight' : ''}`} key={i}>
                  <strong>{item.name}</strong>
                  <span>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="activity-category geheimtipp">
            <h3>{t('umgebung.activities.jezersko.title')}</h3>
            <p className="category-description">{t('umgebung.activities.jezersko.description')}</p>
            <div className="activity-grid">
              {jezerskoItems.map((item, i) => (
                <div className={`activity-item${item.highlight ? ' highlight' : ''}`} key={i}>
                  <strong>{item.name}</strong>
                  <span>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('umgebung.traditions.title')}</h2>
          <blockquote className="philosophy-quote">
            "{t('umgebung.traditions.quote')}"
            <cite>{t('umgebung.traditions.quoteAuthor')}</cite>
          </blockquote>
          <p className="section-intro">{t('umgebung.traditions.intro')}</p>
          <div className="traditions-grid">
            {traditionItems.map((item, i) => (
              <div className="tradition-card" key={i}>
                <span className="tradition-date">{item.date}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('umgebung.links.title')}</h2>
          <p className="section-intro">{t('umgebung.links.intro')}</p>
          <div className="links-grid">
            {linkItems.map((item, i) => (
              <a
                key={i}
                href={linkUrls[i]}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card"
              >
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="closing-note">
            <p>
              <em>"{t('umgebung.closing.quote')}"</em>
            </p>
            <p>{t('umgebung.closing.text')}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Umgebung
