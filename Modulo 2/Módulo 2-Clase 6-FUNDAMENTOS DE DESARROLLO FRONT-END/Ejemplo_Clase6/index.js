// Seleccionar el formulario
const formulario = document.querySelector('.formulario');

// Agregar evento de envío al formulario
formulario.addEventListener('submit', (e) => {
  // Prevenir el envío del formulario por defecto
  e.preventDefault();

  // Seleccionar los campos del formulario
  const correo = document.querySelector('#exampleInputEmail1').value;
  const clave = document.querySelector('#exampleInputPassword1').value;
  const recuerdame = document.querySelector('#exampleCheck1').checked;

  // Validar los campos del formulario
  if (correo === '' || clave === '') {
    alert('Por favor, complete todos los campos');
    return;
  }

  // Enviar los datos del formulario a un servidor o API
  // Aquí puedes agregar la lógica para enviar los datos
  console.log('Datos del formulario:');
  console.log(`Correo: ${correo}`);
  console.log(`Clave: ${clave}`);
  console.log(`Recuerdame: ${recuerdame}`);

  // Limpiar los campos del formulario
  document.querySelector('#exampleInputEmail1').value = '';
  document.querySelector('#exampleInputPassword1').value = '';
  document.querySelector('#exampleCheck1').checked = false;
});