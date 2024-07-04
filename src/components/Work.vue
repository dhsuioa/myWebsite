<template>
  <div class="q-pa-lg">  
    <q-timeline layout="dense" side="right" color="primary">
      <q-toolbar-title>
        <div class="text-h5 text-primary text-bold">Опыт работы</div>
      </q-toolbar-title>
      <q-toolbar>
        <q-toolbar-title>
          <div class="row items-center">
            <div class="text-h6 text-bold q-mr-md">Stereotech</div>
            <div class="text-subtitle2 text-italic">Junior Developer</div>
            <q-space></q-space>
            <div class="text-body2">АВГ 2022 - Н.В.</div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <q-timeline-entry
        v-for="job in jobs"
        side="left"
        >
        <div>
          {{ job.description }}
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const jobs = ref([
  {
    description: 'Разработка и улучшение пользовательского интерфейса с использованием Vue 2/3 и Quasar',
  },
  {
    description: 'Создание компонентов для панелей управления и визуализации метрик 3D-принтеров',
  },
  {
    description: 'Реализация интерактивных элементов управления для настройки и мониторинга 3D-принтеров',
  },
  {
    description: 'Интеграция и оптимизация рабочих процессов: разработка менеджеров для автоматизации калибровки и настройки оборудования',
  },
  {
    description: 'Оптимизация производительности приложения',
  },
  {
    description: 'Локализация интерфейса приложения',
  },
  {
    description: 'Разработка инструментов для анализа данных, таких как калькуляторы стоимости печати и генераторы отчетов',
  },
  {
    description: 'Написание технической документации и участие в процессах CI/CD с использованием GitLab CI и Docker',
  },
]);

</script>
  