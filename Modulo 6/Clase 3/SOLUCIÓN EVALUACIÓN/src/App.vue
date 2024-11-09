<template>
  <div id="app">
    <buscador :listaProductos="productos">
    @agrega:"agregarJuego"
    @buscador:"buscarJuego"
    </buscador>
  

  </div>

</template>
<script>
import buscador from "./components/buscador.vue";


export default {
  name: 'App',
  components: {
    buscador,
 
  },

  data: function () {
    return {
      productos: ['Arena of valor', 'Pokemon Unite', 'Pou']
    }
  },
  methods: {
    agregarJuego() {
      console.log("diste click")
  
    },
    buscarJuego(){
     
    }

  }
}



</script>

<style>
</style>
