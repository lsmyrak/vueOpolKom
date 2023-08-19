<template>
  <div id="app">
    <!-- <UserList /> -->
    <!-- <WorksList /> -->
    <!-- <Login /> -->
    <!-- <Register /> -->
    <UserProfile/>
  </div>
</template>

<script>
// import WorksList from './components/Admin/WorksList.vue';
// import UserList from './components/Admin/UserList.vue';
// import Login from './components/Account/Login.vue';
// import Register from './components/Account/Register.vue';
import UserProfile from './components/User/Features/UserProfile.vue';

export default {
  name: 'App',
  components: {
// Login    
    UserProfile
}
}
</script>
