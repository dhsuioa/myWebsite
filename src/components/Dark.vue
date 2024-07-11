<template>
  <div>
    <q-list v-if="!isDesktop">
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>{{ $t('settings.theme') }}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle
            v-model="darkMode"
            color="primary"
            keep-color
            checked-icon="mdi-weather-night"
            unchecked-icon="mdi-white-balance-sunny"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <q-btn
      v-if="isDesktop"
      round
      outline
      color="primary"
      :icon="isDarkMode ? 'mdi-weather-night' : 'mdi-white-balance-sunny'"
      @click="toggleDarkMode"
    >
    <!-- <q-tooltip v-if="isDesktop" class="text-subtitle2">
        {{ $t('settings.theme') }}
    </q-tooltip> -->
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePlatformStore } from '../stores/usePlatformStore';
import { useDarkModeStore } from '../stores/useDarkModeStore';

const platformStore = usePlatformStore();
const darkModeStore = useDarkModeStore();

const isDesktop = computed(() => platformStore.isDesktop);
const isDarkMode = computed(() => darkModeStore.isDarkMode);

const darkMode = computed({
  get: () => darkModeStore.isDarkMode,
  set: (value: boolean) => darkModeStore.toggleDarkMode()
});

const toggleDarkMode = () => {
  darkModeStore.toggleDarkMode();
};
</script>
