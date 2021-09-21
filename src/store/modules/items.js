import axios from "axios";
export const items = {
  state: {
    items: [],
    selectedPlan: {},
  },
  getters: {
    getSelectedPlan: (state) => state.selectedPlan,
  },
  mutations: {
    SET_PRODUCTS(state, items) {
      state.items = items;
    },
    setSelectedPlan(state, item) {
      state.selectedPlan = item;
    },
  },
  actions: {
    getItems({ commit }) {
      axios.get("/api/items").then((response) => {
        commit("SET_ITEMS", response.data);
        console.log(response.data);
      });
    },
    setSelectedPlan({ commit }, payload) {
      commit("setSelectedPlan", payload);
    },
  },
};
