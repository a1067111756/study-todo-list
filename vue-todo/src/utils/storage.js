export const ENUM_STORAGE = {
  NOTE_MESSAGE: 'note-message'
}

export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getStorage = (key) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : []
}