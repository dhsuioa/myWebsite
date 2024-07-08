<template>
  <q-list class="desktop-hide">
    <q-item tag="label" v-ripple>
      <q-item-section>
        <q-item-label>{{ $t('settings.theme') }}</q-item-label>
      </q-item-section>
      <q-item-section avatar>
        <q-toggle
          v-model="darkModeStore.isDarkMode"
          color="primary"
          keep-color
          checked-icon="mdi-weather-night"
          unchecked-icon="mdi-white-balance-sunny"
        />
      </q-item-section>
    </q-item>
  </q-list>
  <q-btn 
    class="mobile-hide" 
    round 
    outline
    color="primary" 
    :icon="isDarkMode ? 'mdi-weather-night' : 'mdi-white-balance-sunny'" 
    @click="toggleDarkMode"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDarkModeStore } from '../stores/useDarkModeStore'

const darkModeStore = useDarkModeStore()

const isDarkMode = computed(() => darkModeStore.isDarkMode)

const toggleDarkMode = () => {
  darkModeStore.toggleDarkMode()
}
</script>