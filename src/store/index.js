import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [new VuexPersistence().plugin],
  state: {
    email: "",
    token: "",
    keywords: [],
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    setToken(state, token) {
      state.token = token;
    },
    setKeywords(state, keywords) {
      state.keywords = keywords;
    },
  },
  getters: {
    keywords: (state) => {
      return state.keywords;
    },
    email: (state) => state.email,
    token: (state) => state.token,
  },
  actions: {},
  modules: {},
});
