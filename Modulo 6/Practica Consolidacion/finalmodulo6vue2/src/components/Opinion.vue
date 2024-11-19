<template>
    <div class="container">
        <h3 style="margin:30px;text-align: center">Escribe tu opinion para el juego: {{id}} </h3>
    </div>
</template>

<script>
export default{
  data() {
    return {      
    }
  }, 
    computed:{
    id(){
      return this.$route.params.id
    }
  },
  created(){
    this.nombreJuego = `https://api.rawg.io/api/games?dates=2019-09-01%2C2019-09-30&key=1b401d34f5474ded8af3451186dd25f6&page=2&platforms=20%2C1%2C7/${this.id}`
  }
}
</script>