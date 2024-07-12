<template>
  <div>
    <q-btn-dropdown 
      v-if="isDesktop"
      outline 
      round 
      color="primary" 
      dropdown-icon="mdi-palette"
      no-icon-animation
    >
    <template v-slot:label>
      <q-tooltip v-if="isDesktop" class="text-subtitle2">
        {{ $t('settings.chooseColor') }}
    </q-tooltip>
    </template>
      <q-color v-model="primaryColor"/>
    </q-btn-dropdown>

    <div v-else class="q-pa-md row items-start q-gutter-md justify-center">
      <q-color v-model="primaryColor"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useColorStore } from '../stores/useColorStore';
import { usePlatformStore } from '../stores/usePlatformStore';

const colorStore = useColorStore();
const platformStore = usePlatformStore();

onMounted(() => {
  colorStore.loadPrimaryColor();
});

const primaryColor = computed({
  get: () => colorStore.primaryColor,
  set: (value: string) => {
    colorStore.setPrimaryColor(value);
  }
});

const isDesktop = computed(() => platformStore.isDesktop);
</script>

<style scoped>
</style>
