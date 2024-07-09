<template>
    <q-btn 
        @click="generatePdf" 
        color="primary" 
        outline 
        :label="$t('settings.PDF')" 

    />
</template>

<script setup lang="ts">

import html2pdf from 'html2pdf.js';

const generatePdf = () => {
    const element = document.querySelector('.q-page');
    const options = {
        filename: 'Resume Litvinenko.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all'] }
    };

    html2pdf().set(options).from(element).save();
};
</script>