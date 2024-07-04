<template>
  <div id="app">
    <div v-if="isLoading" class="fullscreen flex flex-center">
      <q-spinner-grid color="primary" size="3em" />
    </div>
    <router-view v-show="!isLoading" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<style>
</style>