<template>
  <q-layout view="hHh lpR fFf">
    <q-toolbar>
      <q-btn
        color="primary"
        dense
        flat
        round
        icon="mdi-menu"
        @click="toggleRightDrawer"
      />
    </q-toolbar>
    <q-drawer
      show-if-above 
      v-model="rightDrawerOpen" 
      side="right" 
      bordered
    >
      <Settings />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import Settings from '../components/Settings.vue'

const rightDrawerOpen = ref(false)

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>