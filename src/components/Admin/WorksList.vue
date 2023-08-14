<template>
    <div v-for="work in works" :key="work.id">
        <p>{{ works.totalPrice }}</p>
        <p>{{ work.count }}</p>
        <p>{{ work.id }}</p>
        <p>{{ work.dateOfWork }}</p>
        <p>{{ work.dateOfNote }}</p>
        <p>{{ work.tasks }}</p>
        <p>{{ work.place }}</p>
        <p>{{ work.price }}</p>
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
        this.users = response.data)
      console.log(this.works);
      }
    },
    
    mounted() {
      this.getData();
    }
  }
  </script>