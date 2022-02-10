const PREFERENCE_LOCAL_STORAGE_KEY = 'PREFERENCE'

export function configurePreference() {
  let preference = null

  try {
    const storedData = localStorage.getItem(PREFERENCE_LOCAL_STORAGE_KEY)

    if (storedData) {
      preference = JSON.parse(storedData)
    }
  } catch (err) {
    // If stored data is not a stringified JSON this might fail,
    // that's why we catch the error
  }

  return preference
}

export function storePreference(preference) {
  localStorage.setItem(PREFERENCE_LOCAL_STORAGE_KEY, JSON.stringify(preference))
}
