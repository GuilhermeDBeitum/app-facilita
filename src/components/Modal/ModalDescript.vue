<template>
  <v-dialog v-model="modalDescript" max-width="420px">
    <v-card class="d-block text-center mx-auto pa-8">
      <h3>
        <div v-if="this.$store.state.modinfo.item != null">
          <v-flex xs12 class="text-xs-center-important font-weight-black">
            {{ this.$store.state.modinfo.item.title }}
            <br />
          </v-flex>
        </div>
      </h3>
      <br />
      <v-card-text>
        <div v-if="this.$store.state.modinfo.item != null">
          <v-flex xs12 class="text-xs-center-important font-weight-black">
            {{ this.$store.state.modinfo.item.description }}
          </v-flex>
        </div>
      </v-card-text>

      <br />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalDescript",
  data: () => ({}),

  computed: {
    modalDescript: {
      get() {
        return this.$store.state.modinfo.modalDescript;
      },

      set(newModalDescript) {
        this.$store.commit("SET_MODALDESCRIPT", newModalDescript);
      },
    },
  },
};
</script>

<style lang="stylus">
.color {
  color: #ff4874;
}

.chip {
  size: 200px;
}

.trash {
  font-size: 42px;
  margin-left: -5px;
  margin-top: 26px;
  width: 100px;
}
</style>