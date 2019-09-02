<template>
  <div class="artshow container-fluid">
    <div class="galleryItem row" v-for="artwork in artworks">
      <div class="imgContainer col-md">
        <!-- toggleBorderOn emits to method that toggles true/false for key: borderOn class 'img-fluid' remains constant, but imgBorder class is added on borderOn:true-->
        <!-- added tooltip -->
        <img v-on:click="toggleBorderOn" class="img-fluid" v-bind:class="{ imgBorder: borderOn }" :src="artwork.img" :alt="artwork.altText" title="Click to toggle a border">
      </div>
      <div class="col-md my-auto">
        <h3>{{artwork.title}}</h3>
        <p>{{artwork.description}}</p>
      </div>
    </div>
</div>
</template>

<script>
// import the mixin
import border from '../mixins/border';
export default {
  // abstracted image markup to a prop being pushed from parent App.vue
  // recieve prop from parent
  // Added prop validation
  props: {
    artworks: {
      type: Array
    }
  },
  // abstracted data and methods properties to ../mixins/border.js
  mixins:[border]
}
</script>

<style scoped>
.galleryItem {
  margin: auto;
  padding: 1em;
  max-width: 80%;
}
.imgContainer {
  background-color: white;
}
.imgBorder {
  border: 2em solid rgb(121, 146, 186);
}
</style>
