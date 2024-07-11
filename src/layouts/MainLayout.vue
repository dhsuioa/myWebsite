<template>
  <q-layout view="hHh lpR fFf">
    <q-toolbar class="row justify-end" :class="{ 'fixed-button': isDesktop }">
      <q-btn
        v-if="!isDesktop"
        color="primary"
        dense
        flat
        round
        icon="mdi-menu"
        @click="toggleRightDrawer"
      />
      <div v-if="isDesktop" class="q-mt-sm">
        <Settings />
      </div>
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
import { ref, computed } from 'vue';
import { usePlatformStore } from '../stores/usePlatformStore';
import Settings from '../components/Settings.vue';

const platformStore = usePlatformStore();
const rightDrawerOpen = ref(false);

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

const isDesktop = computed(() => platformStore.isDesktop);
</script>

<style scoped>
.fixed-button {
  position: fixed;
  z-index: 1000;
}
</style>
