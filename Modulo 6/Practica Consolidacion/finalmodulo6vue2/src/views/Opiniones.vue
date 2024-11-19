<template>
    <div class="container">

        <!-- hijo opinion -->
        <Opinion></Opinion>



        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre:</label>
            <input type="nombre" class="form-control" id="exampleFormControlInput1" placeholder="nombre"
                v-model="nombre">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Opinión</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                placeholder="Tú opinión debe ir aquí..." v-model="opinion"></textarea>
        </div>
        <div>
            <button type="submit" class="btn btn-info" @click="submitF"> {{ (indice !== -1) ? 'Actualizar'
                    : 'Agregar'
            }}</button>
        </div>

        <h2 class="titulo">A continuación podrás ver tu opinión</h2>
        <div >
        <div v-if="(opiniones == '')" class="alert alert-danger" role="alert" style="text-align: left">No existen opiniones para mostrar.</div>
            <div v-else  class="accordion" id="accordionExample" style="padding-bottom:50px" v-for="(op, index) in opiniones"
                :key="index">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Opinión creada por: {{ op.nombre }}
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Opinión.</strong> {{ op.opinion }}
                        </div>
                        <button type="button" class="btn btn-danger" style="margin-right:20px"
                            @click="eliminar(index)">Eliminar</button>
                        <button type="button" class="btn btn-warning" style="margin-left:20px"
                            @click="editar(index)">Editar</button>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>
<script>
import Opinion from "@/components/Opinion.vue"
export default {
    name: 'App',

    components: {
        Opinion
    },


    data: () => ({
        opiniones: [],
        nombre: "",
        opinion: "",
       
        indice: -1
        //
    }),
    methods: {
        agregarOpinion() {
            this.opiniones.push({
                nombre: this.nombre,
                opinion: this.opinion,
            })
            this.nombre = '',
                this.opinion = ''
        },

        eliminar(index) {
            this.opiniones.splice(index, 1)

        },
        editar(index) {
            this.mostrar = true
            var opi = this.opiniones[index]
            this.indice = index
            this.nombre = opi.nombre
            this.opinion = opi.opinion
        },

        submitF() {
            if (this.indice === -1) {
                this.agregarOpinion()
            } else {
                this.guardarActualizacion()
            }
        },

        guardarActualizacion() {
            this.opiniones[this.indice] = {
                nombre: this.nombre,
                opinion: this.opinion,
            }
            this.limpiar()

        },
        limpiar() {
            this.indice = -1
            this.nombre = '',
                this.opinion = ''
        }

    },

};
</script>
<style scoped>
.titulo {
    text-align: center;
    margin: 30px;
}
</style>