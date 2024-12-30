import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: 'Hello'
    }
  },
  'zh-TW': {
    message: {
      hello: '你好'
    }
  }
}

export type Locale = keyof typeof messages

export const availableLocales = Object.keys(messages) as Locale[]

const i18n = createI18n({
  locale: 'zh-TW',
  fallbackLocale: 'en',
  messages
})

export default i18n
