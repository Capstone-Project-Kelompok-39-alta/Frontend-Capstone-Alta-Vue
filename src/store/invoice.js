import axios from "axios";

const state = () => ({
  lists: [],
  error: "",
});

const mutations = {
  setNews(state, param) {
    state.lists = param;
  },
  setError(state, param) {
    state.error = param;
  },
};

const actions = {
  fetchListNews(store) {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9ae9cac9efed4439ad6502ab929ab3ec`)
      .then((response) => {
        console.log("response: ", response);
        // response.data.articles
        store.commit("setNews", response.data.articles);
      })
      .catch((error) => {
        console.log("error: ", error);
        store.commit("setError", error.msg);
      });
  },
};

export default {
  state,
  mutations,
  actions,
};
