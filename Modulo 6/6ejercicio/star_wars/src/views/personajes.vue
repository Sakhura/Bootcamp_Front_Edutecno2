<template>
    <div class="container">
      <h1 class="titulo">Personajes </h1>
      <div> 
       <button v-on:click="cambiarPagina(page +1)"
       >Buscar más personajes</button>
  
  </div>
        <div class="row align-self-center">
          <div class="col tabla col-3 align-self-center" style="color: yellow; margin: 10px;"
            v-for="(per, index) in personajes" :key="index">
            {{ per.name }}
          </div>
        </div>
  
  
      <button @click="home">Home</button>
  
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    components: {
     
    },
    data: function () {
      return {
        personajes: [],
        page:1,
        pages:1
      }
    },
    methods: {
      getPersonajes() {
        const params = {
          page: this.page
        }
        axios.get("https://swapi.dev/api/people/", {params}).then((resp) => {
          this.personajes = resp.data.results
                   this.pages = resp.data.next
        
        })
      },
      cambiarPagina(page){
        this.page = (page <= 0 || page > this.pages) ? this.page : page
        this.getPersonajes()
  
      },
  
      home() {
        this.$router.push('/')
  
      }
    },
    created() {
      this.getPersonajes()
    }
  
  }
  </script>
  
  <style>
  .titulo {
    color: yellow;
    text-align: center;
    padding: 40px;
  }
  
  
  .tabla {
    border: 1px solid white;
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
  }
  
  .tabla.center {
    margin-left: auto;
    margin-right: auto;
  }
  
  
  
  
  </style>