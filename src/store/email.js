import axios from "axios";
const apiHost = `https://invoinesia.xyz`;
const state = () => ({
  info: "",
});

const mutations = {
  setInfo(state, param) {
    state.info = param;
  },
};

const actions = {
  sendEmail(store, credentials) {
    const result = axios
      .post(
        `${apiHost}/admin/send/email`,
        {
          body: credentials.body,
          subject: credentials.subject,
          to: credentials.to,
        },
        {
          headers: {
            Authorization: `Bearer ${store.rootState.auth.token}`,
          },
        }
      )
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
