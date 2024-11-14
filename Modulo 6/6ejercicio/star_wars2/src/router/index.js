import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Personajes from '../views/Personajes.vue'
import Personaje from '../views/Personaje.vue'
import Contacto from '../views/Contacto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/personajes',
    name: 'Personajes',
    component: Personajes
  },

  {
    path: '/personajes/:id',
    name: 'Personaje',
    component: Personaje
  },

  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
