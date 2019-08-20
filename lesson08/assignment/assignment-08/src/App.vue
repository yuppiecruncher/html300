<template>
  <div id="app">
      <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'

export default {
  components: {
    'nav-bar': NavBar
  },
  name: 'App'
}
</script>

<style>
/* google font api */
@import url('https://fonts.googleapis.com/css?family=Beth+Ellen|Rock+Salt&display=swap');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
