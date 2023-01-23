import {useContext} from 'react'
import {SuiContext} from '../contexts/sui.js'

export const useDomain = () => {
  const {
    domain
  } = useContext(SuiContext)

  return domain
}
