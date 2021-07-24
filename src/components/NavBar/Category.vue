<template>
  <v-container>
    <v-list dense class="menu pl-12" shaped flat>
      <h3 class="pl-6">Categorias</h3>
      <br />
      <v-list-item-group v-model="selected" color="primary">
        <v-list-item v-for="(item, i) in category" :key="i">
          <span class="items"
            ><span class="mark"> ></span> {{ item.value }}</span
          >
          <template v-slot:item.action>
            <v-chip color="#ff2e79"></v-chip>

            <v-chip color="#ffc42e"></v-chip>
          </template>
        </v-list-item> </v-list-item-group
    ></v-list>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selected: null,
    drawer: null,
    category: [
      { value: "Todos" },
      { value: "Urgentes" },
      { value: "Importantes" },
      { value: "Outros" },
      { value: "Finalizados" },
    ],
  }),
};
</script>

<style lang="stylus">
.container {
  margin-top: -50px;
}

.items {
  padding: -20px;
  font-weight: bold;
  font-size: 12px;
}

.mark {
  padding: 2px;
  margin: 5px;
}

.menu {
  font-size: 11px;
  margin-left: 40px;
}
</style>