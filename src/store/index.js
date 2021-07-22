import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const SET_LOGIN = "SET_LOGIN";
const SET_PASSWORD = "SET_PASSWORD";
const SET_SNACKBAR = "SET_SNACKBAR";

const moduleInfo = {
  state: {
    login: null,
    password: null,
    snackbar: null,
  },
  getters: {
    login: (state) => {
      return state.login;
    },
    password: (state) => {
      return state.password;
    },
    snackbar: (state) => {
      return state.snackbar;
    },
  },
  mutations: {
    [SET_LOGIN](state, login) {
      state.login = login;
    },
    [SET_PASSWORD](state, password) {
      state.password = password;
    },
    [SET_SNACKBAR](state, snackbar) {
      state.snackbar = snackbar;
    },
  },
}
  
const store = new Vuex.Store({
  modules: {
    modinfo: moduleInfo,
  },
});

export default store;
