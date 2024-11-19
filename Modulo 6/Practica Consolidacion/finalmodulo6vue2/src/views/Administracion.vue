<template>
  <div class="container">

    <h2>para ver la informacion ingresa tus datos</h2>
    <button type="button" @click="datos()" class="btn btn-success" style="margin:30px;">Ingresar Datos</button>

    <div v-if="this.nombre && this.apellido != null">

      <div class="sidenav">

        <img class="avatar"
          src="https://www.eleconomista.com.mx/export/sites/eleconomista/arte/avatar-usuario-generico.png_423682103.png"
          alt="">
        <p> {{ getDatos }} </p>

      </div>

      <div class="main">
        <h2>Resumen de tu cuenta</h2>
        <p style="font-size:25px">Le diste me gusta al juego <strong> {{ id }}</strong> </p>

        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">

            <div class="col-md-12">
              <div class="card-body">


                <h5 class="card-title">¿Deseas comprar coins para este juego?</h5>
                <br>
                <button style="margin-left: 150px;" type="button" class="btn btn-warning" @click="cont()"><i
                    class="fas fa-coins"></i> Agregar coins</button>
                <hr>
                <p class="card-text">Cantidad de coins comprados</p>

                <div class="progress">
                  <div class="progress-bar" role="progressbar" :style="{ 'width': contador + '%' }" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100" :class="color"> $ {{ contador }}</div>
                </div>

                <p v-if="contador == maximo" class="card-text"><small class="text-muted">Llegaste al máximo de tu
                    crédito</small></p>
              </div>
            </div>
          </div>
        </div>

        <br>

        <div class="card-group">
          <div class="card text-dark bg-warning mb-3" style="max-width: 18rem;">
            <div class="card-header">% de finalización de juego</div>
            <div class="card-body">
              <p class="card-text">17% <i class="far fa-star-half"></i></p>
            </div>
          </div> 
          <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
            <div class="card-header">Logros en el juego</div>
            <div class="card-body">
              <p class="card-text">166 <i class="fas fa-trophy"></i></p>
            </div>
          </div>
          <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
            <div class="card-header">Recompensas</div>
            <div class="card-body">
              <p class="card-text">200 <i class="fas fa-award"></i></p>
            </div>
          </div>
        </div>




      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
      maximo: 50,
      disable: false,
      nombre: "",
      apellido: "",

    }
  },
  methods: {
    cont() {

      if (this.contador < this.maximo) {
        this.disable = true
        this.contador++
      } else {
        this.disable = false

      }

    },

    datos() {
      let nombre = prompt("Ingrese nombre");
      let apellido = prompt("Ingrese apellido");
      this.nombre = nombre;
      this.apellido = apellido;
    },

    // limpiarDatos(){
    //   this.nombre = ''
    //         this.apellido = ''

    // }

  },
  computed: {
    id() {
      return this.$route.params.id
    },

    getDatos() {
      return "Bienvenid@ " + this.nombre + " " + this.apellido
    },
    color() {
      return {
        'bg-success': this.contador <= 20,
        'bg-warning': this.contador > 20 && this.contador < 30,
        'bg-danger': this.contador >= 30
      }
    }


  },

  created() {
    `https://api.rawg.io/api/games?dates=2019-09-01%2C2019-09-30&key=1b401d34f5474ded8af3451186dd25f6&page=2&platforms=20%2C1%2C7/${this.id}`
  }
}
</script>

<style>
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 190px;
  position: fixed;
  z-index: 1;
  top: 180px;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav p {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.main {
  margin-left: 140px;
  /* Same as the width of the sidenav */
  font-size: 28px;
  /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }

}

/* Style the tab */
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 10px;
  margin-left: 48px;
}
</style>
