<template>
  <div class="cards">
    <div
    class="scene"
    v-for="(recipe, index) in searchList.recipes.slice(0, 3)"
    >
      <div
      @click="cardFlipper(event, recipe.recipe_id)"
      v-bind:class="{container: true, card: true, isFlipped: isFlipped}"
      title="Click to flip the card over"
      >
          <div class="card__face card__face--front">
            <div class="row">
              <div class="col-md recipeTitle">
                {{recipe.title}}
              </div>
            </div>
            <div class="row">
              <div class ="col-md-6 imageContainer">
                <img class="img-thumbnail" :src="recipe.image_url" alt="">
              </div>
              <div class="col-md recipeLink">
                <p class="recipeTitle">From: {{recipe.publisher}}</p>
                <a :href="recipe.source_url">Link to recipe</a>
              </div>
            </div>
          </div>
          <div class="row card__face card__face--back">
            <div class="col-md ingredients">
            <ul>
              <h3>Ingredients from API: </h3>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import the mixin
import cardFlipper from '../assets/mixins/cardFlipper.js';

export default {
  mixins:[cardFlipper],
  data() {
    return {
      searchList: {
        "count": 30,
        "recipes": [
          {
            "publisher": "BBC Food",
            "f2f_url": "http://food2fork.com/view/8c0314",
            "title": "Chicken and cashew nut stir-fry",
            "source_url": "http://www.bbc.co.uk/food/recipes/chickenandcashewnuts_89299",
            "recipe_id": "8c0314",
            "image_url": "http://static.food2fork.com/chickenandcashewnuts_89299_16x9986b.jpg",
            "social_rank": 95.91061636245128,
            "publisher_url": "http://www.bbc.co.uk/food"
          },
          {
            "publisher": "Jamie Oliver",
            "f2f_url": "http://food2fork.com/view/0beb06",
            "title": "Roasted chicken breast with pancetta, leeks & thyme",
            "source_url": "http://www.jamieoliver.com/recipes/chicken-recipes/roasted-chicken-breast-with-pancetta-leeks-and-thyme",
            "recipe_id": "0beb06",
            "image_url": "http://static.food2fork.com/466_1_1349094314_lrg2129.jpg",
            "social_rank": 94.88568903341375,
            "publisher_url": "http://www.jamieoliver.com"
          },
          {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/5052",
            "title": "Buffalo Chicken Chili",
            "source_url": "http://allrecipes.com/Recipe/Buffalo-Chicken-Chili/Detail.aspx",
            "recipe_id": "5052",
            "image_url": "http://static.food2fork.com/2028272b37.jpg",
            "social_rank": 94.58658353411347,
            "publisher_url": "http://allrecipes.com"
          }
        ]
      }
  }
  // note: retrieves top socially ranked (trending) recipes.
  // mounted () {
  //   axios
  //   .get('https://www.food2fork.com/api/search?key=512ad354b2b8443cec7e1fa308133ae6&q=sort=t')
  //   .then(response => {this.list = response.data})
  // }
}
}
</script>

<style scoped lang="scss">
.cards {
  width: 100%;
  display: block;
  background: #6F6F6F;
}
.scene {
  padding: 2em;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  height: 300px;
  perspective: 2000px;
}
.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  margin-top: 1em;
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card__face {
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 5px;
}
.card__face--front {
  background: #ffffff;
  text-align: center;
}
.imageContainer img {
  margin: auto;
  background-color: #F3F4F8;
  max-height: 175px;
}
.recipeTitle {
  padding-top: 1em;
  padding-bottom: .5em;
  text-align: center;
  font-size: 1em;
  font-weight: bold;
  color: #6F6F6F;
}
.recipeLink a {
  text-decoration: none;
  color: #6F6F6F;
  vertical-align: middle;
}
.card__face--back {
  background: #ffffff;
  transform: rotateY( 180deg );
}
.card.isFlipped {
  transform: rotateY(180deg);
}
</style>
