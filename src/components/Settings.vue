<template>
  <div class="q-pa-sm col">
    <q-toolbar >
      <q-toolbar-title>
        Настройки
      </q-toolbar-title>
        <q-space />
        <q-btn
          @click="closeDrawer"
          icon="mdi-close"
          color="primary"
          flat
          dense
          round
        />
      </q-toolbar>
    <Dark />
    <Color />
  </div>
</template>

<script setup lang="ts">
import Dark from './Dark.vue'
import Color from './Color.vue'

const emits = defineEmits(['close-drawer']);

const closeDrawer = () => {
  emits('close-drawer');
};
</script>