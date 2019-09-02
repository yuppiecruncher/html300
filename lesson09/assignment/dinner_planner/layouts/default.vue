<template>
  <div>
    <nav-bar></nav-bar>
    <router-view :artworks="artworks">
      <header-slot>
          <h1 class="slottedHeader">Select a painting for consignment</h1>
        </header-slot>
    </router-view>
    <nuxt />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
  components: {
    'nav-bar': NavBar,
  },
  // abstracted image markup from portfolio.vue component
  data() {
    return {
      artworks: [
        {
        title: 'Painting 01',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: require('../static/painting01.jpg'),
        // added altText since assignment 07
        altText: 'Watercolor flowers, mostly red and pink hues.'
        },
        {
        title: 'Painting 02',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: require('../static/painting02.jpg'),
        altText: "Watercolor flowers, mostly blue and white hues."
        },
        {
        title: 'Painting 03',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: require('../static/painting03.jpg'),
        altText: "Watercolor plants, mostly blue and brown hues."
        }
      ]
    }
  },
  name: 'App'
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Beth+Ellen|Rock+Salt&display=swap');

.slottedHeader {
  color: gray;
  padding: 2em;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
