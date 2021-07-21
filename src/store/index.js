import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const SET_LOGIN = "SET_LOGIN";
const SET_PASSWORD = "SET_PASSWORD";

const moduleInfo = {
  state: {
    login: null,
    password: null,
  },
  getters: {
    login: (state) => {
      return state.login;
    },
    password: (state) => {
      return state.password;
    },
  },
  mutations: {
    [SET_LOGIN](state, login) {
      state.login = login;
    },
    [SET_PASSWORD](state, password) {
      state.password = password;
    },
  },
}
  
const store = new Vuex.Store({
  modules: {
    modinfo: moduleInfo,
  },
});

export default store;
