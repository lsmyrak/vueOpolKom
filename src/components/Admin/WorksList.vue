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
  export default {
    data() {
      return {
        users: []
      }
    },
    methods: {
      getData() {
        fetch('http://lsmyrak.duckdns.org:8080/api/Admin/get-all-user')
          .then(response => response.json())
          .then(data => this.users = data)       
      }
    },
    
    mounted() {
      this.getData();
    }
  }
  </script>