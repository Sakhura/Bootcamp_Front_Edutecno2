import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Personajes from '../views/Personajes.vue'
import Personaje from '../views/Personaje.vue'
import Contacto from '../views/Contacto.vue'
import NotFound from '../views/NotFound.vue'

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
        component: Personajes,
        alias:['/people', '/characters']
    },
    {
        path: '/personajes/:id',
        name: 'Personaje',
        component: Personaje,
        props: true,
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: Contacto
    },
    {
        path: '/*',
        name: 'NotFound',
        component: NotFound
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router