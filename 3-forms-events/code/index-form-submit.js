var app = new Vue({
  el: '#app',
  methods: {
    handleSubmit(e) {
      console.log('form submitted')
      console.log(e.target.name.value);
      console.log(this.name);
    }
  },
  data() {
    return {
      name: ''
    }
  }
})