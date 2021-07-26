<template>
  <v-app>
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="4">
        <Splash />
      </v-col>
      <v-col cols="12" md="8">
        <Form />
      </v-col>
      <Snack />
    </v-row>
  </v-app>
</template>

<script>
import Splash from "../../components/Login/SplashScreen/SplashScreen.vue";
import Snack from "../../components/Login/SnackBar/SnackBar.vue";
import Form from "../../components/Login/Form/Form.vue";
export default {
  props: {},

  components: {
    Splash,
    Snack,
    Form,
  },

  data: () => ({}),
};
</script>
