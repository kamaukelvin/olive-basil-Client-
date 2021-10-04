export const cart = {
  state: {
    cart: [],
    total: 0,
    plan: "",
    subTotal: 0,
  },
  getters: {
    getCart: (state) => state.cart,
    getTotal: (state) => state.total,
    getSubTotal: (state, getters, rootState, rootGetters) => {
      console.log("TETS", rootGetters.getSelectedPlan.title);
      return (
        state.subTotal *
        rootGetters.getSelectedPlan.mealPerWeek *
        Number(rootGetters.getSelectedPlan.title.match(/\d+/)[0])
      );
    }
    
  },
  mutations: {
    addToCart(state, item) {
      state.cart.push(item);
    },
    clearCart(state) {
      state.cart = [];
    },
    subTotal(state) {
      let tempSubTotal = 0;

      for (let i = 0; i < state.cart.length; i++) {
        tempSubTotal += state.cart[i].quantity * state.cart[i].price;
      }
      state.subTotal = tempSubTotal;
    },
    increaseQty(state, salad) {
      salad.quantity++;
    },
    decreaseQty(state, salad) {
      salad.quantity--;

      if (salad.quantity === 0) {
        state.cart.splice(state.cart.indexOf(salad), 1);
      }
    },
    // grndTotal() {
    //   if (this.subtotal === 0) {
    //     this.subtotal * 500 - 500;
    //   } else {
    //     this.subtotal * 500;
    //   }
    // },
    cartTotal(state) {
      let delivery = 500;
      let grandTotal = state.subTotal;
      state.total = grandTotal + delivery;
    },
  },
  actions: {
    addToCart({ commit, state }, payload) {
      let addedItem = state.cart.find((obj) => obj.name === payload.name);
      console.log("added item iko 1?", addedItem);
      if (addedItem) {
        console.log("added item iko?", addedItem);
        commit("increaseQty", payload);
      } else {
        payload["quantity"] = 1;
        commit("addToCart", payload);
      }
    },
    subTotal({ commit }) {
      commit("subTotal");
    },
    clearCart({ commit }) {
      commit("clearCart");
    },
    cartTotal({ commit }) {
      commit("cartTotal");
    },
    increaseQty({ commit }, payload) {
      commit("increaseQty", payload);
      commit("subTotal");
      commit("cartTotal");
    },
    decreaseQty({ commit }, payload) {
      commit("decreaseQty", payload);
      commit("subTotal");
      commit("cartTotal");
    },
  },
};
