<template>
  <div>
    <q-select
      v-if="!isDesktop"
      v-model="currentLanguage"
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

    <q-btn-dropdown
      v-if="isDesktop"
      v-model="isDropdownOpen"
      color="primary"
      dropdown-icon="mdi-translate"
      outline
      round
      no-icon-animation
    >
      <q-list>
        <q-item
          v-for="locale in localeOptions"
          :key="locale.value"
          clickable
          v-ripple
          @click="changeLocale(locale.value)"
        >
          <q-item-section>
            <q-item-label :class="{ 'text-primary': locale.value === currentLanguage }">
              {{ locale.label }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLanguageStore } from '../stores/useLanguageStore';
import { usePlatformStore } from '../stores/usePlatformStore';

const { availableLocales, t } = useI18n();
const languageStore = useLanguageStore();
const isDropdownOpen = ref(false);

const currentLanguage = computed(() => languageStore.currentLanguage);

const localeOptions = computed(() => {
  const uniqueLocales = new Set(availableLocales.map(locale => locale.split('-')[0]));
  return Array.from(uniqueLocales).map(locale => ({
    value: locale as "en" | "ru" | "en-EN" | "ru-RU",
    label: t(`languages.${locale}`)
  }));
});

function changeLocale(newLocale: "en" | "ru" | "en-EN" | "ru-RU") {
  languageStore.setLanguage(newLocale);
  isDropdownOpen.value = false;
}

const isDesktop = computed(() => {
  const platform = usePlatformStore();
  return platform.isDesktop;
});
</script>
