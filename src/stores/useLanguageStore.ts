import { defineStore } from 'pinia';
import { ref } from 'vue';
import { i18n } from 'boot/i18n';

const LANG_STORAGE_KEY = 'selectedLanguage';

export const useLanguageStore = defineStore('language', () => {
  const initialLanguage = localStorage.getItem(LANG_STORAGE_KEY) || i18n.global.locale.value.split('-')[0];
  const currentLanguage = ref(initialLanguage);

  function setLanguage(newLang: "en" | "ru" | "en-EN" | "ru-RU") {
    currentLanguage.value = newLang.split('-')[0];
    i18n.global.locale.value = newLang as "en" | "ru" | "en-EN" | "ru-RU";

    localStorage.setItem(LANG_STORAGE_KEY, newLang);
  }  

  return {
    currentLanguage,
    setLanguage
  };
});
