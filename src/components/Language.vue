<template>
    <q-select
      v-model="languageStore.currentLanguage"
      :options="localeOptions"
      label="Язык"
      dense
      options-dense
      emit-value
      map-options
      @update:model-value="changeLocale"
    >
      <template v-slot:prepend>
        <q-icon name="mdi-translate" />
      </template>
    </q-select>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useLanguageStore } from 'stores/useLanguageStore'
  
  const { availableLocales } = useI18n()
  const languageStore = useLanguageStore()
  
  function getLanguageName(locale: string): string {
    try {
        const displayNames = new Intl.DisplayNames([locale], { type: 'language' });
        const languageName = displayNames.of(locale);
        
        if (languageName) {
        return languageName.charAt(0).toUpperCase() + languageName.slice(1);
        } else {
        throw new Error('DisplayNames returned undefined');
        }
    } catch (error) {
        console.warn(`Unable to get display name for locale ${locale}:`, error);
        
        const fallbackNames: { [key: string]: string } = {
        'en': 'English',
        'ru': 'Русский',
        };
        
        return fallbackNames[locale] || locale;
    }
    }
  
  function getBaseLocale(locale: string): string {
    return locale.split('-')[0];
  }
  
  const localeOptions = computed(() => {
    const uniqueLocales = Array.from(new Set(availableLocales.map(getBaseLocale)));
    return uniqueLocales.map(locale => ({
      value: locale,
      label: getLanguageName(locale)
    }));
  });
  
  function changeLocale(newLocale: "en" | "ru" | "en-EN" | "ru-RU") {
    languageStore.setLanguage(newLocale)
  }
  </script>