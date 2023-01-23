import I18n from '@s-ui/i18n'
import Polyglot from '@s-ui/i18n/lib/adapters/polyglot'

import literals from '../literals/index.js'

const DEFAULT_CULTURE = 'es-ES'
const DEFAULT_CURRENCY = 'EUR'

const useI18nInitializer = (culture = DEFAULT_CULTURE, currency = DEFAULT_CURRENCY) => {
  const i18n = new I18n({adapter: new Polyglot()})
  i18n.languages = literals
  i18n.culture = culture
  i18n.currency = currency

  return i18n
}

export default useI18nInitializer