$(function () {
    const gestionarMensaje = () => {
        let nombre = document.getElementById('form_name').value
        let apellido = document.getElementById('form_lastname').value
        let email = document.getElementById('form_email').value
        let motivo = document.getElementById('form_need').value
        let mensaje = document.getElementById('form_message').value
        return (`DE: ${nombre} ${apellido} (${email}) \n\tASUNTO: ${motivo} \n\tMENSAJE:\n\t${mensaje}`)
    }
    $('#send').click(function () {
        alert(gestionarMensaje())
    })





});