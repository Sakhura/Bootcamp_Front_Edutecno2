<template>
  <div class="general">
    <ul class="nav" style="background-color:yellow;">
            <li class="nav-item">                
                <router-link class="nav-link" to="/">Inicio | </router-link>                 
            </li>
            <li class="nav-item">              
                <router-link class="nav-link" to="/personajes">Personajes |</router-link>
            </li>
            <li class="nav-item">                
                <router-link class="nav-link" to="/contacto">Contacto</router-link>
            </li>         
        </ul>
 
    <router-view/>
  </div>
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.general{
  background-color: black;
  width: 100%;
  height: 100%;
  position: absolute;

}




</style>
