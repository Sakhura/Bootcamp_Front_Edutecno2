<template>
    <div>
        <div v-if="!showPokemon">

        </div>
       
       <div v-else>
        <h2> {{pokemon.name}} </h2>
       <img></img>
       <p>Tipos: {{pokemon.types.map(type=>.type.name).join(`, `)}}</p>
       <p>Altura: {{ pokemon.height}}</p>
       <p>Peso: {{pokemon.weight}}</p>
       <buttom @click="showPokemon = false">Volver</buttom>
       </div>
    </div>
</template>


<script>
import axios from 'axios';

export default{
	//su codigo
	method:{
		//codigo
		
		getPokemonDetails(name){
			axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then(response => {
				this.pokemon = response.data;
			})
			.cath(error => {
				cpnsole.error(error)
			});
		}
}

}
</script>