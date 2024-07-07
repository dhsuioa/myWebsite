<template>
  <q-page class="col justify-center q-pa-md">
    <q-card class="responsive-margin">
      <contacts />
      <content 
        v-for="item in items"
        :title="$t(item.title)"
        :description="item.description"
        :years="item.years"
        :details="item.details"
      />
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import Contacts from 'components/Contacts.vue';
import Content from 'components/Content.vue';

const items = [
  {
    title: 'work.title',
    description: 'Stereotech, Junior Developer',
    years: 'АВГ 2022 - Н.В.',
    details: [
        'Разработка и улучшение пользовательского интерфейса с использованием Vue 2/3 и Quasar',
        'Создание компонентов для панелей управления и визуализация метрик 3D-принтеров',
        'Реализация интерактивных элементов управления для настройки и мониторинга 3D-принтеров',
        'Интеграция и оптимизация рабочих процессов: разработка менеджеров для автоматизации калибровки и настройки оборудования',
        'Оптимизация производительности приложения',
        'Локализация интерфейса приложения',
        'Разработка инструментов для анализа данных, таких как калькуляторы стоимости печати и генераторы отчетов',
        'Написание технической документации и участие в процессах CI/CD с использованием GitLab CI и Docker'
    ]
  },
  {
    title: 'education.title',
    description: 'education.university',
    years: '2020 - 2024',
    details: [
      'Факультет электроники и вычислительной техники, направление "Информатика и вычислительная техника"'
    ]
  },
  {
    title: 'Дополнительный опыт и достижения',
    details: [
      'Английский(B1), Немецкий(A2)',
      'Реализовывал университетские проекты, связанные с созданием игр на Unity, проектами машинного обучения и проектами с использованием технологий Web3'
    ]
  },
  {
    title: 'Технологии',
    details: [
      'Фреймворки и библиотеки: Vue2/3, Vuex, Pinia, Vuetify, Quasar, Composition API',
      'Инструменты сборки и среды разработки: Webpack, Vite',
      'Языки программирования и разметки: HTML, CSS, SCSS, JavaScript, TypeScript, Python',
      'Версионирование и управление кодом: Git, Bash',
      'DevOps: GitLab CI, GitHub Actions, Docker',
      'Базы данных: PostgreSQL, MongoDB'
    ]
  },
  {
    title: 'Хобби',
    details: [
      'Играю на гитаре и пианино',
      'Нравится активный отдых, езда на велосипеде и занятия спортом'
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
