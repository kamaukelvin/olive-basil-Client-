<template>
  <div class="Cart mb-5">
    <p>Cart: {{ this.cart.length }} items</p>
    <!-- Button component -->
    <p>Total: Ksh. {{ this.total }}</p>
    <div class="row  mb-5">
      <div class="col-md-6">
        <Cart-Button-Empty @emit-empty-cart="emitEmptyCart">
          <p>Empty Cart</p>
        </Cart-Button-Empty>
      </div>
      <div class="col-md-6">
        <button class="Button">View Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartButtonEmpty from './Cart-Button-Empty.vue';

export default {
  name: 'Cart',
  components: {
    CartButtonEmpty,
  },
  props: ['cart', 'total', 'salad'],
  data() {
    return {};
  },
  methods: {
    emitEmptyCart() {
      this.$emit('empty-cart');
    },
  },
};
</script>

<style lang="scss">
.Cart {
  border-radius: 5px;
  height: fit-content;
  background-color: white;
  text-align: center;
  font-size: 0.9em;
  font-family: var(--content-font);
  padding: 5px;

  p {
    font-family: var(--content-font);
    font-size: 1.4rem;
    font-weight: 700;
  }
}
</style>
