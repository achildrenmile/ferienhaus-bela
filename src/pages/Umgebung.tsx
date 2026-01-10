import Hero from '../components/Hero/Hero'
import './Umgebung.css'

const Umgebung = () => {
  return (
    <div className="umgebung-page">
      <Hero
        title="Umgebung & Aktivitäten"
        subtitle="Entdecken Sie die Natur beidseitig der Grenze - Kärnten und Slowenien"
        backgroundImage="/images/20200612_163615.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="intro-block">
            <h2>Standort & Umgebung</h2>
            <p>
              Das Ferienhaus befindet sich in Vellach, gehört zur Marktgemeinde Bad Eisenkappel
              in Kärnten und liegt nahe der slowenischen Grenze. Die Region bietet
              Erholungssuchenden und Aktivurlaubern Naturerlebnisse beidseitig der Grenze.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Aktivitäten & Ausflugsziele</h2>

          <div className="activity-category">
            <h3>Wassersport & Freizeit</h3>
            <div className="activity-grid">
              <div className="activity-item">Freibad Bad Eisenkappel</div>
              <div className="activity-item">Freibad Sonnegger See</div>
              <div className="activity-item">Vogelpark Turnersee</div>
              <div className="activity-item">Walderlebniswelt Klopeiner See</div>
              <div className="activity-item">Tennis-Anlagen</div>
              <div className="activity-item">Kajak-Aktivitäten (Rudnik Mezica)</div>
            </div>
          </div>

          <div className="activity-category">
            <h3>Bergaktivitäten</h3>
            <div className="activity-grid">
              <div className="activity-item">Wanderungen (Hochobir, Petzen, Storschitz)</div>
              <div className="activity-item">Klettersteige und Kletteranlagen</div>
              <div className="activity-item">Schneeschuhwandern</div>
              <div className="activity-item">Mountainbiking & Bikepark Petzen</div>
              <div className="activity-item">Radfahren & Stollenbiken</div>
              <div className="activity-item">Walking/Walken</div>
            </div>
          </div>

          <div className="activity-category">
            <h3>Natursehenswürdigkeiten</h3>
            <div className="activity-grid">
              <div className="activity-item">Wildensteiner Wasserfall</div>
              <div className="activity-item">Trögerner Klamm</div>
              <div className="activity-item">Kupitzklamm</div>
              <div className="activity-item">Obir Tropfsteinhöhle</div>
              <div className="activity-item">Hemmaberg</div>
              <div className="activity-item">Kneipp-Wanderweg Bad Eisenkappel</div>
            </div>
          </div>

          <div className="activity-category">
            <h3>Kulturelle Orte</h3>
            <div className="activity-grid">
              <div className="activity-item">Pfarrkirche Bad Eisenkappel</div>
              <div className="activity-item">Kirche St. Leonhard</div>
              <div className="activity-item">Maria Dorn</div>
              <div className="activity-item">Panunziuskreuz-Schaida</div>
              <div className="activity-item">Koschnigkreuz</div>
              <div className="activity-item">Christophorusfelsen</div>
            </div>
          </div>

          <div className="activity-category">
            <h3>Grenzüberschreitende Ziele</h3>
            <div className="activity-grid">
              <div className="activity-item highlight">Jezersko (Slowenien) - mit herzförmigem See</div>
              <div className="activity-item">Petzen Bergbahn</div>
              <div className="activity-item">Luschaalm</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Brauchtum & Traditionen</h2>
          <p className="section-intro">
            Die Region pflegt eine starke Brauchtumskultur mit vielen traditionellen Festen
            und Bräuchen das ganze Jahr über.
          </p>
          <div className="traditions-grid">
            <div className="tradition-card">
              <span className="tradition-date">1. Februar</span>
              <h4>Ante Pante</h4>
              <p>Kirchleintragen in Bad Eisenkappel mit dem Spruch "Ante pante populore, kocle vrate cvile lore"</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">19. März</span>
              <h4>Josefimarkt</h4>
              <p>Traditioneller Markt in Nötsch</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">Karwoche</span>
              <h4>Palmbuschentragen</h4>
              <p>Traditionelles Brauchtum zur Karwoche</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">Sommer</span>
              <h4>Kirchtage</h4>
              <p>Wie Kufenstechen im Gailtal</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">21. Juni</span>
              <h4>Sonnwendfeuer</h4>
              <p>Feierlichkeiten zur Sommersonnenwende</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">1. Samstag Oktober</span>
              <h4>Polentafest</h4>
              <p>Traditionelles Fest in Nötsch</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">4. Dezember</span>
              <h4>Barbaratag</h4>
              <p>Traditioneller Feiertag</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">Dezember</span>
              <h4>Krampus & Perchten</h4>
              <p>Traditionelle Umzüge in der Region</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">Advent</span>
              <h4>Adventmärkte & Rorate</h4>
              <p>Besinnliche Adventszeit</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">26. Dezember</span>
              <h4>Pferdesegnung</h4>
              <p>Traditionelle Segnung am Stefanietag</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">28. Dezember</span>
              <h4>"Frisch und gsund"</h4>
              <p>Brauch am Unschuldigen Kindertag</p>
            </div>
            <div className="tradition-card">
              <span className="tradition-date">Neujahr</span>
              <h4>Sternsingen</h4>
              <p>Traditionelles Sternsingen in der Neujahrszeit</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Nützliche Links</h2>
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
              <p>Ausflugsziel mit herzförmigem See</p>
            </a>
            <a
              href="http://www.perchtengruppe-badeisenkappel.at"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <h4>Perchtengruppe Bad Eisenkappel</h4>
              <p>Traditionelle Perchtengruppe</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Umgebung
