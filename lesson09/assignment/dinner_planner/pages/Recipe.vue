<template>
  <div class="recipeSuggestion container-fluid">
    <div class="recipeItem row" v-for="recipe in list.recipes.slice(0,3)">
      <div class="imgContainer col-md">
        <img class="img-fluid" :src="recipe.image_url" :alt="recipe.title">
      </div>
      <div class="col-md my-auto">
        <h3>{{recipe.title}}</h3>
        <a :href="recipe.source_url">Link to recipe.</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components: {

  },
  data() {
    return {
      list: {
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
  // note: current API request limit is maxed. Work with some dummy data tomorrow and only use the requests if necessary.
  // mounted () {
  //   axios
  //   .get('https://www.food2fork.com/api/search?key=512ad354b2b8443cec7e1fa308133ae6&q=chicken')
  //   .then(response => {this.list = response.data})
  // }
}
}
</script>

<style scoped>
.recipeSuggestion {
  padding: 2em;
  max-width: 80%;
}
.recipeItem {
  padding-top: 2em;
}
</style>
