<template>
  <div v-for="user in users" :key="user.id">
    <p>{{ user.id }}</p>
    <p>{{ user.firstName }}</p>
    <p>{{ user.lastName }}</p>
    <p>{{ user.email }}</p>
    <p>{{ user.userRole.name }}</p>
    <p>{{ user.works.count }}</p>
    <p>{{ user.works.totalPrice }}</p>
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
  