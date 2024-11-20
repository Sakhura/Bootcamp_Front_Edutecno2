<template>
  <HomePage msg="HomePage"/>
  <navBar msg="NavBar"/>
</template>
 
<script>
import navBar from './components/navBar.vue'
import HomePage from './views/HomePage.vue';

 
export default {
  name: 'App',
  components: {
    
    navBar,
    HomePage
  }
}
</script>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>