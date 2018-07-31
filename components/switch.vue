<template lang="pug">
  div

    transition
      .switch
        label.switch__label(for='checkbox', )
          input.switch__input#checkbox(type='checkbox', @click="change()", v-model="state")
          .switch__slider


</template>
<script>
export default {
  data: () => ({
    state: true
  }),
  methods: {
    change() {
      this.$emit('input', this.state);
      // console.log('state :', this.state);
    }
  }
};
</script>

<style>
.switch__label {
  display: inline-block;
  position: relative;
  width: 37px;
  height: 20px;
}

.switch__input {
  display: none;
}

.switch__slider {
  background-color: #fff;
  border-radius: 34px;
  border: 1px solid #000000;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}

.switch__input:checked + .switch__slider:before {
  transform: translateX(17px);
  background-color: #9013fe;
}

.switch__slider:before {
  content: '';
  width: 16px;
  height: 16px;
  background-color: #bd10e0;
  border-radius: 50%;
  bottom: 1px;
  left: 1px;
  position: absolute;
  transition: 0.4s;
}
</style>


