import { useState, useEffect } from 'react'
import './CookieConsent.css'

const CONSENT_KEY = 'ferienhaus-bela-analytics-consent'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === null) {
      setShowBanner(true)
    } else if (consent === 'accepted') {
      loadUmamiScript()
    }
  }, [])

  const loadUmamiScript = () => {
    if (document.getElementById('umami-script')) return

    const script = document.createElement('script')
    script.id = 'umami-script'
    script.async = true
    script.src = 'https://analytics.strali.solutions/script.js'
    script.setAttribute('data-website-id', 'f44567de-e059-48fa-b8bf-559bd77cf330')
    document.head.appendChild(script)
  }

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    loadUmamiScript()
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          Wir nutzen Umami Analytics, um unsere Website zu verbessern.
          Dabei werden keine persönlichen Daten gespeichert und keine Cookies gesetzt.
          Die Analyse ist optional und dient nur zur Verbesserung unseres Angebots.
        </p>
        <div className="cookie-buttons">
          <button onClick={handleDecline} className="cookie-btn cookie-btn-decline">
            Ablehnen
          </button>
          <button onClick={handleAccept} className="cookie-btn cookie-btn-accept">
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
