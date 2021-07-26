<template>
  <v-dialog v-model="modalDelete" max-width="420px">
    <v-card class="d-block text-center mx-auto">
      <v-card-title class="d-block text-center mx-auto">
        <v-avatar
          color="#edf6fc"
          class="d-block text-center mx-auto mt-1"
          size="92"
        >
          <i class="trash far fa-trash-alt" style="color: #4d6785"></i>
        </v-avatar>
      </v-card-title>

      <h3>
        <v-flex xs12 class="text-xs-center-important font-weight-black">
          Tem certeza que deseja <span class="color">excluir</span> esta tarefa?
          <br />
        </v-flex>
      </h3>
      <v-card-text>
        <v-flex xs12 class="text-xs-center-important font-weight-black">
          Essa ação não poderá ser desfeita.
        </v-flex>
      </v-card-text>
      <v-card-actions class="d-block text-center mx-auto pa-1">
        <v-btn
          width="26%"
          class="btn white--text ma-1"
          color="#1ad18f"
          depressed
          @click="modalDelete = false"
          >Cancelar</v-btn
        >
        <v-btn
          width="26%"
          class="btn white--text ma-1"
          color="#ff4874"
          depressed
          @click="deleteTask()"
          >Confirmar</v-btn
        >
      </v-card-actions>
      <br />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalDelete",
  data: () => ({}),

  computed: {
    modalDelete: {
      get() {
        return this.$store.state.modinfo.modalDelete;
      },

      set(newModalDelete) {
        this.$store.commit("SET_MODALDELETE", newModalDelete);
      },
    },
  },

  methods: {
    deleteTask() {
      this.$store.state.modinfo.tasks.splice(
        this.$store.state.modinfo.index,
        1
      );
      this.modalDelete = false;
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