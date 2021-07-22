<template>
  <v-app>
    <template>
      <router-view></router-view>
    </template>
  </v-app>
</template>

<script>
import Login from "./views/login/Login";

export default {
  name: `app`,
  props: {
    source: String,
  },
  components: {
    Login,
  },

  data: () => ({
    menu: false,
  }),
};
</script>
