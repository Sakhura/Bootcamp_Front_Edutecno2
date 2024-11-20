<template>
    <div class="home">
      <div class="container">
        <h1 style="margin:20px">Lista de Juegos Disponibles</h1>
  
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="game in games" :key="game.id">
            <div class="card">
              <img :src="game.background_image" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ game.name }} </h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Rating: {{ game.rating }} </li>
                <li class="list-group-item">Released: {{ game.released }}</li>
                <li class="list-group-item">Update: {{ game.updated }} </li>
              </ul>
              <div class="card-body">
  
  
                <router-link :to="{ name: 'Opiniones', params: { id: game.name } }">
                  <button type="button" class="btn btn-primary"
                    data-bs-whatever="@mdo">Opinar</button>
                </router-link>
  
              
                <router-link :to="{ name: 'Administracion', params: { id: game.name } }">
                  <button class="btn btn-lg" style="color:red"><i class="fas fa-heart"></i></button>
                </router-link>
  
                     <!-- <button type="button" class="btn btn-primary" @click="rutaOpiniones()">opionar</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  
  export default {
    name: 'HomePage',
    components: {
      // HelloWorld
  
    },
    data() {
      return {
        games: [],
        opiniones: [],
        nombre: "",
        opinion: ""
  
      }
    },
  
    computed:{
     
    },
    methods: {
      obtenerDatos() {
        axios.get(`https://api.rawg.io/api/games?dates=2019-09-01%2C2019-09-30&key=1b401d34f5474ded8af3451186dd25f6&page=2&platforms=20%2C1%2C7/`)
          .then((resp) => {
            this.games = resp.data.results
          })
      },
  
    
  
  
  
      // rutaOpiniones() {
      //   this.$router.push('opiniones')
      // },
  
      agregarOpinion() {
        this.opiniones.push({
          nombre: this.nombre,
          opinion: this.opinion,
        })
        this.$router.push('opiniones')
        this.nombre = '',
          this.opinion = ''
      }
    },
    created() {
      this.obtenerDatos()
    }
  
  }
  </script>
  
  <style scoped>
  .container {
    padding-top: 40px;
    padding-bottom: 40px;
  
  }
  </style>>
  
  
  
  
  