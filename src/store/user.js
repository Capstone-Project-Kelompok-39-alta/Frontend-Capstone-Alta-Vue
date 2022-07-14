import axios from "axios";
const apiHost = `https://invoinesia.xyz`;

const state = () => ({
  id: "",
  user: [],
});

const mutations = {
  setId(state, param) {
    state.id = param;
  },
  setUser(state, param) {
    state.user = param;
  },
};

const actions = {
  checkUser(store) {
    console.log(store.state);
    return axios
      .get(`${apiHost}/admin/user/${store.state.id}`, {
        headers: { Authorization: `Bearer ${store.rootState.auth.token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          store.commit("setUser", response.data.data);
          console.log("response cekUser", response);
          return response;
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
        console.log("test", error.response.status);
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
  },

  changeUser(store, credentials) {
    console.log(store.state);
    const result = axios
      .put(
        `${apiHost}/admin/user/${store.state.id}`,
        {
          id: credentials.id,
          id_pegawai: credentials.id_pegawai,
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        },
        {
          headers: { Authorization: `Bearer ${store.rootState.auth.token}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          store.commit("setUser", response.data.data);
          console.log("response cekUser", response);
          return true;
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
        console.log("test", error.response.status);
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
