import 'server-only'
import type { Dictionaries, Dictionary, Locale } from './i18n-config'

// We enumerate all dictionaries here for better linting and TypeScript support
// We also get the default import for cleaner types
const dictionaries: Dictionaries = {
  en: () => import('./dictionary/en'),
  fr: () => import('./dictionary/fr'),
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const { default: dictionary } = await (
    dictionaries[locale] || dictionaries.en
  )()

  return dictionary
}

