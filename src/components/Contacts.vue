<template>
  <q-list class="row" style="max-width: 350px">
    <q-item v-for="item in items">
      <q-item-section v-if="item.class" :class="item.class">{{ item.value }}</q-item-section>
      <q-item-section v-if="item.btnLabel">
        <q-btn
          flat 
          :label="item.btnLabel" 
          no-caps 
          :href="item.href"
          class="text-primary"
        />
      </q-item-section>
    </q-item>
  </q-list>
  <q-separator />
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
    value: 'Frontend developer, 2 years',
  },
]);

</script>

<style scoped>

.text-primary {
  text-decoration: underline;
}
</style>
  