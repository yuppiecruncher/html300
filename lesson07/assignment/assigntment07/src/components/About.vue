<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Size SM containers -->
      <div class="col-sm col-md col-lg">
        <!-- fluid img container -->
        <img class="img-fluid" v-bind:src="quoteImage" alt="Photo by Evie S. on Unsplash">
      </div>
      <div class="col-sm text-center my-auto">
        <span class="artistQuote my-auto">{{artistQuote}}</span>
      </div>
    </div>
    <div class="aboutContainer">
      <div class="row">
        <!-- Size MD containers -->
        <div class="col-md">
          <img class="selfPortrait img-fluid" v-bind:src="selfPortraitImage" alt="">
        </div>
        <div class="col-md my-auto">
          <h4 class="text-center">Methods:</h4>
          <blockquote class="blockquote">
            <p class="mb-0">{{blockquote}}</p>
          </blockquote>
        </div>
      </div>
    </div>
    <div class="aboutContainer">
      <div class="row">
        <!-- Size LG containers -->
        <div class="col-lg my-auto p-5">
          <h4 class="text-center">Critiques:</h4>
          <blockquote class="blockquote text-center">
            <p class="mb-0">{{critique}}</p>
            <footer class="blockquote-footer">{{critiqueAuthor}}<cite title="Source Title">{{critiqueSource}}</cite></footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About Page',
      artistQuote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      blockquote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      critique: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      critiqueAuthor: 'Someone famous in ',
      critiqueSource: 'Source Title',
      quoteImage: require('../assets/aboutPainting.jpg'),
      selfPortraitImage: require('../assets/selfPortrait.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* handles font sizes so quote stays reasonable */
.artistQuote {
  font-family: 'Rock Salt', cursive;
  font-size: .7em;
}
.selfPortrait {
  max-width: 20em;
  padding: 1em;
}
@include media-query(tab) {
  .artistQuote {
    font-size: 1em;
  }
}
@include media-query(xl) {
  .artistQuote {
    font-size: 1.3em;
  }
}

</style>
