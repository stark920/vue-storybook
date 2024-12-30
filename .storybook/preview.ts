import { type Preview, setup } from '@storybook/vue3'
import { ref } from 'vue'
import { withThemeByClassName } from '@storybook/addon-themes'
import '../src/assets/index.css'
import i18n, { availableLocales } from '../src/i18n'

setup(app => app.use(i18n))

const locale = ref<typeof availableLocales[number]>('en')

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'default',
      values: [
        { name: 'default', value: 'hsl(var(--sb-background))' },
      ]
    }
  },
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Global locale for i18n',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: availableLocales.map(locale => ({ value: locale, title: locale })),
    },
  },
}

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
  (story, context) => {
    locale.value = context.globals.locale
    i18n.global.locale = locale.value // Dynamically set the locale
    return story()
  },
]

export default preview
