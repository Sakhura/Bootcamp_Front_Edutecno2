<template>
    <div class="image-details">
        <button @click="$emit('close')">Cerrar</button>
        <img :src="photo.url" :alt="photo_desc"/>
        <p><strong>Autor</strong> {{ photo.author }}</p>
        <p><strong>Descripcion: </strong> {{ photo.author }}</p>
    </div>
</template>

<script>
    export default{
        props: {
            photo: Object,
        },
    };
</script>

<style scoped>
.image_details {
    border: 1pn solid #ccc;
    padding: 20px;
    margin-top: 10px;
}

button {
    margin-bottom: 10px;
}

img{
    max-width: 200px;
}
</style>