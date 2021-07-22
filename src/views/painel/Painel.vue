<template>
  <v-app id="inspire">
    <Head />
    <Task />
    <Nav />
    <v-btn class="mx-2" fab dark color="#1ad18f" right fixed bottom>
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import Head from "../../components/Header/Header.vue";
import Nav from "../../components/NavBar/NavBar.vue";
import Task from "../../components/MainCard/TaskCard.vue";
export default {
  name: "App",

  components: {
    Head,
    Nav,
    Task,
  },

  data: () => ({}),
};
</script>