<template lang="pug">
  .elements
    app-text-field.elements__item(v-model="input")
    // app-text-field.elements__item(v-model="input2")

    app-btn.elements__item(v-model="btn")
      | Вход
    app-ico-btn.elements__item(icon="settings", v-model="icoBtn")
    app-switch.elements__item(v-model="switchState")

    .results
      h3 input: {{input}}
      // h3 input: {{input2}}
      h3 Button: {{btn}}
      h3 icon Button: {{icoBtn}}
      h3 Switch: {{switchState}}

      .errors
        p errors:
        pre {{errors}}


</template>

<script>
// import { http } from '../api/axios.js';
import axios from 'axios';

export default {
  data: () => ({
    input: '',
    // input2: '',
    btn: false,
    icoBtn: false,
    switchState: false,
    errors: []
  }),
  methods: {
    sendStatesToServer() {
      const states = {
        input: this.input,
        btn: this.btn,
        icoBtn: this.icoBtn,
        switchState: this.switchState
      };

      // http.post('/states', {
      //   body: states
      // });

      axios
        .post(`http://localhost:3000/states/`, {
          body: states
        })
        .then(response => {})
        .catch(e => {
          this.errors.push(e);
        });
    },
    sendOneStateToServer(state) {
      http.post('/', {
        body: state
      });
    }
  },
  watch: {
    input(val) {
      console.log('input:', this.input);
      this.sendStatesToServer();
    },
    btn(val) {
      console.log('btn:', this.btn);
      this.sendStatesToServer();
    },
    icoBtn(val) {
      console.log('icoBtn:', this.icoBtn);
      this.sendStatesToServer();
    },
    switchState(val) {
      console.log('switchState:', this.switchState);
      this.sendStatesToServer();
    }
  },
  mounted() {}
};
</script>



<style lang="sass">
.elements
  max-width: 480px;
  margin: auto 60px;
  text-align: center;
  &__item
    margin: 10px auto
  .results
    text-align: left;

</style>
