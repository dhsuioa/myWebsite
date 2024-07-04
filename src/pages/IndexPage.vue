<template>
  <q-page class="col justify-center q-pa-md">
    <q-card class="responsive-margin">
      <contacts />
      <work />
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import Contacts from 'components/Contacts.vue';
import Work from 'components/Work.vue';
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
