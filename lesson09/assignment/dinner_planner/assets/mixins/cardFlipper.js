export default {
  data() {
    return {
      isFlipped:false
    }
  },
  methods: {
    // toggles '.isFlipped'
    cardFlipper(event, id) {
      alert('API-- get this recipe: ' + id);
      // get recipe using selected rId
      //   axios
      //   .get('https://www.food2fork.com/api/get?key=512ad354b2b8443cec7e1fa308133ae6&rId={{id}}')
      //   .then(response => {this.recipeList = response.data})
      this.isFlipped = !this.isFlipped;

    }
  }
}
