<template>
  <v-dialog max-width="550">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        class="mx-2"
        fab
        dark
        color="#1ad18f"
        right
        fixed
        bottom
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </template>
    <template>
      <v-card height="430px" class="pa-1">
        <v-col cols="auto" sm="12">
          <v-row align="center" justify="space-around">
            <v-col cols="12" sm="12">
              <v-col cols="12" sm="12">
                <h3>{{ formTitle }}</h3>

                <br />
                <v-form ref="form">
                  <label class="label">Titulo:</label>

                  <v-text-field
                    dense
                    hide-details
                    outlined
                    autocomplete="off"
                    color="#41a0ff"
                    class="combo"
                  ></v-text-field>
                  <p></p>
                  <label class="label">Descrição:</label>

                  <v-textarea
                    dense
                    hide-details
                    height="150px"
                    autocomplete="off"
                    outlined
                    name="input-10-2"
                    class="combo"
                    @click:append="show1 = !show1"
                    color="#41a0ff"
                  >
                  </v-textarea>

                  <v-row no-gutters>
                    <v-col cols="12" sm="6" md="8">
                      <v-radio-group row class="combo pa-1">
                        <v-radio label="Urgente" value="radio-1"></v-radio>
                        <v-radio label="Importante" value="radio-2"></v-radio>
                      </v-radio-group>
                    </v-col>
                    <v-col cols="12" md="4" class="pa-3">
                      <v-btn
                        right
                        absolute
                        large
                        width="22%"
                        class="btn white--text"
                        color="#1ad18f"
                        >Adicionar</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-form>
              </v-col>
            </v-col>
          </v-row>
        </v-col>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    formTitle() {
      return this.$store.state.modinfo.editedIndex === -1
        ? "Cadastrar Tarefa"
        : "Editar Tarefa";
    },
  },
};
</script>

<style lang="stylus">
a {
  text-decoration: none;
}

.btn {
  margin-right: 10px;
  margin-top: 5px;
  text-transform: capitalize;
}

.combo {
  margin-left: -6px;
  font-weight: 600;
}
</style>