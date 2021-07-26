import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const SET_LOGIN = "SET_LOGIN";
const SET_PASSWORD = "SET_PASSWORD";
const SET_SNACKBAR = "SET_SNACKBAR";
const SET_MODALDELETE = "SET_MODALDELETE";
const SET_MODALDESCRIPT = "SET_MODALDESCRIPT";
const SET_SAVE_EDIT = "SET_SAVE_EDIT";
const SET_ITEM = "SET_ITEM";
const SET_INDEX = "SET_INDEX";
const SET_TASKS = "SET_TASKS";

const moduleInfo = {
  state: {
    login: null,
    password: null,
    snackbar: null,
    modalDelete: null,
    modalDescript: null,
    save_edit: null,
    item:null,
    index:null,
    tasks: [],
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
    modalDelete: (state) => {
      return state.modalDelete;
    },
    modalDescript: (state) => {
      return state.modalDescript;
    },
    save_edit: (state) => {
      return state.save_edit;
    },
    item: (state) => {
      return state.item;
    },
    index: (state) => {
      return state.index;
    },
    tasks: (state) => {
      return state.tasks;
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
    [SET_MODALDELETE](state, modalDelete) {
      state.modalDelete = modalDelete;
    },
    [SET_MODALDESCRIPT](state, modalDescript) {
      state.modalDescript = modalDescript;
    },
    [SET_SAVE_EDIT](state, save_edit) {
      state.save_edit = save_edit;
    },
    [SET_ITEM](state, item) {
      state.item = item;
    },
    [SET_INDEX](state, index) {
      state.index = index;
    },
    [SET_TASKS](state, tasks) {
      state.tasks = tasks;
    },
  },
}
  
const store = new Vuex.Store({
  modules: {
    modinfo: moduleInfo,
  },
});

export default store;
