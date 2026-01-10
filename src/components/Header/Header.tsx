import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="Ferienhaus Bela - Hundefreundliches Ferienhaus Kärnten"
            className="logo-image"
          />
          <span className="logo-text">Ferienhaus Bela</span>
        </Link>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/ferienhaus" className="nav-link" onClick={closeMenu}>
            {t('nav.house')}
          </NavLink>
          <NavLink to="/hundeurlaub" className="nav-link" onClick={closeMenu}>
            {t('nav.dogs')}
          </NavLink>
          <NavLink to="/umgebung" className="nav-link" onClick={closeMenu}>
            {t('nav.area')}
          </NavLink>
          <NavLink to="/preise" className="nav-link" onClick={closeMenu}>
            {t('nav.prices')}
          </NavLink>
          <a
            href="mailto:office@ferienhaus-bela.at"
            className="nav-link nav-cta"
            onClick={closeMenu}
          >
            {t('nav.contact')}
          </a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}

export default Header
