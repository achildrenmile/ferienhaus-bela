import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

const languages = [
  { code: 'de', flag: '🇦🇹', title: 'Deutsch' },
  { code: 'en', flag: '🇬🇧', title: 'English' },
  { code: 'it', flag: '🇮🇹', title: 'Italiano' },
  { code: 'sl', flag: '🇸🇮', title: 'Slovenščina' }
]

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('ferienhaus-bela-language', lng)
  }

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
          title={lang.title}
          aria-label={lang.title}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
