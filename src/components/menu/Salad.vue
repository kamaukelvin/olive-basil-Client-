<template>
  <div class="col-md-4" v-if="newSalad">
    <div class="card mb-5">
      <img :src="`/${newSalad.image}`" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title name">{{ newSalad.name }}</h5>
        <h6 class="card-subtitle additives mb-2 text-muted">
          {{ newSalad.desc }}
        </h6>
        <div class="bottom">
          <div class="row">
            <div class="col-md-6">
              <p class="card-text price">Ksh. {{ newSalad.price }}</p>
            </div>
            <div class="col-md-6">
              <!-- <button
                class="float-right mt-4 mr-1"
                v-on:click="addToCart(salad)"
              >
                Add to Cart
              </button> -->

              <Cart-Button-Add
                class="float-right mt-2"
                @button-clicked="addToCart(newSalad)"
                :salad="newSalad"
              >
              </Cart-Button-Add>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartButtonAdd from "./Cart-Button-Add.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Salad",

  props: ["salad","category"],

  components: { CartButtonAdd },
  data() {
    return {
      newSalad:{}
    };
  },
  methods: {
    ...mapActions(["subTotal"]),
    addToCart(salad) {
      if (
        Object.keys(this.getSelectedPlan).length === 0 &&
        this.getSelectedPlan.constructor === Object
      ) {
        this.$router.push({ name: "Pricing" });
      } else {
        console.log("THE SALAD ART ADD", salad);
        this.$emit("update-cart", salad);
        this.subTotal();
      }
    },
  },
  computed: {
    ...mapGetters(["getSelectedPlan"]),
  },
  mounted() {
    this.newSalad = {...this.salad,category:this.category}
   
  },
};
</script>

<style lang="scss">
.card {
  margin: auto;
  max-width: 950px;
  width: 90%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1rem;
  border: transparent;
}
.card-img-top {
  height: 150px;
}

.name {
  font-family: var(--content-font);
  font-size: 1.6rem;
  font-weight: 700 !important;
  text-transform: uppercase;
  color: #444;
}

.additives {
  font-family: var(--content-font);
  font-size: 1.2rem;
  font-weight: 400;
}

.price {
  /* border: 1px solid #e2e2e2; */
  padding: 0.8rem 0;
  font-family: var(--content-font);
  font-size: 1.8rem;
  font-weight: 700;
  color: #e68618;
  /* color: #55880d; */
}
.Button {
  padding: 5px 12px;
  border-radius: 3px;
  background-color: #79c039;
  color: white;
  font-size: 13px;
  cursor: pointer;
  p {
    color: #444;
    margin-bottom: 0;
    font-family: var(--content-font);
    font-weight: bold;
  }
}
</style>
