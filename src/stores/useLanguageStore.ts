// В вашем хранилище useLanguageStore.ts

import { defineStore } from 'pinia';
import { ref } from 'vue';
import { i18n } from 'boot/i18n';

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref(i18n.global.locale.value.split('-')[0]);

  function setLanguage(newLang: "en" | "ru" | "en-EN" | "ru-RU") {
    currentLanguage.value = newLang.split('-')[0];
    i18n.global.locale.value = newLang as "en" | "ru" | "en-EN" | "ru-RU";
  }  

  return {
    currentLanguage,
    setLanguage
  };
});
