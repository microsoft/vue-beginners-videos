// input

var app = new Vue({
  el: '#app',
  data() {
    return {
      person : {
        name: 'chris'
      },
      selectedType: '',
      shippingTypes: [{
        name: 'normal'
      },
      {
        name: 'express'
      }]
    }
  }
})