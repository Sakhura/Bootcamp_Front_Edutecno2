<template>
    <div class="container">

        <p>Buscar producto</p>
        <form class="example" style="margin:auto;max-width:800px">
            <input type="text" placeholder="Buscar..." v-model="search">
            <button @click="buscador"><i class="fa fa-search"></i></button>
        </form>

        <ul>
            <li v-for="producto in listaProductos" :key="producto">
                {{ producto }}
                <button @click="agregar" class="btn btn-add">Agregar</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            search: "",
              productos: ['Arena of valor', 'Pokemon Unite', 'Pou']
        }
    },
    props: {
        listaProductos: Array

    },
    methods: {

        buscador(){

             console.log(this.productos.find(el => el === this.search))

            //            this.emit('busca', this.search)            this.search = ""

        },


        agregar(){
            this.$emit('agrega', this.search)
            
        }

      
    }
}
</script>

<style scoped>
body {
    font-family: Arial;
}

* {
    box-sizing: border-box;
}

form.example input[type=text] {
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 50%;
    background: #f1f1f1;
}

form.example button {
    float: left;
    width: 20%;
    padding: 10px;
    background: #2196F3;
    color: white;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none;
    cursor: pointer;
}

form.example button:hover {
    background: #0b7dda;
}

form.example::after {
    content: "";
    clear: both;
    display: table;
}
</style>