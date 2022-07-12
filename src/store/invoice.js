import axios from "axios";
const apiHost = `http://34.229.142.244`;
const state = () => ({
  lists: [],
  error: "",
  info: "",
});

const mutations = {
  setInvoice(state, param) {
    state.lists = param;
  },
  setError(state, param) {
    state.error = param;
  },
  setInfo(state, param) {
    state.error = param;
  },
};

const actions = {
  fetchListInvoice(store) {
    // const storeString = localStorage.getItem("vuex") || "{}";
    // const local = JSON.parse(storeString);
    // console.log(local);
    axios
      .get(`${apiHost}/admin/invoice`, {
        headers: {
          Authorization: `Bearer ${store.rootState.auth.token}`,
        },
      })
      .then((response) => {
        console.log("response: ", response);
        // response.data.articles
        store.commit("setInvoice", response.data.data);
      })
      .catch((error) => {
        console.log("error: ", error.data.message);
        store.commit("setError", error);
        alert("Sesion habis, silahkan login kembali");
        store.commit("auth/setToken", "", {
          root: true,
        });
        window.location.reload();
      });
  },
  inputInvoice(store, credentials) {
    const result = axios
      .post(`${apiHost}/admin/upload_csv`, credentials.csv_file, {
        headers: {
          Authorization: `Bearer ${store.rootState.auth.token}`,
        },
      })
      .then((response) => {
        console.log("respon: ", response);
        if (response.status === 201) {
          return true;
        } else {
          store.commit("setInfo", response.message);
        }
      })
      .catch((error) => {
        console.log("error nya adalah", error);
        store.commit("setInfo", error);
        alert("Sesion habis, silahkan login kembali");
        store.commit("auth/setToken", "", {
          root: true,
        });
        window.location.reload();
      });

    return result;
  },
};

export default {
  state,
  mutations,
  actions,
};
