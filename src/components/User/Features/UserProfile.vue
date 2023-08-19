<template>
  <div class="app">
    <div class="user-container">
      <div class="info-item">
        <p class="">ID: {{ user.id }}</p>
        <p class="">Imię: {{ user.firstName }}</p>
        <p class="">Nazwisko : {{ user.lastName }}</p>
        <p class="">Adres email: {{ user.email }}</p>
        <p>Ilość Zadań: {{ user.count }}</p>
        <p >Ilośc pieniedzy: {{ user.totalPrice }} zł</p>
      </div>
    </div>
  </div>
</template>
<script>

import UserService from '@/Services/UserService';
// import AdminService from '@/Services/AdminService';

export default {
  data() {
    return {
      user: []
    }
  },

  methods: {
    getData() {
      UserService.getUser().then((response) => {
        this.user = response.data
        console.log(this.user);
      })
    }
  },

  mounted() {
    this.getData();
  }
}
</script>