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

const Umgebung = () => {
  return (
    <div className="umgebung-page">
      <Hero
        title="Umgebung / Aktivitäten / Brauchtum"
        subtitle="Entdecken Sie die Natur beidseitig der Grenze - Kärnten und Slowenien"
        backgroundImage="/images/b_DJI_0142-1920.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="intro-block">
            <h2>Standort & Umgebung</h2>
            <p>
              Das Ferienhaus befindet sich in Vellach, gehört zur Marktgemeinde Bad Eisenkappel
              in Kärnten und liegt nahe der slowenischen Grenze. Erholungssuchende und
              Aktivurlauber können die Natur beidseitig der Grenze genießen. Es erwarten Sie
              umfangreiche Freizeitmöglichkeiten, Ausflugsziele und eine Landschaft mit
              lebendiger Brauchtumskultur und regionalen Traditionen.
            </p>
            <div className="highlight-box">
              <h3>Eisenkappel-Vellach Besonderheiten</h3>
              <ul>
                <li>Zwei Grenzübergänge nach Slowenien (Seebergsattel und Paulitschsattel)</li>
                <li>Bad Eisenkappel ist Österreichs einziger Ort mit der Doppelbezeichnung Kurort und Luftkurort</li>
                <li>Südlichste Gemeinde Österreichs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Bildergalerie</h2>
          <p className="section-intro">
            Entdecken Sie die vielfältige Landschaft und Kultur der Region in unserer Galerie.
            Klicken Sie auf ein Bild für eine größere Ansicht.
          </p>
          <Gallery images={umgebung_images} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Aktivitäten & Ausflugsziele</h2>
          <p className="section-intro">
            Ob Wandern, Radfahren, Schwimmen oder kulturelle Entdeckungen - die Region bietet
            für jeden Geschmack das Richtige.
          </p>

          <div className="activity-category">
            <h3>Wandern & Bergsteigen</h3>
            <p className="category-description">
              Die Bergwelt rund um Bad Eisenkappel lädt zu unvergesslichen Wanderungen ein.
              Vom gemütlichen Spaziergang bis zur anspruchsvollen Gipfeltour ist alles möglich.
            </p>
            <div className="activity-grid">
              <div className="activity-item">
                <strong>Hochobir (2.139m)</strong>
                <span>Beliebter Aussichtsberg mit Panoramablick</span>
              </div>
              <div className="activity-item">
                <strong>Petzen</strong>
                <span>Bergbahn, Wanderwege und Bikepark</span>
              </div>
              <div className="activity-item">
                <strong>Kärntner Storschitz</strong>
                <span>Grenzüberschreitende Wanderungen</span>
              </div>
              <div className="activity-item">
                <strong>Koschuta</strong>
                <span>Klettersteige und alpine Touren</span>
              </div>
              <div className="activity-item">
                <strong>Luschaalm</strong>
                <span>Almwanderung mit Einkehrmöglichkeit</span>
              </div>
              <div className="activity-item">
                <strong>Kneipp-Wanderweg</strong>
                <span>Gesundheitsweg in Bad Eisenkappel</span>
              </div>
            </div>
          </div>

          <div className="activity-category">
            <h3>Natursehenswürdigkeiten</h3>
            <p className="category-description">
              Beeindruckende Naturwunder warten darauf, entdeckt zu werden.
            </p>
            <div className="activity-grid">
              <div className="activity-item highlight">
                <strong>Obir Tropfsteinhöhle</strong>
                <span>Faszinierende Höhlenwelt mit Führungen</span>
              </div>
              <div className="activity-item">
                <strong>Wildensteiner Wasserfall</strong>
                <span>Spektakulärer 54m hoher Wasserfall</span>
              </div>
              <div className="activity-item">
                <strong>Trögerner Klamm</strong>
                <span>Wildromantische Schlucht</span>
              </div>
              <div className="activity-item">
                <strong>Kupitzklamm</strong>
                <span>Natürliche Klamm mit Wanderweg</span>
              </div>
              <div className="activity-item">
                <strong>Hemmaberg</strong>
                <span>Archäologische Ausgrabungen und Wallfahrtskirche</span>
              </div>
              <div className="activity-item">
                <strong>Christophorusfelsen</strong>
                <span>Markante Felsformation</span>
              </div>
            </div>
          </div>

          <div className="activity-category">
            <h3>Wassersport & Freizeit</h3>
            <p className="category-description">
              Erfrischende Abkühlung und Wasserspaß in der Umgebung.
            </p>
            <div className="activity-grid">
              <div className="activity-item">
                <strong>Freibad Bad Eisenkappel</strong>
                <span>Familienfreundliches Schwimmbad</span>
              </div>
              <div className="activity-item">
                <strong>Sonnegger See</strong>
                <span>Naturbadeplatz und Freibad</span>
              </div>
              <div className="activity-item">
                <strong>Klopeiner See</strong>
                <span>Wärmster Badesee Europas</span>
              </div>
              <div className="activity-item">
                <strong>Turnersee</strong>
                <span>Vogelpark und Badeplätze</span>
              </div>
              <div className="activity-item">
                <strong>Kajak Rudnik Mezica</strong>
                <span>Kajakfahren im ehemaligen Bergwerk</span>
              </div>
              <div className="activity-item">
                <strong>Walderlebniswelt Klopeiner See</strong>
                <span>Abenteuer für die ganze Familie</span>
              </div>
            </div>
          </div>

          <div className="activity-category">
            <h3>Radfahren & Biken</h3>
            <p className="category-description">
              Von gemütlichen Radtouren bis zu actionreichen Downhill-Strecken.
            </p>
            <div className="activity-grid">
              <div className="activity-item highlight">
                <strong>Stollenbiken Petzen</strong>
                <span>Einzigartiges Mountainbiken im Bergwerk</span>
              </div>
              <div className="activity-item">
                <strong>Bikepark Petzen</strong>
                <span>Downhill-Strecken für alle Levels</span>
              </div>
              <div className="activity-item">
                <strong>Familienradwege</strong>
                <span>Gemütliche Touren durch die Region</span>
              </div>
              <div className="activity-item">
                <strong>Mountainbike-Touren</strong>
                <span>Anspruchsvolle Strecken in den Bergen</span>
              </div>
            </div>
          </div>

          <div className="activity-category">
            <h3>Kulturelle Sehenswürdigkeiten</h3>
            <p className="category-description">
              Geschichte und Kultur der Region erleben.
            </p>
            <div className="activity-grid">
              <div className="activity-item">
                <strong>Pfarrkirche Bad Eisenkappel</strong>
                <span>Historische Kirche im Ortszentrum</span>
              </div>
              <div className="activity-item">
                <strong>Kirche St. Leonhard</strong>
                <span>Romanische Kirche auf dem Berghang</span>
              </div>
              <div className="activity-item">
                <strong>Maria Dorn</strong>
                <span>Wallfahrtskirche</span>
              </div>
              <div className="activity-item">
                <strong>Koschnigkreuz</strong>
                <span>Traditionelles Wegkreuz</span>
              </div>
              <div className="activity-item">
                <strong>Panunziuskreuz Schaida</strong>
                <span>Historische Gedenkstätte</span>
              </div>
              <div className="activity-item">
                <strong>Hemmaberg Ausgrabungen</strong>
                <span>Frühchristliche Kirchenanlage</span>
              </div>
            </div>
          </div>

          <div className="activity-category geheimtipp">
            <h3>Unser Geheimtipp: Jezersko (Slowenien)</h3>
            <p className="category-description">
              Das Bergdorf Jezersko liegt umgeben von den Steiner Alpen und der Karawankenkette.
              Besonders bekannt ist der herzförmige Stausee, der an den ehemaligen Gletschersee
              erinnert, dem der Ort seinen Namen verdankt. Ein wunderschönes Ausflugsziel
              direkt hinter der Grenze!
            </p>
            <div className="activity-grid">
              <div className="activity-item highlight">
                <strong>Herzförmiger See</strong>
                <span>Romantisches Naturschauspiel</span>
              </div>
              <div className="activity-item">
                <strong>Steiner Alpen</strong>
                <span>Beeindruckende Bergkulisse</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Brauchtum & Traditionen</h2>
          <blockquote className="philosophy-quote">
            "Das Brauchtum macht den einen Tag vom anderen verschieden,
            die eine Stunde von den anderen Stunden."
            <cite>- nach Antoine de Saint-Exupéry</cite>
          </blockquote>
          <p className="section-intro">
            Die Region pflegt eine lebendige Brauchtumskultur mit traditionellen Festen
            und Bräuchen das ganze Jahr über. Diese Traditionen sind tief in der Gemeinschaft
            verwurzelt und werden von Generation zu Generation weitergegeben.
          </p>
          <div className="traditions-grid">
            <div className="tradition-card">
              <span className="tradition-date">1. Februar</span>
              <h4>Ante Pante / Kirchleintragen</h4>
              <p>Traditionelles Kirchleintragen in Bad Eisenkappel mit dem Spruch "Ante pante populore, kocle vrate cvile lore" - ein einzigartiger Brauch der Region.</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">19. März</span>
              <h4>Josefimarkt</h4>
              <p>Traditioneller Markt in Nötsch mit regionalen Produkten und Handwerk.</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">Karwoche</span>
              <h4>Palmbuschentragen</h4>
              <p>Traditionelles Brauchtum zur Karwoche mit kunstvoll gebundenen Palmbuschen.</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">Sommer</span>
              <h4>Kirchtage</h4>
              <p>Traditionelle Feste wie das Kufenstechen im Gailtal mit Musik, Tanz und regionalen Spezialitäten.</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">21. Juni</span>
              <h4>Sonnwendfeuer</h4>
              <p>Feierlichkeiten zur Sommersonnenwende mit Bergfeuern in der ganzen Region.</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">1. Samstag Oktober</span>
              <h4>Polentafest</h4>
              <p>Traditionelles Fest in Nötsch rund um das beliebte Maisgericht.</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">4. Dezember</span>
              <h4>Barbaratag</h4>
              <p>Traditioneller Feiertag der Bergleute mit besonderen Bräuchen.</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">Dezember</span>
              <h4>Krampus & Perchten</h4>
              <p>Spektakuläre Umzüge der Perchtengruppe Bad Eisenkappel - ein Höhepunkt des Winters.</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">Advent</span>
              <h4>Adventmärkte & Rorate</h4>
              <p>Besinnliche Adventszeit mit traditionellen Märkten und frühmorgendlichen Rorate-Messen.</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">26. Dezember</span>
              <h4>Pferdesegnung</h4>
              <p>Traditionelle Segnung der Pferde am Stefanietag.</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">28. Dezember</span>
              <h4>"Frisch und gsund"</h4>
              <p>Traditioneller Brauch am Unschuldigen Kindertag mit Rutenschlägen für Gesundheit.</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">Neujahr</span>
              <h4>Sternsingen</h4>
              <p>Traditionelles Sternsingen in der Neujahrszeit - die Heiligen Drei Könige ziehen von Haus zu Haus.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Nützliche Links</h2>
          <p className="section-intro">
            Weitere Informationen und Planungshilfen für Ihren Aufenthalt.
          </p>
          <div className="links-grid">
            <a
              href="https://www.bad-eisenkappel.info/tourismus/services/infomaterial-download.html"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <h4>Infomaterial Bad Eisenkappel</h4>
              <p>Broschüren und Informationen zum Download</p>
            </a>
            <a
              href="https://www.bad-eisenkappel.info/tourismus/services/uebersichtskarte.html"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <h4>Übersichtskarte</h4>
              <p>Interaktive Karte der Region</p>
            </a>
            <a
              href="http://www.jezersko.info/de/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <h4>Jezersko (Slowenien)</h4>
              <p>Unser Geheimtipp mit herzförmigem See</p>
            </a>
            <a
              href="http://www.perchtengruppe-badeisenkappel.at"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <h4>Perchtengruppe Bad Eisenkappel</h4>
              <p>Traditionelle Perchtengruppe der Region</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="closing-note">
            <p>
              <em>
                "Jeder sieht einen Teil der Wirklichkeit; zusammen sehen wir das ganze Bild."
              </em>
            </p>
            <p>
              Wir erweitern unsere Galerie laufend mit Fotos von Gästen.
              Teilen Sie Ihre schönsten Eindrücke mit uns!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Umgebung
