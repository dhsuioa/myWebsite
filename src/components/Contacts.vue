<template>
  <q-card class="q-py-md justify-start flex" style="max-width: 345px">
    <q-card-section v-for="(item, index) in items" :key="index" class="row items-center q-py-xs">
      <div v-if="item.class" :class="item.class">{{ item.value }}</div>
      <q-btn
        v-if="item.btnLabel"
        flat
        :label="item.btnLabel"
        no-caps
        :href="item.href"
        color="primary"
        target="_blank"
        class="q-ml-auto"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const computeExperience = (startDate: Date) => {
  const currentDate = new Date();
  const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + currentDate.getMonth() - startDate.getMonth();
  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12
  };
};

const experience = computeExperience(new Date(2022, 6));

const items = ref([
  {
    class: 'text-h5 text-bold',
    value: 'Александр Литвиненко',
  },
  {
    class: 'text-subtitle1',
    value: 'Россия, Волгоград',
  },
  {
    class: 'text-subtitle1',
    value: '+7-927-538-00-77',
  },
  {
    class: 'text-subtitle1',
    value: 'GitHub: ',
    btnLabel: '@dhsuioa',
    href: 'https://github.com/dhsuioa'
  },
  {
    class: 'text-subtitle1',
    value: 'tg: ',
    btnLabel: '@dhsuioal',
    href: 'https://t.me/dhsuioal'
  },
  {
    btnLabel: 'a27litvinenko@gmail.com',
    href: 'mailto:a27litvinenko@gmail.com'
  },
  {
    class: 'text-h6 text-bold',
    value: `Frontend developer, ${experience.years} years`,
    // value: `Frontend developer, ${experience.years}.${experience.months} years`,
  },
]);
</script>


<style scoped>

.q-item {
  padding: 0px 16px;
}

.text-primary {
  text-decoration: underline;
}
</style>
  