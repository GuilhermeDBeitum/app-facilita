<template>
  <v-navigation-drawer v-model="drawer" app width="290" color="#f4fbff">
    <v-navigation-drawer
      v-model="drawer"
      app
      absolute
      width="105px"
      color="#2693ff"
    >
      <v-avatar class="d-block text-center mx-auto mt-1" size="38"
        ><v-img src="../../assets/icone.png"></v-img
      ></v-avatar>

      <v-tabs
        touchless
        grow
        class="menu1"
        v-model="tab"
        dark
        icons-and-text
        vertical
        background-color="#2693ff"
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab class="tab" href="#tab-1">
          <p class="lab">Dashboard</p>
          <i class="i far fa-chart-bar"></i>
        </v-tab>

        <v-tab class="tab" href="#tab-2">
          <p class="lab">Tarefas</p>
          <i class="i far fa-check-circle"></i>
        </v-tab>

        <v-tab class="tab" href="#tab-3">
          <p class="lab">Configurações</p>
          <i class="i fas fa-cogs"></i>
        </v-tab>
      </v-tabs>
    </v-navigation-drawer>
    <Category />
  </v-navigation-drawer>
</template>


<script>
import Category from "./Category.vue";

export default {
  name: "NavBar",

  components: {
    Category,
  },
  data: () => ({
    tab: null,
    drawer: null,
    category: ["Todos", "Urgentes", "Importantes", "Outros", "Finalizados"],
  }),
};
</script>

<style lang="stylus">
.i {
  font-size: 24px;
}

.lab {
  font-weight: bold;
  margin: 10px;
  font-size: 8px;
}

.menu1 {
  margin-left: -15px;
  margin-top: 120px;
}

.menu {
  margin-top: 180px;
  color: #fff;
  margin-left: 50px;
}
</style>