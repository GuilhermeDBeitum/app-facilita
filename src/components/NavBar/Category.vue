<template>
  <v-container class="container">
    <v-list class="menu pl-16" shaped>
      <h3>Categorias</h3>
      <p></p>
      <v-list-item v-for="item in category" :key="item" link>
        <v-list-item-title
          ><span class="items">> {{ item }}</span></v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    category: ["Todos", "Urgentes", "Importantes", "Outros", "Finalizados"],
  }),
};
</script>

<style lang="stylus">
.container {
  margin-top: -50px;
}

.items {
  font-weight: bold;
  font-size: 12px;
}

.menu {
  font-size: 12px;
  margin-left: 40px;
}
</style>