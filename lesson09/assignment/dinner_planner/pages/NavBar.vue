<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <nuxt-link to="/" class="navbar-nav px-5" >Welcome</nuxt-link>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span class="navbar-toggler-icon"></span></button>
        <div id="navbarNav" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item pr-5">
              <nuxt-link to="/suggested" class="nav-link">Suggested Recipes</nuxt-link>
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
