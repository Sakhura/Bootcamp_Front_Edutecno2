<template>
    <div >       
        <div class="container">

      
        <table>
            <tr>              
                <th>Nombre</th>              
            </tr>
              <tr>                
                <td>{{ personaje.name }}</td>                
            </tr>
             <tr>                
                <td>Género</td>                  
            </tr>          
            <tr>            
                <td>{{ personaje.gender }}</td>             
            </tr>
            <tr>            
                <td>Altura</td>             
            </tr>
            <tr>              
                <td>{{ personaje.height }}</td>              
            </tr>
            <tr>            
                <td>Número de películas</td>             
            </tr>

             <tr>              
                <td > {{personaje.films.length}}  </td>              
            </tr>

               </table>
          </div>

    </div>
</template>
<script>
import axios from 'axios'
export default {
    props:['id'],
    data() {
        return {
            personaje: '',
        }
    },
    computed: {
      
    },
    methods: {
        fetchPersonajes() {
            axios.get(`https://swapi.dev/api/people/${this.id}`)
                .then(res => {
                    this.personaje = res.data
                })
                .catch(error => {
                    console.log(error)
                })
        },

      
    },

    peliculas(){
        let cantidad = this.personaje.films.length
        console.log(cantidad)
    },
    created() {
        this.fetchPersonajes()
    }
}

</script>

<style>
table {
  border-collapse: collapse;
margin: 80px;
  width: 50%;
  border: 1px solid rgb(190, 189, 189);
  color: yellow;
background-color: rgb(121, 117, 117);

}

th, td {
  text-align: center;
  padding: 16px;

}

tr:nth-child(even) {
  background-color: #080808;
  color: white;
}
</style>
