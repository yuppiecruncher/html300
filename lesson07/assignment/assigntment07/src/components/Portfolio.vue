<template>
  <div class="artshow container-fluid">
    <div class="galleryItem row" v-for="artwork in artworks">
      <div class="imgContainer col-md">
        <img class="img-fluid" v-bind:src="artwork.img" alt="">
      </div>
      <div class="col-md my-auto">
        <h3>{{artwork.title}}</h3>
        <p>{{artwork.description}}</p>
      </div>
    </div>
</div>


</template>

<script>
export default {
  data () {
    return {
      artworks: [
        {
        title: 'Painting 01',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: require('../assets/painting01.jpg')
        },
        {
        title: 'Painting 02',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: require('../assets/painting02.jpg')
        },
        {
        title: 'Painting 03',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img: require('../assets/painting03.jpg')
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.galleryItem {
  margin: auto;
  padding: 1em;
  max-width: 80%;
}
.imgContainer {
  background-color: white;
}
</style>
