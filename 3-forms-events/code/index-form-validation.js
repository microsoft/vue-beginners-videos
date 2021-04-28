var app = new Vue({
  el: '#app',
  methods: {
    handleSubmit(e) {
      console.log('form submitted')
      console.log(e.target.name.value);
      console.log(this.name);
      
    },
    handleChange(ev) {
      console.log(ev.target.validity);
      // logic
      this[ev.target.name].valid = ev.target.validity.valid;
      if (!ev.target.validity.valid) {
        if (ev.target.validity.valueMissing) {
          this[ev.target.name].errorMessage = this[ev.target.name].errorMessages.valueMissing;
        } else {
          this[ev.target.name].errorMessage = 'field not valid';
        }
      } else {
        this[ev.target.name].errorMessage = '';
      }
    }
  },
  data() {
    return {
      name: {
        value: '',
        valid: true,
        errorMessage: '',
        errorMessages: {
          valueMissing: 'Name is required'
        }
      },
      postalAddress: {
        value: '',
        valid: true,
        errorMessage: '',
        errorMessages: {
          valueMissing: 'Postal address is required'
        }
      }
    }
  }
})