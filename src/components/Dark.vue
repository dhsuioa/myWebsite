<template>
  <q-list>
    <q-item tag="label" v-ripple>
      <q-item-section>
        <q-item-label>Темная тема</q-item-label>
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
</template>

<script setup lang="ts">
import { useDarkModeStore } from '../stores/useDarkModeStore'

const darkModeStore = useDarkModeStore()
</script>