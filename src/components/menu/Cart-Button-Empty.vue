<template>
  <button class="Button" @click="buttonClicked">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Cart-Button-Empty',
  components: {},
  data() {
    return {};
  },
  methods: {
    buttonClicked() {
      this.$emit('emit-empty-cart');
    },
  },
};
</script>

<style></style>
