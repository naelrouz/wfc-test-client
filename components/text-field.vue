<template lang="pug">
  div.text-field
    input.text-field__input(
      ref="textField",
      type="text",
      :value="value",
      @input="input()",
      :placeholder="placeholder"
      )
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Введите данные'
    }
  },
  methods: {
    input() {
      this.$emit('input', this.$refs.textField.value);
      // console.log('textField.value :', this.value);
    }
  }
};
</script>


<style lang="sass">
.text-field
  margin: 10px auto;
  &__input
    display: inline-block;
    width: 100%;
    height: 34px;
    border: none;
    border-radius: 20px;
    font-size: 28px;
    text-align: center;


    &::placeholder
        color:  rgba(0,0,0,.5);


</style>



