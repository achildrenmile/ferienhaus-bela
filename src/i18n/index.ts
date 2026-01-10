import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import de from './locales/de.json'
import en from './locales/en.json'
import it from './locales/it.json'
import sl from './locales/sl.json'

// Check if user has previously selected a language
const savedLanguage = localStorage.getItem('ferienhaus-bela-language')

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
      it: { translation: it },
      sl: { translation: sl }
    },
    lng: savedLanguage || 'de',
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
