<template>
  <div class="jumbotron">
    <!-- created filter in main.js -->
        <h1 class="display-4">{{title}}</h1>
        <nuxt-link to="/about" class="btn btn-light btn-lg" href="about.html" role="button">Learn more</nuxt-link>
        <hr class="my-4">
        <blockquote class="blockquote text-center p-3">
          <p class="mb-0">{{quote}}</p>
          <footer class="blockquote-footer">{{author}}<cite title="Source Title">{{source}}</cite></footer>
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
      title: 'Dan Smith Watercolors',
      quote: "Self-expression is a hallmark of an artist, of art, to get something off one's chest, to sing one's song. So that element is present in all art. It is the key to even standing up and saying, 'Hey, listen to me.' Self-expression can be based on looking at the world and making observations about it.",
      author: 'George Carlin ',
      source: 'Psychology Today'
    }
  }
}
</script>

<style lang="css" scoped>
/* landing Page */
.jumbotron {
  background-image: url("../assets/watercolor.jpg");
  background-size: cover;
  text-align: center;
  color: white;
}
h1 {
  font-family: 'Rock Salt', cursive;
  font-size: 2em;
  padding: 2em;
}
blockquote {
  background-color: rgba(74, 0, 0, 0.5);
  border-radius: 5px;
  font-size: 1em;
  font-family: 'Beth Ellen', cursive;
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
