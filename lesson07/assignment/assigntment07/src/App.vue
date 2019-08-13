<template>
  <div id="app">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-nav px-5" >Dan Smith Watercolors</router-link>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span class="navbar-toggler-icon"></span></button>
        <div id="navbarNav" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item pr-5">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item pr-5">
              <router-link to="/portfolio" class="nav-link">Gallery</router-link>
            </li>
            <li class="nav-item pr-5">
              <router-link to="/" class="nav-link" >Home</router-link>
            </li>
            <li class="nav-item pr-5">
              <router-link to="/checkout" class="nav-link">Purchase</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
