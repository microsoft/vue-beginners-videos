// events
// event handler
// event modifier
// shorthand

var app = new Vue({
  el: '#app',
  data() {
    return {
      coins: 0
    }
  },
  methods: {
    handleClick(e) {
      this.coins++;
    },
    outerClick(e) {
      console.log('outer click');
    }
  }
})