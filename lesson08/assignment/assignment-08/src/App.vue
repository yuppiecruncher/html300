<template>
  <div id="app">
      <nav-bar></nav-bar>
      <portfolio :artworks="artworks"></portfolio>
    <router-view/>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import Portfolio from './components/Portfolio.vue'

export default {
  components: {
    'nav-bar': NavBar,
    'portfolio': Portfolio
  },
  data() {
    return {
      artworks: [
        {
        title: 'Painting 01',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: require('./assets/painting01.jpg'),
        altText: 'Watercolor flowers, mostly red and pink hues.'
        },
        {
        title: 'Painting 02',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: require('./assets/painting02.jpg'),
        altText: "Watercolor flowers, mostly blue and white hues."
        },
        {
        title: 'Painting 03',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: require('./assets/painting03.jpg'),
        altText: "Watercolor plants, mostly blue and brown hues."
        }
      ]
    }
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
