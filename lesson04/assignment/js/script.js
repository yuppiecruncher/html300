$( document ).ready(function() {

  $('.card').click(function(){
  $('.card').toggleClass('is-flipped');
  });

  // hard-code json data into variable - final project pulls JSON data so might as well set it up here.
  // TODO: Make this match the JSON template for the recipe API
  var data =[
    {
      "name": "Steve Smith",
      "jobTitle": "Project Manage",
      "company": "Front End Dev Co",
      "experience": "3 years",
      "school": "UW",
      "major": "Marketing",
      "email": "steve@fedc.com",
      "linkedInUrl": "steve.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", ".NET", "C#"
      ]
    }];

// TODO: change this card template to match recipe card and include instructions on the back side.
  // create mapper function to generate templates with JSON data
  const datamapper = data.map(function(el) {
    // method to add a space character to each language in list
    const languages = el.codeLanguages.map(x => ' ' + x)
    // builds an HTML string for each object in the data array
    return `
      <div class="card">
        <div class="info">
          <div class="headshot">
            <img src="img/unsplash-headshot.jpg" alt="">
          </div>
          <div class="name">
            <p><b>${el.name}</b></p>
            <p><i>${el.jobTitle}</i></p>
          </div>
          <div class="persInfo">
            <p><b>Company: </b>${el.company}</p>
            <p><b>Experience: </b>${el.experience}</p>
            <p><b>School: </b>${el.school}</p>
            <p><b>Major: </b>${el.major}</p>
            <p><b>Email: </b>${el.email}</p>
            <p><b>Languages: </b>${languages}</p>
            <a href="#"><img src="img/linkedin.svg" alt="">${el.linkedInUrl}</a>
          </div>
        </div>

      </div>
      `;
  });
  // append to index.html with selector
  // $(".cards").append(datamapper);

});
