$( document ).ready(function() {


  // hard-code json data into variable - final project pulls JSON data so might as well set it up here.
  // NOTE: The search and the recipe details are on separate requests.
  // Recipe search made against .../api/search
  // Recipe details are made using rId query against .../api/get
  var searchResult = [
    {
      "publisher": "BBC Food",
      "f2f_url": "http://food2fork.com/view/8c0314",
      "title": "Chicken and cashew nut stir-fry",
      "source_url": "http://www.bbc.co.uk/food/recipes/chickenandcashewnuts_89299",
      "recipe_id": "8c0314",
      "image_url": "http://static.food2fork.com/chickenandcashewnuts_89299_16x9986b.jpg",
      "social_rank": 95.91061636245128,
      "publisher_url": "http://www.bbc.co.uk/food"
    }
  ];

  var getResult = [
  {
    "recipe":
      {"publisher": "BBC Food",
      "f2f_url": "http://food2fork.com/view/8c0314",
      "ingredients":
        ["1 free-range egg",
        "1 tbsp cornflour",
        "pinch sea salt",
        "500g/1lb 2oz skinless chicken breast",
        "300ml/10fl oz groundnut oil ",
        "1 onion",
        "1 yellow pepper",
        "1 red pepper",
        "3 tbsp chicken stock",
        "2-3 tbsp light soy sauce",
        "2 large spring onions",
        "4 tbsp roasted cashew",
        "sea salt and ground white pepper",
        "steamed jasmine rice"],
      "source_url": "http://www.bbc.co.uk/food/recipes/chickenandcashewnuts_89299",
      "recipe_id": "8c0314",
      "image_url": "http://static.food2fork.com/chickenandcashewnuts_89299_16x9986b.jpg",
      "social_rank": 95.91061636245128,
      "publisher_url": "http://www.bbc.co.uk/food",
      "title": "Chicken and cashew nut stir-fry"}
    }
  ];

  // datamapper creates function to generate templates with JSON data and builds an HTML string for each object in the data array
  const datamapper = getResult.map(function(el) {
    // Mapper for ingredients into a list and joins them into a string
      const ingredients = el.recipe.ingredients.map(ingredient => '<li>' + ingredient + '</li>').join('');
    return `
          <div class="scene">
          <div class="card">
            <div class="card__face card__face--front">
              <div class ="imageContainer">
              <img src="${el.recipe.image_url}" alt="">
              </div>
              <div class="recipeTitle">
              ${el.recipe.title}
              </div>
              <div class="recipeLink">
              <a href="${el.recipe.source_url}">Link to recipe</a>
              </div>

            </div>
            <div class="card__face card__face--back">
              <div class="ingredients">
              <ul>
                ${ingredients}
              </ul>

            </div>
          </div>
        </div>
      `;
  });
  // append to index.html with selector
  $(".cards").append(datamapper);
  // listens for click and toggles class name, executes transform.
  // TODO: create a listener function that can distinguish cards clicked based on rId value. e.g. toggleId="8c0314"
  $('.card').click(function(){
  $('.card').toggleClass('is-flipped');
  });

});
