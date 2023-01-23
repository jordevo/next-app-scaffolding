import {useContext} from 'react'
import {SuiContext} from '../contexts/sui.js'

export const useI18n = () => {
  const {
    i18n
  } = useContext(SuiContext)

  return i18n
}
