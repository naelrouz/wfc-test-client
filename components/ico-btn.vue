<template lang="pug">
  .ico-btn(@click="changeState()")
    i.material-icons(:style="{color:iconColor}") {{icon}}

</template>

<script>
export default {
  data: () => ({
    state: false
  }),
  props: {
    icon: {
      type: String,
      default: 'home'
    },
    iconColor: {
      type: String,
      default: '#9013FE'
    }
  },
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
.ico-btn
  cursor: pointer;
  height: 35px
  width: 35px;
  text-align: center;
  background: #fff;
  padding: 5px;
</style>
