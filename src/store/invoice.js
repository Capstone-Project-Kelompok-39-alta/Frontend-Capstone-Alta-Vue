import axios from "axios";

const state = () => ({
  lists: [],
  error: "",
});

const mutations = {
  setInvoice(state, param) {
    state.lists = param;
  },
  setError(state, param) {
    state.error = param;
  },
};

const actions = {
  fetchListNews(store) {
    const storeString = localStorage.getItem("vuex") || "{}";
    const local = JSON.parse(storeString);
    console.log(local);
    axios
      .get(`http://34.229.142.244/admin/invoice`, {
        headers: {
          Authorization: `Bearer ${store.rootState.auth.token}`,
        },
      })
      .then((response) => {
        console.log("response: ", response);
        // response.data.articles
        store.commit("setInvoice", response.data.articles);
      })
      .catch((error) => {
        console.log("error: ", error);
        alert("Sesion habis, silahkan login kembali");
        store.commit("auth/setToken", "", {
          root: true,
        });
        window.location.reload();
        store.commit("setError", error.msg);
      });
  },
};

export default {
  state,
  mutations,
  actions,
};
