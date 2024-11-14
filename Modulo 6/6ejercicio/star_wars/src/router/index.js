import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/Home.vue' 
import Personaje from '@/views/personaje.vue'
import Personajes from '@/views/personajes.vue'
import Contacto from '@/views/contacto.vue'

Vue.use(VueRouter)

//configuracion de las rutas
const routes = [
  { 
    path: '/', // especifica url
    name: 'Home', // nombre de la ruta
    component: Home // componente a renderizar
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

//instancia router
const router = new VueRouter({ // crea la instancia del router
    mode: 'history', // modo de navegacion
    base: process.env.BASE_URL, // ruta base
    routes
})

export default router //exporta el router para que pueda ser utilizado en otras partes de la aplicacion. (como el App.vue)