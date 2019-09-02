<template>
  <div class="slotContainer">
    <!-- slot required wrapping the entire accordion with a div so that the slot wouldn't be the root element. This was necessary because I wanted the element outside my original purchaseContainer div and at the top of the checkout page. -->
    <slot></slot>
    <div class="purchaseContainer">
      <div class="accordion" id="accordionExample">
          <div v-for="item in items" class="card">
            <div class="card-header" v-bind:id="item.heading">
              <h2 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" v-bind:data-target="item.collapse" aria-expanded="true" aria-controls="collapseOne">
                  {{ item.title }}
                </button>
              </h2>
            </div>

            <div v-bind:id="item.collapseTarget" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                <div class="row my-4">
                  <div class="col-md-8">
                    <h2 class="font-weight-bold mb-3 black-text">Description.</h2>
                    <p class="mb-0">{{ item.description }}</p>
                    <button v-on:click="item.consigned =! item.consigned" class="btn btn-secondary" href="#">Consign</button>
                    <p v-if="item.consigned" class="alert alert-success" >This painting has been consigned</p>
                    <p v-else>This painting is available for consignment</p>
                  </div>
                  <div class="col-md-4 mt-3 pt-2">
                    <div class="view z-depth-1">
                      <!-- fluid imgs -->
                      <img v-bind:src="item.img" alt="" class="img-fluid">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'voluptate velit',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          img: require('../static/painting01.jpg'),
          heading: 'heading one',
          collapse: '#collapseOne',
          collapseTarget: 'collapseOne',
          consigned: false
        },
        {
          title: 'irure',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          img: require('../static/painting02.jpg'),
          heading: 'heading two',
          collapse: '#collapseTwo',
          collapseTarget: 'collapseTwo',
          consigned: false
        },
        {
          title: 'reprehenderit',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          img: require('../static/painting03.jpg'),
          heading: 'heading three',
          collapse: '#collapseThree',
          collapseTarget: 'collapseThree',
          consigned: false
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* purchase page customization */
.purchaseContainer {
  margin: auto;
  max-width: 80%;
}
button {
  margin: 1em;
}
</style>
