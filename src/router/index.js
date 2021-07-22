import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'
import Painel from '../views/painel/Painel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Painel',
    name: 'Painel',
    component: Painel
  },
]

const router = new VueRouter({
  routes
})

export default router
