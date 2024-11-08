// Función para determinar si es un buen momento para organizar un picnic
function determinarBuenMomento(tempActual, lluvia, tiempoLibre) {
    let mensaje = '';

    if (!isNaN(tempActual) && !isNaN(tiempoLibre)) {
        tempActual = parseFloat(tempActual);
        tiempoLibre = parseInt(tiempoLibre);

        if (tempActual >= 12 && tempActual <= 30) {
            if (lluvia === 'no' && tiempoLibre >= 90) {
                mensaje = '¡Es un buen momento para organizar un picnic!';
            } else if (lluvia === 'sí') {
                mensaje = 'El clima no es ideal, está lloviendo.';
            } else if (tiempoLibre < 90) {
                mensaje = 'El tiempo disponible es muy poco para un picnic.';
            } else {
                mensaje = 'El clima no es ideal para un picnic en este momento.';
            }
        } else if (tempActual < 12) {
            mensaje = 'Hace mucho frío para un picnic en este momento.';
        } else {
            mensaje = 'Hace mucho calor, la exposición al sol puede ser peligrosa.';
        }
    } else {
        mensaje = 'Ingresa valores numéricos válidos para temperatura y tiempo libre.';
    }
    alert(mensaje);
}


// Función principal para obtener la entrada del usuario
function planificarPicnic() {

    let tempActual, lluvia, tiempoLibre;
    // Bucle para validar la temperatura
    do {
        tempActual = prompt('¿Cuál es la temperatura actual en grados Celsius?');
    } while (isNaN(parseFloat(tempActual)));

    // Bucle para validar la respuesta sobre lluvia
    do {
        lluvia = prompt('¿Está lloviendo? (responde sí o no)').toLowerCase();
    } while (lluvia !== 'sí' && lluvia !== 'no' && lluvia != 'si');

    // Bucle para validar el tiempo libre
    do {
        tiempoLibre = prompt('¿Cuántos minutos tienes disponible para el picnic?');
    } while (isNaN(parseInt(tiempoLibre)));

    determinarBuenMomento(tempActual, lluvia, tiempoLibre);
}

// Llamada a la función principal
planificarPicnic();



