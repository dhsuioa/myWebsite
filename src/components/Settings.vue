<template>
  <div class="q-pa-sm col">
    <q-toolbar class="desktop-hide">
      <q-toolbar-title>
        {{ $t('settings.title') }}
      </q-toolbar-title>
        <q-btn
          @click="closeDrawer"
          icon="mdi-close"
          color="primary"
          flat
          dense
          round
        />
      </q-toolbar>
      <div class="row q-gutter-md mobile-hide items-center">
        <Dark />
        <Language />
        <Color />
        <PDF />
      </div>
      <div class="desktop-hide">
        <Dark />
        <Language />
        <Color />
        <PDF />
      </div>
      
  </div>
</template>

<script setup lang="ts">
import Dark from './Dark.vue'
import Language from './Language.vue'
import Color from './Color.vue'
import PDF from './PDF.vue'

const emits = defineEmits(['close-drawer']);

const closeDrawer = () => {
  emits('close-drawer');
};
</script>