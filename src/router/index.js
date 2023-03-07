import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import RegistroLibros from '../views/RegistroLibrosView.vue'
import ListaLibros from '../views/LibrosView.vue'
import BusquedaLibros from '../views/BuscarLibrosView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: RegistroLibros
  },
  {
    path: '/lista',
    name: 'lista',
    component: ListaLibros
  },
  {
    path: '/busqueda',
    name: 'busqueda',
    component: BusquedaLibros
  },
]

const router = new VueRouter({
  routes
})

export default router
