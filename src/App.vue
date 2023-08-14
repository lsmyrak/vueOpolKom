<template>
<div id="app">
  <UserList />
  </div>
</template>

<script>
import UserList from './components/Admin/UserList.vue';

export default {
  name: 'App',
  components: {
    UserList
}
}
</script>

<style>
#app {
  height: 100vh;
  background-color: #efefef;
}
</style>
