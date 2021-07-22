<template>
  <v-app-bar color="white" app clipped-right height="52">
    <v-spacer></v-spacer>

    <v-responsive max-width="216">
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/1.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="title">
            {{ this.$store.state.modinfo.login }}</v-list-item-title
          >
          <v-list-item-subtitle
            ><p class="sub">Front-end Developer</p></v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-responsive>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.title {
  font-size: 2px;
  font-weight: bold;
}

.sub {
  font-weight: bold;
  font-size: 12px;
  margin-top: -2px;
  color: #4ca5ff;
}
</style>