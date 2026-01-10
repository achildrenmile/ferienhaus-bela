import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="Ferienhaus Bela Logo"
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
            Startseite
          </NavLink>
          <NavLink to="/ferienhaus" className="nav-link" onClick={closeMenu}>
            Ferienhaus
          </NavLink>
          <NavLink to="/hundeurlaub" className="nav-link" onClick={closeMenu}>
            Hundeurlaub
          </NavLink>
          <NavLink to="/umgebung" className="nav-link" onClick={closeMenu}>
            Umgebung
          </NavLink>
          <NavLink to="/preise" className="nav-link" onClick={closeMenu}>
            Preise & Belegung
          </NavLink>
          <a
            href="mailto:office@ferienhaus-bela.at"
            className="nav-link nav-cta"
            onClick={closeMenu}
          >
            Jetzt anfragen
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
