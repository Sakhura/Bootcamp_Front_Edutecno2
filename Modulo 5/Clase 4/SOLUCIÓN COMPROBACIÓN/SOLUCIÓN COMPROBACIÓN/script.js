$(function () {
  $('button').click(function () {
    // 1 - input
    var nombre = $('#nombre').val()
    var apellido = $('#apellido').val()
    var telefono = $('#telefono').val()
    var correo = $('#correo').val()
    var nota = $('#nota').val()

    // 2 - add to an array
    var atributos = [];
    atributos.push(nombre, apellido, telefono, correo, nota)

    // let contacto = new Set([...atributos])

    function Contacto(first, last, cell, email, note) {
      this.nombre = first;
      this.apellido = last;
      this.telefono = cell;
      this.correo = email;
      this.nota = note;
    }
    // creates a new contact WITH SPREAD OPERATOR
    const contact1 = new Contacto(...atributos);

    // shows contact info WITH DESTRUCTURING USING AN ALIAS FOR FULLNAME
    const { nombreCompleto = `${nombre} ${apellido}` } = contact1;
    $('#here').text(`Nombre: ${nombreCompleto}\nEmail:${correo}\n${telefono}`) 
  })
})