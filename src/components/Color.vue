<template>
  <q-btn-dropdown 
    outline 
    class="mobile-hide" 
    round 
    color="primary" 
    dropdown-icon="mdi-palette"
    no-icon-animation
  >
    <q-color v-model="primaryColor"/>
  </q-btn-dropdown>
  <div class="desktop-hide q-pa-md row items-start q-gutter-md justify-center">
    <q-color v-model="primaryColor"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useColorStore } from '../stores/useColorStore'

const colorStore = useColorStore()

onMounted(() => {
  colorStore.loadPrimaryColor()
})

const primaryColor = computed({
  get: () => colorStore.primaryColor,
  set: (value: string) => {
    colorStore.setPrimaryColor(value)
  }
})
</script>

<style scoped>

</style>