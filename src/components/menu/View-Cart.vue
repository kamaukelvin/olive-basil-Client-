<template id="view-cart">
  <div class="card">
    <div class="row">
      <div class="col-md-8 cart">
        <div class="title">
          <div class="row">
            <div class="col">
              <h4><b>Cart Details</b></h4>
            </div>
            <div class="col align-self-center text-right text-muted">
              {{ cart.length }} items
            </div>
          </div>
        </div>
        <div class="row border-top" v-if="cart.length > 0">
          <div
            class="row main align-items-center border-bottom"
            v-for="(salad, index) in cart"
            :key="index"
            :salad="salad"
          >
            <div class="col-2">
              <img class="img-fluid" :src="`/${salad.image}`" />
            </div>
            <div class="col">
              <div class="row text-muted">{{ salad.category }}</div>
              <div class="row">{{ salad.name }}</div>
            </div>
            <div class="col">
              <i class="fas fa-plus-square mr-2 " @click="plusQty(salad)"></i>
              <a href="#" class="border">{{ salad.quantity }}</a>
              <i class="fas fa-minus-square ml-2" @click="minusQty(salad)"></i>
            </div>

            <div class="col">
              Ksh. {{ salad.price * salad.quantity }}
              <span class="close"><i class="fas fa-trash-alt"></i></span>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <div>
            <h3>
              The Cart is Empty!
            </h3>
          </div>
        </div>
        <div class="back-to-shop">
          <a class="back text-muted" @click="backToShop"
            >&leftarrow; Back to Shop</a
          >
        </div>
      </div>
      <div class="col-md-4 summary">
        <div>
          <h5><b>Summary</b></h5>
        </div>
        <hr />
        <div style="padding-left:0;">
          Meals Per Week <strong>{{ getSelectedPlan.mealPerWeek }}</strong>
        </div>
        <div style="padding-left:0;">
          Serving Plan <strong>{{ Number(getSelectedPlan.title.match(/\d+/)[0] )}}</strong>
        </div>

        <div class="row">
          <div class="col" style="padding-left:0;">
            ITEMS <strong>{{ cart.length }}</strong>
          </div>

          <div class="col text-right">
            <strong>SUB TOTAL:</strong> Ksh. {{ this.getSubTotal }}
          </div>
        </div>
        <form>
          <p>DELIVERY FEE</p>
          <select>
            <option class="text-muted">Standard-Delivery- Ksh. 500.00</option>
          </select>
          <p>GIFT CODE</p>
          <input id="code" placeholder="Enter your code" />
        </form>
        <div
          class="row"
          style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;"
        >
          <div class="col"><strong>GRAND TOTAL</strong></div>
          <div class="col text-right">Ksh. {{ this.myTotal }}</div>
        </div>
        <button class="btn" @click="proceedToCheckout">
          CHECKOUT
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "View-Cart",
  computed: {
    ...mapGetters(["getSubTotal", "getTotal", "getSelectedPlan", "getPlan"]),
  },
  mounted() {
    console.log("WHAT IS,", this.cart);
    this.subTotal();
    this.cartTotal();
  },
  components: {},
  props: ["cart", "subtotal", "total", "menu"],
  data() {
    return {
      myTotal: this.getTotal,
    };
  },
  methods: {
    ...mapActions(["subTotal", "cartTotal"]),
    removeItem() {
      this.$emit("minus-item");
    },
    plusQty(salad) {
      this.$emit("increase-qty", salad);
    },
    minusQty(salad) {
      this.$emit("decrease-qty", salad);
    },
    backToShop() {
      this.$router.push({ name: "Menus" });
    },
    proceedToCheckout() {
      this.$router.push({ name: "Checkout" });
    },
  },
  watch: {
    getTotal(val, oldVal) {
      // is triggered whenever the store state changes
      this.myTotal = val;
      console.log("do stuff to total", val, oldVal);
    },
  },
};
</script>

<style scoped>
.fas {
  cursor: pointer;
}
.back {
  cursor: pointer;
}
body {
  background: #ddd;
  min-height: 100vh;
  vertical-align: middle;
  display: flex;
  font-family: sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
}

.title {
  margin-bottom: 5vh;
}

.card {
  margin: auto;
  max-width: 950px;
  width: 90%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1rem;
  border: transparent;
}

@media (max-width: 767px) {
  .card {
    margin: 3vh auto;
  }
}

.cart {
  background-color: #fff;
  padding: 4vh 5vh;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
}

@media (max-width: 767px) {
  .cart {
    padding: 4vh;
    border-bottom-left-radius: unset;
    border-top-right-radius: 1rem;
  }
}

.summary {
  background-color: #ddd;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 4vh;
  color: rgb(65, 65, 65);
}

@media (max-width: 767px) {
  .summary {
    border-top-right-radius: unset;
    border-bottom-left-radius: 1rem;
  }
}

.summary .col-2 {
  padding: 0;
}

.summary .col-10 {
  padding: 0;
}

.row {
  margin: 0;
}

.title b {
  font-size: 1.5rem;
}

.main {
  margin: 0;
  padding: 2vh 0;
  width: 100%;
}

.col-2,
.col {
  padding: 0 1vh;
}

a {
  padding: 0 1vh;
}

.close {
  margin-left: auto;
  font-size: 0.7rem;
}

img {
  width: 3.5rem;
}

.back-to-shop {
  margin-top: 4.5rem;
}

h5 {
  margin-top: 4vh;
}

hr {
  margin-top: 1.25rem;
}

form {
  padding: 2vh 0;
}

select {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1.5vh 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}

input {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}

.btn {
  background-color: #79c039;
  border-color: #79c039;
  color: white;
  width: 100%;
  font-size: 0.7rem;
  margin-top: 4vh;
  padding: 1vh;
  border-radius: 0;
}

.btn:focus {
  box-shadow: none;
  outline: none;
  box-shadow: none;
  color: white;
  -webkit-box-shadow: none;
  -webkit-user-select: none;
  transition: none;
}

.btn:hover {
  color: white;
}

a {
  color: black;
}

a:hover {
  color: black;
  text-decoration: none;
}

#code {
  background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.253),
      rgba(255, 255, 255, 0.185)
    ),
    url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: center;
}
</style>
