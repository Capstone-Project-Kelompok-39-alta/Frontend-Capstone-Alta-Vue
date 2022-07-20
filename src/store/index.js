import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import email from "./email";
import user from "./user";
import invoice from "./invoice";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
const persistedDataState = createPersistedState({
  paths: ["auth.token", "user.id"],
  // "invoice.lists",
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
    email: {
      namespaced: true,
      ...email,
    },
    user: {
      namespaced: true,
      ...user,
    },
  },
});
