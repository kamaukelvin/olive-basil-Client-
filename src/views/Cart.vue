<template>
  <div class="top">
    <TopStrip />
    <div class="container-fluid mt-5">
      <div class="view-cart mb-5">
        <ViewCart
          :cart="this.getCart"
          :subtotal="this.subTotal"
          :total="this.getTotal"
          @increase-qty="this.increaseQty"
          @decrease-qty="this.decreaseQty"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TopStrip from "@/components/partials/TopStrip";
import ViewCart from "@/components/menu/View-Cart";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Menus",
  components: {
    TopStrip,
    ViewCart,
  },
  data() {
    return {
      total: 0,
    };
  },
  methods: {
    ...mapActions(["subTotal", "getTotal", "increaseQty", "decreaseQty"]),
    // increaseQty(salad) {

    //   salad.quantity++;
    // },
  },
  computed: {
    ...mapGetters(["getCart", "getTotal"]),
  },
};
</script>
<style lang="css" scoped>
.top {
  margin-top: 9.5rem;
}

.extras-title {
  font-family: var(--main-font);
  font-size: 3rem;
  font-weight: 500 !important;
}
.extras-text {
  font-family: var(--content-font);
  font-size: 1.6rem;
  font-weight: 600 !important;
  color: #444;
  margin-left: 1.25rem;
}
</style>
