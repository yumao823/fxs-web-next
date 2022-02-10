import React, { createContext, useState } from 'react'
import merge from 'lodash/merge'
import { DEFAULT_THEME } from '../../theme/themeConfig'
import { storePreference } from './PreferenceStorage'

export interface PreferenceType {
  theme: string
}

export interface PreferenceContextType {
  preference: PreferenceType
  savePreference: (preference: PreferenceType) => void
}

const DEFAULT_PREFERENCE: PreferenceType = {
  theme: DEFAULT_THEME,
}

export const PreferenceContext = createContext(null)

export const PreferenceProvider = ({ preference, children }) => {
  const [currentPreference, setCurrentPreference] = useState<PreferenceType>(preference || DEFAULT_PREFERENCE)

  const handleSavePreference = (updatedPreference = {}) => {
    const mergedPreference = merge({}, currentPreference, updatedPreference)

    setCurrentPreference(mergedPreference)
    storePreference(mergedPreference)
  }

  const context = {
    preference: currentPreference,
    savePreference: handleSavePreference,
  }

  return <PreferenceContext.Provider value={context}>{children}</PreferenceContext.Provider>
}

export const PreferenceConsumer = PreferenceContext.Consumer
