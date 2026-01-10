import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Footer.css'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Ferienhaus Bela</h3>
            <p className="footer-text">
              {t('footer.description')}
            </p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/FerienhausBela/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ferienhausbela"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">{t('footer.navigation')}</h4>
            <nav className="footer-nav">
              <Link to="/">{t('nav.home')}</Link>
              <Link to="/ferienhaus">{t('nav.house')}</Link>
              <Link to="/hundeurlaub">{t('nav.dogs')}</Link>
              <Link to="/umgebung">{t('nav.area')}</Link>
              <Link to="/preise">{t('nav.prices')}</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">{t('footer.legal')}</h4>
            <nav className="footer-nav">
              <Link to="/impressum">{t('footer.imprint')}</Link>
              <Link to="/agb">{t('footer.terms')}</Link>
              <Link to="/hausordnung">{t('footer.houseRules')}</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">{t('footer.contact')}</h4>
            <address className="footer-contact">
              <p>Ferienhaus Bela</p>
              <p>Vellach 77</p>
              <p>9135 Bad Eisenkappel</p>
              <p>Österreich</p>
              <p className="mt-sm">
                <a href="tel:+436769658016">+43 676 965 8016</a>
              </p>
              <p>
                <a href="mailto:office@ferienhaus-bela.at">office@ferienhaus-bela.at</a>
              </p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ferienhaus Bela. {t('footer.rights')}</p>
          <p className="footer-credit">
            {t('footer.websiteBy')}{' '}
            <a href="https://strali.solutions" target="_blank" rel="noopener noreferrer">
              Strali Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
