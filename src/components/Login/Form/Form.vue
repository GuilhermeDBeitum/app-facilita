<template>
  <div class="logo">
    <v-container class="px-16 pa-16" fluid>
      <v-row align="center" justify="space-around">
        <v-col cols="12" sm="5">
          <h5>Entre com seus dados de acesso.</h5>
          <br />
          <v-form ref="form" v-model="valid" lazy-validation>
            <label class="label">Nome de usuario ou Email:</label>
            <v-text-field
              dense
              hide-details
              outlined
              autocomplete="off"
              v-model="login"
              :rules="[rules.required]"
              color="#41a0ff"
            ></v-text-field>
            <p></p>
            <label class="label">Senha:</label>
            <v-text-field
              dense
              hide-details
              autocomplete="off"
              outlined
              v-model="password"
              :type="show1 ? 'text' : 'password'"
              :rules="[rules.required]"
              name="input-10-2"
              class="input-group--focused"
              @click:append="show1 = !show1"
              color="#41a0ff"
            ></v-text-field>
          </v-form>
        </v-col>
      </v-row>

      <v-col class="text-center" cols="12" sm="12">
        <router-link :to="rota">
          <v-btn
            large
            width="41%"
            class="btn white--text"
            color="#1ad18f"
            @click="
              validate();
              validateLogin();
            "
            >Entrar</v-btn
          >
        </router-link>
      </v-col>
      <v-row align="center" justify="space-around">
        <v-col cols="12" sm="5">
          <span class="lostPass">Esqueci minha senha</span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    rota: "",
    print: "Login ou senha incorretos! Tente novamente.",
    valid: true,
    bar: false,
    show1: false,
    rules: {
      required: (value) => !!value || "Requer.",
    },
  }),

  computed: {
    login: {
      get() {
        return this.$store.state.modinfo.login;
      },

      set(newLogin) {
        this.$store.commit("SET_LOGIN", newLogin);
      },
    },

    password: {
      get() {
        return this.$store.state.modinfo.password;
      },

      set(newPassword) {
        this.$store.commit("SET_PASSWORD", newPassword);
      },
    },
  },

  methods: {
    validateLogin() {
      if (this.$refs.form.validate()) {
        if (
          this.login == this.$store.state.modinfo.login &&
          this.password == this.$store.state.modinfo.password
        ) {
          this.rota = "painel";
        }
      }
    },

    validate() {
      this.$store.state.modinfo.snackbar = true;
    },
  },
};
</script>

<style lang="stylus">
a {
  text-decoration: none;
}

.btn {
  margin: 20px;
  margin-top: 5px;
  text-transform: capitalize;
}

.logo {
  margin: auto;
  margin-top: 120px;
}

.lostPass {
  margin-left: 5px;
  margin-top: 15px;
  cursor: pointer;
  text-decoration: underline;
  color: #4ca5ff;
  font-weight: bold;
  font-size: 12px;
}

.label {
  font-weight: 500;
  text-align: left !important;
  font-size: 12px;
}
</style>