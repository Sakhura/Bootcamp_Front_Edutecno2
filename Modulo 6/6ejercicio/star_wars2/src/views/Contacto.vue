<template>
    <div>
        <h1 class="titulos">Contacto</h1>
        <p class="titulos">Para contactarnos puedes escribirnos</p>
        <div class="container">
            <form>
                <label style="color: white;" >Nombre Completo </label>
                <input type="text">

                <label style="color: white;">Correo electrónico</label>
                <input type="text">

                <label style="color: white;" for="subject">Mensaje</label>
                <textarea id="subject" style="height:200px"></textarea>

                <input type="submit" value="Enviar">
            </form>
        </div>
    </div>
</template>

<script>

</script>
<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;  
  padding: 20px;
}
.titulos{
    padding: 20px;
    color: white;
    text-align: center;

}

</style>