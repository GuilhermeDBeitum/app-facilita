<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    width="420px"
    color="#2693ff"
    height="587"
    class="pa-14"
    outlined
    tile
  >
    <v-img
      class="logo"
      max-height="200"
      max-width="320"
      src="../../../assets/logo.png"
    ></v-img>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
  }),
};
</script>

<style lang="stylus">
.logo {
  margin: auto;
  margin-top: 120px;
}
</style>