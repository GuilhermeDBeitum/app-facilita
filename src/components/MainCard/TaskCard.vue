<template>
  <v-card color="#e9f4fb">
    <v-container class="card" fluid>
      <v-row md="8" justify="space-around">
        <v-col cols="12" md="6">
          <h2>Minhas Tarefas</h2>
          <h5>
            Ola
            <span class="sub">{{ this.$store.state.modinfo.login }}</span>
            voce tem 5 tarefas pendentes.
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
            disable-sort
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
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
    drawer: null,
    cards: [""],
    search: "",
    headers: [
      { value: "action", width: 200 },
      { value: "task", width: 250 },
      { value: "status" },
    ],
    desserts: [
      {
        task: "Criar Projeto Vue.js",
        action: "OK",
        status: "Urgente",
      },
    ],
  }),
};
</script>

<style lang="stylus">
.card {
  margin-top: 100px;
}

.sub {
  font-weight: bold;
  font-size: 14px;
  margin-top: -2px;
  color: #4ca5ff;
}
</style>