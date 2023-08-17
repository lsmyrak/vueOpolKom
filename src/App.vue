<template>
  <div id="app">
    <!-- <UserList /> -->
    <WorksList />
    <!-- <Login /> -->
    <!-- <Register /> -->
  </div>
</template>

<script>
  import WorksList from './components/Admin/WorksList.vue';
// import UserList from './components/Admin/UserList.vue';
// import Login from './components/Account/Login.vue';
// import Register from './components/Account/Register.vue';

export default {
  name: 'App',
  components: {
    // UserList
     WorksList
    // Login
    // Register
  }
}
</script>
