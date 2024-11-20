import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import Opiniones from '../views/Opiniones.vue'
import Administracion from '../views/Administracion.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/opiniones/:id',
    name: 'Opiniones',
    component: Opiniones,

},
{
    path: '/administracion',
    name: 'Administracion',
    component: Administracion
},

{
    path: '/*',
    name: 'NotFound',
    component: NotFound
}
]

const router = new VueRouter({
mode: 'history',
base: process.env.BASE_URL,
routes
})

export default router
