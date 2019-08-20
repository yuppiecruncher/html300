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
  props: ['artworks'],
  data () {
    return {
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
