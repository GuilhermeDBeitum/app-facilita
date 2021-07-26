<template>
  <v-app-bar color="white" app clipped-right height="58 " elevation="1">
    <v-spacer></v-spacer>

    <v-responsive max-width="300" class="avatar">
      <v-list-item two-line>
        <v-list-item-avatar right>
          <img src="https://randomuser.me/api/portraits/men/1.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <strong>
            <v-list-item-title class="mt-4">
              <span>{{
                this.$store.state.modinfo.login
              }}</span></v-list-item-title
            ></strong
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
.avatar {
  margin: -100px;
}

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