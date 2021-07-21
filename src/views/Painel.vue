<template>
  <v-app id="inspire">
    <Head />
  </v-app>
</template>

<script>
import Head from "../components/Header.vue";

export default {
  name: "App",

  components: {
    Head,
  },

  data: () => ({
    drawer: null,
  }),
};
</script>