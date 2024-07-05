<template>
  <q-layout view="hHh lpR fFf">
    <q-toolbar class="row justify-end">
      <q-btn
        color="primary"
        dense
        flat
        round
        icon="mdi-menu"
        @click="toggleRightDrawer"
        class="desktop-hide"
        />
    </q-toolbar>
    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      bordered
    >
      <Settings @close-drawer="toggleRightDrawer"/>
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