<template lang="pug">
  .btn(v-on="$listeners", @click="changeState()")
    slot
</template>

<script>
export default {
  data: () => ({
    state: false
  }),
  methods: {
    changeState() {
      this.state = !this.state;
      this.$emit('input', this.state);
      // console.log('icoBtn.state: ', this.state);
    }
  }
};
</script>

<style lang="sass">
.btn
  display: inline-block;
  cursor: pointer;
  height: 34px;
  width: auto;
  padding: auto 65px;
  border-radius: 20px;
  background: #fff;
  color: #000000;
  font-weight: bold;
  font-family: 'Comfortaa', cursive;
  font-size: 28px;
  text-align: center;


</style>
