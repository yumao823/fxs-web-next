import { useContext } from 'react'
import { PreferenceContext } from './PreferenceProvider'

const usePreference = () => {
  return useContext(PreferenceContext)
}

export default usePreference
