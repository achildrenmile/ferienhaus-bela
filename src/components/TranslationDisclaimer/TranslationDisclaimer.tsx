import { useTranslation } from 'react-i18next'
import './TranslationDisclaimer.css'

const TranslationDisclaimer = () => {
  const { i18n, t } = useTranslation()

  // Only show for non-German languages
  if (i18n.language === 'de') {
    return null
  }

  return (
    <div className="translation-disclaimer">
      <span className="disclaimer-icon">ℹ️</span>
      <span className="disclaimer-text">{t('disclaimer.text')}</span>
    </div>
  )
}

export default TranslationDisclaimer
