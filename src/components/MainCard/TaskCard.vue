<template>
  <v-card color="#e9f4fb" height="585px">
    <v-container class="card" fluid>
      <v-row class="d-flex justify-end">
        <v-col cols="12" md="8">
          <h2>Minhas Tarefas</h2>
          <h5>
            Olá
            <span class="sub">{{ this.$store.state.modinfo.login }}</span>
            voce tem <span class="sub">{{ this.cards.length }}</span> tarefas
            pendentes.
          </h5>

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
            class="d-flex pl-0"
            hide-default-header
            hide-default-footer
            no-data-text="Sem Tarefas"
            no-results-text="Tarefa não encontrada"
            disable-sort
            :headers="headers"
            :items="cards"
            :search="search"
          >
            <template v-slot:item.action>
              <v-checkbox class="checkbox" color="#1ad18f"></v-checkbox>
            </template>
            <template v-slot:item.status="{ status }">
              <v-chip class="status" dark color="#f491ba"> Urgente </v-chip>
            </template>
            <template v-slot:item.menu="{ menu }">
              <v-menu bottom left transition="scale-transition">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list dense class="pl-1" shaped flat>
                  <v-list-item-group v-model="selected" color="#1ad18f">
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <v-list-item-title
                        v-text="item.title"
                      ></v-list-item-title>
                    </v-list-item> </v-list-item-group
                ></v-list>
              </v-menu>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "TaskCard",

  components: {},

  data: () => ({
    selected: null,
    drawer: null,
    search: "",
    headers: [
      { value: "action" },
      { value: "task" },
      { value: "status" },
      { value: "menu" },
    ],
    cards: [
      {
        task: "Criar Projeto Vue.js",
        action: "OK",
        status: "Urgente",
      },
    ],
    items: [{ title: "Editar" }, { title: "Excluir" }],
  }),
};
</script>

<style lang="stylus">
.card {
  width: 910px;
  margin-top: 100px;
}

.checkbox {
  width: 1px;
}

.combo {
  cursor: pointer;
  padding: 20px;
}

.status {
  margin-left: 225px;
}

.sub {
  font-weight: bold;
  font-size: 14px;
  margin-top: -2px;
  color: #4ca5ff;
}
</style>