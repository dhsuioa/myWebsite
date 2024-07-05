<template>
  <div class="q-pa-md row items-start q-gutter-md justify-center">
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