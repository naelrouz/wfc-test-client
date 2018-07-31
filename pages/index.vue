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

      .errors(v-if="errors.length > 0")
        p errors:
        pre {{errors}}


</template>

<script>
// import axios from 'axios';

import http from '../api/axios.js';

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
    // sendStatesToServer() {
    //   const states = {
    //     input: this.input,
    //     btn: this.btn,
    //     icoBtn: this.icoBtn,
    //     switchState: this.switchState
    //   };

    //   http
    //     .post('/states', {
    //       body: states
    //     })
    //     .then(response => {
    //       console.log('states.post.res');
    //     })
    //     .catch(e => {
    //       this.errors.push(e);
    //     });

    //   // axios
    //   //   .post(`http://localhost:3000/states/`, {
    //   //     body: states
    //   //   })
    //   //   .then(response => {})
    //   //   .catch(e => {
    //   //     this.errors.push(e);
    //   //   });
    // },
    sendOneStateToServer(state) {
      http
        .post('/states', {
          body: state
        })
        .then(response => {
          // console.log('states.post.res');
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  watch: {
    input(val) {
      console.log('input:', this.input);
      // this.sendStatesToServer();
      this.sendOneStateToServer({ input: this.input });
    },
    btn(val) {
      console.log('btn:', this.btn);
      // this.sendStatesToServer();
      this.sendOneStateToServer({ btn: this.btn });
    },
    icoBtn(val) {
      console.log('icoBtn:', this.icoBtn);
      // this.sendStatesToServer();
      this.sendOneStateToServer({ icoBtn: this.icoBtn });
    },
    switchState(val) {
      console.log('switchState:', this.switchState);
      // this.sendStatesToServer();
      this.sendOneStateToServer({ switch: this.switchState });
    }
  },
  mounted() {}
};
</script>



<style lang="sass">
.elements
  max-width: 480px;
  margin: 60px auto;
  padding: 10px;
  text-align: center;
  &__item
    margin: 10px auto
  .results
    text-align: left;

</style>
