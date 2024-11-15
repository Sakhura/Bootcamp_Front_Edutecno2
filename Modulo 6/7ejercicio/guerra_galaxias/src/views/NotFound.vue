<template>
    <div class="container">
        <h1 style="color: red;">Lo que buscas aqui no esta</h1>
        <p style="color: aliceblue;">{{ route }}</p>
    </div>
</template>

<script>
    export default{
        computed: {
            route() {
                return this.$route.name;
            }
        }
    }
</script>