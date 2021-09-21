import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from 'vuex-persistedstate';
import auth from "./modules/auth";
import { items } from "./modules/items";
import { cart } from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    items,
    cart,
  },
  // plugins: [createPersistedState()],
});
