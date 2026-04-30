import { Link } from 'react-router-dom'
import './Hero.css'

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage: string
  showCTA?: boolean
}

const Hero = ({ title, subtitle, backgroundImage, showCTA = false }: HeroProps) => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {showCTA && (
          <div className="hero-cta">
            <Link to="/preise#belegungskalender" className="btn btn-accent">
              Jetzt anfragen
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
