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
            <a href="mailto:office@ferienhaus-bela.at" className="btn btn-accent">
              Jetzt anfragen
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
