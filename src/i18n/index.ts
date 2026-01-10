import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import de from './locales/de.json'
import en from './locales/en.json'
import it from './locales/it.json'
import sl from './locales/sl.json'

const validLanguages = ['de', 'en', 'it', 'sl']

// Check if user has previously selected a valid language
const getSavedLanguage = (): string => {
  try {
    const saved = localStorage.getItem('ferienhaus-bela-language')
    if (saved && validLanguages.includes(saved)) {
      return saved
    }
  } catch {
    // localStorage not available
  }
  return 'de'
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
      it: { translation: it },
      sl: { translation: sl }
    },
    lng: getSavedLanguage(),
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
