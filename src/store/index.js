import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import invoice from "./invoice";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
const persistedDataState = createPersistedState({
  paths: ["auth.token"],
});
export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    auth: {
      namespaced: true,
      ...auth,
    },
    invoice: {
      namespaced: true,
      ...invoice,
    },
  },
});
