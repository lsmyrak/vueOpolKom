<template>
<div id="app">
  <UserList />
  </div>
</template>

<script>
import WorkList from './components/Admin/WorksList.vue';

export default {
  name: 'App',
  components: {
    WorkList
}
}
</script>

<style>
#app {
  height: 100vh;
  background-color: #efefef;
}
</style>
