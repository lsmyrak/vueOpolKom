<template>
  <div class="info-item" v-for="user in users" :key="user.id">
    <p class="user-icon user-id">{{ user.id }}</p>
    <p class ="user-icon first-name">{{ user.firstName }}</p>
    <p class="last-name">{{ user.lastName }}</p>
    <p class="user-icon email">{{ user.email }}</p>
    <p class="user-icon user-role" >{{ user.userRole.name }}</p>
    <p> Ilość zadań :  {{ user.works.count }}</p>
    <p>Łączna cena : {{ user.works.totalPrice }}</p>
  </div>
</template>
  
<script>
import AdminService from '@/Services/AdminService';

export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    getData() {
      AdminService.getAllUser().then((response) =>
        this.users = response.data)
      console.log(this.users);
    }
  },
  mounted() {   
    this.getData();
  }
}
</script>
  