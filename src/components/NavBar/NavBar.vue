<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    width="270"
    height="100%"
    color="#f4fbff"
  >
    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      width="103px"
      color="#2693ff"
      height="100%"
    >
      <v-avatar class="d-block text-center mx-auto mt-1" size="50" tile
        ><v-img src="../../assets/icone.png"></v-img
      ></v-avatar>

      <v-list class="menu1">
        <v-list-item-group v-model="model">
          <v-list-item>
            <v-list-item-content style="height: 70px">
              <v-list-item-title class="white--text">
                <i class="icon far fa-chart-bar"></i>
                <p class="lab">Dashboard</p>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content style="height: 70px">
              <v-list-item-title class="white--text">
                <i class="icon far fa-check-circle"></i>
                <p class="lab pl-2">Tarefas</p>
              </v-list-item-title></v-list-item-content
            ></v-list-item
          >
          <v-list-item>
            <v-list-item-content style="height: 70px">
              <v-list-item-title class="white--text">
                <i class="icon fas fa-cogs"></i>
                <p class="lab">Configurações</p>
              </v-list-item-title></v-list-item-content
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
    model: 0,
    tab: null,
    drawer: null,
    category: ["Todos", "Urgentes", "Importantes", "Outros", "Finalizados"],
  }),
};
</script>

<style lang="stylus">
.icon {
  margin-left: 20px;
  font-size: 24px;
}

.lab {
  font-weight: bold;
  margin: 8px;
  font-size: 9px;
}

.menu1 {
  margin-top: 125px;
}

.menu {
  margin-top: 220px;
  color: #fff;
  margin-left: 50px;
}
</style>