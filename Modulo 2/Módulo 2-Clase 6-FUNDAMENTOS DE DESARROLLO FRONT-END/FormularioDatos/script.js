$(document).ready(function() {
    $('#formulario').submit(function(e) {
      e.preventDefault();
      var nombre = $('#nombre').val();
      var apellido = $('#apellido').val();
      var correo = $('#correo').val();
      var telefono = $('#telefono').val();
      var direccion = $('#direccion').val();
      var ciudad = $('#ciudad').val();
      console.log('Datos del formulario:');
      console.log('Nombre: ' + nombre);
      console.log('Apellido: ' + apellido);
      console.log('Correo: ' + correo);
      console.log('Teléfono: ' + telefono);
      console.log('Dirección: ' + direccion);
      console.log('Ciudad: ' + ciudad);
    });
  });