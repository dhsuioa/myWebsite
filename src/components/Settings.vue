<template>
  <div class="q-pa-sm col">
    <q-toolbar v-if="!isDesktop">
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
    <div :class="{'row q-gutter-md items-center': isDesktop}">
      <Dark />
      <Language />
      <Color />
      <PDF />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePlatformStore } from '../stores/usePlatformStore';
import Dark from './Dark.vue';
import Language from './Language.vue';
import Color from './Color.vue';
import PDF from './PDF.vue';

const platformStore = usePlatformStore();
const isDesktop = computed(() => platformStore.isDesktop);

const emits = defineEmits(['close-drawer']);

const closeDrawer = () => {
  emits('close-drawer');
};
</script>
