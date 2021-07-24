<template>
  <v-app id="inspire">
    <Head />
    <Task />
    <Nav />
    <Add />
  </v-app>
</template>

<script>
import Add from "../../components/Modal/ModalAdd.vue";
import Head from "../../components/Header/Header.vue";
import Nav from "../../components/NavBar/NavBar.vue";
import Task from "../../components/MainCard/TaskCard.vue";

export default {
  name: "App",

  components: {
    Add,
    Head,
    Nav,
    Task,
  },

  data: () => ({}),
};
</script>