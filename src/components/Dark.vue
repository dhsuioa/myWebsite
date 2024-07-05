<template>
    <div class="q-pa-md">
      <h2 class="text-h6 q-mb-md">Настройки</h2>
      <q-list>
        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>Темная тема</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle 
              v-model="isDarkMode" 
              color="primary" 
              @click="toggleDarkMode" 
              keep-color
              checked-icon="mdi-weather-night"
              unchecked-icon="mdi-white-balance-sunny"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const isDarkMode = ref($q.dark.isActive)

const toggleDarkMode = () => {
  $q.dark.toggle()
  isDarkMode.value = $q.dark.isActive
}
</script>
