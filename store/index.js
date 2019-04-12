import Vuex from "vuex";
import axios from "axios";
const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get("https://nuxt-blog-a471c.firebaseio.com/posts.json")
          .then(res => {
            const postArray = [];
            for (const key in res.data) {
              postArray.push({
                ...res.data[key],
                id: key
              });
            }
            vuexContext.commit("setPosts", postArray);
          }).catch()
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
