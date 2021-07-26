<template>
  <v-dialog max-width="550" v-model="save_edit">
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
        @click="index = 1"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </template>
    <template>
      <v-card height="100%" class="pa-2">
        <v-col cols="12" sm="12">
          <v-row align="center" justify="space-around">
            <v-col cols="12" sm="12">
              <v-col cols="12" sm="12">
                <v-row no-gutters>
                  <v-col cols="10" sm="6" md="10">
                    <span style="font-size: 20px" class="combo">{{
                      formTitle
                    }}</span>
                  </v-col>

                  <v-col cols="2" md="2">
                    <i
                      @click="save_edit = false"
                      class="close fas fa-times"
                    ></i>
                  </v-col>
                </v-row>
                <br />
                <v-form ref="form" v-model="valid" lazy-validation>
                  <label class="label">Titulo:</label>

                  <v-text-field
                    v-model="title"
                    dense
                    hide-details
                    outlined
                    autocomplete="off"
                    color="#41a0ff"
                    class="combo"
                    :rules="[rules.required]"
                  ></v-text-field>
                  <p></p>
                  <label class="label">Descrição:</label>

                  <v-textarea
                    v-model="description"
                    dense
                    hide-details
                    height="150px"
                    autocomplete="off"
                    outlined
                    name="input-10-2"
                    class="combo"
                    @click:append="show1 = !show1"
                    color="#41a0ff"
                    :rules="[rules.required]"
                  >
                  </v-textarea>

                  <v-row no-gutters>
                    <v-col cols="12" sm="6" md="8">
                      <v-radio-group row class="combo pa-0" v-model="status">
                        <v-radio
                          label="Urgente"
                          value="Urgente"
                          color="#41a0ff"
                        ></v-radio>
                        <v-radio
                          label="Importante"
                          value="Importante"
                          color="#41a0ff"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                    <v-col cols="12" md="4" class="pa-5">
                      <v-btn
                        @click="validate()"
                        right
                        absolute
                        large
                        width="22%"
                        class="btn white--text"
                        color="#1ad18f"
                        :disabled="!valid"
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
  name: "Add_Edit",
  data: () => ({
    index: null,
    valid: true,
    rules: {
      required: (value) => !!value || "Requer.",
    },
    title: null,
    description: null,
    status: null,
    editedItem: {
      title: null,
      description: null,
      status: null,
    },
  }),
  computed: {
    tasks: {
      get() {
        return this.$store.state.modinfo.tasks;
      },

      set(newTasks) {
        this.$store.commit("SET_TASKS", newTasks);
      },
    },

    save_edit: {
      get() {
        return this.$store.state.modinfo.save_edit;
      },

      set(newSave_edit) {
        this.$store.commit("SET_SAVE_EDIT", newSave_edit);
      },
    },

    formTitle() {
      return this.index === 1 ? "Cadastrar Tarefa" : "Editar Tarefa";
    },
  },

  methods: {
    validate() {
      if (this.$refs.form.validate() && this.index === 1) {
        this.saveTask();
        this.$refs.form.reset();
      } else if (this.$refs.form.validate() && this.index === 0) {
        this.editTask();
      }
    },

    saveTask() {
      let vet = [{ title: null, description: null, status: null }];

      vet.forEach((i) => {
        (i.title = this.title),
          (i.description = this.description),
          (i.status = this.status);
      });
      this.$store.state.modinfo.tasks.push(...vet);
      this.save_edit = false;
      this.index = 0;
    },

    editTask() {
      let item = this.$store.state.modinfo.item.item;
      this.$store.state.modinfo.title = item.title;
      this.$store.state.modinfo.description = item.description;
      this.$store.state.modinfo.status = item.status;
      this.editedItem = Object.assign(item, {});
      this.save_edit = false;
      this.index = 0;
    },
  },
};
</script>

<style lang="stylus">
a {
  text-decoration: none;
}

.btn {
  margin-right: 12px;
  margin-top: 1px;
  text-transform: capitalize;
}

.combo {
  margin-left: -1px;
  font-weight: 600;
}

.close {
  color: #666666;
  margin-right: -16px;
  margin-top: -18px;
  font-size: 12px;
  float: right;
}
</style>