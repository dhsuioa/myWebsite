import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import en from 'src/locales/en.json'
import ru from 'src/locales/ru.json'

const i18n = createI18n({
  legacy: false,
  locale: navigator.language,
  fallbackLocale: 'en',
  messages: {
    'en': {...en},
    'ru': {...ru},
    'en-EN': {...en},
    'ru-RU': {...ru},
  }
})

export default boot(({ app }) => {
  app.use(i18n)
})

export { i18n }