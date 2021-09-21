<template>
  <div>
    <!-- <button class="Button" @click="buttonClicked">
    
    <slot></slot>
  </button> -->
    <i class="fa fa-plus atc" @click="buttonClicked">
      <slot></slot>
    </i>
  </div>
</template>

<script>
export default {
  name: 'Cart-Button-Add',
  components: {},
  props: ['salad'],
  data() {
    return {};
  },
  methods: {
    buttonClicked() {
      this.$emit('button-clicked');
    },
  },
};
</script>

<style lang="scss">
.atc {
  width: 50px;
  height: 50px;
  background: #79c039;
  color: #ffffff;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  font-size: 1.8rem;
  position: absolute;
  right: 20px;
  bottom: 0px;
  box-shadow: 0 0 4px 2px rgba(80, 80, 80, 0.1);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.08);
    background: #55880d;
  }
}
</style>
