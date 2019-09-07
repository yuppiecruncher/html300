<template>
  <div class="jumbotron">
    <!-- created filter in main.js -->
        <h1 class="display-4">{{title}}</h1>
        <nuxt-link to="/suggested" class="btn btn-light btn-lg" href="about.html" role="button">Learn more</nuxt-link>
        <hr class="my-4">
        <blockquote class="blockquote text-center p-3">
          <p class="mb-0">{{quote}}</p>

        </blockquote>
      </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data () {
    return {
      msg: 'Landing Page',
      // change to uppercase using filter
      title: 'Dinner Planner',
      quote: 'A simple dinner planner app that puts hundreds of recipe ideas in your hands.',
    }
  }
}
</script>

<style lang="css" scoped>
/* landing Page */
.jumbotron {
  background-image: url("../assets/landingImg.jpg");
  background-size: cover;
  text-align: center;
  color: white;
}
h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 5em;
  padding: 2em;
}
blockquote {
  background-color: rgba(102, 102, 102, 0.94);
  border-radius: 5px;
  font-size: 1em;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
  /* media queries for font sizes on different viewport widths. */
@include media-query(tab) {
  h1 {
    font-size: 5em;
  }
  blockquote {
    font-size: 3em;
  }
}
@include media-query(xl) {
  h1 {
    font-size: 10em;
  }
}
</style>
