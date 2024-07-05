import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useQuasar } from 'quasar'

export const useDarkModeStore = defineStore('darkMode', () => {
  const $q = useQuasar()

  const getInitialState = (): boolean => {
    const savedState = localStorage.getItem('isDarkMode')
    if (savedState !== null) {
      return JSON.parse(savedState)
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const isDarkMode = ref(getInitialState())

  $q.dark.set(isDarkMode.value)

  watch(isDarkMode, (newValue) => {
    $q.dark.set(newValue)
    localStorage.setItem('isDarkMode', JSON.stringify(newValue))
  })

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addListener((e) => {
    if (localStorage.getItem('isDarkMode') === null) {
      isDarkMode.value = e.matches
    }
  })

  return {
    isDarkMode,
    toggleDarkMode
  }
})