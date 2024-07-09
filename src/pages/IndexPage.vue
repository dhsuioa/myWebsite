<template>
  <q-page class="col justify-center q-pa-md">
    <q-card class="responsive-margin">
      <contacts />
      <content 
        v-for="item in items"
        :title="$t(item.title)"
        :description="item.description ? $t(item.description) : ''"
        :years="item.years ? $t(item.years) : ''"
        :details="item.details.map($t)"
      />
    </q-card>
    <!-- <q-btn @click="generatePdf" label="Скачать PDF" class="q-mt-md" /> -->
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Contacts from 'components/Contacts.vue';
import Content from 'components/Content.vue';

const items = [
  {
    title: 'work.title',
    description: 'Stereotech, Junior Developer',
    years: 'work.years',
    details: [
        'work.quasar',
        'work.components',
        'work.configuring',
        'work.integration',
        'work.optimization',
        'work.localization',
        'work.calculators',
        'work.ci'
    ]
  },
  {
    title: 'education.title',
    description: 'education.university',
    years: '2020 - 2024',
    details: ['education.faculty']
  },
  {
    title: 'achievements.title',
    details: [
      'achievements.language',
      'achievements.university'
    ]
  },
  {
    title: 'technologies.title',
    details: [
      'technologies.frameworks',
      'technologies.build',
      'technologies.language',
      'technologies.git',
      'technologies.devops',
      'technologies.database'
    ]
  },
  {
    title: 'hobby.title',
    details: [
      'hobby.guitar',
      'hobby.sport'
    ]
  },
];


</script>

<style scoped>
.responsive-margin {
  margin-left: 0;
  margin-right: 0;
}

@media (min-width: 800px) {
  .responsive-margin {
    margin-left: 20%;
    margin-right: 20%;
  }
}
</style>
