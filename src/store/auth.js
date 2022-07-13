import axios from "axios";
const apiHost = `https://invoinesia.xyz`;

const state = () => ({
  token: "",
  info: "",
});

const mutations = {
  setToken(state, param) {
    console.log("test", param);
    state.token = param;
  },
  setInfo(state, param) {
    state.info = param;
  },
};

const actions = {
  register(store, credentials) {
    const result = axios
      .post(
        `${apiHost}/admin/register`,
        {
          email: credentials.email,
          id_pegawai: credentials.id_pegawai,
          name: credentials.name,
          password: credentials.password,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${store.state.token}`,
        //     "Content-type": "application/json",
        //   },
        // }
      )
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
      });

    return result;
  },
  login(store, credentials) {
    return axios
      .post(`${apiHost}/admin/login`, {
        id_pegawai: credentials.id_pegawai,
        password: credentials.password,
      })
      .then((response) => {
        if (response.status === 200) {
          store.commit("setToken", response.data.data);
          store.commit("user/setId", response.data.id_pegawai, {
            root: true,
          });
          // store.commit(
          //   "user/setCurrentUser",
          //   {
          //     id: response.data.data.Id,
          //     username: response.data.data.Name,
          //     email: response.data.data.Email,
          //   },
          //   {
          //     root: true,
          //   }
          // );
          console.log(response.data);
          return response;
        } else {
          store.commit("setInfo", response.data.message);
          console.log(store.state.info);
        }
      })
      .catch((error) => {
        store.commit("setInfo", error.response.data.message);
        console.log("erornya ", store.state.info);
      });
  },
  logout(store) {
    store.commit("setToken", "");
    return true;
  },
  // checkUser(store, id) {
  //   return axios
  //     .get(`${apiHost}/api/users/${id}`, {
  //       headers: { Authorization: `Bearer ${store.state.token}` },
  //     })
  //     .then((response) => {
  //       console.warwn("response cekUser", response);
  //       if (response.data.message === "success") {
  //         store.commit("setToken", response.data.data.Token);
  //         store.commit(
  //           "user/setCurrentUser",
  //           {
  //             id: response.data.data.Id,
  //             username: response.data.data.Name,
  //             email: response.data.data.Email,
  //           },
  //           {
  //             root: true,
  //           }
  //         );
  //         return response;
  //       } else {
  //         store.commit("setInfo", response.data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       store.commit("setInfo", error);
  //     });
  // },
};

export default {
  state,
  mutations,
  actions,
};
