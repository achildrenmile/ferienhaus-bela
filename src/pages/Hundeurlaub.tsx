import Hero from '../components/Hero/Hero'
import Gallery from '../components/Gallery/Gallery'
import './Hundeurlaub.css'

const dog_images = [
  { src: '/images/20200729_0907180-01.jpeg', alt: 'Hunde im Garten' },
  { src: '/images/20200714_172322-01.jpeg', alt: 'Hund am Fluss' },
  { src: '/images/20200714_172806-01.jpeg', alt: 'Hund beim Spielen' },
  { src: '/images/20200606_173431-1.jpg', alt: 'Hund im Garten' },
  { src: '/images/20200607_134551-1.jpg', alt: 'Hundespiel' },
  { src: '/images/20200612_155329.jpg', alt: 'Hund im Freien' },
  { src: '/images/20200607_134617-1.jpg', alt: 'Hunde' },
  { src: '/images/20200607_134538-1.jpg', alt: 'Vierbeiner' },
  { src: '/images/20200717_092706-01.jpeg', alt: 'Hund beim Baden' },
  { src: '/images/20200717_091806-01.jpeg', alt: 'Hund am Wasser' },
  { src: '/images/20200607_095217-1.jpg', alt: 'Hundefreuden' },
  { src: '/images/20200517_142635-2.jpg', alt: 'Hund im Schnee' },
]

const Hundeurlaub = () => {
  return (
    <div className="hundeurlaub-page">
      <Hero
        title="Hundeurlaub"
        subtitle="Hunde sind bei uns nicht nur erlaubt, sondern HERZLICH WILLKOMMEN und wohnen selbstverständlich kostenfrei!"
        backgroundImage="/images/20200517_125002-2.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="intro-block">
            <h2>Urlaub mit Hund in Kärnten</h2>
            <p>
              Wir sind selbst Hundebesitzer mit drei Hunden und haben unser Angebot
              speziell für hundefreundliche Ferien konzipiert. Bei uns können Sie
              und Ihre Fellnasen entspannt die Natur genießen.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="container">
          <h2 className="section-title">Hundrum-Sorglospaket</h2>
          <p className="section-subtitle">Kostenlos für alle Vierbeiner inklusive</p>
          <div className="package-grid">
            <div className="package-item">
              <div className="package-icon">🦴</div>
              <span>Hundekekse</span>
            </div>
            <div className="package-item">
              <div className="package-icon">🥣</div>
              <span>Wasser- und Futterschüsseln</span>
            </div>
            <div className="package-item">
              <div className="package-icon">🛏️</div>
              <span>Hundekörbchen</span>
            </div>
            <div className="package-item">
              <div className="package-icon">🧣</div>
              <span>Hundedecken</span>
            </div>
            <div className="package-item">
              <div className="package-icon">🎾</div>
              <span>Hundespielzeug</span>
            </div>
            <div className="package-item">
              <div className="package-icon">🚿</div>
              <span>Hundedusche im Garten</span>
            </div>
            <div className="package-item">
              <div className="package-icon">🗑️</div>
              <span>Kotbeutel</span>
            </div>
            <div className="package-item">
              <div className="package-icon">🛁</div>
              <span>Hundehandtücher</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Grundstück & Outdoor</h2>
          <div className="features-row">
            <div className="feature-box">
              <h3>1.300 m² Grundstück</h3>
              <p>Viel Platz zum Toben, Spielen und Erkunden für Ihre Vierbeiner.</p>
            </div>
            <div className="feature-box">
              <h3>Direkt an der Vellach</h3>
              <p>Der Fluss bietet im Sommer die perfekte Abkühlung für wasserliebende Hunde.</p>
            </div>
            <div className="feature-box">
              <h3>Eingezäunter Garten</h3>
              <p>Sichere Umgebung zum Entspannen und Chillen im Freien.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Regeln & Kapazität</h2>
          <div className="rules-grid">
            <div className="rule-card">
              <h4>Anzahl der Hunde</h4>
              <p>Maximum 3 Hunde. Mehr Hunde auf Anfrage möglich.</p>
            </div>
            <div className="rule-card">
              <h4>Im Haus</h4>
              <p>
                Hunde dürfen nicht in Betten oder auf die Couch.
                Hundedecken und Hundekörbchen stehen für die Fellnasen bereit.
              </p>
            </div>
            <div className="rule-card">
              <h4>Kosten</h4>
              <p>Hunde wohnen bei uns selbstverständlich <strong>kostenfrei</strong>!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Unsere Hunde</h2>
          <p className="section-subtitle">Die Gastgeber auf vier Pfoten</p>
          <div className="dogs-grid">
            <div className="dog-card">
              <h3>Kiki</h3>
              <p className="dog-age">9 Jahre, Kroatischer Schäfermix</p>
              <p>Frech, loyal, souverän - unsere ruhige Rudelchefin</p>
            </div>
            <div className="dog-card">
              <h3>Kira</h3>
              <p className="dog-age">14 Jahre, Border Collie Mix</p>
              <p>Will to please, Balljunkie, aufmerksam, Schmuserin</p>
            </div>
            <div className="dog-card">
              <h3>King</h3>
              <p className="dog-age">5 Jahre, Aussie</p>
              <p>Verspielter Kasperl, sehr lernbereit und immer im Mittelpunkt</p>
            </div>
          </div>
          <div className="social-link-box">
            <p>Folgen Sie unseren Hunden auf Instagram:</p>
            <a
              href="https://www.instagram.com/kiki_kira_king"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              @kiki_kira_king
            </a>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Bildergalerie</h2>
          <Gallery images={dog_images} />
        </div>
      </section>
    </div>
  )
}

export default Hundeurlaub
