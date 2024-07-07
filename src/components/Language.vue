<template>
  <q-select
    v-model="languageStore.currentLanguage"
    :options="localeOptions"
    :label="$t('settings.language')"
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
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLanguageStore } from 'stores/useLanguageStore';

const { availableLocales, t } = useI18n();
const languageStore = useLanguageStore();

const localeOptions = computed(() => {
  const uniqueLocales = new Set(availableLocales.map(locale => locale.split('-')[0]));
  return Array.from(uniqueLocales).map(locale => ({
    value: locale,
    label: t(`languages.${locale}`)
  }));
});

function changeLocale(newLocale: "en" | "ru" | "en-EN" | "ru-RU") {
  languageStore.setLanguage(newLocale);
}
</script>
