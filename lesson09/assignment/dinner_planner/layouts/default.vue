<template>
  <div id="app">
      <nav-bar></nav-bar>
      <!-- in order to pass the props to the portfolio component -->
      <router-view :artworks="artworks">
        <header-slot>
          <h1 class="slottedHeader">Select a painting for consignment</h1>
        </header-slot>
      </router-view>
  </div>
</template>

<script>
import NavBar from '../pages/NavBar.vue'
export default {
  components: {
    'nav-bar': NavBar,
  },
  // abstracted image markup from portfolio.vue component
  data() {
    return {
      artworks: [
        {
        title: 'Elegant Made Easy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: require('../assets/gallery01.jpg'),
        // added altText since assignment 07
        altText: 'Fancy dinner.'
        },
        {
        title: 'Family Dinner Planning',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: require('../assets/gallery02.jpg'),
        altText: "Tabletop full of delicious food."
        },
        {
        title: 'Top Rated Recipes',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: require('../assets/gallery03.jpg'),
        altText: "Woman enjoying her meal."
        }
      ]
    }
  },
  name: 'App'
}
</script>

<style>
/* google font api */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
.slottedHeader {
  color: gray;
  padding: 2em;
}
</style>
