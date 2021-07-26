<template>
  <v-card color="#e9f4fb" height="100%">
    <Delete />
    <v-container class="card" fluid>
      <v-row class="d-flex justify-end">
        <v-col cols="12" md="9">
          <div class="pl-5">
            <h2>Minhas Tarefas</h2>
            <h5>
              Olá
              <span class="sub">{{ this.$store.state.modinfo.login }}</span>
              voce tem
              <span class="sub">{{
                this.$store.state.modinfo.tasks.length
              }}</span>
              tarefas pendentes.
            </h5>
          </div>
          <v-card-title>
            <v-text-field
              dense
              hide-details
              autocomplete="off"
              outlined
              single-line
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar Tarefas"
              color="#41a0ff"
            ></v-text-field>
          </v-card-title>

          <v-data-table
            class="text-center mt-1 table"
            single-select
            calculate-widths
            hide-default-header
            hide-default-footer
            no-data-text="Sem Tarefas"
            no-results-text="Tarefa não encontrada"
            disable-sort
            :headers="headers"
            :items="this.$store.state.modinfo.tasks"
            :search="search"
          >
            <template v-slot:item.action>
              <v-checkbox class="checkbox" color="#1ad18f"></v-checkbox>
            </template>
            <template v-slot:item.status="{ item }">
              <div v-if="item.status == 'Urgente'">
                <v-chip class="status text-center" dark color="#f491ba"
                  >Urgente</v-chip
                >
              </div>
              <div v-if="item.status == 'Importante'">
                <v-chip class="status text-center" dark color="#ffc42e"
                  >Importante</v-chip
                >
              </div>
            </template>

            <template slot="item.id" slot-scope="props">
              <v-menu bottom left transition="scale-transition">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon class="dots" v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <template slot="item.title"
                  ><span class="text"></span>
                </template>

                <v-list dense class="pl-1" shaped flat>
                  <v-list-item-group v-model="selected" color="#1ad18f">
                    <v-list-item
                      @click="
                        ($store.state.modinfo.save_edit = true),
                          ($store.state.modinfo.item = props)
                      "
                    >
                      <v-list-item-title> Editar </v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      @click="
                        ($store.state.modinfo.modalDelete = true),
                          ($store.state.modinfo.index = props.index)
                      "
                    >
                      <v-list-item-title> Excluir </v-list-item-title>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Delete from "../../components/Modal/ModalDelete.vue";

export default {
  name: "TaskCard",

  components: {
    Delete,
  },

  data: () => ({
    selected: null,
    drawer: null,
    search: "",
    headers: [
      { value: "action" },
      { value: "title" },
      { value: "status" },
      { value: "id" },
    ],
  }),

  computed: {
    item: {
      get() {
        return this.$store.state.modinfo.item;
      },

      set(newItem) {
        this.$store.commit("SET_ITEM", newItem);
      },
    },

    index: {
      get() {
        return this.$store.state.modinfo.index;
      },

      set(newIndex) {
        this.$store.commit("SET_INDEX", newIndex);
      },
    },
  },

  methods: {},
};
</script>

<style lang="stylus">
.card {
  width: 750px;
  margin-top: 100px;
}

.checkbox {
  width: 1px;
}

.combo {
  cursor: pointer;
  padding: 20px;
}

.dots {
  margin-left: -25px;
}

.table {
  margin: 17px;
}

.text {
  word-break: break-all;
  font-weight: bold;
}

.status {
  float: right;
}

.sub {
  font-weight: bold;
  font-size: 14px;
  margin-top: -2px;
  color: #4ca5ff;
}
</style>