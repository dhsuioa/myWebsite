<template>
  <div class="q-pa-sm col">
    <q-toolbar >
      <q-toolbar-title>
        {{ $t('settings.title') }}
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
    <Language />
    <Color />
  </div>
</template>

<script setup lang="ts">
import Dark from './Dark.vue'
import Language from './Language.vue'
import Color from './Color.vue'

const emits = defineEmits(['close-drawer']);

const closeDrawer = () => {
  emits('close-drawer');
};
</script>