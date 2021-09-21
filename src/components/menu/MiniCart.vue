<template>
  <div class="top-cart-content dropdown-menu" aria-labelledby="triggerId">
    <div class="top-cart-title">
      <h4>Shopping Cart</h4>
    </div>
    <div class="top-cart-items" v-if="this.getCart.length > 0">
      <div
        class="top-cart-item clearfix"
        v-for="(item, index) in this.getCart"
        :key="index"
      >
        <div class="top-cart-item-image">
          <a href="#"><img :src="`/${item.image}`" alt=""/></a>
        </div>
        <div class="top-cart-item-desc">
          {{ item.name }}
          <span class="top-cart-item-price">Ksh.{{ item.price }}</span>
          <span class="top-cart-item-quantity">x {{ item.quantity }}</span>
        </div>
      </div>
    </div>
    <p v-else class="text-center py-3">No items currently added</p>
    <div class="top-cart-action clearfix">
      <span class="fleft top-checkout-price">Ksh. {{ this.subT }}</span>
      <button
        class="button cart-btn btn-sm nomargin fright"
        @click="goToCart()"
      >
        View Cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MiniCart",
  mounted() {
    this.subTotal();
  },
  data() {
    return {
      subT: this.getSubTotal,
    };
  },
  methods: {
    ...mapActions(["subTotal"]),
    goToCart() {
      if(this.isAuthenticated){
        this.$router.push({ name: "Cart" });
      }else{
         this.$router.push({ name: "Login" });
      }
     
    },
  },
  computed: {
    ...mapGetters(["getCart", "getSubTotal","isAuthenticated"]),
  },
  watch: {
    getSubTotal(val, oldVal) {
      // is triggered whenever the store state changes
      this.subT = val;
      console.log("do stuff", val, oldVal);
    },
  },
};
</script>

<style lang="scss">
#top-cart {
  margin-right: 0;
  cursor: pointer;
}

#top-cart > a > span {
  display: block;
  position: absolute;
  top: -7px;
  left: auto;
  right: -14px;
  font-size: 10px;
  font-family: var(--content-font);
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  background-color: #79c039;
  border-radius: 50%;
}
#top-cart .top-cart-content {
  //   opacity: 0;
  //   z-index: -2;
  position: absolute;
  width: 280px;
  background-color: #fff;
  box-shadow: 0px 20px 50px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;
  border-top: 2px solid #79c039;
  top: 60px;
  right: -15px;
  left: auto;
  //   margin: -10000px 0 0;
  -webkit-transition: opacity 0.5s ease, top 0.4s ease;
  -o-transition: opacity 0.5s ease, top 0.4s ease;
  transition: opacity 0.5s ease, top 0.4s ease;
}

#top-cart.top-cart-open .top-cart-content {
  opacity: 1;
  z-index: 11;
  margin-top: 0;
}

.top-cart-title {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
  font-family: var(--main-font);
}

.top-cart-title h4 {
  margin-bottom: 0;
  font-size: 15px;
  font-weight: bold;
  color: #444;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.top-cart-items {
  padding: 15px;
  font-family: var(--content-font);
}

.top-cart-item {
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid #f5f5f5;
}

.top-cart-item:first-child {
  padding-top: 0;
  margin-top: 0;
  border-top: 0;
}

.top-cart-item-image {
  float: left;
  margin-right: 15px;
  width: 56px !important;
  height: 34px !important;
  border: 2px solid #eee;
  -webkit-transition: border-color 0.2s linear;
  -o-transition: border-color 0.2s linear;
  transition: border-color 0.2s linear;
}

.top-cart-item-image a,
.top-cart-item-image img {
  display: block;
  width: 52px !important;
  height: 30px !important;
}

.top-cart-item-image:hover {
  border-color: #79c039;
}

.top-cart-item-desc {
  position: relative;
  overflow: hidden;
}

.top-cart-item-desc a {
  text-align: left !important;
  font-size: 13px !important;
  width: auto !important;
  height: auto !important;
  font-weight: 600;
}

.top-cart-item-desc a:hover {
  color: #79c039 !important;
}

.top-cart-item-desc span.top-cart-item-price {
  display: block;
  line-height: 20px;
  font-size: 12px !important;
  //   font-family: var(--content-font);
  color: #999;
}

.top-cart-item-desc span.top-cart-item-quantity {
  display: block;
  position: absolute;
  font-size: 12px !important;
  right: 0;
  top: 2px;
  color: #444;
}

.top-cart-action {
  padding: 15px;
  border-top: 1px solid #eee;
}

.top-cart-action span.top-checkout-price {
  font-size: 16px;
  color: #79c039;
  font-weight: 700;
  font-family: var(--content-font);
}
.cart-btn {
  float: right;
  background-color: #79c039;
  color: #fff;
  font-size: 12px;
  font-family: var(--content-font);
  font-weight: 600;
  border: 1px solid transparent;
  padding: 0.375rem 1rem;
  text-align: center;
  vertical-align: middle;
  line-height: 1.5;
  border-radius: 0.25rem;
}

.dropdown-toggle > a {
  color: #79c039;
  text-decoration: none;
  background-color: transparent;
}
</style>
