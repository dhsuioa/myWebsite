<template>
    <q-btn
      @click="generatePdf"
      color="primary"
      outline
      :icon="isDesktop ? 'mdi-download' : undefined"
      :label="isDesktop ? undefined : $t('settings.PDF')"
      :round="isDesktop"
    >
    <!-- <q-tooltip v-if="isDesktop" class="text-subtitle2">
        {{ $t('settings.PDF') }}
    </q-tooltip> -->
    </q-btn>
  </template>
  
  <script setup lang="ts">
  import html2pdf from 'html2pdf.js';
  import { usePlatformStore } from '../stores/usePlatformStore';
  import { nextTick } from 'vue';
  
  const platformStore = usePlatformStore();
  const isDesktop = platformStore.isDesktop;
  
  const generatePdf = async () => {
    const element = document.querySelector('.q-page') as HTMLElement | null;
    if (!element) return;
  
    const icons = element.querySelectorAll('.q-icon') as NodeListOf<HTMLElement>;
    const iconDisplays = Array.from(icons).map(icon => icon.style.display);
  
    icons.forEach(icon => {
      icon.style.display = 'none';
    });
  
    await nextTick();
  
    const options = {
      filename: 'Resume Litvinenko.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all'] }
    };
  
    try {
      await html2pdf().set(options).from(element).save();
    } finally {
      icons.forEach((icon, index) => {
        icon.style.display = iconDisplays[index];
      });
    }
  };
  </script>