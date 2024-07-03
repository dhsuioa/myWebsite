<template>
  <!-- <q-page class="row items-center justify-evenly"> -->
  <q-page class="col justify-center q-pa-md">
    <!-- <q-card style="margin: 0 20vh;"> -->
    <q-card >
      <contacts/>
      <work/>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import Contacts from 'components/Contacts.vue';
import Work from 'components/Work.vue';
</script>
