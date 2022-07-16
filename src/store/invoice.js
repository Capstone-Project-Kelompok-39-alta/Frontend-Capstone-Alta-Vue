import axios from "axios";
const apiHost = `https://invoinesia.xyz`;
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
        if (response.status === 200) {
          store.commit("setInvoice", response.data.data);
        } else if (response.status === 401) {
          store.commit("setInfo", response);
          alert("Sesion habis, silahkan login kembali");
          store.commit("auth/setToken", "", {
            root: true,
          });
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log("error: ", error);
        store.commit("setError", error);

        if (error.response.status === 401) {
          alert("Sesion habis, silahkan login kembali");
          store.commit("auth/setToken", "", {
            root: true,
          });
          window.location.reload();
        } else {
          alert("API EROR");
        }
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
        } else if (response.status === 401) {
          store.commit("setInfo", response);
          alert("Sesion habis, silahkan login kembali");
          store.commit("auth/setToken", "", {
            root: true,
          });
          window.location.reload();
        } else if (response.status === 500) {
          store.commit("setInfo", response);
          alert("Eror 500");
        }
      })
      .catch((error) => {
        console.log("error nya adalah", error);
        store.commit("setInfo", error);

        if (error.response.status === 401) {
          alert("Sesion habis, silahkan login kembali");
          store.commit("auth/setToken", "", {
            root: true,
          });
          window.location.reload();
        } else {
          alert("Error API: ", error);
        }
      });

    return result;
  },
};

export default {
  state,
  mutations,
  actions,
};
