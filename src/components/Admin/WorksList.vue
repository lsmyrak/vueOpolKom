<template>
  <div class="app">
    <div class="auth-input-wrap">
      <input class="auth-input" id="startDate" type="date" placeholder="Data początkowa" />
      <label class="auth-label" htmlFor="startDate">Data początkowa</label>
    </div>
    <div class="auth-input-wrap">
      <input class="auth-input" id="stopDate" type="date" placeholder="Data końcowa" />
      <label class="auth-label" htmlFor="stoptDate">Data Końcowa</label>
    </div>
    <p>Całkowity koszy wyselekcionowanych zadań: {{ works.totalPrice }}</p>
    <p>Ilośc wyselekcionowanych zadań: {{ works.count }}</p>
    <div class="work-container">
      <div class="info-item-work" v-for="work in works.works" :key="work.id">
        <p class="">ID: {{ work.id }}</p>
        <p class="">Data pracy: {{ work.dateOfWork }}</p>
        <p class="">Data Wpisu: {{ work.dateOfNote }}</p>
        <p class="">Miejsce: {{ work.place }}</p>
        <p class="">Rodzaj pracy: {{ work.kindOfWork }}</p>
        <p class="">Zadania: {{ work.tasks }}</p>
        <p class="">Koszt: {{ work.price }} zł</p>
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