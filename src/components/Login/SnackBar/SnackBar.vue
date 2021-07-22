<template>
  <v-snackbar
    color="red"
    top
    multi-line
    vertical
    tag
    hide-details
    text
    shaped
    elevation="24"
    class="text-center ma-2"
    v-model="snackbar"
  >
    {{ print }}
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    print: "Login ou senha incorretos! Tente novamente.",
  }),

  computed: {
    snackbar: {
      get() {
        return this.$store.state.modinfo.snackbar;
      },

      set(newSnackbar) {
        this.$store.commit("SET_SNACKBAR", newSnackbar);
      },
    },
  },
};
</script>

<style>
</style>