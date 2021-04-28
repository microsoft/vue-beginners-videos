var app = new Vue({
  el: '#app',
  data() {
    return {
      name: '',
      address: '',
      city: '',
      country: '',
      lhs: 0,
      rhs: 0
    }
  },
  computed: {
    sum() {
      return parseInt(this.lhs) + parseInt(this.rhs);
    },
    fullAddress() {
      return `
      ${this.name}, ${this.address}, ${this.city.toUpperCase()}, ${this.country.toUpperCase()} 
      `
    }
  }
})