import { defineStore } from 'pinia'
import { ref } from 'vue'
import { i18n } from 'boot/i18n'

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref(i18n.global.locale.value)

  function setLanguage(newLang: "ru" | "en" | "en-EN" | "ru-RU") {
    currentLanguage.value = newLang
    i18n.global.locale.value = newLang
  }

  return {
    currentLanguage,
    setLanguage
  }
})