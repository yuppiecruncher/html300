<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <nuxt-link to="/" class="navbar-nav px-5" >Dan Smith Watercolors</nuxt-link>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span class="navbar-toggler-icon"></span></button>
        <div id="navbarNav" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item pr-5">
              <nuxt-link to="/about" class="nav-link">About</nuxt-link>
            </li>
            <li class="nav-item pr-5">
              <nuxt-link to="/portfolio" class="nav-link">Gallery</nuxt-link>
            </li>
            <li class="nav-item pr-5">
              <nuxt-link to="/checkout" class="nav-link">Purchase</nuxt-link>
            </li>
            <li class="nav-item pr-5">
              <nuxt-link to="/" class="nav-link" >Home</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

</template>

<script>
</script>

<style>
</style>
