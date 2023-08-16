<template>
  <div class="app">
  <div class="work-container">
    <p>{{ works.totalPrice }}</p>
    <p>{{ works.count }}</p>
    <div v-for="work in works.works" :key="work.id">
      <div class="info-item-work">
        <p class="">ID: {{ work.id }}</p>
        <p class="">Data pracy: {{ work.dateOfWork }}</p>
        <p class="">Data Wpisu: {{ work.dateOfNote }}</p>
        <p class="">Miejsce: {{ work.place }}</p>
        <p class="">Rodzaj pracy: {{ work.kindOfWork }}</p>
        <p class="">Zadania: {{ work.tasks }}</p>
        <p class="">Koszt: (zł) {{ work.rice }}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import AdminService from '@/Services/AdminService';

export default {
  data() {
    return {
      works: []
    }
  },

  methods: {
    getData() {
      AdminService.getAllWorks().then((response) =>
        this.works = response.data)
    }
  },

  mounted() {
    this.getData();
  }
}
</script>