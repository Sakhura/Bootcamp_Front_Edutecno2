<template>
    <div class="container">
        <h1 style="color:white ;">Lo que buscas no esta aquí</h1>
        <p style="color:white ;" >{{route}}</p>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      route () {
        return this.$route.name
      }
    }
  }
  </script>