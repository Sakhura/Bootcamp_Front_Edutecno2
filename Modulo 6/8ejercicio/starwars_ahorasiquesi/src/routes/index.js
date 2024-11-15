import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes =[
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    },
    {
        path: '/personajes',
        name: 'Personajes',
        component: () => import(/* webpackChunkName: "Personajes" */ '../views/Personajes.vue'),
        alias: ['/people', '/characteres']
    },
    {
        path: '/personajes/:id',
        name: 'Personaje',
        component: () => import (/* webpackChunkName: "Personaje" */ '../views/Personaje.vue'),
        props:true,
    },

    {
        path: '/contacto',
        name: 'Contacto',
        component: () => import (/* webpackChunkName: "Contacto" */ '../views/Contacto.vue'),
    },
    
    {
        path: '/*',
        name: 'NotFound',
    }

]

export default router