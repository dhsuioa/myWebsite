<template>
    <q-card>
    <q-separator/>
      <q-card-section>
        <div class="text-h5 text-bold text-primary">{{ title }}</div>
        <div class="row justify-between items-center">
          <div class="text-h6 text-bold">{{ description }}</div>
          <div class="text-grey">{{ years }}</div>
        </div>
        <div v-for="(item, index) in details" :key="index" class="row no-wrap items-center q-mt-sm">
          <q-icon name="mdi-record" class="q-mr-sm" color="primary"/>
          <span>{{ item }}</span>
        </div>
      </q-card-section>
    </q-card>
  </template>
  
  <script setup lang="ts">
  
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    years: {
      type: String,
      required: false
    },
    details: {
      type: Array,
      required: true
    }
  });
  </script>
  
  <style scoped>
  </style>
  