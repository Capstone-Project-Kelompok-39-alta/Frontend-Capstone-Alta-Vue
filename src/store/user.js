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
          alert("Sesion habis, silahkan login kembali");
          store.commit("auth/setToken", "", {
            root: true,
          });
          window.location.reload();
        }
      })
      .catch((error) => {
        alert("API EROR", error);
        console.log(error);
      });
  },
};

export default {
  state,
  mutations,
  actions,
};
