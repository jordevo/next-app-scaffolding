import {createContext} from 'react'
import useI18nInitializer from '../hooks/useI18nInitializer.js'
import PropTypes from 'prop-types'
import Domain from '../domain/index.js'

export const SuiContext = createContext()

const SuiProvider = ({children}) => {
  const i18n = useI18nInitializer()
  const domain = new Domain()
  const value = {
    domain,
    i18n
  }
  return (
    <SuiContext.Provider value={value}>
      {children}
    </SuiContext.Provider>
  )
}

SuiProvider.displayName = 'SuiProvider'
SuiProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export {SuiProvider}
