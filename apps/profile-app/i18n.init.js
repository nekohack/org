import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { languages, defaultLanguage } from './i18n.config'

const locales = Object.assign(
  {},
  ...Object.keys(languages).map((index) => {
    return {
      [languages[index]]: {
        translations: require('./public/locales/' + languages[index] + '/common.json'),
      },
    }
  }),
)

const detection = {
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],
  lookupCookie: 'lng',
  lookupLocalStorage: 'lng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'],
  cookieOptions: { path: '/', sameSite: 'strict' },
}

i18next.use(LanguageDetector).init({
  detection: detection,
  fallbackLng: defaultLanguage,
  resources: locales,
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
})

export default i18next
