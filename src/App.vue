<template>
  <div id="app">
    <UserList />
  </div>
</template>

<script>
// import WorksList from './components/Admin/WorksList.vue';
import UserList from './components/Admin/UserList.vue';

export default {
  name: 'App',
  components: {
    UserList
    // WorksList
  }
}
</script>
